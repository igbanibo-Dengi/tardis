// import { type ClientUploadedFileData } from "uploadthing/types"

// export interface UploadedFile<T = unknown> extends ClientUploadedFileData<T> { }


// ====== URL QUERY PARAMS
export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
}

export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
}