import type { ProjectCommonProps } from '@/interfaces'
import TitleSection from '@/app/list/[id]/components/TitleSection'
import CoverImage from '@/static/img/detail/sun-sun/cover.png'
import Image from 'next/image'
import Image1 from '@/static/img/detail/sun-sun/1.png'
import Image2 from '@/static/img/detail/sun-sun/2.png'
import Image3 from '@/static/img/detail/sun-sun/3.png'
import Image4 from '@/static/img/detail/sun-sun/4.png'
import Image5 from '@/static/img/detail/sun-sun/5.png'
import Image6 from '@/static/img/detail/sun-sun/6.png'
import Image7 from '@/static/img/detail/sun-sun/7.png'
import Image8 from '@/static/img/detail/sun-sun/8.png'
import Image9 from '@/static/img/detail/sun-sun/9.png'
import Image10 from '@/static/img/detail/sun-sun/10.png'
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
                        '자연스러운 주방, 사랑스러운 변화\n' +
                        '\n' +
                        '선선한주방은 사람과 지구를 모두 생각하는 친환경 생활용품 브랜드입니다. ‘주방 속 선순환으로부터 건강한 변화가 시작된다’는 신념이 브랜드 곳곳에 자연스럽게 묻어날 수 있도록 브랜드 리뉴얼을 진행했습니다. 주방 창문으로 하늘을 바라보았던 기억에서 영감을 받은 따뜻한 자연의 색감, 친숙한 원형의 그래픽, 감각적인 언어와 같은 요소들을 브랜드 전반에 디테일하게 배치했습니다. 편안한 브랜드 경험을 통해 열린 마음으로 선선한주방의 문을 두드릴 수 있도록 합니다.'
                    }
                    descriptionImage={
                        <Image
                            src={Image1}
                            alt={'baby-draw-1'}
                            width={900}
                            height={564}
                        />
                    }
                >
                    <ContentSection
                        koreanTitle={'클라이언트 인터뷰'}
                        englishTitle={'Interview'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                클라이언트와의 인터뷰를 진행하여 주방에 대한
                                여러 관점의 이야기를 나누었습니다. 그 과정에서
                                주방이 단순히 조리 공간을 넘어 다양한 맛과 향이
                                있는 감각의 공간이자, 자연의 재료가 자연으로
                                되돌아가는 순환의 공간이라는 사실을 발견했고
                                ‘우리집에서 자연과 가장 가까운 곳’이라는 키
                                메시지를 발견했습니다. 해당 메시지를 브랜드
                                전반에 적용해 자연의 감각을 보고 느끼며 그
                                안에서{' '}
                                <strong className="font-semibold">
                                    자연의 이로움을 당연하게 깨달아가는 브랜드가
                                    되는 것
                                </strong>
                                을 방향으로 잡았습니다.
                            </p>
                        }
                    />
                    <ContentSection
                        koreanTitle={'브랜드 모티브 설정'}
                        englishTitle={'Brand Motif'}
                        content={
                            '오후의 햇살, 흙 묻은 채소의 질감과 같이 주방 속 자연의 감각을 불러일으키기 위해 향수가 되는 모티브가 필요했습니다. 주방 창문으로 바라본 하늘을 모티브로 설정하여 자연을 닮은 색채와 일상적이고 편안한 분위기, 자연스러운 무드를 표현했습니다. 구체적 요소들을 일관되게 배치하여 뚜렷한 브랜드 경험을 만듭니다.'
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image2}
                                    alt={'baby-draw-2'}
                                    width={900}
                                    height={450}
                                />
                                <Image
                                    src={Image3}
                                    alt={'baby-draw-3'}
                                    width={900}
                                    height={450}
                                />
                            </div>
                        }
                    />
                    <ContentSection
                        koreanTitle={'로고 리뉴얼'}
                        englishTitle={'Logo'}
                        content={
                            '기존 로고는 선선한주방의 ‘선’을 착할 선(善)으로 표기한 한자 로고였습니다. 한자가 주는 무게감을 덜어내기 위해 한글 로고로 변경을 결정했습니다. 클라이언트와 여러 차례 미팅을 통해 레퍼런스를 수집하고 BX디자이너의 디자인 프로세스를 디렉션했습니다. 곡선과 직선을 조화롭게 사용하여 가볍고 부드러운 이미지를 전달합니다. '
                        }
                        image={
                            <Image
                                src={Image4}
                                alt={'baby-draw-4'}
                                width={900}
                                height={600}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'브랜드 톤 앤 무드 강화'}
                        englishTitle={'Brand Tone and mood'}
                        content={
                            '앞선 단계들을 기반으로 선선한주방의 고유한 색을 표현하는 시뮬레이션 이미지를 디자인했습니다. 언어적 비언어적 요소들을 일관되고 다채롭게 전개하여 브랜드의 톤 앤 무드를 강화했습니다.'
                        }
                        image={
                            <div className="grid gap-y-5">
                                <div className="relative h-[700px]">
                                    <div className="absolute left-0 top-0 h-fit">
                                        <Image
                                            src={Image5}
                                            alt={'baby-draw-5'}
                                            width={440}
                                            height={440}
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 h-fit">
                                        <Image
                                            src={Image6}
                                            alt={'baby-draw-6'}
                                            width={440}
                                            height={440}
                                        />
                                    </div>
                                </div>
                                <Image
                                    src={Image7}
                                    alt={'baby-draw-7'}
                                    width={900}
                                    height={600}
                                />
                            </div>
                        }
                    />
                    <ContentSection
                        koreanTitle={'버벌 아이덴티티 개발'}
                        englishTitle={'Verbal Identity'}
                        content={
                            '스토리, 슬로건, 태그라인을 포함한 버벌 아이덴티티를 개발하여 선선한주방의 이야기를 완성했습니다. 웹 페이지, 리플렛 등 다양한 영역에서 브랜드를 소개할 수 있도록 문장의 길이, 가치 포괄성 등을 고려했습니다.'
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image8}
                                    alt={'baby-draw-8'}
                                    width={900}
                                    height={500}
                                />
                                <Image
                                    src={Image9}
                                    alt={'baby-draw-9'}
                                    width={900}
                                    height={332}
                                />
                                <Image
                                    src={Image10}
                                    alt={'baby-draw-10'}
                                    width={900}
                                    height={480}
                                />
                            </div>
                        }
                    />
                </ContentWrapper>
            </div>
        </>
    )
}
