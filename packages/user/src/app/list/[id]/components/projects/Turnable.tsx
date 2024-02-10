import type { ProjectCommonProps } from '@/interfaces'
import TitleSection from '@/app/list/[id]/components/TitleSection'

export default function Turnable(props: ProjectCommonProps) {
    const { data } = props
    return (
        <>
            <div className="h-[680px]" />
            <TitleSection data={data} />
        </>
    )
}
