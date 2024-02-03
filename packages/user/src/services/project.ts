import { client } from './sanity'

export async function getProjects<T>(): Promise<T> {
    return client.fetch(
        `*[_type == "project"]{
      ...,
      "id":_id
    }`,
    )
}
export async function getProjectById(id: string) {
    return client.fetch(
        `*[_type == "project" && id == "${id}"][0]{
      ...,
      "id":_id
    }`,
    )
}
