'use client';

import { Submission } from '@/types/submission';
import { getAllTags, getTagCounts } from '@/lib/utils';

interface TagFilterProps {
  submissions: Submission[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TagFilter({ submissions, selectedTag, onTagSelect }: TagFilterProps) {
  const tags = getAllTags(submissions);
  const tagCounts = getTagCounts(submissions);

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto h-full">
      <h2 className="text-lg font-medium mb-4">Categories</h2>
      
      <button
        onClick={() => onTagSelect(null)}
        className={`w-full text-left px-3 py-2 mb-2 rounded-lg transition-colors ${
          selectedTag === null
            ? 'bg-blue-100 text-blue-800 font-medium'
            : 'hover:bg-gray-100 text-gray-700'
        }`}
      >
        All ({submissions.length})
      </button>

      <div className="space-y-1">
        {tags.map((tag) => {
          const count = tagCounts.get(tag) || 0;
          const isSelected = selectedTag === tag;

          return (
            <button
              key={tag}
              onClick={() => onTagSelect(isSelected ? null : tag)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                isSelected
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <span className="block truncate">{tag}</span>
              <span className="text-xs text-gray-500">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

