import React from 'react';
import Header from "../components/Header";
import Style from './Hero.css'
import BtnStyle from '../components/Buttons.css'
import primbtn from '../components/PrimButtons.css'
import illustration from '../assets/hero.webp'
import {Link} from "react-router-dom";
import Guide from "./Guide";
import {HashLink} from "react-router-hash-link";
import illust from '../assets/hero_img.webp'

const Hero = () => {
    return (
        <div className={'Hero'}>
            <div className={'wrapper'}>
                <div className="Text">
                    <h1>
                        zyrka
                    </h1>
                    <p>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Unblock Your Lot. Find Cars Fast.
                </span><br />
                <span>
                 Zyrka helps you track every vehicle on your lot— <br />
                so your team stops wasting time and starts closing more deals.
                </span>
                </p>

                    <div className={'button-wrapper'}>
                        <HashLink smooth to={'/#guide1'} >
                            <button className={'prim-button'} color={'white'}>
                                Get Started
                            </button>
                        </HashLink>
                        <HashLink smooth to={'/#guide'}>
                            <button className={'button-13'}>
                            How It Works
                            </button>
                        </HashLink>
                    </div>
                </div>
                <img src={illust} alt="" className={'heroPic'}/>
            </div>
            <div id={'guide'}>

            </div>
           
            <Guide/>
            <div id={'guide1'}>
            </div>
        </div>
    );
};

export default Hero;