# Parama V1.0 — Deployment Guide

Parama is a data/branding duplicate of the final Santara Closing V4.3.9 engine. Core stock, report, recipe, HPP, draft, submit, dashboard and opname algorithms are intentionally preserved.

## Files
- Code.gs — Apps Script backend + Parama seed data
- Index.html — Apps Script app UI, branded Parama
- manifest.webmanifest — Parama PWA metadata
- sw.js — Parama service-worker cache namespace
- PARAMA_MASTER_DATA.json — auditable seed data
- PARAMA_RECIPE_TODO.md — missing recipe details that must be completed later

## First setup
1. Create a new blank Google Spreadsheet dedicated to Parama.
2. Open Extensions → Apps Script.
3. Replace Code.gs with the packaged Code.gs.
4. Create/replace Index.html with the packaged Index.html.
5. Save.
6. Run `setupParamaV439` once from Apps Script editor.
7. Authorize the script if requested.
8. Deploy → New deployment → Web app.
9. Execute as the owner account of the Parama spreadsheet.
10. Give access according to your internal use.

## Important
- Do not run reset/setup functions casually on production data.
- HPP values are seeded into `Master_HPP_Menu`.
- Sales prices are seeded into an informational `Master_Harga_Jual` sheet and are not used by the existing stock/financial engine.
- Menus with no usable recipe rows are seeded Nonaktif until their recipe is supplied.
- Some active recipes are intentionally partial because the provided source did not specify every ingredient quantity. Review `PARAMA_RECIPE_TODO.md`.
- Packaging/cups and ice are not included in Parama recipes, per instruction.
- Water is not treated as stock.
- Espresso is tracked as a separate ml item because the supplied menu recipes specify espresso in ml. No new espresso-from-beans algorithm was introduced.

## WebView/APK
The Apps Script URL is deployment-specific. After deployment, update the existing WebView shell only with the new Parama URL/branding. Do not change the WebView flow.
