import React, { useState } from 'react';
import './Gallery.css';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import image14 from './image14.jpg';


const images = [
    { id: 1, src: img1, alt: 'Gym Interior 1' },
    { id: 2, src: img2, alt: 'Gym Interior 2' },
    { id: 3, src: img3, alt: 'Gym Equipmentt' },
    { id: 4, src: img4, alt: 'Gym Equipmente' },
    { id: 5, src: img5, alt: 'Gym Equipments' },
    { id: 6, src: img6, alt: 'Gym Equipments' },
    { id: 7, src: img7, alt: 'Gym Equipments' },
    { id: 8, src: img8, alt: 'Gym Equipments' },
    { id: 9, src: img9, alt: 'Gym Equipments' },
    { id: 10, src: img10, alt: 'Gym Equipments' },
    { id: 11, src: img11, alt: 'Gym Equipments' },
    { id: 12, src: image14, alt: 'Gym Equipments' },
    // Add more images as needed
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openModal(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
