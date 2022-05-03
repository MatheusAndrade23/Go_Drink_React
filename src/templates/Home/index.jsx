import P from 'prop-types';
import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { DrinkComponent } from '../../components/DrinkComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { Loading } from '../../components/Loading';
import { ErrorComponent } from '../../components/ErrorComponent';

import config from '../../config';

export const Home = ({ which = 'alcoholic', index = 'a', page = 'filter' }) => {
  const { search } = useParams();
  const navigate = useNavigate();
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
      try {
        const resp = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/${page}.php?${index}=${
            search ? search : which
          }`,
        );
        try {
          const data = await resp.json();
          const drinks = data.drinks.reverse();
          setDrinks(drinks);
          setDrinksToShow(drinks.slice(0, DRINKS_PER_PAGE));
          setLoadingControl(false);
          document.title = `${config.siteName} | ${`${which
            .charAt(0)
            .toUpperCase()}${which.slice(1)}`}`;
        } catch (error) {
          setErrorControl({
            error: true,
            message: 'No results for your search!',
          });
          document.title = `${config.siteName} | Error`;
        }
      } catch (err) {
        setErrorControl({
          error: true,
          message: 'Something went wrong, try again later!',
          code: 500,
        });
        document.title = `${config.siteName} | Server Error`;
      }
    };
    loadData();
  }, [index, page, search, which]);

  return (
    <>
      <Header />
      {!errorControl.error ? (
        <Styled.HomeContainer>
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
          {loadMoreControl < drinks.length && (
            <ButtonComponent handleSubmit={handleShowMoreDrinks} bold={false}>
              Load More
            </ButtonComponent>
          )}
        </Styled.HomeContainer>
      ) : (
        <ErrorComponent
          message={errorControl.message}
          code={errorControl.code && errorControl.code}
        />
      )}
    </>
  );
};

Home.propTypes = {
  which: P.string,
  index: P.string,
  page: P.string,
};
