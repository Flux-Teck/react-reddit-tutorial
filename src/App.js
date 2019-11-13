import React from 'react';
import './App.css';

import Meme from './components/Meme';

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch("https://www.reddit.com/r/pewdiepie.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data,
        });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          Reddit Web
        </header>
  
        <div className="App-memes">
          {data && data.children.map(child => (
            <div className="App-meme">
              <Meme data={child.data} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
