"use client";

import Image from "next/image";
import Reveal from "./reveal";
import ThemeToggle from "./theme-toggle";

type Project = {
  number: string;
  title: string;
  meta: string;
  description: string;
  details: string[];
  tags: string[];
  metric?: { before: string; after: string; label: string };
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Synthetic Image Detector",
    meta: "Computer vision / deployed web app",
    description:
      "A dual-branch classifier that reads both the RGB image and its FFT frequency map before making a prediction.",
    details: [
      "Generated images show lower mid-frequency energy and higher high-frequency energy than real photos.",
      "Grad-CAM shows the model often focuses on background artifacts rather than the main subject."
    ],
    tags: ["Python", "CNN", "FFT", "Grad-CAM", "Computer Vision"],
    metric: { before: "94.42%", after: "95.11%", label: "accuracy, CNN baseline to dual-branch" },
    links: [
      { label: "Live demo", href: "https://deepfake-detector-c4cdq8sjhqywu5y8zgjgak.streamlit.app/" },
      { label: "Code", href: "https://github.com/atel12345/deepfake-detector" }
    ]
  },
  {
    number: "02",
    title: "Scopus Bibliometric AI Agent",
    meta: "Innovpal internship / summer 2026",
    description:
      "A research profile to Excel pipeline that generates a full bibliometric report from a Scopus profile link.",
    details: [
      "Checks first-author status by author IDs, finds the SCImago quartile for the exact publication year, and exports structured statistics.",
      "FastAPI and React web app with authentication, live progress tracking, report history, and an OpenAlex fallback."
    ],
    tags: ["Python", "Scopus API", "OpenAlex", "FastAPI", "React", "Excel"],
    links: [{ label: "Repository", href: "https://github.com/atel12345/ai-scopus" }]
  },
  {
    number: "03",
    title: "Maze Mayhem",
    meta: "NES game / 6502 Assembly",
    description:
      "A custom ROM with randomly generated mazes, shooting, enemies, multiple levels, music, sound effects, and pause states.",
    details: [
      "Built within NES hardware limits and tested in an emulator.",
      "Learned memory layout, graphics, controller input, and sound programming."
    ],
    tags: ["6502 Assembly", "NES", "Game Logic", "Sound"],
    links: [{ label: "Repository", href: "https://github.com/atel12345/maze-mayhem" }]
  },
  {
    number: "04",
    title: "Recruitment Platform",
    meta: "Team project with Youness Sbia",
    description:
      "A role-based recruitment platform for candidates, recruiters, and administrators.",
    details: [
      "Laravel backend with JWT authentication, secured API, job offers, and application management.",
      "React frontend with a documented API."
    ],
    tags: ["Laravel", "React", "JWT", "REST API", "PHP"],
    links: [{ label: "Repository", href: "https://github.com/atel12345/projet_laravel-TELOUANI-Amine-SBIA-Youness-" }]
  }
];

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}

export default function Portfolio() {
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="mono text-xs font-semibold tracking-[0.12em] text-[var(--foreground)]">
            AT<span className="text-[var(--accent)]">.</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            <a href="#about" className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">About</a>
            <a href="#projects" className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">Projects</a>
            <a href="#experience" className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">Experience</a>
            <a href="#contact" className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <section id="top" className="mx-auto flex min-h-[calc(100dvh-72px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:py-20">
        <div className="w-full">
          <p className="mono mb-6 text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Computer engineering + AI</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--foreground)] sm:text-6xl lg:text-8xl">
            Amine Telouani builds systems that turn signals into decisions.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
            Engineering student at ENSAM Casablanca, working across applied AI, data engineering, and full-stack products.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 active:translate-y-px">
              View projects
            </a>
            <a href="#contact" className="rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:translate-y-px">
              Contact
            </a>
          </div>
          <div className="mt-14 grid max-w-5xl border-y border-[var(--line)] sm:grid-cols-3">
            <div className="py-4 sm:pr-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Education</p>
              <p className="mt-2 text-sm font-medium">ENSAM Casablanca</p>
            </div>
            <div className="border-t border-[var(--line)] py-4 sm:border-l sm:border-t-0 sm:px-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Focus</p>
              <p className="mt-2 text-sm font-medium">AI + Data + Full-stack</p>
            </div>
            <div className="border-t border-[var(--line)] py-4 sm:border-l sm:border-t-0 sm:pl-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Result</p>
              <p className="mt-2 text-sm font-medium">94.42% → 95.11% detector accuracy</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.65fr_0.55fr_0.8fr] lg:gap-16">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">A practical foundation for ambitious systems.</h2>
          </Reveal>
          <Reveal delay={0.04}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface-strong)]">
              <Image
                src="/DSC_0558.JPG"
                alt="Portrait of Amine Telouani"
                fill
                sizes="(max-width: 1023px) 100vw, 28vw"
                className="object-cover object-top grayscale-[18%]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="max-w-2xl">
            <p className="text-xl leading-9 text-[var(--foreground)]">
              I am studying Computer Engineering and Artificial Intelligence at ENSAM Casablanca.
            </p>
            <p className="mt-6 leading-8 text-[var(--muted)]">
              Before ENSAM, I studied Instrumentation Techniques and Quality Management at École Supérieure de Technologie de Safi. That mix keeps my work close to real measurements, reliable processes, and useful software.
            </p>
            <div className="mt-10 grid gap-5 border-t border-[var(--line)] pt-6 sm:grid-cols-2">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Based in</p>
                <p className="mt-2 font-medium">Casablanca, Morocco</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Selected projects</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Research, product work, and low-level experiments with a clear technical center.</p>
          </div>
        </Reveal>
        <div className="mt-14 space-y-5">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className={`rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-9 ${index === 0 ? "lg:p-11" : ""}`}>
                <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="mono text-sm text-[var(--accent)]">{project.number}</span>
                      <span className="mono text-[10px] uppercase tracking-[0.17em] text-[var(--muted)]">{project.meta}</span>
                    </div>
                    <h3 className="mt-12 max-w-lg text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">{project.title}</h3>
                    <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">{project.description}</p>
                    {project.metric ? (
                      <div className="mt-9 border-l-2 border-[var(--accent)] pl-5">
                        <div className="flex items-baseline gap-3">
                          <span className="mono text-3xl font-semibold tracking-[-0.06em]">{project.metric.before}</span>
                          <span className="text-xl text-[var(--muted)]">→</span>
                          <span className="mono text-3xl font-semibold tracking-[-0.06em] text-[var(--accent)]">{project.metric.after}</span>
                        </div>
                        <p className="mt-2 text-sm text-[var(--muted)]">{project.metric.label}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col justify-between">
                    <ul className="space-y-5 border-t border-[var(--line)] pt-6">
                      {project.details.map((detail) => (
                        <li key={detail} className="max-w-2xl text-sm leading-7 text-[var(--foreground)]">{detail}</li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">{tag}</span>
                        ))}
                      </div>
                      <div className="mt-7 flex flex-wrap gap-6">
                        {project.links.map((link) => <ArrowLink key={link.label} href={link.href}>{link.label}</ArrowLink>)}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-[var(--line)] bg-[var(--surface-strong)]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Experience and training</h2>
          </Reveal>
          <div className="relative ml-2 mt-14 border-l border-t border-[var(--line)]">
            {[
              ["Summer 2026 · 1 month", "Internship at innovpal", "AI and data engineering. See the Scopus Bibliometric AI Agent project."],
              ["3 days", "Orange Digital Center", "AI and ML training covering search algorithms, preprocessing, feature engineering, regression, evaluation metrics, and K-means clustering."],
              ["April 7-9, 2026", "GITEX Africa", "Attendee."],
              ["2025", "ENSAM Casablanca Forum des Entreprises", "Participant."]
            ].map(([date, title, detail], index) => (
              <Reveal key={title} delay={index * 0.05} className="relative grid gap-3 border-b border-[var(--line)] py-8 pl-7 sm:grid-cols-[150px_1fr] sm:gap-8 sm:pl-8">
                <span aria-hidden="true" className="absolute left-[-5px] top-10 h-2.5 w-2.5 rounded-full border-2 border-[var(--surface-strong)] bg-[var(--accent)]" />
                <p className="mono text-xs text-[var(--accent)] sm:pt-1">{date}</p>
                <div className="max-w-2xl">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 max-w-lg leading-7 text-[var(--muted)]">{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Skills I use to make things work.</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 border-t border-[var(--line)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Languages", ["Python", "JavaScript", "PHP", "6502 Assembly"]],
            ["AI / ML", ["Deep Learning", "CNNs", "Computer Vision", "Grad-CAM", "FFT analysis", "Regression", "Clustering"]],
            ["Web", ["React", "FastAPI", "Laravel", "REST APIs", "JWT"]],
            ["Data", ["Scopus API", "OpenAlex", "Excel export"]]
          ].map(([title, items], index) => (
            <Reveal key={title as string} delay={index * 0.05}>
              <h3 className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">{title}</h3>
              <ul className="mt-5 space-y-3">
                {(items as string[]).map((item) => <li key={item} className="text-[var(--foreground)]">{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Reveal>
            <h2 className="max-w-2xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Let&apos;s build something useful.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--muted)]">For collaboration, internships, or technical conversations, email is the fastest way to reach me.</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5 lg:items-end">
            <a href="mailto:a.telouani@gmail.com" className="w-full rounded-full bg-[var(--accent)] px-6 py-4 text-center text-sm font-semibold text-white transition hover:brightness-110 active:translate-y-px lg:w-auto">a.telouani@gmail.com</a>
            <div className="flex gap-6">
              <ArrowLink href="https://github.com/atel12345">GitHub</ArrowLink>
              <ArrowLink href="https://www.linkedin.com/in/amine-telouani-b735592a1/">LinkedIn</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>Amine Telouani</span>
        <span className="mono text-xs">Casablanca, Morocco</span>
      </footer>
    </main>
  );
}
