export const SCOPE_TYPE = {
    BRAND_FILM: 'BRAND_FILM',
    BRAND_IDENTITY: 'BRAND_IDENTITY',
    PACKAGE: 'PACKAGE',
} as const
export type ScopeType = (typeof SCOPE_TYPE)[keyof typeof SCOPE_TYPE]
