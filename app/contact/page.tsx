import type { Metadata } from 'next';
import { PremiumContactPage } from '@/components/premium/PremiumContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Niwaraa in Pune — book a free consultation for residential, renovation or commercial interiors.',
};

export default function ContactPage() {
  return <PremiumContactPage />;
}
