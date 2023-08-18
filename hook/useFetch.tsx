import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface QueryParams {
	[key: string]: string | number;
}

interface ApiResponse {
	data: any[];
}

const useFetch = (endpoint: string, query: QueryParams) => {
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	const options: AxiosRequestConfig = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
		params: { ...query },
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request<ApiResponse>(options);

			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			setError(error as Error);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
