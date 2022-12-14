import React from 'react';

class TrunfoCheckbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        <input name="cardTrunfo" id="cardTrunfo" type="checkbox" data-testid="trunfo-input" checked={cardTrunfo} onChange={onInputChange} />
        Super Trunfo
      </label>
    );
  }
}

export default TrunfoCheckbox;
