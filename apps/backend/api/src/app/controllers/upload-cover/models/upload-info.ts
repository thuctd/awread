import { ImageType } from "./image-type";

export interface UploadInfo {
    id: string,
    type: ImageType,
    file: string
}