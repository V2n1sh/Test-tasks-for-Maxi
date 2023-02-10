import "./card.css";
import el1 from '../../image/Ellipse1_background.png';
import el2 from '../../image/Ellipse2_background.png';

function FormatNumber (num) {
    if(num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

function Card({picture, gender, name, date, city, country}) {
    let tempDate = new Date (date);
    let newDate = FormatNumber(tempDate.getDate()) + '.' + FormatNumber(tempDate.getMonth() + 1) + '.' + tempDate.getFullYear();
    return (
        <div className="card">

            <img src={el1} className="el1-position" alt=""/>
            <img src={el2} className="el2-position" alt=""/>

        <div className="user">
            <img className="user-info" src={picture} alt=""/>
            <div className="user-info">
                Пол:{gender}
            </div>
            <div className="user-info">
                Имя: {name.title} {name.first} {name.last}
            </div>
            <div className="user-info">
                Дата рождения: {newDate}
            </div>
            <div className="user-info">
                Город: {city}
            </div>
            <div className="user-info">
                Страна: {country}
            </div>
        </div>
            
            <img src={el1} className="el3-position" alt=""/>
            <img src={el2} className="el4-position" alt=""/>
        </div>
    )
}

export default Card;