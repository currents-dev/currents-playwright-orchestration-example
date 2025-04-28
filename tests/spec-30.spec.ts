import { test } from '@playwright/test';

test('spec 30', async () => {
  await new Promise((resolve) => setTimeout(resolve, 102278));
});