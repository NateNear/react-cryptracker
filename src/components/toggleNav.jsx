/* eslint-disable react/prop-types */
import Sidenav from "./sidenav"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

  
const ToggleNav = ({isOpen, onClose}) => {

    return (
      <>
    
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
              <Sidenav/>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default ToggleNav