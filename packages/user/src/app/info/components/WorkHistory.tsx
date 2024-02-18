import classNames from 'classnames'
import { manrope } from '@/styles/font'

export default function WorkHistory() {
    return (
        <section>
            <h2
                className={classNames(
                    manrope.className,
                    'uppercase text-gray60',
                )}
            >
                Work History
            </h2>
        </section>
    )
}
