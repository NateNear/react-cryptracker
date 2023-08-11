import { HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { BiSolidDashboard } from "react-icons/bi"
import { GrTransaction } from "react-icons/gr"

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
        }

    ]

  return (

    <Stack boxShadow={"sm"} maxW={"16rem"} h={"100vh"} bg={"red"}>
        <Heading>@CrypTracker</Heading>
        {navLinks.map((nav)=>(
            <HStack key={nav.text}>
                <Icon as={nav.icon} />
                <Text>{nav.text}</Text>
            </HStack>
        ))}
    </Stack>
  )
}

export default Sidenav