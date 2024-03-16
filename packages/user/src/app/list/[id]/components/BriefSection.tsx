import { BriefSectionProps } from '@/interfaces'
import Image from 'next/image'

export default function BriefSection(props: BriefSectionProps) {
    const { data, roles, introduction, imageCaption } = props

    if (!data) return <></>

    return (
        <section className={'border-t-[5px] border-black pt-7.5'}>
            <h2
                className={
                    'whitespace-pre-line text-2xl font-bold leading-[1.4] lg:text-4xl'
                }
            >
                {data.title}
            </h2>
            <div className="mb-10 mt-5">
                <div className="flex items-center gap-x-3 text-sm">
                    <span>{data.date}</span>
                    <div className="h-[11px] w-[0.7px] bg-[#8A8A8A]" />
                    <span>{data.scale}</span>
                    <div className="h-[11px] w-[0.7px] bg-[#8A8A8A]" />
                    <span
                        style={{
                            color: data.contribution.color,
                        }}
                    >
                        기여도 {data.contribution.value}%
                    </span>
                </div>
            </div>
            <Image
                src={data.thumbnailImg}
                alt={data.title}
                width={800}
                height={500}
            />
            <span className={'float-right text-xs'}>{imageCaption}</span>
            <div className={'mb-15 mt-12'}>
                <h4 className={'mb-5 font-bold lg:text-lg'}>프로젝트 소개</h4>
                <p className={'whitespace-pre-line leading-[1.8] lg:text-lg'}>
                    {introduction}
                </p>
            </div>
            <div>
                <h4
                    className={
                        'mb-5 flex items-center gap-x-3 font-bold lg:text-lg'
                    }
                >
                    역할 및 성과{' '}
                    <div className="h-[12px] w-[0.7px] bg-[#8A8A8A]" />
                    <span
                        style={{
                            color: data.contribution.color,
                        }}
                        className={'text-sm font-light'}
                    >
                        기여도 {data.contribution.value}%
                    </span>
                </h4>
                <p className={'whitespace-pre-line leading-[1.8] lg:text-lg'}>
                    {roles}
                </p>
            </div>
        </section>
    )
}
