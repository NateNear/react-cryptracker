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
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

function Topnav({ title, onOpen }) {
  const navigate = useNavigate();
  function handleLogout() {
    const auth = getAuth();
  
    signOut(auth)
      .then(() => {
        navigate('/signup')
        // Logout was successful
        // You can redirect the user to the login page or perform any other necessary actions
      })
      .catch((error) => {
        // Handle any errors that occur during logout
        console.error("Error during logout:", error);
      });
  }


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
      
        <MenuButton as={Button} bg={"blackAlpha.400"}>
          <Icon as={FaUserNinja} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
          <MenuItem>Support</MenuItem>
        </MenuList>
      
      </Menu>
        
    </HStack>
 
  </Box>

  )
}

export default Topnav;