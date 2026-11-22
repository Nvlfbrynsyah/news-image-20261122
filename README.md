# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Nvlfbrynsyah/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Nvlfbrynsyah/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122/reward?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

## Sunday 22 November 2026 Front Page News

This high-impact front page image sums up world news on Sunday 22 November 2026 using the signature MAP-LED concept: a big stylised world map with 7 numbered location pins at the top, paired with 7 curated global stories.

### Seven Stories & Locations
1. **Poland**: NATO chief Mark Rutte vows alliance will defend every inch of Poland after missiles/drone land in south-east.
2. **Bahrain**: Iran strikes US Patriot radars at al-Riffa and Awali; fire at civilian industrial facility.
3. **Brussels (EU / Indonesia)**: EU and Indonesia sign landmark trade deal after decade of talks.
4. **Antalya (COP31)**: Climate summit deadlocked as draft drops fossil fuels and adaptation-finance targets.
5. **Guasave (Mexico)**: Cartel boss 'El Chapo Isidro' captured; 11 killed in Sinaloa clashes.
6. **Lviv (Ukraine)**: Russian missile and drone strike on Sknyliv railway station kills two.
7. **Dublin (Ireland)**: Ireland stuns world champion South Africa 20–17 at Aviva Stadium.

### Build & Architecture
- **poster.html**: Single-file responsive 1024x1024 layout featuring a dark navy masthead, world map with 7 pins, hero section, and 2-row card grid with custom inline flat SVG illustrations.
- **Screenshot**: Rendered via Playwright Chromium into `entry.png` (1024x1024, exact fit).
- **main.ts**: Node 22 ESM script copying `entry.png` to `MAKEFUN_OUTPUT_DIR` (or `/output`).

### Sources
BBC, Reuters, AP, AFP, NYT.

### Run It
```bash
node ni22-shots.mjs
node main.ts
```
