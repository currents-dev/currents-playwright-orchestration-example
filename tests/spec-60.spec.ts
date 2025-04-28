import { test } from '@playwright/test';

test('spec 60', async () => {
  await new Promise((resolve) => setTimeout(resolve, 95247));
});