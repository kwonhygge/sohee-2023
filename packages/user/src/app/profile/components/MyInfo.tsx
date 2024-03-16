import Image from 'next/image'
import { MyInfoData } from '@/interfaces'
import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'

type MyInfoProps = {
    data: MyInfoData
}

export default function MyInfo(props: MyInfoProps) {
    const { data } = props

    return (
        <section className="flex flex-col gap-x-15 border-t-[5px] border-black lg:flex-row">
            <Suspense fallback={<Skeleton width={378} height={448} />}>
                <Image
                    width={378}
                    height={448}
                    alt={'profile-image'}
                    src={data.profileImageUrl}
                />
            </Suspense>
            <div className={'pt-12.5'}>
                <h2 className="text-2xl font-bold lg:mb-7 lg:text-4xl">{`${data.name}`}</h2>
                <p className={'mb-6 text-lg lg:mb-18 lg:text-2xl'}>
                    {data.position}
                </p>
                <div
                    className={
                        'mb-5 flex gap-x-5.5 text-sm lg:mb-12 lg:text-base'
                    }
                >
                    <span>{data.email}</span>
                    <Link href={data.brunchUrl ?? '/'} target={'_blank'}>
                        ・ 브런치 스토리
                    </Link>
                    <Link href={data.resumeUrl ?? '/'} target={'_blank'}>
                        ・ 이력서 바로가기
                    </Link>
                </div>
                <p className="whitespace-pre-line leading-[1.8] lg:text-xl">
                    {
                        '다정한 시선을 담아 브랜드의 이야기를 만듭니다.\n목표를 향해 부지런히 달린 후 포근하게 쉬는 일상을 좋아합니다.\n고객과 함께 정갈하게 나이들어갈 수 있는 브랜드를 만들고 싶습니다.'
                    }
                </p>
            </div>
        </section>
    )
}
