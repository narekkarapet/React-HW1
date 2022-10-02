import { Component } from "react";
import Ex2Div from "./Ex2div";



export default class Ex2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isFlag: true,
            unmountCount: 0
        }
    }


    isFlagToggle = () => {
        const { isFlag } = this.state
        this.setState({isFlag: !isFlag})
    }

    unmountCountPlus = () => {
        const { unmountCount } = this.state
        this.setState({unmountCount: unmountCount +1})
    }


    render() {

        const { isFlag, unmountCount } = this.state

        return(
            <div>
                
               <button onClick={this.isFlagToggle} className={isFlag ? 'btn': 'btnShow'}>
                  {isFlag ? 'X' : 'show'}
               </button>

               {isFlag && <Ex2Div unmountCount={unmountCount} unmountCountPlus={this.unmountCountPlus}/>}

            </div>
        )
    }
}