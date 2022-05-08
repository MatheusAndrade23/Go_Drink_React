export const GetThumbImg = async (kind, kinds, type) => {
  const imgLinks = [];

  for (let i = 0; i < kinds.length; i++) {
    try {
      const resp = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${kind}=${kinds[i][type]}`,
      );
      const data = await resp.json();
      const img = data.drinks[0].strDrinkThumb;
      imgLinks.push(img);
    } catch (error) {
      return undefined;
    }
  }
  return imgLinks;
};
