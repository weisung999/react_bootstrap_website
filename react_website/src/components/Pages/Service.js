import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/services.jpg';
import Services from '../Common/Services';


class Service extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="Services"
                    subtitle="It's really a great services"
                    showButton={false}
                    image={image}
                />

                <Services />
                    
            </div>
        )
    }
}


export default Service