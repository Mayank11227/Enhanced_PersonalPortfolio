import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-indigo-700 dark:bg-indigo-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-700 dark:bg-indigo-600 text-white p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:mayank1112227@gmail.com"
                    className="text-indigo-700 dark:text-indigo-400 hover:underline"
                  >
                    mayank1112227@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-700 dark:bg-indigo-600 text-white p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+919536986744" className="text-indigo-700 dark:text-indigo-400 hover:underline">
                    +91 95369 86744
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-700 dark:bg-indigo-600 text-white p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-700 dark:text-gray-300">Agra, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors">
            <h3 className="text-2xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-indigo-700 dark:focus:border-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-indigo-700 dark:focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-indigo-700 dark:focus:border-indigo-500 resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-700 dark:bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}