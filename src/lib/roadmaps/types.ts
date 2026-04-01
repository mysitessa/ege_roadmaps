// Типы данных роадмапа.
//
// Эти типы используются и в генераторе, и в UI-страницах, и в API-роуте.
// Идея простая:
// - Роадмап состоит из фаз (phases)
// - Внутри каждой фазы — темы (topics)
// - У каждой темы: описание + набор ссылок
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
