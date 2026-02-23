// global type declarations for Google Analytics helpers

export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }

  function gtag(...args: any[]): void;
  function gtag_report_conversion(url?: string): boolean;
}
