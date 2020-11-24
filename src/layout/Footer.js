import React from 'react';
import {Container} from 'reactstrap';

const Footer = () => {
    return(
        <Container
         fluid 
         className="text-center mt-5 bg-info text-white text-uppercase fixed-bottom p-3"
        >
          Pranav's Github App With Firebase
        </Container>
    );
}

export default Footer;