# AGENTS.md

## What This Document Is

This file is the frontend engineering operating standard for EQUITES IP DEVELOPMENT LLC.
It defines how production code is designed, reviewed, and shipped in this repository.

All contributors and coding agents must follow this document.

## 1) Project Purpose

EQUITES is a venture studio website that communicates credibility, vision, and execution capability in software and IP development.

The website must:

- Present EQUITES as a high-trust, high-competence organization.
- Convert visitors into qualified business conversations.
- Reflect product-grade engineering quality in every interaction.
- Scale as the brand, offerings, and ventures evolve.

Every code change should improve one or more of these outcomes.

## 2) Technology Stack

Current stack (authoritative unless explicitly changed in repo configuration):

- Next.js (App Router)
- React
- TypeScript (strict mode expected)
- Tailwind CSS
- ESLint
- PostCSS

Rules:

- Prefer framework-native solutions before adding dependencies.
- Add a dependency only when it provides clear long-term value and cannot be solved cleanly with existing stack capabilities.
- Keep bundle impact low and measurable.

<!-- BEGIN:nextjs-agent-rules -->
## Next.js Compatibility Rule

This project may use a Next.js version with breaking changes compared to historical conventions.

- Before implementing framework-sensitive code, review local docs in node_modules/next/dist/docs/.
- Follow current framework conventions over outdated patterns.
- Treat deprecation warnings as action items, not noise.
<!-- END:nextjs-agent-rules -->

## 3) Coding Standards

Production quality is mandatory.

- No placeholder code, mock stubs, or TODO-driven critical paths.
- No dead code, commented-out blocks, or speculative abstractions.
- Keep logic explicit and readable.
- Prefer composition over deeply nested conditionals.
- Keep functions and components focused on one responsibility.
- Avoid premature optimization and premature generalization.

Code must be:

- Correct
- Testable
- Observable through clear behavior
- Easy for the next engineer to reason about

## 4) Component Architecture

Use reusable, composable UI primitives and feature-level composition.

Guidelines:

- Build small, focused components with clear props.
- Lift shared behavior into reusable components or hooks when reused at least twice or expected to be reused imminently.
- Separate concerns:
	- Presentation: visual and semantic markup
	- Behavior: interaction logic
	- Data: fetching/transformation at appropriate boundary
- Keep server and client responsibilities explicit.
- Avoid monolithic page components.

Preferred structure pattern:

- Shared primitives in common UI areas.
- Feature components near feature entry points.
- Page files assemble sections rather than contain all details inline.

## 5) Folder Structure Philosophy

Organize by responsibility and domain, not by arbitrary file type alone.

Principles:

- Keep related files close to where they are used.
- Keep global/shared assets clearly separated from feature-local code.
- Minimize cross-folder coupling.
- Keep import paths predictable and stable.

As the codebase grows, prefer structure that supports:

- Discoverability
- Local reasoning
- Safe refactoring

## 6) Naming Conventions

Naming must communicate intent unambiguously.

- Components: PascalCase (Example: HeroSection)
- Hooks: camelCase with use prefix (Example: useScrollReveal)
- Utilities: camelCase verbs or verb phrases (Example: formatPhoneNumber)
- Constants: UPPER_SNAKE_CASE only for true constants
- Types/Interfaces: PascalCase (Example: VentureCardProps)
- CSS class groupings: semantic by purpose, not appearance-only labels

Avoid:

- Single-letter names (except trivial loop indices)
- Generic names like data, item, thing when domain names are available
- Misleading abbreviations

## 7) TypeScript Rules

Type safety is non-negotiable.

- No use of any unless absolutely unavoidable and justified.
- Prefer explicit types at public boundaries (props, exported functions, API contracts).
- Use union and discriminated union types for state variants.
- Use readonly semantics for immutable data where appropriate.
- Model domain concepts with named types.
- Narrow unknown values safely before use.

Do not silence errors with unsafe assertions if a proper type model can solve it.

## 8) React Best Practices

- Use functional components.
- Keep render output deterministic and side-effect free.
- Use hooks correctly with complete dependency arrays.
- Keep state minimal and derived values computed, not duplicated.
- Prefer server rendering/default server components where suitable.
- Add client boundaries only where interactivity is required.
- Use stable keys for lists; never rely on array index when order can change.

Avoid:

- Prop drilling across many layers when composition can solve it.
- Overuse of global state.
- Inline complex logic in JSX when extraction improves readability.

## 9) Tailwind CSS Conventions

Tailwind should remain intentional, consistent, and scalable.

- Mobile-first utilities first, then progressively enhance at larger breakpoints.
- Group class names by purpose:
	- Layout
	- Spacing
	- Typography
	- Color
	- Effects/animation
- Prefer design tokens via CSS variables for colors, spacing rhythm, and typography scales when repeated.
- Extract repeated utility patterns into reusable components.
- Avoid long, unreadable class chains when a component abstraction is clearer.

No arbitrary styling sprawl.

## 10) Accessibility Requirements

Accessibility is a core quality attribute, not a post-release task.

Minimum requirements:

- Semantic HTML landmarks and heading hierarchy.
- Keyboard navigability for all interactive elements.
- Visible focus states.
- Sufficient color contrast.
- Meaningful alt text for informative images.
- Proper labels for form controls.
- ARIA only when native semantics are insufficient.

All shipped UI must be usable without a mouse.

## 11) Performance Requirements

Performance work is continuous and built into implementation decisions.

- Optimize Core Web Vitals by default.
- Minimize JavaScript shipped to client.
- Use server rendering and static generation strategically.
- Lazy-load non-critical UI and media.
- Use optimized image handling.
- Avoid unnecessary re-renders through proper memoization boundaries where justified.
- Keep CSS and DOM complexity lean.

Every feature should preserve fast initial load and smooth interaction on mobile devices.

## 12) Animation Guidelines

Animation must support clarity and brand expression, never distract.

- Purposeful only: guide attention, communicate state changes, or improve perceived continuity.
- Keep durations short and responsive.
- Prefer transform and opacity for performant motion.
- Avoid layout-thrashing properties in frequent animations.
- Respect reduced-motion user preferences.
- Use consistent easing and timing rhythm across the site.

No decorative animation that harms readability or usability.

## 13) Git Commit Conventions

Commit history must be readable and operationally useful.

- Use focused commits with a single logical purpose.
- Keep messages concise and imperative.
- Recommended format:
	- type(scope): short summary
- Types:
	- feat
	- fix
	- refactor
	- style
	- perf
	- docs
	- chore
- Include context in body when behavior changes are non-obvious.

Do not mix unrelated changes in one commit.

## 14) General Engineering Principles

- Build for production from the first line.
- Prefer simple solutions that can evolve.
- Optimize for maintainability and team velocity.
- Reuse before reinventing.
- Minimize dependencies and conceptual overhead.
- Make behavior explicit and predictable.
- Keep UI responsive and mobile-first.
- Use semantic HTML as the default.
- Document non-obvious decisions in code comments or PR context.

Definition of done for any change:

- Meets functional requirement
- Meets accessibility requirement
- Meets performance expectation
- Maintains codebase consistency
- Is ready to ship without follow-up cleanup

## Non-Negotiable Checklist

Every implementation in this repository must satisfy all items below:

- Production quality only
- No placeholder code
- No unnecessary dependencies
- Reusable components whenever possible
- Mobile-first development
- Semantic HTML
- Keep code simple, scalable, and maintainable
