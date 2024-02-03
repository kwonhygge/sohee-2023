import { getProjects } from '@/services/project'
import { ProjectData } from '@/interfaces'
import { MainImageMap, ScopeTypeMap } from '@/utils'

import Image from 'next/image'

export default async function Home() {
    const data = await getProjects<ProjectData[]>()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {data.map((project) => {
                const scopes = project.scopes
                    ?.map((scope) => ScopeTypeMap[scope])
                    .join('/')

                const currentImage = MainImageMap[project.name]

                return (
                    <div
                        key={project.id}
                        className="mb-8 w-full max-w-3xl rounded-md  p-8 shadow-md"
                    >
                        <h2 className="mb-4 text-2xl font-bold">
                            {project.name}
                        </h2>
                        <p className="text-gray-600">{scopes}</p>
                        <Image
                            src={currentImage.image}
                            alt={currentImage.alt}
                            width={560}
                            height={370}
                        />
                    </div>
                )
            })}
        </main>
    )
}
