import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import AOS from 'aos'
import 'aos/dist/aos.css';
import AboutImage from '../../Images/avt.jpg';
import './About.css'

function handleDownload(e) {
    e.preventDefault()
    window.open(e.target.href);
}

function About() {
    AOS.init()
    return (
        <div id="about" className="about-wrapper">
            <div className="about-img">
                <div className="img-card">
                    <img
                        className="img"
                        src={ AboutImage }
                        alt="about-img" />
                </div>
            </div>
            <div className="about-content" data-aos="fade-left" data-aos-duration="1000">
                <h2 className="about-heading">About me</h2>
                <p className="about-desc">I am currently a final-year Information Technology student at the University of Information Technology - Viet Nam
                    National University Ho Chi Minh City.  With intermediate skills in HTML, CSS and JavaScript, plus frameworks and libraries, I desire to become
                    a Web Designer and Frontend Developer to obtain experience and enhance my skills by designing and developing creative and stylish websites.
                </p>
                <Stack className="about-btns" direction="row" spacing={ 1 }>
                    <Button
                        className="btn btn-download"
                        variant="contained"
                        startIcon={ <FileDownloadIcon /> }
                        href={ `${process.env.PUBLIC_URL}/assets/CV_NguyenThaiMinhDuc.pdf` }
                        onClick={ handleDownload }
                    >
                        Download my CV
                    </Button>
                </Stack>
            </div >
        </div >
    )
}

export default About;
