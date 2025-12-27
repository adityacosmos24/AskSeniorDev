export type LeaderboardRow = {
  rank: number;
  name: string;
  problemsSolved: number;
  resourcesCompleted: number;
  timeSpent: string;
  completed: number;
};

export const leaderboardTableData: LeaderboardRow[] = [
  { rank: 4, name: "Vijay Vora", problemsSolved: 80, resourcesCompleted: 159, timeSpent: "42 Hrs", completed: 100 },
  { rank: 5, name: "Vijay Vora", problemsSolved: 79, resourcesCompleted: 159, timeSpent: "45 Hrs", completed: 100 },
  { rank: 6, name: "Vijay Vora", problemsSolved: 78, resourcesCompleted: 159, timeSpent: "48 Hrs", completed: 100 },

  ...Array.from({ length: 37 }, (_, i) => ({
    rank: i + 4,
    name: "Vijay Vora",
    problemsSolved: 78 - (i % 3),           
    resourcesCompleted: 150 + (i % 10),
    timeSpent: `${40 + (i % 10)} Hrs`,
    completed: i % 5 === 0 ? 99 : 98,
  })),
];

