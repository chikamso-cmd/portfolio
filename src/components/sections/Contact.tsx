import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

type Status = { type: "success" | "error"; message: string } | null;

const EMPTY_FORM: FormFields = { name: "", email: "", message: "" };

const EMAIL = "godspowerchikamso2@gmail.com";

const SOCIALS = [
  { Icon: Github, label: "GitHub", url: "https://github.com/chikamso-cmd" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/godspower-chikamso",
  },
  { Icon: Twitter, label: "Twitter", url: "https://twitter.com/@RealJude" },
];

const inputClasses = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:outline-none focus:ring-4 dark:bg-zinc-950 dark:text-zinc-100 ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
      : "border-zinc-200 focus:border-primary-500 focus:ring-primary-500/10 dark:border-zinc-800 dark:focus:border-primary-500"
  }`;

export const Contact = () => {
  const [formData, setFormData] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const tempErrors: FormErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    // Send the message through the Web3Forms API
    const form = new FormData();
    form.append("access_key", "2a4cf41b-ff9b-4425-a5b3-986c77041254");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData(EMPTY_FORM);
        setErrors({});
      } else {
        setStatus({
          type: "error",
          message: result.message || "There was an error sending your message.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great together."
          description="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group surface flex items-center justify-between gap-4 p-6 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Email
                  </p>
                  <p className="truncate font-medium">{EMAIL}</p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <div className="surface flex items-center gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Location
                </p>
                <p className="font-medium">Lagos, Nigeria · Open to remote</p>
              </div>
            </div>

            <div className="surface p-6">
              <p className="mb-4 text-xs uppercase tracking-wider text-zinc-500">
                Follow me
              </p>
              <div className="flex gap-2">
                {SOCIALS.map(({ Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-900"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    className={inputClasses(!!errors.name)}
                    value={formData.name}
                    onChange={handleChange("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    className={inputClasses(!!errors.email)}
                    value={formData.email}
                    onChange={handleChange("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  className={`${inputClasses(!!errors.message)} resize-none`}
                  value={formData.message}
                  onChange={handleChange("message")}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                rightIcon={isSubmitting ? undefined : Send}
                disabled={isSubmitting}
              >
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className={`flex items-center justify-center gap-2 text-sm font-medium ${
                    status.type === "success"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-500"
                  }`}
                >
                  {status.type === "success" && <CheckCircle2 size={16} />}
                  {status.message}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
