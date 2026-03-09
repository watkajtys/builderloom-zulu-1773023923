import { test, expect } from '@playwright/test';

test('App initializes correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Loom Initialized')).toBeVisible();
});

test('Verify that the React app loads and displays the main dashboard shell with the required tabs without errors.', async ({ page }) => {
  await page.goto('/');
  
  // Verify tabs exist
  await expect(page.locator('button:has-text("TELEMETRY")')).toBeVisible();
  await expect(page.locator('button:has-text("SYSTEM HEALTH")')).toBeVisible();
  await expect(page.locator('button:has-text("KANBAN")')).toBeVisible();
  await expect(page.locator('button:has-text("ROADMAP")')).toBeVisible();

  // Take screenshot
  await page.screenshot({ path: 'evidence.png' });
});
