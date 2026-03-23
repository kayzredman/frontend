"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';

export default function ClerkProviderWithConfig({ children }: { children: ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (typeof window !== 'undefined') {
    // Log to browser console for debug
    console.log('CLERK KEY:', publishableKey);
  }
  return <ClerkProvider publishableKey={publishableKey}>{children}</ClerkProvider>;
}
