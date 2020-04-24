import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    // if(this.state.persons.length <= 2){
    //   assignedClasses.push(classes.red);
    // }
    // if(this.state.persons.length <= 1){
    //   assignedClasses.push(classes.bold);
    // }
    // if(this.state.persons.length >2){
    //   assignedClasses.push(classes.green);
    // }

    return (
        <div className="classes.Cockpit">
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          </div>
    )
};

export default cockpit ;
