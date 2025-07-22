/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_ENABLE_DEBUG: string
  readonly VITE_DEFAULT_THEME: string
  readonly VITE_ENABLE_THEME_SWITCHING: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Solar App specific types
declare module '*.tsx' {
  const content: React.ComponentType<any>
  export default content
}

declare module '*.ts' {
  const content: any
  export default content
}

// Global Solar types
interface Window {
  solarApp: {
    version: string
    apiUrl: string
    theme: 'light' | 'dark'
  }
}