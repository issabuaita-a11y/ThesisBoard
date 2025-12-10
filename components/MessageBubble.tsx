'use client';

import { Submission } from '@/types/submission';

interface MessageBubbleProps {
  submission: Submission;
  position: { x: number; y: number };
  isHighlighted: boolean;
}

export default function MessageBubble({ submission, position, isHighlighted }: MessageBubbleProps) {
  const formatTimestamp = (timestamp: { seconds: number; nanoseconds: number }) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const tagColors = [
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-purple-100 text-purple-800',
    'bg-pink-100 text-pink-800',
    'bg-yellow-100 text-yellow-800',
    'bg-indigo-100 text-indigo-800',
    'bg-red-100 text-red-800',
    'bg-teal-100 text-teal-800',
  ];

  const getTagColor = (index: number) => {
    return tagColors[index % tagColors.length];
  };

  return (
    <div
      className={`absolute bg-white rounded-lg shadow-lg p-4 max-w-xs cursor-move transition-all duration-200 ${
        isHighlighted ? 'ring-2 ring-blue-500 scale-105' : 'opacity-70 hover:opacity-100 hover:shadow-xl'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <p className="text-sm text-gray-700 mb-3 leading-relaxed">{submission.text}</p>
      
      <div className="flex flex-wrap gap-2 mb-2">
        {submission.tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs px-2 py-1 rounded-full ${getTagColor(index)}`}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-xs text-gray-400 mt-2">
        {formatTimestamp(submission.timestamp)}
      </p>
    </div>
  );
}

