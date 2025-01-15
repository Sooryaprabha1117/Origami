import React from 'react';
import './Home.css';
import image from "../assets/home image.jpg";
import image1 from "../assets/home image1.jpg";
import image3 from "../assets/home img2.jpg";
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Origami Odyssey</h1>
        <p>Explore and learn more about Origami</p>
      </header>

      <div className="card-container">
        {/* Card 1: Image on the right, content on the left */}
        <div className="card reverse">
          <div className="card-content">
            <h2>"Discover the timeless art of origami, where paper meets creativity.
            Learn, create, and inspire with step-by-step tutorials and videos!"</h2>
            
          </div>
          <div className="card-image">
            <img src= {image3} alt="Mission" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Origin of Origami</h2>
            <p>Origami started in Japan as paper folding and grew into a beautiful art form that inspires creativity and focus.</p>
          </div>
          <div className="card-image">
            <img src= {image} alt="Mission" />
          </div>
        </div>

        {/* Card 2: Image on the left, content on the right */}
        <div className="card reverse">
         
          <div className="card-content">
            <h2>Mission</h2>
            <p>"Where art meets coding—blending the elegance of origami
            with the power of code to create an interactive art experience."</p>
          </div>
           <div className="card-image">
            <img src={image1} alt="Technology" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
