import styles from './style.module.scss';
import superTrunfoLogo from '../../assets/superTrunfoLogo.png';
import defaultImage from '../../assets/imageDefault.png';

// interface propsTypes {
//   cardName: string;
//   cardDescription: string;
//   cardAttr1: number;
//   cardAttr2: number;
//   cardAttr3: number;
//   cardImage: string;
//   cardRare: string;
//   cardTrunfo: boolean;
// }

export default function Card(props) {
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, atribNameField1, atribNameField2, atribNameField3 } = props;

  return (
    <div className={styles.rightSide}>
      <div className={styles.card}>
        <h3>{cardName || 'Nome da Carta'}</h3>
        <img className={styles.mainImageCard} src={cardImage || defaultImage} alt={cardName} />
        <p className={styles.descrip}>{cardDescription || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.'}</p>
        <div className={styles.infos}>
          <ul>
            <label>
              <p>{atribNameField1 || 'Atributo 1'}</p>
              {/* <span>&nbsp;------</span> */}
              <li>{cardAttr1}</li>
            </label>

            <label>
              <p>{atribNameField2 || 'Atributo 2'}</p>
              {/* <span>&nbsp;------</span> */}
              <li>{cardAttr2}</li>
            </label>

            <label>
              <p>{atribNameField3|| 'Atributo 3'}</p>
              {/* <span>&nbsp;------</span> */}
              <li>{cardAttr3}</li>
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
