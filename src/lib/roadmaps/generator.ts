import { subjects } from '../subjects';
import type { RoadmapPhase, RoadmapTier, RoadmapTopic } from './types';
import { mathRoadmap } from './subjects/math';
import { russianRoadmap } from './subjects/russian';
import { informaticsRoadmap } from './subjects/informatics';

// Генератор структуры дорожной карты
export type { RoadmapPhase, RoadmapTier, RoadmapTopic } from './types';

export type GeneratedRoadmap = {
  id: string;
  subjectId: string;
  subjectTitle: string;
  tier: RoadmapTier;
  goalScore: number;
  phases: RoadmapPhase[];
  nodes: unknown[];
  edges: unknown[];
};

const tierConfig: Record<
  RoadmapTier,
  { label: string; goalScore: number; phaseCount: number }
> = {
  base: { label: 'Порог и база', goalScore: 40, phaseCount: 3 },
  standard: { label: 'Уверенный средний', goalScore: 60, phaseCount: 4 },
  hard: { label: 'Высокий результат', goalScore: 80, phaseCount: 5 },
};

// Реестр подключенных предметных роадмапов.
// Ключи должны совпадать с `subjects[].id`.
const subjectRoadmaps: Partial<Record<string, Record<RoadmapTier, RoadmapPhase[]>>> =
  {
    math: mathRoadmap,
    russian: russianRoadmap,
    informatics: informaticsRoadmap,
  };

// Заглушки
function buildPlaceholderTopics(phaseIndex: number): RoadmapTopic[] {
  return [
    {
      id: `topic-${phaseIndex}-1`,
      title: `Раздел ${phaseIndex}.1 (заглушка)`,
      description: 'Краткое описание темы появится здесь. Пока это заглушка.',
      links: [{ title: 'Полезный источник (заглушка)', url: 'https://example.com' }],
    },
    {
      id: `topic-${phaseIndex}-2`,
      title: `Раздел ${phaseIndex}.2 (заглушка)`,
      description: 'Краткое описание темы появится здесь. Пока это заглушка.',
      links: [{ title: 'Полезный источник (заглушка)', url: 'https://example.com' }],
    },
  ];
}

function buildPhases(phaseCount: number, tierLabel: string): RoadmapPhase[] {
  return Array.from({ length: phaseCount }, (_, index) => {
    const phaseNumber = index + 1;
    return {
      id: `phase-${phaseNumber}`,
      title: `${tierLabel}: Этап ${phaseNumber}`,
      description: 'План на этап с заглушками. Здесь появятся темы и задания.',
      topics: buildPlaceholderTopics(phaseNumber),
    };
  });
}

export function generateRoadmap(params: {
  subjectId: string;
  tier: RoadmapTier;
}): GeneratedRoadmap | null {
  const { subjectId, tier } = params;
  const subject = subjects.find((item) => item.id === subjectId);
  if (!subject) return null;

  const config = tierConfig[tier];
  const phases =
    subjectRoadmaps[subjectId]?.[tier] ?? buildPhases(config.phaseCount, config.label);

  return {
    id: `${subjectId}-${tier}`,
    subjectId,
    subjectTitle: subject.title,
    tier,
    goalScore: config.goalScore,
    phases,
    nodes: [],
    edges: [],
  };
}

export const roadmapTiers = tierConfig;
