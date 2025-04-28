import { test } from '@playwright/test';

test('spec 23', async () => {
  await new Promise((resolve) => setTimeout(resolve, 62179));
});