export const PROJECT_NAMES = {
    ANIMATION_CENTER: 'animationCenter',
    BABY_DRAW: 'babyDraw',
    DYNE: 'dyne',
    FLYING_EARTH: 'flyingEarth',
    SUN_SUN: 'sunsun',
    TURNABLE: 'turnable',
    WORKERS_DDAY: 'workersDday',
} as const
export type ProjectName = (typeof PROJECT_NAMES)[keyof typeof PROJECT_NAMES]
