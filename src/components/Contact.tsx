import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {


  return (
    <section id="contact" className="py-20 bg-gray-50 animate-fade-in-up animation-delay-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Ready to Streamline Your Logistics?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today for reliable and efficient transportation solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="tel:+2348034417785">
            <button
              
              className="bg-[#A6CE3A] hover:bg-[#008AD5] text-white rounded-full px-8 py-2 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
             
              Contact Us Now
            </button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-sm:place-content-start   max-w-6xl mx-auto ">
            <div className="flex items-center justify-center space-x-3 max-sm:place-content-start ">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-800">Call Us</div>
                <div className="text-slate-600">+2348034417785</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 max-sm:place-content-start">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-secondary-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-800">Email Us</div>
                <div className="text-slate-600">admin@celymed.com</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 ">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-800">Visit Us</div>
                <div className="text-slate-600"> 2, odeyemi Street, satellite town, lagos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;