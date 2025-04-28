import { test } from '@playwright/test';

test('spec 6', async () => {
  await new Promise((resolve) => setTimeout(resolve, 64988));
});