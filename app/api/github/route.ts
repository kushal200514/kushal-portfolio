import { NextResponse } from "next/server";

const GITHUB_USERNAME = "kushal200514";

const query = `
  query($username: String!) {
    user(login: $username) {
      login
      name
      avatarUrl
      followers {
        totalCount
      }
      repositories(first: 100, ownerAffiliations: OWNER) {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
              weekday
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return NextResponse.json(
        {
          error: "GITHUB_TOKEN is not configured",
        },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
        variables: {
          username: GITHUB_USERNAME,
        },
      }),

      cache: "no-store",
    });

    const data = await response.json();

    console.log("GitHub response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "GitHub HTTP request failed",
          status: response.status,
          details: data,
        },
        { status: response.status }
      );
    }

    if (data.errors) {
      return NextResponse.json(
        {
          error: "GitHub GraphQL request failed",
          details: data.errors,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(data.data.user);
  } catch (error) {
    console.error("GitHub API error:", error);

    return NextResponse.json(
      {
        error: "Server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}