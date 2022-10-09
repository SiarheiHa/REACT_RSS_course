import React from 'react';
import { CardProps, CardState } from 'types/types';

import './Card.scss';

class Card extends React.Component<CardProps, CardState> {
  state = {
    file: '',
  };

  componentDidMount(): void {
    const { card } = this.props;
    const fileReader = new FileReader();
    let file: string | ArrayBuffer;
    const getFile = () => {
      if (fileReader.result) {
        file = fileReader.result;
        this.setState({ file: file });
      }
    };

    if (card.file instanceof File) {
      fileReader.readAsDataURL(card.file);
      fileReader.addEventListener('loadend', getFile);
    }
  }

  render() {
    const { card } = this.props;
    const { file } = this.state;
    return (
      <div className="form-page__card">
        <img src={file as string} alt="image" height="150" />
        {Object.entries(card).map(([field, value]) => {
          if (value instanceof File) return;
          return (
            <p key={value}>
              <span>{field + ': '}</span>
              <span>{value}</span>
            </p>
          );
        })}
      </div>
    );
  }
}

export default Card;
