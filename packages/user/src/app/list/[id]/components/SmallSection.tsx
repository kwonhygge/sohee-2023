import { SmallSectionProps } from '@/interfaces'

export default function SmallSection(props: SmallSectionProps) {
    const { title, description } = props
    return (
        <div className="mb-10 flex flex-col justify-between lg:flex-row">
            <h4
                className={
                    'min-w-[88px] whitespace-pre-line font-bold leading-[1.8] lg:text-lg'
                }
            >
                {title}
            </h4>
            <p
                className={
                    'max-w-[645px] whitespace-pre-line leading-[1.8] lg:text-lg'
                }
            >
                {description}
            </p>
        </div>
    )
}
