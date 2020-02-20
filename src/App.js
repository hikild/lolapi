import React, { Component } from 'react';
import { Container, Item, Card, Button, Text } from './style';
import axios from 'axios';

const baseUrl = ' http://localhost:3000';

class App extends Component {
    state = {
        champions: [],
        show: "",
        text: "Open",
        isOpen: false,
      }

    showQuote = () => {
      this.setState({ show: "block",
      text: "Close"}) 
    }

    componentDidMount() {
        const url = `${baseUrl}/champions/`;
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState( { champions: data })
        })
    }

    render() {
      return(
        <Container>
          {this.state.champions.map((champion) => (
          <Item inputColor="#fff" key={champion.id} >
            <Card>
            <img src={champion.image} alt="avatar" />
            <h1>{champion.name}</h1>
            <p>City: {champion.city}</p>
            <Text displayText={this.state.show}>{champion.quote}</Text>
            </Card>
          </Item>
          ))}
          <Button inputBackgroundColor="#e06096" inputColor="#fff" onClick={this.showQuote}>{this.state.text} Quote</Button>
        </Container>
      );
    }
}

export default App;