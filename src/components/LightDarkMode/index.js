// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const buttonText = isSubscribed ? 'Light Mode' : 'Dark Mode'
    const rakesh = isSubscribed ? 'card' : 'card1'

    return (
      <div className="container">
        <div className={`${rakesh}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onSubscribe}>
            {`${buttonText}`}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
