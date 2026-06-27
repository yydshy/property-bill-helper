# Property Bill Dashboard

A single-file, client-side property bill tracking dashboard with dark theme, gamification, and smart energy-saving suggestions.

## Features

- **SMS Parsing** — Paste property management SMS and auto-extract water/electricity bills
- **Data Visualization** — Bar charts, line charts, pie charts, and scatter plots (Chart.js)
- **Dark Theme** — DeepSeek-inspired dark UI with amber accent color
- **Gamification** — 12 achievement badges, 8 rank tiers, hamster mascot with dynamic messages
- **Budget Alerts** — Set a monthly budget and get real-time overspend warnings
- **Cost Prediction** — Linear regression based on recent 6 months trend
- **Anomaly Detection** — Auto-flag months with >30% MoM increase
- **Share Cards** — Generate SVG-based shareable summary images (download as PNG)
- **Smart Suggestions** — Dynamic recommendation engine with 8 dimensions and 50+ combinations
- **Weather Correlation** — Temperature vs electricity scatter plot via Open-Meteo API (free, no API key)
- **Tiered Electricity Pricing** — Guangzhou residential tier analysis (summer/non-summer thresholds)
- **Year Summary** — Annual overview with YoY comparison and carbon emission estimate
- **Month Comparison** — Pick any two months for side-by-side cost breakdown
- **Chart-Table Interaction** — Click chart bars to highlight and scroll to table rows
- **Cross-Device Sync** — GitHub Gist backup/restore (no backend required)
- **Mobile Responsive** — Optimized for 768px and 480px breakpoints

## Tech Stack

| Technology | Usage |
|---|---|
| HTML/CSS/JS | Single file, zero dependencies to install |
| Chart.js 4.4.1 | All data visualizations (CDN) |
| Open-Meteo API | Historical weather data (free, CORS enabled) |
| GitHub Gist API | Cross-device data sync (optional) |
| localStorage | Offline data persistence |

## Quick Start

1. Open `index.html` in any modern browser
2. Paste your property bill SMS into the input box
3. Click "Extract & Add" to parse and store the bill
4. All charts, stats, and suggestions update automatically

### SMS Format Example

```
2026-06, water usage 12 tons, water fee 35 CNY, electricity usage 280 kWh, electricity fee 420 CNY, shared electricity fee 15 CNY, management fee 120 CNY, total 590 CNY
```

## File Structure

```
property-bill-helper/
├── index.html          # Main application (single file, ~126KB)
├── README.md           # This file
└── push-to-github.sh   # One-click push script (optional)
```

## Cross-Device Sync (Optional)

To sync data across devices via GitHub Gist:

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Generate a new token (classic) with `gist` scope
3. In the dashboard, click the sync status indicator at the bottom
4. Paste your token and click "Connect Gist"

Data is stored in your private Gist. No server-side code involved.

## Guangzhou Tiered Electricity Pricing

| Season | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| Summer (May–Oct) | 0–260 kWh · ¥0.6087 | 261–600 kWh · ¥0.6587 | 601+ kWh · ¥0.9087 |
| Non-Summer | 0–200 kWh · ¥0.6087 | 201–400 kWh · ¥0.6587 | 401+ kWh · ¥0.9087 |

## License

MIT

---

Built with Chart.js · Weather data by [Open-Meteo](https://open-meteo.com/)
