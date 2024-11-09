import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    render(){
        return (
            <div style={{'border' : '1px solid black'}}>
                <h1>Class Based Component</h1>
                <h3>Name : {this.props.name}</h3>
                <h3>Address : {this.props.address}</h3>
                <h3>Email : {this.props.email}</h3>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {() => {
                    // you can't update state variable directly
                    this.setState({
                        count:this.state.count + 1
                    })
                }}>HIT ME</button>
            </div>
          )
    }
};

export default ProfileClass