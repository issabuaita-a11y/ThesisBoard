'use client';

import PasswordProtection from '@/components/PasswordProtection';
import BoardCanvas from '@/components/BoardCanvas';

export default function BoardPage() {
  return (
    <PasswordProtection>
      <BoardCanvas />
    </PasswordProtection>
  );
}

