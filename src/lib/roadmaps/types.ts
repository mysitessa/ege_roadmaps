// Типы данных роадмапа.
export type RoadmapTier = 'base' | 'standard' | 'hard';

export type RoadmapLink = {
  title: string;
  url: string;
};

export type RoadmapTopic = {
  id: string;
  title: string;
  description: string;
  links: RoadmapLink[];
};

export type RoadmapPhase = {
  id: string;
  title: string;
  description: string;
  topics: RoadmapTopic[];
};

export const defaultTopicDescription =
  'Кратко: теория, базовые приёмы и типовые задания по теме.';
