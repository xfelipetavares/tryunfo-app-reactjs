import React from 'react';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';
import RemoveCardButton from './components/RemoveCardButton';
import logo_trybe from './assets/logo_tryunfo.png'

class App extends React.Component {
  state = {
    cardName: 'JavaScript',
    cardDescription: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. É uma das três principais tecnologias da World Wide Web.',
    cardAttr1: '90',
    cardAttr2: '90',
    cardAttr3: '30',
    cardImage: 'https://conteudo.imguol.com.br/c/esporte/08/2022/11/24/richarlison-se-lamenta-no-jogo-do-brasil-contra-a-servia-pela-copa-do-mundo-1669320823054_v2_450x450.jpg',
    cardRare: 'Normal',
    cardTrunfo: true,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [
      {
        cardName: 'JavaScript',
        cardDescription: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. É uma das três principais tecnologias da World Wide Web.',
        cardAttr1: '90',
        cardAttr2: '90',
        cardAttr3: '30',
        cardImage: 'https://conteudo.imguol.com.br/c/esporte/08/2022/11/24/richarlison-se-lamenta-no-jogo-do-brasil-contra-a-servia-pela-copa-do-mundo-1669320823054_v2_450x450.jpg',
        cardRare: 'Normal',
        cardTrunfo: true,
      },
      {
        cardName: 'JavaScript',
        cardDescription: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. É uma das três principais tecnologias da World Wide Web.',
        cardAttr1: '90',
        cardAttr2: '90',
        cardAttr3: '30',
        cardImage: 'https://conteudo.imguol.com.br/c/esporte/08/2022/11/24/richarlison-se-lamenta-no-jogo-do-brasil-contra-a-servia-pela-copa-do-mundo-1669320823054_v2_450x450.jpg',
        cardRare: 'Normal',
        cardTrunfo: true,
      },
      {
        cardName: 'JavaScript',
        cardDescription: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. É uma das três principais tecnologias da World Wide Web.',
        cardAttr1: '90',
        cardAttr2: '90',
        cardAttr3: '30',
        cardImage: 'https://conteudo.imguol.com.br/c/esporte/08/2022/11/24/richarlison-se-lamenta-no-jogo-do-brasil-contra-a-servia-pela-copa-do-mundo-1669320823054_v2_450x450.jpg',
        cardRare: 'Normal',
        cardTrunfo: true,
      },
      {
        cardName: 'JavaScript',
        cardDescription: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. É uma das três principais tecnologias da World Wide Web.',
        cardAttr1: '90',
        cardAttr2: '90',
        cardAttr3: '30',
        cardImage: 'https://conteudo.imguol.com.br/c/esporte/08/2022/11/24/richarlison-se-lamenta-no-jogo-do-brasil-contra-a-servia-pela-copa-do-mundo-1669320823054_v2_450x450.jpg',
        cardRare: 'Normal',
        cardTrunfo: true,
      },
      {
        cardName: 'JavaScript',
        cardDescription: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. É uma das três principais tecnologias da World Wide Web.',
        cardAttr1: '90',
        cardAttr2: '90',
        cardAttr3: '30',
        cardImage: 'https://conteudo.imguol.com.br/c/esporte/08/2022/11/24/richarlison-se-lamenta-no-jogo-do-brasil-contra-a-servia-pela-copa-do-mundo-1669320823054_v2_450x450.jpg',
        cardRare: 'Normal',
        cardTrunfo: true,
      },
      {
        cardName: 'JavaScript',
        cardDescription: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. É uma das três principais tecnologias da World Wide Web.',
        cardAttr1: '90',
        cardAttr2: '90',
        cardAttr3: '30',
        cardImage: 'https://conteudo.imguol.com.br/c/esporte/08/2022/11/24/richarlison-se-lamenta-no-jogo-do-brasil-contra-a-servia-pela-copa-do-mundo-1669320823054_v2_450x450.jpg',
        cardRare: 'Normal',
        cardTrunfo: true,
      },
      {
        cardName: 'JavaScript',
        cardDescription: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. É uma das três principais tecnologias da World Wide Web.',
        cardAttr1: '90',
        cardAttr2: '90',
        cardAttr3: '30',
        cardImage: 'https://conteudo.imguol.com.br/c/esporte/08/2022/11/24/richarlison-se-lamenta-no-jogo-do-brasil-contra-a-servia-pela-copa-do-mundo-1669320823054_v2_450x450.jpg',
        cardRare: 'Normal',
        cardTrunfo: true,
      },
    ],
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
    const param = 211;
    const sum = +cardAttr1 + +cardAttr2 + +cardAttr3 < param;
    const forms = document.getElementById('forms');
    if (sum && forms.checkValidity()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  cleaner = () => {
    this.setState({ cardName: '' });
    this.setState({ cardDescription: '' });
    this.setState({ cardAttr1: 0 });
    this.setState({ cardAttr2: 0 });
    this.setState({ cardAttr3: 0 });
    this.setState({ cardImage: '' });
    this.setState({ cardRare: 'Normal' });
    this.setState({ cardTrunfo: false });
    this.setState({ isSaveButtonDisabled: true });
  };

  saveCards = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, savedCards, cardTrunfo } = this.state;
    const cards = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    savedCards.push(cards);
    this.cleaner();
  };

  deleteCard = ({ target }) => {
    console.log(target.value);
    const { savedCards } = this.state;
    const newCardsSaved = savedCards.filter((e, i) => i !== +target.value);
    console.log(newCardsSaved);
    this.setState({
      hasTrunfo: newCardsSaved.some((e) => e.cardTrunfo),
      savedCards: newCardsSaved,
    });
  };

  render() {
    const { isSaveButtonDisabled } = this.state;
    const { savedCards } = this.state;
    return (
      <>
        <header>
          <img className='logo' src={logo_trybe} alt="" />
        </header>
        <main>
          <section className="main-top">
            <div className="left">
              <Form onInputChange={this.handleChange} isSaveButtonDisabled={isSaveButtonDisabled} onSaveButtonClick={this.saveCards} validation={this.validator} {...this.state} />
            </div>
            <div className="right">
              <h2>Preview</h2>
              <Card {...this.state} />
            </div>
          </section>
          <section className="main-bottom">
            <h2 className='titleDeck'>TODAS AS CARTAS</h2>
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
