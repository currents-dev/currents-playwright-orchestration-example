import { test } from '@playwright/test';

test('spec 9', async () => {
  await new Promise((resolve) => setTimeout(resolve, 73395));
});