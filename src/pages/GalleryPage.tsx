import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  height: number;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/api/placeholder/400/600",
      alt: "Logistics Operations",
      title: "Warehouse Management",
      category: "Operations",
      aspectRatio: "portrait",
      height: 600
    },
    {
      id: 2,
      src: "/api/placeholder/600/400",
      alt: "Fleet Management",
      title: "Fleet Operations",
      category: "Fleet",
      aspectRatio: "landscape",
      height: 400
    },
    {
      id: 3,
      src: "/api/placeholder/500/500",
      alt: "Transportation Services",
      title: "Road Transport",
      category: "Transport",
      aspectRatio: "square",
      height: 500
    },
    {
      id: 4,
      src: "/api/placeholder/400/700",
      alt: "Marine Logistics",
      title: "Marine Operations",
      category: "Marine",
      aspectRatio: "portrait",
      height: 700
    },
    {
      id: 5,
      src: "/api/placeholder/700/400",
      alt: "Air Freight",
      title: "Air Cargo",
      category: "Air",
      aspectRatio: "landscape",
      height: 400
    },
    {
      id: 6,
      src: "/api/placeholder/400/550",
      alt: "Staff Transportation",
      title: "Staff Bussing",
      category: "Staff",
      aspectRatio: "portrait",
      height: 550
    },
    {
      id: 7,
      src: "/api/placeholder/600/450",
      alt: "Fleet Maintenance",
      title: "Vehicle Maintenance",
      category: "Maintenance",
      aspectRatio: "landscape",
      height: 450
    },
    {
      id: 8,
      src: "/api/placeholder/400/620",
      alt: "Safety Protocols",
      title: "Safety Standards",
      category: "Safety",
      aspectRatio: "portrait",
      height: 620
    },
    {
      id: 9,
      src: "/api/placeholder/500/500",
      alt: "Customer Service",
      title: "Client Relations",
      category: "Service",
      aspectRatio: "square",
      height: 500
    },
    {
      id: 10,
      src: "/api/placeholder/650/400",
      alt: "Technology Integration",
      title: "Digital Solutions",
      category: "Technology",
      aspectRatio: "landscape",
      height: 400
    },
    {
      id: 11,
      src: "/api/placeholder/400/580",
      alt: "Supply Chain",
      title: "Supply Chain Management",
      category: "Supply Chain",
      aspectRatio: "portrait",
      height: 580
    },
    {
      id: 12,
      src: "/api/placeholder/600/400",
      alt: "Quality Control",
      title: "Quality Assurance",
      category: "Quality",
      aspectRatio: "landscape",
      height: 400
    },
    {
      id: 13,
      src: "/api/placeholder/400/650",
      alt: "Warehouse Operations",
      title: "Storage Solutions",
      category: "Operations",
      aspectRatio: "portrait",
      height: 650
    },
    {
      id: 14,
      src: "/api/placeholder/700/500",
      alt: "Transport Fleet",
      title: "Vehicle Fleet",
      category: "Fleet",
      aspectRatio: "landscape",
      height: 500
    },
    {
      id: 15,
      src: "/api/placeholder/500/500",
      alt: "Logistics Center",
      title: "Distribution Center",
      category: "Operations",
      aspectRatio: "square",
      height: 500
    }
  ];

  const categories = ['all', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  // Initialize with first batch of images
  useEffect(() => {
    const filteredImages = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    setVisibleImages(filteredImages.slice(0, 8));
  }, [selectedCategory]);

  const loadMoreImages = () => {
    const filteredImages = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    const currentCount = visibleImages.length;
    const nextBatch = filteredImages.slice(currentCount, currentCount + 8);
    setVisibleImages(prev => [...prev, ...nextBatch]);
  };

  const openModal = (image: GalleryImage) => {
    const filteredImages = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const filteredImages = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
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


  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#008AD5] to-[#A6CE3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <p className="text-xs opacity-90">{image.category}</p>
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
                <p className="text-white/90">{selectedImage.category}</p>
                <p className="text-white/70 text-sm mt-2">
                  {currentImageIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage; 