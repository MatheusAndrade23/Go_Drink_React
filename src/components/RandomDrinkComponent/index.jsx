import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading } from '../Heading';
import { Loading } from '../Loading';

export const RandomDrinkComponent = () => {
  const navigate = useNavigate();

  const [drink, setDrink] = useState([]);
  const [error, setError] = useState(false);
  const [loadingControl, setLoadingControl] = useState(true);

  useEffect(() => {
    const GetData = async () => {
      try {
        const resp = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/random.php',
        );
        const drink = await resp.json();
        setDrink(drink.drinks[0]);
        setLoadingControl(false);
      } catch (err) {
        setError(true);
        setLoadingControl(false);
      }
    };

    GetData();
  }, []);

  return (
    <>
      {!error && !loadingControl ? (
        <Styled.Drink
          key={drink.idDrink}
          onClick={() => (window.location.href = `/drink/${drink.idDrink}`)}
        >
          <img src={drink.strDrinkThumb} alt={drink.strDrink} loading="lazy" />
          <Heading as="h6" size="small">
            {drink.strDrink.length > 17
              ? `${drink.strDrink.slice(0, 15)}...`
              : drink.strDrink}
          </Heading>
        </Styled.Drink>
      ) : loadingControl ? (
        <Styled.Drink>
          <Loading />
        </Styled.Drink>
      ) : (
        <Styled.Drink>
          <Heading as="h5" size="small">
            Something went wrong, try again later!
          </Heading>
        </Styled.Drink>
      )}
    </>
  );
};
