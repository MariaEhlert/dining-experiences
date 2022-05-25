import './Pagintation.scss'
export const Pagintation = ({ postsPerPage, totaltPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totaltPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}