import { client } from './sanity'

export async function getProjects<T>(): Promise<T> {
    return client.fetch(
        `*[_type == "project"] | order(order asc){
      ...,
      "id":_id
    }`,
    )
}
export async function getProjectByOrderId<T>(order: number): Promise<T> {
    return client.fetch(
        `*[_type == "project" && order == ${order}][0]{
      ...,
      "id":_id
    }`,
    )
}
