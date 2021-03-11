import React from 'react';
import Container from '@material-ui/core/Container';
import bannerImg from '../assets/images/banner.png'
const Header = () => {
    return (
        <div>
                 <Container maxWidth={false}>
        <img src={bannerImg} alt=""/>
        </Container> 
        </div>
    );
};

export default Header;