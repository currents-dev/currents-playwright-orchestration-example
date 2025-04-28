import { test } from '@playwright/test';

test('spec 46', async () => {
  await new Promise((resolve) => setTimeout(resolve, 114432));
});