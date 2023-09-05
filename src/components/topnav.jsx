/* eslint-disable react/prop-types */
import { Box, Heading, Button, HStack, Icon} from "@chakra-ui/react";
import { FaUserNinja } from "react-icons/fa"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { AiOutlineMenu } from "react-icons/ai"

function Topnav({ title, onOpen }) {
  return (
  <Box px={"4"} bgColor={"#fff"}>

    <HStack maxW={"60rem"} h={"16"} justify={"space-between"} mx={"auto"}>
     <Icon as={AiOutlineMenu} onClick={onOpen} display={{
            base: "block",
            lg:"none"
          }}/>
      <Heading fontWeight={"medium"} fontSize={"28px"}>
        {title}
      </Heading>
    
      
      <Menu>
      
        <MenuButton as={Button}>
          <Icon as={FaUserNinja} />
        </MenuButton>
        <MenuList>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Support</MenuItem>
        </MenuList>
      
      </Menu>
        
    </HStack>
 
  </Box>

  )
}

export default Topnav;