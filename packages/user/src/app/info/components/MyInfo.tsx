import Image from 'next/image'
import { MyInfoData } from '@/interfaces'

type MyInfoProps = {
    data: MyInfoData
}

export default function MyInfo(props: MyInfoProps) {
    const { data } = props

    return (
        <section className="max-w-[326px]">
            <Image
                width={326}
                height={377}
                alt={'profile-image'}
                src={data.profileImageUrl}
            />
            <p className="mt-6 whitespace-pre-line">
                {data.name}
                {'\n'}
                {data.position}
            </p>
            <p className="mt-5 whitespace-pre-line text-sm leading-6 tracking-tight">
                {data.introduction}
            </p>
        </section>
    )
}
