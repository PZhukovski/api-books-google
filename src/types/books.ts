
export interface MyKnownError {
    errorMessage: string;
}

export interface BooksListState {
    loading: string,
    limit: number;
    error: string | undefined;
}

export interface IBook{
    id?: string,
    category?: string,
    authors?: string[],
    title : string,
    description?: string,
    link? : string,
    bigImage?: string,
}