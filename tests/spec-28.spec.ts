import { test } from '@playwright/test';

test('spec 28', async () => {
  await new Promise((resolve) => setTimeout(resolve, 79518));
});