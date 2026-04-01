import type { RoadmapLink, RoadmapTopic } from './types';

// Утилита для сборки списка тем (topics) одной фазы.
//
// Важно про `id`:
// - `topic.id` используется в UI (клик по теме) и для прогресса в localStorage.
// - Сейчас id строится как `topic-<sectionId>-<index>`.
//   Это означает, что перестановка тем внутри секции изменит id и “сбросит” прогресс.
//
// Если в будущем понадобится стабильность при перестановках — можно расширить builder,
// чтобы принимать явный `id` или строить id из slug (title -> slug).
export function buildTopics(params: {
  sectionId: number;
  items: Array<{
    title: string;
    description?: string;
    links?: RoadmapLink[];
  }>;
  defaultDescription: string;
}): RoadmapTopic[] {
  const { sectionId, items, defaultDescription } = params;
  return items.map((item, index) => ({
    id: `topic-${sectionId}-${index + 1}`,
    title: item.title,
    description: item.description ?? defaultDescription,
    links: item.links ?? [],
  }));
}
