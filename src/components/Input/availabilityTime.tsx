import {
  Heading,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";
import AvailableDays from "../AvailableDays";
import "./styles.css";
import { timeZones } from "./timeZones";

const AvailabilityTime: React.VFC = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const location = timeZone.split("/")[1];

  return (
    <VStack w="full" h="full" p={10} alignItems="flex-start" spacing={10}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading color="raid.50" size="1xs">
          Availability
        </Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={3} w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel id="form-label">Time Zone</FormLabel>
            <Select placeholder="Select TZ" value={timeZone}>
              {timeZones.map((tz) => (
                <option value={tz}>{tz.replaceAll("_", " ")}</option>
              ))}
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel id="form-label">Location</FormLabel>
            <Input value={location} />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel id="form-label">From</FormLabel>
            <Select placeholder="9:00am">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel id="form-label">To</FormLabel>
            <Select placeholder="2:00pm">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel id="form-label">Days</FormLabel>
            <AvailableDays />
          </FormControl>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default AvailabilityTime;
