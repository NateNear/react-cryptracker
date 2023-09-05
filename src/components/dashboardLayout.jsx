/* eslint-disable react/prop-types */
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidenav from "./sidenav"
import Topnav from "./topnav"
import ToggleNav from "./toggleNav"

function DashboardLayout({ title, children }) {

    // eslint-disable-next-line no-unused-vars
    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <div>
    <Flex >
      <Box display={{
            base: "none",
            lg: "flex"
        }} bgColor={"#fff"}>
            <Sidenav/>
        </Box>
      
      <ToggleNav isOpen={isOpen} onClose={onClose}/>
      <Box flexGrow={"1"}>
        <Topnav title={title} onOpen={onOpen} />
        <Container maxW={"60rem"} py={"6"}>
            {children}
        </Container>
      </Box>
      </Flex>
  </div>
  )
}

export default DashboardLayout