import { test } from '@playwright/test';

test('spec 66', async () => {
  await new Promise((resolve) => setTimeout(resolve, 90072));
});