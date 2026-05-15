import {
  MOCK_CLIENTS,
  MOCK_CAMPAIGNS,
  MOCK_PROOF_PACKS,
  MOCK_METRICS,
} from '@/lib/data';
import type { Client, Campaign, ProofPack, Metric } from '@/lib/types';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type');

  const normalizedQuery = query.toLowerCase().trim();
  const MAX_RESULTS = 20;

  let results: (Client | Campaign | ProofPack | Metric)[] = [];

  if (!normalizedQuery) {
    // If query is empty, return first 5 items, prioritizing ProofPacks
    if (type === 'clients') {
      results = MOCK_CLIENTS.slice(0, 5);
    } else if (type === 'campaigns') {
      results = MOCK_CAMPAIGNS.slice(0, 5);
    } else if (type === 'metrics') {
      results = MOCK_METRICS.slice(0, 5);
    } else {
      // Default to proof packs if no type or unknown type
      results = MOCK_PROOF_PACKS.slice(0, 5);
    }
  } else {
    // Perform search based on type or all entities
    if (!type || type === 'clients') {
      results.push(
        ...MOCK_CLIENTS.filter((c) =>
          c.name.toLowerCase().includes(normalizedQuery),
        ),
      );
    }
    if (!type || type === 'campaigns') {
      results.push(
        ...MOCK_CAMPAIGNS.filter((c) =>
          (c.name ?? c.title ?? '').toLowerCase().includes(normalizedQuery),
        ),
      );
    }
    if (!type || type === 'proofPacks') {
      results.push(
        ...MOCK_PROOF_PACKS.filter((p) =>
          (p.name ?? p.title ?? '').toLowerCase().includes(normalizedQuery),
        ),
      );
    }
    if (!type || type === 'metrics') {
      results.push(
        ...MOCK_METRICS.filter((m) =>
          m.name.toLowerCase().includes(normalizedQuery),
        ),
      );
    }

    // Deduplicate results if searching across types (by id, assuming unique across types for simplicity)
    const uniqueResultsMap = new Map<string, Client | Campaign | ProofPack | Metric>();
    results.forEach(item => uniqueResultsMap.set(item.id, item));
    results = Array.from(uniqueResultsMap.values());
  }

  results = results.slice(0, MAX_RESULTS);

  return new Response(
    JSON.stringify({
      ok: true,
      data: {
        results: results,
        total: results.length,
        query: query,
        type: type || 'all',
      },
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}