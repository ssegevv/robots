import React, {Component} from 'react';
import CardArray from '../components/cardArray';
import SearchBar from '../components/SearchCmpnnt';
import Scroll from '../components/scroll';

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({searchfield:e.target.value})
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then(users => {
      this.setState({robots: users})
    })
  }

  render() {
    const {robots, searchfield} = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
       })
    return (!robots.length) ? 
    <h1>Loading</h1> :

      (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBar searchChange = {this.onSearchChange}/>
          <Scroll>
            <CardArray robots = {filteredRobots} />
          </Scroll>
        </div>
      ) 
    }
  }

export default App;