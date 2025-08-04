import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, MessageCircle, Instagram, Code } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and bring your ideas to life. I'm always excited to work on new challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">khamidkhanov7@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">Available worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                  title="GitHub"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  title="LeetCode"
                >
                  <Code className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                  title="Telegram"
                >
                  <MessageCircle className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                  title="Instagram"
                >
                  <Instagram className="text-white" size={20} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-500/30">
              <h3 className="text-white font-semibold mb-2">Current Availability</h3>
              <p className="text-gray-300 text-sm">
                I'm currently available for new projects and collaborations. 
                Typical response time is within 24 hours.
              </p>
              <div className="flex items-center mt-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-green-400 text-sm font-medium">Available for hire</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What's your typical project timeline?</h3>
              <p className="text-gray-300">
                Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, 
                while complex applications can take 2-6 months. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer ongoing support?</h3>
              <p className="text-gray-300">
                Yes! I provide ongoing maintenance and support packages to ensure your project stays up-to-date 
                and performs optimally. This includes bug fixes, updates, and feature enhancements.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What's your development process?</h3>
              <p className="text-gray-300">
                I follow an agile development approach with regular check-ins, transparent communication, 
                and iterative delivery. You'll be involved throughout the process to ensure the final product meets your vision.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can you work with my existing team?</h3>
              <p className="text-gray-300">
                Absolutely! I'm comfortable working with existing teams and can adapt to your current 
                workflows, tools, and methodologies. Collaboration and communication are key to successful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;