type ApiClientProps = {
    url: string,
    method: string,
}

const apiClient = async ({ url, method }: ApiClientProps) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        return response.text().then(text => { throw new Error(text) })
    }

    return response.json();
}

export type RequestDeliveryDetailsProps = {
    userId: string,
}

export const requestDeliveryDetails = async ({ userId } : RequestDeliveryDetailsProps) => {

    const url = `http://localhost:3000/comms/your-next-delivery/${userId}`;
    const responseJson = await apiClient({ url, method: 'GET' });

    return responseJson;
}