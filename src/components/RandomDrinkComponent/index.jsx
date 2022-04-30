import P from 'prop-types';
import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading } from '../Heading';
import { Loading } from '../Loading';

export const RandomDrinkComponent = () => {
  const navigate = useNavigate();
  const [drink, setDrink] = useState([]);
  const [loadingControl, setLoadingControl] = useState(true);

  useEffect(() => {
    const GetData = async () => {
      try {
        const resp = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/random.php',
        );
        const drink = await resp.json();
        setDrink(drink);
        setLoadingControl(false);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <>
      {!loadingControl ? (
        <Styled.Drink
          key={drink.drinks[0].idDrink}
          onClick={() => navigate(`/drink/${drink.drinks[0].idDrink}`)}
        >
          <img
            src={drink.drinks[0].strDrinkThumb}
            alt={drink.drinks[0].strDrink}
          />
          <Heading as="h6" size="small">
            {drink.drinks[0].strDrink.length > 17
              ? `${drink.drinks[0].strDrink.slice(0, 15)}...`
              : drink.drinks[0].strDrink}
          </Heading>
        </Styled.Drink>
      ) : (
        <Styled.Drink>
          <Loading />
        </Styled.Drink>
      )}
    </>
  );
};
