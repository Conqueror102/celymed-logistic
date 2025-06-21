import React from 'react';
import {  Users, Truck, Wrench, FileText} from 'lucide-react';
import photo1 from '../../assets/photo-1592963218710-1f12d7db6076.avif';
import photo2 from '../../assets/medium-shot-smiley-woman-near-bus_23-2148921691.avif';
import photo3 from '../../assets/young-man-working-warehouse-with-boxes_1303-16617.avif';
import ship from '../../assets/ship.avif';
import trucksParked from '../../assets/trucks-parked.avif';
import businessLogistics from '../../assets/business-logistics-concept-container-cargo_1150-17845.avif';
import youngAdult from '../../assets/young-adult-travelling-winter-time_23-2149211145.avif';
import truck from '../../assets/truck-.avif';

const WhyChooseUs: React.FC = () => {


  return (
    <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Why Choose <span className="text-[#008AD5]">LogiFlow</span>?
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                <strong className="text-[#A6CE3A]">
                  Experienced in all kinds of logistics, Transportation and Haulage services.
                </strong>{" "}
                We provide comprehensive solutions that keep your operations moving smoothly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Fleet Management Excellence</h3>
                    <p className="text-slate-600">
                      Supervising company fleet and logistics services with cutting-edge technology and proven
                      efficiency protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Maintenance & Safety</h3>
                    <p className="text-slate-600">
                      Supervising repairs and maintenance for all company fleet, ensuring maximum uptime and safety
                      standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Driver Care & Management</h3>
                    <p className="text-slate-600">
                      Overseeing all driver activities and welfare, ensuring a professional and well-cared-for team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Compliance & Documentation</h3>
                    <p className="text-slate-600">
                      Meticulous documentation and records of all fleet services, vehicle particulars, insurance, and
                      government policies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
  <div className="w-full max-w-[400px] md:max-w-[500px] aspect-square overflow-hidden rounded-3xl grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-fr bg-gray-50">
    <img
      src={photo1}
      alt="Truck 1"
      className="rounded-xl shadow object-cover w-full h-full col-span-1 row-span-2"
    />
    <img
      src={photo2}
      alt="Truck 2"
      className="rounded-xl shadow object-cover w-full h-full col-span-1 row-span-1"
    />
    <img
      src={photo3}
      alt="Truck 3"
      className="rounded-xl shadow object-cover w-full h-full col-span-1 row-span-1"
    />
    <img
      src={ship}
      alt="Ship"
      className="rounded-xl shadow object-cover w-full h-full col-span-2 row-span-1"
    />
    <img
      src={trucksParked}
      alt="Parked Trucks"
      className="rounded-xl shadow object-cover w-full h-full col-span-1 row-span-1 hidden sm:block"
    />
    <img
      src={businessLogistics}
      alt="Business Logistics"
      className="rounded-xl shadow object-cover w-full h-full col-span-1 row-span-2 hidden sm:block"
    />
    <img
      src={youngAdult}
      alt="Young Adult"
      className="rounded-xl shadow object-cover w-full h-full col-span-1 row-span-2 hidden sm:block"
    />
    <img
      src={truck}
      alt="Truck"
      className="rounded-xl shadow object-cover w-full h-full col-span-1 row-span-1 hidden sm:block"
    />
  </div>
</div>

          </div>
        </div>
      </section>
  );
};

export default WhyChooseUs;