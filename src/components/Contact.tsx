import { useState, FormEvent } from 'react';
import portfolio from '../data/portfolio';
import { getSocialIcon, EmailIcon } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Open email client with pre-filled data
    const mailtoLink = `mailto:${portfolio.email}?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-dark-900/30">
      <div className="section-container">
        <h2 className="section-heading text-center">{portfolio.contact.heading}</h2>
        <p className="section-subheading text-center">
          {portfolio.contact.subheading}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Connect With Me */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {/* Email Link */}
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <EmailIcon className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-dark-400">Email</p>
                  <p className="text-white font-medium">{portfolio.email}</p>
                </div>
              </a>

              {/* Social Links */}
              {portfolio.socials.map((social) => {
                const Icon = getSocialIcon(social.icon);
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-400">{social.label}</p>
                      <p className="text-white font-medium">{social.label}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
