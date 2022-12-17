import styles from './style.module.scss';

// interface propsTypes {
//   deleteCard: Function,
//   value: any,
// }

export default function RemoveCardButton(props) {
    const { deleteCard, value } = props;
    return (
      <button className={styles.deleteButton} onClick={deleteCard} type="button" value={value}>
        Excluir
      </button>
    );
}
