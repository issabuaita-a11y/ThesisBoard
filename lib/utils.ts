import { Submission } from '@/types/submission';

/**
 * Calculate Jaccard similarity between two sets of tags
 */
export function calculateTagSimilarity(tags1: string[], tags2: string[]): number {
  const set1 = new Set(tags1);
  const set2 = new Set(tags2);
  
  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  
  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

/**
 * Calculate positions for bubbles using a simple force-directed layout
 */
export interface BubblePosition {
  x: number;
  y: number;
}

export function calculateBubblePositions(
  submissions: Submission[],
  canvasWidth: number,
  canvasHeight: number
): Map<string, BubblePosition> {
  const positions = new Map<string, BubblePosition>();
  const minDistance = 200; // Minimum distance between bubbles
  const iterations = 50;

  // Initialize random positions
  submissions.forEach((submission) => {
    positions.set(submission.id, {
      x: Math.random() * (canvasWidth - 300) + 150,
      y: Math.random() * (canvasHeight - 200) + 100,
    });
  });

  // Simple force-directed layout
  for (let iter = 0; iter < iterations; iter++) {
    submissions.forEach((submission, i) => {
      let fx = 0;
      let fy = 0;
      const pos = positions.get(submission.id)!;

      submissions.forEach((other, j) => {
        if (i === j) return;

        const otherPos = positions.get(other.id)!;
        const similarity = calculateTagSimilarity(submission.tags, other.tags);
        const dx = otherPos.x - pos.x;
        const dy = otherPos.y - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;

        // Attract similar bubbles, repel all bubbles
        const attraction = similarity * 0.5;
        const repulsion = 1 / (distance * distance) * 100;

        fx += (dx / distance) * (attraction - repulsion);
        fy += (dy / distance) * (attraction - repulsion);
      });

      // Update position
      const newX = Math.max(150, Math.min(canvasWidth - 150, pos.x + fx * 0.1));
      const newY = Math.max(100, Math.min(canvasHeight - 100, pos.y + fy * 0.1));

      positions.set(submission.id, { x: newX, y: newY });
    });
  }

  return positions;
}

/**
 * Get all unique tags from submissions
 */
export function getAllTags(submissions: Submission[]): string[] {
  const tagSet = new Set<string>();
  submissions.forEach((submission) => {
    submission.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Get tag counts
 */
export function getTagCounts(submissions: Submission[]): Map<string, number> {
  const counts = new Map<string, number>();
  submissions.forEach((submission) => {
    submission.tags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    });
  });
  return counts;
}

