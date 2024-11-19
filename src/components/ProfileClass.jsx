import React from "react";

class ProfileClass extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            userDetails:null
        }
        // console.log('child constructor called!!')
    }

    // this is same as useEffect in functional components

    //after component is rendered
    async componentDidMount(){
        console.log('uulala');
       const data = await fetch('https://api.github.com/users/Ekansh0801');
        const resData = await data.json();
        console.log(resData);
        this.setState({
            userDetails:resData
        })
    }

    // only during updation
    componentDidUpdate(){
        console.log('lalauu')
    }

    //after we leave the page
    componentWillUnmount(){
        console.log('Unmounted!!')
    }


    render(){
        // console.log('child render called!!');
        return this.state.userDetails === null ? <h1>Loading.....</h1> : (
            <div style={{'border' : '1px solid black'}}>
                <h1>Class Based Component</h1>
                <h3>Name : {this.state.userDetails.name}</h3>
                <h3>Location : {this.state.userDetails.location}</h3>
                {/* <h3>Email : {this.state.userDetails.email}</h3> */}
                <img src={this.state.userDetails.avatar_url}/>
                <h1>Count : {this.state.userDetails.count}</h1>
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