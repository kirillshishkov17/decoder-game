import style from './welcome.module.css'
import { Link } from 'react-router-dom';
import React from 'react';

const Welcome = () => {

    let [team, setTeam] = React.useState(true);
    const selectRef= React.useRef();

    const selectChangeHandler = () => {
        let optionValue = selectRef.current.value;
        setTeam(optionValue);
    }


    return(
        <div>
            <header>
                <h1>DECODER</h1>
                {/* Игнорирует предупреждение о пустой ссылке. Убрать после */}
                {/* eslint-disable-next-line */}
                <a href="#">Правила</a>
            </header>

            <div className={style.container}>        
                <div className={style.name}>
                    <span>Введите имя: </span>
                    <input type="text" placeholder="КлёвоеИмя03"/>
                </div>
        
                <div className={style.team}>
                    <span>Выберите команду: </span>
                    <select name="team" id="team" ref={selectRef} onChange={selectChangeHandler}>
                        <option id={style.red} value={true}>Красная</option>
                        <option id={style.blue} value={false}>Синяя</option>
                    </select>
                </div>
        
                <div className={style.start_btn}>
                    {
                        team === true ?

                        <Link to="/red">
                            <div>Начать</div>
                        </Link>
                        :
                        <Link to="/blue">
                            <div>Начать</div>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default Welcome;