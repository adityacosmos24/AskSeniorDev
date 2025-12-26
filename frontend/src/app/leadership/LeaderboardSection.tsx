'use client';

import LeaderboardPodium from './LeaderboardPodium';
import LeaderboardCard from './LeaderboardCard';
import { leaderboardCards } from './leaderboardCards';

export default function LeaderboardSection() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* PODIUM (UNCHANGED) */}
      <LeaderboardPodium />

      {/* CARDS */}
      <div
        className="
          mt-10
          w-full
          max-w-[1400px]
          px-4
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {leaderboardCards.map((card) => (
          <LeaderboardCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
}
