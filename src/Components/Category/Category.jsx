import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Category.scss'
import ErrorImage from '../../Assets/Image/image.png'

export const Categori = () => {
    const [apiData, setApiData] = useState();
    const { id } = useParams();
    useEffect(() => {
        const getData = async () => {
            const url = `http://localhost:1337/api/categories/${id}?populate=*`;
            const result = await axios.get(url);
            setApiData(result.data.data.attributes.restaurants.data);
        }
        getData();
    }, [setApiData, id]);
    return (
        <section className='categoryWrapper'>
            <Link to='/restauranter'><span className="material-symbols-outlined">close</span></Link>
            <article className='articleOne'>
            {apiData && apiData.map(item => {
                return (
                    <Link key={item.id} to={`/details/${item.id}`} >
                    <figure >
                        <p>{item.attributes.Title}</p>
                        <img src={ErrorImage} alt="test img" />
                    </figure>
                    </Link>
                )
            })}
            </article>
        </section>
    )
}