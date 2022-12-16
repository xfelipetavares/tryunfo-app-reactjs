import React from 'react';
import styles from './style.module.scss';
import superTrunfoLogo from '../../assets/superTrunfoLogo.png';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className={styles.rightSide}>
        <div className={styles.card}>
          <h3>{cardName}</h3>
          <img className={styles.mainImageCard} src={cardImage} alt={cardName} />
          <p className={styles.descrip}>
            {cardDescription}
          </p>
          <div className={styles.infos}>
            <ul>
              <label>
                Atributo 1 ............................ <li>{cardAttr1}</li>
              </label>

              <label>
                Atributo 2 ............................ <li>{cardAttr2}</li>
              </label>

              <label>
                Atributo 3 ............................ <li>{cardAttr3}</li>
              </label>
              <p className={styles.raridade}>
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
