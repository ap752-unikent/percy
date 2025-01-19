import { Stack, Image, Spinner } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { DeliveryDetails } from './components/delivery-details/delivery-details';
import { useDeliveryDetails } from './hooks/use-delivery-details';

const BORDER_RADIUS = 8

function App() {

  const { data } = useDeliveryDetails({ userId: '43dcba9e-e101-4a62-a75b-d19c9782e7b2' });
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Stack
      display={"flex"}
      direction={"column"}
      alignSelf={"center"}
      width={isSmallScreen ? "90%" : "50%"}
      transform={isSmallScreen ? "translateX(5%)" : "translateX(50%)"}
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
            src={"./free-gift.svg"}
            width={100}
            position={"absolute"}
            transform={"rotate(20deg)"}
            right={-5}
            top={-5}
          />
        )
      }
      <Stack
        direction={isSmallScreen ? 'column' : 'row'}
        width={"100%"}
        alignItems={isSmallScreen ? 'center' : 'normal'}
      >
        <Image
          src={"./pig.jpeg"}
          alt="pig"
          width={isSmallScreen ? 100 : 300}
          height={isSmallScreen ? 100 : "auto"}
          marginTop={isSmallScreen ? -12 : 0}
          style={{
            borderRadius: isSmallScreen ? `50px`
              : `${BORDER_RADIUS}px 0 0 ${BORDER_RADIUS}px`,
          }}
        />
        {
          data && (
            <DeliveryDetails
              title={data?.title}
              message={data?.message}
              price={data?.price}
              freeGift={data?.freeGift}
            />
          )
        }
      </Stack>
    </Stack >
  )
}

export default App
