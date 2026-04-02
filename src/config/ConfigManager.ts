export class ConfigManager {
  static getBaseUrl(): string {
    return process.env.BASE_URL || '/'
  }

  static isHeadless(): boolean {
    return process.env.HEADLESS !== 'false';
  }

  static getBrowser(): 'chromium' | 'firefox' | 'webkit' {
    return (process.env.BROWSER as any) || 'chromium';
  }
}