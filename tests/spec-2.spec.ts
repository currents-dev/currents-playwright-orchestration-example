import { test } from '@playwright/test';

test('spec 2', async () => {
  await new Promise((resolve) => setTimeout(resolve, 51371));
});