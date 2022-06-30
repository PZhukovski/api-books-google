import { FC, useState } from "react";
import { useDispatch} from 'react-redux';
import { fetchBooks, allBooks, viewBooksChanged, getViewFlights } from "../slices/BooksSlice";
import BookItem from "./BookItem";
import { AppDispatch } from "../store";
import './mainpage.scss';
import { useTypeSelector } from "../hooks/useTypedSelector";
import search from './assets/search.svg';




const MainPage: FC = () => {
    const [value, setValue] = useState('');
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('relevance');

    const dispatch = useDispatch<AppDispatch>();
    const books = useTypeSelector(getViewFlights);
    const booklength = useTypeSelector(allBooks);


    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = [value, filter, sort];
        dispatch(fetchBooks(data));
        setValue('');
    };

    const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };
    const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value);
    };

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        dispatch(viewBooksChanged());
    }

    return (
        <>
            <div className="container">
                <div className="container__header">
                    <h1>Search for books</h1>
                    <div className="search">
                        <div className="field-main">
                            <div className="field-background">
                                <div className="field-container">
                                    <div className="field-inner">
                                        <form onSubmit={handleSubmit} id='search-form'>
                                            <input
                                                value={value}
                                                id="search"
                                                className="field-placeholder"
                                                type="text"
                                                placeholder="Поиск"
                                                onChange={onChangeInput}
                                            />

                                        </form>
                                    </div>
                                    <button
                                        className='search-logo'
                                        form='search-form'>
                                        <img src={search} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="select-forms">
                        <div className="select_item">
                            <div className="select_title">Categoies</div>
                            <select
                                className="select-category"
                                value={filter}
                                onChange={onChangeFilter}>
                                <option value="All">All</option>
                                <option value="Art">Art</option>
                                <option value="Biography">Biography</option>
                                <option value="Computers">Computers</option>
                                <option value="History">History</option>
                                <option value="Medical">Medical</option>
                                <option value="Poetry">Poetry</option>
                            </select>
                        </div>
                        <div className="select_item">
                            <div className="select_title">Sorting by</div>
                            <select
                                className="select-sort"
                                value={sort}
                                onChange={onChangeSort}
                            >
                                <option value='relevance'>Relevance</option>
                                <option value='newest'>Newest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container__items">
                    {books.map((book) => {
                        return <div className="item__list"
                            key={book.id}>
                            <BookItem  {...book} />
                        </div>
                    })}
                </div>
                {books.length < booklength.length ?
                    <button
                        className='btn-show'
                        onClick={onClick}>
                        Показать еще
                    </button> : ''}

            </div>
        </>
    )
}
export default MainPage;
