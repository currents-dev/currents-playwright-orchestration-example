import { test } from '@playwright/test';

test('spec 1', async () => {
  await new Promise((resolve) => setTimeout(resolve, 82400));
});