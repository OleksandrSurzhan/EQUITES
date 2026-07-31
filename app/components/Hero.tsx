import Link from "next/link";

export function Hero() {
  return (
    <section
      className="content-container flex min-h-[100svh] items-center py-[var(--space-4xl)]"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-[42.5rem] md:pl-[var(--space-sm)] md:translate-y-[var(--space-sm)]">
        <p className="max-w-[44rem] text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)] lg:whitespace-nowrap">
          VENTURE STUDIO • INTELLECTUAL PROPERTY DEVELOPMENT
        </p>

        <h1
          id="hero-heading"
          className="mt-[calc(var(--space-lg)+var(--space-2xs))] max-w-[42.5rem] text-[clamp(3.4rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.022em] text-[var(--color-text-primary)] xl:max-w-[10.6ch]"
        >
          Where future companies are built.
        </h1>

        <p className="mt-[var(--space-xl)] max-w-[35rem] text-[clamp(1.0625rem,1.4vw,1.1875rem)] leading-[1.55] text-[color-mix(in_srgb,var(--color-text-secondary)_86%,white_14%)]">
          EQUITES develops software, intellectual property, and new ventures
          through disciplined product engineering and long-term thinking.
        </p>

        <div className="mt-[calc(var(--space-2xl)-var(--space-2xs))] flex flex-col items-start gap-[var(--space-md)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-[var(--space-lg)]">
          <Link
            href="#contact"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] px-[var(--space-lg)] text-[var(--type-small)] font-medium tracking-[0.01em] text-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-standard)] hover:border-[var(--color-border-strong)]"
          >
            Start a Conversation
          </Link>

          <Link
            href="#philosophy"
            className="inline-flex min-h-[3.25rem] items-center justify-center text-[var(--type-small)] font-medium tracking-[0.01em] text-[var(--color-text-secondary)] underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-standard)] hover:text-[var(--color-text-primary)] hover:decoration-[var(--color-text-secondary)]"
          >
            Explore Our Philosophy
          </Link>
        </div>
      </div>
    </section>
  );
}
