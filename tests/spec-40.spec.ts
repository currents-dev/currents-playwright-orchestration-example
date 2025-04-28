import { test } from '@playwright/test';

test('spec 40', async () => {
  await new Promise((resolve) => setTimeout(resolve, 89652));
});