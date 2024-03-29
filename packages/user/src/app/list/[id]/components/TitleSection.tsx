import type { TitleSectionProps } from '@/interfaces'
import { workSans } from '@/styles/font'
import classNames from 'classnames'
import { ProjectTypeMap, RoleTypeMap, ScopeTypeMap } from '@/utils'

export default function TitleSection(props: TitleSectionProps) {
    const { data } = props

    const scopes = data.scopes?.map((scope) => ScopeTypeMap[scope]).join(', ')
    const roles = data.roles?.map((role) => RoleTypeMap[role]).join(', ')

    return (
        <section>
            <h2 className="text-xl font-bold lg:text-3xl">{data.title}</h2>
            <dl
                className={classNames(
                    'mt-5 grid grid-cols-[max-content,auto] gap-x-11 gap-y-1.5 border-y border-neo-black py-5.5 lg:text-xl',
                    workSans.className,
                )}
            >
                <dt className="w-17 font-medium">Year.</dt>
                <dd className="font-light">{data.year}</dd>
                <dt className="w-17 font-medium">Type.</dt>
                <dd className="font-light">{ProjectTypeMap[data.type]}</dd>
                <dt className="w-17 font-medium">Scope.</dt>
                <dd className="font-light">{scopes}</dd>
                <dt className="w-17 font-medium">Role.</dt>
                <dd className="font-light">{roles}</dd>
            </dl>
        </section>
    )
}
