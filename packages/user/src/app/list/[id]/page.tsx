import { getProjectByOrderId } from '@/services/project'
import { ProjectData } from '@/interfaces'
import TitleSection from '@/app/list/[id]/components/TitleSection'

type Params = {
    [key: string]: string | number | string[] | undefined
}

export default async function Page({ params }: { params: Params }) {
    const data = await getProjectByOrderId<ProjectData>(Number(params?.id) || 1)

    return (
        <div>
            <div className="mx-auto max-w-[900px]">
                <TitleSection data={data} />
            </div>
        </div>
    )
}
