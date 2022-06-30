import { IBook } from "../types/books";
import { Link } from "react-router-dom";


const BookItem = (book: IBook) => {
    const { id, category, authors, title, bigImage } = book;
   
    return (
        <>
            <Link to={`/book/${id}`} className='text-decoration'>
                <div className="item__card card">
                    <div className="card-img">
                        <img src={bigImage} alt={title} />
                    </div>
                    <div className="card-category">
                        {category}
                    </div>
                    <div className="card-title">
                        {title.length > 30 ? `${title.slice(0, 30)}...` : title}
                    </div>
                    <div className="card-authors">
                        {authors === undefined ? '' : authors}
                    </div>
                </div>
            </Link>    
        </>
    )
}
export default BookItem;
