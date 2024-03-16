import { WorkData } from '@/interfaces'
import { PROJECT_NAMES } from '@/constants'

export const WORK_LIST: WorkData[] = [
    {
        id: '1',
        title: '워커스디데이\n신규 브랜드 론칭 프로젝트',
        thumbnailImg: '/static/img/main-covers/workers-dday-main.webp',
        thumbnailDescription:
            '기업 임직원을 위한 선물 구독 서비스 ‘워커스디데이’의 신규 런칭 프로젝트입니다. \n' +
            '비즈니스 모델의 초기 단계부터 브랜딩, 패키지 등 전 과정을 함께했습니다.',
        name: PROJECT_NAMES.WORKERS_DDAY,
        date: '2022-23',
        scale: '4인 프로젝트',
        contribution: {
            value: 70,
            color: '#5DBAF9',
        },
    },
    {
        id: '2',
        title: '현대 H온드림 스타트업 그라운드\n' + '2022 마케팅 캠페인 ',
        thumbnailImg: '/static/img/main-covers/h-on-dream-main.webp',
        thumbnailDescription:
            '현대자동차와 정몽구 재단이 지원하는 ‘2022 H온드림’의 PM을 맡았습니다. \n' +
            '소재별 크리에이티브 전략을 통해 목표 이상의 성과를 달성했습니다.',
        name: PROJECT_NAMES.H_ON_DREAM,
        date: '2022',
        scale: '20인 이상 프로젝트',
        contribution: {
            value: 50,
            color: '#3FAF49',
        },
    },
    {
        id: '3',
        title: '과천시 청년공간 \n' + '비행지구 브랜딩 프로젝트',
        thumbnailImg: '/static/img/main-covers/flying-earth-main.webp',
        thumbnailDescription:
            '경기도 과천시의 첫 청년공간 비행지구를 브랜딩했습니다.\n' +
            '청년 워크숍, 지역 공모전 등을 통해 청년들의 목소리를 반영했습니다. ',
        name: PROJECT_NAMES.FLYING_EARTH,
        date: '2021',
        scale: '5인 프로젝트',
        contribution: {
            value: 80,
            color: '#824259',
        },
    },
    {
        id: '4',
        title: '광고 에이전시\n' + '미더 인터벌 브랜딩',
        thumbnailImg: '/static/img/main-covers/meader-main.webp',
        thumbnailDescription:
            '미더의 브랜딩팀 팀리더로서 내부 인터벌 브랜딩을 맡아 진행했습니다.\n' +
            '기업 행사를 주최하며 구성원에게 기업 가치를 내재화하고 잠재고객을 확보했습니다.',
        name: PROJECT_NAMES.MEADER,
        date: '2023',
        scale: '4인 프로젝트',
        contribution: {
            value: 70,
            color: '#568AF2',
        },
    },
    {
        id: '5',
        title: '골프웨어 셀렉샵\n' + '베이비드로우 브랜드 마케팅',
        thumbnailImg: '/static/img/main-covers/baby-draw-main.webp',
        thumbnailDescription:
            '골프웨어 셀렉샵 베이비드로우의 마케팅을 진행했습니다.\n' +
            '태그라인 ‘삶의 비거리를 넓히는 골프웨어 셀렉샵’으로 ROAS 300%를 달성했습니다.',
        name: PROJECT_NAMES.BABY_DRAW,
        date: '2022',
        scale: '4인 프로젝트',
        contribution: {
            value: 70,
            color: '#4379CC',
        },
    },
    {
        id: '6',
        title: '선선한주방 \n' + '브랜드 리뉴얼 프로젝트',
        thumbnailImg: '/static/img/main-covers/sun-sun-main.webp',
        thumbnailDescription:
            '친환경 생활용품 브랜드 선선한주방의 브랜드 리뉴얼을 함께했습니다. \n' +
            '편안하고 따뜻한 메시지로 브랜드의 톤 앤 무드를 강화했습니다.',
        name: PROJECT_NAMES.SUN_SUN,
        date: '2022-23',
        scale: '4인 프로젝트',
        contribution: {
            value: 60,
            color: '#719EE2',
        },
    },
    {
        id: '7',
        title: '의료기기 스타트업 \n' + '다인메디컬그룹 웹사이트 리뉴얼',
        thumbnailImg: '/static/img/main-covers/dyne-main.webp',
        thumbnailDescription:
            '의료기기 스타트업 다인메디컬그룹의 웹사이트 리뉴얼 디렉터를 맡았습니다.\n' +
            '또한 소비자가 공감할 수 있는 내용을 바탕으로 UX라이팅을 진행했습니다.',
        name: PROJECT_NAMES.DYNE,
        date: '2023',
        scale: '8인 프로젝트',
        contribution: {
            value: 60,
            color: '#1E213A',
        },
    },
    {
        id: '8',
        title: '서울애니메이션센터 \n' + '만화의집 온오프라인 마케팅',
        thumbnailImg: '/static/img/main-covers/animation-center-main.webp',
        thumbnailDescription:
            '복합문화공간 만화의집의 초창기 오픈 멤버로 공간 운영과 마케팅을 담당했습니다.\n' +
            '4만 여권의 장서를 큐레이션하고 캐릭터 콜라보 전시를 기획했습니다.',
        name: PROJECT_NAMES.ANIMATION_CENTER,
        date: '2018-19',
        scale: '3인 프로젝트',
        contribution: {
            value: 60,
            color: '#4F3270',
        },
    },
]
