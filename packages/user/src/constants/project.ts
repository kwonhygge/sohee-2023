export const PROJECT_NAMES = {
    ANIMATION_CENTER: 'animationCenter',
    H_ON_DREAM: 'hOnDream',
    BABY_DRAW: 'babyDraw',
    MEADER: 'meader',
    DYNE: 'dyne',
    FLYING_EARTH: 'flyingEarth',
    SUN_SUN: 'sunsun',
    TURNABLE: 'turnable',
    WORKERS_DDAY: 'workersDday',
} as const
export type ProjectName = (typeof PROJECT_NAMES)[keyof typeof PROJECT_NAMES]
