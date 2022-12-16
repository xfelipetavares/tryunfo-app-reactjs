import React from 'react';
import styles from './style.module.scss';

class RemoveCardButton extends React.Component {
  render() {
    const { deleteCard, value } = this.props;
    return (
      <button className={styles.deleteButton} onClick={deleteCard} type="button" value={value}>
        Excluir
      </button>
    );
  }
}

export default RemoveCardButton;
