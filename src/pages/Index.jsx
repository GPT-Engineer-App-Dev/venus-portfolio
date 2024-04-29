import { Box, Flex, Image, Text, VStack, Heading, SimpleGrid } from '@chakra-ui/react';
import { FaCalendarAlt, FaTrophy, FaImage } from 'react-icons/fa';

const Index = () => {
  return (
    <Flex direction="column" align="center" m="auto" p={5}>
      <Box as="section" w="full" h="100vh" bgImage="url('/images/venus-landing.jpg')" bgPos="center" bgSize="cover">
        <VStack spacing={8} justify="center" h="full" bg="rgba(0, 0, 0, 0.5)">
          <Heading as="h1" size="2xl" color="white">Venus Williams</Heading>
          <Text fontSize="xl" color="white">Professional Tennis Player</Text>
        </VStack>
      </Box>
      <Box as="section" p={10}>
        <Heading as="h2" size="xl" mb={5}><FaTrophy /> Career Achievements</Heading>
        <Text>
          Venus Williams, an American professional tennis player, has been ranked world No. 1 by the Women's Tennis Association for a total of 11 weeks. She has won seven Grand Slam singles titles and fourteen Grand Slam Women's doubles titles.
        </Text>
      </Box>
      <Box as="section" p={10}>
        <Heading as="h2" size="xl" mb={5}><FaCalendarAlt /> Upcoming Events</Heading>
        <Text>
          Stay tuned for upcoming matches and events featuring Venus Williams. Check back regularly for the latest updates and schedules.
        </Text>
      </Box>
      <Box as="section" p={10}>
        <Heading as="h2" size="xl" mb={5}><FaImage /> Gallery</Heading>
        <SimpleGrid columns={3} spacing={5}>
          <Image src="/images/trophy-gallery.jpg" alt="Venus Williams with Trophies" />
          {/* Additional images can be added here */}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Index;