import { client } from '@/services/sanity'

export async function getMyInfo<T>(): Promise<T> {
    return client.fetch(
        `*[_type == "myInfo"][0]{
      ...,
      "id":_id
    }`,
    )
}
