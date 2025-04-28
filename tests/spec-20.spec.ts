import { test } from '@playwright/test';

test('spec 20', async () => {
  await new Promise((resolve) => setTimeout(resolve, 102378));
});