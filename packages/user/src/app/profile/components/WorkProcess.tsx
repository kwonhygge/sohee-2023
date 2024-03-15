import { workSans } from '@/styles/font'
import classNames from 'classnames'

const WORK_PROCESS = [
    {
        englishTitle: 'Analysis',
        koreanTitle: '분석',
        content: '데스크 리서치, 워크숍, 인터뷰 등 다각적 방법으로 브랜드 분석',
    },
    {
        englishTitle: 'Definition',
        koreanTitle: '정의',
        content: '브랜드의 본질을 발견하고 가치와 철학으로 정의',
    },
    {
        englishTitle: 'Strategy',
        koreanTitle: '전략',
        content: '컨셉을 포함한 코어 전략 구축',
    },
    {
        englishTitle: 'Identity',
        koreanTitle: '개발',
        content: '스토리, 슬로건 등 브랜드 정체성이 담긴 아이덴티티 개발',
    },
    {
        englishTitle: 'Experience',
        koreanTitle: '확장',
        content: '콘텐츠, 캠페인 등 다양한 방식으로 브랜드 경험을 확장',
    },
]
export default function WorkProcess() {
    return (
        <section>
            <h2
                className={classNames(
                    workSans.className,
                    'mb-4 uppercase text-gray60 lg:mb-7.5',
                )}
            >
                Work Process
            </h2>
            <ul className="border-b border-gray94">
                {WORK_PROCESS.map((process, index) => (
                    <li
                        key={index}
                        className="flex flex-col gap-y-3 border-t border-gray94 px-4 py-2 lg:flex-row lg:gap-y-0"
                    >
                        <div className="flex">
                            <span
                                className={classNames(
                                    workSans.className,
                                    'mr-4 lg:w-2.5',
                                )}
                            >
                                {index + 1}
                            </span>
                            <h3
                                className={classNames(
                                    workSans.className,
                                    'mr-6 lg:w-20',
                                )}
                            >
                                {process.englishTitle}
                            </h3>
                            <h3 className="mr-5 lg:mr-17">
                                {process.koreanTitle}
                            </h3>
                        </div>
                        <p className="font-light tracking-tight">
                            {process.content}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
