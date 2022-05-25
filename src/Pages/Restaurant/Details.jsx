import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Employee, Pagintation, Posts } from '../About/Employee';
import './Details.scss'

export const Details = () => {
    const [apiData, setApiData] = useState();
    const { id } = useParams();
    useEffect(() => {
        const getData = async () => {
            const url = `http://localhost:1337/api/restaurants/${id}?populate=*`;
            const result = await axios.get(url);
            setApiData(result.data.data);
        }
        getData();
    }, [setApiData, id]);

    
    return (
        <section className='detailsWrapper'>
            <Link to='/restauranter'>
                <span className="material-symbols-outlined">close</span>
            </Link>
            {apiData ?
                <figure>
                    <p className='title'>{apiData.attributes.Title}</p>
                    <div>
                        {apiData.attributes.Poster.data && apiData.attributes.Poster.data.map((item, index) => {
                            return (
                                < img key={index} src={`http://localhost:1337${item.attributes.url}`} alt={apiData.attributes.Title}></img>
                            )
                        })}
                    </div>
                    <figcaption>
                        <p>{apiData.attributes.Description}</p>
                        <p>Åbningstider:<br></br> {apiData.attributes.OpeningHours}</p>
                        <p>Adresse:<br></br> {apiData.attributes.Address}</p>
                    </figcaption>
                </figure>
                : null}
        </section>
    )
}