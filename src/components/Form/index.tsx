import React from 'react';
import './style.module.css';
import TrunfoCheckbox from '../TrunfoCheckbox';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, isSaveButtonDisabled, cardTrunfo, onInputChange, onSaveButtonClick, hasTrunfo, validation } = this.props;

    return (
      <form id="forms">
        <input placeholder="Name" type="text" required name="cardName" data-testid="name-input" value={cardName} onChange={onInputChange} onKeyUp={validation} />
        <textarea name="cardDescription" placeholder="Descrição" cols="25" rows="1" required maxLength={100} data-testid="description-input" value={cardDescription} onChange={onInputChange} onKeyUp={validation} />
        <input name="cardAttr1" placeholder="Atributo 1 (0 ~ 90)" type="number" required data-testid="attr1-input" value={cardAttr1} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
        <input name="cardAttr2" placeholder="Atributo 2 (0 ~ 90)" type="number" required data-testid="attr2-input" value={cardAttr2} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
        <input name="cardAttr3" placeholder="Atributo 3 (0 ~ 90)" type="number" required data-testid="attr3-input" value={cardAttr3} onChange={onInputChange} onKeyUp={validation} max={90} min={0} />
        <input name="cardImage" placeholder="Cole o link de uma imagem aqui!" type="text" required data-testid="image-input" value={cardImage} onChange={onInputChange} onKeyUp={validation} />
        <select name="cardRare" value={cardRare} onChange={onInputChange} data-testid="rare-input" onKeyUp={validation}>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <TrunfoCheckbox cardTrunfo={cardTrunfo} onInputChange={onInputChange} />}
        <button type="submit" data-testid="save-button" disabled={isSaveButtonDisabled} onClick={onSaveButtonClick}>
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
