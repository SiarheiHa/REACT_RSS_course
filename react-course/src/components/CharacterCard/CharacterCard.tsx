import React from 'react';
import './CharacterCard.scss';
import { Character } from 'types/types';

function CharacterCard(props: {
  character: Character;
  onClick?: (character: Character) => void;
  detail?: boolean;
}) {
  const {
    onClick,
    detail,
    character: { name, race, birth, death, gender, hair, height, realm, spouse, wikiUrl },
  } = props;

  const classes = detail ? 'product product_detail' : 'product';

  return (
    <div
      className={classes}
      onClick={() => {
        if (onClick) {
          onClick(props.character);
        }
      }}
    >
      <p>{name}</p>
      <p>{race}</p>
      {detail && (
        <>
          <p>{`birth: ${birth || 'no information'}`}</p>
          <p>{`death: ${death || 'no information'}`}</p>
          <p>{`gender: ${gender || 'no information'}`}</p>
          <p>{`hair: ${hair || 'no information'}`}</p>
          <p>{`height: ${height || 'no information'}`}</p>
          <p>{`realm: ${realm || 'no information'}`}</p>
          <p>{`spouse: ${spouse || 'no information'}`}</p>
          <p>
            Read more on:{' '}
            {
              <a href={wikiUrl} target="_blank" rel="noreferrer">
                lotr.fandom.com
              </a>
            }
          </p>
        </>
      )}
    </div>
  );
}

export default CharacterCard;
