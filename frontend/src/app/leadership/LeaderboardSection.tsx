'use client';

import LeaderboardPodium from './LeaderboardPodium';
import LeaderboardTable from './LeaderboardTable';

export default function LeaderboardSection() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* PODIUM */}
      <LeaderboardPodium />

      {/* TABLE */}
      <div
        className="
          mt-10
          w-full
          max-w-[1400px]
          px-4
          flex
          justify-center
        "
      >
        <LeaderboardTable />
      </div>
    </section>
  );
}
