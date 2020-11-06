import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/team.jpg';
import Team from '../Common/Team';


class TEAM extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="Team"
                    subtitle="It's really a great Team"
                    showButton={false}
                    image={image}
                />

                <Team />
                    
            </div>
        )
    }
}


export default TEAM