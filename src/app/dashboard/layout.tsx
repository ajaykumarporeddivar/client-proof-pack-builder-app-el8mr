'use client';

import { AppSidebar } from '@/components/layout';
import { Inbox, LayoutDashboard, Download } from 'lucide-react';
import React from 'react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: <Inbox size={16} />, label: 'Intake', href: '/dashboard/intake' },
  { icon: <LayoutDashboard size={16} />, label: 'Dashboard', href: '/dashboard' },
  { icon: <Download size={16} />, label: 'Export', href: '/dashboard/export' },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <AppSidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}