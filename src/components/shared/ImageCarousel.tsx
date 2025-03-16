import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative max-w-5xl mx-auto group">
        <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <Maximize2 size={20} />
          </button>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}