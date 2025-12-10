'use client';

import { useState } from 'react';

interface SubmissionFormProps {
  onSubmit: (text: string) => Promise<void>;
}

export default function SubmissionForm({ onSubmit }: SubmissionFormProps) {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const maxLength = 500;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      setError('Please share your thoughts before submitting.');
      return;
    }

    if (text.length > maxLength) {
      setError(`Please keep your response under ${maxLength} characters.`);
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await onSubmit(text);
      setText('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Blue Textarea Container */}
      <div 
        className="relative mb-3"
        style={{ 
          backgroundColor: '#3B82F6', 
          borderRadius: '16px',
          padding: '16px'
        }}
      >
        <textarea
          id="thoughts"
          value={text}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              setText(e.target.value);
            }
          }}
          required
          rows={6}
          className="w-full bg-transparent border-none focus:outline-none resize-none text-sm sm:text-base leading-[1.4] pr-12"
          style={{ 
            color: '#FFFFFF',
            minHeight: '120px',
            lineHeight: '1.4'
          }}
          placeholder="Share your thoughts here..."
        />
        {/* Character Counter */}
        <div 
          className="absolute bottom-3 right-3 text-xs font-body"
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          {text.length}/{maxLength}
        </div>
      </div>
      
      {error && (
        <div className="mb-2 text-red-400 text-xs font-body">{error}</div>
      )}

      {/* Full Width Send Button */}
      <button
        type="submit"
        disabled={isSubmitting || text.length === 0}
        className="w-full py-3 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium font-body"
        style={{ 
          backgroundColor: isSubmitting ? '#2563EB' : '#3B82F6',
          color: '#FFFFFF',
          padding: '12px'
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting && !e.currentTarget.disabled) {
            e.currentTarget.style.backgroundColor = '#2563EB';
          }
        }}
        onMouseLeave={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = '#3B82F6';
          }
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
