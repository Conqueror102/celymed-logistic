import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import Header from '../components/Header';


import img1 from '../../assets/ChatGPT Image Jul 8, 2025, 05_43_29 PM.png';
import img2 from '../../assets/ChatGPT Image Jul 8, 2025, 05_39_20 PM.png';
import img3 from '../../assets/ChatGPT Image Jul 8, 2025, 05_35_17 PM.png';
import img4 from '../../assets/ChatGPT Image Jul 8, 2025, 05_31_29 PM.png';
import img5 from '../../assets/ChatGPT Image Jul 8, 2025, 05_27_58 PM.png';
import img6 from '../../assets/ChatGPT Image Jul 8, 2025, 05_26_17 PM.png';
import img7 from '../../assets/ChatGPT Image Jul 8, 2025, 05_22_16 PM.png';
import img8 from '../../assets/ChatGPT Image Jul 8, 2025, 04_35_36 PM.png';
import img9 from '../../assets/ChatGPT Image Jul 8, 2025, 04_35_30 PM.png';



interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  height: number;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([]);

  const galleryImages: GalleryImage[] = [
    { id: 1001, src: img1, alt: 'Cargo Ship', title: 'Cargo Ship', height: 600 },
    { id: 1002, src: img2, alt: 'Cargo Plane', title: 'Cargo Plane', height: 600 },
    { id: 1003, src: img3, alt: ' last-mile delivery', title: ' last-mile delivery', height: 600 },
    { id: 1004, src: img4, alt: 'Freight', title: 'Freight', height: 600 },
    { id: 1005, src: img5, alt: 'Warehouse interiors', title: 'Warehouse interiors', height: 600 },
    { id: 1006, src: img6, alt: 'Workers loading/unloading packages', title: 'Workers loading/unloading packages', height: 600 },
    { id: 1007, src: img7, alt: 'Staff Bus', title: 'Staff Bus', height: 600 },
    { id: 1008, src: img8, alt: 'Truck', title: 'Truck', height: 600 },
    { id: 1009, src: img9, alt: 'Cargo Ship', title: 'Cargo Ship', height: 600 },
  
  
  ];

  // Initialize with first batch of images
  useEffect(() => {
    const filteredImages = galleryImages;
    setVisibleImages(filteredImages.slice(0, 8));
  }, []);

  const loadMoreImages = () => {
    const filteredImages = galleryImages;
    const currentCount = visibleImages.length;
    const nextBatch = filteredImages.slice(currentCount, currentCount + 8);
    setVisibleImages(prev => [...prev, ...nextBatch]);
  };

  const openModal = (image: GalleryImage) => {
    const filteredImages = galleryImages;
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const filteredImages = galleryImages;
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return;
    
    switch (e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        navigateImage('prev');
        break;
      case 'ArrowRight':
        navigateImage('next');
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);


  const filteredImages = galleryImages;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src={img1} alt="Gallery Hero Background" className="w-full h-full object-cover object-center opacity-80" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
     
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-4">
              Our Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Explore Our 
              <span className="block text-[#A6CE3A]"> Operations</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Take a visual journey through our comprehensive logistics operations and see how we deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 mb-12">
            {visibleImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
                onClick={() => openModal(image)}
                style={{ 
                  height: `${Math.min(image.height, 280)}px`
                }}
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm font-bold mb-1">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages.length < filteredImages.length && (
            <div className="text-center">
              <button
                onClick={loadMoreImages}
                className="px-8 py-3 bg-[#008AD5] text-white rounded-full font-semibold hover:bg-[#0073b3] transition-colors duration-300 transform hover:scale-105"
              >
                Load More Images
              </button>
            </div>
          )}

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-[#008AD5] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <LazyImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-white/70 text-sm mt-2">
                  {currentImageIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default GalleryPage; 