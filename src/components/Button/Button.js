import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({text}) => {
    return (
        <li className="nav-item" role="presentation">
            <Link to={`/category/${text}`}>
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    {text}
                </button>
            </Link>
        </li>
    );
}

export default Button;