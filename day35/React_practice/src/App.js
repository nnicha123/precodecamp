import React, {useState} from 'react';

const App = () => {
    return <HeadLine/>;
};

const HeadLine = () => {
    const [greeting,setGreeting] = useState('Hello Function COmponent');
    return(
        <div>
            <h1>{greeting}</h1>
            <input 
            type="text"
            value={greeting}
            onChange={event => setGreeting(event.target.value)}/>
        </div>
    )
};
export default App;

