import MyInfo from '@/app/profile/components/MyInfo'
import WorkHistory from '@/app/profile/components/WorkHistory'
import { getMyInfo } from '@/services/my-info'
import { MyInfoData } from '@/interfaces'
import WorkProcess from '@/app/profile/components/WorkProcess'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'info | sohee.park',
}
export default async function Page() {
    const myInfoData = await getMyInfo<MyInfoData>()

    return (
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-y-28 px-7.5 pb-20 pt-24 lg:flex-row lg:items-start lg:justify-between lg:gap-y-0 lg:px-0 lg:pb-48 lg:pt-52">
            <MyInfo data={myInfoData} />
            <div className="grid gap-y-20 lg:gap-y-25">
                <WorkProcess />
                <WorkHistory />
            </div>
        </div>
    )
}
