import { test } from '@playwright/test';

test('spec 3', async () => {
  await new Promise((resolve) => setTimeout(resolve, 33757));
});