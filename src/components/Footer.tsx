import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { CONTACT_INFO } from "../constants/contact";
import { Reveal } from "./Reveal";

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
const MAIL_TO = CONTACT_INFO.mailTo;

/* ----------------------
   Footer
-----------------------*/
const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const contactInfo = [
    { icon: "📍", text: CONTACT_INFO.location, label: "服务地区" },
    { icon: "☎️", text: CONTACT_INFO.phone, label: "电话" },
    { icon: "✉️", text: CONTACT_INFO.email, label: "邮箱" },
  ];

  const socialLinks = [
    {
      Icon: FaFacebookF,
      href: CONTACT_INFO.socialLinks.facebook,
      label: "Facebook",
    },
    {
      Icon: FaInstagram,
      href: CONTACT_INFO.socialLinks.instagram,
      label: "Instagram",
    },
    {
      Icon: FaTwitter,
      href: CONTACT_INFO.socialLinks.twitter,
      label: "Twitter",
    },
    {
      Icon: FaLinkedinIn,
      href: CONTACT_INFO.socialLinks.linkedin,
      label: "LinkedIn",
    },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const val = email.trim();
    if (!val) {
      setError("邮箱为必填项");
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      setError("邮箱格式不正确");
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
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || `Request failed: ${res.status}`);
        }
        setStatus("success");
        setEmail("");
      } else {
        // Fallback: open mail client prefilled (no secrets in client)
        const subject = "订阅电子邮件通讯";
        const body = `您好，\n\n请帮我订阅你们的电子邮件通讯：\n邮箱：${val}\n\n谢谢！`;
        window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("success");
        setEmail("");
      }
    } catch (err: unknown) {
      setStatus("error");
      setError(getErrorMessage(err) || "发生错误，请稍后重试");
      console.error(err);
    }
  };

  return (
    <footer
      role='contentinfo'
      className='relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-violet-500/20'
    >
      {/* Premium gradient background + blobs */}
      <div className='absolute inset-0 -z-10 opacity-40' aria-hidden='true'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#475569_1px,transparent_1px)] [background-size:20px_20px] opacity-50' />
        <div className='absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl' />
        <div className='absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl' />
        <div className='absolute top-1/2 right-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl' />
      </div>

      <div className='mx-auto max-w-7xl px-6 py-16 md:py-20'>
        <div className='grid gap-12 md:grid-cols-3 items-start'>
          {/* Brand */}
          <Reveal>
            <div className='space-y-4'>
              <div>
                <h3 className='font-serif font-bold mb-2 text-[clamp(1.25rem,2vw,1.5rem)] bg-gradient-to-r from-violet-300 to-amber-300 bg-clip-text text-transparent'>
                  Linguasphere
                </h3>
                <p className='text-slate-200 text-[clamp(0.95rem,1vw,1.05rem)] leading-relaxed'>
                  全球领先的少儿在线英语教育平台。英籍母语外教、个性化课程、看得见的进步。
                </p>
              </div>
              <div className='flex flex-wrap gap-2 pt-2'>
                <span className='inline-flex items-center px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 ring-1 ring-indigo-500/30 font-medium'>
                  ✓ 背景审核认证师资
                </span>
                <span className='inline-flex items-center px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 ring-1 ring-indigo-500/30 font-medium'>
                  ✓ 母语外教
                </span>
                <span className='inline-flex items-center px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 ring-1 ring-indigo-500/30 font-medium'>
                  ✓ 全球服务
                </span>
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={120}>
            <div>
              <h4 className='font-semibold mb-5 text-[clamp(1.05rem,1.3vw,1.15rem)] text-white'>
                联系我们
              </h4>
              <ul className='space-y-3'>
                {contactInfo.map((info, i) => (
                  <li
                    key={i}
                    className='text-slate-300 text-[clamp(0.9rem,1vw,0.95rem)]'
                  >
                    <div className='flex items-start gap-3 group'>
                      <span className='text-lg flex-shrink-0'>{info.icon}</span>
                      <div className='flex-1'>
                        <p className='text-xs text-slate-500 mb-0.5 font-semibold'>
                          {info.label}
                        </p>
                        <p className='text-slate-300 group-hover:text-indigo-300 transition'>
                          {info.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Newsletter */}
          <Reveal delay={180}>
            <div>
              <h4 className='font-semibold mb-2 text-[clamp(1.05rem,1.3vw,1.15rem)] text-white'>
                订阅精彩资讯
              </h4>
              <p className='text-slate-300 text-[clamp(0.9rem,1vw,0.95rem)] mb-5 leading-relaxed'>
                获得独家教学技巧、免费学习资源和新课程开放通知。
              </p>

              {/* Status */}
              <div
                role='status'
                aria-live='polite'
                className={`mb-3 text-sm rounded-lg p-2 ${
                  status === "success"
                    ? "bg-green-500/10 text-green-300 border border-green-500/30"
                    : status === "error"
                      ? "bg-rose-500/10 text-rose-300 border border-rose-500/30"
                      : "text-slate-300"
                }`}
              >
                {status === "success" ? "✓ 订阅成功！请检查邮箱确认。" : ""}
              </div>

              <form
                onSubmit={handleSubscribe}
                className='flex gap-1.5'
                noValidate
              >
                <label htmlFor='newsletter-email' className='sr-only'>
                  邮箱地址
                </label>
                <input
                  id='newsletter-email'
                  type='email'
                  placeholder='邮箱地址'
                  className='flex-1 px-4 py-2.5 bg-white/10 backdrop-blur text-white placeholder-slate-400 rounded-lg outline-none border border-white/20 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 transition text-[clamp(0.9rem,1vw,0.95rem)]'
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
                  className='px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-[clamp(0.9rem,1vw,0.95rem)] shadow-lg hover:shadow-indigo-500/50'
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "..." : "订阅"}
                </button>
              </form>

              {status === "error" && (
                <p
                  id='newsletter-error'
                  className='text-rose-400 mt-2 text-sm'
                  role='alert'
                >
                  {error}
                </p>
              )}
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal delay={240} className='mt-12'>
          <div className='border-t border-violet-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>
            <p className='text-slate-400 text-[clamp(0.85rem,1vw,0.95rem)]'>
              © {new Date().getFullYear()}{" "}
              <span className='font-semibold text-violet-300'>
                Linguasphere
              </span>{" "}
              • 保留所有权利
            </p>
            <div className='flex items-center gap-4 text-slate-300'>
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 ring-1 ring-indigo-500/30 hover:from-indigo-500/40 hover:to-purple-500/40 hover:ring-indigo-400/50 transition duration-300 hover:scale-110'
                >
                  <Icon className='h-5 w-5 text-indigo-300' />
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
