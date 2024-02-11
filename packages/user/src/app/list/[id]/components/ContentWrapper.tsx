import type { ContentWrapperProps } from '@/interfaces'
export default function ContentWrapper(props: ContentWrapperProps) {
    const { children, descriptionImage, descriptionText } = props
    return (
        <div className={'mt-8.5 grid gap-y-14 lg:gap-y-37.5'}>
            <section>
                <p className="whitespace-pre-line lg:text-lg">
                    {descriptionText}
                </p>
            </section>
            {descriptionImage}
            {children}
        </div>
    )
}
