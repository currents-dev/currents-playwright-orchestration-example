import { test } from '@playwright/test';

test('spec 14', async () => {
  await new Promise((resolve) => setTimeout(resolve, 52626));
});