import React from "react";


class Logout extends React.Component{


    constructor(props){

        super(props);

        this.state={
             userData:'dummyUser'
        }

    }


  async  componentDidMount(){


    const data=await fetch('some api call');

     const jsonData=await data.json();

    this.setState({userData:jsonData})

    }



    render(){

        return(
            <div>
                <h1>{this.props.name} is logouted from this website</h1>

                <h4>Count is : {this.state.count1}</h4>

                    <h2>Place : {this.state.userData}</h2>

                <button onClick={()=> this.setState({
                    count1:1, 
                })}>SetCount</button>
            </div>
        )
    }
}
 


export default Logout;