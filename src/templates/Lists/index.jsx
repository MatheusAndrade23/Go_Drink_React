import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Heading } from '../../components/Heading';
import { DrinkComponent } from '../../components/DrinkComponent';
import { ErrorComponent } from '../../components/ErrorComponent';
import { ButtonComponent } from '../../components/ButtonComponent';

import config from '../../config';

export const Lists = () => {
  const { index, list } = useParams();
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
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${index}=${list}`,
        );
        try {
          const data = await resp.json();
          const drinks = data.drinks.reverse();
          setDrinks(drinks);
          setLoadingControl(false);
          setDrinksToShow(drinks.slice(0, DRINKS_PER_PAGE));
        } catch (error) {
          setDrinks(null);
        }
      } catch (err) {
        setDrinks(undefined);
      }
    };
    loadData();
  }, [index, list]);

  useEffect(() => {
    if (drinks && drinks.length > 0) {
      document.title = `${`${list.charAt(0).toUpperCase()}${list
        .slice(1)
        .replace(/_/, ' ')}`} | ${config.siteName} `;
    } else if (drinks === null) {
      window.location.href = '/not-found';
    } else if (drinks === undefined) {
      setErrorControl({
        error: true,
        message: 'Something went wrong, try again later!',
        code: 500,
      });
      document.title = `Server Error | ${config.siteName} `;
    }
  }, [drinks, list]);

  return (
    <>
      <Header />
      {!errorControl.error ? (
        <Styled.Container>
          {!loadingControl ? (
            <>
              <Heading size="small" as="h4">
                {`${list.charAt(0).toUpperCase()}${list
                  .slice(1)
                  .replace(/_/, ' ')}:`}
              </Heading>
              <Styled.DrinksContainer>
                {drinksToShow.map((drink) => (
                  <DrinkComponent drink={drink} key={drink.idDrink} />
                ))}
              </Styled.DrinksContainer>
            </>
          ) : (
            <Styled.DrinksContainer>
              <Loading />
            </Styled.DrinksContainer>
          )}
          {drinks && loadMoreControl < drinks.length && (
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
      <Styled.ReturnLink href="/" title="Return">
        <IoIosArrowBack />
      </Styled.ReturnLink>
    </>
  );
};
