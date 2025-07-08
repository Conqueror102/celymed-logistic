import React from 'react';
import { Shield, Users, Truck, FileText, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { 
      icon: Truck, 
      title: 'Fleet Management', 
      description: 'Comprehensive fleet supervision and maintenance',
    
    },
    { 
      icon: Users, 
      title: 'Driver Welfare', 
      description: 'Priority focus on driver well-being and support',
      
    },
    { 
      icon: FileText, 
      title: 'Documentation', 
      description: 'Complete records and compliance management',
     
    },
    { 
      icon: Shield, 
      title: 'Compliance', 
      description: 'Insurance and government compliance handling',
     
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden animate-fade-in-up animation-delay-300">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#e9ffab] rounded-full text-primary-700 font-semibold mb-4">
            About Celymed
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Your Trusted 
            <span className="text-[#008AD5]"> Logistics Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive logistics management, transportation, and haulage services, 
            overseeing fleet maintenance, drivers' welfare, and government compliance. Our commitment 
            to excellence ensures your operations run smoothly and efficiently with cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16  bg-[#008AD5] rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#A6CE3A] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional stats section */}
        <div className="relative mt-20 bg-blue-950 rounded-3xl p-8 sm:p-12 text-secondary-900 shadow-2xl overflow-hidden">
  {/* SVG Background */}
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 560"
    preserveAspectRatio="none"
  >
    <g mask="url(#SvgjsMask1000)" fill="none">
      <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
      <path
        d="M0,383.342C74.165,394.306,147.778,367.822,214.824,334.273C287.717,297.798,360.665,254.011,400.535,182.918C441.908,109.145,454.916,19.871,437.574,-62.914C420.736,-143.29,374.26,-219.15,306.568,-265.643C244.632,-308.183,163.297,-292.592,88.809,-302.456C27.059,-310.633,-31.368,-322.137,-93.558,-318.628C-172.395,-314.18,-271.613,-339.82,-322.284,-279.261C-373.163,-218.453,-319.99,-125.494,-321.484,-46.222C-322.749,20.895,-357.75,89.584,-330.389,150.884C-302.976,212.303,-232.553,237.563,-177.545,276.266C-119.854,316.857,-69.782,373.026,0,383.342"
        fill="#0b2239"
      ></path>
      <path
        d="M1440 1051.518C1571.445 1052.033 1697.8690000000001 1203.0929999999998 1815.172 1143.779 1929.282 1086.08 1906.714 913.298 1950.755 793.254 1990.761 684.2090000000001 2078.317 585.569 2062.163 470.546 2045.998 355.445 1958.446 261.381 1866.136 190.75099999999998 1783.745 127.70999999999998 1677.346 118.41500000000002 1575.584 98.245 1482.886 79.87099999999998 1393.012 75.71100000000001 1298.545 78.24700000000001 1171.608 81.654 1012.0419999999999 21.17700000000002 927.19 115.64800000000002 842.785 209.622 936.494 360.674 931.511 486.89 927.199 596.125 877.778 699.595 899.911 806.6510000000001 925.639 931.097 950.973 1088.375 1066.711 1140.8490000000002 1185.646 1194.772 1309.413 1051.007 1440 1051.518"
        fill="#113255"
      ></path>
    </g>
    <defs>
      <mask id="SvgjsMask1000">
        <rect width="1440" height="560" fill="#ffffff"></rect>
      </mask>
    </defs>
  </svg>

  {/* Content */}
  <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div className="group">
      <div className="flex items-center justify-center mb-4">
        <Award className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="text-3xl font-bold mb-2 text-[#A6CE3A]">5+ Years</div>
      <div className="text-white">Industry Experience</div>
    </div>
    <div className="group">
      <div className="flex items-center justify-center mb-4">
        <Users className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="text-3xl font-bold mb-2 text-[#A6CE3A]">50+ Clients</div>
      <div className="text-white">Satisfied Customers</div>
    </div>
    <div className="group">
      <div className="flex items-center justify-center mb-4">
        <Clock className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="text-3xl font-bold mb-2 text-[#A6CE3A]">24/7</div>
      <div className="text-white">Support Available</div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;