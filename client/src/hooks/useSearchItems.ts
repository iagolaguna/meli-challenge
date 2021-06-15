import useSWR from 'swr'
import { fetcher } from 'utils/fetcher'

export const base = process.env.REACT_APP_API_BASE_PATH;
console.log(base)

type useSearchItemsProps = {
    query: string
}
const useSearchItems = ({ query }: useSearchItemsProps) => {
    const { data, error } = useSWR(`${base}/search?q=${query}`, fetcher)

    return {
        data,
        error,
        isLoading: !error && !data
    }
}

export default useSearchItems;