import {
    PROJECT_NAMES,
    PROJECT_TYPE,
    ProjectName,
    ProjectType,
    ROLE_TYPE,
    RoleType,
    SCOPE_TYPE,
    ScopeType,
} from '@/constants'
import WorkersDdayMain from '@/static/img/main-covers/workers-dday-main.webp'
import AnimationCenterMain from '@/static/img/main-covers/animation-center-main.webp'
import BabyDrawMain from '@/static/img/main-covers/baby-draw-main.webp'
import DyneMain from '@/static/img/main-covers/dyne-main.webp'
import FlyingEarthMain from '@/static/img/main-covers/flying-earth-main.webp'
import SunSunMain from '@/static/img/main-covers/sun-sun-main.webp'
import TurnableMain from '@/static/img/main-covers/turnable-main.webp'
import HOnDreamMain from '@/static/img/main-covers/h-on-dream-main.webp'
import MeaderMain from '@/static/img/main-covers/meader-main.webp'

import { StaticImageData } from 'next/image'

export const ProjectTypeMap: Record<ProjectType, string> = {
    [PROJECT_TYPE.COMPANY_WORK]: 'Company Work',
}
export const RoleTypeMap: Record<RoleType, string> = {
    [ROLE_TYPE.CONTENTS_PLANNING]: 'Contents Planning',
    [ROLE_TYPE.DIRECTOR]: 'Director',
    [ROLE_TYPE.EDITOR]: 'Editor',
    [ROLE_TYPE.MARKETER]: 'Marketer',
    [ROLE_TYPE.MANAGER]: 'Manager',
    [ROLE_TYPE.PLANNER]: 'Planner',
    [ROLE_TYPE.PM]: 'PM',
}
export const ScopeTypeMap: Record<ScopeType, string> = {
    [SCOPE_TYPE.BRAND_FILM]: 'Brand Film',
    [SCOPE_TYPE.BRAND_IDENTITY]: 'Brand Identity',
    [SCOPE_TYPE.BRAND_STORY]: 'Brand Story',
    [SCOPE_TYPE.EXHIBITION]: 'Exhibition',
    [SCOPE_TYPE.GOODS]: 'Goods',
    [SCOPE_TYPE.GRAPHIC_MOTIF]: 'Graphic Motif',
    [SCOPE_TYPE.MARKETING]: 'Marketing',
    [SCOPE_TYPE.NAMING]: 'Naming',
    [SCOPE_TYPE.PHILOSOPHY]: 'Philosophy',
    [SCOPE_TYPE.PACKAGE]: 'Package',
    [SCOPE_TYPE.SPACE_OPERATION]: 'Space Operation',
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
    [PROJECT_NAMES.WORKERS_DDAY]: {
        alt: 'Workers Dday',
        image: WorkersDdayMain,
    },
    [PROJECT_NAMES.TURNABLE]: {
        alt: 'Turnable',
        image: TurnableMain,
    },
    [PROJECT_NAMES.H_ON_DREAM]: {
        alt: 'H On Dream',
        image: HOnDreamMain,
    },
    [PROJECT_NAMES.MEADER]: {
        alt: 'Meader',
        image: MeaderMain,
    },
}

export const projectColorMap: Record<ProjectName, string> = {
    [PROJECT_NAMES.ANIMATION_CENTER]: 'workers-dday-color',
    [PROJECT_NAMES.BABY_DRAW]: '#4379CC',
    [PROJECT_NAMES.DYNE]: '#1E213A',
    [PROJECT_NAMES.FLYING_EARTH]: '#824259',
    [PROJECT_NAMES.SUN_SUN]: '#719EE2',
    [PROJECT_NAMES.WORKERS_DDAY]: '#5DBAF9',
    [PROJECT_NAMES.H_ON_DREAM]: '#CE0673',
    [PROJECT_NAMES.MEADER]: '#568AF2',
    [PROJECT_NAMES.TURNABLE]: '#4F3270',
}
