import { Component } from 'react';
import './App.css';

export default class App extends Component {

    constructor() {
        super()
        
        this.state = {
            count: 0,
            maxValue: 0,
            minValue: 0,
            step: 0,
            disabledPlus: false,
            disabledMinus: false,
            allCount: 0,
            step: 0
        }

    }

    componentDidUpdate(prevProp, prevState) {
        
        if (prevState.allCount !== this.state.allCount) {
            if (+this.state.step === +this.state.allCount) {
                this.setState({disabledPlus: true})
                this.setState({disabledMinus: true})
            }
        }
    }
  
  countAdd = () => {
    const { count,  maxValue } = this.state

    this.setState({ count: this.state.count +1, allCount: this.state.allCount +1 })
    if (count === +maxValue -1) {
        this.setState({disabledPlus: true})
    }
  }
  
  countMin = () => {
    const { count,  minValue } = this.state

    this.setState({ count: this.state.count -1, allCount: this.state.allCount +1 })

    if (count === +minValue +1) {
        this.setState({disabledMinus: true})
    }

    if (minValue === 0) {
        if (count <= 0) {
            this.setState({disabledMinus: true})
        }
    }
  }  

  

  countReset = () => {
    this.setState({ count: 0, disabledPlus: false, disabledMinus: false })
  }  

  maxVal = (evt) => {
     this.setState({maxValue: evt.target.value})
  }
  minVal = (evt) => {
    this.setState({minValue: evt.target.value})
  }
  step = (evt) => {
    this.setState({step: evt.target.value})
  }


  render () {
    const { count, disabledPlus, disabledMinus, maxValue, minValue, allCount, step} = this.state
    // console.log(count, 'count', +maxValue, 'maxValue', disabledMinus, 'disabledPlus', disabledMinus)
    // console.log('step', step, 'allCount', allCount, disabledMinus)
    
    return (
        <>
            <div className="app">
    
              <h2>Counter App</h2>
              <div className="counter-value">
                <strong>{ count }</strong>
              </div>
              <div className='buttons'>
                <div>
                  <button className={disabledPlus ? 'db' : 'btnApp'} disabled={disabledPlus} onClick={this.countAdd}>+</button>
                </div>
                <div>
                  <button className={disabledMinus ? 'db' : 'btnApp'} disabled={disabledMinus} onClick={this.countMin}>-</button>
                </div>
                <div>
                  <button className='btnApp' onClick={this.countReset}>0</button>
                </div>
               </div>
      

            </div>

            <div className='inputs'>
                <input onChange={this.maxVal}  type='number'  value={maxValue} /> 
                 <span>max.W</span>
                <input onChange={this.minVal}  type='number'  value={minValue} />
                 <span>min.W</span>
                <input onChange={this.step}  type='number'  value={step} />
                 <span>step</span>
            </div>
        </>
    )
  }
  
}

