// src/pages/JoyrideDemo.js
import React, { useState, useEffect } from 'react';
import Joyride from 'react-joyride';


// Official Link https://react-joyride.com/
const JoyrideDemo = () => {
    const [run, setRun] = useState(false);

    const steps = [
        {
            target: '#card1',
            content: 'This is Card 1!',
        },
        {
            target: '#card2',
            content: 'This is Card 2!',
        },
        {
            target: '#card3',
            content: 'This is Card 3!',
        },
        {
            target: '#card4',
            content: 'This is Card 4!',
        },
        {
            target: '#card5',
            content: 'This is Card 5!',
        },
        {
            target: '#card6',
            content: 'This is Card 6!',
        },
    ];

    useEffect(() => {
        setRun(true); // Start the tour when the component mounts
    }, []);

    return (
        <div>
            <h1>Welcome to the React Joyride Demo!</h1>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <div id="card1" className="card">Card 1</div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div id="card2" className="card">Card 2</div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div id="card3" className="card">Card 3</div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div id="card4" className="card">Card 4</div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div id="card5" className="card">Card 5</div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div id="card6" className="card">Card 6</div>
                        </div>
                    </div>
                </div>

            </div>
            <Joyride
                steps={steps}
                run={run}
                continuous={true}
                showProgress={true}
                showSkipButton={true}
                styles={{
                    options: {
                        arrowColor: '#e3ffeb',
                        backgroundColor: '#e3ffeb',
                        overlayColor: 'rgba(79, 26, 0, 0.4)',
                        primaryColor: '#000',
                        textColor: '#004a14',
                        zIndex: 1000,
                    },
                }} />
        </div>
    );
};

export default JoyrideDemo;
