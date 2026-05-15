export type ProofPackStatus = 'draft' | 'pending review' | 'review' | 'approved' | 'rejected' | 'delivered' | 'archived' | 'client-ready';
export type ProofPackType = 'monthly_report' | 'campaign_summary' | 'quarterly_review' | 'ad_hoc';
export type ClientStatus = 'active' | 'inactive' | 'on_hold' | 'archived';
export type CampaignStatus = 'running' | 'paused' | 'completed' | 'draft' | 'active';
export type ActivityType = 'created' | 'updated' | 'exported' | 'commented' | 'approved' | 'rejected' | 'create' | 'update' | 'status-change' | string;

export interface Client {
  id: string;
  name: string;
  contactEmail: string;
  status: ClientStatus;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Campaign {
  id: string;
  clientId: string;
  name?: string;
  title?: string;
  [key: string]: unknown;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  status: CampaignStatus;
  budget?: number;
  metrics?: Metric[];
  createdAt: string;
  updatedAt: string;
}

export interface ProofPack {
  id: string;
  clientId: string;
  campaignId?: string;
  campaignIds?: string[];
  name?: string;
  title?: string;
  type?: ProofPackType;
  status: ProofPackStatus;
  dueDate: string; // ISO date string
  generatedAt?: string; // ISO date string
  generatedUrl?: string;
  exportUrl?: string; // URL to the exported file
  notes?: string;
  description?: string;
  overviewNotes?: string;
  priority?: string;
  [key: string]: unknown;
  createdAt: string;
  updatedAt: string;
}

export interface Metric {
  id: string;
  name: string; // e.g., 'Impressions', 'Clicks', 'Conversions', 'ROI'
  value: number;
  unit: string; // e.g., '#', '%', '$'
  period?: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'total';
  trend?: 'up' | 'down' | 'neutral';
  change?: number; // percentage change
  [key: string]: unknown;
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string; // ISO date string
}

export interface RecentActivityItem {
  id: string;
  type?: ActivityType;
  subject?: string;
  subjectId?: string;
  clientName?: string;
  clientId?: string;
  timestamp?: string;
  message?: string;
  [key: string]: unknown;
}

export interface StatCard {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'text-emerald-600' | 'text-red-600' | 'text-zinc-600';
  icon?: React.ElementType; // LucideIcon type, for example
}

export interface SparklineData {
  [key: string]: number[]
}

export interface ChartData {
  labels?: string[];
  weekly?: number[];
  proofPacksCreated?: number[];
  clientReadyPacks?: number[];
  [key: string]: unknown;
}

export interface Stats {
  totalProofPacks: number;
  clientReadyPacks: number;
  packsInReview: number;
  draftPacks: number;
  avgTimeToClientReady: string;
  totalClientsManaged: number;
  [key: string]: unknown;
}

export interface ProofPackFormData {
  name: string;
  clientId: string;
  campaignId: string | undefined;
  type: ProofPackType;
  dueDate: string;
  notes: string;
}