import React from 'react';
import './CharacterCard.scss';
import { Character } from 'types/types';

function CharacterCard(props: {
  character: Character;
  onClick?: (character: Character) => void;
  detail?: boolean;
}) {
  const characterAdapter = ({ ...character }: Character) => {
    for (const [key, value] of Object.entries(character)) {
      if (!value || value === 'NaN') {
        character[key as keyof Character] = 'no information';
      }
    }
    return character;
  };

  const { onClick, detail, character } = props;
  const { name, race, birth, death, gender, hair, height, realm, spouse, wikiUrl } =
    characterAdapter(character);

  const classes = detail ? 'character character_detail' : 'character';

  return (
    <div
      className={classes}
      onClick={() => {
        if (onClick) {
          onClick(props.character);
        }
      }}
      // data-testid="character"
    >
      <p className="character__title">{name}</p>
      <p className="character__race">{race}</p>
      {detail && (
        <>
          <p>
            <span className="character__field">birth: </span>
            {birth}
          </p>
          <p>
            <span className="character__field">death: </span>
            {death}
          </p>
          <p>
            <span className="character__field">gender: </span>
            {gender}
          </p>
          <p>
            <span className="character__field">hair: </span>
            {hair}
          </p>
          <p>
            <span className="character__field">height: </span>
            {height}
          </p>
          <p>
            <span className="character__field">realm: </span>
            {realm}
          </p>
          <p>
            <span className="character__field">spouse: </span>
            {spouse}
          </p>
          {wikiUrl && (
            <p>
              <span className="character__field">read more on </span>
              {
                <a href={wikiUrl} target="_blank" rel="noreferrer">
                  lotr.fandom.com
                </a>
              }
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default CharacterCard;
