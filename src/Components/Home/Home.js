import React from 'react'
import Typewriter from "typewriter-effect";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactIcon from '@mui/icons-material/MailOutlineRounded';
import "./Home.css";
import { Link } from 'react-scroll/modules';
// import Me from "../../img/me.png";

function handleClick(e) {
    e.preventDefault()
    window.open('https://www.github.com/ngmnhdc');
}

const Home = () => {
    return (
        <div id="home" className="home-wrapper">
            <h2 className="home__heading">Hello, my name is</h2>
            <h1 className="home__name">
                <Typewriter
                    options={ {
                        strings: ['Nguyễn Thái Minh Đức'],
                        autoStart: true,
                        loop: true,
                    } }
                />
            </h1>
            <p className="home__desc">
                Passionate about <span>Frontend Development</span> and <span>UX UI Design</span>. I am interested in designing and developing websites
                <br />specializing in creating stylish and modern websites.
            </p>
            <Stack className="home__btns" direction="row" spacing={ 2 }>
                <Button
                    className="btn github-btn"
                    variant="contained"
                    startIcon={ <GitHubIcon /> }
                    href="https://github.com/ngmnhdc"
                    onClick={ handleClick }>
                    See my work
                </Button>
                <Button
                    className="btn contact-btn"
                    variant="contained"
                    startIcon={ <ContactIcon /> }
                    href="#contact" >
                    Contact me
                </Button>
            </Stack>
        </div >
    );
};

export default Home;