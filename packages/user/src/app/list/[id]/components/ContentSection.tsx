import { PROJECT_CLASS_NAMES } from '@/app/list/[id]/styles/project'
import type { ContentSectionProps } from '@/interfaces'
import classNames from 'classnames'
import { workSans } from '@/styles/font'

export default function ContentSection(props: ContentSectionProps) {
    const { koreanTitle, englishTitle, content, image } = props

    return (
        <section className="text-neo-black">
            <h3 className={'font-semibold lg:text-xl'}>{koreanTitle}</h3>
            <h3
                className={classNames(
                    'font-semibold lg:text-lg',
                    workSans.className,
                )}
            >
                {englishTitle}
            </h3>
            {typeof content === 'string' ? (
                <p className={PROJECT_CLASS_NAMES.BODY_CONTENT}>{content}</p>
            ) : (
                content
            )}
            {image}
        </section>
    )
}
