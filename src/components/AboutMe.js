import { Container } from "react-bootstrap";
import profilePic from "../assets/img/profile-pics/cake.jpeg"
import arrow from "../assets/img/arrow.svg"

function AboutMe () {

    return (
        <Container >
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', paddingBottom: '50px'}}>
                <div style={{textAlign: 'left', paddingRight: '20px', alignSelf: 'flex-start', marginTop: '150px'}}> {/* About me text */}

                    <h1 style={{paddingBottom: '3px'}}>Hi! I'm Jennah,</h1>
                    <h2 style={{paddingBottom: '20px', width: '550px'}}>a (newly graduated) <span style={{backgroundColor: '#FFD09B'}}>software developer</span> from Flint, Michigan.</h2>

                    <h3 className=".inter-light" style={{ width: '650px', paddingBottom: '10px'}}>
                        When I’m not at a computer, I’m usually snowboarding with family, reading, trying a new restaurant, or, as of late,
                        playing pickleball with my cousins. </h3>
                        
                    <h3 style={{paddingBottom: '20px', width: '650px'}}>  I graduated with my BSE in Computer Science from 
                    the University of Michigan in April of 2024, but my journey is just getting started. 
                    Check out some of the stuff I’ve been working on.
                    </h3>
                    <div style={{width: '650px',  textAlign: 'center'}}>
                     <img src={arrow} alt="downwards-arrow"/>
                    </div>
                    
                </div>
                <div style={{backgroundColor: '#FFB0B0',  padding: '10px', width: '500px', marginTop: '20px'}}>
                    <img src={profilePic} alt="my profile pic" style={{ width: '500px'}} />    
                </div>
            </div>
            

        </Container>

    );
}

export default AboutMe; 