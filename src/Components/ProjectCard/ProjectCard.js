import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AOS from 'aos'
import 'aos/dist/aos.css';
import './ProjectCard.css'

function ProjectCard(props) {
    AOS.init()
    // const feature = ['HTML', 'CSS', 'JavaScript']
    // console.log(typeof props.features)
    // // const features = props.features
    // const featuresArr = Object.values(props.features)
    // console.log(featuresArr)
    // featuresArr.map(item => (
    //     console.log(`<li>${item}</li>`)
    // ))

    return (
        <div className="project-card" data-aos="fade-left" data-aos-duration="1000">
            <div className="project-preview">
                <img src={ props.src } />
            </div>
            <div className="project-info">
                <h3 className="project-title">{ props.title }</h3>
                <p className="project-desc">{ props.desc }</p>
                <ul className="project-features">
                    { props.features.map(item => (
                        <li key={ item }>{ item }</li>
                    )) }
                </ul>
                {/* { console.log(props.features) */ }
                {/* } */ }
                {/* <ul className="project-features">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul> */}
                <Stack className="project-btns" direction="row" spacing={ 2 }>
                    <Button className="btn btn-filled" variant="contained">
                        View demo
                    </Button>
                    <Button className="btn btn-outlined" variant="outlined">
                        Source code
                    </Button>
                </Stack>
            </div>
        </div>
    );
}

export default ProjectCard;
