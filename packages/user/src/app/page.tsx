import { getPersonByName } from '@/services/person'

export default async function Home() {
    const res = await getPersonByName('dory')

    console.log(res)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>{res.name}</p>
        </main>
    )
}
