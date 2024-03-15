import Image from 'next/image'
import { MyInfoData } from '@/interfaces'
import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classNames from 'classnames'
import { workSans } from '@/styles/font'

type MyInfoProps = {
    data: MyInfoData
}

export default function MyInfo(props: MyInfoProps) {
    const { data } = props

    return (
        <section className="max-w-[326px]">
            <Suspense fallback={<Skeleton width={326} height={377} />}>
                <Image
                    width={326}
                    height={377}
                    alt={'profile-image'}
                    src={data.profileImageUrl}
                />
            </Suspense>
            <p className="mt-6 whitespace-pre-line">{`${data.name}\n`}</p>
            <p
                className={classNames(
                    workSans.className,
                    'whitespace-pre-line',
                )}
            >
                {data.position}
            </p>
            <p className="mt-5 whitespace-pre-line text-sm leading-6 tracking-tight">
                {data.introduction}
            </p>
        </section>
    )
}
