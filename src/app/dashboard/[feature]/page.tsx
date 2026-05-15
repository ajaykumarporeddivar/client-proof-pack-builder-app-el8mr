'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui'
import { formatDate } from '@/lib/utils'
import { MOCK_PROOF_PACKS, MOCK_CLIENTS, MOCK_CAMPAIGNS } from '@/lib/data'
import { Search, Plus, Download, Eye } from 'lucide-react'

export default function FeaturePage() {
  const params = useParams()
  const slug = (params.feature as string) ?? ''
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  // ── Feature 1: Proof Pack Intake (/dashboard/intake) ──────────────────────
  if (slug === 'intake') {
    const items = MOCK_PROOF_PACKS.filter(p =>
      (p.status === 'draft' || p.status === 'pending review') &&
      (!search || (p.name ?? p.title ?? '').toLowerCase().includes(search.toLowerCase()) ||
       MOCK_CLIENTS.find(c => c.id === p.clientId)?.name?.toLowerCase().includes(search.toLowerCase()))
    )
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Intake</p>
            <h1 className="text-2xl font-black text-zinc-950">Proof Pack Intake</h1>
            <p className="text-sm text-zinc-500 mt-0.5">Review and process incoming proof pack requests</p>
          </div>
          <Button size="sm"><Plus size={14} className="mr-1" />New Pack</Button>
        </div>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search by pack or client name…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <select
            className="px-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="">All statuses</option>
            <option value="draft">Draft</option>
            <option value="pending review">Pending Review</option>
          </select>
        </div>
        <div className="grid gap-4">
          {items.length === 0 && (
            <p className="text-sm text-zinc-500 py-8 text-center">No proof packs match your filters.</p>
          )}
          {items.map(pack => {
            const client = MOCK_CLIENTS.find(c => c.id === pack.clientId)
            const campaign = pack.campaignId ? MOCK_CAMPAIGNS.find(c => c.id === pack.campaignId) : null
            return (
              <div key={pack.id} onClick={() => setSelected(selected === pack.id ? null : pack.id)}>
              <Card className={`cursor-pointer transition-shadow hover:shadow-md ${selected === pack.id ? 'ring-2 ring-indigo-500' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-zinc-900 truncate">{pack.name}</h3>
                        <Badge variant={pack.status === 'draft' ? 'default' : 'warning'}>{pack.status}</Badge>
                      </div>
                      <p className="text-xs text-zinc-500">{client?.name ?? '—'} {campaign ? `· ${campaign.name}` : ''}</p>
                      <p className="text-xs text-zinc-400 mt-1">Due {formatDate(pack.dueDate)}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button variant="outline" size="sm"><Eye size={13} className="mr-1" />View</Button>
                      <Button size="sm"><Download size={13} className="mr-1" />Export</Button>
                    </div>
                  </div>
                  {selected === pack.id && pack.notes && (
                    <div className="mt-3 pt-3 border-t border-zinc-100 text-xs text-zinc-600">{pack.notes}</div>
                  )}
                </CardContent>
              </Card>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // ── Feature 2: Export (/dashboard/export) ─────────────────────────────────
  if (slug === 'export') {
    const approved = MOCK_PROOF_PACKS.filter(p => p.status === 'approved')
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Export</p>
          <h1 className="text-2xl font-black text-zinc-950">Export</h1>
          <p className="text-sm text-zinc-500 mt-0.5">Download approved proof packs as PDF or share with clients</p>
        </div>
        <div className="grid gap-4">
          {approved.length === 0 && (
            <p className="text-sm text-zinc-500 py-8 text-center">No approved proof packs to export yet.</p>
          )}
          {approved.map(pack => {
            const client = MOCK_CLIENTS.find(c => c.id === pack.clientId)
            return (
              <Card key={pack.id}>
                <CardContent className="p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{pack.name}</p>
                    <p className="text-xs text-zinc-500">{client?.name ?? '—'} · Approved {pack.generatedAt ? formatDate(pack.generatedAt) : '—'}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm"><Eye size={13} className="mr-1" />Preview</Button>
                    <Button size="sm"><Download size={13} className="mr-1" />Download PDF</Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  // ── Fallback: unknown feature ──────────────────────────────────────────────
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
      <p className="text-4xl">◈</p>
      <h2 className="text-lg font-semibold text-zinc-900">Page not found</h2>
      <p className="text-sm text-zinc-500">The feature <code className="font-mono bg-zinc-100 px-1 rounded">/dashboard/{slug}</code> doesn&#39;t exist.</p>
      <Button href="/dashboard" variant="outline">Back to Dashboard</Button>
    </div>
  )
}
