import { Box, Heading, Input, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import Confetti from "react-confetti"; // Import the Confetti component

import DashboardLayout from '../../components/dashboardLayout'

function Transaction() {
  const [initialPrice, setInitialPrice] = useState("");
  const [cryptoQuantity, setcryptoQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [output, setOutput] = useState("");
  const [outputColor, setOutputColor] = useState("black");
  const [showConfetti, setShowConfetti] = useState(false);

  const calculateProfitAndLoss = () => {
    const ip = parseFloat(initialPrice);
    const qty = parseInt(cryptoQuantity);
    const curr = parseFloat(currentPrice);

    if (isNaN(ip) || isNaN(qty) || isNaN(curr)) {
      setOutput("Enter valid input for all fields.");
      setOutputColor("black");
      setShowConfetti(false);
    } else {
      if (ip > curr) {
        const loss = (ip - curr) * qty;
        const lossPercentage = ((loss / (ip * qty)) * 100).toFixed(2);
        setOutput(`The Loss is ${loss.toFixed(2)} and the Loss Percentage is ${lossPercentage}%`);
        setOutputColor("red");
        setShowConfetti(false);
      } else if (ip < curr) {
        const profit = (curr - ip) * qty;
        const profitPercentage = ((profit / (ip * qty)) * 100).toFixed(2);
        setOutput(`The Profit is ${profit.toFixed(2)} and the Profit Percentage is ${profitPercentage}%`);
        setOutputColor("green");
        setShowConfetti(true);
      } else {
        setOutput("No Profit No Loss");
        setOutputColor("black");
        setShowConfetti(false);
      }
    }
  };

  return (
    <DashboardLayout title="Dashboard">
      <Center>
        <Box
          maxW="600px"
          width="100%"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          bgColor="white"
        >
          <Heading as="h1" mb={4} fontSize="xl" fontWeight="semibold">
            Cryto-146 trade
          </Heading>
          <label htmlFor="initial-price">Initial Price</label>
          <Input
            type="number"
            id="initial-price"
            placeholder="Enter initial Price here"
            value={initialPrice}
            onChange={(e) => setInitialPrice(e.target.value)}
            mb={2}
          />

          <label htmlFor="crypto-quantity">Quantity of Crypto-currency</label>
          <Input
            type="number"
            id="crypto-quantity"
            placeholder="Enter the number of Coins bought here"
            value={cryptoQuantity}
            onChange={(e) => setcryptoQuantity(e.target.value)}
            mb={2}
          />

          <label htmlFor="current-price">Current Price</label>
          <Input
            type="number"
            id="current-price"
            placeholder="Enter Current Price here"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            mb={2}
          />

          <Button
            onClick={calculateProfitAndLoss}
            mt={4}
          >
            Tell Me!!
          </Button>

          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={200}
            />
          )}

          <Box mt={4}>
            <strong>Result:</strong>
            <p id="output-box" style={{ color: outputColor }}>
              {output}
            </p>
          </Box>
        </Box>
      </Center>
    </DashboardLayout>
  );
}

export default Transaction;
