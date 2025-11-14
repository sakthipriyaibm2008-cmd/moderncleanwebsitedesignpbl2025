import { Mail, Phone, MapPin, CheckCircle, Users, Sparkles, Heart } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="text-blue-400" size={28} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brightside</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Welcome to a
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Brighter Future
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We help you create meaningful experiences that inspire, engage, and transform your vision into reality.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              Get Started
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-500" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Reliable</h3>
              <p className="text-gray-600">Dependable solutions you can trust every step of the way.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-purple-500" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Innovative</h3>
              <p className="text-gray-600">Cutting-edge approaches that keep you ahead of the curve.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-pink-500" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Caring</h3>
              <p className="text-gray-600">Your success is our priority, with personalized support.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Consulting</h3>
              <p className="text-gray-600 leading-relaxed">Expert guidance to help you navigate challenges and seize opportunities with confidence.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Sparkles className="text-purple-600 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Design</h3>
              <p className="text-gray-600 leading-relaxed">Beautiful, user-centered designs that captivate and engage your audience effectively.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Heart className="text-pink-600 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Support</h3>
              <p className="text-gray-600 leading-relaxed">Dedicated assistance ensuring smooth operations and continuous improvement.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CheckCircle className="text-green-600 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Strategy</h3>
              <p className="text-gray-600 leading-relaxed">Data-driven strategies that align with your goals and drive measurable results.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Sparkles className="text-yellow-600 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Development</h3>
              <p className="text-gray-600 leading-relaxed">Robust solutions built with modern technology and best practices in mind.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Users className="text-teal-600 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Training</h3>
              <p className="text-gray-600 leading-relaxed">Empower your team with skills and knowledge for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Send us a message!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">hello@brightside.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-pink-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-600">123 Main Street<br />San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white/70"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white/70"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white/70 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
                {submitted && (
                  <div className="mt-4 flex items-center gap-2 text-green-600">
                    <CheckCircle size={20} />
                    <span>Thank you! We'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white/60 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-400" size={24} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brightside</span>
          </div>
          <p className="text-gray-600">© 2024 Brightside. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
