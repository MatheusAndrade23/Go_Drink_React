import P from 'prop-types';
import * as Styled from './styles';

import config from '../../config';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Loading } from '../../components/Loading';
import { TextComponent } from '../../components/TextComponent';
import { SmallContainer } from '../../components/SmallContainer';
import { ErrorComponent } from '../../components/ErrorComponent';

import { IngredientsArray } from '../../utils/ingredients-array';

export const Drink = () => {
  const { id } = useParams();

  const [drink, setDrink] = useState([]);
  const [loadingControl, setLoadingControl] = useState(true);
  const [ingredients, setIngredients] = useState({});
  const [errorControl, setErrorControl] = useState({
    error: false,
    message: '',
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        try {
          const data = await resp.json();
          const drink = data.drinks[0];
          const ingredients = IngredientsArray(drink);
          setIngredients(ingredients);
          setDrink(drink);
          setLoadingControl(false);
          document.title = `${config.siteName} | ${drink.strDrink}`;
        } catch (error) {
          setErrorControl({
            error: true,
            message: 'This drink does not exist!',
          });
          document.title = `${config.siteName} | Error`;
        }
      } catch (error) {
        setErrorControl({
          error: true,
          message: 'Something went wrong, try again later!',
          code: 500,
        });
        document.title = `${config.siteName} | Server Error`;
      }
    };
    loadData();
  }, [id]);

  return (
    <>
      <Header />
      {!errorControl.error ? (
        <Styled.Drink>
          {!loadingControl ? (
            <>
              <Styled.DrinkImg src={drink.strDrinkThumb} />
              <Styled.Info>
                <Heading>{drink.strDrink}</Heading>
                <SmallContainer disposition="row">
                  <span>{drink.strCategory}</span>
                  <span>{drink.strGlass}</span>
                  <span>{drink.strAlcoholic}</span>
                </SmallContainer>
                <SmallContainer disposition="row">
                  <Styled.List>
                    <>
                      <Heading size="small" as="h6">
                        Ingredients:
                      </Heading>
                      {ingredients.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                      ))}
                    </>
                  </Styled.List>
                  <Styled.List>
                    <>
                      <Heading size="small" as="h6">
                        Measures:
                      </Heading>
                      {ingredients.measures.map((measure) => (
                        <li key={measure}>{measure}</li>
                      ))}
                    </>
                  </Styled.List>
                </SmallContainer>
                <Heading as="h6" size="small">
                  Instructions:
                </Heading>
                <Styled.Instructions>
                  {drink.strInstructions}
                </Styled.Instructions>
              </Styled.Info>
            </>
          ) : (
            <Loading />
          )}
        </Styled.Drink>
      ) : (
        <ErrorComponent
          message={errorControl.message}
          code={errorControl.code && errorControl.code}
        />
      )}
    </>
  );
};
