"use client";

import { useState, useEffect } from "react";

export default function Updates() {
  const [current, setCurrent] = useState(0);
  const total = carouselImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goToSlide = (n: number) => {
    setCurrent(((n % total) + total) % total);
  };

  return (
    <div className="page" style={{ paddingTop: "64px" }}>
      <section>
        <div className="container">
          <p className="eyebrow">News</p>
          <h1 className="page-title">Updates</h1>
          <p className="body-text-large">
            Follow our progress as we design, build, and compete.
          </p>
        </div>
      </section>

      {/* Image Carousel */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="carousel">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={() => goToSlide(current - 1)}
            >
              &#8249;
            </button>
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {carouselImages.map((img, i) => (
                <div key={i} className="carousel-slide">
                  <div className="carousel-image">
                    <img src={img.image} alt={img.caption} />
                  </div>
                  <p className="carousel-caption">{img.caption}</p>
                </div>
              ))}
            </div>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={() => goToSlide(current + 1)}
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Carousel images - add more by adding to this array
const carouselImages = [
  { image: "/images/carousel/current-team-2025.png", caption: "SJSU Robotics Team 2025" },
  { image: "/images/carousel/grads_rover.webp", caption: "Graduates with the rover" },
  { image: "/images/carousel/halloween-25.png", caption: "Halloween 2025" },
  { image: "/images/carousel/lockheed-martin-tour.jpg", caption: "Lockheed Martin facility tour" },
  { image: "/images/carousel/talking-open-sauce.jpg", caption: "Presenting at Open Sauce" },
  { image: "/images/carousel/toborlife-group-photo.jpeg", caption: "Toborlife tour" },
];
