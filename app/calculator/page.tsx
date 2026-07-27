import React from 'react';
import type { Metadata } from 'next';
import ProfitCalculator from '@/components/home/ProfitCalculator';

export const metadata: Metadata = {
  title: 'Interactive Profit Calculator',
  description: 'Estimate your commercial timber (Mahogany, Sandalwood) and medicinal plantation ROI in Chhattisgarh. Adjust quantity and view potential market valuation.',
  alternates: {
    canonical: '/calculator',
  },
};

export default function CalculatorPage() {
  return (
    <main className="w-full min-h-screen bg-[#0D1713] text-white">
      <ProfitCalculator />
    </main>
  );
}