import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccessful = () => {

  return (
    <div>
      
        <Box width="400px" margin="auto" paddingTop="120px" display={"grid"} alignItems="center"
        justifyContent={"center"}>
             <Heading marginLeft={"-60px"} marginBottom="50px">Payment Successful !</Heading> 
        <Image 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM5VV7Zcl5MbWVGCm69Ug6nwCtjWt8DVh9mFRmZrH3g&s" alt="image"/>
        </Box>
    <Link to="/" />
            
    </div>
  )
}

export default PaymentSuccessful;