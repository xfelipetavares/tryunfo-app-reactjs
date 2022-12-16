import React from 'react';
import styles from './style.module.scss';
import superTrunfoLogo from '../../assets/superTrunfoLogo.png';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className={styles.rightSide}>
        <div className={styles.card}>
          <h3 data-testid="name-card">{cardName}</h3>
          <img className={styles.mainImageCard} src={cardImage} alt={cardName} data-testid="image-card" />
          <p className={styles.descrip} data-testid="description-card">
            {cardDescription}
          </p>
          <div className={styles.infos}>
            <ul>
              <label htmlFor="">
                Atributo 1 ............................ <li data-testid="attr1-card">{cardAttr1}</li>
              </label>

              <label htmlFor="">
                Atributo 2 ............................ <li data-testid="attr2-card">{cardAttr2}</li>
              </label>

              <label htmlFor="">
                Atributo 3 ............................ <li data-testid="attr3-card">{cardAttr3}</li>
              </label>
              <p className={styles.raridade} data-testid="rare-card">
                <span>Raridade</span> {cardRare}
              </p>
            </ul>
          </div>
          {!cardTrunfo ? <p /> : <img className={styles.superTrunfoImage} src={superTrunfoLogo}></img>}
        </div>
      </div>
    );
  }
}

export default Card;
