import React, { useState } from 'react';
// import { Linkedin, Mail, Phone } from 'lucide-react';
import LazyImage from './LazyImage';
import image from '../../assets/williams.jpg'
import image2 from '../../assets/ngegu.jpg'


interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  // email: string;
  // phone: string;
  // linkedin?: string;
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Williams Ahmed Oloye",
      position: "Director of Operations",
      image: image, // replace with his real image URL if available
      bio: "With over 15 years of experience in Operations, Procurement, and Stores Management, Williams is a dynamic, resourceful, and adaptable professional. He excels in managing multiple priorities, meeting tight deadlines without compromising quality, and contributing meaningfully to organizational goals.",
      // email: "williams.ahmed@company.com", // replace with his real email if available
      // phone: "+234 800 000 0000", // replace with his real number if available
      // linkedin: "https://linkedin.com/in/williams-ahmed-oloye"
    },
    {
      id: 2,
      name: "Ngegu Celestine",
      position: "Fleet/Logistics Manager",
      image: image2,
      bio: "With over 16 years managing fleet operations at Dangote Sugar Refinery PLC, Ngegu is a capable, adaptable, and self-motivated logistics professional. Known for strong leadership in transport, warehousing, and vehicle management, he consistently ensures efficient, cost-effective, and reliable logistics operations in high-pressure environments.",
     
    }
    
   
    
  ];

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden animate-fade-in-up animation-delay-300">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A6CE3A' fill-opacity='0.8'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#e9ffab] rounded-full text-primary-700 font-semibold mb-4">
            Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Meet Our 
            <span className="text-[#008AD5]"> Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dedicated professionals committed to delivering exceptional logistics solutions and outstanding customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative md:flex bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              {/* Image section */}
              <div className="relative h-64  md:w-[450px] overflow-hidden">
                <LazyImage 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> */}
              </div>
              
              {/* Content section */}
              <div className="p-6 bg-[#0a0122]">
                <h3 className="text-xl font-bold text-[#A6CE3A] mb-2 group-hover:text-[#008AD5] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#008AD5] font-semibold mb-3">{member.position}</p>
                <p className="text-white text-sm leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>
                
                {/* Contact icons */}
                {/* <div className="flex space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-[#008AD5] hover:text-white transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-[#008AD5] hover:text-white transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-[#008AD5] hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative h-64">
                <LazyImage 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-full object-contain bg-[#0a0122] rounded-t-2xl"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-[#008AD5] font-semibold mb-4">{selectedMember.position}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedMember.bio}</p>
                
                {/* <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#008AD5]" />
                    <a href={`mailto:${selectedMember.email}`} className="text-gray-700 hover:text-[#008AD5]">
                      {selectedMember.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#008AD5]" />
                    <a href={`tel:${selectedMember.phone}`} className="text-gray-700 hover:text-[#008AD5]">
                      {selectedMember.phone}
                    </a>
                  </div>
                  {selectedMember.linkedin && (
                    <div className="flex items-center space-x-3">
                      <Linkedin className="h-5 w-5 text-[#008AD5]" />
                      <a 
                        href={selectedMember.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#008AD5]"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team; 