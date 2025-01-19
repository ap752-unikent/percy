import { Stack, Image } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { DeliveryDetails } from './components/delivery-details/delivery-details';
import { useDeliveryDetails } from './hooks/use-delivery-details';
import { useParams } from 'react-router-dom';

const BORDER_RADIUS = 8

function App() {

  const { userId } = useParams();
  const { data } = useDeliveryDetails({ userId: userId ?? '' });
  const containerWidth = useBreakpointValue({ base: "90%", md: "50%" });
  const containerTransform = useBreakpointValue({ base: "translateX(5%)", md: "translateX(50%)" });
  const direction = useBreakpointValue<"column" | "row">({ base: 'column', md: 'row' });
  const alignment = useBreakpointValue<"center" | "normal">({ base: 'center', md: 'normal' });

  const imageWidth = useBreakpointValue({ base: 100, md: 300 });
  const imageHeight = useBreakpointValue({ base: 100, md: "auto" });
  const imageMarginTop = useBreakpointValue({ base: -12, md: 0 });
  const imageBorderRadius = useBreakpointValue({ base: "50px", md: `${BORDER_RADIUS}px 0px 0px ${BORDER_RADIUS}px` });

  return (
    <Stack
      display={"flex"}
      direction={"column"}
      alignSelf={"center"}
      width={containerWidth}
      transform={containerTransform}
      borderRadius={BORDER_RADIUS}
      border={"0.5px solid grey"}
      boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
      gap={4}
      style={{
        backgroundColor: 'white',
      }}
    >
      {
        data?.freeGift && (
          <Image
            src={"../../free-gift.svg"}
            width={100}
            position={"absolute"}
            transform={"rotate(20deg)"}
            right={-5}
            top={-5}
          />
        )
      }
      <Stack
        direction={direction ?? "row"}
        width={"100%"}
        alignItems={alignment ?? "normal"}
      >
        <Image
          src={"../../pig.jpeg"}
          alt="pig"
          width={imageWidth}
          height={imageHeight}
          marginTop={imageMarginTop}
          style={{
            borderRadius: imageBorderRadius
          }}
        />
        {
          data && (
            <DeliveryDetails
              title={data?.title}
              message={data?.message}
              price={data?.price}
            />
          )
        }
      </Stack>
    </Stack >
  )
}

export default App
