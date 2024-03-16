import type { ProjectCommonProps } from '@/interfaces'
import Image from 'next/image'
import Image2 from '@/static/img/detail/sun-sun/2.webp'
import Image3 from '@/static/img/detail/sun-sun/3.webp'
import Image4 from '@/static/img/detail/sun-sun/4.webp'
import Image8 from '@/static/img/detail/sun-sun/8.webp'
import Image6 from '@/static/img/detail/sun-sun/6.webp'
import Image7 from '@/static/img/detail/sun-sun/7.webp'
import Image9 from '@/static/img/detail/sun-sun/9.webp'
import Image10 from '@/static/img/detail/sun-sun/10.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import BriefSection from '@/app/list/[id]/components/BriefSection'
import SmallSection from '@/app/list/[id]/components/SmallSection'

export default function BabyDraw(props: ProjectCommonProps) {
    const { data } = props
    return (
        <div className={'mx-auto max-w-[800px] pt-48'}>
            <BriefSection
                data={data}
                introduction={
                    '친환경 생활용품 브랜드 선선한주방의 브랜드 리뉴얼을 함께했습니다. 주방 창문으로 하늘을 바라보았던 기억에서 영감을 받은 따뜻한 자연의 색감, 친숙한 원형의 그래픽, 감각적인 언어와 같은 요소들을 브랜드 전반에 디테일하게 배치시켰습니다. 편안한 브랜드 경험을 통해 열린 마음으로 선선한주방의 문을 두드릴 수 있도록 합니다.'
                }
                roles={
                    '1. 피그마 잼을 활용한 온라인 워크숍 진행 - 내부 임직원의 고민, 아이디어 수집\n' +
                    '2. 브랜디드 이미지 개발을 통한 톤 앤 무드 강화 - 카피라이팅\n' +
                    '3. 버벌 아이덴티티 개발 (스토리, 슬로건, 태그라인)'
                }
            />
            <section
                className={
                    'mt-20 border-t border-black border-opacity-80 pt-10'
                }
            >
                <h3 className={'mb-15 text-xl font-bold'}>프로젝트 더보기</h3>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'브랜드 모티브'}
                        description={
                            '주방 창문으로 바라본 하늘을 브랜드 모티브로 설정하여 자연을 닮은 색채와 일상적이고 편안한 분위기, 자연스러운 무드를 표현했습니다. '
                        }
                    />
                    <div className={'grid gap-y-2.5'}>
                        <Image
                            src={Image2}
                            alt={'sun-sun-1'}
                            width={800}
                            height={350}
                            placeholder={'blur'}
                        />
                        <Image
                            src={Image3}
                            alt={'sun-sun-2'}
                            width={800}
                            height={300}
                            placeholder={'blur'}
                        />
                    </div>
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'톤 앤 무드 강화'}
                        description={
                            'BX디자이너와 함께 선선한주방의 아이덴티티를 표현하는 브랜디드 이미지를 개발했습니다. 언어적 비언어적 요소들을 일관되고 다채롭게 전개하여 브랜드의 톤 앤 무드를 강화했습니다.'
                        }
                    />
                    <div className={'flex flex-col'}>
                        <div className={'mb-2 flex justify-between'}>
                            {' '}
                            <Image
                                src={Image4}
                                alt={'sun-sun-4'}
                                width={395}
                                height={395}
                            />
                            <Image
                                src={Image6}
                                alt={'sun-sun-6'}
                                width={395}
                                height={395}
                            />
                        </div>
                    </div>
                    <Image
                        src={Image7}
                        alt={'sun-sun-7'}
                        width={800}
                        height={470}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'버벌 아이덴티티'}
                        description={
                            '스토리, 슬로건, 태그라인을 포함한 버벌 아이덴티티를 개발했습니다. 웹 페이지, 리플렛 등 다양한 영역에서 브랜드를 소개할 수 있도록 문장의 길이, 가치 포괄성 등을 고려했습니다.'
                        }
                    />
                    <div className="flex flex-col gap-y-2.5">
                        <Image
                            src={Image8}
                            alt={'sun-sun-8'}
                            width={800}
                            height={400}
                            placeholder={'blur'}
                        />
                        <Image
                            src={Image9}
                            alt={'sun-sun-9'}
                            width={800}
                            height={200}
                            placeholder={'blur'}
                        />
                        <Image
                            src={Image10}
                            alt={'sun-sun-10'}
                            width={800}
                            height={400}
                            placeholder={'blur'}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
