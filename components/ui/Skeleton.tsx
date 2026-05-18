'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-white/5',
        'before:absolute before:inset-0 before:-translate-x-full',
        'before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent',
        'before:animate-[shimmer_1.5s_infinite]',
        className
      )}
    />
  );
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn('card-dark space-y-4', className)}>
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-2/3' : 'w-full')}
        />
      ))}
    </div>
  );
}

export function SkeletonStat({ className }: SkeletonProps) {
  return (
    <div className={cn('card-dark text-center space-y-2', className)}>
      <Skeleton className="h-8 w-16 mx-auto" />
      <Skeleton className="h-4 w-24 mx-auto" />
    </div>
  );
}

export function SkeletonIcon({ className }: SkeletonProps) {
  return (
    <Skeleton className={cn('w-12 h-12 rounded-lg', className)} />
  );
}
