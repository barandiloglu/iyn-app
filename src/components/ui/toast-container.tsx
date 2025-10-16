"use client";

import { useToast } from '@/contexts/toast-context';
import ToastContainer from './toast';

export default function ToastContainerWrapper() {
  const { toasts, removeToast } = useToast();

  return <ToastContainer toasts={toasts} onRemove={removeToast} />;
}
