export const GetFavorites = async (ids = []) => {
  let drinksInfo = [];
  if (ids.length === 0) {
    return null;
  } else {
    ids.map(async (id) => {
      try {
        const resp = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        const data = await resp.json();
        const drink = data.drinks[0];
        drinksInfo.push(drink);
      } catch (err) {
        return undefined;
      }
    });
  }
  return drinksInfo;
};
