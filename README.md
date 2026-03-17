# Skills Drawer

A floating side-panel that gives AI assistants superpowers. Browse, activate, and manage AI skills — each with a full prompt, features list, and one-click example to test.

Built as a [Tampermonkey](https://www.tampermonkey.net/) userscript and a standalone web app.

![Skills Drawer Screenshot](screenshot.png)

## ✨ Features

- **25 curated skills** across coding, design, writing, research, and more
- **Party Mode** 🎉 — cycling emoji loader + confetti on task completion
- **Daily fresh picks** — new skills surfaced every morning via live JSON feed
- **Auto-sync** — activating a skill sends it straight to your AI assistant
- **Try It prompts** — every skill has an example you can copy and test instantly
- **Favorites** — heart the ones you use most, find them in one tap

## 🚀 Quick Start: Tampermonkey

Want the drawer injected directly into your AI chat interface? Here's how:

### 1. Install Tampermonkey

- **Chrome**: [Tampermonkey on Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Edge**: [Tampermonkey on Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### 2. Create a new script

1. Click the Tampermonkey icon in your browser toolbar
2. Click **Create a new script...**
3. Delete everything in the editor

### 3. Paste the userscript

Copy the entire contents of [`userscript/skills-drawer.user.js`](userscript/skills-drawer.user.js) and paste it into the Tampermonkey editor.

### 4. Update the `@match` URL

By default, the script targets `https://hatch.ecto1.ai/*`. Change this line to match your AI chat URL:

```js
// @match        https://your-ai-chat-url.com/*
```

### 5. Save and reload

- Press **Ctrl+S** (or Cmd+S) to save
- Reload your AI chat page
- Look for the ✨ sparkle icon in the top-right corner

That's it. Click the icon to open the drawer.

## 🌐 Live Demo

**[skills-drawer.vercel.app](https://skills-drawer.vercel.app)** — standalone version of the drawer.

## 📦 What's Included

| Path | Description |
|---|---|
| `index.html` | Standalone skills drawer (deployed to Vercel) |
| `latest-skills.json` | Daily-refreshed skills feed |
| `userscript/skills-drawer.user.js` | Tampermonkey userscript for injection into any page |
| `color-systems/indigo.html` | Interactive indigo color system visualizer |
| `color-systems/hotpink.html` | Interactive hot pink color system visualizer |

## 📡 Daily Skills Feed

The `latest-skills.json` file is updated every morning at 6am PT with 3 new skill discoveries. The drawer fetches this file on open, so you always see fresh picks without re-installing the userscript.

Skills are selected based on one criteria: **does it genuinely add value that a base AI can't do on its own?** No filler, no redundant wrappers.

## 🎨 Color Systems

The drawer includes a **Color System Generator** skill that produces full design systems from a single brand color — primary + neutral scales, semantic colors, dark mode, contrast matrix, all in CSS custom properties with oklch notation.

Interactive demos:
- [Indigo System](/color-systems/indigo) — built from `#6366f1`
- [Hot Pink System](/color-systems/hotpink) — built from `#F6339A`

## License

MIT
