import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/portfolio.jpg';
import Portfolio from '../Common/Portfolio';


class PortFolio extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="Portfolio"
                    subtitle="It's really a great portfolio"
                    showButton={false}
                    image={image}
                />

                <Portfolio />
                    
            </div>
        )
    }
}


export default PortFolio