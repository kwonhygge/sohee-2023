const WORK_SKILL = {
    skills: ['브랜드 마케팅', '카피라이팅', '디지털 마케팅'],
    tools: [
        'Figma',
        'Notion',
        'MySQL',
        'Microsoft Excel',
        'Microsoft Powerpoint',
        'Google Analytics',
        'Adobe Photoshop',
        'Adobe Indesign',
        'Adobe Illustrator',
    ],
}
export default function WorkSkill() {
    return (
        <section className={'flex justify-between border-t border-black pt-10'}>
            <h2 className={'text-2xl font-bold'}>주요 역량</h2>
            <div className={'max-w-[700px] '}>
                <ul className={'mb-2.5 flex flex-wrap gap-x-1'}>
                    {WORK_SKILL.skills.map((skill, index) => (
                        <li
                            key={index}
                            className={
                                'rounded-3xl bg-black px-5 py-2 text-base text-white'
                            }
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
                <ul className={'flex flex-wrap gap-x-1 gap-y-2.5'}>
                    {WORK_SKILL.tools.map((tool, index) => (
                        <li
                            key={index}
                            className={
                                'rounded-3xl border border-black border-opacity-10 bg-white px-5 py-2 text-base text-black'
                            }
                        >
                            {tool}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
