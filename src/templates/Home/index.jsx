import P from 'prop-types';
import * as Styled from './styles';

import { useState, useEffect, useCallback } from 'react';

import { Header } from '../../components/Header';
import { DrinkComponent } from '../../components/DrinkComponent';
import { Loading } from '../../components/Loading';

export const Home = () => {
  const [drinks, setDrinks] = useState([]);
  const [loadingControl, setLoadingControl] = useState(true);

  const [drinksToShow, setDrinksToShow] = useState([]);
  const [next, setNext] = useState(8);

  const handleShowMoreDrinks = () => {};

  useEffect(() => {
    const GetData = async () => {
      try {
        const resp = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka',
        );
        const drinks = await resp.json();
        setDrinks(drinks.drinks);
        setLoadingControl(false);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <>
      <Header />
      <Styled.HomeContainer>
        {!loadingControl ? (
          <Styled.DrinksContainer>
            {drinks.map((drink) => {
              console.log(drink);
              return <DrinkComponent drink={drink} key={drink.idDrink} />;
            })}
          </Styled.DrinksContainer>
        ) : (
          <Loading />
        )}
        <button onClick={handleShowMoreDrinks}>Load more</button>
      </Styled.HomeContainer>
    </>
  );
};
