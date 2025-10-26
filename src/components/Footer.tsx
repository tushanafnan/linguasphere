/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
    }, options ?? { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
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
   Helpers & constants
-----------------------*/
function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
}

const NEWSLETTER_ENDPOINT =
  (typeof import.meta !== "undefined" &&
    (import.meta as any)?.env?.VITE_NEWSLETTER_ENDPOINT) ||
  "";
const MAIL_TO = "tush@jordan.com";

/* ----------------------
   Footer
-----------------------*/
const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Plans", href: "/plans" }, // ← standardized
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    "Dalian, Liaoning",
    "China",
    "+86 157 2453 8545",
    "tush@jordan.com",
  ];

  const socialLinks = [
    { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const val = email.trim();
    if (!val) {
      setError("Email is required");
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      setError("Invalid email address");
      setStatus("error");
      return;
    }

    try {
      if (NEWSLETTER_ENDPOINT) {
        const res = await fetch(NEWSLETTER_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: val }),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        setStatus("success");
        setEmail("");
      } else {
        // Fallback: open mail client prefilled (no secrets in client)
        const subject = "Newsletter subscription";
        const body = `Hello,\n\nPlease subscribe me to your newsletter:\nEmail: ${val}\n\nThanks!`;
        window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        setStatus("success");
        setEmail("");
      }
    } catch (err: unknown) {
      setStatus("error");
      setError(getErrorMessage(err) || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <footer
      role='contentinfo'
      className='relative overflow-hidden bg-slate-950 text-white border-t border-white/10'
    >
      {/* modern dotted grid + blobs (decorative) */}
      <div className='absolute inset-0 -z-10 opacity-30' aria-hidden='true'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#475569_1px,transparent_1px)] [background-size:18px_18px]' />
        <div className='absolute -top-24 right-1/3 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl' />
        <div className='absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl' />
      </div>

      <div className='mx-auto max-w-7xl px-6 py-16 md:py-20'>
        <div className='grid gap-10 md:grid-cols-4'>
          {/* Brand */}
          <Reveal>
            <div>
              <h3 className='font-serif font-bold mb-4 text-[clamp(1.15rem,1.8vw,1.35rem)]'>
                Linguasphere
              </h3>
              <p className='text-slate-300 text-[clamp(0.98rem,1vw,1.05rem)]'>
                Specialist online English tutoring for ages 4–16. Native UK
                teachers, 1‑to‑1 and small‑group classes, and measurable
                progress parents can trust.
              </p>
              <div className='mt-4 flex flex-wrap gap-2 text-xs'>
                <span className='rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10'>
                  DBS‑checked
                </span>
                <span className='rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10'>
                  Native UK Teachers
                </span>
                <span className='rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10'>
                  Ages 4–16
                </span>
              </div>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={60}>
            <nav aria-label='Footer quick links'>
              <h4 className='font-semibold mb-4 text-[clamp(1rem,1.2vw,1.125rem)]'>
                Quick Links
              </h4>
              <ul className='space-y-2 text-slate-300'>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className='hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          {/* Contact */}
          <Reveal delay={120}>
            <div>
              <h4 className='font-semibold mb-4 text-[clamp(1rem,1.2vw,1.125rem)]'>
                Contact
              </h4>
              <ul className='space-y-2 text-slate-300'>
                {contactInfo.map((info, i) => (
                  <li key={i}>{info}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Newsletter */}
          <Reveal delay={180}>
            <div>
              <h4 className='font-semibold mb-4 text-[clamp(1rem,1.2vw,1.125rem)]'>
                Stay in the Loop
              </h4>
              <p className='text-slate-300 mb-4'>
                Get study tips, free resources, and early access to new class
                openings.
              </p>

              {/* Status */}
              <div
                role='status'
                aria-live='polite'
                className={`mb-2 text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-rose-400"
                    : "text-slate-300"
                }`}
              >
                {status === "success"
                  ? "Thanks! Check your mail app if it opened."
                  : ""}
              </div>

              <form onSubmit={handleSubscribe} className='flex' noValidate>
                <label htmlFor='newsletter-email' className='sr-only'>
                  Email address
                </label>
                <input
                  id='newsletter-email'
                  type='email'
                  placeholder='Your email'
                  className='w-full px-4 py-3 bg-white text-slate-900 rounded-l-xl outline-none text-[clamp(0.95rem,1vw,1rem)]'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "sending"}
                  aria-invalid={status === "error" && !!error}
                  aria-describedby={
                    status === "error" ? "newsletter-error" : undefined
                  }
                  required
                />
                <button
                  type='submit'
                  className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-r-xl transition disabled:opacity-70 disabled:cursor-not-allowed text-[clamp(0.95rem,1vw,1rem)]'
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {status === "error" && (
                <p
                  id='newsletter-error'
                  className='text-rose-400 mt-2'
                  role='alert'
                >
                  {error}
                </p>
              )}
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal delay={220} className='mt-10'>
          <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-slate-300'>
              © {new Date().getFullYear()}{" "}
              <span className='font-medium'>Linguasphere</span>. All rights
              reserved.
            </p>
            <div className='flex items-center gap-5 text-slate-300'>
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition'
                >
                  <Icon className='h-5 w-5' />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
