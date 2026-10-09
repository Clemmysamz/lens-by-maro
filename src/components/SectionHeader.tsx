type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#77736D]">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-serif text-[#171717] md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-[#4D4A46]">{description}</p>}
    </div>
  );
}
