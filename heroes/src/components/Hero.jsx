import './Hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <h2>{props.name}</h2>
            <img src={props.url} />
            <div className="hero-alter">Альтер эго: {props.alterEgo}</div>
            <div className="hero-job">Род деятельности: {props.job}</div>
            <div className="hero-powers">Суперсилы: {props.powers}</div>
            <div className="hero-add">Подробнее: {props.addInfo}</div>
        </div>
    );
}

export default Hero;