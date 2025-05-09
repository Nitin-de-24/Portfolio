import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { SOCIAL_LINKS, SOCIAL_ICONS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <Container>
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Reach out!"
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                There was an issue sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-12">
                <div>
                  <h4 className="text-blue-500 font-medium mb-1">Email</h4>
                  <p className="text-gray-300">hello@nitin.dev</p>
                </div>
                
                <div>
                  <h4 className="text-blue-500 font-medium mb-1">Based in</h4>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
                
                <div>
                  <h4 className="text-blue-500 font-medium mb-1">Availability</h4>
                  <p className="text-gray-300">Open to freelance & full-time opportunities</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((link) => {
                  const IconComponent = SOCIAL_ICONS[link.icon];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-full p-4 text-gray-300 hover:text-blue-400 transition-all duration-300"
                      aria-label={link.platform}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;