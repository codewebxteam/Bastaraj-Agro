import React from 'react';
import type { Metadata } from 'next';
import GalleryContent from '@/components/gallery/GalleryContent';

export const metadata: Metadata = {
  title: 'Media Gallery',
  description: 'View real project images, tree growth cycles, and farm site maintenance operations of Swarnim Agro in Chhattisgarh.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}