import './Button.css';

const Button = ({text}) => {
    return (
        <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                {text}
            </button>
        </li>
    );
}

export default Button;