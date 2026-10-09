import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(7, "Phone number is required."),
  whatsapp: z.string().optional().or(z.literal("")),
  preferredContact: z.enum(["Phone", "WhatsApp", "Email"]),
  bookingType: z.enum(["Individual", "Company"]),
  eventType: z.string().min(2, "Event type is required."),
  eventTitle: z.string().min(2, "Event title is required."),
  eventDate: z.string().refine((value) => !Number.isNaN(Date.parse(value)), "Valid event date is required."),
  eventTime: z.string().min(1, "Event time is required."),
  city: z.string().min(2, "City is required."),
  state: z.string().min(2, "State is required."),
  venueName: z.string().optional().or(z.literal("")),
  expectedGuests: z.string().optional().or(z.literal("")),
  services: z.string().min(1, "Select at least one service."),
  packageType: z.string().min(1, "Please select a package option."),
  budget: z.string().min(1, "Budget is required."),
  notes: z.string().optional().or(z.literal("")),
  acceptedPolicy: z.enum(["on"]),
});

export type BookingRecord = z.infer<typeof bookingSchema> & {
  id: string;
  reference: string;
  status: string;
  createdAt: string;
  estimatedBill: string;
};

const jsonPath = path.join(process.cwd(), "data", "bookings.json");

const ensureStore = async () => {
  await fs.mkdir(path.dirname(jsonPath), { recursive: true });
  try {
    await fs.access(jsonPath);
  } catch {
    await fs.writeFile(jsonPath, "[]", "utf-8");
  }
};

export async function getBookings(): Promise<BookingRecord[]> {
  await ensureStore();
  const content = await fs.readFile(jsonPath, "utf-8");
  try {
    const parsed = JSON.parse(content) as BookingRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function generateBookingReference() {
  const date = new Date();
  const sequence = Math.floor(Math.random() * 9000 + 1000);
  return `LBM-${date.getFullYear()}-${sequence}`;
}

export async function createBooking(input: z.infer<typeof bookingSchema>) {
  const record: BookingRecord = {
    ...input,
    id: crypto.randomUUID(),
    reference: generateBookingReference(),
    status: "Pending Review",
    createdAt: new Date().toISOString(),
    estimatedBill: "₦450,000",
  };

  const existing = await getBookings();
  existing.unshift(record);
  await fs.writeFile(jsonPath, JSON.stringify(existing, null, 2), "utf-8");

  return record;
}

export async function getBookingSummary() {
  const bookings = await getBookings();
  return {
    total: bookings.length,
    pending: bookings.filter((booking) => booking.status === "Pending Review").length,
    confirmed: bookings.filter((booking) => booking.status === "Confirmed").length,
  };
}
