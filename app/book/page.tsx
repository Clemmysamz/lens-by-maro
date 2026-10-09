import { BookingForm } from "@/src/components/BookingForm";

export default function BookPage() {
  return (
    <div className="section-shell py-20">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Booking</p>
        <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">Request your date.</h1>
        <p className="mt-4 text-lg text-[#4D4A46]">Submit your event details and our team will review the request before confirming anything.</p>
      </div>
      <BookingForm />
    </div>
  );
}
