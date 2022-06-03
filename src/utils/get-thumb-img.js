import { db } from '../services/api';

export const GetThumbImg = async (kind, kinds, type) => {
  const imgLinks = [];

  for (let i = 0; i < kinds.length; i++) {
    const resp = await db.get(
      `/api/json/v1/1/filter.php?${kind}=${kinds[i][type]}`,
    );
    const array = resp.data.drinks.reverse();
    const img = array[0].strDrinkThumb;
    imgLinks.push(img);
  }
  return imgLinks;
};
