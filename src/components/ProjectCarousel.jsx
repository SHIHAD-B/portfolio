import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ProjectCarousel.css';

const ProjectCarousel = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    
    if (!images || images.length === 0) {
        return (
            <div className="carousel-placeholder">
                <span>No Images Available</span>
            </div>
        );
    }

    if (images.length === 1) {
        return (
            <img
                src={`/${images[0]}`}
                alt={alt}
                className="carousel-single-image"
            />
        );
    }

    return (
        <div className="carousel-container">
           
            <div className="carousel-slide">
                <img
                    src={`/${images[currentIndex]}`}
                    alt={`${alt} - ${currentIndex + 1}`}
                    className="carousel-image"
                />
            </div>

         
            <button
                className="carousel-button carousel-button-left"
                onClick={goToPrevious}
                aria-label="Previous image"
            >
                <FiChevronLeft size={24} />
            </button>
            <button
                className="carousel-button carousel-button-right"
                onClick={goToNext}
                aria-label="Next image"
            >
                <FiChevronRight size={24} />
            </button>

            
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

          
            <div className="carousel-counter">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

export default ProjectCarousel;
