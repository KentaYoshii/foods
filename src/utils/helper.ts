import { Restaurant, restaurants } from "../assets/photos";
import { getThumbnailPresignURLs } from "./s3_helper";

export const getRestaurantInRange = (begin: number, end: number, region: string) => {
    return restaurants.slice(begin, end);
}

export const getRs = async (begin: number, end: number, region: string) => {
    const rs = getRestaurantInRange(begin, end, region);
    const res_rs = await getThumbnailPresignURLs(rs);
    return res_rs;
}