import type { ProjectCommonProps } from '@/interfaces'
import Image from 'next/image'
import Image2 from '@/static/img/detail/dyne/2.webp'
import Image3 from '@/static/img/detail/dyne/3.webp'
import Image4 from '@/static/img/detail/dyne/4.webp'
import Image5 from '@/static/img/detail/dyne/5.webp'
import Image6 from '@/static/img/detail/dyne/6.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import BriefSection from '@/app/list/[id]/components/BriefSection'
import SmallSection from '@/app/list/[id]/components/SmallSection'

export default function Dyne(props: ProjectCommonProps) {
    const { data } = props
    return (
        <div className={'mx-auto max-w-[800px] pt-32 lg:pt-48'}>
            <BriefSection
                data={data}
                introduction={
                    '의료기기 스타트업 다인메디컬그룹의 웹사이트 리뉴얼 디렉터를 맡았습니다. 소비자가 공감할 수 있는 내용을 바탕으로 UX라이팅을 진행하는 한편, 브랜드 감성에 맞는 영상과 사진을 기획했습니다.'
                }
                roles={
                    '1. UX라이팅을 통한 브랜드 경험 구축\n' +
                    '2. 기업 철학과 스토리를 개발 및 웹사이트에 적용\n' +
                    '3. 브랜드 소개를 위한 사진 및 영상 제작 디렉팅'
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
                        title={'제품 철학'}
                        description={
                            '제품을 이해하기 위해 직접 현장에 방문하여 사내의 프로덕트 오너, 연구원 등 각 분야 담당자분들의 이야기를 들었습니다. 이를 바탕으로 제품의 철학을 정의하고 웹사이트에 녹여냈습니다.'
                        }
                    />
                    <Image
                        src={Image2}
                        alt={'dyne-1'}
                        width={800}
                        height={400}
                        placeholder={'blur'}
                    />
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'스토리 & 슬로건'}
                        description={
                            '기업 철학을 기반으로 브랜드의 스토리와 슬로건을 개발했습니다. 슬로건의 경우, 의학용어 Forwarding을 활용하여 메인 타겟인 의사가 공감할 수 있는 가치를 담을 수 있도록 했습니다.'
                        }
                    />
                    <div className={'grid gap-y-2.5'}>
                        <Image
                            src={Image3}
                            alt={'dyne-2'}
                            width={800}
                            height={450}
                            placeholder={'blur'}
                        />
                        <Image
                            src={Image4}
                            alt={'dyne-3'}
                            width={800}
                            height={300}
                            placeholder={'blur'}
                        />
                    </div>
                </div>
                <div className={PROJECT_CLASS_NAMES.SMALL_SECTION_WRAPPER}>
                    <SmallSection
                        title={'사진 및 영상'}
                        description={
                            '브랜드 소개를 위한 사진 및 영상 기획에 참여하여, 일관되고 신뢰감 있는 브랜드 경험을 확보했습니다.'
                        }
                    />
                    <div className={'grid gap-y-2.5'}>
                        <Image
                            src={Image5}
                            alt={'dyne-4'}
                            width={800}
                            height={400}
                            placeholder={'blur'}
                        />
                        <Image
                            src={Image6}
                            alt={'dyne-5'}
                            width={800}
                            height={430}
                            placeholder={'blur'}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
