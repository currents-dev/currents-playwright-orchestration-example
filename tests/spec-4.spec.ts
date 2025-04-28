import { test } from '@playwright/test';

test('spec 4', async () => {
  await new Promise((resolve) => setTimeout(resolve, 69007));
});