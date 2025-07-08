import React from 'react';
import cdkLogo from '../../assets/cdk.jpg';
import dangoteLogo from '../../assets/dangote.jpg';
import ekoLogo from '../../assets/eko.jpg';
import laralekLogo from '../../assets/laralek.jpg';
import brainsLogo from '../../assets/brains.jpg';

const partnersWithLogos = [
  { name: 'CDK INTEGRATED INDUSTRIES', logo: cdkLogo },
  { name: 'BRAIN AND HAMMER CONSTRUCTION KAISER', logo: brainsLogo },
  { name: 'THIRD PARTY DANGOTE GROUP', logo: dangoteLogo },
  { name: 'LARALEK ULTIMATE LIMITED', logo: laralekLogo },
  { name: 'EKO ATLANTIC CITY', logo: ekoLogo },
];

const Partners: React.FC = () => {
  // Duplicate the partners array for seamless infinite scroll
  const scrollingPartners = [...partnersWithLogos, ...partnersWithLogos];
  return (
    <section id="partners" className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Partners</h2>
        <div className="relative overflow-x-hidden">
          <div
            className="flex items-center gap-8 animate-partner-scroll whitespace-nowrap"
            style={{ minWidth: '100%' }}
          >
            {scrollingPartners.map((partner, idx) => (
              <div
                key={partner.name + idx}
                className="flex items-center justify-center min-w-[180px] max-w-xs bg-white rounded-lg shadow p-4 border border-gray-200 mx-2 h-32"
              >
                <img src={partner.logo} alt={partner.name} className="object-contain w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes partner-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partner-scroll {
          animation: partner-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners; 