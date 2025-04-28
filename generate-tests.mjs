import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const specsDir = './tests';
if (!existsSync(specsDir)) {
  mkdirSync(specsDir);
}

for (let i = 1; i <= 50; i++) {
  const waitTime = getRandomWaitTime(); // Random ms between 1m and 2m
  const content = `
import { test } from '@playwright/test';

test('spec ${i}', async () => {
  await new Promise((resolve) => setTimeout(resolve, ${waitTime}));
});
  `.trim();

  const filePath = join(specsDir, `spec-${i}.spec.ts`);
  writeFileSync(filePath, content);
}

function getRandomWaitTime(minMs = 30 * 1000, maxMs = 120 * 1000) {
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
}

console.log('Generated 50 spec files in ./tests');