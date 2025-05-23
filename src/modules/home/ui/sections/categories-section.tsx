"use client"

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/navigation';

import { trpc } from "@/trpc/client";
import { FilterCarousel } from '@/components/filter-carousel';

interface CategoriesSectionProps {
  categoryId?: string;
}

const CategoriesSkeleton = () => <FilterCarousel isLoading data={[]} />;

const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<CategoriesSkeleton />}>
      <ErrorBoundary fallback={<p>Error ...</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  )
}

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const router = useRouter();

  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name
  }))

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value)
    } else {
      url.searchParams.delete("categoryId")
    }

    router.push(url.toString());
  }

  return <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />
}

export default CategoriesSection