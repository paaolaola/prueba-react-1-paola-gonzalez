import React from "react";
import { useState } from "react";

const Buscador = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleChangeSearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setSearch(inputValue);
        onSearch(inputValue);
    };

    return (
        <>
            <div className="text-center">
                <div className="nav-container">
                    <nav className="navbar bg-body-tertiary">
                        <div className="container-fluid-search">
                            <form className="d-flex " role="search">
                                <input
                                    className="form-control custom-input"
                                    type="text"
                                    name="search"
                                    placeholder="Buscar por nombre..."
                                    value={search}
                                    onChange={handleChangeSearch}
                                ></input>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
export default Buscador;
