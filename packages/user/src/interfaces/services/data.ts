import { ProjectName, ScopeType } from '@/constants'

export type ProjectData = {
    order: number
    name: ProjectName
    title: string
    scopes: ScopeType[]
    id: string
}
