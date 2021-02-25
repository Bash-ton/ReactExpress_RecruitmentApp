import { Component } from "react";


class FirstView extends Component{
    constructor(props){
    super(props);
    this.state={    
        response:""
    }
}

    handleSubmit=(e)=>{
       this.props.apiCall.testGET().then(result=> this.setState({
          response: JSON.stringify(result) }))
    }

 
    render(){
        return(
            <div>
            <button onClick={()=>this.handleSubmit()}>Get DATABASE</button>
            <div>{this.state.response}</div>
            </div>
        )
    }
}
export default FirstView;