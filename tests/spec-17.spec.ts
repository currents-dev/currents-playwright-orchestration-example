import { test } from '@playwright/test';

test('spec 17', async () => {
  await new Promise((resolve) => setTimeout(resolve, 115186));
});