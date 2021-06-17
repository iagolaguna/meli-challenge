import useSWR from 'swr'
import { Item } from 'hooks/useSearchItems';
import { fetcher } from 'utils/fetcher'
import { BASE_URL } from 'utils/constants';

export enum Condition {
    NEW = "new",
}

type useItemDetailProps = {
    id: string;
}

export type ItemDetail = {
    author: {
        name: string;
        lastname: string;
    },
    item: {
        description: string;
        sold_quantity: number;
    } & Item;
};

const useItemDetail = ({ id }: useItemDetailProps) => {
    const { data, error } = useSWR<ItemDetail>(`${BASE_URL}/items/${id}`, fetcher)
    return {
        data,
        error,
        isLoading: !error && !data
    }
}

export default useItemDetail;