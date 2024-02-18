import { ProjectName, ProjectType, RoleType, ScopeType } from '@/constants'

export type ProjectData = {
    order: number
    name: ProjectName
    title: string
    type: ProjectType
    scopes: ScopeType[]
    roles: RoleType[]
    id: string
    year: string
}

export type MyInfoData = {
    name: string
    profileImageUrl: string
    position: string
    introduction: string
}
