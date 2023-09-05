import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react"
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
//stack is a chakra component that automatically puts everything under it in a column.
    
    <Stack w={"16rem"} h={"100vh"}
        boxShadow={{
            base: "none",
            lg:"xl"
        }}>
        
        <Heading textAlign="center" fontSize={"20px"} as={"h1"} pt={"3.5rem"}>
            @Cryptracker
        </Heading>
        
        {/* Box is like a div */}
            
        <Box mt={"6"} mx={"3"}>
            {navLinks.map((nav)=>(


    //Hstack used to VStack: used to stack elements in the vertical direction
    // HStack: used to stack elements in the horizontal direction
    // Stack: used to stack elements in the vertical or horizontal direction

    
            <HStack borderRadius={"10px"} 
                key={nav.text}
                py={"3"}
                px={"4"}
                _hover={{
                    bg: "#F3F3F7",
                    color: "#171717"
                }}>
                <Icon as={nav.icon} />
                <Text>{nav.text}</Text>
                </HStack>
            ))}
        </Box>
        
    </Stack>
  )
}

export default Sidenav