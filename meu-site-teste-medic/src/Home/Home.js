import React from 'react'
import Header from '../components/Header';
import Imagem from '../components/Imagem';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Container from '../components/Container';
import './Home.css'
import { Logo } from '../components/Logo/styled';


const Home = () => {
    return (
        <div>
            <Header />
            <Logo/>
            <Nav/>
            <Imagem/>
            <Container/>
            <Footer />
        </div>
    )
}
export default Home