import React, { useState, useEffect } from 'react';
import { Phone,  ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import truck from '../../assets/truck-in-line.avif';
import truck2 from '../../assets/container-ship-import-.avif';
import truck3 from '../../assets/depore.avif';

const truckImages = [
  truck,
  truck2,
  truck3,
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = truckImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const goTo = (idx: number) => setCurrent(idx);

  return (
    <div>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 pt-16">
        {/* Carousel Images */}
        {truckImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            aria-hidden={idx !== current}
          >
            <img
              src={img}
              alt="Truck"
              className="w-full h-full object-cover object-center min-h-screen"
              style={{ filter: 'brightness(0.85) blur(0px)' }}
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}

        {/* Carousel Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {truckImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#008AD5] transition bg-white ${current === idx ? 'bg-[#008AD5]' : 'bg-white'}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up animation-delay-300 leading-tight">
            Reliable Logistics,
            <span className="block bg-[#A6CE3A] bg-clip-text text-transparent mt-1 sm:mt-2">
              Haulage & Transportation
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 lg:mb-12 opacity-90 animate-fade-in-up animation-delay-600 max-w-3xl mx-auto leading-relaxed text-white px-2">
            We manage your fleet, staff transportation, and cargo haulage seamlessly with cutting-edge technology and professional expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-900 px-4">
            <Link to="/#contact" className="group bg-[#008AD5] hover:bg-[#A6CE3A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg text-sm sm:text-base">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
              <span>Contact Us</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <div className="p-6 sm:p-9 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 bg-secondary-50 animate-fade-in-up animation-delay-1200">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#A6CE3A] mb-1 sm:mb-2">500+</div>
          <div className="text-sm sm:text-base text-[#008AD5]">Successful Deliveries</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#A6CE3A] mb-1 sm:mb-2">24/7</div>
          <div className="text-sm sm:text-base text-[#008AD5]">Customer Support</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#A6CE3A] mb-1 sm:mb-2">99%</div>
          <div className="text-sm sm:text-base text-[#008AD5]">On-Time Delivery</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;