import './Button.css';
import { NavLink } from 'react-router-dom';

const Button = ({text}) => {
    return (
        <NavLink to={`/category/${text}`} activeClassName="is-active">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    {text}
                </button>
            </li>
        </NavLink>
    );
}

export default Button;