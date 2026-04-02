# 🎭 Playwright + TypeScript Automation Framework

Modern, modular end‑to‑end testing setup built around **Playwright** and **TypeScript**.  
Includes reusable Page Objects, rich logging, screenshots on failure, and CI‑ready structure.

[![🎭 Playwright Tests](https://github.com/Frilka/playwright-ts-automation-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/Frilka/playwright-ts-automation-framework/actions/workflows/playwright.yml)
[![Deploy Status](https://img.shields.io/github/deployments/Frilka/playwright-ts-automation-framework/github-pages?label=🚀%20Report)](https://Frilka.github.io/playwright-ts-automation-framework/)

---

## ⚙️ Features

- 🧩 **Page Object Model** — clean separation of UI logic.
- 🧠 **Custom Fixtures** — preconfigured contexts (BaseTest, Auth, etc.).
- 🔐 **Environment‑based Credentials** — loaded securely from `.env`.
- 🧾 **Enhanced Assertions** — logging + screenshots on failure.
- 📈 **Parallel & Cross‑browser Testing** — Chromium, Firefox.
- 🧪 **API + UI Tests** — all managed within Playwright.
- 🚀 **CI Integration** (e.g., GitHub Actions ready).
- 🧹 **Prettier & ESLint** — consistent, type‑safe codebase.

---

## 🧭 Project Structure

├── 🧱 src/
    ├── 📁 fixtures/ # Custom test fixtures (BaseTest, AuthUiTest)
    ├── 📁 pages/ # Page Objects (POM implementation)
    ├── 📁 tests/ # UI + API test suites 
    ├── 📁 utils/ # Utilities and helpers 
    ├── 📁 config/ # Config files 
    |── 📁 locators/ # Centralized locators / selectors 
├── 🎭 playwright.config.ts # Global Playwright configuration 
├── 🧩 tsconfig.json # TypeScript configuration 
├── 📦 package.json # Project metadata and scripts 
├── 📄 .gitignore # Ignored files for Git 
|── 📝 README.md # Project documentation

---
## ⚙️ CI/CD Pipeline

This project runs automated tests through **GitHub Actions**.

| Stage | Description |
|--------|-------------|
| **API Tests** | Executed first on a single browser to validate backend / API endpoints. |
| **UI Tests** | Runs in parallel across **Chromium** and **Firefox** via matrix strategy. |
| **Report Merge** | Combines results from all browsers into a single HTML report. |
| **GitHub Pages Deploy** | Publishes the merged HTML report → [`Live Results`](https://Frilka.github.io/playwright-ts-automation-framework/) |

### 🔄 Triggers
- **Manual** – Run anytime from Actions → *🎭 Playwright Tests → Run workflow*  
- **Scheduled (weekly)** – Every Sunday at 02:00 UTC

### 🗝 Environment Variables
All CI secrets are managed in **GitHub → Settings → Secrets and variables → Actions**:
- `FORM_AUTH_USER`  
- `FORM_AUTH_PASS`  
- `BASE_URL`

### 🧾 Artifacts
Each workflow run uploads:
- Individual browser reports (`report-chromium`, `report-firefox`)
- The merged report (published to GitHub Pages)

---

## 🚀 Getting Started

### 1. Install dependencies, browsers
```bash
npm install

### 2. Install browsers
npx playwright install

### 3. Ask author to provide .env (frolovajul@gmail.com)

### 4. Run tests
npx playwright test

### 5. View report
npx playwright show-report

🧩 Scripts (from package.json) Description

npm test    Run all tests in headless mode
npm run test:headed Run tests with browser UI
npm run test:ui	Open Playwright UI mode
npm run test:debug	Debug tests step‑by‑step
npm run codegen	Launch Playwright code generator
npm run report	Show latest HTML test report
npm run format	Format with Prettier
npm run lint	Lint with ESLint

---
🧡 Maintained with Playwright & TypeScript.   
CI/CD powered by [GitHub Actions](https://github.com/features/actions)