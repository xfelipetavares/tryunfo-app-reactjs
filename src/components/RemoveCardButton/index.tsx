import React from 'react';

class RemoveCardButton extends React.Component {
  render() {
    const { deleteCard, value } = this.props;
    return (
      <button data-testid="delete-button" onClick={deleteCard} type="button" value={value}>
        Delete
      </button>
    );
  }
}

export default RemoveCardButton;
