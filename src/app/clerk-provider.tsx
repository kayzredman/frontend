"use client";
import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';

export default function ClerkProviderWithConfig({ children }: { children: ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
