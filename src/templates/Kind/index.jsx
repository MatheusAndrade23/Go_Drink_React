import * as Styled from './styles';

import config from '../../config';

import { GetThumbImg } from '../../utils/get-thumb-img';

import { IoIosArrowBack } from 'react-icons/io';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Loading } from '../../components/Loading';
import { ButtonComponent } from '../../components/ButtonComponent';
import { ErrorComponent } from '../../components/ErrorComponent';
import { useCallback } from 'react';

export const Kind = () => {
  const { kind } = useParams();
  const KINDS_PER_PAGE = 8;

  const [loadMoreControl, setLoadMoreControl] = useState(KINDS_PER_PAGE);
  const [loadingControl, setLoadingControl] = useState(true);
  const [kindsToShow, setKindsToShow] = useState([]);
  const [linksImg, setLinksImg] = useState(undefined);
  const [kinds, setKinds] = useState([]);
  const [type, setType] = useState('');
  const [next, setNext] = useState(0);
  const [ingredients, setIngredients] = useState({});
  const [errorControl, setErrorControl] = useState({
    error: false,
    message: '',
  });

  const handleShowMoreKinds = () => {
    const nextPage = next + KINDS_PER_PAGE;
    const nextKinds = kinds.slice(nextPage, nextPage + KINDS_PER_PAGE);
    setKindsToShow([...kindsToShow, ...nextKinds]);
    setNext(nextPage);
    setLoadMoreControl((loaded) => loaded + KINDS_PER_PAGE);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadImgLinks = async () => {
    const images = await GetThumbImg(kind, kinds, type);

    if (images.length > 0) {
      setLinksImg(images);
      setLoadingControl(false);
      console.log(images);
    } else if (images === undefined) {
      setKinds(undefined);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/list.php?${kind}=list`,
        );
        try {
          const data = await resp.json();
          const kinds = data.drinks;
          setKinds(kinds);
          setKindsToShow(kinds.slice(0, KINDS_PER_PAGE));
        } catch (error) {
          setKinds(null);
        }
      } catch (error) {
        setKinds(undefined);
      }
    };
    loadData();
  }, [kind]);

  useEffect(() => {
    const makePage = async () => {
      let images = undefined;
      if (kinds.length > 0) {
        switch (kind) {
          case 'i':
            setType('strIngredient1');
            setLoadingControl(false);
            document.title = `Ingredients | ${config.siteName}`;
            break;

          case 'c':
            setType('strCategory');
            loadImgLinks();
            document.title = `Categories | ${config.siteName}`;
            break;

          case 'g':
            setType('strGlass');
            loadImgLinks();
            document.title = `Glasses | ${config.siteName}`;
            break;

          case 'a':
            setType('strAlcoholic');
            loadImgLinks();
            document.title = `Alcoholic | ${config.siteName}`;
            break;
        }
      } else if (kinds === null) {
        setErrorControl({
          error: true,
          message: 'This kind does not exist!',
        });
        document.title = `Error | ${config.siteName} `;
      } else if (kinds === undefined) {
        setErrorControl({
          error: true,
          message: 'Something went wrong, try again later!',
          code: 500,
        });
        document.title = `Server Error | ${config.siteName} `;
      }
    };
    makePage();
  }, [kind, kinds, loadImgLinks]);

  return (
    <>
      <Header />
      {!errorControl.error ? (
        <Styled.KindsContainer>
          {!loadingControl ? (
            <Styled.Container>
              {kindsToShow.map((kinds, index) => (
                <Styled.Kind key={kinds[type]}>
                  {linksImg && <img src={linksImg[index]} />}
                  {kind === 'i' && (
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${kinds[type]}.png`}
                    />
                  )}
                  <Heading as="h6" size="small">
                    {kinds[type]}
                  </Heading>
                </Styled.Kind>
              ))}
            </Styled.Container>
          ) : (
            <Styled.Container>
              <Loading />
            </Styled.Container>
          )}
          {kinds && loadMoreControl < kinds.length && (
            <ButtonComponent handleSubmit={handleShowMoreKinds} bold={false}>
              Load More
            </ButtonComponent>
          )}
        </Styled.KindsContainer>
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
