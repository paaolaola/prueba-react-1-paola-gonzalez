import { useState } from "react";

//Componente para buscar por nombre en la tabla
const Buscador = ({ onSearch }) => {
    //Estado para guardar el valor del input de busqueda
    const [search, setSearch] = useState("");
    //Funcion para buscar por nombre en la tabla
    const handleChangeSearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        //Guarda el valor del input en el estado
        setSearch(inputValue);
        //Llama a la funcion onSearch del componente padre
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
