import MyInfo from '@/app/info/components/MyInfo'
import WorkHistory from '@/app/info/components/WorkHistory'
import { getMyInfo } from '@/services/my-info'
import { MyInfoData } from '@/interfaces'
import WorkProcess from '@/app/info/components/WorkProcess'

export default async function Page() {
    const myInfoData = await getMyInfo<MyInfoData>()

    return (
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-y-20 px-7.5 pt-24 lg:flex-row lg:items-start lg:justify-between lg:gap-y-0 lg:px-0 lg:pt-52">
            <MyInfo data={myInfoData} />
            <div className="grid gap-y-20 lg:gap-y-25">
                <WorkProcess />
                <WorkHistory />
            </div>
        </div>
    )
}
