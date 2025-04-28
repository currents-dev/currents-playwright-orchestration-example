import { test } from '@playwright/test';

test('spec 21', async () => {
  await new Promise((resolve) => setTimeout(resolve, 101025));
});