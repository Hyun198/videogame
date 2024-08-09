import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Home.style.css'

//1. 인기 탑 게임들
//2. 카테고리별 구별
//3. footer
//4. our game stores ? 랜덤한 게임들 보여주기?
const Home = () => {
    return (
        <section className="Home">
            <div className='content'>
                <h1>Special.<br></br><span>Experience</span></h1>
                <a href="#">Show more</a>
            </div>

            <div className="media-icons">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} className="icon" /></a>
                <a href="#" ><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                <a href="#"><FontAwesomeIcon icon={faDiscord} className="icon" /></a >
            </div>
        </section>

    )
}

export default Home