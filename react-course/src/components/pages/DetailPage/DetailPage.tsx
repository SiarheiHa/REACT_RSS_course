import Breadcrumbs from 'components/Breadcrumbs';
import CharacterCard from 'components/CharacterCard';
// import { CharactersContext } from 'context/CharactersState';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'store';

import './DetailPage.scss';

const DetailPage = () => {
  const { id } = useParams();
  const { characters } = useAppSelector((state) => state.characters);

  const index = characters.findIndex(({ _id }) => _id === id);
  const navigate = useNavigate();
  useEffect(() => {
    if (index === -1) {
      navigate('/');
    }
  }, [index, navigate]);

  const crumbs = [
    { name: 'characters', path: '/' },
    { name: characters[index].name, path: '' },
  ];

  return (
    <>
      {characters[index] && (
        <div className="detail-page">
          <Breadcrumbs crumbs={crumbs} />
          <CharacterCard character={characters[index]} detail />
        </div>
      )}
    </>
  );
};

export default DetailPage;
