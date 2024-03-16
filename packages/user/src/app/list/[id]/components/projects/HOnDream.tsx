import BriefSection from '@/app/list/[id]/components/BriefSection'
import { ProjectCommonProps } from '@/interfaces'
import SmallSection from '@/app/list/[id]/components/SmallSection'
import Image from 'next/image'

import Image1 from '@/static/img/detail/h-on-dream/1.webp'
import Image2 from '@/static/img/detail/h-on-dream/2.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'

export default function HOnDream(props: ProjectCommonProps) {
    const { data } = props

    if (!data) return <></>

    return (
        <div className={'mx-auto max-w-[800px] pt-48'}>
            <BriefSection
                data={data}
                introduction={
                    '현대자동차와 정몽구 재단이 지원하는 2022 H온드림의 연간 마케팅 캠페인의 PM을 맡았습니다. 소재별 크리에이티브 전략을 통해 목표 이상의 성과를 달성했습니다.'
                }
                roles={
                    '1. 20인 이상 프로젝트의 PM으로 내부 인원 10인 리드\n' +
                    '2. 소재별 크리에이티브 전략을 통한 목표 달성\n  - 스타트업 2,743팀 지원 (목표 대비 150%)\n  - 공식 홈페이지 누적 방문자수 51,147명 (전년 동기간 대비 234% 증가)\n' +
                    '3. 온드 미디어 관리를 통한 콘텐츠 발행 및 이벤트 안내 (IG/FB)- 10개월간 총 92개의 오리지널 콘텐츠 발행\n' +
                    '4. 온오프믹스, 이벤터스 등 플랫폼 메인 배너 광고 집행 및 각각의 효율 비교'
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
                        title={'광고\n크리에이티브'}
                        description={
                            '프로그램 규모, 혜택, 지원금, 핵심 성과 등의 소재별 크리에이티브를 기획하고 광고를 집행했습니다. 평균 CTR 4.64%로 스타트업 2,743팀의 지원을 이끌어냈습니다.'
                        }
                    />
                    <Image
                        src={Image1}
                        alt={'h-on-dream-1'}
                        width={800}
                        height={800}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'온드 미디어\n' + '(IG/FB)'}
                        description={
                            '자사 인스타그램과 페이스북을 관리하며 주기적으로 콘텐츠를 발행하고 소식을 업데이트했습니다. 10개월 간 총 92개의 오리지널 콘텐츠를 발행했습니다.'
                        }
                    />
                    <Image
                        src={Image2}
                        alt={'h-on-dream-2'}
                        width={800}
                        height={520}
                    />
                </div>
            </section>
        </div>
    )
}
