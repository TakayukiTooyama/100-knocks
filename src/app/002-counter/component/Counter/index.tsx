'use client';

import { useState } from 'react';

import { Button } from '~/component/ui/button';

export function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button size="sm" onClick={() => setCounter((prev) => prev - 1)}>
        -
      </Button>
      <p className="text-2xl">{counter}</p>
      <Button size="sm" onClick={() => setCounter((prev) => prev + 1)}>
        +
      </Button>
    </div>
  );
}
