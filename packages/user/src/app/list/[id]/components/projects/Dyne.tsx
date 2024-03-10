import type { ProjectCommonProps } from '@/interfaces'
import TitleSection from '@/app/list/[id]/components/TitleSection'
import CoverImage from '@/static/img/detail/dyne/cover.webp'
import Image from 'next/image'
import Image1 from '@/static/img/detail/dyne/1.webp'
import Image2 from '@/static/img/detail/dyne/2.webp'
import Image3 from '@/static/img/detail/dyne/3.webp'
import Image4 from '@/static/img/detail/dyne/4.webp'
import Image5 from '@/static/img/detail/dyne/5.webp'
import Image6 from '@/static/img/detail/dyne/6.webp'
import Image7 from '@/static/img/detail/dyne/7.webp'
import Image8 from '@/static/img/detail/dyne/8.webp'
import Image9 from '@/static/img/detail/dyne/9.webp'
import Image10 from '@/static/img/detail/dyne/10.webp'
import Image11 from '@/static/img/detail/dyne/11.webp'
import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import ContentWrapper from '@/app/list/[id]/components/ContentWrapper'
import ContentSection from '@/app/list/[id]/components/ContentSection'

export default function Dyne(props: ProjectCommonProps) {
    const { data } = props
    return (
        <>
            <Image
                src={CoverImage}
                alt={'dyne-cover'}
                priority
                placeholder={'blur'}
            />
            <div className={PROJECT_CLASS_NAMES.PROJECT_DETAIL_WRAPPER}>
                <TitleSection data={data} />
                <ContentWrapper
                    descriptionText={
                        '다인메디컬그룹은 국내 최초로 일회용 연성 내시경 개발에 성공하며 한국형 의료기기 세계화에 앞장서고 있습니다. 믿고 사용할 수 있는 의료기기를 향한 기업의 여정이 소비자에게 세련된 방식으로 전해질 수 있도록 브랜딩을 진행했습니다. 직접 현장에 방문하여 제품을 만드는 분들의 이야기를 듣고, 이를 원초로 진정성 있는 기업 철학을 완성했습니다. 의료기기 제조 기업으로서의 사명감을 정제된 문체와 견고한 스토리로 풀어내어 소비자가 기업을 이해하고 신뢰감을 형성할 수 있도록 합니다.'
                    }
                    descriptionImage={
                        <Image
                            src={Image1}
                            alt={'dyne-1'}
                            width={900}
                            height={450}
                            placeholder={'blur'}
                        />
                    }
                >
                    <ContentSection
                        koreanTitle={'제품 탐구'}
                        englishTitle={'Product Exploration'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                제품이 만들어지는 과정을 이해하기 위해 직접
                                현장에 방문하여 사내의 프로덕트 오너, 연구원,
                                기획자 등 각 분야 담당자 분들의 이야기를
                                들었습니다.{' '}
                                <strong className="font-semibold">
                                    생명에 대한 사명감을 바탕으로 논리적으로
                                    생산되며, 이것이 곧 다인의 경쟁력이 된다
                                </strong>
                                는 키 메시지를 발견했고 이를 기업 철학과
                                스토리에 풀어내는 것을 목표로 했습니다.
                            </p>
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image2}
                                    alt={'dyne-2'}
                                    width={900}
                                    height={450}
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={Image3}
                                    alt={'dyne-3'}
                                    width={900}
                                    height={450}
                                    placeholder={'blur'}
                                />
                            </div>
                        }
                    />
                    <ContentSection
                        koreanTitle={'미션 & 비전 정의'}
                        englishTitle={'Mission and vision'}
                        content={
                            '다인메디컬그룹이 지닌 신념을 미션과 비전으로 정의했습니다. 의료기기 제조기업의 책임감을 느낄 수 있는 문장을 통해 주요 소비자인 의사와 환자가 믿음을 가지고 제품을 사용할 수 있도록 합니다.'
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image4}
                                    alt={'dyne-4'}
                                    width={900}
                                    height={450}
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={Image5}
                                    alt={'dyne-5'}
                                    width={900}
                                    height={450}
                                    placeholder={'blur'}
                                />
                            </div>
                        }
                    />
                    <ContentSection
                        koreanTitle={'코어 가치 정의'}
                        englishTitle={'Core Value'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                <strong className="font-semibold">
                                    ‘의사의 입장을 고려하며 그 과정에서 더 많은
                                    환자를 돌보는데 기여한다’
                                </strong>
                                는 다인메디컬그룹의 약속을 Reliability와
                                Availability로 정의했습니다. 또한 이를 일정한
                                각도를 가지고 나아가는 그래픽으로 연결하여
                                세련된 브랜드 이미지를 구축했습니다.
                            </p>
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image6}
                                    alt={'dyne-6'}
                                    width={900}
                                    height={300}
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={Image7}
                                    alt={'dyne-7'}
                                    width={900}
                                    height={450}
                                    placeholder={'blur'}
                                />
                            </div>
                        }
                    />
                    <ContentSection
                        koreanTitle={'슬로건 개발'}
                        englishTitle={'Slogan'}
                        content={
                            <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>
                                슬로건{' '}
                                <strong className="font-semibold">
                                    “Forward with Standards(기준을 통해
                                    나아가다)”
                                </strong>
                                는 생명과 관계된 업을 하는 의료기기
                                제조기업으로서, 원칙을 지키며 성장해 가야한다는
                                기업의 신념을 표현합니다. 의학용어 Forwarding을
                                적용하여 메인 타겟인 의사가 공감할 수 있는
                                가치를 담을 수 있도록 했습니다.
                            </p>
                        }
                        image={
                            <Image
                                src={Image8}
                                alt={'dyne-8'}
                                width={900}
                                height={450}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'스토리 개발'}
                        englishTitle={'Story'}
                        content={
                            '기업이 지닌 철학을 기반으로 소비자가 신뢰감을 확보할 수 있는 스토리를 개발했습니다. 다인메디컬그룹이 지향하는 가치를 올바르게 전달할 수 있도록 보이스 톤, 전개방식, 단어 선택 등 전반을 고려하여 개발했습니다.'
                        }
                        image={
                            <Image
                                src={Image9}
                                alt={'dyne-9'}
                                width={900}
                                height={660}
                                placeholder={'blur'}
                            />
                        }
                    />
                    <ContentSection
                        koreanTitle={'홈페이지 & 영상 리뉴얼'}
                        englishTitle={'Website and video'}
                        content={
                            '위에서 개발한 아이덴티티를 적용하여 기업 홈페이지와 소개 영상을 리뉴얼 했습니다. 영상, 웹 페이지 팀과 협업을 통해 일관되고 탄탄한 브랜드 경험을 설계할 수 있도록 했습니다.'
                        }
                        image={
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    src={Image10}
                                    alt={'dyne-10'}
                                    width={900}
                                    height={600}
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={Image11}
                                    alt={'dyne-11'}
                                    width={900}
                                    height={600}
                                    placeholder={'blur'}
                                />
                            </div>
                        }
                    />
                </ContentWrapper>
            </div>
        </>
    )
}
