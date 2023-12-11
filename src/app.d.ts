// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  interface Locals {
    startTimer: number;
    logger: any;
    error: string | undefined;
    errorId: string | undefined;
    errorStackTrace: string | undefined;
  }
  interface Error {
    code?: string;
    errorId?: string;
  }
  // interface PageData {}
  // interface Platform {}
}
