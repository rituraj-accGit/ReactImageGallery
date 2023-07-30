import React, { useState, useEffect } from 'react';
import ImageCard from './Components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch('https://pixabay.com/api/?key=36339648-f8d6e58022499cf85b9e08753&q=yellow+flowers&image_type=photo&pretty=true')
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setLoading(false);
    })
    .catch(err => console.log(err));
  }, []);

  return (
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-2">
          {images.map(image => (
            <ImageCard key={image.id} image={image}/>
          ))}
        </div>
      </div>
  );
}
export default App;