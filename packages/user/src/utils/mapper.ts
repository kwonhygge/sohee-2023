import { PROJECT_NAMES, ProjectName, SCOPE_TYPE, ScopeType } from '@/constants'
import WorkersDdayMain from '@/static/img/main-covers/workers-dday-main.png'
import AnimationCenterMain from '@/static/img/main-covers/animation-center-main.png'
import BabyDrawMain from '@/static/img/main-covers/baby-draw-main.png'
import DyneMain from '@/static/img/main-covers/dyne-main.png'
import FlyingEarthMain from '@/static/img/main-covers/flying-earth-main.png'
import SunSunMain from '@/static/img/main-covers/sun-sun-main.png'
import TurnableMain from '@/static/img/main-covers/turnable-main.png'

import { StaticImageData } from 'next/image'

export const ScopeTypeMap: Record<ScopeType, string> = {
    [SCOPE_TYPE.BRAND_FILM]: 'Brand Film',
    [SCOPE_TYPE.BRAND_IDENTITY]: 'Brand Identity',
    [SCOPE_TYPE.BRAND_STORY]: 'Brand Story',
    [SCOPE_TYPE.GOODS]: 'Goods',
    [SCOPE_TYPE.GRAPHIC_MOTIF]: 'Graphic Motif',
    [SCOPE_TYPE.MARKETING]: 'Marketing',
    [SCOPE_TYPE.MANAGING]: 'Managing',
    [SCOPE_TYPE.NAMING]: 'Naming',
    [SCOPE_TYPE.PHILOSOPHY]: 'Philosophy',
    [SCOPE_TYPE.PACKAGE]: 'Package',
    [SCOPE_TYPE.WORKSHOP]: 'Workshop',
}

export const MainImageMap: Record<
    ProjectName,
    {
        alt: string
        image: StaticImageData
    }
> = {
    [PROJECT_NAMES.ANIMATION_CENTER]: {
        alt: 'Animation Center',
        image: AnimationCenterMain,
    },
    [PROJECT_NAMES.BABY_DRAW]: {
        alt: 'Baby Draw',
        image: BabyDrawMain,
    },
    [PROJECT_NAMES.DYNE]: {
        alt: 'Dyne',
        image: DyneMain,
    },
    [PROJECT_NAMES.FLYING_EARTH]: {
        alt: 'Flying Earth',
        image: FlyingEarthMain,
    },
    [PROJECT_NAMES.SUN_SUN]: {
        alt: 'sun sun',
        image: SunSunMain,
    },
    [PROJECT_NAMES.TURNABLE]: {
        alt: 'Turnable',
        image: TurnableMain,
    },
    [PROJECT_NAMES.WORKERS_DDAY]: {
        alt: 'Workers Dday',
        image: WorkersDdayMain,
    },
}
