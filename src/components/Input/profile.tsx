import {
  VStack,
  Input,
  Heading,
  GridItem,
  FormControl,
  FormLabel,
  SimpleGrid,
} from "@chakra-ui/react";

export function Profile() {
  return (
    <VStack w="full" h="full" p={10} alignItems="felx-start" spacing={10}>
      <VStack spacing={3} alignItems="felx-start">
        <Heading color="raid.50" size="1xs">
          Profile
        </Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={3} w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel id="form-label">Your Email</FormLabel>
            <Input placeholder="Your@email.com" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel id="form-label">Public User Name</FormLabel>
            <Input placeholder="User Meme" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel id="form-label">Description</FormLabel>
            <Input placeholder="I'm a Monk !" />
          </FormControl>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}
