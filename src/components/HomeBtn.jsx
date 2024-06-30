import React from "react";
import { Link } from 'react-router-dom';

export function HomeBtn() {
    return (
        <div>
            <Link to="/shop">
                <button type="button" className="btn btn-success btn-lg">Find E-shops</button>
            </Link>
        </div>
    )
}




