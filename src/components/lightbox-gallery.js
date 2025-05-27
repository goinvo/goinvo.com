import React, { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Image from './image';
import config from '../../config'
import { mediaUrl } from '../helpers'
import 'yet-another-react-lightbox/styles.css';

const LightboxGallery = ({ images = [], image = null, className = '', alt = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);

  // Determine if it's a single image or a gallery
  const isSingleImage = !!image;

  // Generate the slides array for the lightbox
  const lightboxImages = isSingleImage
    ? [{ src: mediaUrl(image), alt }]
    : images.map((image, index) => ({
      src: imageRefs.current[index]?.getSrc?.() || image.src,
      alt: image.alt || '',
    }));

  return (
    <div className={`lightbox-gallery ${className}`}>
      {/* Render single image or gallery */}
      {isSingleImage ? (
        <Image
          ref={(el) => (imageRefs.current[0] = el)}
          src={image}
          alt={alt}
          className="lightbox-image image--max-width"
          sizes={config.sizes.fullInsideMaxWidth}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            console.log('Opening lightbox for single image');
            setCurrentIndex(0);
            setIsOpen(true);
          }}
        />
      ) : (
        <div className="gallery-grid">
          {images.map((image, index) => (
            <Image
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt={image.alt}
              className="gallery-image image--max-width"
              sizes={config.sizes.fullInsideMaxWidth}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                console.log(`Opening lightbox for image at index ${index}`);
                setCurrentIndex(index);
                setIsOpen(true);
              }}
            />
          ))}
        </div>
      )}

      {/* Lightbox for zooming */}
      <div className="dumbbox">
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={lightboxImages}
          currentIndex={currentIndex}
        // on={{
        //   clickNext: () => setCurrentIndex((currentIndex + 1) % imageArray.length),
        //   clickPrev: () => setCurrentIndex((currentIndex - 1 + imageArray.length) % imageArray.length),
        // }}
        />
      </div>
    </div>
  );
};

export default LightboxGallery;

// Usage example:
// import LightboxGallery from '../components/lightbox-gallery';

// <LightboxGallery
//   img="/images/case-studies/ipsos/facto/coding-2.jpg"
//   alt="Coding Tools"
//   className="image--max-width"
// />

{/* <LightboxGallery
  images={[
    { src: '/images/case-studies/ipsos/facto/coding-2.jpg', alt: 'Coding Tools' },
    { src: '/images/case-studies/ipsos/facto/translation.jpg', alt: 'Translation Tools' },
  ]}
  className="image--max-width"
/> */}
