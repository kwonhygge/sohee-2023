import type { ProjectCommonProps } from '@/interfaces'
import CoverImage from '@/static/img/detail/turnable/cover.webp'
import Image from 'next/image'
import Image1 from '@/static/img/detail/turnable/1.webp'
import Image2 from '@/static/img/detail/turnable/2.webp'
import Image3 from '@/static/img/detail/turnable/3.webp'
import Image4 from '@/static/img/detail/turnable/4.webp'
import Image5 from '@/static/img/detail/turnable/5.webp'
import Image6 from '@/static/img/detail/turnable/6.webp'
import Image7 from '@/static/img/detail/turnable/7.webp'
import Image8 from '@/static/img/detail/turnable/8.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import ContentWrapper from '@/app/list/[id]/components/ContentWrapper'
import ContentSection from '@/app/list/[id]/components/ContentSection'

export default function Turnable(props: ProjectCommonProps) {
    console.log(props)
    return (
        <>
            <Image
                src={CoverImage}
                alt={'turnable-cover'}
                priority
                placeholder={'blur'}
            />
            <div className={PROJECT_CLASS_NAMES.PROJECT_DETAIL_WRAPPER}>
                <ContentWrapper
                    descriptionText={
                        'Art, become a Career \n' +
                        '예술, 커리어가 되다\n' +
                        '\n' +
                        '턴에이블은 해외 진출을 꿈꾸는 차세대 아티스트를 위한 글로벌 교육 서비스입니다. 세계 무대에서 활동 중인 아티스트들이 튜터가 되어 전문적인 테크닉과 현실적인 구직 정보를 제공하고 있습니다. 치열한 경쟁 시장 속에서 턴에이블이 독보적인 커리어 플랫폼으로 자리 잡을 수 있도록 브랜드 정체성을 확립하고 아이덴티티를 디자인했습니다. 희망차고 긍정적인 메시지와 울림있게 퍼져나가는 그래픽으로 턴에이블만의 스테이지를 완성합니다.'
                    }
                    descriptionImage={
                        <div className="grid gap-y-5">
                            <Image
                                src={Image1}
                                alt={'turnable-1'}
                                width={900}
                                height={495}
                                placeholder={'blur'}
                            />
                            <div className="flex flex-col justify-between lg:flex-row">
                                <Image
                                    src={Image2}
                                    alt={'turnable-2'}
                                    width={440}
                                    height={440}
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={Image3}
                                    alt={'turnable-3'}
                                    width={440}
                                    height={440}
                                    placeholder={'blur'}
                                />
                            </div>
                        </div>
                    }
                >
                    <ContentSection
                        koreanTitle={'브랜드 분석'}
                        englishTitle={'Analysis'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                데스크 리서치, 수업 참관 등 다각적 방법으로
                                턴에이블에 접근했습니다. 이 과정에서 브랜드의
                                잠재력과 가치를 발견하고{' '}
                                <strong className="font-semibold">
                                    예술인을 위한 커리어 가이드(Career Guide)
                                </strong>
                                로 브랜드 정체성을 체계화했습니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image4}
                                alt={'turnable-4'}
                                width={900}
                                height={1178}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'컨셉 개발'}
                        englishTitle={'Concept'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                <strong className="font-semibold">
                                    ‘플레이 드림 리스트(Play Dream List)’
                                </strong>
                                는 아티스트를 꿈꾸는 사람들의 희망과 낭만을
                                자극하는 컨셉입니다. LP를 재생하는 턴테이블을
                                모티브로, {'<음악의 재생>'}과 {'<꿈의 실현>'}을
                                한 장면에 담아냈습니다. 꿈과 음악을 결합한
                                컨셉을 통해 주요 타겟인 가수, 뮤지컬 배우들의
                                공감을 얻을 수 있도록 했습니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image5}
                                alt={'turnable-5'}
                                width={900}
                                height={549}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'네이밍'}
                        englishTitle={'naming'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                기존 브랜드명이었던 ‘브로드웨이 아시아’는 대상이
                                아시아에 국한되어 보이고 길이가 다소 길다는
                                아쉬움이 있었습니다. 새로운 브랜드 네임
                                ‘턴에이블’을 통해 이를 극복하고{' '}
                                <strong className="font-semibold">
                                    커리어를 향한 가능성과 희망
                                </strong>
                                을 담았습니다. 또한 BX디자이너와 협업을 통해
                                로고를 개발했습니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image6}
                                alt={'turnable-6'}
                                width={900}
                                height={420}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'비주얼 시스템 기획'}
                        englishTitle={'Visual System'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                컨셉을 기반으로 비주얼 시스템을 기획했습니다.
                                심볼{' '}
                                <strong className="font-semibold">
                                    ‘울림’
                                </strong>
                                은 다양한 꿈이 플레이되며 퍼져나가는 모습을
                                표현합니다. 클래식한 그래픽과 블랙 앤 오렌지로
                                대비되는 컬러를 통해 예술인들의 열정을 세련된
                                방식으로 담아내고자 했습니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image7}
                                alt={'turnable-7'}
                                width={900}
                                height={540}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'태그라인 개발'}
                        englishTitle={'Tagline'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                턴에이블을 고객에게 명확하게 각인시키기 위해
                                태그라인{' '}
                                <strong className="font-semibold">
                                    “예술, 커리어가 되다(Art, become a Career)”
                                </strong>
                                를 개발했습니다. 캠페인, 이벤트 등 마케팅에 함께
                                사용하여 브랜드를 알리고 적극적인 액션을
                                유도합니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image8}
                                alt={'turnable-8'}
                                width={900}
                                height={525}
                                placeholder={'blur'}
                            />
                        }
                    />
                </ContentWrapper>
            </div>
        </>
    )
}
