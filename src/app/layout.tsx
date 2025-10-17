import { ToastProvider } from "@/contexts/toast-context";
import ToastContainerWrapper from "@/components/ui/toast-container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ToastProvider>
      {children}
      <ToastContainerWrapper />
    </ToastProvider>
  );
}
