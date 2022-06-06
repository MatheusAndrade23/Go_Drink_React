import * as Styled from '../Kinds/styles';

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from '../../services/api';

import { AuthContext } from '../../providers/AuthProvider/index';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Heading } from '../../components/Heading';
import { ReturnButton } from '../../components/ReturnButton';
import { ErrorComponent } from '../../components/ErrorComponent';
import { DrinkComponent } from '../../components/DrinkComponent';
import { ButtonComponent } from '../../components/ButtonComponent';

import config from '../../config';

export const Favorites = () => {
  const { user, updateFavorites } = useContext(AuthContext);
  const navigate = useNavigate();
  const DRINKS_PER_PAGE = 8;

  const [next, setNext] = useState(0);
  const [drinks, setDrinks] = useState([]);
  const [drinksToShow, setDrinksToShow] = useState([]);
  const [loadingControl, setLoadingControl] = useState(true);
  const [loadMoreControl, setLoadMoreControl] = useState(DRINKS_PER_PAGE);
  const [errorControl, setErrorControl] = useState({
    error: false,
    message: '',
  });

  const handleShowMoreDrinks = () => {
    const nextPage = next + DRINKS_PER_PAGE;
    const nextDrinks = drinks.slice(nextPage, nextPage + DRINKS_PER_PAGE);
    setDrinksToShow([...drinksToShow, ...nextDrinks]);
    setNext(nextPage);
    setLoadMoreControl((loaded) => loaded + DRINKS_PER_PAGE);
  };

  const getFavorites = async () => {};

  useEffect(() => {
    const { authenticated, favorites } = user;
    if (!authenticated) {
      setErrorControl({
        error: true,
        message:
          'Please create an account or log in before having a list of favorite drinks!',
      });
      return;
    }
    if (favorites.length === 0) {
      setDrinks(null);
      return;
    }
    favorites.map(async (id) => {
      try {
        const resp = await db.get(`api/json/v1/1/lookup.php?i=${id}`);
        const drink = resp.data.drinks[0];

        setDrinks((drinks) => [...drinks, drink]);
      } catch (err) {
        setDrinks(undefined);
      }
    });
  }, [user]);

  useEffect(() => {
    if (drinks && drinks.length > 0) {
      setLoadingControl(false);
      setDrinksToShow(drinks.slice(0, DRINKS_PER_PAGE));
      document.title = `Favorites | ${config.siteName} `;
    } else if (drinks === null) {
      setLoadingControl(false);
      setErrorControl({
        error: true,
        message: 'You do not have any favorite drink!',
      });
      document.title = `Favorites | ${config.siteName} `;
    } else if (drinks === undefined) {
      setErrorControl({
        error: true,
        message: 'Something went wrong, try again later!',
        code: 500,
      });
      document.title = `Server Error | ${config.siteName} `;
    }
  }, [drinks]);

  return (
    <>
      <Header />
      {!errorControl.error ? (
        <Styled.Container>
          <Heading size="small" as="h4">
            Favorite Drinks:
          </Heading>
          {!loadingControl ? (
            <Styled.DrinksContainer>
              {drinksToShow.map((drink, index) => (
                <DrinkComponent
                  drink={drink}
                  key={`${drink.idDrink} + ${index}`}
                />
              ))}
            </Styled.DrinksContainer>
          ) : (
            <Styled.DrinksContainer>
              <Loading />
            </Styled.DrinksContainer>
          )}
          {drinks && drinks.length > 0 && loadMoreControl < drinks.length && (
            <ButtonComponent handleSubmit={handleShowMoreDrinks} bold={false}>
              Load More
            </ButtonComponent>
          )}
        </Styled.Container>
      ) : (
        <ErrorComponent
          message={errorControl.message}
          code={errorControl.code}
        />
      )}
      <ReturnButton />
    </>
  );
};
