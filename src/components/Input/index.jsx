import {
    Container,
    Flex,
} from "@chakra-ui/react"
import {Profile} from "./profile";
import {AvailabilityTime} from "./availabilityTime";

export function Input(){

    return  (
        <Container maxW='container.xl' p={0} >
            <Flex h={{ base: 'auto', md: '100vh' }} py={20} direction={{ base: 'column', md: 'row' }}>
                <Profile />
                <AvailabilityTime />
            </Flex>

        </Container>
    )
}