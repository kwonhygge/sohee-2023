import type { ProjectCommonProps } from '@/interfaces'
import TitleSection from '@/app/list/[id]/components/TitleSection'
import CoverImage from '@/static/img/detail/animation-center/cover.png'
import Image from 'next/image'
import Image1 from '@/static/img/detail/animation-center/1.png'
import Image2 from '@/static/img/detail/animation-center/2.png'
import Image3 from '@/static/img/detail/animation-center/3.png'
import Image4 from '@/static/img/detail/animation-center/4.png'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import ContentWrapper from '@/app/list/[id]/components/ContentWrapper'
import ContentSection from '@/app/list/[id]/components/ContentSection'

export default function AnimationCenter(props: ProjectCommonProps) {
    const { data } = props
    return (
        <>
            <Image src={CoverImage} alt={'animation-center-cover'} priority />
            <div className={PROJECT_CLASS_NAMES.PROJECT_DETAIL_WRAPPER}>
                <TitleSection data={data} />
                <ContentWrapper
                    descriptionText={
                        '서울애니메이션센터에 위치한 만화의집은 만화를 사랑하는 모든 사람들을 위한 복합문화공간입니다. 복잡한 도심 속 ‘쉼표 공간’이 되기 위해 추억을 되새기는 90년대 만화부터 최신 애니메이션까지 4만여 권의 자료를 무료로 열람할 수 있도록 제공하고 있습니다. 2018년 명동으로 자리를 옮긴 만화의집이 재오픈하기 전, 초창기 멤버로 참여하여 공간 기획부터 초기 운영까지를 함께했습니다. 다양한 도서 큐레이션과 어린이를 위한 전시 등을 통해 즐거움이 머무는 공간이 될 수 있도록 노력했습니다.'
                    }
                >
                    <ContentSection
                        koreanTitle={'공간 기획 및 운영'}
                        englishTitle={'Space Operation'}
                        content={
                            '주 타겟인 가족 단위 방문객, 직장인을 고려해 공간을 기획하고 운영했습니다. 큐레이션 서가와 빈백, 간접조명 등을 활용해 북카페와 같은 느낌을 연출했습니다. 여유로운 휴일 같은 공간 속에서 즐겁게 쉬어갈 수 있는 공간이 될 수 있도록 공간 운영에 힘썼습니다.'
                        }
                        image={
                            <Image
                                src={Image1}
                                alt={'animation-center-1'}
                                width={900}
                                height={550}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'온라인 채널 관리'}
                        englishTitle={'Site and Instargram'}
                        content={
                            '서울애니메이션센터 만화의집 공식사이트와 인스타그램 채널을 맡아 관리했습니다. 애니/웹툰에 관심을 가지고 있는 20대를 타겟으로 일상 생활에서 접하기 쉬운 이슈를 소재로 콘텐츠를 제작하여 유기적인 인터렉션을 이끌어내었습니다. 그 결과, 광고 집행 없이 3000명의 팔로워를 생성했습니다. 또한 애니메이션센터 소식 및 이벤트를 주기적으로 업로드하며 소통했습니다.'
                        }
                    />
                    <ContentSection
                        koreanTitle={'영화 큐레이션'}
                        englishTitle={'Curation'}
                        content={
                            '어린이를 대상으로 월별로 주제를 선정하여 영화를 상영했습니다. 다양하고 풍성한 콘텐츠를 통해 만화를 감상하기 아직 어린 어린이들도 공간에서 재미를 느낄 수 있도록 했습니다.'
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image2}
                                    alt={'animation-center-2'}
                                    width={900}
                                    height={416}
                                />
                                <Image
                                    src={Image3}
                                    alt={'animation-center-3'}
                                    width={900}
                                    height={416}
                                />
                            </div>
                        }
                    />
                    <ContentSection
                        koreanTitle={'전시 기획 및 홍보'}
                        englishTitle={'Exhibit'}
                        content={
                            '캐릭터에 관심이 많은 어린이, 일러스트를 좋아하는 20대를 대상으로 한 체험 전시 기획에 참여했습니다. 일러스트레이터 애슝님과의 콜라보로 진행되었고 SNS와 자사 사이트를 통해 홍보를 진행했습니다. 그 결과, 일일 방문객 수 최초 3500명을 달성했습니다.'
                        }
                        image={
                            <div>
                                <Image
                                    src={Image4}
                                    alt={'animation-center-4'}
                                    width={900}
                                    height={566}
                                />
                                <span className="text-xs">
                                    *일러스트 - AE SHOONG
                                </span>
                            </div>
                        }
                    />
                </ContentWrapper>
            </div>
        </>
    )
}
