import { test } from '@playwright/test';

test('spec 5', async () => {
  await new Promise((resolve) => setTimeout(resolve, 61023));
});