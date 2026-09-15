"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const carouselImages = [
  { image: "/images/carousel/current-team-2025.png", caption: "SJSU Robotics Team 2025" },
  { image: "/images/carousel/grads_rover.webp", caption: "Graduates with the rover" },
  { image: "/images/carousel/halloween-25.png", caption: "Halloween 2025" },
  { image: "/images/carousel/lockheed-martin-tour.jpg", caption: "Lockheed Martin facility tour" },
  { image: "/images/carousel/talking-open-sauce.jpg", caption: "Presenting at Open Sauce" },
  { image: "/images/carousel/toborlife-group-photo.jpeg", caption: "Toborlife tour" },
];

const INSTAGRAM_EMBED_SCRIPT_ID = "instagram-embed-script";
const INSTAGRAM_EMBED_SCRIPT_URL = "https://www.instagram.com/embed.js";

export default function Updates() {
  const [current, setCurrent] = useState(0);
  const [isInstagramReady, setIsInstagramReady] = useState(false);
  const instagramEmbedRef = useRef<HTMLDivElement>(null);
  const total = carouselImages.length;

  const goTo = (direction: 1 | -1) => {
    setCurrent((previous) => (previous + direction + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  useEffect(() => {
    const embed = instagramEmbedRef.current;
    if (!embed) return;

    const observer = new MutationObserver(() => {
      if (embed.querySelector("iframe")) {
        setIsInstagramReady(true);
        observer.disconnect();
      }
    });

    observer.observe(embed, { childList: true, subtree: true });

    const processEmbeds = () => {
      window.instgrm?.Embeds.process();

      if (embed.querySelector("iframe")) {
        setIsInstagramReady(true);
        observer.disconnect();
      }
    };

    const existingScript = document.getElementById(
      INSTAGRAM_EMBED_SCRIPT_ID,
    ) as HTMLScriptElement | null;
    let script = existingScript;

    if (window.instgrm) {
      processEmbeds();
    } else if (script) {
      script.addEventListener("load", processEmbeds, { once: true });
    } else {
      script = document.createElement("script");
      script.id = INSTAGRAM_EMBED_SCRIPT_ID;
      script.src = INSTAGRAM_EMBED_SCRIPT_URL;
      script.async = true;
      script.addEventListener("load", processEmbeds, { once: true });
      document.body.appendChild(script);
    }

    return () => {
      observer.disconnect();
      script?.removeEventListener("load", processEmbeds);
    };
  }, []);

  return (
    <div className="page" style={{ paddingTop: "104px" }}>
      <section>
        <div className="container">
          <p className="eyebrow">News</p>
          <h1 className="page-title">Updates</h1>
          <p className="body-text-large">
            Follow our progress as we design, build, and compete.
          </p>
        </div>
      </section>

      <section className="instagram-section">
        <div className="container">
          <div
            ref={instagramEmbedRef}
            className={`instagram-embed${isInstagramReady ? " is-ready" : ""}`}
            aria-busy={!isInstagramReady}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/sjsurobotics/"
              data-instgrm-version="14"
            >
              <a href="https://www.instagram.com/sjsurobotics/" target="_blank" rel="noreferrer">
                View SJSU Robotics on Instagram
              </a>
            </blockquote>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="carousel">
            <button className="carousel-arrow carousel-arrow-left" onClick={() => goTo(-1)} aria-label="Previous update">
              &#8249;
            </button>
            <div
              className="carousel-track"
              style={{
                transform: `translate3d(-${current * 100}%, 0, 0)`,
              }}
            >
              {carouselImages.map((img) => (
                <div key={img.image} className="carousel-slide">
                  <div className="carousel-image">
                    <img
                      src={img.image}
                      alt={img.caption}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <p className="carousel-caption">{img.caption}</p>
                </div>
              ))}
            </div>
            <button className="carousel-arrow carousel-arrow-right" onClick={() => goTo(1)} aria-label="Next update">
              &#8250;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
