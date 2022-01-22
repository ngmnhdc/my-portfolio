import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AOS from 'aos'
import 'aos/dist/aos.css';
import './ProjectCard.css'

function ProjectCard(props) {
    AOS.init()

    function handleClick(e) {
        e.preventDefault()
        window.open(e.target.href);
    }

    return (
        <div className="project-card" data-aos="fade-left" data-aos-duration="1000">
            <div className="project-preview">
                <img src={ `${process.env.PUBLIC_URL}/assets/img/${props.src}.png` } alt={ props.src } />
            </div>
            <div className="project-info">
                <h3 className="project-title">{ props.title }</h3>
                <p className="project-desc">{ props.desc }</p>
                <ul className="project-features">
                    { props.features.map(item => (
                        <li key={ item }>{ item }</li>
                    )) }
                </ul>
                <Stack className="project-btns" direction="row" spacing={ 2 }>
                    <Button
                        className="btn btn-filled"
                        variant="contained"
                        href={ `https://ngmnhdc.github.io/${props.src}` }
                        onClick={ handleClick }>
                        View demo
                    </Button>
                    <Button
                        className="btn btn-outlined"
                        variant="outlined"
                        href={ `https://github.com/ngmnhdc/${props.src}` }
                        onClick={ handleClick }>
                        Source code
                    </Button>
                </Stack>
            </div>
            <div className="project-date">{ props.date }</div>
        </div>
    );
}

export default ProjectCard;
