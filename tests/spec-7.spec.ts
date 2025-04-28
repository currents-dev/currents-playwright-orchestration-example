import { test } from '@playwright/test';

test('spec 7', async () => {
  await new Promise((resolve) => setTimeout(resolve, 98178));
});