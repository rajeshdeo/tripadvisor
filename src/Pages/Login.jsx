import { useContext, useState } from "react";
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
  useConst
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

const Login = () => {

  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");
  const navigate= useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const {isAuth}= useContext(AuthContext);

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleLogin= async(e)=>{
    e.preventDefault();
    
    // console.log(item);
    let item={
      email,password
    }
   // console.log(item);
    try{
    let res= await fetch("http://localhost:3004/signup",{
            method:"GET",
           
            headers:{
                "Content-Type":"application/json",
            }
    })
    let result= await res.json();
    let flag=false;
    for(let i=0;i<result.length;i++)
    {
      if(result[i].email===item.email && result[i].password===item.password)
      {
              flag=true ;  
             
      }
    }
      if(flag===true)
      {
        navigate("/")
      }
      else{
        alert("Wrong Credentials !")
      }
    // navigate("/")
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
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "400px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" value={email}
                    onChange={(e)=>setEmail(e.target.value)} required/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<FaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password" value={password}
                    onChange={(e)=>setPassword(e.target.value)} required
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Forgot Password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
     <Link to="/signup"><Box>
        New to us?{" "}
        <Link color="teal.500" href="/signUp">
          Sign Up
        </Link>
      </Box></Link> 
    </Flex>
  );
};

export default Login;
