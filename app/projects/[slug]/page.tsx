import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { Reveal } from "../../components/motion";
import { ToolIcon } from "../../components/tool-icon";
import { projects, getProject } from "../../data/projects";

const TOOLS = ["Figma", "Framer", "Sketch", "OpenAI"];

// Projects that are still being developed
const IN_PROGRESS_SLUGS = ["ai-website", "saas-website"];

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found — Kushal",
    };
  }

  if (IN_PROGRESS_SLUGS.includes(slug)) {
    return {
      title: `${project.title} — Coming Soon`,
    };
  }

  return {
    title: `${project.title} — Kushal`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  // --------------------------------------------------
  // IN-PROGRESS PROJECTS
  // --------------------------------------------------

  if (IN_PROGRESS_SLUGS.includes(slug)) {
    return (
      <>
        <Navigation />

        <main className="flex min-h-[80vh] items-center justify-center px-6 pt-32">
          <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
            <Reveal variant="up">
              <span className="text-hand-1 text-blue-1">
                #In Progress
              </span>
            </Reveal>

            <Reveal variant="up" delay={0.05}>
              <h1 className="mt-5 text-h1 text-black-1">
                {project.title}
              </h1>
            </Reveal>

            <Reveal variant="up" delay={0.1}>
              <p className="mt-5 max-w-[520px] text-body-2 text-grey-3">
                This project is currently under development. I&apos;m working
                on the design and implementation and will make it available
                here once it&apos;s ready.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.15}>
              <div className="mt-8 rounded-[24px] bg-grey-1 px-8 py-6">
                <span className="text-hand-2 text-blue-1">
                  Coming Soon :)
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.2}>
              <Link
                href="/#works"
                className="mt-8 rounded-2xl bg-black-1 px-6 py-3 text-body-1 text-white-1 transition-all duration-200 hover:brightness-110"
              >
                Back to Projects
              </Link>
            </Reveal>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // --------------------------------------------------
  // READY PROJECT
  // --------------------------------------------------

  const meta = [
    ["#TIMELINE", project.meta.timeline],
    ["#ROLE", project.meta.role],
    ["#INDUSTRY", project.meta.industry],
    ["#RESULT", project.meta.result],
  ];

  return (
    <>
      <Navigation />

      <main className="px-6 pt-36 md:px-10">
        <div className="mx-auto max-w-[1200px]">

          {/* Hero */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

            <div className="flex flex-col items-start gap-5">

              <Link
                href="/#works"
                className="inline-flex items-center gap-2 rounded-full bg-white-1 px-4 py-2.5 text-body-1 text-black-1 ring-1 ring-grey-2 transition-colors hover:bg-grey-1"
              >
                <svg
                  viewBox="0 0 24 20"
                  fill="none"
                  className="h-4 w-5 text-blue-1"
                  aria-hidden
                >
                  <path
                    d="M21 11c-5-1-9 0-12 3M9 8l-4 6 5 3"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Back to Projects
              </Link>

              <span className="text-hand-1 text-blue-1">
                #Webdesign
              </span>

              <h1 className="text-h1 text-black-1">
                {project.title}
              </h1>

              <p className="max-w-[480px] text-body-2 text-grey-3">
                {project.subtitle}
              </p>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-6">
              <span className="text-hand-2 text-black-1">
                The Tools I Used
              </span>

              <div className="flex flex-wrap gap-3">
                {TOOLS.map((tool) => (
                  <ToolIcon
                    key={tool}
                    name={tool}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="relative mt-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

              {project.gallery.map((image, index) => (
                <Reveal
                  key={image}
                  variant="scale"
                  delay={index * 0.04}
                >
                  <div className="relative aspect-[1.12] w-full overflow-hidden rounded-[28px] bg-grey-1">
                    <Image
                      src={image}
                      alt={`${project.title} screen ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 580px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}

            </div>

            <Image
              src="/framer/framer-icon.png"
              alt=""
              width={72}
              height={72}
              className="pointer-events-none absolute -bottom-4 right-2 h-16 w-16 rotate-6"
            />
          </div>

          {/* Meta */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

            {meta.map(([label, value]) => (
              <Reveal
                key={label}
                variant="up"
              >
                <div className="flex h-full flex-col gap-2 rounded-[20px] bg-white-1 p-6 ring-1 ring-grey-2">

                  <span className="text-hand-1 uppercase text-blue-1">
                    {label}
                  </span>

                  <span className="font-display text-[1.5rem] font-semibold tracking-[-0.04em] text-black-1">
                    {value}
                  </span>

                </div>
              </Reveal>
            ))}

          </div>

          {/* About */}
          <div className="mt-24 flex flex-col items-start gap-7 pb-24">

            <Reveal variant="up">
              <h2 className="text-h2 text-black-1">
                About The Project
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6">

              {project.description.map((paragraph, index) => (
                <Reveal
                  key={index}
                  variant="up"
                  delay={index * 0.03}
                >
                  <p className="max-w-[920px] text-[1.375rem] leading-[1.5] tracking-[-0.02em] text-grey-3">
                    {paragraph}
                  </p>
                </Reveal>
              ))}

            </div>

            <a
              href={project.livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-2xl bg-blue-1 px-5 py-3 text-body-1 text-white-1 transition-all duration-200 hover:brightness-105"
            >
              Live Preview
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}