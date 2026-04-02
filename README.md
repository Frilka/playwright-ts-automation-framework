# 🎭 Playwright + TypeScript Automation Framework

Modern, modular end‑to‑end testing setup built around **Playwright** and **TypeScript**.  
Includes reusable Page Objects, rich logging, screenshots on failure, and CI‑ready structure.

---

## ⚙️ Features

- 🧩 **Page Object Model** — clean separation of UI logic.
- 🧠 **Custom Fixtures** — preconfigured contexts (BaseTest, Auth, etc.).
- 🔐 **Environment‑based Credentials** — loaded securely from `.env`.
- 🧾 **Enhanced Assertions** — logging + screenshots on failure.
- 📈 **Parallel & Cross‑browser Testing** — Chromium, Firefox, WebKit.
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

