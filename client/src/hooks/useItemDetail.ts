import useSWR from 'swr'
import { Item } from 'hooks/useSearchItems';
import { fetcher } from 'utils/fetcher'

export const base = process.env.REACT_APP_API_BASE_PATH;

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
    const { data, error } = useSWR<ItemDetail>(`${base}/items/${id}`, fetcher)
    return {
        data,
        error,
        isLoading: !error && !data
    }
}

export default useItemDetail;