"use server";

import { revalidatePath } from "next/cache";
import { bookingSchema, createBooking } from "@/src/lib/booking";

export type BookingActionState =
  | { success: false; message: string; errors?: Record<string, string> }
  | { success: true; message: string; bookingRef?: string };

export async function submitBookingAction(_prevState: BookingActionState | null, formData: FormData): Promise<BookingActionState> {
  const values = Object.fromEntries(formData.entries());

  const parsed = bookingSchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please review the highlighted fields and try again.",
      errors: Object.fromEntries(
        Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0] ?? ""]),
      ),
    };
  }

  try {
    const booking = await createBooking(parsed.data);
    revalidatePath("/admin");
    return {
      success: true,
      message: "Your booking request has been received. Our team will review it shortly.",
      bookingRef: booking.reference,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "We could not save your booking request. Please try again in a moment.",
    };
  }
}
