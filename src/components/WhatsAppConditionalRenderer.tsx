'use client'

import { usePathname } from 'next/navigation'
import WhatsAppChat from '@/components/WhatsAppChat'

export default function WhatsAppConditionalRenderer() {
  const pathname = usePathname()

  if (pathname.startsWith('/admin')) {
    return null
  }

  return <WhatsAppChat />
}
