import './Footer.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'


export const Footer = () => {
    const [apiData, setApiData] = useState();
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('http://localhost:1337/api/social-medias?populate=*');
            setApiData(result.data.data);
        }
        getData();
    },[])
    return (
        <footer>
            <div className='copy'>
                <span className="material-symbols-outlined">copyright</span>
                <p>copyright</p>
            </div>
            <div className='media'>
                {apiData && apiData.map((item, index) => {
                    return(
                        // <div >
                        <a key={index} href={item.attributes.Url} target="_blank">
                            <img src={`http://localhost:1337${item.attributes.Logo.data.attributes.url}`} alt="medialogo" />
                        </a>
                        // </div>
                    )
                })}
            </div>
        </footer>
    )
}