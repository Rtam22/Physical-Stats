import Lottie from "lottie-react";
import navLoader from "../../../assets/loader/nav-loading.json";
import bodyLoader from "../../../assets/loader/body-loading.json";
import "./loader.css";

type LoaderProps = {
  type: "circle" | "dots";
  size?: number;
  loop?: boolean;
};

function Loader({ type, size = 120, loop = true }: LoaderProps) {
  const colorFilter = "brightness(0) invert(1)";
  return (
    <div className="loader-container" style={{ width: size, height: size }}>
      <Lottie
        style={{ filter: colorFilter, width: "100%", height: "100%" }}
        animationData={type === "circle" ? bodyLoader : navLoader}
        loop={loop}
      />
    </div>
  );
}

export default Loader;
