import type { APIRoute } from 'astro';
import {
  generateRoadmap,
  type RoadmapTier,
  roadmapTiers,
} from '../lib/roadmaps/generator';

export const prerender = false;

export const GET: APIRoute = async function ({ params, request }) {
  const { roadmapId } = params;

  if (!roadmapId) {
    return new Response('Roadmap ID is required', {
      status: 400,
    });
  }

  const url = new URL(request.url);
  const tierParam = url.searchParams.get('tier') as RoadmapTier | null;
  const tier = tierParam && tierParam in roadmapTiers ? tierParam : 'base';

  const roadmap = generateRoadmap({ subjectId: roadmapId, tier });
  if (!roadmap) {
    return new Response('Roadmap not found', {
      status: 404,
    });
  }

  return new Response(JSON.stringify(roadmap), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
