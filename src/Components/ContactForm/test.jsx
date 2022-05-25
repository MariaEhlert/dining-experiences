// import { useEffect, useState } from 'react'
// import axios from 'axios';
// export const Test = () => {
//     const [data, setData] = useState([]);
//     const [name, setName] = useState('');
//     // const [title, setTitle] = useState('');

//     useEffect(() => {
//         const getData = async () => {
//             const reslut = await axios.get('http://localhost:1337/api/contact-forms?populate=*')
//             setData(reslut.data.data)
//         }
//         getData();
//     }, [])
//     const postData = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:1337/api/contact-forms', {
//             Name: name,
//             // Title: title
//         }).then(res => console.log('Posting data', res)).catch(err => console.log(err));
//     }
//     const SubmitData = data.map((item, index) => {
//         return (
//             <>
//                 <p>
//                     {item.attributes.Name}
//                 </p>
//             </>
//         )
//     })

//     return (
//         <>
//             <form>
//                 <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
//                 {/* <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} /> */}
//                 <button onClick={postData}>send</button>
//             </form>
//         </>
//     )
// }