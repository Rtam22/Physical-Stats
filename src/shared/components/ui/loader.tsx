import Lottie from "lottie-react";
import navLoader from "../../../assets/loader/nav-loading.json";
import bodyLoader from "../../../assets/loader/body-loading.json";

type LoaderProps = {
  type: "body" | "nav";
  size?: number;
  loop?: boolean;
};

function Loader({ type, size = 120, loop = true }: LoaderProps) {
  const colorFilter = "brightness(0) invert(1)";
  return (
    <div style={{ width: size, height: size }}>
      <Lottie
        style={{ filter: colorFilter }}
        animationData={type === "body" ? bodyLoader : navLoader}
        loop={loop}
      />
    </div>
  );
}

export default Loader;
