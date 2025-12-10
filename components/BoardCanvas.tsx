'use client';

import { useEffect, useState, useRef } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { Submission } from '@/types/submission';
import { calculateBubblePositions } from '@/lib/utils';
import MessageBubble from './MessageBubble';
import TagFilter from './TagFilter';

export default function BoardCanvas() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [positions, setPositions] = useState<Map<string, { x: number; y: number }>>(new Map());
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Set canvas size based on viewport
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setCanvasSize({
          width: Math.max(1920, window.innerWidth - 256), // Account for sidebar
          height: Math.max(1080, window.innerHeight),
        });
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  useEffect(() => {
    // Listen to Firestore changes
    const q = query(collection(db, 'submissions'), orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs: Submission[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        docs.push({
          id: doc.id,
          text: data.text,
          tags: data.tags || [],
          timestamp: data.timestamp as { seconds: number; nanoseconds: number },
        });
      });
      setSubmissions(docs);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Calculate positions when submissions change
    if (submissions.length > 0 && canvasSize.width > 0 && canvasSize.height > 0) {
      const newPositions = calculateBubblePositions(submissions, canvasSize.width, canvasSize.height);
      setPositions(newPositions);
    }
  }, [submissions, canvasSize]);

  const filteredSubmissions = selectedTag
    ? submissions.filter((sub) => sub.tags.includes(selectedTag))
    : submissions;

  return (
    <div className="flex h-screen overflow-hidden">
      <TagFilter
        submissions={submissions}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      
      <div className="flex-1 relative overflow-auto bg-gray-50" ref={canvasRef}>
        <div
          className="relative"
          style={{
            width: `${canvasSize.width}px`,
            height: `${canvasSize.height}px`,
            minHeight: '100%',
          }}
        >
          {filteredSubmissions.map((submission) => {
            const position = positions.get(submission.id);
            if (!position) return null;

            return (
              <MessageBubble
                key={submission.id}
                submission={submission}
                position={position}
                isHighlighted={selectedTag !== null && submission.tags.includes(selectedTag)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

