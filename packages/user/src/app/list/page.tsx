import { getProjects } from '@/services/project'
import { ProjectData } from '@/interfaces'
import { MainImageMap, ScopeTypeMap } from '@/utils'
import ArrowIcon from '@/static/svg/arrow-icon.svg'
import { manrope } from '@/styles/font'

import Image from 'next/image'
import Link from 'next/link'
import { PAGE_URL } from '@/constants'
import classNames from 'classnames'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'portfolio | sohee.park',
    description: 'Brand Marketer & Strategist',
}

export default async function Home() {
    const data = await getProjects<ProjectData[]>()

    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray92 via-isabelline to-gray92 pb-32 pt-48">
            <ul className="flex max-w-[1200px] flex-wrap justify-center gap-x-20 gap-y-25 px-4 lg:justify-normal lg:px-0">
                {data.map((project, index) => {
                    const scopes = project.scopes
                        ?.map((scope) => ScopeTypeMap[scope])
                        .join(' / ')

                    const currentImage = MainImageMap[project.name]
                    const detailUrl = PAGE_URL.DETAIL(project.order)

                    return (
                        <li
                            key={project.id}
                            className="w-fit border-t border-charcoal pt-3.5"
                        >
                            <header className="mb-px flex items-center justify-between">
                                <h2 className="text-lg">{project.title}</h2>
                                <Link
                                    href={detailUrl}
                                    className="flex h-5 items-center justify-center"
                                >
                                    <ArrowIcon />
                                </Link>
                            </header>

                            <p
                                className={classNames(
                                    manrope.className,
                                    'mb-7 text-sm font-light text-charcoal',
                                )}
                            >
                                {scopes}
                            </p>
                            <Link className="group" href={detailUrl}>
                                <Image
                                    priority={index < 2}
                                    className="transition duration-300 ease-in-out group-hover:opacity-80"
                                    src={currentImage.image}
                                    alt={currentImage.alt}
                                    width={560}
                                    height={370}
                                    placeholder={'blur'}
                                />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
