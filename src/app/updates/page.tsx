"use client";

import { useState, useEffect, useRef } from "react";

export default function Updates() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = carouselImages.length;

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  // Handle seamless loop
  useEffect(() => {
    if (current === total) {
      // At the cloned first slide - jump to real first
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
    if (current === -1) {
      // At the cloned last slide - jump to real last
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(total - 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [current, total]);

  // Extended slides: [clone of last, ...originals, clone of first]
  const extendedSlides = [
    carouselImages[total - 1],
    ...carouselImages,
    carouselImages[0],
  ];

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
              onClick={goToPrev}
            >
              &#8249;
            </button>
            <div
              ref={trackRef}
              className="carousel-track"
              style={{
                transform: `translateX(-${(current + 1) * 100}%)`,
                transition: isTransitioning ? "transform 0.5s ease" : "none",
              }}
            >
              {extendedSlides.map((img, i) => (
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
              onClick={goToNext}
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
