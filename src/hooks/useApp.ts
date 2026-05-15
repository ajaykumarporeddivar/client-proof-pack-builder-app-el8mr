'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initial: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initial;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initial;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initial;
    }
  });

  const setStoredValue = useCallback(
    (newValue: T) => {
      try {
        setValue(newValue);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(newValue));
        }
      } catch (error) {
        console.error('Error writing to localStorage:', error);
      }
    },
    [key]
  );

  return [value, setStoredValue];
}

export function useFilter<T extends Record<string, unknown>>(
  items: T[],
  fields: (keyof T)[]
): {
  filtered: T[];
  search: string;
  setSearch: (s: string) => void;
  status: string;
  setStatus: (s: string) => void;
} {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filtered = React.useMemo(() => {
    let result = items;

    // Filter by status
    if (status) {
      result = result.filter((item) => String(item.status).toLowerCase() === status.toLowerCase());
    }

    // Filter by search string
    if (search) {
      const lowercasedSearch = search.toLowerCase();
      result = result.filter((item) =>
        fields.some((field) =>
          String(item[field]).toLowerCase().includes(lowercasedSearch)
        )
      );
    }

    return result;
  }, [items, fields, search, status]);

  return { filtered, search, setSearch, status, setStatus };
}

export function useModal<T = unknown>(): {
  isOpen: boolean;
  open: (item?: T) => void;
  close: () => void;
  activeItem: T | null;
} {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<T | null>(null);

  const open = useCallback((item?: T) => {
    setActiveItem(item ?? null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveItem(null); // Clear active item on close
  }, []);

  return { isOpen, open, close, activeItem };
}

export function useDemoToast(): {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
  show: (msg: string, type?: 'success' | 'error' | 'info') => void;
} {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'info'>('info');
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const show = useCallback((msg: string, toastType: 'success' | 'error' | 'info' = 'info') => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setMessage(msg);
    setType(toastType);
    setVisible(true);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setMessage('');
      timerRef.current = null;
    }, 2500);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { message, type, visible, show };
}