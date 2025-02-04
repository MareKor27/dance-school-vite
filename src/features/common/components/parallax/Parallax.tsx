import { useEffect, useRef } from "react";
import style from "./parallax.module.css";
import useStyles from "../../../app/hooks/useStyle";

export function Parallax() {
  const s = useStyles(style);

  const parallaxImage = useRef<HTMLImageElement | null>(null);
  const parallaxText = useRef<HTMLDivElement | null>(null);
  const textPosition = 270;
  const imagePosition = -100;

  useEffect(() => {
    const setInitialParallaxPositions = () => {
      const positionY = window.scrollY;

      if (parallaxImage.current) {
        parallaxImage.current.style.top =
          positionY * -0.1 + imagePosition + "px";
      }
      if (parallaxText.current) {
        parallaxText.current.style.top = positionY * -0.2 + textPosition + "px";
      }
    };

    const handleScroll = () => {
      const positionY = window.scrollY;

      if (parallaxImage.current) {
        parallaxImage.current.style.top =
          positionY * -0.1 + imagePosition + "px";
      }
      if (parallaxText.current) {
        parallaxText.current.style.top = positionY * -0.2 + textPosition + "px";
      }
    };
    setInitialParallaxPositions();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={s(`parallax`)}>
      <div className={s(`header`)}>
        <img
          src="/images/guest/slider.jpg"
          className={s(`background`)}
          ref={parallaxImage}
        />
        <div className={s(`text`)} ref={parallaxText}>
          <p>
            Witamy w szkole <b>MAX DANCE </b>
          </p>
          <p>ZAPRASZAMY !!!</p>
        </div>
      </div>
    </div>
  );
}
