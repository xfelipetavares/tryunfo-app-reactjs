// interface propsTypes {
//   cardTrunfo: boolean,
//   onInputChange: Function,
// }

export default function TrunfoCheckbox(props){
    const { cardTrunfo, onInputChange } = props;
    return (
      <label htmlFor="cardTrunfo">
        <input name="cardTrunfo" id="cardTrunfo" type="checkbox" data-testid="trunfo-input" checked={cardTrunfo} onChange={onInputChange} />
        Super Trunfo
      </label>
    );
}
