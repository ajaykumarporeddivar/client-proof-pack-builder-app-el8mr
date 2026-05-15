'use client'
import { BarChart, Sparkline } from '@/components/charts'
import { Card, StatCard, Table } from '@/components/ui'
import { MOCK_PROOF_PACKS, MOCK_CLIENTS, MOCK_METRICS } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import type { ProofPack } from '@/lib/types'

const recentColumns = [
  { key: 'name',   label: 'Pack Name',  render: (row: ProofPack & { clientName?: string }) => row.name },
  { key: 'client', label: 'Client',     render: (row: ProofPack & { clientName?: string }) => row.clientName ?? '—' },
  { key: 'status', label: 'Status',     render: (row: ProofPack) => row.status },
  { key: 'due',    label: 'Due Date',   render: (row: ProofPack) => formatDate(row.dueDate) },
]

export default function DashboardPage() {
  const summaryMetrics = MOCK_METRICS.slice(0, 4)
  const recentPacks = [...MOCK_PROOF_PACKS]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 8)
    .map(p => ({
      ...p,
      clientName: MOCK_CLIENTS.find(c => c.id === p.clientId)?.name,
    }))

  return (
    <div className="space-y-6 p-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Operations</p>
        <h1 className="mt-1 text-3xl font-black text-zinc-950">Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {summaryMetrics.map(metric => (
          <StatCard
            key={metric.id}
            title={metric.name}
            value={`${metric.value}${metric.unit === '%' ? '%' : ''}`}
            change={metric.change !== undefined ? `${metric.trend === 'up' ? '+' : metric.trend === 'down' ? '-' : ''}${metric.change}%` : undefined}
            changeType={metric.trend ?? 'neutral'}
          />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card>
          <h2 className="font-bold text-zinc-950 mb-4">Performance</h2>
          <BarChart />
        </Card>
        <Card>
          <h2 className="font-bold text-zinc-950 mb-4">Trend</h2>
          <Sparkline />
        </Card>
      </div>

      <Card>
        <h2 className="font-bold text-zinc-950 mb-4">Recent proof packs</h2>
        <Table<ProofPack & { clientName?: string }>
          columns={recentColumns}
          data={recentPacks}
        />
      </Card>
    </div>
  )
}
