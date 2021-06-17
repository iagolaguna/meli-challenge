import useSWR from 'swr'
import { Condition } from 'hooks/useItemDetail';
import { fetcher } from 'utils/fetcher'
import { BASE_URL } from 'utils/constants';

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
    const { data, error } = useSWR<SearchResult>(query && `${BASE_URL}/search?q=${query}`, fetcher)

    return {
        data,
        error,
        isLoading: !error && !data
    }
}

export default useSearchItems;