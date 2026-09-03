export function Coding() {
  return (
    <section id="coding-section" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="max-w-[650px]">
          <span className="text-hand-1 text-blue-1">
            #Coding & Open Source
          </span>

          <h2 className="mt-4 text-h2 text-black-1">
            My Coding Journey
          </h2>

          <p className="mt-4 text-body-2 text-grey-3">
            Solving DSA problems, building projects, and continuously
            improving my development skills.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* GitHub */}
          <div className="rounded-[28px] bg-grey-1 p-8">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-h3 text-black-1">
                  GitHub
                </h3>

                <p className="mt-1 text-body-1 text-grey-3">
                  @kushal200514
                </p>
              </div>

              <span className="text-3xl">
                💻
              </span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">

              <div>
                <p className="text-hand-1 text-grey-3">
                  Repositories
                </p>
                <p className="mt-1 text-2xl font-semibold text-black-1">
                  5
                </p>
              </div>

              <div>
                <p className="text-hand-1 text-grey-3">
                  Stars
                </p>
                <p className="mt-1 text-2xl font-semibold text-black-1">
                  0
                </p>
              </div>

              <div>
                <p className="text-hand-1 text-grey-3">
                  Followers
                </p>
                <p className="mt-1 text-2xl font-semibold text-black-1">
                  0
                </p>
              </div>

            </div>

            {/* Contribution graph */}
            <div className="mt-8 overflow-hidden rounded-2xl bg-white-1 p-4">
              <p className="mb-3 text-hand-1 text-grey-3">
                Contributions
              </p>

              <img
                src="https://ghchart.rshah.org/kushal200514"
                alt="Kushal's GitHub contribution graph"
                className="w-full"
              />
            </div>

            <a
              href="https://github.com/kushal200514"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-black-1 px-5 py-3 text-body-1 text-white-1 transition hover:opacity-80"
            >
              View GitHub →
            </a>
          </div>

          {/* LeetCode */}
          <div className="rounded-[28px] bg-grey-1 p-8">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-h3 text-black-1">
                  LeetCode
                </h3>

                <p className="mt-1 text-body-1 text-grey-3">
                  @kushal1405
                </p>
              </div>

              <span className="text-3xl">
                🧩
              </span>
            </div>

            <div className="mt-8">
              <p className="text-hand-1 text-grey-3">
                Problems Solved
              </p>

              <p className="mt-1 text-4xl font-semibold text-black-1">
                46
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">

              <div>
                <p className="text-hand-1 text-grey-3">
                  Easy
                </p>
                <p className="mt-1 text-2xl font-semibold text-black-1">
                  —
                </p>
              </div>

              <div>
                <p className="text-hand-1 text-grey-3">
                  Medium
                </p>
                <p className="mt-1 text-2xl font-semibold text-black-1">
                  —
                </p>
              </div>

              <div>
                <p className="text-hand-1 text-grey-3">
                  Hard
                </p>
                <p className="mt-1 text-2xl font-semibold text-black-1">
                  —
                </p>
              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-white-1 p-5">
              <p className="text-hand-1 text-grey-3">
                Languages
              </p>

              <div className="mt-3 flex gap-3">
                <span className="rounded-full bg-grey-1 px-4 py-2 text-body-1">
                  Java
                </span>

                <span className="rounded-full bg-grey-1 px-4 py-2 text-body-1">
                  Python
                </span>
              </div>
            </div>

            <a
              href="https://leetcode.com/u/kushal1405/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-black-1 px-5 py-3 text-body-1 text-white-1 transition hover:opacity-80"
            >
              View LeetCode →
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}