'use client';

import { useState } from 'react';
import SubmissionForm from '@/components/SubmissionForm';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (text: string) => {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit');
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#2A196B' }}>
        <div className="max-w-[700px] w-full text-center">
          <p className="text-xl sm:text-2xl font-heading text-[#F5DE7D] mb-2">
            Thank you for sharing.
          </p>
          <p className="text-xl sm:text-2xl font-heading text-[#F5DE7D]">
            Your response has been saved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden px-4 sm:px-6 py-4" style={{ backgroundColor: '#2A196B' }}>
      <div className="h-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Grid Item 1: Title */}
        <div className="flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#F5DE7D] leading-tight text-center" style={{ letterSpacing: '0.02em' }}>
            Thesis wall
          </h1>
        </div>

        {/* Grid Item 2: Welcome Block */}
        <div className="rounded-[16px] p-4 sm:p-5 flex flex-col justify-center" style={{ backgroundColor: '#2A196B' }}>
          <p className="text-lg sm:text-xl font-body font-semibold text-white mb-2 sm:mb-3">
            Hey there 👋
          </p>
          <p className="text-sm sm:text-base font-body text-white leading-[1.4]" style={{ lineHeight: '1.4' }}>
            This "thesis wall" is a space for you to share any thoughts or stories that come to mind around my thesis topic. You don't need to be a parent to contribute. Every perspective helps.
          </p>
        </div>

        {/* Grid Item 3: Guiding Question Section - Yellow Block */}
        <div className="rounded-[16px] p-4 sm:p-5 flex flex-col justify-center" style={{ backgroundColor: '#F5DE7D' }}>
          <p className="text-xs uppercase tracking-wider mb-2 sm:mb-3 font-body" style={{ color: '#2A196B' }}>
            Guiding Question
          </p>
          <h2 className="text-base sm:text-lg md:text-xl font-body font-medium leading-tight" style={{ color: '#2A196B', letterSpacing: '0.01em', lineHeight: '1.3' }}>
            How might we use technology to spark meaningful shared moments between parents, families, and kids ages 5-8?
          </h2>
        </div>

        {/* Grid Item 4: Form Section */}
        <div className="flex flex-col justify-center">
          <p className="text-sm sm:text-base font-body text-white mb-3 leading-[1.4]" style={{ lineHeight: '1.4', marginBottom: '12px' }}>
            You can share anything — experiences, wishes, worries, ideas, or examples of what you hope technology could do (or not do).
          </p>
          <SubmissionForm onSubmit={handleSubmit} />
        </div>

      </div>
    </div>
  );
}
