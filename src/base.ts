/// <reference types="vite/client" />

export type SvelteInspectionLevel = 'debug' | 'info' | 'warn' | 'error'
export type SvelteInspectionInput = {
    msg: string,
    [prop: string]: string | number | boolean | Error
} | string | Error
export type SvelteInspectionTransport = {
    msg: string
    level: SvelteInspectionLevel
    timestamp: string
    [prop: string]: string | number | boolean | Error
}

interface ImportMetaEnv {
    readonly VITE_SVELTE_INSPECTION: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}

export const isActive = import.meta.env['VITE_SVELTE_INSPECTION'] || import.meta.env.DEV

export function empty(msg: SvelteInspectionInput) {
    return;
}
