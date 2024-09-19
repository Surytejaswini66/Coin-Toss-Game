// Write your code here
import React, {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
    totalCount: 0,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const isHeads = tossResult === 0
    const resultImage = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    this.setState(prevState => ({
      resultImage,
      headsCount: isHeads ? prevState.headsCount + 1 : prevState.headsCount,
      tailsCount: isHeads ? prevState.tailsCount : prevState.tailsCount + 1,
      totalCount: prevState.totalCount + 1,
    }))
  }

  render() {
    const {resultImage, headsCount, tailsCount, totalCount} = this.state

    return (
      <div className="coin-toss-container">
        <h1 className="heading">Coin Toss Game</h1>
        <p className="description">Heads (or) Tails</p>
        <img
          src={resultImage}
          alt="toss result"
          className="toss-result-image"
        />
        <button type="button" className="toss-button" onClick={this.onTossCoin}>
          Toss Coin
        </button>
        <div className="counts-container">
          <p className="count">Total: {totalCount}</p>
          <p className="count">Heads: {headsCount}</p>
          <p className="count">Tails: {tailsCount}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
