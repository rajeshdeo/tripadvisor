import React from 'react'
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  FormLabel,
  Select,
  MenuOptionGroup
} from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    
    MenuDivider,
  } from '@chakra-ui/react'
 import {  useNavigate } from 'react-router-dom';

 const Payment = () => {

    const [fname,setFname]= useState("");
    
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate= useNavigate();

    const handleClick =()=>{
            
            navigate("/successful");
    }
   
  return (
    <div ><Flex
    flexDirection="column"
   height="100%"
   width="100%"
   
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
    paddingTop="100px"
    paddingBottom="70px"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.200">
      {/* <Avatar bg="teal.500" /> */}
      <Heading color="teal.400">Payment Details</Heading>
      <Heading color="green">Total amount : ₹1,33,524.00</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
              <FormControl>
              <FormLabel>Cardholder Name</FormLabel>
              <InputGroup gap="20px">
              
                <Input type="text" placeholder="" value={fname} onChange={(e)=>setFname(e.target.value)} required/>
             
               
              </InputGroup>
            </FormControl>
            <FormControl>
            <FormLabel>Credit/Debit card number</FormLabel>
              <InputGroup>
             
                <Input type="number" placeholder="" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                
              </InputGroup>
            </FormControl>
            <Box display="flex" gap="30px">
                     <FormControl>
        
                        <FormLabel>Expiration Date: </FormLabel>

                        <InputGroup gap="20px" >
                        
                        <select id = "dropdown" border= "1px solid black">
                                <option value="N/A">Month</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="1">5</option>
                                <option value="2">6</option>
                                <option value="3">7</option>
                                <option value="4">8</option>
                                <option value="1">9</option>
                                <option value="2">10</option>
                                <option value="3">11</option>
                                <option value="4">12</option>
                            </select>
                       
                        
                            <select id = "dropdown" border= "1px solid black">
                                <option value="N/A">Year</option>
                                <option value="1">2022</option>
                                <option value="2">2023</option>
                                <option value="3">2024</option>
                                <option value="4">2026</option>
                                <option value="1">2027</option>
                                <option value="2">2028</option>
                                <option value="3">2029</option>
                                <option value="4">2030</option>
                            </select>
                       
                        
                        </InputGroup>
                        
                        
                        </FormControl>

                        <FormControl>
                        <FormLabel>CVV Code </FormLabel>
                        <InputGroup>
                        
                            <Input
                            type={"password"}
                            placeholder=""  value={password} onChange={(e)=>setPassword(e.target.value)}required
                            />
                            {/* <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                {showPassword ? "Hide" : "Show"}
                            </Button>
                            </InputRightElement> */}
                        </InputGroup>
                        
                        </FormControl>

            </Box>
            
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={handleClick}
              
            >
              Proceed
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
    {/* <Box>
       Already a customer ?{" "}
      <Link color="teal.500" href="/login">
        Login
      </Link> 
    </Box> */}
  </Flex></div>
  )
}


export default Payment;