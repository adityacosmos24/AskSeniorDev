export type LeaderboardCard = {
  id: number;
  name: string;
  isPremium: boolean;
  problemsSolved: number;
  resourcesCompleted: number;
  timeSpent: string;
  progress: number;
};

export const leaderboardCards: LeaderboardCard[] = Array.from(
  { length: 30 },
  (_, i) => ({
    id: i + 1,
    name:
      i === 1
        ? "Lijja Bhalodiya"
        : i === 2
        ? "Vyom Rathod"
        : "Vijay Vora",
    isPremium: true,
    problemsSolved: 80,
    resourcesCompleted: 160,
    timeSpent:
      i % 3 === 0 ? "38 Hrs" : i % 3 === 1 ? "34 Hrs" : "30 Hrs",
    progress: i % 3 === 0 ? 97 : 96,
  })
);
