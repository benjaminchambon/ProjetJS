import React from 'react';
import Router from 'react-router';


const main = React.createClass({
    render(){
        return (
           <div>
              {React.cloneElement(this.props.children, this.props)}
           </div>
        )
    }
});

export default main;