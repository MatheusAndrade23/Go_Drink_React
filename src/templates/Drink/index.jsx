import * as Styled from './styles';

import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../services/api';

import { AiFillStar } from 'react-icons/ai';

import { IngredientsArray } from '../../utils/ingredients-array';

import { AuthContext } from '../../providers/AuthProvider/index';

import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Loading } from '../../components/Loading';
import { ReturnButton } from '../../components/ReturnButton';
import { SmallContainer } from '../../components/SmallContainer';
import { ErrorComponent } from '../../components/ErrorComponent';
import { MessageComponent } from '../../components/MessageComponent';

import config from '../../config';

export const Drink = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(AuthContext);

  const [drink, setDrink] = useState('');
  const [message, setMessage] = useState(undefined);
  const [ingredients, setIngredients] = useState({});
  const [loadingControl, setLoadingControl] = useState(true);
  const [errorControl, setErrorControl] = useState({
    error: false,
    message: '',
  });

  const handleFavorite = async () => {
    if (user.isLogged) {
      try {
        const userInfo = await fetch(`${config.api2Url}/drink/favorites`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...user, drinkId: id }),
        });
        const json = await userInfo.json();
        console.log(json.user);
      } catch (err) {
        setDrink(undefined);
      }
    } else {
      setMessage('Please log in before putting the drink in favorites!');
      setTimeout(() => {
        setMessage(undefined);
      }, 3000);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await db.get(`/api/json/v1/1/lookup.php?i=${id}`);
        try {
          const drink = resp.data.drinks[0];
          const ingredients = IngredientsArray(drink);
          setIngredients(ingredients);
          setDrink(drink);
          setLoadingControl(false);
        } catch (error) {
          setDrink(null);
        }
      } catch (error) {
        setDrink(undefined);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (drink) {
      document.title = `${drink.strDrink} | ${config.siteName}`;
    } else if (drink === null) {
      setErrorControl({
        error: true,
        message: 'This drink does not exist!',
      });
      document.title = `Error | ${config.siteName} `;
    } else if (drink === undefined) {
      setErrorControl({
        error: true,
        message: 'Something went wrong, try again later!',
        code: 500,
      });
      document.title = `Server Error | ${config.siteName} `;
    }
  }, [drink]);

  return (
    <>
      <Header />
      {!errorControl.error ? (
        <Styled.Drink>
          {!loadingControl && drink ? (
            <>
              <Styled.DrinkImg src={drink.strDrinkThumb} />
              <Styled.Info>
                <Styled.Favorite onClick={handleFavorite}>
                  <AiFillStar />
                </Styled.Favorite>
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
                      {ingredients.ingredients.map((ingredient, index) => (
                        <li key={`${ingredient}-${index}`}>{ingredient}</li>
                      ))}
                    </>
                  </Styled.List>
                  <Styled.List>
                    <>
                      <Heading size="small" as="h6">
                        Measures:
                      </Heading>
                      {ingredients.measures.map((measure, index) => (
                        <li key={`${measure}-${index}`}>{measure}</li>
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
          code={errorControl.code}
        />
      )}
      {message && <MessageComponent message={message} />}
      <ReturnButton />
    </>
  );
};
