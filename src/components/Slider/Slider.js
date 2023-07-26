import './style.css'
import bgImg from './../../img/Layer2.png'
import phone from './../../img/phone.png'
import logo from './../../img/лого.png'
import icMap from './../../img/map.png'
import Navbar from '../Navbar/Navbar'

const Slider = () => {
    return (
        <>
            <div className='slider'>
                <div className='main-slider'>
                    <div className='left-info'>
                        <img src={phone} alt='' />
                        <p>телефон администратора</p>
                        <p>8 800 2000 600</p>
                    </div>
                    <div className='center-logo'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='right-info'>
                        <img src={icMap} alt='' />
                        <p>адрес фотостудии</p>
                        <p>Челябинск, Худякова, 12а</p>
                    </div>
                </div>
                <img className='bgImg' src={bgImg} alt='bla' />
                <Navbar />
                <div className='second-infoblock'>
                    <p className='main-text'>Детские фотосессии по разумным ценам</p>
                    <p className='second-text'>Забронируйте фотосъёмку и получите скидку 50%  на следующую фотосессию для всей семьи!</p>
                    <button>Арендовать зал</button>
                    <button>Заказать съёмку</button>
                </div>
            </div>
        </>
    );
}
 
export default Slider;