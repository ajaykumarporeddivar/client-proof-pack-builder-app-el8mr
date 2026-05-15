'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ChevronUp, ChevronDown, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { Modal, Button, Avatar, Input, Badge, cn } from '@/components/ui';
import { useDemoToast } from '@/hooks/useApp';

interface EntityDetailModalProps {
  item: Record<string, unknown> | null;
  open: boolean;
  onClose: () => void;
  title: string;
}

export function EntityDetailModal({
  item,
  open,
  onClose,
  title,
}: EntityDetailModalProps): JSX.Element {
  const { show } = useDemoToast();

  const formatValue = useCallback((key: string, value: unknown): React.ReactNode => {
    if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}$/)) {
      // ISO date string 'YYYY-MM-DD'
      return new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }
    if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)) {
      // ISO date-time string
      return new Date(value).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return String(value);
  }, []);

  const handleAction = (action: string, type: 'success' | 'info' | 'error') => {
    show(`${title} ${action} action triggered!`, type);
    onClose();
  };

  if (!item) return <></>;

  const statusKey = Object.keys(item).find(k => k.toLowerCase().includes('status'));
  const currentStatus = statusKey ? (item[statusKey] as string) : 'unknown';

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className="space-y-4 p-4">
        {currentStatus && (
          <div className="flex justify-end mb-4">
            <Badge variant={
              currentStatus === 'active' || currentStatus === 'client-ready' || currentStatus === 'completed' ? 'success' :
              currentStatus === 'review' || currentStatus === 'paused' || currentStatus === 'draft' ? 'info' :
              currentStatus === 'inactive' || currentStatus === 'archived' ? 'warning' : 'default'
            }>
              Status: {currentStatus}
            </Badge>
          </div>
        )}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          {Object.entries(item).map(([key, value]) => {
            if (key === 'id' || key === statusKey) return null; // Skip ID and status (already handled)
            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return (
              <div key={key} className="flex flex-col">
                <span className="font-semibold text-zinc-700">{label}:</span>
                <span className="text-zinc-600">{formatValue(key, value)}</span>
              </div>
            );
          })}
        </div>
        <div className="pt-4 border-t border-zinc-200 flex justify-end space-x-2">
          <Button variant="outline" onClick={() => handleAction('approved', 'success')}>
            Approve
          </Button>
          <Button variant="secondary" onClick={() => handleAction('archived', 'info')}>
            Archive
          </Button>
          <Button variant="danger" onClick={() => handleAction('deleted', 'error')}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  variant?: 'danger' | 'info';
}

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}: ConfirmModalProps): JSX.Element {
  const confirmButtonVariant = variant === 'danger' ? 'danger' : 'primary';

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className="p-4 text-zinc-700">
        <p>{message}</p>
      </div>
      <div className="flex justify-end space-x-2 p-4 border-t border-zinc-200">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button variant={confirmButtonVariant} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}

interface CommandPaletteItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: CommandPaletteItem[];
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps): JSX.Element {
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setSearch('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50); // Auto-focus input
    }
  }, [open]);

  const filteredItems = useMemo(() => {
    if (!search) return items;
    const lowercasedSearch = search.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(lowercasedSearch) ||
        item.description?.toLowerCase().includes(lowercasedSearch)
    );
  }, [search, items]);

  useEffect(() => {
    if (open) {
      setActiveIndex(0); // Reset active index when filter changes
    }
  }, [filteredItems.length, open]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[activeIndex]) {
          router.push(filteredItems[activeIndex].href);
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    },
    [open, filteredItems, activeIndex, router, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!open) return <></>;

  return (
    <Modal open={open} onClose={onClose} title="">
      <div className="flex items-center border-b border-zinc-200 p-2">
        <Search className="h-5 w-5 text-zinc-400 mx-2" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search commands or navigate..."
          className="flex-1 border-0 focus:ring-0 focus:outline-none px-0 py-2 text-base bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="ghost" size="sm" onClick={onClose} className="p-1">
          <X className="h-5 w-5 text-zinc-500" />
        </Button>
      </div>
      <div className="max-h-80 overflow-y-auto py-2">
        {filteredItems.length === 0 ? (
          <p className="p-4 text-center text-zinc-500">No results found.</p>
        ) : (
          filteredItems.map((item, index) => (
            <button
              key={item.href}
              className={cn(
                'flex w-full items-center space-x-3 px-4 py-2 text-left text-zinc-700 hover:bg-zinc-100',
                activeIndex === index && 'bg-zinc-100'
              )}
              onClick={() => {
                router.push(item.href);
                onClose();
              }}
            >
              {item.icon && <span className="text-zinc-500">{item.icon}</span>}
              <div>
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-zinc-500">{item.description}</div>
                )}
              </div>
            </button>
          ))
        )}
      </div>
    </Modal>
  );
}