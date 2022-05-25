import Hero from '../../Assets/Image/pexels-jer-chung-2792186.jpg'
import './Home.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import ErrorImage from '../../Assets/Image/image.png'
import { SearchBar } from '../../Components/SearchBar/SearchBar'


export const Home = () => {
    const [apiImage, setApiImage] = useState();
    useEffect(()=> {
        const getData = async () => {
            const url = 'http://localhost:1337/api/home-image?populate=*';
            const result = await axios.get(url);
            setApiImage(result.data.data.attributes.Image.data);
        }
        getData();
    }, [setApiImage])

    const [apiData, setApiData] = useState();
    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1337/api/categories/3?populate=*';
            const result = await axios.get(url);
            setApiData(result.data.data.attributes.restaurants.data);
        }
        getData();
    }, [setApiData]);

    return (
        <>
            <section className='heroWrapper'>
                <figure className='hero'>
                    <img src={Hero} alt="heroImg" id='heroImg' />
                    <figcaption className='heroText'>
                        <h2>Velkommen!</h2>
                    </figcaption>
                </figure>
            </section>
            <section className='homeWrapper'>
                <article className='articleOne'>
                    <h3>På denne hjemmeside kan du læse om nogen forskellige restauranter i Aalborg</h3>
                </article>
                <article className='articleTwo'>
                    {apiImage && apiImage.map((item, index) => {
                        return(
                            < figure key={index}>
                            <img src={`http://localhost:1337${item.attributes.url}`} alt="" />
                            </figure>
                        )
                    })}
                </article>
                <article className='articleTree'>
                    <h3>Brugernes favoritter</h3>
                    <div>
                        {apiData && apiData.map((item, index) => {
                            return (
                                <Link to={`/details/${item.id}`} key={index}>
                                    <figure > 
                                        <figcaption>
                                            <p>{item.attributes.Title}</p>
                                        </figcaption>
                                        <img src={ErrorImage} alt="test img" />
                                    </figure>
                                </Link>
                            )
                        })}
                    </div>
                </article>
            </section>
        </>
    )
}