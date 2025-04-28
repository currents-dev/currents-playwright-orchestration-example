import { test } from '@playwright/test';

test('spec 16', async () => {
  await new Promise((resolve) => setTimeout(resolve, 107472));
});