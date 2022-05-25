import { useEffect, useState } from "react";
import axios from 'axios';
import { Pagintation } from "../../Components/Pagintation/Pagintation";
// import { Posts } from "./Posts";

export const Employee = () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const result = await axios.get('http://localhost:1337/api/employees?populate=*');
            setApiData(result.data.data);
            // console.log(result.data.data);
            setLoading(false);
        }
        getData();
    }, []);

    //set nuværende posts
    //side af sidste posts =   nuværende side   gange  antal posts per side
    const indexOfLastPost = currentPage * postsPerPage;
    //side af første posts =   side af sidste posts    minus   antal posts per side
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    //vil slide de nummer at posts vi ønsker
    const currentPosts = apiData.slice(indexOfFirstPost, indexOfLastPost);

    //skrift side
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

    const Posts = ({ apiData, loading }) => {
        if (loading) {
            return <h2>Loading..</h2>
        }
        return (
            <div className='articleTwo'>
                    {apiData && apiData.map((item, index) => {
                        return (
                            <figure key={index}>
                                <p className='profilName'>{item.attributes.Name}</p>
							    <img src={`http://localhost:1337${item.attributes.Image.data.attributes.url}`} alt={item.name} />
                                <figcaption>
							 	    <p>{item.attributes.Ttitle}</p>
                                </figcaption>
                            </figure>
                        )
                    })}
            </div>
        )

    }
    return(
        <>
        <Posts apiData={currentPosts} loading={loading} />
        <Pagintation postsPerPage={postsPerPage} totaltPosts={apiData.length} paginate={paginate}/>
        </>
    )
}
