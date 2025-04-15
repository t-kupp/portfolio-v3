import Divider from "./Divider";

export default function HeroSection() {
  return (
    <div className="flex min-h-[80vh] flex-col justify-end">
      <Divider />
      <div className="bg-background px-4 py-16 lg:px-8">
        <h1 className="py-10">
          Jan-Thorge
          <br />
          Kupper
        </h1>
        <p>Fullstack Developer</p>
      </div>
    </div>
  );
}
