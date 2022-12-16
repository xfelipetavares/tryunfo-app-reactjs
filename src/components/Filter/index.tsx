import styles from './style.module.scss';

export default function Filter() {
  return (
    <div className={styles.filter}>
      <label>
        <h3>Filtros de busca</h3>
        <input placeholder='Nome da carta' type="text" />
      </label>

      <select defaultValue='Raridade'>
        <option disabled value="Raridade"> Selecione Raridade</option>
        <option value="Normal">Normal</option>
        <option value="Raro">Raro</option>
        <option value="Muito Raro">Muito Raro</option>
      </select>

      <label>
        <input type="checkbox" />
        <h3 className={styles.titleST}>Super Trunfo</h3>
      </label>
    </div>
  );
}
