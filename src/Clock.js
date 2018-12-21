import React from 'react';

// class Clock extends Component{
const Clock = (props) =>{
    if(props.val === 10){
    return (
            <Login />
        );            
    }
    else{
        return (<Logout />);
    }
}

function Login(){
    return (<div>
        <h3>Values are same</h3>
    </div>);
}

function Logout(){
    return (<div>
        <h3>Values are different</h3>        
    </div>);
}

export default Clock;