import { useState, useEffect } from "react";
import Buscador from "./Buscador";

function MiApi() {
    const [data, setData] = useState([]);
    const [reversed, setReversed] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getData = async () => {
        try {
            const res = await fetch("https://api.victorsanmartin.com/feriados/en.json");
            const jsonData = await res.json();
            setData(jsonData.data);
            console.log(jsonData.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const reverseData = () => {
        const reversedData = [...data].reverse();
        setData(reversedData);
        setReversed(!reversed);
    };

    const filteredData = data.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()));

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
                        {filteredData.map(({ date, title, type }) => (
                            <tr key={`${date}-${title}-${type}`}>
                                <td className="color-date">{date}</td>
                                <td>{title}</td>
                                <td className="type-text">{type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MiApi;
