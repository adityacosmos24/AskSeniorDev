'use client';

import Image from 'next/image';
import avatar from '../../../public/avatar-1.png';
import { CheckCircle, Clock } from 'lucide-react';
import type { LeaderboardCard } from './leaderboardCards';

export default function LeaderboardCard({ data }: { data: LeaderboardCard }) {
  return (
    <div
      className={`
        relative
        w-full
        rounded-lg
        border
        border-[#00A3FF]
        bg-white 
        p-4
        shadow-sm

        hover:-translate-y-[2px]
        hover:border-[#0092E6]
        hover:bg-[#F7FCFF]
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-gray-900">{data.name}</p>
          {data.isPremium && (
            <span className="inline-block mt-0.5 rounded-full border border-[#F7B500] px-2 py-[1px] text-[10px] text-[#F7B500]">
              ⭐ Premium
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 space-y-2 text-xs text-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-green-500" />
            <span>Problem Solved</span>
          </div>
          <span>{data.problemsSolved}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            📚 <span>Resources Completed</span>
          </div>
          <span>{data.resourcesCompleted}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-red-400" />
            <span>Time Spent</span>
          </div>
          <span>{data.timeSpent}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">Progress</span>
          <span>({data.progress}%)</span>
        </div>
        <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
          <div
            className={`
              h-full rounded-full
              ${data.progress === 100 ? 'bg-[#F7B500]' : 'bg-[#1E90FF]'}
            `}
            style={{ width: `${data.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
