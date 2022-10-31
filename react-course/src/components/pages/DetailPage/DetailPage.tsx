import CharacterCard from 'components/CharacterCard';
import { CharactersContext } from 'context/CharactersState';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const {
    state: { characters, currentPage, limit },
  } = useContext(CharactersContext);
  const index = characters.findIndex(({ _id }) => _id === id);
  const navigate = useNavigate();
  useEffect(() => {
    if (index === -1) {
      navigate('/');
    }
  }, [index, navigate]);

  const position = (Number(currentPage) - 1) * Number(limit) + index + 1;

  return (
    <>
      {characters[index] && (
        <div className="detail-page">
          <p>current position {position}</p>
          <Link to="/">BACK</Link>
          <CharacterCard character={characters[index]} detail />
        </div>
      )}
    </>
  );
};

export default DetailPage;
