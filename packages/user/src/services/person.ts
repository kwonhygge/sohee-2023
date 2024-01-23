import { client } from './sanity'

export async function getPersonByName(name: string) {
    return client.fetch(
        `*[_type == "person" && name == "${name}"][0]{
      ...,
      "id":_id
    }`,
    )
}
