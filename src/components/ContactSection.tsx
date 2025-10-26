import React, { useEffect, useRef, useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

/* ----------------------
   Tiny in-view hook + Reveal (no libs)
-----------------------*/
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options ?? { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  return [ref, inView] as const;
}

interface RevealProps {
  children: React.ReactNode; // 👈 must add this line
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({
  delay = 0,
  className = "",
  children,
}) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out 
                  motion-reduce:transition-none motion-reduce:transform-none
                  ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                  ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ----------------------
   Types & helpers
-----------------------*/
interface FormDataShape {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}
function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
}
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const NAME_RE = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/;

const CONTACT_ENDPOINT =
  (typeof import.meta !== "undefined" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (import.meta as any)?.env?.VITE_CONTACT_ENDPOINT) ||
  "";
const MAIL_TO = "tush@jordan.com";

/* ----------------------
   Component
-----------------------*/
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormDataShape>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName.trim()) errs.firstName = "First name is required";
    else if (firstName.trim().length > 50) errs.firstName = "Max 50 characters";
    else if (!NAME_RE.test(firstName.trim()))
      errs.firstName = "Use letters, spaces, apostrophes, or hyphens";

    if (!lastName.trim()) errs.lastName = "Last name is required";
    else if (lastName.trim().length > 50) errs.lastName = "Max 50 characters";
    else if (!NAME_RE.test(lastName.trim()))
      errs.lastName = "Use letters, spaces, apostrophes, or hyphens";

    if (!email.trim()) errs.email = "Email is required";
    else if (email.length > 100) errs.email = "Email too long";
    else if (!EMAIL_RE.test(email)) errs.email = "Invalid email";

    if (!phone.trim()) errs.phone = "Phone number is required";
    else {
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15)
        errs.phone = "Enter a valid phone number (7–15 digits)";
    }

    if (!message.trim()) errs.message = "Message is required";
    else if (message.length > 500) errs.message = "Max 500 characters";

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const buildMailtoUrl = (to: string, subject: string, body: string) => {
    return `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setSubmitState("sending");
    setStatusMsg("");

    try {
      if (CONTACT_ENDPOINT) {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        setSubmitState("success");
        setStatusMsg("Thanks! Your message has been sent.");
      } else {
        const subject = "New contact message from the website";
        const body = [
          `Name: ${formData.firstName} ${formData.lastName}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone}`,
          "",
          "Message:",
          formData.message,
        ].join("\n");
        window.location.href = buildMailtoUrl(MAIL_TO, subject, body);
        setSubmitState("success");
        setStatusMsg("Please send the email in your mail app (prefilled).");
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      setSubmitState("error");
      setStatusMsg(getErrorMessage(err) || "Failed to send message.");
      console.error(err);
    } finally {
      setTimeout(() => {
        if (submitState !== "error") setSubmitState("idle");
      }, 3000);
    }
  };

  return (
    <section
      id='contact'
      role='region'
      aria-labelledby='contact-heading'
      className='relative font-sans bg-gradient-to-b from-white to-slate-50 py-16 md:py-24 lg:py-28 overflow-hidden'
    >
      {/* Decorative background */}
      <div
        className='pointer-events-none absolute inset-0 -z-10 flex justify-center blur-3xl opacity-30'
        aria-hidden='true'
      >
        <div className='h-[420px] w-[420px] rounded-full bg-indigo-300/30 motion-safe:animate-pulse' />
      </div>

      <div className='mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl px-6 lg:px-8'>
        {/* Heading */}
        <Reveal className='text-center mb-10 md:mb-14 lg:mb-16'>
          <h2
            id='contact-heading'
            className='font-serif font-bold tracking-tight text-slate-800
                       text-[clamp(1.875rem,3.4vw,2.75rem)] leading-[1.1]'
          >
            Get In Touch
          </h2>
          <p className='mt-3 text-slate-600 text-[clamp(1rem,1.2vw,1.125rem)]'>
            We usually reply within 24 hours.
          </p>
        </Reveal>

        {/* Responsive grid:
            - mobile: 1 col
            - md (≥768): 12 cols, 5/7 split
            - xl: 4/8 split for better desktop fit
        */}
        <div className='grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 md:grid-cols-12 items-start'>
          {/* Left column (info) */}
          <aside className='md:col-span-5 xl:col-span-4 md:sticky md:top-24 space-y-6'>
            <Reveal>
              <span className='inline-block text-xs font-semibold text-slate-500 uppercase tracking-wider'>
                Contact Us
              </span>
            </Reveal>

            <div className='space-y-6'>
              <Reveal>
                <div className='flex items-start gap-4 group'>
                  <div className='w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5'>
                    <FiMapPin className='text-indigo-700 w-5 h-5' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-slate-800 mb-1 text-[clamp(1rem,1.1vw,1.125rem)]'>
                      Location
                    </h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Dalian, Liaoning
                      <br />
                      China
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div className='flex items-start gap-4 group'>
                  <div className='w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5'>
                    <FiPhone className='text-indigo-700 w-5 h-5' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-slate-800 mb-1 text-[clamp(1rem,1.1vw,1.125rem)]'>
                      Phone
                    </h3>
                    <p className='text-slate-600'>(555) 123-4567</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className='flex items-start gap-4 group'>
                  <div className='w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5'>
                    <FiMail className='text-indigo-700 w-5 h-5' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-slate-800 mb-1 text-[clamp(1rem,1.1vw,1.125rem)]'>
                      Email
                    </h3>
                    <p className='text-slate-600 break-words'>{MAIL_TO}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className='flex items-start gap-4 group'>
                  <div className='w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5'>
                    <FiClock className='text-indigo-700 w-5 h-5' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-slate-800 mb-1 text-[clamp(1rem,1.1vw,1.125rem)]'>
                      Hours
                    </h3>
                    <p className='text-slate-600'>
                      Front desk open 24/7
                      <br />
                      Check-in: 3PM | Check-out: 11AM
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>

          {/* Right column (form) */}
          <Reveal delay={80} className='md:col-span-7 xl:col-span-8'>
            <div className='bg-white/80 backdrop-blur rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-[0_12px_32px_rgba(0,0,0,0.06)]'>
              <h3 className='text-slate-800 font-serif font-semibold mb-6 text-[clamp(1.25rem,1.8vw,1.5rem)]'>
                Send us a Message
              </h3>

              {/* Status / Error banner */}
              <div
                role='status'
                aria-live='polite'
                className={`mb-4 text-sm ${
                  submitState === "success"
                    ? "text-green-700"
                    : submitState === "error"
                    ? "text-red-700"
                    : "text-slate-700"
                }`}
              >
                {statusMsg}
              </div>

              <form className='space-y-4' onSubmit={handleSubmit} noValidate>
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='firstName' className='sr-only'>
                      First Name
                    </label>
                    <input
                      id='firstName'
                      type='text'
                      name='firstName'
                      placeholder='First Name'
                      autoComplete='given-name'
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={submitState === "sending"}
                      aria-invalid={Boolean(errors.firstName)}
                      aria-describedby={
                        errors.firstName ? "firstName-error" : undefined
                      }
                      className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 text-[clamp(1rem,1.05vw,1.0625rem)]
                        ${
                          errors.firstName
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                        }`}
                    />
                    {errors.firstName && (
                      <p
                        id='firstName-error'
                        className='text-red-600 text-sm mt-1'
                      >
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor='lastName' className='sr-only'>
                      Last Name
                    </label>
                    <input
                      id='lastName'
                      type='text'
                      name='lastName'
                      placeholder='Last Name'
                      autoComplete='family-name'
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={submitState === "sending"}
                      aria-invalid={Boolean(errors.lastName)}
                      aria-describedby={
                        errors.lastName ? "lastName-error" : undefined
                      }
                      className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 text-[clamp(1rem,1.05vw,1.0625rem)]
                        ${
                          errors.lastName
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                        }`}
                    />
                    {errors.lastName && (
                      <p
                        id='lastName-error'
                        className='text-red-600 text-sm mt-1'
                      >
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email Address
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    autoComplete='email'
                    value={formData.email}
                    onChange={handleChange}
                    disabled={submitState === "sending"}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 text-[clamp(1rem,1.05vw,1.0625rem)]
                      ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      }`}
                  />
                  {errors.email && (
                    <p id='email-error' className='text-red-600 text-sm mt-1'>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor='phone' className='sr-only'>
                    Phone Number
                  </label>
                  <input
                    id='phone'
                    type='tel'
                    inputMode='tel'
                    name='phone'
                    placeholder='Phone Number'
                    autoComplete='tel'
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={submitState === "sending"}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 text-[clamp(1rem,1.05vw,1.0625rem)]
                      ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      }`}
                  />
                  {errors.phone && (
                    <p id='phone-error' className='text-red-600 text-sm mt-1'>
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor='message' className='sr-only'>
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Your Message'
                    rows={5}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={submitState === "sending"}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 resize-y min-h-[140px] text-[clamp(1rem,1.05vw,1.0625rem)]
                      ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      }`}
                  />
                  {errors.message && (
                    <p id='message-error' className='text-red-600 text-sm mt-1'>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type='submit'
                  disabled={submitState === "sending"}
                  className='w-full inline-flex items-center justify-center gap-2
                             bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-semibold
                             transition disabled:opacity-50 disabled:cursor-not-allowed
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
                >
                  {submitState === "sending" && (
                    <svg
                      className='h-5 w-5 animate-spin'
                      viewBox='0 0 24 24'
                      fill='none'
                      aria-hidden='true'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      />
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                      />
                    </svg>
                  )}
                  {submitState === "sending"
                    ? "Sending..."
                    : submitState === "success"
                    ? "Message sent!"
                    : "Send Message"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
