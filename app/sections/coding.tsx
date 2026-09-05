"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
  weekday: number;
};

type GitHubData = {
  login: string;
  name: string;
  avatarUrl: string;
  followers: {
    totalCount: number;
  };
  repositories: {
    totalCount: number;
  };
  starredRepositories: {
    totalCount: number;
  };
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
      weeks: {
        contributionDays: ContributionDay[];
      }[];
    };
  };
};

export function Coding() {
  const [github, setGithub] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setGithub(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("GitHub data error:", error);
        setLoading(false);
      });
  }, []);

  const calendar =
    github?.contributionsCollection.contributionCalendar;

  const contributionDays =
    calendar?.weeks.flatMap((week) => week.contributionDays) ?? [];

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

          {/* ================= GITHUB ================= */}
          <div className="rounded-[28px] bg-grey-1 p-8">

            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-h3 text-black-1">
                  GitHub
                </h3>

                <p className="mt-1 text-body-1 text-grey-3">
                  @{github?.login ?? "kushal200514"}
                </p>
              </div>

              <span className="text-3xl">
                💻
              </span>
            </div>

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-3 gap-4">

              <div>
                <p className="text-hand-1 text-grey-3">
                  Repositories
                </p>

                <p className="mt-1 text-2xl font-semibold text-black-1">
                  {loading
                    ? "..."
                    : github?.repositories.totalCount ?? 0}
                </p>
              </div>

              <div>
                <p className="text-hand-1 text-grey-3">
                  Stars
                </p>

                <p className="mt-1 text-2xl font-semibold text-black-1">
                  {loading
                    ? "..."
                    : github?.starredRepositories.totalCount ?? 0}
                </p>
              </div>

              <div>
                <p className="text-hand-1 text-grey-3">
                  Followers
                </p>

                <p className="mt-1 text-2xl font-semibold text-black-1">
                  {loading
                    ? "..."
                    : github?.followers.totalCount ?? 0}
                </p>
              </div>

            </div>

            {/* ================= CONTRIBUTION CALENDAR ================= */}
            <div className="mt-8 rounded-2xl bg-white-1 p-5">

              <div className="flex items-center justify-between">
                <p className="text-hand-1 text-grey-3">
                  Contributions
                </p>

                <p className="text-sm text-grey-3">
                  {calendar?.totalContributions ?? 0} this year
                </p>
              </div>

              {/* Calendar */}
              <div className="mt-5 overflow-x-auto pb-2">

                <div className="min-w-[700px]">

                  {/* Month labels */}
                  <div className="mb-2 ml-7 flex justify-between text-[10px] text-grey-3">
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                  </div>

                  <div className="flex gap-[3px]">

                    {/* Weekday labels */}
                    <div className="flex w-5 flex-col justify-between py-[2px] text-[9px] text-grey-3">
                      <span></span>
                      <span>Mon</span>
                      <span></span>
                      <span>Wed</span>
                      <span></span>
                      <span>Fri</span>
                      <span></span>
                    </div>

                    {/* Contribution columns */}
                    <div className="flex gap-[3px]">

                      {github
                        ? github.contributionsCollection.contributionCalendar.weeks.map(
                            (week, weekIndex) => (
                              <div
                                key={weekIndex}
                                className="flex flex-col gap-[3px]"
                              >
                                {week.contributionDays.map(
                                  (day) => (
                                    <div
                                      key={day.date}
                                      title={`${day.contributionCount} contributions on ${day.date}`}
                                      className="h-[10px] w-[10px] rounded-[2px] border border-black/5"
                                      style={{
                                        backgroundColor:
                                          day.contributionCount === 0
                                            ? "#ebedf0"
                                            : day.color,
                                      }}
                                    />
                                  )
                                )}
                              </div>
                            )
                          )
                        : Array.from({ length: 52 }).map(
                            (_, weekIndex) => (
                              <div
                                key={weekIndex}
                                className="flex flex-col gap-[3px]"
                              >
                                {Array.from({ length: 7 }).map(
                                  (_, dayIndex) => (
                                    <div
                                      key={dayIndex}
                                      className="h-[10px] w-[10px] rounded-[2px] bg-grey-2"
                                    />
                                  )
                                )}
                              </div>
                            )
                          )}

                    </div>
                  </div>

                  {/* Legend */}
                  <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-grey-3">

                    <span>Less</span>

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-[#ebedf0]" />

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-[#9be9a8]" />

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-[#40c463]" />

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-[#30a14e]" />

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-[#216e39]" />

                    <span>More</span>

                  </div>

                </div>

              </div>
            </div>

            {/* GitHub Button */}
            <a
              href="https://github.com/kushal200514"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-black-1 px-5 py-3 text-body-1 text-white-1 transition hover:opacity-80"
            >
              View GitHub →
            </a>

          </div>


          {/* ================= LEETCODE ================= */}
          <div className="rounded-[28px] bg-grey-1 p-8">

            {/* Header */}
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


            {/* Problems */}
            <div className="mt-8">

              <p className="text-hand-1 text-grey-3">
                Problems Solved
              </p>

              <p className="mt-1 text-4xl font-semibold text-black-1">
                46
              </p>

            </div>


            {/* Difficulty */}
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


            {/* LeetCode Streak */}
            <div className="mt-8 rounded-2xl bg-white-1 p-5">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-hand-1 text-grey-3">
                    Current Streak
                  </p>

                  <p className="mt-1 text-3xl font-semibold text-black-1">
                    🔥 —
                  </p>
                </div>

                <div>
                  <p className="text-hand-1 text-grey-3">
                    Max Streak
                  </p>

                  <p className="mt-1 text-3xl font-semibold text-black-1">
                    —
                  </p>
                </div>

              </div>

            </div>


            {/* Languages */}
            <div className="mt-6 rounded-2xl bg-white-1 p-5">

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


            {/* LeetCode Button */}
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