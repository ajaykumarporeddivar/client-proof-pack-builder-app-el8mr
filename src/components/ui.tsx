'use client';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Loader2,
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
  ArrowUp,
  ArrowDown,
  Minus,
} from 'lucide-react';
import Link from 'next/link';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Spinner
export function Spinner({ className }: { className?: string }): JSX.Element {
  return <Loader2 className={cn('h-4 w-4 animate-spin', className)} />;
}

// Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  href?: string;
  children: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  className,
  href,
  ...props
}: ButtonProps): JSX.Element {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-700 focus:ring-zinc-500',
    secondary: 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 focus:ring-zinc-300',
    outline: 'border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-50 focus:ring-zinc-300',
    ghost: 'text-zinc-700 hover:bg-zinc-100 focus:ring-zinc-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };

  const cls = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    (disabled || loading) && 'opacity-60 cursor-not-allowed pointer-events-none',
    className
  )

  if (href) {
    return (
      <Link href={href} className={cls}>
        {loading && <Spinner className="mr-2" />}
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} disabled={disabled || loading} onClick={onClick} {...props}>
      {loading && <Spinner className="mr-2" />}
      {children}
    </button>
  );
}

// Card
export function Card({ className, children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <div className={cn('bg-white border border-zinc-200 rounded-xl shadow-sm', className)}>{children}</div>;
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <div className={cn('px-6 py-4 border-b border-zinc-200', className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <h3 className={cn('text-lg font-bold text-zinc-900 tracking-tight', className)}>{children}</h3>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <div className={cn('p-6 text-zinc-600', className)}>{children}</div>;
}

// Badge
export function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple';
}): JSX.Element {
  const styles = {
    default: 'bg-zinc-100 text-zinc-700',
    success: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-600 border border-amber-200',
    error: 'bg-red-50 text-red-600 border border-red-200',
    info: 'bg-blue-50 text-blue-600 border border-blue-200',
    purple: 'bg-purple-50 text-purple-600 border border-purple-200',
  };
  return (
    <span className={cn('inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium', styles[variant])}>
      {children}
    </span>
  );
}

// Input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({ label, error, icon, className, id, ...props }: InputProps): JSX.Element {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={cn(
            'block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm',
            icon && 'pl-10',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}

// Avatar
export function Avatar({
  name,
  size = 'md',
  className,
}: {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}): JSX.Element {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-indigo-500',
  ];
  const colorIndex = initials.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];

  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
  };

  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-full font-medium text-white flex-shrink-0',
        bgColor,
        sizeClasses[size],
        className
      )}
    >
      {initials}
    </div>
  );
}

// StatCard
interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  sparkline?: number[];
}

export function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  sparkline,
}: StatCardProps): JSX.Element {
  const changeColor = {
    up: 'text-emerald-600',
    down: 'text-red-500',
    neutral: 'text-zinc-500',
  };

  const ChangeIcon =
    changeType === 'up' ? ArrowUp : changeType === 'down' ? ArrowDown : Minus;

  const SparklineSVG = ({ data }: { data: number[] }): JSX.Element => {
    if (data.length < 2) return <></>;

    const width = 40;
    const height = 20;
    const padding = 2; // Padding on top/bottom

    const max = Math.max(...data);
    const min = Math.min(...data);

    // Handle case where all values are the same
    const range = max === min ? 1 : max - min;

    const points = data
      .map((val, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - padding - ((val - min) / range) * (height - 2 * padding);
        return `${x},${y}`;
      })
      .join(' ');

    return (
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="#6366f1" // Indigo-500
          strokeWidth="1.5"
          points={points}
        />
      </svg>
    );
  };

  return (
    <Card className="flex flex-col">
      <CardContent className="flex flex-col gap-2 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-zinc-500">{title}</p>
          {icon && <div className="text-zinc-400">{icon}</div>}
        </div>
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold text-zinc-900">{value}</p>
          {change && (
            <span className={cn('flex items-center text-sm font-medium', changeColor[changeType])}>
              <ChangeIcon className="h-4 w-4 mr-0.5" />
              {change}
            </span>
          )}
        </div>
        {sparkline && sparkline.length > 1 && (
          <div className="mt-2 flex justify-end">
            <SparklineSVG data={sparkline} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Modal
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ open, onClose, title, children, size = 'md' }: ModalProps): JSX.Element | null {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, handleEscape]);

  if (!open) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fadein"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={cn('bg-white rounded-2xl shadow-xl w-full animate-slideup', sizeClasses[size])}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
          <h3 id="modal-title" className="text-lg font-bold text-zinc-900 tracking-tight">
            {title}
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close modal">
            <X className="h-5 w-5 text-zinc-500" />
          </Button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// EmptyState
interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
      <div className="p-3 bg-zinc-100 rounded-lg text-zinc-500 mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">{title}</h3>
      <p className="text-zinc-600 max-w-sm mb-6">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
}

// Table
interface TableProps<T> {
  columns: Array<{ key: string; label: string; render?: (row: T) => React.ReactNode }>;
  data: T[];
  onRowClick?: (row: T) => void;
}

export function Table<T extends { id: string }>({ columns, data, onRowClick }: TableProps<T>): JSX.Element {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm bg-white">
      <table className="min-w-full divide-y divide-zinc-200">
        <thead className="bg-zinc-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 text-center">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={row.id}
                className={cn('group', index % 2 === 0 ? 'bg-white' : 'bg-zinc-50', onRowClick && 'cursor-pointer hover:bg-zinc-100')}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600">
                    {column.render ? column.render(row) : (row as Record<string, any>)[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}