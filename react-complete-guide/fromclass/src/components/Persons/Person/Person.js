import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary'

class Person extends Component {
    render(){
        console.log('[Person.js] rendering..');
    return (
        // <div className='Person' style={style}>
        // Note now since use Aux, styling will be ignored because we used to include styling in div className
        <Aux>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name} />
        </Aux>
        );
    }
    
};

export default Person;