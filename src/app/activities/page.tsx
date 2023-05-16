'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Grid, Container } from '@chakra-ui/react';

import { Activities } from '@/types/activityTypes';
import { fetchEvents } from '@/api/activities';

import ActivitySearchForm from '@/components/activity/ActivitySearchForm';
import ActivityCard from '@/components/activity/ActivityCard';

const Activities = () => {
  // params
  const searchParams = useSearchParams();
  const region = searchParams.get('region') || '';
  const startTime = searchParams.get('startTime') || '';
  const keyword = searchParams.get('keyword') || '';

  // searchResult
  const [result, setResult] = useState<Activities[]>([]);

  const handleChange = (params: string) => {
    console.log(params);
  };

  const handleFetchEvents = async () => {
    const data = await fetchEvents();
    setResult(Array.isArray(data.mock) ? data.mock : []);
  };

  useEffect(() => {
    handleFetchEvents();
  }, []);

  return (
    <div>
      <ActivitySearchForm onChange={handleChange} searchParams={{ region, startTime, keyword }} />
      <Container maxW="1200px" py="80px">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="30px" as="ul" alignItems="stretch">
          {result.map((r: Activities) => (
            <ActivityCard id={r.id} name={r.name} createAt={r.created_at} status={r.status as 0 | 1} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Activities;
