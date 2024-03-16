import BriefSection from '@/app/list/[id]/components/BriefSection'
import { ProjectCommonProps } from '@/interfaces'
import SmallSection from '@/app/list/[id]/components/SmallSection'
import Image from 'next/image'

import Image1 from '@/static/img/detail/meader/1.webp'
import Image2 from '@/static/img/detail/meader/2.webp'
import Image3 from '@/static/img/detail/meader/3.webp'
import Image4 from '@/static/img/detail/meader/4.webp'
import Image5 from '@/static/img/detail/meader/5.webp'
import Image6 from '@/static/img/detail/meader/6.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'

export default function Meader(props: ProjectCommonProps) {
    const { data } = props

    if (!data) return <></>

    return (
        <div className={'mx-auto max-w-[800px] pt-48'}>
            <BriefSection
                data={data}
                introduction={
                    '미더는 다양한 비영리단체와 사회적기업, 스타트업들의 이야기를 발굴하고 전문적인 마케팅 서비스를 제공하는 광고 에이전시입니다. 미더의 브랜딩팀 팀리더로서 내부 인터벌 브랜딩을 맡아 진행했습니다. 워크숍, 채용설명회 등 기업 행사를 주최하며 구성원에게 기업 가치를 내재화하고 잠재고객을 확보했습니다.'
                }
                roles={
                    '1. 각 분기별 임직원 대상 워크숍 기획 및 진행 \n' +
                    '2. 사내 인재상 정의 및 내부 평가 지표 활용\n' +
                    '3. 기업 철학 및 아이덴티티 통합 \n' +
                    '4. 임직원의 니즈에 따라 기업 컬러 리뉴얼 - 로고, 명함 등에 적용\n' +
                    '5. 채용설명회, 마케팅 강연 등 기업 행사 주최'
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
                        title={'기업 인재상'}
                        description={
                            '미더가 좋은 문화를 바탕으로 성장할 수 있도록 내부 워크숍을 진행했습니다. 이를 바탕으로 기업의 인재상을 만들고 평가 지표로 활용했습니다. 스스로 정의한 내용을 통해 자신을 점검하며 회사와 함께 성장을 도모할 수 있게 했습니다.'
                        }
                    />
                    <Image
                        src={Image1}
                        alt={'meader-1'}
                        width={800}
                        height={450}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'기업 철학'}
                        description={
                            '전체 타운홀 미팅을 통해 기업 철학을 정의했습니다. 함께 만든 가치를 임직원 스스로 경험하며 기업 가치를 내재화할 수 있도록 했습니다. 또한 외부 고객에게 기업을 알리는데 활용했습니다.'
                        }
                    />
                    <Image
                        src={Image2}
                        alt={'meader-2'}
                        width={800}
                        height={450}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'컬러 리뉴얼'}
                        description={
                            '미더 직원들이 가장 필요로 하는 기업 컬러 리뉴얼을 진행했습니다. 새로운 컬러를 로고, 명함 등에 적용하여 브랜딩의 결과물을 직접 보고 만지며 의미 있는 프로젝트로 기억될 수 있도록 했습니다.'
                        }
                    />
                    <div className={'grid gap-y-2.5'}>
                        <Image
                            src={Image3}
                            alt={'meader-3'}
                            width={800}
                            height={200}
                            placeholder={'blur'}
                        />
                        <Image
                            src={Image4}
                            alt={'meader-4'}
                            width={800}
                            height={450}
                            placeholder={'blur'}
                        />
                    </div>
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'기업 캠페인'}
                        description={
                            '채용 설명회, 마케팅 강연 등을 통해 미더의 이야기를 외부에 전했습니다. 기업의 철학과 스토리를 담은 캠페인을 통해 기업 인식을 높이고 잠재 고객을 확보했습니다.'
                        }
                    />
                    <div className={'grid gap-y-2.5'}>
                        <Image
                            src={Image5}
                            alt={'meader-5'}
                            width={800}
                            height={450}
                            placeholder={'blur'}
                        />
                        <Image
                            src={Image6}
                            alt={'meader-6'}
                            width={800}
                            height={450}
                            placeholder={'blur'}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
