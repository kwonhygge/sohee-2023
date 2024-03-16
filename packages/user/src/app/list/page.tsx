import { MainImageMap } from '@/utils'

import Link from 'next/link'
import { PAGE_URL } from '@/constants'
import { Metadata } from 'next'
import { WORK_LIST } from '@/contents/list'
import Image from 'next/image'
import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'portfolio | sohee.park',
    description: 'Brand Marketer & Strategist',
}

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="flex min-h-screen flex-col items-center pb-32 pt-48">
                    <ul className="flex max-w-[1200px] flex-wrap justify-center gap-x-20 gap-y-25 px-4 lg:justify-normal lg:px-0">
                        {WORK_LIST.map((project, index) => {
                            const currentImage = MainImageMap[project.name]
                            const detailUrl = PAGE_URL.DETAIL(project.id)

                            return (
                                <Link
                                    key={project.id}
                                    className={'group'}
                                    href={detailUrl}
                                >
                                    <li className="group w-fit ">
                                        <Image
                                            className="mp-px transition duration-300 ease-in-out group-hover:opacity-80"
                                            src={project.thumbnailImg}
                                            alt={currentImage.alt}
                                            width={560}
                                            height={370}
                                        />
                                        <div className="mt-5">
                                            <h2 className="whitespace-pre-line text-[28px] font-semibold leading-[1.4]">
                                                {project.title}
                                            </h2>

                                            <p className="mt-8 whitespace-pre-line text-base leading-relaxed">
                                                {project.thumbnailDescription}
                                            </p>
                                            <div className="mt-7.5 flex items-center gap-x-3 border-t border-black pt-5 text-sm">
                                                <span>{project.date}</span>
                                                <div className="h-[11px] w-[0.7px] bg-[#8A8A8A]" />
                                                <span>{project.scale}</span>
                                                <div className="h-[11px] w-[0.7px] bg-[#8A8A8A]" />
                                                <span
                                                    style={{
                                                        color: project
                                                            .contribution.color,
                                                    }}
                                                >
                                                    기여도{' '}
                                                    {project.contribution.value}
                                                    %
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}
