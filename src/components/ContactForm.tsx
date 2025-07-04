import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm = ({ compact = false }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your enquiry. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-${compact ? '3' : '4'}`}>
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-${compact ? '3' : '4'}`}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={compact ? 3 : 4}
          className="w-full px-4 py-2 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Tell me about your aerial or satellite installation needs..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${compact ? 'btn-outline-pro' : 'btn-hero'} disabled:opacity-50 disabled:cursor-not-allowed w-full`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;