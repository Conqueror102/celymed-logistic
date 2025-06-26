import React from 'react';
import { Truck, Bus, Wrench, Heart, FileText, Shield, Plane, Ship } from 'lucide-react';
import trucksParked from '../../assets/trucks-parked.avif';
import busess from '../../assets/busess.jpg';
import oneWorking from '../../assets/one-working.avif';
import truckDriver from '../../assets/truckDriver.jpg';
import industrialOutdoor from '../../assets/industrial-outdoor-black.avif';
import insurance from '../../assets/insurance.avif';
import truckInLine from '../../assets/truck-in-line.avif';
import shipImg from '../../assets/ship.avif';
import air from '../../assets/transport-cargo.avif';

const Services: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: 'On Land Transportation',
      description: 'Efficient and reliable road transport solutions for cargo, goods, and staff across all routes.',
      image: truckInLine,
      gradient: 'from-primary-300 to-primary-400'
    },
    {
      icon: Plane,
      title: 'Air Ways',
      description: 'Fast and secure air freight services for urgent and high-value shipments, connecting you globally.',
      image: air,
      gradient: 'from-secondary-300 to-secondary-400'
    },
    {
      icon: Ship,
      title: 'Marine / Water Ways',
      description: 'Comprehensive marine logistics for bulk cargo and international shipping via trusted sea routes.',
      image: shipImg,
      gradient: 'from-primary-100 to-secondary-100'
    },
    {
      icon: Truck,
      title: 'Transportation & Haulage',
      description: 'Reliable cargo transportation and heavy haulage services across all routes with real-time tracking.',
      image: trucksParked,
      gradient: 'from-primary-300 to-primary-400'
    },
    {
      icon: Bus,
      title: 'Staff Bussing Services',
      description: 'Safe and comfortable staff transportation solutions for your organization with flexible scheduling.',
      image: busess,
      gradient: 'from-secondary-300 to-secondary-400'
    },
    {
      icon: Wrench,
      title: 'Fleet Supervision & Maintenance',
      description: 'Comprehensive fleet management and preventive maintenance programs to ensure optimal performance.',
      image: oneWorking,
      gradient: 'from-primary-100 to-secondary-100'
    },
    {
      icon: Heart,
      title: 'Driver Welfare Management',
      description: 'Dedicated support and welfare programs for all our professional drivers and their families.',
      image: truckDriver,
      gradient: 'from-secondary-100 to-primary-100'
    },
    {
      icon: FileText,
      title: 'Fleet Documentation & Records',
      description: 'Complete documentation management and record-keeping services with digital solutions.',
      image: industrialOutdoor,
      gradient: 'from-primary-200 to-secondary-200'
    },
    {
      icon: Shield,
      title: 'Insurance & Compliance Management',
      description: 'Full insurance coverage and government compliance management with expert guidance.',
      image: insurance,
      gradient: 'from-primary-500 to-secondary-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#e2f5ff] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#e9ffab] rounded-full text-primary-700 font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive 
            <span className="text-[#008AD5] "> Logistics Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tailored transportation and fleet management services designed to meet your unique business needs with precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Image section */}
              <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gray-100">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <service.icon className="h-20 w-20 text-[#008AD5] opacity-70" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                {/* Icon overlay */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-[#008AD5] rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              {/* Content section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#A6CE3A] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              </div>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/10 to-secondary-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;