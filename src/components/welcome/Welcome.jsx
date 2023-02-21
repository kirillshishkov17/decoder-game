import style from './welcome.module.css'

const Welcome = () => {
    return(
        <div>
            <header>
                <h1>DECODER</h1>
                <a href="#">Правила</a>
            </header>

            <div class={style.container}>        
                <div class={style.name}>
                    <span>Введите имя: </span>
                    <input type="text" placeholder="КлёвоеИмя03"/>
                </div>
        
                <div class={style.team}>
                    <span>Выберите команду: </span>
                    <select name="team" id="team">
                        <option id={style.red} value="">Красная</option>
                        <option id={style.blue} value="">Синяя</option>
                    </select>
                </div>
        
                <div class={style.start_btn}>
                    <a href="#">Начать</a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;