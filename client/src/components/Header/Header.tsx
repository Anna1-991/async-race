import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="header_wrapper">
            <ul>
                <li>
                    <button className="btn">
                        <Link to="/Garage">Garage</Link>
                    </button>
                </li>
                <li>
                    <button className="btn">
                        <Link to="/Winners">Winners</Link>
                    </button>
                </li>
            </ul>
        </header>
    );
};
