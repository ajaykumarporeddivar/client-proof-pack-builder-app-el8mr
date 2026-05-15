import {
  MOCK_CLIENTS,
  MOCK_CAMPAIGNS,
  MOCK_PROOF_PACKS,
  MOCK_METRICS,
  STATS,
} from '@/lib/data';

export async function GET(): Promise<Response> {
  const data = {
    clients: MOCK_CLIENTS,
    clientsTotal: MOCK_CLIENTS.length,
    campaigns: MOCK_CAMPAIGNS,
    campaignsTotal: MOCK_CAMPAIGNS.length,
    proofPacks: MOCK_PROOF_PACKS,
    proofPacksTotal: MOCK_PROOF_PACKS.length,
    metrics: MOCK_METRICS,
    metricsTotal: MOCK_METRICS.length,
    stats: STATS,
  };

  return new Response(JSON.stringify({ ok: true, data }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    return new Response(
      JSON.stringify({
        ok: true,
        message: 'Demo mode — data not persisted',
        received: body,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: 'Invalid JSON body',
        error: String(error),
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  }
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}