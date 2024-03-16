import type { ProjectCommonProps } from '@/interfaces'
import Image from 'next/image'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import Image1 from '@/static/img/detail/flying-earth/1.webp'
import Image3 from '@/static/img/detail/flying-earth/3.webp'
import Image4 from '@/static/img/detail/flying-earth/4.webp'
import Image5 from '@/static/img/detail/flying-earth/5.webp'
import Image6 from '@/static/img/detail/flying-earth/6.webp'
import BriefSection from '@/app/list/[id]/components/BriefSection'
import SmallSection from '@/app/list/[id]/components/SmallSection'

export default function FlyingEarth(props: ProjectCommonProps) {
    const { data } = props
    return (
        <div className={'mx-auto max-w-[800px] pt-32 lg:pt-48'}>
            <BriefSection
                data={data}
                introduction={
                    '경기도 과천시의 첫 청년공간 비행지구를 브랜딩했습니다. 프로젝트의 주요 목표는 지역 청년들의 이야기를 공간 속에 녹여내는 것이었습니다. 워크숍, 공모전 등 참여형 프로세스를 통해 청년들의 목소리를 가까이에서 듣고 브랜딩에 반영했습니다. 공간의 컨셉 ‘푸른 낭만’을 통해 녹음이 우거진 과천시의 지역적 색채와 청춘의 맑은 이미지를 담아냈습니다.'
                }
                roles={
                    '1. 제안 PT를 통한 과천시 첫 청년공간 프로젝트 수주\n' +
                    '2. 청년 워크숍, 지역 슬로건 공모전 기획 및 진행\n' +
                    '3. 로컬의 가치를 반영한 컨셉 개발 및 그래픽 시스템 설계\n' +
                    '4. 브랜드 주요 메시지 개발 - 슬로건, 스토리\n' +
                    '5. 브랜드 굿즈 기획 및 제작 - 공간 오픈 일에 맞춰 선착순 배포'
                }
                imageCaption={'*인테리어 블랭크건축사무소'}
            />
            <section
                className={
                    'mt-20 border-t border-black border-opacity-80 pt-10'
                }
            >
                <h3 className={'mb-15 text-xl font-bold'}>프로젝트 더보기</h3>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'브랜드 컨셉'}
                        description={
                            '과천시 청년을 대상으로 설문조사를 실시하여 지역과 세대의 맥락을 고려한 컨셉을 개발했습니다. ‘푸른 낭만’은 녹음이 우거진 과천의 특성과 청량한 청춘의 이미지가 어우러진 컨셉입니다. 또한 청년들의 다양한 소망을 낭만이라고 칭함으로써 존중받길 바라는 청년들의 소망을 함께 담아냈습니다.'
                        }
                    />
                    <Image
                        src={Image3}
                        alt={'flying-earth-3'}
                        width={800}
                        height={400}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'그래픽 시스템'}
                        description={
                            '컨셉에 따라 일관된 비주얼을 개발할 수 있도록 그래픽 시스템 설계에 참여했습니다. 도약, 비행, 낭만의 세 가지로 그래픽을 정의하여 디자인 방향성을 명확하게 했습니다. 바람의 결이 느껴지는 로고 타입과 별 그래픽을 활용한 심볼로 푸른 지구별을 자유롭게 여행하는 청년들의 낭만을 전달합니다.'
                        }
                    />
                    <Image
                        src={Image4}
                        alt={'flying-earth-4'}
                        width={800}
                        height={400}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'슬로건 & 스토리'}
                        description={
                            '스토리 개발 단계에서 지역 공모전을 진행하여 지역 사회의 참여와 관심을 이끌어냈습니다. 다양한 아이디어를 수집하고 가공하여 슬로건과 스토리를 개발했습니다. 이를 통해 공간의 아이덴티티를 간결하게 설명하고 비행지구의 맑은 보이스톤을 설정했습니다.'
                        }
                    />
                    <Image
                        src={Image1}
                        alt={'flying-earth-1'}
                        width={800}
                        height={430}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'공간 굿즈'}
                        description={
                            '비행지구의 산뜻한 출발을 위해 머그컵, 스티커, 리플렛 등의 공간 굿즈를 기획하고 제작했습니다. 브랜드 아이덴티티를 적극적으로 활용하여 일관되면서도 다채로운 브랜드 경험을 만들었습니다. 해당 굿즈들은 공간 오픈 일정에 맞춰 선착순으로 제공되었습니다.'
                        }
                    />
                    <div className="flex flex-col gap-y-2.5">
                        <Image
                            src={Image5}
                            alt={'flying-earth-5'}
                            width={800}
                            height={440}
                        />
                        <Image
                            src={Image6}
                            alt={'flying-earth-6'}
                            width={800}
                            height={440}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
