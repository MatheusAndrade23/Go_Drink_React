import * as Styled from '../Lists/styles';

import { useState, useEffect, useContext } from 'react';

import { GetFavorites } from '../../utils/get-favorites';
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
  const { user } = useContext(AuthContext);
  const DRINKS_PER_PAGE = 8;

  const [loadMoreControl, setLoadMoreControl] = useState(DRINKS_PER_PAGE);
  const [drinksToShow, setDrinksToShow] = useState([]);
  const [next, setNext] = useState(0);
  const [drinks, setDrinks] = useState([]);
  const [loadingControl, setLoadingControl] = useState(true);
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

  useEffect(() => {
    const loadData = async () => {
      if (user.isLogged === true) {
        try {
          const userInfo = await fetch(`${config.api2Url}/drink/favorites`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          });
          const json = await userInfo.json();
          const favorites = await GetFavorites(json.user.favorites);
          setDrinks(favorites);
        } catch (err) {
          setDrinks(undefined);
        }
      } else {
        setErrorControl({
          error: true,
          message: 'Please log in before having a list of favorite drinks!',
        });
      }
    };
    loadData();
  }, [user]);

  useEffect(() => {
    if (drinks && drinks.length > 0) {
      setDrinksToShow(drinks.slice(0, DRINKS_PER_PAGE));
      setLoadingControl(false);
      document.title = `Favorites | ${config.siteName} `;
    } else if (drinks === undefined) {
      setErrorControl({
        error: true,
        message: 'Something went wrong, try again later!',
        code: 500,
      });
      document.title = `Server Error | ${config.siteName} `;
    } else if (drinks === null) {
      setLoadingControl(false);
      setErrorControl({
        message: 'You do not have any favorite drink!',
      });
      document.title = `Favorites | ${config.siteName} `;
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
              {drinksToShow.map((drink) => (
                <DrinkComponent drink={drink} key={drink.idDrink} />
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
          code={errorControl.code && errorControl.code}
        />
      )}
      <ReturnButton />
    </>
  );
};
