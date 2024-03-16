import BriefSection from '@/app/list/[id]/components/BriefSection'
import { ProjectCommonProps } from '@/interfaces'
import SmallSection from '@/app/list/[id]/components/SmallSection'
import Image from 'next/image'

import Image1 from '@/static/img/detail/workers-dday/1.webp'
import Image2 from '@/static/img/detail/workers-dday/2.webp'
import Image3 from '@/static/img/detail/workers-dday/3.webp'
import Image5 from '@/static/img/detail/workers-dday/5.webp'
import Image6 from '@/static/img/detail/workers-dday/6.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'

export default function WorkersDDay(props: ProjectCommonProps) {
    const { data } = props

    if (!data) return <></>

    return (
        <div className={'mx-auto max-w-[800px] pt-32 lg:pt-48'}>
            <BriefSection
                data={data}
                introduction={
                    '임직원을 위한 선물 구독 서비스 ‘워커스디데이’의 신규 런칭 프로젝트입니다. 비즈니스 모델의 초기 단계부터 브랜딩, 패키지 등 전 과정을 함께했습니다. 의미있는 사회적 제품으로 이루어진 기프트 박스를 통해 기분 좋은 특별함을 전하는 서비스가 되고자 했습니다. '
                }
                roles={
                    '1. 신규 브랜드 론칭에 필요한 시장 및 트렌드 분석\n' +
                    '2. 서비스 단가, 제품 구성, 배송 방식 등 비즈니스 모델 구체화\n' +
                    '3. 브랜드 전략 구축 및 버벌 아이덴티티 개발 - 네이밍, 태그라인\n' +
                    '4. 브랜드 패키지 기획 및 제작 (박스, 엽서, 브로슈어)\n' +
                    '5. 전체 프로젝트 리드 및 톤 앤 매너 설계'
                }
            />
            <section
                className={
                    'mt-20 border-t border-[#282828] border-opacity-80 pt-10'
                }
            >
                <h3 className={'mb-15 text-xl font-bold'}>프로젝트 더보기</h3>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'브랜드 전략'}
                        description={
                            <span>
                                워커스디데이가 선물을 주고 받는 사람이 존재하는
                                관계의 서비스라는 점에 주목하여 이들의 심리를
                                적극적으로 분석하고 가치를 도출했습니다. 이를
                                바탕으로 기프트 박스를{' '}
                                <strong className="font-semibold">
                                    ‘오늘의 주인공을 위한 선물상자’
                                </strong>
                                로 정의하여 받는 사람에게 기대와 설렘을 안겨줄
                                수 있도록 했습니다.
                            </span>
                        }
                    />
                    <div className={'grid gap-y-2.5'}>
                        <Image
                            src={Image1}
                            alt={'workers-dday-1'}
                            width={800}
                            height={400}
                            placeholder={'blur'}
                        />
                        <Image
                            src={Image2}
                            alt={'workers-dday-2'}
                            width={800}
                            height={400}
                            placeholder={'blur'}
                        />
                    </div>
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'네이밍'}
                        description={
                            <span>
                                개인의 기념일을 셀 때 사용되는 디데이를
                                재해석하여 네이밍{' '}
                                <strong className="font-semibold">
                                    ‘워커스디데이’
                                </strong>
                                를 개발했습니다. 회사가 직원의 기념일을 기억하고
                                함께 축하하면서 일상을 넘어 일터에서도 특별한
                                디데이를 만들어가길 바라는 마음을 담아냈습니다.
                            </span>
                        }
                    />
                    <Image
                        src={Image3}
                        alt={'workers-dday-3'}
                        width={800}
                        height={500}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    {' '}
                    <SmallSection
                        title={'패키지'}
                        description={
                            '아이덴티티를 기반으로 BX 디자이너와 함께 브로슈어를 포함한 브랜드 패키지를 제작했습니다. 다정한 축하의 인사와 다채로운 컬러감을 통해 기쁘고 즐거운 선물이 될 수 있도록 했습니다.'
                        }
                    />
                    <div className={'grid gap-y-2.5'}>
                        <Image
                            src={Image5}
                            alt={'workers-dday-5'}
                            width={800}
                            height={500}
                        />
                        <Image
                            src={Image6}
                            alt={'workers-dday-6'}
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
