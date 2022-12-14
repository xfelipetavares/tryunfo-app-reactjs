import React from 'react';
import styles from './style.module.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className={styles.card}>
        <h1 data-testid="name-card">{cardName}</h1>
        <img src={cardImage} alt={cardName} data-testid="image-card" />
        <p className={styles.descrip} data-testid="description-card">
          {cardDescription}
        </p>
        <div className={styles.infos}>
          <ul>
            <li data-testid="attr1-card">{cardAttr1}</li>
            <li data-testid="attr2-card">{cardAttr2}</li>
            <li data-testid="attr3-card">{cardAttr3}</li>
            <li data-testid="rare-card">{cardRare}</li>
          </ul>
        </div>
        {!cardTrunfo ? <p /> : <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

export default Card;
