import React from 'react';

import './Card.scss';

function Card({ card }: { card: Record<string, string | File> }) {
  const fileReader = new FileReader();
  let file: string | ArrayBuffer;
  const getFile = () => {
    console.log('loadend');
    console.log(typeof fileReader.result);
    if (fileReader.result) {
      file = fileReader.result;
      console.log(file);
    }
  };

  if (card.file instanceof File) {
    console.log(card.file);
    fileReader.readAsDataURL(card.file);
    fileReader.addEventListener('loadend', getFile);
  }

  return (
    <>
      {Object.entries(card).map(([field, value]) => {
        // if (field === 'file') {
        //   return (
        //     <p key={value}>
        //       <img src={value} alt="avatar" />
        //       <p>{value}</p>
        //     </p>
        //   );
        // }

        // if (value instanceof File) return null;

        if (value instanceof File) {
          return <img src={file as string} alt="image" key={field} />;
        }

        return (
          <p key={value}>
            <span>{field + ':'}</span>
            <span>{value}</span>
          </p>
        );
      })}
    </>
  );
}

export default Card;
