import { SmallSectionProps } from '@/interfaces'

export default function SmallSection(props: SmallSectionProps) {
    const { title, description } = props
    return (
        <div className="mb-10 flex justify-between">
            <h4
                className={
                    'min-w-[88px] whitespace-pre-line text-lg font-bold leading-[1.8]'
                }
            >
                {title}
            </h4>
            <p
                className={
                    'max-w-[645px] whitespace-pre-line text-lg leading-[1.8]'
                }
            >
                {description}
            </p>
        </div>
    )
}
