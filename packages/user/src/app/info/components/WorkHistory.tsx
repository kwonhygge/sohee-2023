import classNames from 'classnames'
import { manrope } from '@/styles/font'
import MeaderLogo from '@/static/img/info/meader-logo.png'
import AnimationCenterLogo from '@/static/img/info/animation-center-logo.png'
import Image from 'next/image'

const LIST_ITEM_CLASS_NAME =
    'flex flex-col lg:flex-row lg:justify-between lg:items-start '
const LIST_ITEM_CONTENT_CONTAINER_CLASS_NAME = 'mt-5 lg:w-[430px] lg:mt-0'
const LIST_ITEM_CONTENT_CONTAINER_HEADER_CLASS_NAME =
    'flex justify-between items-center mb-2'

export default function WorkHistory() {
    return (
        <section>
            <h2
                className={classNames(
                    manrope.className,
                    'mb-4 uppercase text-gray60 lg:mb-7.5',
                )}
            >
                Work History
            </h2>
            <div className={'border-t border-gray94 pt-5'}>
                <ul className="grid gap-y-18">
                    <li className={LIST_ITEM_CLASS_NAME}>
                        <Image
                            src={MeaderLogo}
                            alt={'meader-logo'}
                            placeholder={'blur'}
                            width={144}
                            height={80}
                        />
                        <div className={LIST_ITEM_CONTENT_CONTAINER_CLASS_NAME}>
                            <header
                                className={
                                    LIST_ITEM_CONTENT_CONTAINER_HEADER_CLASS_NAME
                                }
                            >
                                <h3 className="font-bold">
                                    미더 브랜딩팀 팀장
                                </h3>
                                <span className="text-sm text-gray60">
                                    21.03 ~ 23. 03
                                </span>
                            </header>
                            <p className="whitespace-pre-line text-sm tracking-tight">
                                {'브랜딩 및 마케팅 서비스 제공\n' +
                                    '브랜드 전략 수립 및 실행 / 내외부 파트너 협업 리드 / 팀 관리 및 시너지 구축\n' +
                                    '\n' +
                                    '[주요 프로젝트]\n과천시 청년공간 비행지구 브랜딩, 현대 H온드림 2021 & 2023 마케팅, 서울디자인재단 UDP 캠페인, 골프웨어 쇼핑몰 베이비드로우 마케팅 등'}
                            </p>
                        </div>
                    </li>
                    <li className={LIST_ITEM_CLASS_NAME}>
                        <Image
                            src={AnimationCenterLogo}
                            alt={'animation-center-logo'}
                            placeholder={'blur'}
                            width={144}
                            height={80}
                        />
                        <div className={LIST_ITEM_CONTENT_CONTAINER_CLASS_NAME}>
                            <header
                                className={
                                    LIST_ITEM_CONTENT_CONTAINER_HEADER_CLASS_NAME
                                }
                            >
                                <h3 className="font-bold">
                                    서울산업진흥원 애니타운팀 파견사원
                                </h3>
                                <span className="text-sm text-gray60">
                                    18.11 ~ 19. 12
                                </span>
                            </header>
                            <p className="whitespace-pre-line text-sm tracking-tight">
                                {'복합문화공간 만화의집 공간 운영 및 홍보\n' +
                                    '온오프라인 마케팅 / 콘텐츠 기획 및 제작 / 공간 관리 및 고객 응대'}
                            </p>
                        </div>
                    </li>
                    <li className={LIST_ITEM_CLASS_NAME}>
                        <p className="font-bold">Freelancer</p>
                        <div className={LIST_ITEM_CONTENT_CONTAINER_CLASS_NAME}>
                            <header
                                className={
                                    LIST_ITEM_CONTENT_CONTAINER_HEADER_CLASS_NAME
                                }
                            >
                                <h3 className="font-bold">
                                    수원도시재단 브랜드 멘토링
                                </h3>
                                <span className="text-sm text-gray60">
                                    22.11
                                </span>
                            </header>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
