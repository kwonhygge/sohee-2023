import type { ProjectCommonProps } from '@/interfaces'
import Image from 'next/image'
import Image1 from '@/static/img/detail/baby-draw/1.webp'
import Image2 from '@/static/img/detail/baby-draw/2.webp'
import Image3 from '@/static/img/detail/baby-draw/3.webp'
import Image4 from '@/static/img/detail/baby-draw/4.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import BriefSection from '@/app/list/[id]/components/BriefSection'
import SmallSection from '@/app/list/[id]/components/SmallSection'

export default function BabyDraw(props: ProjectCommonProps) {
    const { data } = props
    return (
        <div className={'mx-auto max-w-[800px] pt-48'}>
            <BriefSection
                data={data}
                introduction={
                    '골프웨어 셀렉샵 베이비드로우의 브랜드 마케팅을 진행했습니다. 밀도 높은 감성과 여유로운 톤으로 콘텐츠를 전개하며 일관된 브랜드 경험과 새로운 성과를 만들었습니다. 특히 태그라인 “삶의 비거리를 넓히는 골프웨어 셀렉샵”를 개발하여 최대 ROAS 300%를 달성했습니다.'
                }
                roles={
                    '1. 태그라인 “삶의 비거리를 넓히는 골프웨어 셀렉샵” 개발\n' +
                    '2. 온라인 마케팅 리드 및 최대 ROAS 300%, 평균 ROAS 200% 달성\n' +
                    '3. 브랜드 프로모션 기획 및 진행'
                }
            />
            <section
                className={
                    'mt-20 border-t border-black border-opacity-80 pt-10'
                }
            >
                <h3 className={'mb-10 text-xl font-bold'}>프로젝트 더보기</h3>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'태그라인 개발'}
                        description={
                            <span>
                                골프용어{' '}
                                <strong className={'font-semibold'}>
                                    비거리
                                </strong>
                                를 적용해 태그라인 “삶의 비거리를 넓히는
                                골프웨어 셀렉샵”을 개발했습니다. 골프와 일상이
                                즐겁게 융합된 베이비드로우의 건강한
                                라이프스타일을 표현하고 다양한 마케팅 영역에
                                활용했습니다.
                            </span>
                        }
                    />
                    <Image
                        src={Image1}
                        alt={'baby-draw-1'}
                        width={800}
                        height={440}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'콘텐츠 마케팅'}
                        description={
                            '태그라인을 포함한 브랜디드 콘텐츠로 6개월간 광고를 집행했고 최초 ROAS 300%, 평균 ROAS 200%대를 달성했습니다.'
                        }
                    />
                    <div className={'flex justify-between'}>
                        <Image
                            src={Image2}
                            alt={'baby-draw-2'}
                            width={395}
                            height={395}
                        />
                        <Image
                            src={Image3}
                            alt={'baby-draw-3'}
                            width={395}
                            height={395}
                        />
                    </div>
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'브랜드 캠페인'}
                        description={
                            '베이비드로우의 1주년을 기념하는 365만원 프로모션을 포함한 다양한 온라인 캠페인을 기획 및 진행했습니다. 이를 통해 브랜드의 인지도를 상승시키고 신규 고객을 모집했습니다.'
                        }
                    />
                    <Image
                        src={Image4}
                        alt={'baby-draw-4'}
                        width={800}
                        height={900}
                    />
                </div>
            </section>
        </div>
    )
}
