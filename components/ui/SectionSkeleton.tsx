'use client';

import Skeleton, { SkeletonCard, SkeletonStat, SkeletonText } from './Skeleton';

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center pt-20">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center py-20 space-y-6">
          <Skeleton className="h-16 w-96" />
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-5 w-[500px]" />
          <Skeleton className="h-5 w-[400px]" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-36 rounded-lg" />
            <Skeleton className="h-12 w-36 rounded-lg" />
          </div>
          <div className="flex gap-6 pt-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSkeleton() {
  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="container-custom">
        <div className="mb-12 space-y-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-5 w-96" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Skeleton className="w-full max-w-md aspect-square rounded-2xl" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-8 w-40" />
            <SkeletonText lines={5} />
            <div className="grid grid-cols-2 gap-4">
              <SkeletonStat />
              <SkeletonStat />
              <SkeletonStat />
              <SkeletonStat />
            </div>
            <Skeleton className="h-6 w-32" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-2 w-full rounded-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSkeleton() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-emerald-950/10 to-black/50">
      <div className="container-custom">
        <div className="mb-16 space-y-4">
          <Skeleton className="h-6 w-48 mx-auto rounded-full" />
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-dark space-y-3">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-12 w-32 rounded-lg" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card-dark space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-3 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="container-custom">
        <div className="mb-12 space-y-4">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-full" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSkeleton() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black/50 to-black">
      <div className="container-custom">
        <div className="mb-16 text-center space-y-4">
          <Skeleton className="h-10 w-48 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card-dark space-y-4">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-6 w-40" />
              <SkeletonText lines={3} />
              <div className="space-y-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSkeleton() {
  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="container-custom">
        <div className="mb-16 space-y-4">
          <Skeleton className="h-10 w-72" />
          <Skeleton className="h-5 w-80" />
        </div>
        <div className="space-y-12">
          {[1, 2].map((i) => (
            <div key={i} className="card-dark space-y-4 ml-8 md:ml-0">
              <div className="flex items-start gap-3">
                <Skeleton className="h-6 w-6 rounded" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-36" />
                </div>
              </div>
              <Skeleton className="h-4 w-40" />
              <SkeletonText lines={2} />
              <div className="space-y-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black to-black/80">
      <div className="container-custom">
        <div className="mb-16 text-center space-y-4">
          <Skeleton className="h-10 w-48 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="card-dark flex items-start gap-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            ))}
            <div className="card-dark space-y-4">
              <Skeleton className="h-5 w-24" />
              <div className="flex gap-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <Skeleton className="w-12 h-12 rounded-lg" />
                <Skeleton className="w-12 h-12 rounded-lg" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 card-dark space-y-6">
            <div className="text-center space-y-4">
              <Skeleton className="w-16 h-16 rounded-full mx-auto" />
              <Skeleton className="h-8 w-48 mx-auto" />
              <Skeleton className="h-5 w-72 mx-auto" />
              <Skeleton className="h-12 w-36 mx-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
