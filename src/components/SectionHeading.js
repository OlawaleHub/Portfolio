// src/components/SectionHeading.js
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="reveal max-w-2xl mb-14">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/60 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}