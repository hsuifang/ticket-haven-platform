'use client';

import { Box, Heading, Container, Grid, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import ActivityCard from '@/components/activity/ActivityCard';
import { Activities } from '@/types/activityTypes';

type Content = {
  id: string;
  name: string;
  result: Activities[];
};

const ActivitySearchTemplate = ({ title, tabs = [] }: { title: string; tabs: Content[] }) => {
  return (
    <Container maxW="1200px" py="80px">
      <Box as="section">
        <Heading as="h2" fontSize="28px" mb="32px">
          {title}
        </Heading>
        <Tabs variant="unstyled">
          <TabList mb="24px">
            {tabs.map((opt) => {
              return (
                <Tab
                  key={opt.id}
                  borderWidth="1px"
                  borderRadius="md"
                  mr="8px"
                  _selected={{ color: 'white', bg: 'brand.100' }}
                >
                  {opt.name}
                </Tab>
              );
            })}
          </TabList>
          <TabPanels>
            {tabs.map((tab) => {
              return tab.result ? (
                <TabPanel p="0">
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="30px" as="ul" alignItems="stretch">
                    {tab.result.map((r: Activities) => (
                      <ActivityCard id={r.id} name={r.name} createAt={r.created_at} status={r.status as 0 | 1} />
                    ))}
                  </Grid>
                </TabPanel>
              ) : (
                <></>
              );
            })}
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default ActivitySearchTemplate;
