import { useEffect } from 'react';
import showStore from '../../../stores/showStore';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

function Show() {
  const store = showStore();
  const params = useParams();

  useEffect(() => {
    store.fetchData(params.id);
  }, []);

  if (!store.data) return null;

  return (
    <Container maxW="xl" mt={4}>
      <Flex direction="column" align="center">
        <Box
          bg="purple.500"
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          color="white"
          textAlign="center"
        >
          <img
            src={store.data.image.large}
            alt={store.data.name}
            width={100}
            height={100}
          />
          <Heading as="h2" size="xl" mt={4}>
            {store.data.name} ({store.data.symbol})
          </Heading>
        </Box>
        <AreaChart
          width={970}
          height={400}
          data={store.graphData}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Price"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
        <Flex
          justifyContent="space-between"
          w="100%"
          mt={8}
          flexWrap="wrap"
          gap={4}
        >
          <Stat>
            <StatLabel>Market Cap Rank</StatLabel>
            <StatNumber>{store.data.market_cap_rank}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>24h High</StatLabel>
            <StatNumber>${store.data.market_data.high_24h.usd}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>24h Low</StatLabel>
            <StatNumber>${store.data.market_data.low_24h.usd}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Circulating Supply</StatLabel>
            <StatNumber>{store.data.market_data.circulating_supply}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Current Price</StatLabel>
            <StatNumber>${store.data.market_data.current_price.usd}</StatNumber>
            <StatHelpText>
              <StatArrow
                type={
                  store.data.market_data.price_change_percentage_24h > 0
                    ? 'increase'
                    : 'decrease'
                }
              />
              {store.data.market_data.price_change_percentage_24h.toFixed(2)}%
            </StatHelpText>
          </Stat>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Show;
