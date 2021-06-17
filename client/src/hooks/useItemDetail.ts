import useSWR from 'swr'
import { fetcher } from 'utils/fetcher'

export const base = process.env.REACT_APP_API_BASE_PATH;
console.log(base)
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
        id: string;
        title: string;
        price: {
            price: number;
            currency: string;
            amount: number;
        };
        picture: string;
        free_shipping: boolean;
        condition: Condition;
        description: string;
        sold_quantity: number;
    }
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