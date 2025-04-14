export default function SectionHeadline({ title }) {
  return (
    <div className="flex items-center gap-3 pt-3 pb-6 text-[0.75rem]">
      <div className="bg-foreground h-3 w-3 rounded-full transition-colors duration-500" />{" "}
      {title}
    </div>
  );
}
