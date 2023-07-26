import React from "react";
import Links from "./Links";

function NavBar() {
    return (
        <>
            <div className="NavBar">
                <nav>
                    <h1> Nav Menu Bar </h1>
                    <ul>
                        <Links />
                    </ul>

                </nav>

            </div>
        </>
    );
}



export default NavBar;