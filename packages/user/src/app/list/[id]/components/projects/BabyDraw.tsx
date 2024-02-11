import type { ProjectCommonProps } from '@/interfaces'
import TitleSection from '@/app/list/[id]/components/TitleSection'
import CoverImage from '@/static/img/detail/baby-draw/cover.png'
import Image from 'next/image'
import Image1 from '@/static/img/detail/baby-draw/1.png'
import Image2 from '@/static/img/detail/baby-draw/2.png'
import Image3 from '@/static/img/detail/baby-draw/3.png'
import Image4 from '@/static/img/detail/baby-draw/4.png'
import Image5 from '@/static/img/detail/baby-draw/5.png'
import Image6 from '@/static/img/detail/baby-draw/6.png'
import Image7 from '@/static/img/detail/baby-draw/7.png'
import Image8 from '@/static/img/detail/baby-draw/8.png'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import ContentWrapper from '@/app/list/[id]/components/ContentWrapper'
import ContentSection from '@/app/list/[id]/components/ContentSection'

export default function BabyDraw(props: ProjectCommonProps) {
    const { data } = props
    return (
        <>
            <Image src={CoverImage} alt={'baby-draw-cover'} priority />
            <div className={PROJECT_CLASS_NAMES.PROJECT_DETAIL_WRAPPER}>
                <TitleSection data={data} />
                <ContentWrapper
                    descriptionText={
                        '삶의 비거리를 넓히는 골프웨어 셀렉샵\n' +
                        '\n' +
                        '유니크한 스타일, 합리적인 가격대의 골프웨어를 제안하는 베이비드로우의 브랜딩입니다. 모두가 쉽고 재밌게 골프를 접하기 바라는 운영진의 이야기를 브랜드에 경쾌하게 녹여냈습니다. 브랜드 에센스 ‘Blending Golf and Life’는 골프와 일상이 즐겁게 융합된 베이비드로우의 건강한 라이프스타일을 보여줍니다. 밀도 높은 감성과 여유로운 톤으로 아이덴티티를 전개하며 균형잡힌 브랜드를 완성했습니다. 또한 이를 적용한 마케팅 캠페인에서 효과를 입증했습니다.'
                    }
                    descriptionImage={
                        <div className="flex flex-col gap-y-5">
                            <Image
                                src={Image1}
                                alt={'baby-draw-1'}
                                width={900}
                                height={600}
                            />
                            <Image
                                src={Image2}
                                alt={'baby-draw-2'}
                                width={900}
                                height={600}
                            />
                        </div>
                    }
                >
                    <ContentSection
                        koreanTitle={'미션 & 비전 정의'}
                        englishTitle={'Mission and vision'}
                        content={
                            '베이비드로우가 지닌 골프에 대한 애정과 건강한 가치관을 바탕으로 브랜드의 미션과 비전을 정의했습니다. 명확한 메시지를 통해 고객이 브랜드가 지닌 가치를 이해하고 공감할 수 있도록 합니다. '
                        }
                        image={
                            <Image
                                src={Image3}
                                alt={'baby-draw-3'}
                                width={900}
                                height={450}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'브랜드 에센스 도출'}
                        englishTitle={'Brand Essence'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                베이비드로우가 추구하는 라이프스타일에서 영감을
                                받아 브랜드 에센스{' '}
                                <strong className="font-semibold">
                                    ‘Blending Golf and Life’
                                </strong>
                                를 도출했습니다. 골프와 일상을 자연스럽게
                                연결하며 베이비드로우의 철학과 감성을 부드러운
                                방식으로 전달합니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image4}
                                alt={'baby-draw-4'}
                                width={900}
                                height={450}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'그래픽 모티브 개발'}
                        englishTitle={'Graphic Motif'}
                        content={
                            '신나고 경쾌한 그래픽으로 베이비드로우가 추구하는 캐주얼한 골프 문화를 표현했습니다. 골프공에서 시작해 스윙, 그라운드로 이어지며 자유롭게 삶을 확장해가는 모습을 시각적으로 연결합니다.'
                        }
                        image={
                            <Image
                                src={Image5}
                                alt={'baby-draw-5'}
                                width={900}
                                height={238}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'슬로건 개발'}
                        englishTitle={'Brand Slgan'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                브랜드 메시지를 직관적으로 표현할 수 있도록
                                슬로건{' '}
                                <strong className="font-semibold">
                                    “Drag your style, Draw your life”
                                </strong>
                                를 개발했습니다. 나에게 맞는 스타일을 끌어와
                                취향을 찾고(Drag)골프를 넘어 삶 자체의 궤적을
                                그리는(Draw) 베이비드로우의 특징을 함축하고
                                있습니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image6}
                                alt={'baby-draw-6'}
                                width={900}
                                height={620}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'태그라인 개발 & 마케팅'}
                        englishTitle={'Tagline and marketing'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                골프용어 {'<비거리>'}를 적용해 태그라인{' '}
                                <strong className="font-semibold">
                                    “삶의 비거리를 넓히는 골프웨어 셀렉샵”
                                </strong>
                                을 개발했습니다. 이후 태그라인을 포함한 브랜디드
                                콘텐츠로 6개월간 광고를 집행했고 최초 Roas 300%,
                                평균 Roas 200% 대를 달성했습니다.
                            </p>
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image7}
                                    alt={'baby-draw-7'}
                                    width={900}
                                    height={500}
                                />
                                <Image
                                    src={Image8}
                                    alt={'baby-draw-8'}
                                    width={900}
                                    height={500}
                                />
                            </div>
                        }
                    />
                </ContentWrapper>
            </div>
        </>
    )
}
