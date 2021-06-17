import useSWR from 'swr'
import { Condition } from 'hooks/useItemDetail';
import { fetcher } from 'utils/fetcher'

export const base = process.env.REACT_APP_API_BASE_PATH;

type useSearchItemsProps = {
    query: string
}
export type SearchResult = {
    author: {
        name: string;
        lastname: string;
    },
    categories: string[];
    items: Item[]
}

export type Item = {
    id: string;
    title: string;
    price: {
        decimals: number;
        currency: string;
        amount: number;
    };
    picture: string;
    free_shipping: boolean;
    condition: Condition;
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