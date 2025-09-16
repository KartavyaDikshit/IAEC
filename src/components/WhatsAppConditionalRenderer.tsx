'use client';

import { usePathname } from 'next/navigation';
import WhatsAppChat from './WhatsAppChat';

export default function WhatsAppConditionalRenderer() {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return null;
  }

  return <WhatsAppChat />;
}