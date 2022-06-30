import axios from 'axios';
import { createSlice,  createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { IBook , MyKnownError} from '../types/books';
import transformData from '../components/helpers/transformData';
import { RootState } from "../store";


const booksAdapter = createEntityAdapter<IBook>();

const initialState = booksAdapter.getInitialState({
    loading: 'loading', 
    limit: 12,
    error: undefined || '',
});

export const fetchBooks = createAsyncThunk<
 IBook,
 string[],
{rejectValue: MyKnownError}
>('books/fetchBooks',
    async ( sendData, { rejectWithValue }) => {
        const [value, filter, sort] = sendData;
        const filterRequest = () => { 
            if (filter === 'All') {
                return ''
            }
            else{
                return `+subject:${filter}`
            }    
    }
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}${filterRequest()}&maxResults=40&orderBy=${sort}&key=AIzaSyAvOhNPoDnHCaMw8OTfCDfBvoIZLYsyx2I`);
        if (res.status === 400){
            return rejectWithValue((res.data) as MyKnownError)
        }
        const items = res.data.items;
        const data = items.map((item : IBook)=>{
            return transformData(item);
        })
        return  data ;
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        viewBooksChanged: (state) => {
            state.limit += 12
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, state => { state.loading = 'loading' })
            .addCase(fetchBooks.fulfilled, (state, action: any) => {
                state.loading = 'success'
                booksAdapter.setAll(state, action.payload);

            })
            .addCase(fetchBooks.rejected, (state, action: any) => {
                 state.error = action.error.message
            })
            .addDefaultCase(() => { })
    }
});
const { actions, reducer } = booksSlice;

export default reducer;


export const { selectAll: allBooks } = booksAdapter.getSelectors((state: RootState) => state.books);

export const {
    viewBooksChanged
} = actions;

export const getViewFlights = createSelector(
    allBooks,
    (state: RootState )=> state.books.limit,
    (books , count ) => {
        return [...books].slice(0, count)
    }
)

