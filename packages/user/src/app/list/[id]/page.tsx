import { getProjectByOrderId } from '@/services/project'
import { ProjectData } from '@/interfaces'
import AnimationCenter from '@/app/list/[id]/components/projects/AnimationCenter'
import BabyDraw from '@/app/list/[id]/components/projects/BabyDraw'
import SunSun from '@/app/list/[id]/components/projects/SunSun'
import Turnable from '@/app/list/[id]/components/projects/Turnable'
import FlyingEarth from '@/app/list/[id]/components/projects/FlyingEarth'
import Dyne from '@/app/list/[id]/components/projects/Dyne'
import WorkersDDay from '@/app/list/[id]/components/projects/WorkersDDay'

import { PROJECT_NAMES, ProjectName } from '@/constants'

type Params = {
    [key: string]: string | number | string[] | undefined
}

export default async function Page({ params }: { params: Params }) {
    const data = await getProjectByOrderId<ProjectData>(Number(params?.id) || 1)

    const renderContent = (name: ProjectName) => {
        switch (name) {
            case PROJECT_NAMES.WORKERS_DDAY:
                return <WorkersDDay data={data} />
            case PROJECT_NAMES.ANIMATION_CENTER:
                return <AnimationCenter data={data} />
            case PROJECT_NAMES.BABY_DRAW:
                return <BabyDraw data={data} />
            case PROJECT_NAMES.SUN_SUN:
                return <SunSun data={data} />
            case PROJECT_NAMES.TURNABLE:
                return <Turnable data={data} />
            case PROJECT_NAMES.FLYING_EARTH:
                return <FlyingEarth data={data} />
            case PROJECT_NAMES.DYNE:
                return <Dyne data={data} />
            default:
                return <></>
        }
    }

    return <div className="mb-13 bg-white">{renderContent(data.name)}</div>
}
