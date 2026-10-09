"use client";

import { useMemo, useState } from "react";
import { submitBookingAction, type BookingActionState } from "@/src/lib/actions";

const steps = [
  "Client details",
  "Event details",
  "Service selection",
  "Review & submit",
];

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  whatsapp: "",
  preferredContact: "WhatsApp",
  bookingType: "Individual",
  eventType: "Wedding",
  eventTitle: "",
  eventDate: "",
  eventTime: "",
  city: "",
  state: "Lagos",
  venueName: "",
  expectedGuests: "",
  services: "Wedding Photography",
  packageType: "Signature Wedding",
  budget: "₦250,000 - ₦500,000",
  notes: "",
  acceptedPolicy: "on",
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function CheckMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto h-12 w-12 text-[#B69A68]">
      <path d="M5 12.5 9.5 17 19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<BookingActionState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentStep = steps[step];

  const progress = useMemo(() => (((step + 1) / steps.length) * 100).toFixed(0), [step]);

  const updateField = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const previousStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const isLastStep = step === steps.length - 1;

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));

    setIsSubmitting(true);
    const result = await submitBookingAction(null, formData);
    setStatus(result);
    setIsSubmitting(false);

    if (result.success) {
      setStep(steps.length - 1);
    }
  };

  if (status?.success) {
    return (
      <div className="rounded-3xl border border-[#D8D0C2] bg-[#F7F5F0] p-8 text-center shadow-[0_20px_60px_rgba(23,23,23,0.06)]">
        <CheckMark />
        <h3 className="mt-5 text-3xl font-serif text-[#171717]">Booking request received</h3>
        <p className="mt-3 text-base text-[#4D4A46]">
          {status.message} Your reference is <strong>{status.bookingRef}</strong>.
        </p>
        <p className="mt-4 text-sm text-[#77736D]">
          We will review your request and contact you to confirm the next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-[#EAE1D6] bg-white p-6 shadow-[0_30px_70px_rgba(23,23,23,0.08)]">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#77736D]">Booking</p>
          <h3 className="mt-2 text-2xl font-serif text-[#171717]">{currentStep}</h3>
        </div>
        <div className="text-sm text-[#77736D]">{progress}%</div>
      </div>

      <div className="mb-8 h-2 overflow-hidden rounded-full bg-[#F0EAE2]">
        <div className="h-full rounded-full bg-[#B69A68] transition-all" style={{ width: `${progress}%` }} />
      </div>

      {step === 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm text-[#171717]">
            Full name
            <input value={values.fullName} onChange={(e) => updateField("fullName", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717]">
            Email address
            <input type="email" value={values.email} onChange={(e) => updateField("email", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717]">
            Phone number
            <input value={values.phone} onChange={(e) => updateField("phone", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717]">
            WhatsApp number
            <input value={values.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717]">
            Preferred contact method
            <select value={values.preferredContact} onChange={(e) => updateField("preferredContact", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5">
              <option>WhatsApp</option>
              <option>Phone</option>
              <option>Email</option>
            </select>
          </label>
          <label className="block text-sm text-[#171717]">
            Booking type
            <select value={values.bookingType} onChange={(e) => updateField("bookingType", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5">
              <option>Individual</option>
              <option>Company</option>
            </select>
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm text-[#171717] md:col-span-2">
            Event type
            <input value={values.eventType} onChange={(e) => updateField("eventType", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717] md:col-span-2">
            Event title or brief description
            <input value={values.eventTitle} onChange={(e) => updateField("eventTitle", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717]">
            Event date
            <input type="date" value={values.eventDate} onChange={(e) => updateField("eventDate", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717]">
            Event time
            <input type="time" value={values.eventTime} onChange={(e) => updateField("eventTime", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717]">
            City
            <input value={values.city} onChange={(e) => updateField("city", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717]">
            State
            <input value={values.state} onChange={(e) => updateField("state", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717] md:col-span-2">
            Venue name
            <input value={values.venueName} onChange={(e) => updateField("venueName", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717] md:col-span-2">
            Expected guests
            <input value={values.expectedGuests} onChange={(e) => updateField("expectedGuests", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm text-[#171717] md:col-span-2">
            Service requirement
            <input value={values.services} onChange={(e) => updateField("services", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717] md:col-span-2">
            Package preference
            <input value={values.packageType} onChange={(e) => updateField("packageType", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
          <label className="block text-sm text-[#171717] md:col-span-2">
            Budget range
            <select value={values.budget} onChange={(e) => updateField("budget", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5">
              <option>₦100,000 - ₦250,000</option>
              <option>₦250,000 - ₦500,000</option>
              <option>₦500,000 - ₦1,000,000</option>
              <option>Above ₦1,000,000</option>
            </select>
          </label>
          <label className="block text-sm text-[#171717] md:col-span-2">
            Extra notes
            <textarea value={values.notes} onChange={(e) => updateField("notes", e.target.value)} rows={4} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" />
          </label>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 rounded-2xl bg-[#F8F4EF] p-5">
          <div className="flex justify-between border-b border-[#E5DED4] pb-3 text-sm text-[#171717]">
            <span>Client</span>
            <strong>{values.fullName}</strong>
          </div>
          <div className="flex justify-between border-b border-[#E5DED4] pb-3 text-sm text-[#171717]">
            <span>Event</span>
            <strong>{values.eventTitle}</strong>
          </div>
          <div className="flex justify-between border-b border-[#E5DED4] pb-3 text-sm text-[#171717]">
            <span>Date</span>
            <strong>{values.eventDate}</strong>
          </div>
          <div className="flex justify-between border-b border-[#E5DED4] pb-3 text-sm text-[#171717]">
            <span>Location</span>
            <strong>{values.city}, {values.state}</strong>
          </div>
          <div className="flex justify-between border-b border-[#E5DED4] pb-3 text-sm text-[#171717]">
            <span>Service</span>
            <strong>{values.services}</strong>
          </div>
          <div className="flex justify-between pb-1 text-sm text-[#171717]">
            <span>Estimated bill</span>
            <strong>₦450,000</strong>
          </div>
          <label className="mt-4 flex items-start gap-3 text-sm text-[#171717]">
            <input type="checkbox" checked={values.acceptedPolicy === "on"} onChange={(e) => updateField("acceptedPolicy", e.target.checked ? "on" : "") } className="mt-1 h-4 w-4" />
            <span>I have read and accepted the booking policy and privacy notice.</span>
          </label>
        </div>
      )}

      {status && !status.success && (
        <div className="mt-4 rounded-xl border border-[#E7B7B1] bg-[#FFF4F1] px-4 py-3 text-sm text-[#6D2C2B]">
          {status.message}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button type="button" onClick={previousStep} disabled={step === 0} className="inline-flex items-center gap-2 rounded-full border border-[#D9D2C8] px-4 py-2 text-sm font-medium text-[#171717] disabled:cursor-not-allowed disabled:opacity-40">
          <ArrowIcon direction="left" /> Back
        </button>

        {isLastStep ? (
          <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-2.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Submitting..." : "Submit request"}
            <ArrowIcon direction="right" />
          </button>
        ) : (
          <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 rounded-full bg-[#B69A68] px-5 py-2.5 text-sm font-medium text-[#171717]">
            Continue
            <ArrowIcon direction="right" />
          </button>
        )}
      </div>
    </div>
  );
}
