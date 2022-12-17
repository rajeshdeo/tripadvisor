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
  FormLabel
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

const SignUp = () => {

    const [fname,setFname]= useState("");
    const [lname,setLname]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
        const navigate= useNavigate(); 
    
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);


  const handleSubmit = async(e)=>{
        e.preventDefault();
        let item={
            id:Math.random()+password+fname,
            fname,lname,email,password
        }
        // console.log(item);
        try{
        let res= await fetch("http://localhost:3004/signup",{
                method:"POST",
                body:JSON.stringify(item),
                headers:{
                    "Content-Type":"application/json",
                }
        })
        let result= await res.json();
        console.log(result);
        navigate("/login");
    }catch(err){
        console.log(err);
    }
  }
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Avatar bg="teal.500" /> */}
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
                <FormControl>
                <FormLabel>Full Name</FormLabel>
                <InputGroup gap="20px">
                
                  <Input type="text" placeholder="First Name" value={fname} onChange={(e)=>setFname(e.target.value)} required/>
               
                  <Input type="text" placeholder="Last Name" value={lname} onChange={(e)=>setLname(e.target.value)} required/>
                </InputGroup>
              </FormControl>
              <FormControl>
              <FormLabel>Email address</FormLabel>
                <InputGroup>
               
                  <Input type="email" placeholder="email address" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                  
                </InputGroup>
              </FormControl>
              <FormControl>
              <FormLabel>Password </FormLabel>
                <InputGroup>
                
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}required
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
         Already a customer ?{" "}
        <Link color="teal.500" href="/login">
          Login
        </Link> 
      </Box>
    </Flex>
  );
};

export default SignUp;
