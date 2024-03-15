const WORK_EXPERIENCE = [
    {
        company: '미더',
        position: '팀장 · 브랜딩팀',
        period: '2021. 03 ~ 2023. 03',
        work:
            '· 브랜딩 및 마케팅 서비스 제공\n' +
            '· 내외부 파트너 협업 리드\n' +
            '· 팀 운영 및 매출 관리',
    },
    {
        company: '수원도시재단',
        position: '강사 · 프리랜서',
        period: '2022.11',
        work: "· 수원도시재단 '사회적경제창업지원 사업' 참여\n· 스타트업 대상 마케팅 및 브랜딩 강연",
    },
    {
        company: '서울산업진흥원',
        position: '사원 · 애니타운팀 (파견직)',
        period: '2018. 11 ~ 2019. 12',
        work: '· 복합문화공간 만화의집 운영 및 홍보',
    },
]
export default function WorkExperience() {
    return (
        <section className={'flex justify-between border-t border-black pt-10'}>
            <h2 className={'text-2xl font-bold'}>업무 경험</h2>
            <ul className="flex flex-col gap-y-7.5 ">
                {WORK_EXPERIENCE.map((experience, index) => (
                    <li
                        key={index}
                        className="grid w-[720px] gap-y-7.5 border-b border-black border-opacity-10 pb-7.5 last:border-b-0 last:pb-0"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className={'text-xl'}>
                                <strong className={'mr-4 font-bold'}>
                                    {experience.company}
                                </strong>
                                <span>{experience.position}</span>
                            </h3>
                            <span className="text-lg">{experience.period}</span>
                        </div>
                        <p className="whitespace-pre-line leading-[1.8]">
                            {experience.work}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
