"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";

const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

const supportAreas = [
  "Project & Programme Planning",
  "Project Management & Construction Advisory",
  "HSE Advisory",
  "Project & Performance Control",
  "Project Documentation & Information Management",
  "Not sure / Multiple areas",
];

type FieldName = "name" | "email" | "support" | "details";
type Errors = Partial<Record<FieldName, string>>;
type Enquiry = Record<FieldName | "company", string>;

// Replace this local outcome with submission handling once delivery is configured.
function submitEnquiry(enquiry: Enquiry) {
  void enquiry;
  return "Your enquiry has not been sent. Online submission is currently unavailable.";
}

export default function EnquiryForm() {
  // Keep native submission disabled until client-side validation is active.
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const enquiry: Enquiry = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      support: String(data.get("support") ?? ""),
      details: String(data.get("details") ?? "").trim(),
    };
    const nextErrors: Errors = {};
    if (!enquiry.name) nextErrors.name = "Enter your name.";
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (!enquiry.email) nextErrors.email = "Enter your email address.";
    else if (emailInput.validity.typeMismatch) nextErrors.email = "Enter a valid email address.";
    if (!supportAreas.includes(enquiry.support)) nextErrors.support = "Choose an area of support.";
    if (!enquiry.details) nextErrors.details = "Tell us briefly about your project.";
    setErrors(nextErrors);
    setStatus("");
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      requestAnimationFrame(() => {
        (form.elements.namedItem(firstError) as HTMLElement)?.focus();
      });
      return;
    }
    setStatus(submitEnquiry(enquiry));
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={(event) => {
        const target = event.target;
        if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) return;
        const field = target.name as FieldName;
        setErrors((current) => {
          const next = { ...current };
          delete next[field];
          return next;
        });
        setStatus("");
      }}
      className="border-t border-border pt-5"
      aria-label="Project enquiry"
      aria-describedby="submission-notice"
    >
      <p id="submission-notice" className="mb-8 text-sm leading-[1.6] text-muted">
        Online submission is currently unavailable. This form will not send your details.
      </p>
      {Object.keys(errors).length > 0 && (
        <p role="alert" className="mb-7 border-l-2 border-accent pl-3 text-base">
          Please check the highlighted fields below.
        </p>
      )}
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="form-label">Name *</label>
          <input id="enquiry-name" name="name" autoComplete="name" required className="form-control" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-company" className="form-label">Company (optional)</label>
          <input id="enquiry-company" name="company" autoComplete="organization" className="form-control" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="enquiry-email" className="form-label">Email *</label>
          <input id="enquiry-email" name="email" type="email" autoComplete="email" required className="form-control" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="enquiry-support" className="form-label">What do you need support with? *</label>
          <select id="enquiry-support" name="support" required defaultValue="" className="form-control" aria-invalid={!!errors.support} aria-describedby={errors.support ? "support-error" : undefined}>
            <option value="" disabled>Select an area of support</option>
            {supportAreas.map((area) => <option key={area} value={area}>{area}</option>)}
          </select>
          {errors.support && <p id="support-error" className="form-error">{errors.support}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="enquiry-details" className="form-label">Tell us briefly about your project *</label>
          <textarea id="enquiry-details" name="details" rows={6} required className="form-control resize-y" aria-invalid={!!errors.details} aria-describedby={errors.details ? "details-error" : undefined} />
          {errors.details && <p id="details-error" className="form-error">{errors.details}</p>}
        </div>
      </div>
      <button type="submit" disabled={!ready} className="project-link mt-8 inline-flex min-h-12 items-center justify-between gap-8 bg-accent px-5 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60">
        Send Enquiry <span aria-hidden="true" className="motion-arrow">→</span>
      </button>
      <p role="status" className="mt-5 text-base leading-[1.7]">{status}</p>
    </form>
  );
}
