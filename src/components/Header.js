import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className="card">
            <div>
                <ul>
                    <li>
                        <NavLink to="/schools">schools</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}