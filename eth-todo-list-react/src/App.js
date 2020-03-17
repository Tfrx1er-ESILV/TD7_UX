import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'


class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    this.setState({ todoList })
    const name = await todoList.methods.name().call()
    this.setState({ name })
    const BlockNumber = await web3.eth.getBlockNumber()
    this.setState({BlockNumber})
    const ChainId = await web3.eth.net.getId()
    this.setState({ChainId})
    const NumberOfToken = await todoList.methods.token_number().call()
    this.setState({NumberOfToken})

  }
  getResponse(content) {
    //this.setState({ loading: true })
    //this.state.todoList.methods.createTask(content).send({ from: this.state.account })
    //.once('receipt', (receipt) => {
    //  this.setState({ loading: false })
    //})
    //var Owner = await todoList.methods.ownerOf(content)
    //this.setState({Owner})
    //var tokenId = content
    //this.setState({tokenId})
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
        <div className="container">
          <h1>Contract name : {this.state.name}  &nbsp;  &nbsp;  &nbsp;  &nbsp;    Group : Theophile & ronan</h1>
          <p>Last Block : {this.state.BlockNumber} &nbsp;  &nbsp; ChainId : {this.state.ChainId}</p>
          <p>The contract {this.state.name} owns {this.state.NumberOfToken} tokens.</p>
          <p>Your account: {this.state.account}</p>
          <p></p>
          <p></p>
          <form onSumbit = {(event) => {
            event.preventDefault()
            this.props.getResponse(this.task.value)
          }}>
              <input id="adress" type="text" className="form-control" placeholder="Write the token Id..." required />
              <input type="submit" hidden="" />
            </form>
            <p>The owner of {this.state.tokenId} is {this.state.Owner}</p>
        </div>
    );
  }
}

export default App;