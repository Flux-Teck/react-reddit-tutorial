import React from 'react';
import './Meme.css';

class Meme extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="Meme-root">
        <h3>Meme</h3>
        <img class="Meme-img" alt="Meme" src={data.url} />
      </div>
    );
  }
}

export default Meme;
