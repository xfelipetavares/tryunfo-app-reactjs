import styles from './style.module.scss';
import TrunfoCheckbox from '../TrunfoCheckbox';

// interface propsTypes {
//   cardName: string;
//   cardDescription: string;
//   cardAttr1: number;
//   cardAttr2: number;
//   cardAttr3: number;
//   cardImage: string;
//   cardRare: string;
//   cardTrunfo: boolean;
//   isSaveButtonDisabled: boolean,
//   onInputChange: Function,
//   onSaveButtonClick: Function,
//   hasTrunfo: boolean,
//   validation: Function,
// }

export default function Form(props) {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, isSaveButtonDisabled, cardTrunfo, onInputChange, onSaveButtonClick, hasTrunfo, validation } = props;

    const column = 25;
    const rows = 3;

    return (
      <form id="forms" className={styles.form}>
        <h2>ADICIONE UMA NOVA CARTA</h2>
        <label className={styles.nomeInput} htmlFor="cardName">
          <h3>Nome</h3>
          <input type="text" required name="cardName" value={cardName} onChange={onInputChange} onKeyUp={validation} />
        </label>
        <label className={styles.descrInput} htmlFor="cardDescription">
          <h3>Descrição</h3>
          <textarea name="cardDescription" cols={column} rows={rows} required maxLength={100} value={cardDescription} onChange={onInputChange} onKeyUp={validation} />
        </label>

        <section className={styles.atributos}>
          <label htmlFor="cardAttr1">
            <h3>Atributo 1</h3>
            <input name="cardAttr1" type="number" required value={cardAttr1} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
          </label>
          <label htmlFor="cardAttr2">
            <h3>Atributo 2</h3>
            <input name="cardAttr2" type="number" required value={cardAttr2} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
          </label>
          <label htmlFor="cardAttr3">
            <h3>Atributo 3</h3>
            <input name="cardAttr3" type="number" required value={cardAttr3} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
          </label>
          <p className={styles.pointsRemaining}>Pontos Restantes - 000</p>
          <label id="image-input" htmlFor="cardImage">
            <h3>Imagem</h3>
            <input name="cardImage" type="text" required value={cardImage} onChange={onInputChange} onKeyUp={validation} />
            <div className={styles.imgLink}></div>
          </label>
        </section>

        <label className={styles.inputSelect} htmlFor="cardRare">
          <h3>Raridade</h3>
          <select name="cardRare" className="select-input" value={cardRare} onChange={onInputChange} onKeyUp={validation}>
            <option value="Normal">Normal</option>
            <option value="Raro">Raro</option>
            <option value="Muito Raro">Muito Raro</option>
          </select>
        </label>

        <div className={styles.formBottom}>
          {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <TrunfoCheckbox cardTrunfo={cardTrunfo} onInputChange={onInputChange} />}
          <button type="submit" disabled={isSaveButtonDisabled} onClick={onSaveButtonClick}>
            Salvar
          </button>
        </div>
      </form>
    );
}