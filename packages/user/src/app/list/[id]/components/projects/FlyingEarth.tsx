import type { ProjectCommonProps } from '@/interfaces'
import TitleSection from '@/app/list/[id]/components/TitleSection'
import Image from 'next/image'
import CoverImage from '@/static/img/detail/flying-earth/cover.png'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import ContentWrapper from '@/app/list/[id]/components/ContentWrapper'
import Image1 from '@/static/img/detail/flying-earth/1.png'
import Image2 from '@/static/img/detail/flying-earth/2.png'
import Image3 from '@/static/img/detail/flying-earth/3.png'
import Image4 from '@/static/img/detail/flying-earth/4.png'
import Image5 from '@/static/img/detail/flying-earth/5.png'
import Image6 from '@/static/img/detail/flying-earth/6.png'
import ContentSection from '@/app/list/[id]/components/ContentSection'

export default function FlyingEarth(props: ProjectCommonProps) {
    const { data } = props
    return (
        <>
            <Image
                src={CoverImage}
                alt={'flying-earth-cover'}
                priority
                placeholder={'blur'}
            />
            <div className={PROJECT_CLASS_NAMES.PROJECT_DETAIL_WRAPPER}>
                <TitleSection data={data} />
                <ContentWrapper
                    descriptionText={
                        '낭만을 비행하는 청년들의 푸른 공간\n' +
                        '\n' +
                        '경기도 과천시의 첫 청년공간 비행지구를 브랜딩했습니다. 프로젝트의 주요 목표는 지역 청년들의 이야기를 공간 속에 녹여내는 것이었습니다. 워크숍, 공모전 등 참여형 프로세스를 통해 청년들의 목소리를 가까이에서 듣고 브랜딩에 반영했습니다. 공간의 컨셉 ‘푸른 낭만’은 녹음이 우거진 과천시의 지역적 색채와 청춘의 맑은 이미지를 담아 만들어졌습니다. 바람의 결이 느껴지는 로고 타입과 별 그래픽을 활용한 심볼로 푸른 지구별을 자유롭게 여행하는 청년들의 낭만적 감성을 전달합니다.'
                    }
                    descriptionImage={
                        <div>
                            <Image
                                src={Image1}
                                alt={'flying-earth-1'}
                                width={900}
                                height={532}
                                placeholder={'blur'}
                            />
                            <span className="text-xs">
                                *인테리어 - 블랭크건축사무소
                            </span>
                        </div>
                    }
                >
                    <ContentSection
                        koreanTitle={'청년공간 브랜딩 워크숍'}
                        englishTitle={'Youth Space Workshop'}
                        content={
                            '청년들이 지속적으로 편하게 방문할 수 있는 공간을 만들기 위해 청년들의 실제적인 선호와 요구에 대한 이해가 필요했습니다. 과천시 청년들을 대상으로 20명 규모의 공간기획단을 모집해 워크숍을 진행하며 공간에 담길 아이덴티티를 함께 고민했습니다. 그 속에서 나온 다양한 영감들을 이정표 삼아 브랜딩에 반영했습니다.'
                        }
                        image={
                            <Image
                                src={Image2}
                                alt={'flying-earth-2'}
                                width={900}
                                height={450}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'컨셉 도출'}
                        englishTitle={'Conception'}
                        content={
                            '과천과 청년, 청년공간에 관한 주제로 설문조사를 실시하여 지역과 세대의 맥락을 고려한 컨셉을 개발하고자 했습니다. ‘푸른 낭만’은 초록빛 나무와 산책로가 많은 과천의 지역적 특성과 청량하고 푸르른 청춘의 이미지가 어우러진 컨셉입니다. 동시에 꿈, 버킷리스트, 기회와 같은 청년들의 다양한 소망을 낭만이라고 칭하여 존중받길 바라는 청년들의 마음을 함께 담아냈습니다.'
                        }
                        image={
                            <Image
                                src={Image3}
                                alt={'flying-earth-3'}
                                width={900}
                                height={450}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'슬로건 개발'}
                        englishTitle={'Slogan'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                슬로건 개발 단계에서 지역 공모전을 진행하여 지역
                                사회의 참여와 관심을 이끌어냈습니다. 지역
                                주민들의 다양한 아이디어를 수집하고 가공하여
                                슬로건{' '}
                                <strong className="font-semibold">
                                    “낭만을 비행하는 청년들의 푸른 공간”
                                </strong>
                                을 개발했습니다. 컨셉과 네이밍을 자연스럽게
                                풀어낸 슬로건을 통해 공간의 아이덴티티를
                                간결하게 설명하고 비행지구의 맑은 보이스톤을
                                설정했습니다.
                            </p>
                        }
                    />
                    <ContentSection
                        koreanTitle={'그래픽 시스템 설계'}
                        englishTitle={'Graphic System'}
                        content={
                            '컨셉에 따라 일관된 비주얼을 개발할 수 있도록 그래픽 시스템 설계에 참여했습니다. 도약, 비행, 낭만의 세 가지로 그래픽모티브를 정의하고 시각적으로 잘 전달될 수 있도록 BX디자이너와 협업을 진행했습니다. 잔잔하고 푸른 컬러와 하늘을 향해 날아오르는 액션, 반짝이는 별 그래픽으로 비행지구만의 시각적 경험을 완성했습니다. '
                        }
                        image={
                            <Image
                                src={Image4}
                                alt={'flying-earth-4'}
                                width={900}
                                height={500}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'굿즈 제작'}
                        englishTitle={'Goods'}
                        content={
                            '비행지구의 산뜻한 출발을 위해 머그컵, 스티커, 리플렛 등의 공간 굿즈를 기획하고 제작했습니다. 브랜드 아이덴티티를 적극적으로 활용하여 일관되면서도 다채로운 브랜드 경험을 만들었습니다. 해당 굿즈들은 공간의 오픈일에 선착순으로 제공되었습니다.'
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image5}
                                    alt={'flying-earth-5'}
                                    width={900}
                                    height={500}
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={Image6}
                                    alt={'flying-earth-6'}
                                    width={900}
                                    height={500}
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
