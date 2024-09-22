// src/pages/JoyrideDemo.js
import React, { useState, useEffect } from 'react';
import Joyride from 'react-joyride';

const JoyrideDemo = () => {
    const [isJoyrideActive, setIsJoyrideActive] = useState(false);

    const steps = [
        {
            target: '#notification',
            content: 'View Your Notifications from here',
        },
        {
            target: '#menu-toggle',
            content: 'Show and hide the menu bar',
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
        // Check if the tour has already been completed (or started) in localStorage
        const tourCompleted = localStorage.getItem('joyrideCompleted');

        if (!tourCompleted) {
            // Start Joyride if not already completed
            setIsJoyrideActive(true);
        }
    }, []);

    const handleJoyrideCallback = (data) => {
        const { status } = data;

        if (status === 'finished' || status === 'skipped') {
            // Mark the tour as completed in localStorage when finished or skipped
            localStorage.setItem('joyrideCompleted', true);
            setIsJoyrideActive(false); // Disable Joyride after completion
        }
    };

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
            {isJoyrideActive && (
                <Joyride
                    steps={steps}
                    continuous={true}
                    disableBeacon={false}
                    callback={handleJoyrideCallback}
                />
            )}
        </div>
    );
};

export default JoyrideDemo;
