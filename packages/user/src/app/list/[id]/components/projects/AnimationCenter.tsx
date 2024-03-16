import type { ProjectCommonProps } from '@/interfaces'
import Image from 'next/image'
import Image1 from '@/static/img/detail/animation-center/1.webp'
import Image2 from '@/static/img/detail/animation-center/2.webp'
import Image3 from '@/static/img/detail/animation-center/4.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import BriefSection from '@/app/list/[id]/components/BriefSection'
import SmallSection from '@/app/list/[id]/components/SmallSection'

export default function AnimationCenter(props: ProjectCommonProps) {
    const { data } = props
    return (
        <div className={'mx-auto max-w-[800px] pt-48'}>
            <BriefSection
                data={data}
                introduction={
                    '서울애니메이션센터에 위치한 만화의집은 만화를 사랑하는 모든 사람들을 위한 복합문화공간입니다. 2018년 명동으로 자리를 옮긴 만화의집이 재오픈하기 전, 초창기 멤버로 참여하여 공간 기획과 운영, 마케팅까지를 함께했습니다. 다양한 도서 큐레이션과 전시 등을 통해 즐거움이 머무는 공간이 될 수 있도록 노력했습니다.'
                }
                roles={
                    '1. 4만여 권의 장서를 주제별로 큐레이션\n' +
                    '2. 일러스트레이터 애슝작가와의 캐릭터 콜라보 전시를 진행 (최초 방문객 3,500명 달성)\n' +
                    '3. 자사 공식 채널 및 인스타그램 관리 (소식 및 이벤트 주기적 업로드)'
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
                        title={'공간 기획/운영'}
                        description={
                            '주 타겟인 가족 단위 방문객, 직장인을 고려해 공간을 기획하고 운영했습니다. 여유로운 휴일 같은 공간 속에서 즐겁게 쉬어갈 수 있는 공간이 될 수 있도록 공간 운영에 힘썼습니다. 4만여 권의 장서를 주제별로 큐레이션하고 특색있는 공간을 만들었습니다.'
                        }
                    />
                    <Image
                        src={Image1}
                        alt={'animation-center-1'}
                        width={800}
                        height={500}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'영화 큐레이션'}
                        description={
                            '어린이를 대상으로 월별로 주제를 선정하여 영화를 상영했습니다. 다양하고 풍성한 콘텐츠를 통해 만화를 감상하기 아직 어린 어린이들도 공간에서 재미를 느낄 수 있도록 했습니다.'
                        }
                    />
                    <Image
                        src={Image2}
                        alt={'animation-center-3'}
                        width={800}
                        height={350}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'콜라보 전시'}
                        description={
                            '캐릭터에 관심이 많은 어린이, 일러스트를 좋아하는 20대를 대상으로 한 체험 전시 기획에 참여했습니다. 일러스트레이터 애슝 작가님과의 콜라보로 진행되었고 SNS와 자사 사이트를 통해 홍보를 진행했습니다. 그 결과, 일일 방문객 수 최초 3,500명을 달성했습니다.'
                        }
                    />
                    <div>
                        <Image
                            src={Image3}
                            alt={'animation-center-4'}
                            width={800}
                            height={500}
                            placeholder={'blur'}
                        />
                        <span className="float-right text-xs">
                            *일러스트 - AE SHOONG
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}
