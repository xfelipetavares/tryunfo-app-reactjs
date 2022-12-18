import React from 'react';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';
import RemoveCardButton from './components/RemoveCardButton';
import logo_trybe from './assets/logo_tryunfo.png';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    atribNameField1: '',
    atribNameField2: '',
    atribNameField3: '',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: JSON.parse(localStorage.getItem('savedCards')) || [],
    savingCard: [],
    counter: 210,
  };

  handleChange = ({ target: { value, name, type, checked } }) => {
    const isChecked = type === 'checkbox' ? checked : value;
    const { hasTrunfo, cardTrunfo } = this.state;
    if (name === 'cardTrunfo') {
      if (!hasTrunfo && !cardTrunfo) {
        this.setState({ hasTrunfo: true });
        this.setState({ cardTrunfo: true });
      } else {
        this.setState({ hasTrunfo: false });
        this.setState({ cardTrunfo: false });
      }
    } else {
      this.setState({ [name]: isChecked });
    }
  };

  validator = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const param = 210;
    const sum = +cardAttr1 + +cardAttr2 + +cardAttr3 <= param;

    const counter = param - (+cardAttr1 + +cardAttr2 + +cardAttr3)
    const forms = document.getElementById('forms');

    this.setState({ counter: counter });
    if (sum && forms.checkValidity()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  changeAttributNameField = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  cleaner = () => {
    this.setState({ cardName: '' });
    this.setState({ cardDescription: '' });
    this.setState({ cardAttr1: 0 });
    this.setState({ cardAttr2: 0 });
    this.setState({ cardAttr3: 0 });
    this.setState({ atribNameField1: '' });
    this.setState({ atribNameField2: '' });
    this.setState({ atribNameField3: '' });
    this.setState({ cardImage: '' });
    this.setState({ cardRare: 'Normal' });
    this.setState({ cardTrunfo: false });
    this.setState({ isSaveButtonDisabled: true });
  };

  saveCards = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, atribNameField1, atribNameField2, atribNameField3 } = this.state;
    const cards = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      atribNameField1,
      atribNameField2,
      atribNameField3,
    };

    const jatenho = JSON.parse(localStorage.getItem('savedCards')) || []
    jatenho.push(cards)
    localStorage.setItem('savedCards', JSON.stringify(jatenho))
    this.setState({savedCards: JSON.parse(localStorage.getItem('savedCards'))})
    this.cleaner();
  };

  deleteCard = ({ target }) => {
    const { savedCards } = this.state;
    const newCardsSaved = savedCards.filter((e, i) => i !== +target.value);
    console.log(newCardsSaved);
    localStorage.setItem('savedCards', JSON.stringify(newCardsSaved))
    this.setState({
      hasTrunfo: newCardsSaved.some((e) => e.cardTrunfo),
      savedCards: JSON.parse(localStorage.getItem('savedCards')),
    });
  };

  render() {
    const { isSaveButtonDisabled } = this.state;
    const { savedCards } = this.state;
    return (
      <>
        <header>
          <img className="logo" src={logo_trybe} alt="" />
        </header>
        <main>
          <section className="main-top">
            <div className="left">
              <Form onInputChange={this.handleChange} changeAttributNameField={this.changeAttributNameField} isSaveButtonDisabled={isSaveButtonDisabled} onSaveButtonClick={this.saveCards} validation={this.validator} {...this.state} />
            </div>
            <div className="right">
              <h2>Preview</h2>
              <Card {...this.state} />
            </div>
          </section>
          <section className="main-bottom">
            <h2 className="titleDeck">TODAS AS CARTAS</h2>
            <Filter />
            <ul className="deck">
              {savedCards.map((cards, i) => (
                <li key={i}>
                  <Card {...cards} />
                  <RemoveCardButton value={i} deleteCard={this.deleteCard} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </>
    );
  }
}

export default App;
