import React, { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Image from './image';
import config from '../../config'
import { mediaUrl } from '../helpers'
import 'yet-another-react-lightbox/styles.css';

//documentation: https://github.com/igordanchenko/yet-another-react-lightbox
// https://yet-another-react-lightbox.com/documentation

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
          className="lightbox-image image--max-width single-image"
          sizes={config.sizes.fullInsideMaxWidth}
          style={{ cursor: 'pointer' }}
          onClick={() => {
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
                setCurrentIndex(index);
                setIsOpen(true);
              }}
            />
          ))}
        </div>
      )}

      {/* Lightbox for zooming */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={lightboxImages}
        currentIndex={currentIndex}
        carousel={{ finite: lightboxImages.length <= 1 }}
        render={{
          buttonPrev: lightboxImages.length <= 1 ? () => null : undefined,
          buttonNext: lightboxImages.length <= 1 ? () => null : undefined,
        }}
      />
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
