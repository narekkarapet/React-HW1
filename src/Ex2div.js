

import { Component } from "react";

export default class Ex2Div extends Component {

    constructor(props) {
        super(props)
    }

    componentWillUnmount() {

        const { unmountCountPlus } = this.props
        unmountCountPlus()
    }


    render() {

        const { unmountCount } = this.props

        return(
            <>
               <div className="ex2container">
                   <div>
                       <span> unmount count: {unmountCount} </span>
                   </div>
               </div>
            </>
        )
    }
}