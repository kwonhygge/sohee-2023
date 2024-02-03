import { ProjectName, ScopeType } from '@/constants'

export type ProjectData = {
    name: ProjectName
    title: string
    scopes: ScopeType[]
    id: string
}
