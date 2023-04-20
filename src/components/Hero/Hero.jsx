import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'

const Hero = () => {
    const trans = { type: 'spring', duration: 3 };
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                <div className="best-ad">
                    <motion.div
                        initial={{ left: '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...trans, type: 'tween' }}
                    >
                    </motion.div>
                    <span>The best fitness club in town.</span>
                </div>

                <div className="hero-text">
                    <div >
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <div className="btn">Get Started</div>
                    <div className="btn">Learn More</div>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={trans}
                    className="heart-rate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="" className='hero_image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={trans}
                    src={hero_image_back} alt="" className='hero_image_back' />

                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={trans}
                    className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero