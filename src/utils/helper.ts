import { Restaurant, restaurants } from "../assets/photos";
import { getPresignedURLs, getThumbnailPresignURLs } from "./s3_helper";

const getRBaseKey = (name: string) => {
    const l = name.toLowerCase();
    return l.split(' ').join('_');
}

export const getRestaurantInRange = (
  begin: number,
  end: number,
  region: string
) => {
  return restaurants.slice(begin, end);
};

export const getRs = async (begin: number, end: number, region: string) => {
  const rs = getRestaurantInRange(begin, end, region);
  const res_rs = await getThumbnailPresignURLs(rs);
  return res_rs;
};

export const getRImageKeys = (r: Restaurant) => {
  const { numImages, name } = r;
  const r_name = getRBaseKey(name);
  const imgKs = [];
  for (let i = 1; i < numImages + 1; i += 1) {
    const imgK = `${r_name}_${i}.jpeg`;
    imgKs.push(imgK);
  }
  return imgKs;
};

export const getRImages = async (r: Restaurant) => {
    const imgKs = getRImageKeys(r);
    const imgs = await getPresignedURLs(imgKs);
    return imgs;
}
