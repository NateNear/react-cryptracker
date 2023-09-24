// import React from 'react'
import { CustomCard } from "../../chakra/cardStruct"
import { Stack, HStack, Text, Icon, Button } from "@chakra-ui/react"
import { BsArrowUpRight,  } from "react-icons/bs"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

function pricingSec() {
  return (
    <CustomCard>
         <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={8}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}

            </HStack>
            
            <HStack ml={"-4"}>
              <Icon as={BsArrowUpRight} color={"green.500"}/>
              <Text textStyle="sm" fontWeight="medium" color={"green.500"}>
                22%
              </Text>{" "}
              
            </HStack>

            <HStack>
              <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Deposit</Button>
              <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Withdraw</Button>
            </HStack>
          </HStack>
        </Stack>
    </CustomCard>
  )
}

export default pricingSec