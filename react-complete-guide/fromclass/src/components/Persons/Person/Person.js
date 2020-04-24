import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render(){
        console.log('[Person.js] rendering..');
    return (
        // <div className='Person' style={style}>
        // Note now since use Aux, styling will be ignored because we used to include styling in div className
        <Aux>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
            ref={this.inputElementRef}
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name} />
        </Aux>
        );
    }
    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func
};

export default withClass(Person,classes.Person);