import { useState, useEffect } from "react";
import Buscador from "./Buscador";
//Componente para mostrar la tabla de feriados
function Table() {
    //Estado para guardar los datos de los feriados
    const [data, setData] = useState([]);
    const [reversed, setReversed] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    //Funcion para obtener los datos de los feriados desde la API
    const getData = async () => {
        try {
            const res = await fetch("https://www.feriadosapp.com/api/holidays-2019.json");
            const jsonData = await res.json();
            setData(jsonData.data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };
    //Ejecutar la funcion getData al cargar el componente por primera vez
    useEffect(() => {
        getData();
    }, []);

    //Filtrar los datos de la tabla segun el termino de busqueda ingresado
    const filteredData = data.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()));

    //Funcion para invertir el orden de los datos de la tabla
    const reverseData = () => {
        const reversedData = [...data].reverse();
        //Actualizar el estado de los datos y el estado de reversed
        setData(reversedData);
        setReversed(!reversed);
    };

    return (
        <>
            <Buscador onSearch={setSearchTerm} />
            <div className="table-container">
                <table className="table table-striped table-hover shadow-lg">
                    <thead>
                        <tr>
                            <th>
                                <div className="date-arrow">
                                    <h5>FECHA</h5>
                                    <button className="order-btn" onClick={reverseData}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="15"
                                            fill="currentColor"
                                            className="bi bi-arrow-down-up"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </th>
                            <th>
                                <h5>CONMEMORACIÓN</h5>
                            </th>
                            <th className="type-title">
                                <h5>TIPO</h5>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map(({ date, title, extra }) => (
                            <tr key={`${date}-${title}-${extra}`}>
                                <td className="color-date">{date}</td>
                                <td>{title}</td>
                                <td className="type-text">{extra}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
