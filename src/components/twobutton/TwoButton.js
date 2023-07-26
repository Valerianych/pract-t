import hat from './../../img/hatwithcarrot.png'
import camp from './../../img/camp.png'
import str from './../../img/str.png'
import './style.css'

const TwoButton = () => {
    return (
        <div className='main-style'>
            <div className='left-button'>
                <p>Организация мероприятий в наших залах</p>
                <img src={str} />
                <img src={camp} />
            </div>
            <div className='right-button'>
                <p>Расписание и бронирование залов</p>
                <img src={str} />
                <img src={hat} />
            </div>
        </div>
    );
}
 
export default TwoButton;