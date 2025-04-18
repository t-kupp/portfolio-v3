import Divider from "./Divider";
import HorizontalScroller from "./HorizontalScroller";
import { Parallax } from "react-scroll-parallax";

export default function HeroSection() {
  return (
    <div className="relative flex min-h-[80vh] w-full flex-col justify-center gap-4">
      <Parallax speed={-11}>
        <HorizontalScroller />
      </Parallax>
      <Parallax speed={3} className="mix-blend-difference">
        <p className="max-w-[20rem] place-self-center text-center text-white">
          Fullstack Developer based in Stockholm, Sweden.
        </p>
      </Parallax>
    </div>
  );
}
