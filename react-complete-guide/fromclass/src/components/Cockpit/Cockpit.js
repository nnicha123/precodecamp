import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // Used all the time combines did mount and shouldupdate
    useEffect(() =>{
        console.log('[Cockpit.js] useEffect');
        // can send http request here
        // fake http request 
        // only run when props person change (add second argument)
        setTimeout(() => {
            alert('Save data to cloud!');
        },1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
     },[]);

     useEffect(() => {
         console.log('[Cockpit.js] 2nd useEffect');
         return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
         }
     })
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    if (props.personsLength > 2) {
        assignedClasses.push(classes.green);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <h2>{props.title}</h2>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>

    );
};

// Wrap functional components like cockpit to optimise (it does not need to update with every change)
export default React.memo(cockpit);