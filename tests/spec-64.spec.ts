import { test } from '@playwright/test';

test('spec 64', async () => {
  await new Promise((resolve) => setTimeout(resolve, 90466));
});