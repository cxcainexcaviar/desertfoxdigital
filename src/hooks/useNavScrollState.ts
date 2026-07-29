'use client';

import { useScrollPosition } from './useScrollPosition';

export function useNavScrollState(threshold = 40): boolean {
  return useScrollPosition(threshold);
}
