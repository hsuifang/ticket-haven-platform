'use client';

import { Text, Box, useBreakpointValue, Button, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';

import { Activities } from '@/types/activityTypes';
import { fetchEvents } from '@/api/activities';
import { usePathname, useRouter } from 'next/navigation';

import ActivitySearchForm from '@/components/activity/ActivitySearchForm';
import ActivitySearchTemplate from '@/components/activity/ActivitySearchTemplate';

const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const pathname = usePathname();
  const router = useRouter();

  const [result, setResult] = useState<Activities[]>([]);

  const section1 = {
    title: '近期開賣',
    tabs: [
      { id: '1', name: '今天', params: { startTime: '2023-05-04' }, result },
      { id: '2', name: '明天', params: { startTime: '2023-05-05' }, result },
      { id: '3', name: '未來一週', params: { startTime: '2023-05-04', endTime: '2023-05-11' }, result },
    ],
  };

  const handleFetchEvents = async () => {
    const data = await fetchEvents();
    setResult(Array.isArray(data.mock) ? data.mock : []);
  };

  const redirectEventsResultPage = (params: string) => {
    router.push(`/activities?${params}`);
  };

  useEffect(() => {
    handleFetchEvents();
  }, []);

  return (
    <>
      {!isMobile && <ActivitySearchForm onChange={redirectEventsResultPage} />}
      <ActivitySearchTemplate title={section1.title} tabs={section1.tabs} />
      <ActivitySearchTemplate title={section1.title} tabs={section1.tabs} />
      <Box as="section" py="120px" bgColor="#F7F4F6" textAlign="center">
        <Image w="200px" src="/brand.svg" alt="Logo" margin="auto" mb="60px" />
        <Text>採用 QR code 電子票券</Text>
        <Text mb="60px">掃描即可輕鬆入場</Text>
        <NextLink href={`/signup?redirect=${pathname}`}>
          <Button
            fontSize={20}
            fontWeight={600}
            bg="brand.100"
            color="white"
            height="auto"
            px={8}
            py={2}
            _hover={{
              bg: 'black',
              color: 'white',
            }}
          >
            立刻註冊
          </Button>
        </NextLink>
      </Box>
    </>
  );
};

export default Home;
