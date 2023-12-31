import { Restaurant, restaurants, globalRestaurants } from "../assets/photos";
import { getPresignedURLs, getThumbnailPresignURLs } from "./s3_helper";

const getRBaseKey = (name: string) => {
  const l = name.toLowerCase();
  return l.split(" ").join("_");
};

export const getRestaurantInRange = (
  begin: number,
  end: number,
  region: number
) => {
  if (!region) {
    return restaurants.slice(begin, end);
  }
  return globalRestaurants.slice(begin, end);
};

export const getFavorites = async () => {
  const threshold = 4.8;
  const union = restaurants.concat(globalRestaurants);
  const filtered = union.filter((r) => {
    const currRating = r.rating;
    return currRating >= threshold ? true : false;
  })
  const res = await getThumbnailPresignURLs(filtered);
  res.sort((a, b) => b.rating - a.rating)
  return res;
}

export const getRs = async (begin: number, end: number, region: number) => {
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
};
