import React from 'react'
import Typewriter from "typewriter-effect";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactIcon from '@mui/icons-material/MailOutlineRounded';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { UilDribbble } from '@iconscout/react-unicons'
import AOS from 'aos'
import 'aos/dist/aos.css';
// import { Link } from 'react-scroll/modules';
import "./Home.css";
// import Me from "../../img/me.png";

function handleClick(e) {
    e.preventDefault()
    window.open(e.target.href);
}

const Home = () => {
    AOS.init()
    return (
        <div id="home" className="home-wrapper">
            <div className="home__left-wrapper" data-aos="fade-right" data-aos-duration="2000">
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
                    specializing in creating stylish and modern websites.
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
            </div>
            <div className="home__right-wrapper" data-aos="fade-left" data-aos-duration="2000">
                <Stack className="icon-btns" direction="column" spacing={ 1 }>
                    {/* <Button
                        // className="btn github-btn"
                        startIcon={ <GitHubIcon /> }
                        href="https://github.com/ngmnhdc"
                        onClick={ handleClick }>
                    </Button> */}
                    <a className="icon-btn icon-facebook" href="https://facebook.com/ngmnhdc">
                        <IconButton aria-label="facebook" color="inherit">
                            <FacebookIcon />
                        </IconButton>
                    </a>
                    <a className="icon-btn icon-instagram" href="https://instagram.com/ngmnhdc">
                        <IconButton aria-label="instagram" color="inherit">
                            <InstagramIcon />
                        </IconButton>
                    </a>
                    <a className="icon-btn icon-twitter" href="https://twitter.com/">
                        <IconButton aria-label="twitter" color="inherit">
                            <TwitterIcon />
                        </IconButton>
                    </a>
                    <a className="icon-btn icon-linkedin" href="https://linkedin.com/in/ngmnhdc/">
                        <IconButton aria-label="linkedin" color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a className="icon-btn icon-dribbble" href="https://dribbble.com/ngmnhdc">
                        <IconButton aria-label="dribbble">
                            <UilDribbble size="24" color="#EA4C89" />
                        </IconButton>
                    </a>
                </Stack>
            </div>
        </div >
    );
};

export default Home;