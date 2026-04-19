'use server'

import queryString from 'query-string';

const BaseUrl = process.env.NEXT_PUBLIC_COINGEKO_API_URL || "https://api.coingecko.com/api/v3";
const ApiKey = process.env.NEXT_PUBLIC_COINGEKO_API_KEY || "CG-m8iUYTkYPUosUWMawF6KjjbF";
if (!BaseUrl || !ApiKey) {
    throw new Error("API URL or API Key is not defined in environment variables.");
}

export async function fetcher<T>(endpoint: string, params?: QueryParams, revalidate?: 60|number): Promise<T> {
    const url = queryString.stringifyUrl({
        url: `${BaseUrl}${endpoint}`,
        query: params,
        
    });


    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            "x-cg-demo-api-key": ApiKey,
        } as Record<string, string>,
        next: { revalidate }
    });

    if (!res.ok) {
        const errorBody: CoinGeckoErrorBody = await res.json();
        throw new Error(`API request failed: ${res.status} ${res.statusText} - ${errorBody.error || 'No error message'}`);
    }
    return res.json();
}