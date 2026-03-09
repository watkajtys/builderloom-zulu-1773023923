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

test('Verify view components exist and navigate correctly', async ({ page }) => {
  await page.goto('/');

  // Telemetry view is default
  await expect(page.locator('text=LIVE TELEMETRY')).toBeVisible();

  // Navigate to Health view
  await page.click('button:has-text("SYSTEM HEALTH")');
  await expect(page.locator('text=SYSTEM HEALTH REPORT - OK')).toBeVisible();

  // Navigate to Kanban view
  await page.click('button:has-text("KANBAN")');
  await expect(page.locator('text=ACTIVE OPERATIONS BACKLOG')).toBeVisible();

  // Navigate to Roadmap view
  await page.click('button:has-text("ROADMAP")');
  await expect(page.locator('text=MISSION ROADMAP - Q3')).toBeVisible();
});
