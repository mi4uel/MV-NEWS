export interface Post{
    category:string[],
    content:string,
    country:string[],
    creator:string | null,
    description: string,
    image_url: null | string,
    keywords: null | string,
    language: null | string,
    link:  string,
    pubDate: null | string,
    source_id: null | string,
    title: string,
    video_url: null | string
  }
  export interface Data{
    nextPage:string,
    results:Post[],
    status:string,
    totalResults:number
  }

  export type useFetchState<T>={
    state:"idle" | "loading" | "success" | "error",
    data:null | T,
    error: null | Error
}