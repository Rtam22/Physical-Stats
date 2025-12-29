import { useEffect, useMemo, useRef, useState } from "react";
import "./carousel.css";
import { capitalize } from "../../../utils/textUtils";

export type CarouselTabContent = {
  title: string;
  image: string;
};

type CarouselWithTabs = {
  type: "tabs";
  content: CarouselTabContent[];
};

type BaseCarousel = {
  type: "dots";
  content: string[];
};

type CarouselProps = BaseCarousel | CarouselWithTabs;

const INTERVAL_TIMER = 6000;

function Carousel({ type, content }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentImage = useMemo(() => {
    return type === "tabs"
      ? content[currentIndex].image
      : content[currentIndex];
  }, [currentIndex]);
  const intervalRef = useRef<number | null>(null);

  function startInterval() {
    stopInterval();
    intervalRef.current = window.setInterval(() => {
      handleIndex(1);
    }, INTERVAL_TIMER);
  }

  function stopInterval() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  useEffect(() => {
    startInterval();
    return stopInterval;
  }, []);

  function handleIndex(step: -1 | 1) {
    setCurrentIndex((prev) => {
      const next = prev + step;
      if (next < 0) return content.length - 1;
      if (next >= content.length) return 0;
      return next;
    });
  }

  function handleChangeImage(step: -1 | 1) {
    startInterval();
    handleIndex(step);
  }

  return (
    <div className="carousel">
      {type === "tabs" && (
        <div className="tab-container">
          {content.map((item, index) => {
            return (
              <button
                key={index}
                className={`carousel-tab ${
                  currentImage === item.image ? "active" : ""
                }`}
                onClick={() => {
                  startInterval();
                  setCurrentIndex(index);
                }}
              >
                {capitalize(item.title)}
              </button>
            );
          })}
        </div>
      )}
      <div className="image-container">
        <button
          name="forward"
          className="button-left"
          onClick={() => handleChangeImage(-1)}
        >
          ‹
        </button>

        <img
          key={currentImage}
          className="carousel-img"
          src={currentImage}
          alt="Team image"
        />

        <button
          name="back"
          className="button-right"
          onClick={() => handleChangeImage(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Carousel;
