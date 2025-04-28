import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const specsDir = './tests';
if (!existsSync(specsDir)) {
  mkdirSync(specsDir);
}

for (let i = 51; i <= 70; i++) {
  const waitTime = getRandomWaitTime(90*1000, 120*1000);
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