import './Restaurant.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SearchBar } from '../../Components/SearchBar/SearchBar';

export const Restaurant = () => {
	const [catApiData, setCatApiData] = useState();
	useEffect(() => {
		const catData = async () => {
			const url = 'http://localhost:1337/api/categories?populate=*';
			const result = await axios.get(url);
			setCatApiData(result.data.data);
		}
		catData();
	}, [setCatApiData]);

	const [apiData, setApiData] = useState();
	useEffect(() => {
		const getData = async () => {
			const url = 'http://localhost:1337/api/restaurants?populate=*';
			const result = await axios.get(url);
			setApiData(result.data.data);
		}
		getData();
	}, [setApiData]);
    
	return (
		<>
			<section className='restaurantWrapper'>
				<h2>Restauranter</h2>
				<SearchBar/>
				<article className='articleOne'>
					{/* <h3>Kategorier</h3> */}
					<div className='catWrapper'>
						{catApiData && catApiData.map((item, index) => {
							return (
								<Link key={index} to={`/category/${item.id}`}>
									<p>{item.attributes.Name}</p>
								</Link>
								
								)
							})}
					</div>
				</article>
				{/* <SearchBar/> */}
				<article className='articleTwo'>
					
					{apiData && apiData.map((item, index) => {
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
				</article>
			</section>
		</>
	)
}