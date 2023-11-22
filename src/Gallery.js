import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Gallery.css';
import Foto1 from './images/gallery.jpeg';
import Foto2 from './images/gallery1.jpeg';
import Foto3 from './images/gallery2.jpeg';
import Foto4 from './images/gallery3.jpeg';
import Foto5 from './images/gallery4.jpeg';
import Foto6 from './images/gallery5.jpeg';
import Foto7 from './images/gallery6.jpeg';
import Foto8 from './images/gallery7.jpeg';
import Foto9 from './images/gallery8.jpeg';

const Gallery = () => {
  const imagesPerRow = 3; // Jumlah gambar per baris
  const totalImages = 9;
  const imageDimension = 300; // Dimensi yang diinginkan untuk lebar dan tinggi gambar

  // Membagi gambar menjadi array dengan masing-masing array berisi gambar untuk satu baris
  const rows = Array.from({ length: Math.ceil(totalImages / imagesPerRow) }, (_, rowIndex) =>
    Array.from({ length: imagesPerRow }, (_, colIndex) => {
      const imageIndex = rowIndex * imagesPerRow + colIndex + 1;
      if (imageIndex <= totalImages) {
        const imageSource = getImageSource(imageIndex);
        return (
          <Col key={colIndex} md={4}>
            <Card className="gallery-card">
              {/* Konten Kartu Galeri */}
              <Card.Img variant="top" src={imageSource} alt={`Foto ${imageIndex}`} style={{ width: imageDimension, height: imageDimension }} />
            </Card>
          </Col>
        );
      } else {
        return null; // Mengembalikan null untuk kolom yang tidak diisi pada baris terakhir jika tidak ada cukup gambar
      }
    })
  );

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <Container>
        {rows.map((row, index) => (
          <Row key={index}>{row}</Row>
        ))}
      </Container>
    </div>
  );
};

// Fungsi untuk mendapatkan sumber gambar berdasarkan indeks
const getImageSource = (index) => {
  switch (index) {
    case 1:
      return Foto1;
    case 2:
      return Foto2;
    case 3:
      return Foto3;
    case 4:
      return Foto4;
    case 5:
      return Foto5;
    case 6:
      return Foto6;
    case 7:
      return Foto7;
    case 8:
      return Foto8;
    case 9:
      return Foto9;
    default:
      return null;
  }
};

export default Gallery;
