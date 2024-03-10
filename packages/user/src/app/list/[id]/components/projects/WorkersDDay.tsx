import type { ProjectCommonProps } from '@/interfaces'
import TitleSection from '@/app/list/[id]/components/TitleSection'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import ContentSection from '@/app/list/[id]/components/ContentSection'
import WorkersDdayCoverImage from '@/static/img/detail/workers-dday/cover.webp'
import Image from 'next/image'
import Image1 from '@/static/img/detail/workers-dday/1.webp'
import Image2 from '@/static/img/detail/workers-dday/2.webp'
import Image3 from '@/static/img/detail/workers-dday/3.webp'
import Image4 from '@/static/img/detail/workers-dday/4.webp'
import Image5 from '@/static/img/detail/workers-dday/5.webp'
import Image6 from '@/static/img/detail/workers-dday/6.webp'
import Image7 from '@/static/img/detail/workers-dday/7.webp'
import Image8 from '@/static/img/detail/workers-dday/8.webp'
import Image9 from '@/static/img/detail/workers-dday/9.webp'
import Image10 from '@/static/img/detail/workers-dday/10.webp'
import ContentWrapper from '@/app/list/[id]/components/ContentWrapper'

export default function WorkersDDay(props: ProjectCommonProps) {
    const { data } = props
    return (
        <>
            <Image
                src={WorkersDdayCoverImage}
                alt={'workers-dday-cover'}
                priority
                placeholder={'blur'}
            />
            <div className={PROJECT_CLASS_NAMES.PROJECT_DETAIL_WRAPPER}>
                <TitleSection data={data} />
                <ContentWrapper
                    descriptionText={
                        '일삶 속 특별한 선물\n' +
                        '\n' +
                        '워커스디데이는 의미있는 사회적 제품으로 이루어진 기프트 박스를 통해 기업 임직원의 기념일을 챙기는 서비스입니다. 제품에 담긴 선한 가치가 기분 좋은 특별함으로 전해질 수 있도록 소비자 경험의 여러 측면을 고려하여 브랜딩을 진행했습니다. 브랜드 네임 ‘워커스디데이’는 직원의 기념일을 소중하게 대하고 기억하는 마음이 깃들어 있습니다. 사람과 사람 사이 감정적 상호작용에 집중하는 전략을 통해 단순한 선물을 넘어 추억을 전하는 브랜드가 되고자 합니다.'
                    }
                    descriptionImage={
                        <Image
                            src={Image1}
                            alt={'workers-dday-1'}
                            width={900}
                            height={600}
                            placeholder={'blur'}
                        />
                    }
                >
                    <ContentSection
                        koreanTitle={'타겟 설정 & 가치 정의'}
                        englishTitle={'Target and Values'}
                        content={
                            '워커스디데이는 선물을 주고 받는 사람이 존재하는 관계의 서비스입니다. 기업은 직원의 기념일을 진심으로 축하하고 직원은 이에 화답하며 돈독한 관계를 형성할 수 있습니다. 때문에 타겟을 복지 담당자와 같은 직업군으로 특정하지 않고 선물을 주는 기버(Giver)로 표현하고, 이를 분석하여 얻은 키워드로 워커스디데이의 가치를 정의했습니다.'
                        }
                        image={
                            <Image
                                src={Image2}
                                alt={'workers-dday-2'}
                                width={900}
                                height={450}
                                placeholder={'blur'}
                            />
                        }
                    />

                    <ContentSection
                        koreanTitle={'경험 전략 구축'}
                        englishTitle={'BX Strategy'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                워커스디데이의 기프트박스를{' '}
                                <strong className="font-semibold">
                                    ‘오늘의 주인공을 위한 선물상자’
                                </strong>
                                로 정의하여 받는 사람에게 기대와 설렘을 안겨줄
                                수 있도록 했습니다. 또한 즐겁고 친근한 분위기
                                속에서 진심어린 축하를 전할 수 있도록 경험의
                                여러 측면을 고려했습니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image3}
                                alt={'workers-dday-3'}
                                width={900}
                                height={450}
                                placeholder={'blur'}
                            />
                        }
                    />

                    <ContentSection
                        koreanTitle={'브랜드 네이밍'}
                        englishTitle={'Brand name'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                개인의 기념일을 셀 때 사용되는 디데이를 재해석한{' '}
                                <strong className="font-semibold">
                                    ‘워커스디데이’
                                </strong>
                                는 회사가 직원의 기념일을 기억하고 함께
                                축하하면서 일상을 넘어 일터에서도 특별한
                                디데이를 만들어가길 바라는 마음을 담아
                                탄생했습니다. 필기체로 큼직하게 써 내려간 로고로
                                순수한 축하의 감정을 전달합니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image4}
                                alt={'workers-dday-4'}
                                width={900}
                                height={600}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'태그라인 개발'}
                        englishTitle={'Tageline'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                워커스디데이의 주인공인 직원들은 일과 삶을
                                함께하며 살아가는 사람들입니다. 그 특별함을 살려
                                태그라인{' '}
                                <strong className="font-semibold">
                                    ‘일삶 속 특별한 선물’
                                </strong>
                                을 개발했습니다. 네이밍을 포함한 여러 콘텐츠에
                                적용하여 워커스디데이가 신규 고객에게 쉽게
                                각인될 수 있도록 합니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image5}
                                alt={'workers-dday-5'}
                                width={900}
                                height={600}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'패키지 디자인'}
                        englishTitle={'Package'}
                        content={
                            '아이덴티티를 기반으로 BX 디자이너와 협업을 통해 브랜드 패키지를 제작했습니다. 다정한 축하의 인사와 다채로운 컬러감을 통해 기쁘고 즐거운 선물이 될 수 있도록 했습니다.'
                        }
                        image={
                            <Image
                                src={Image6}
                                alt={'workers-dday-6'}
                                width={900}
                                height={600}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'브로슈어 제작'}
                        englishTitle={'Brochure'}
                        content={
                            '브랜드 및 기프트 박스 구성품 소개를 위한 브로슈어를 제작했습니다. 생일 엽서와 같이 앞뒤 표지를 가로로 제작했고 브랜드 스토리가 자연스럽게 전해질 수 있도록 편안한 레이아웃을 적용했습니다. 뒷면 구성품 소개 아래에는 ‘특별함’이라는 카테고리를 추가하여 사회적 제품이 지닌 가치를 강조했습니다.'
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image7}
                                    alt={'workers-dday-7'}
                                    width={900}
                                    height={450}
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={Image8}
                                    alt={'workers-dday-8'}
                                    width={900}
                                    height={450}
                                    placeholder={'blur'}
                                />
                            </div>
                        }
                    />
                    <ContentSection
                        koreanTitle={'브랜드 필름 촬영'}
                        englishTitle={'Brand Film'}
                        content={
                            '브랜드 촬영을 통해 기념일을 축하하는 워커스디데이의 모습을 필름으로 옮겨왔습니다. 밝은 이미지의 모델과 감각적인 사무 공간으로 메인 타겟인 20~50인 규모의 스타트업을 공략했습니다. 촬영본은 홈페이지 제작시 사용되었습니다.'
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image9}
                                    alt={'workers-dday-9'}
                                    width={900}
                                    height={600}
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={Image10}
                                    alt={'workers-dday-10'}
                                    width={900}
                                    height={600}
                                    placeholder={'blur'}
                                />
                            </div>
                        }
                    />
                </ContentWrapper>
            </div>
        </>
    )
}
