import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './SearchBar.scss'
export const SearchBar = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('http://localhost:1337/api/restaurants?populate=*');
            setApiData(result.data.data);
        }
        getData();
    }, [])
    function Search({ data }) {
        const [filteredData, setFilteredData] = useState([]);
        const [wordEntered, setWordEntered] = useState([""]);

        const handleFilter = (event) => {
            const searcWord = event.target.value
            setWordEntered(searcWord)
            const newFilter = data.filter((value) => {
                return value.attributes.Title.toLowerCase().includes(searcWord.toLowerCase());
            });
            if (searcWord === "") {
                setFilteredData([]);
            } else {
                setFilteredData(newFilter);
            }
        }
        const clearInput = () => {
            setFilteredData([]);
            setWordEntered("")
        }

        return (
            <article className="searchWrapper">
                <div className="inputWrapper">
                    <input type="text"
                        placeholder="søg efter en restauranten.."
                        value={wordEntered}
                        onChange={handleFilter}
                    />
                    <div>
                        {filteredData.length === 0 ?
                            <span className="material-symbols-outlined">search</span>
                            : <span onClick={clearInput} id="close" className="material-symbols-outlined">close</span>}
                    </div>
                </div>
                {filteredData.length != 0 && (
                    <div className="filterDataWrapper">
                        {filteredData.map((item, index) => {
                            return (
                                <Link to={`/details/${item.id}`} key={index}>
                                    <figure >
                                        <figcaption>
                                            <p>{item.attributes.Title}</p>
                                        </figcaption>
                                        <img src={`http://localhost:1337${item.attributes.Poster.data[0].attributes.url}`} alt={item.name} />
                                    </figure>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </article>
        )
    }
    return (
        <>
            <Search data={apiData} />
        </>
    )
}