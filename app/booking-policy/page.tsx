export default function BookingPolicyPage() {
  return (
    <div className="section-shell py-20">
      <div className="mx-auto max-w-3xl rounded-[30px] border border-[#E5DED3] bg-white p-8 shadow-[0_20px_60px_rgba(23,23,23,0.04)]">
        <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Booking policy</p>
        <h1 className="mt-4 text-5xl font-serif text-[#171717]">Booking and payment terms</h1>
        <div className="mt-8 space-y-4 text-sm text-[#4D4A46]">
          <p>Submitting a booking request is not a confirmation of reservation. All dates are subject to availability and studio review.</p>
          <p>Clients may be asked to pay a deposit or accept a quotation before the date is fully reserved. Additional charges may apply for overtime, travel, equipment, or customised services.</p>
          <p>Final delivery timelines depend on the approved package and editing requirements. All policies and pricing should be confirmed in writing before the project begins.</p>
        </div>
      </div>
    </div>
  );
}
