export const ElemLocators = {
  HomePage: {
    SECTION_LINK: (name: string) => `a[href="/${name}"]`,
    HEADER: 'h1',
  },
  LoginPage: {
    USERNAME: '#username',
    PASSWORD: '#password',
    SUBMIT: 'button[type="submit"]',
  },
  SecureAreaPage: {
    LOGOUT_BTN: 'a.button'
  },
  DropdownPage: {
    DROPDOWN: '#dropdown',
  },
  ContextMenuPage: {
    HOTSPOT: '#hot-spot',
  },
} as const;