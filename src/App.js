import React from 'react';

import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "3d280b0f6dmsh93be8d72373e104p16276ajsn81158e8d0d9d";

class App extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <Form/>
                <Weather/>
            </div>
        );
    };
};


export default App;