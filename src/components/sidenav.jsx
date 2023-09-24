import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";

function Sidenav() {
  const navLinks = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    // Set the height of the parent container to 100vh to cover the whole viewport
    <Box height="100vh" display="flex">
      {/* Stack is a chakra component that automatically puts everything under it in a column. */}
      <Stack
        w={"16rem"}
        h={"100%"}
        boxShadow={{
          base: "none",
          lg: "12px 0px 10px -10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Heading textAlign="center" fontSize={"20px"} as={"h1"} pt={"3.5rem"}>
          @Cryptracker
        </Heading>

        {/* Box is like a div */}
        <Box mt={"6"} mx={"3"}>
          {navLinks.map((nav) => (
            // Hstack used to VStack: used to stack elements in the vertical direction
            // HStack: used to stack elements in the horizontal direction
            // Stack: used to stack elements in the vertical or horizontal direction
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius={"10px"}
                py={"3"}
                px={"4"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text>{nav.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

export default Sidenav;
