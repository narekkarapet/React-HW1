import { Component } from "react";
import './style.css'


export default class Ex3App extends Component {

    constructor() {
        super()
        this.state ={
            searchInput: '',
            data: {},
        }
    }

    componentDidUpdate(prevProps, prevState) {

        const { searchInput } = this.state

        if (prevState.searchInput !== searchInput) {

             if (searchInput.length === 2) {
                    fetch(`https://corona-api.com/countries/${searchInput}`)
                     .then(res => res.json())
                     .then(res => this.setState({data: res.data}))
                }
          }
    }



    onChangeOrInp = (evt) => {
        this.setState({ searchInput: evt.target.value })
    }


    render() {
        const { searchInput, data } = this.state

        let population = '';
        let name = ''
        if(data !== undefined) {
            population = data.population
            name = data.name
        }


        return(
            <>
                <h3>countries in population corona </h3>
                <input 
                      onChange={this.onChangeOrInp}
                      className='ex3input' 
                      value={searchInput}
                      maxLength={2}
                      type='text'
                /> 
                <h2> {name && (searchInput.length === 2)? `countries: ${name}  population:  ${population}` : ''} </h2>
            </>
        )
    }
}