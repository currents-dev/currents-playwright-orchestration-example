import { test } from '@playwright/test';

test('spec 56', async () => {
  await new Promise((resolve) => setTimeout(resolve, 100567));
});