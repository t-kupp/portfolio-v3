import Divider from "./Divider";

export default function HeroSection() {
  return (
    <div className="">
      <div className="flex min-h-[80vh] flex-col justify-end py-16">
        <h1 className="py-10 text-[9rem] leading-[128px]">
          Jan-Thorge
          <br />
          Kupper
        </h1>
        <p className="text-2xl">Fullstack Developer</p>
      </div>
      <Divider />
    </div>
  );
}
