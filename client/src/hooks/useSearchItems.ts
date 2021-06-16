import useSWR from 'swr'
import { fetcher } from 'utils/fetcher'

export const base = process.env.REACT_APP_API_BASE_PATH;
console.log(base)

type useSearchItemsProps = {
    query: string
}
export type SearchResult = {
    author: {
        name: string;
        lastname: string;
    },
    categories: string[];
    items: SearchItem[]
}
export type SearchItem = {
    id: string;
    title: string;
    price: {
        price: number;
        currency: string;
        amount: number;
    };
    picture: string;
    free_shipping: boolean;
    condition: string;
};

const useSearchItems = ({ query }: useSearchItemsProps) => {
    const { data, error } = useSWR<SearchResult>(query && `${base}/search?q=${query}`, fetcher)

    return {
        data,
        error,
        isLoading: !error && !data
    }
}

export default useSearchItems;