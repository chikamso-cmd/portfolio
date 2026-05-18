import  { React,  useState} from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { ReactDOMServerReadableStream } from 'react-dom/server';

export const Contact = () => {
  const mutation = useMutation({
    mutationFn: async (formData: any) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form data:', formData);
      return { success: true };
    },
  });

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData.entries());
  //   mutation.mutate(data);
  // };
type FormData = {
  name: string;
  email: string;
  message: string;
};

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "2a4cf41b-ff9b-4425-a5b3-986c77041254"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    // form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-slate-600 dark:text-slate-400">godspowerchikamso2@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-slate-600 dark:text-slate-400">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-lg mb-4">Follow Me</h4>
              <div className="flex space-x-4">
               {/* Define your links in an array of objects */}
{[
  { Icon: Github, url: "https://github.com/chikamso-cmd" },
  { Icon: Linkedin, url: "https://linkedin.com/in/Nelson Nwafor" },
  { Icon: Twitter, url: "https://twitter.com/@RealJude" }
].map(({ Icon, url }, i) => (
  <motion.a
    key={i}
    href={url}
    target="_blank"             // Opens in a new tab
    rel="noopener noreferrer"    // Security best practice
    whileHover={{ y: -5 }}
    className="p-3 glass hover:bg-primary-500 hover:text-white transition-all rounded-xl"
  >
    <Icon size={20} />
  </motion.a>
))}

              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="lg:col-span-2 p-8" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold tracking-wide uppercase text-slate-500">
                    Full Name
                  </label>
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold tracking-wide uppercase text-slate-500">
                    Email Address
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold tracking-wide uppercase text-slate-500">
                  Your Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } focus:border-blue-500 focus:outline-none transition-colors`}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                rightIcon={Send}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>

              {mutation.isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 font-medium"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
             {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
          </Card>
        </div>
      </div>
    </section>
  );
};
