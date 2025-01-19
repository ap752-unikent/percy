import { Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import { Button } from "../ui/button";

type Props = {
    title: string,
    message: string,
    price: number,
}

export const DeliveryDetails = ({
    title, 
    message,
    price,
} : Props) => {

    const paddingY = useBreakpointValue({ base: 4, md: 12 });

    return (
        <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            paddingY={paddingY}
            paddingX={4}
        >
            <Text
                fontWeight={"bold"}
                fontSize={20}
                color={"#0D8112"}
                textAlign={"left"}
            >
                {title}
            </Text>
            <Text
                fontSize={12}
                color={"#585858"}
                textAlign={"left"}
            >
                {message}
            </Text>
            <Text
                fontSize={16}
                color={"#585858"}
                textAlign={"left"}
                fontWeight={"bold"}
                marginTop={4}
            >
                Total price: £{price}
            </Text>
            <ActionButtons />
        </Stack>
    )
}

const ActionButtons = () => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginTop={16}
        >
            <Button
                size={"md"}
                width={"45%"}
                backgroundColor={"#0D8112"}
                borderRadius={4}
                color={"white"}
            >
                SEE DETAILS
            </Button>
            <Button
                size={"md"}
                width={"45%"}
                backgroundColor={"white"}
                borderRadius={4}
                borderColor={"#0D8112"}
                color={"#0D8112"}
            >
                EDIT DELIVERY
            </Button>
        </Stack>
    )
}