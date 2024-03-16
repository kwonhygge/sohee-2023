const WORK_ACTIVITIES = [
    {
        name: '컴퓨터그래픽스 운용기능사',
        agency: '한국산업인력공단',
        requiredDate: '2018',
    },
    {
        name: '컴퓨터 활용능력 1급',
        agency: '대한상공회의소',
        requiredDate: '2017',
    },
    {
        name: '그래픽기술자격 GTQ 1급',
        agency: '한국생산성본부',
        requiredDate: '2017',
    },
    { name: '정사서 2급', agency: '한국도서관협회', requiredDate: '2016' },
    {
        name: '한국사능력검시험 1급',
        agency: '국사편찬위원회',
        requiredDate: '2016',
    },
]
export default function WorkActivity() {
    return (
        <section
            className={
                'flex flex-col justify-between border-t border-[#282828] pt-10 lg:flex-row'
            }
        >
            <h2 className={'lg:mb:0 mb-4 text-xl font-bold lg:text-2xl'}>
                활동 및 자격증
            </h2>
            <div className={'w-[700px]'}>
                <ul className={'grid w-full gap-y-7.5'}>
                    {WORK_ACTIVITIES.map((activity, index) => (
                        <li
                            key={index}
                            className={
                                'flex w-full items-center justify-between border-b border-[#282828] border-opacity-10 pb-7.5'
                            }
                        >
                            <p className={''}>
                                <strong className={'mr-6 font-bold lg:text-xl'}>
                                    {activity.name}
                                </strong>
                                {activity.agency}
                            </p>
                            <span>{activity.requiredDate}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
