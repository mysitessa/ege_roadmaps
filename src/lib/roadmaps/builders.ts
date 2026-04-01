import type { RoadmapLink, RoadmapTopic } from './types';

// сборка списка тем (topics) одной фазы.
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
