import { useParams } from 'react-router-dom';
import { FC } from "react";
import { useTypeSelector } from "../hooks/useTypedSelector";
import {  allBooks } from "../slices/BooksSlice";

const BookPage: FC = () => {
    const { id } = useParams();
    const allbooks = useTypeSelector(allBooks);
    const book = allbooks.filter(item => item.id === id);

    const { category, authors, title, description, bigImage, link } = book[0];

    return (
        <div className="book__page">
            <div className="page__content">
                <div className="page__img">
                    <img src={bigImage} alt={title} />
                </div>
                <div className="page__info">
                    <div className="info-category">
                        {category}
                    </div>
                    <div className="info-title">
                        {title}
                    </div>
                    <div className="info-authors">
                        {authors === undefined ? '' : authors[0]}
                    </div>
                    <div className="info-link">
                        <a href={link} target="_blank" className='text-decoration link' rel="noopener noreferrer" >Купить</a>
                    </div>
                    {description === undefined ? '' :
                        <div className="info-description">
                            {description}
                        </div>}
                </div>
            </div>
        </div>
    )

}
export default BookPage;