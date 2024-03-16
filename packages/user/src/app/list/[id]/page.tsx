import AnimationCenter from '@/app/list/[id]/components/projects/AnimationCenter'
import BabyDraw from '@/app/list/[id]/components/projects/BabyDraw'
import SunSun from '@/app/list/[id]/components/projects/SunSun'
import Turnable from '@/app/list/[id]/components/projects/Turnable'
import FlyingEarth from '@/app/list/[id]/components/projects/FlyingEarth'
import Dyne from '@/app/list/[id]/components/projects/Dyne'
import WorkersDDay from '@/app/list/[id]/components/projects/WorkersDDay'

import { PROJECT_NAMES, ProjectName } from '@/constants'
import { Metadata } from 'next'
import { WORK_LIST } from '@/contents/list'
import HOnDream from '@/app/list/[id]/components/projects/HOnDream'
import Meader from '@/app/list/[id]/components/projects/Meader'
import Header from '@/components/Header'

type Params = {
    [key: string]: string | number | string[] | undefined
}

export async function generateMetadata({
    params,
}: {
    params: Params
}): Promise<Metadata> {
    const project = WORK_LIST.find((project) => project.id === params?.id)

    return {
        title: `${project?.title} | sohee.park`,
    }
}

export default async function Page({ params }: { params: Params }) {
    const projectData = WORK_LIST.find((project) => project.id === params?.id)

    if (!projectData) {
        return <div>Not Found</div>
    }
    const renderContent = (name: ProjectName) => {
        switch (name) {
            case PROJECT_NAMES.WORKERS_DDAY:
                return <WorkersDDay data={projectData} />
            case PROJECT_NAMES.H_ON_DREAM:
                return <HOnDream data={projectData} />
            case PROJECT_NAMES.MEADER:
                return <Meader data={projectData} />
            case PROJECT_NAMES.ANIMATION_CENTER:
                return <AnimationCenter data={projectData} />
            case PROJECT_NAMES.BABY_DRAW:
                return <BabyDraw data={projectData} />
            case PROJECT_NAMES.SUN_SUN:
                return (
                    <SunSun
                        data={{
                            ...projectData,
                            thumbnailImg:
                                '/static/img/detail/sun-sun/cover.webp',
                        }}
                    />
                )
            case PROJECT_NAMES.TURNABLE:
                return <Turnable data={projectData} />
            case PROJECT_NAMES.FLYING_EARTH:
                return <FlyingEarth data={projectData} />
            case PROJECT_NAMES.DYNE:
                return <Dyne data={projectData} />
            default:
                return <></>
        }
    }

    return (
        <>
            <Header isDarkTheme />
            <main>
                <div className="mb-13 bg-white">
                    {renderContent(
                        projectData?.name ?? PROJECT_NAMES.WORKERS_DDAY,
                    )}
                </div>
            </main>
        </>
    )
}
