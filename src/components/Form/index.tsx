import React from 'react';
import styles from './style.module.scss';
import TrunfoCheckbox from '../TrunfoCheckbox';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, isSaveButtonDisabled, cardTrunfo, onInputChange, onSaveButtonClick, hasTrunfo, validation } = this.props;

    return (
      <form id="forms" className={styles.form}>
        <h2>ADICIONE UMA NOVA CARTA</h2>
        <label className={styles.nomeInput} htmlFor="cardName">
          <h3>Nome</h3>
          <input type="text" required name="cardName" data-testid="name-input" value={cardName} onChange={onInputChange} onKeyUp={validation} />
        </label>
        <label className={styles.descrInput} htmlFor="cardDescription">
          <h3>Descrição</h3>
          <textarea name="cardDescription" cols="25" rows="3" required maxLength={100} data-testid="description-input" value={cardDescription} onChange={onInputChange} onKeyUp={validation} />
        </label>

        <section className={styles.atributos}>
          <label htmlFor="cardAttr1">
            <h3>Atributo 1</h3>
            <input name="cardAttr1" type="number" required data-testid="attr1-input" value={cardAttr1} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
          </label>
          <label htmlFor="cardAttr2">
            <h3>Atributo 1</h3>
            <input name="cardAttr2" type="number" required data-testid="attr2-input" value={cardAttr2} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
          </label>
          <label htmlFor="cardAttr3">
            <h3>Atributo 2</h3>
            <input name="cardAttr3" type="number" required data-testid="attr3-input" value={cardAttr3} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
          </label>
          <label id="image-input" htmlFor="cardImage">
            <h3>Imagem</h3>
            <input name="cardImage" type="text" required data-testid="image-input" value={cardImage} onChange={onInputChange} onKeyUp={validation} />
          </label>
        </section>

        <select name="cardRare" className='select-input' value={cardRare} onChange={onInputChange} data-testid="rare-input" onKeyUp={validation}>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <div>
          {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <TrunfoCheckbox cardTrunfo={cardTrunfo} onInputChange={onInputChange} />}
          <button type="submit" data-testid="save-button" disabled={isSaveButtonDisabled} onClick={onSaveButtonClick}>
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
