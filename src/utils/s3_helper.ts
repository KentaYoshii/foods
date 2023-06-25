import { s3 } from "./s3";
import { ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Restaurant } from "../assets/photos";

export const listObjects = async () => {
    try {
        const res = await s3.send(new ListObjectsV2Command({
            Bucket: import.meta.env.VITE_S3_BUCKET_NAME
        }))
        console.log(res);
    } catch (e) {
        console.log(e)
    }
}

export const getPresignURL = async (key: string) => {
    const cmd = new GetObjectCommand({
        Bucket: import.meta.env.VITE_S3_BUCKET_NAME,
        Key: key,
    });
    const url = await getSignedUrl(s3, cmd, { expiresIn: 3600})
    return url;
};

export const getPresignedURLs = async (keys: string[]) => {
    const urlPromises = keys.map((key) => getPresignURL(key));
    const urls = await Promise.all(urlPromises);
    return urls;
};

export const getThumbnailPresignURL = async (r: Restaurant) => {
    const r_key = r.thumbnail;
    const new_r = { ...r };
    const url = await getPresignURL(r_key);
    new_r.thumbnail = url;
    return new_r;
}

export const getThumbnailPresignURLs = async (rs: Restaurant[]) => {
    const rPromises = rs.map((r) => getThumbnailPresignURL(r))
    const new_rs = await Promise.all(rPromises);
    return new_rs.sort((a, b) => Number(b.date) - Number(a.date));
}