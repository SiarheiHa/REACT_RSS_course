import React from 'react';
import { CardProps, CardState } from 'types/types';

import './Card.scss';

class Card extends React.Component<CardProps, CardState> {
  state = {
    file: '',
  };

  componentDidMount(): void {
    const { file } = this.props.card;
    const fileReader = new FileReader();

    const getFile = () => {
      if (fileReader.result) {
        const fileStr = fileReader.result;
        if (typeof fileStr === 'string') {
          this.setState({ file: fileStr });
        }
      }
    };

    if (file instanceof File) {
      fileReader.readAsDataURL(file);
      fileReader.addEventListener('loadend', getFile);
    }
  }

  render() {
    const { card } = this.props;
    const { file } = this.state;
    return (
      <div className="form-page__card" data-testid="form-card">
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
