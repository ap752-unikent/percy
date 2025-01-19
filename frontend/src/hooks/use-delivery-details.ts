import { requestDeliveryDetails, RequestDeliveryDetailsProps } from "../utils/api-client";
import { useQuery } from "react-query";

export type DeliveryDetailsResponse = {
    title: string,
    message: string,
    price: number,
    freeGift: boolean,
}

export const useDeliveryDetails = ({ userId}: RequestDeliveryDetailsProps) => {
    const { data, isLoading } = useQuery<DeliveryDetailsResponse>(['deliveryDetails', userId],
        () => requestDeliveryDetails({ userId}),
        { enabled: !!userId });

    return { data, isLoading };
}