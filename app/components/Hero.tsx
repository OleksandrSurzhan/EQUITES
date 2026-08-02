import Link from "next/link";

export function Hero() {
  return (
    <section
      className="content-container flex min-h-[calc(100svh-4.5rem)] items-center justify-center py-[var(--space-4xl)]"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-[56.25rem] text-center md:-translate-y-[3svh]">
        <p className="mx-auto text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-[var(--color-accent)] lg:whitespace-nowrap">
          VENTURE STUDIO
        </p>

        <h1
          id="hero-heading"
          className="mx-auto mt-[4rem] max-w-[16ch] text-[clamp(3.5rem,5.8vw,4.875rem)] font-semibold leading-[0.99] tracking-[-0.024em] text-[var(--color-text-primary)]"
        >
          Where ventures take shape.
        </h1>

        <p className="mx-auto mt-[2.25rem] max-w-[43rem] text-[clamp(1.125rem,1.55vw,1.25rem)] leading-[1.55] text-[var(--color-text-secondary)]">
          EQUITES develops intellectual property, software, and new ventures
          through disciplined engineering and long-term thinking.
        </p>

        <div className="mt-[3rem] flex justify-center">
          <Link
            href="#contact"
            className="inline-flex min-h-[3.625rem] items-center justify-center gap-[0.5rem] rounded-[var(--radius-md)] border border-[#D4A017] px-[2rem] text-[var(--type-small)] font-medium tracking-[0.01em] text-[var(--color-text-primary)] transition-[background-color,border-color,color] duration-[var(--motion-duration-normal)] ease-[var(--motion-ease-standard)] hover:bg-[rgb(212_160_23_/_0.08)] hover:border-[rgb(212_160_23_/_0.92)]"
          >
            Start a Conversation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
