import Carousel from 'react-bootstrap/Carousel';
import Imageslid1 from './ImageSlider/banner-15.jpg'
import Imageslid2 from './ImageSlider/banner-25.jpg'
import Imageslid3 from './ImageSlider/banner-16.jpg'
import Imageslid4 from './ImageSlider/banner-17.jpg'
import './Slider.css'
function Slider() {
    return (
        <div className='Slider'>
            <div className='Container'>
                <div className='Slider-cont'>
                    <div className='part1'>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <div className='image1'>
                                    <img
                                        className="d-block w-100"
                                        src={Imageslid2}
                                        alt="First slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                <div className='caption'>
                                        <h4>LifeStyle Collection</h4>
                                        <h2>women</h2>
                                        <h4>SALE UP TO <span>30% OFF</span></h4>
                                        <p>Get Free Shipping On Order Over $99.0</p>
                                        <button>SHOP NOW</button></div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='image2'>
                                    <img
                                        className="d-block w-100"
                                        src={Imageslid1}
                                        alt="Second slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                    <div className='caption'>
                                        <h4>LifeStyle Collection</h4>
                                        <h2>Men</h2>
                                        <h4>SALE UP TO <span>30% OFF</span></h4>
                                        <p>Get Free Shipping On Order Over $99.0</p>
                                        <button>SHOP NOW</button></div>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                    <div className='part2'>
                        <div className='imageslid1' ><img src={Imageslid3} /></div>
                        <div className='imageslid2'><img src={Imageslid4} /></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Slider;


