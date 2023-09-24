import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeStore from '../../stores/homeStore';
import {
  Box,
  Container,
  Input,
  Link as ChakraLink,
  Text,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react';

function CoinTracker() {
  const store = homeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <Container maxW="xl">
      <VStack spacing={4} align="stretch" mt={8}>
        <Input
          type="text"
          placeholder="Search for a cryptocurrency"
          value={store.query}
          onChange={store.setQuery}
          size="lg"
          bg="white"
          borderRadius="full"
          w="100%"
          py="4"
          fontSize="lg"
        />
        {store.coins.map((coin) => (
          <Box
            key={coin.id}
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack spacing={4}>
              <Image
                src={coin.image} // Use the "small" image URL from your data
                alt={`${coin.name} Logo`}
                boxSize="40px"
                borderRadius="full"
              />
              <ChakraLink
                as={Link}
                to={`/${coin.id}`}
                fontWeight="bold"
                fontSize="lg"
                color="purple.500"
              >
                {coin.name}
              </ChakraLink>
            </HStack>
            <Text color="black.60" fontSize="lg">
              {coin.symbol}
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}

export default CoinTracker;
