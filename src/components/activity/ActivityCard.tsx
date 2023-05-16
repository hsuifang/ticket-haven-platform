import {
  Card,
  CardBody,
  Image,
  Text,
  Box,
  Heading,
  Badge,
  Container,
  Stack,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  id: string;
  name: string;
  createAt: string;
  status: 0 | 1;
};

const imgUrl =
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

const EventCards = ({ id, name, createAt, status }: Props) => {
  return (
    <Link href={`/activities/${id}`} scroll={true}>
      <Card border="none" boxShadow="none">
        <CardBody p="0">
          <Image src={imgUrl} borderRadius="lg" alt="eventImg" />
          <Stack py="3" align="flex-start">
            <Text size="20px" fontWeight="400">
              {createAt}
            </Text>
            <Heading size="3" fontWeight="700" color="brand.100" mb="12px">
              {name}
            </Heading>
            {status === 1 ? (
              <Badge py="6px" px="4" bgColor="#FFF1C1" borderRadius="20px">
                熱賣
              </Badge>
            ) : (
              <Badge py="6px" px="4" bgColor="#F7F2F0" borderRadius="20px">
                售罄
              </Badge>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};
export default EventCards;
