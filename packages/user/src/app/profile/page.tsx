import MyInfo from '@/app/profile/components/MyInfo'
import { getMyInfo } from '@/services/my-info'
import { MyInfoData } from '@/interfaces'
import WorkExperience from '@/app/profile/components/WorkExperience'
import { Metadata } from 'next'
import WorkSkill from '@/app/profile/components/WorkSkill'
import WorkActivity from '@/app/profile/components/WorkActivity'
import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'profile | sohee.park',
}
export default async function Page() {
    const myInfoData = await getMyInfo<MyInfoData>()

    return (
        <>
            <Header />
            <main>
                <div className="mx-auto flex max-w-[1100px] flex-col gap-y-25 pb-25 lg:pt-52">
                    <MyInfo data={myInfoData} />
                    <WorkExperience />
                    <WorkSkill />
                    <WorkActivity />
                </div>
            </main>
        </>
    )
}
