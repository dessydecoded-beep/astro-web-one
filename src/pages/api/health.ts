import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      ok: true,
      runtime: 'cloudflare-workers',
      colo: request.cf?.colo ?? 'local',
      generatedAt: new Date().toISOString(),
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
    },
  );
};
