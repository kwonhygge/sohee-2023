import { SCOPE_TYPE, ScopeType } from '@/constants'
import WorkersDdayMain from '@/static/main-covers/workers-dday-main.png'
import { StaticImageData } from 'next/image'

export const ScopeTypeMap: Record<ScopeType, string> = {
    [SCOPE_TYPE.BRAND_FILM]: 'Brand Film',
    [SCOPE_TYPE.BRAND_IDENTITY]: 'Brand Identity',
    [SCOPE_TYPE.PACKAGE]: 'Package',
}

export const MainImageMap: Record<
    string,
    {
        alt: string
        image: StaticImageData
    }
> = {
    'workers-dday': {
        alt: 'Workers Dday',
        image: WorkersDdayMain,
    },
}
