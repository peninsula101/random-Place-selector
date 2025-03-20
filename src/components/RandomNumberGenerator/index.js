import {Component} from 'react'

import './index.css'

const places = [
  {
    place: 'Kotakommala Vinayaka Devalayam',
  },
  {
    place: 'Kotha Veedhi Venkateswara Devalayam',
  },
  {
    place: 'Kaalamma Devalayam',
  },
  {
    place: 'Mitta Veedhi Anjaneya Swamy',
  },
]

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
    placeToVisit: '',
  }

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 3)
    const placeToAdd = places[newRandomNumber].place

    this.setState({randomNumber: newRandomNumber})
    this.setState({placeToVisit: placeToAdd})
  }

  render() {
    const {randomNumber, placeToVisit} = this.state
    console.log(randomNumber, placeToVisit)

    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Place to Visit</h1>
          <p className="description">Go here and have darshan</p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{placeToVisit}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
