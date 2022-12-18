import { Box, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link} from 'react-router-dom';

function Carousels() {
  const [index, setIndex] = useState(0);
  

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

   
  };
  

  return (
    <Box width={"85%"}    margin={'auto'} marginTop='80px' marginBottom='80px'>
      <Heading size='lg'>Top experiences on Tripadvisor</Heading>
      <p>The best tours, activities and tickets</p><br/>
    <Carousel  onSelect={handleSelect} controls= "true" width='50px' >
      <Carousel.Item   >
        
        <Grid templateColumns='repeat(4, 1fr)' gap={6}   margin="auto" cursor={'pointer'}>
        <Link to= "/gaya">
          <GridItem  
          _hover={{
            textDecoration:"underline",
            // webkitFilter:"blur(0.6px)",
            filter:"opacity(80%)",
            color:"black"
          }}>
            
          <Image boxSize={"268px"}  src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/38/28/50.jpg"
          alt="First slide"/>
        <br/>
          <Heading size='md'>Buddhist Tour From The Birth To Death</Heading>
          <p>from ₹1,33,524 per adult</p>
          
          </GridItem></Link>

          <GridItem  _hover={{
            textDecoration:"underline",
            // webkitFilter:"blur(0.6px)",
            filter:"opacity(80%)"
          }} >
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/03/51/caption.jpg?w=300&h=300&s=1"
          alt="Second slide"/>
         <br/>
         <Heading size='md'>Tokyo Full-Day Private Tour with Government-Licensed Guide</Heading>
          <p>from ₹9,320 per adult</p>
          </GridItem>


          <GridItem   _hover={{
            textDecoration:"underline",
            // webkitFilter:"blur(0.6px)",
            filter:"opacity(80%)"
          }}>
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/29/77/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"/>
          <br/>
        <Heading size='md'>Lion City Bike Tourof Singapore</Heading>
          <p>from ₹5,352 per adult</p>
       
          </GridItem>
         


          <GridItem   _hover={{
            textDecoration:"underline",
            // webkitFilter:"blur(0.6px)",
            filter:"opacity(80%)"
          }}>
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/67/e5/07/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"
        /><br/>
        <Heading size='md'>Private Taj Mahal from Delhi by Car - All Inclusive</Heading>
          <p>from ₹5,673 per adult</p>
        
          </GridItem>
          
        </Grid>
        
      </Carousel.Item>

      
      <Carousel.Item  >
        
        <Grid templateColumns='repeat(4, 1fr)' gap={6}   margin="auto" cursor={'pointer'}>
          <GridItem  _hover={{
            textDecoration:"underline",
            // webkitFilter:"blur(0.6px)",
            filter:"opacity(80%)"
          }}>
            
          <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/15/08/73/caption.jpg?w=300&h=300&s=1"
          alt="First slide"/>
        <br/>
          <Heading size='md'>Half-Day Railway Market and Floating Market Tour in Thailand</Heading>
          <p>from ₹2,455 per adult</p>
        
          </GridItem>

          <GridItem  _hover={{
            textDecoration:"underline",
            // webkitFilter:"blur(0.6px)",
            filter:"opacity(80%)"
          }} >
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/91/ce/71/prayer-flags-to-loved.jpg?w=300&h=300&s=1"
          alt="Second slide"/>
         <br/>
         <Heading size='md'>Best Half Day DMZ Tour from Seoul (No Forced Shopping)</Heading>
          <p>from ₹5,419 per adult</p>
          </GridItem>


          <GridItem _hover={{
            textDecoration:"underline",
            // webkitFilter:"blur(0.6px)",
            filter:"opacity(80%)"
          }}  >
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/fa/1f/ae/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"/>
          <br/>
        <Heading size='md'>Phi Phi Islands Adventure Day Trip with Seaview Launch by V. Marine Tour</Heading>
          <p>from ₹6,874 per adult</p>
       
          </GridItem>
         


          <GridItem _hover={{
            textDecoration:"underline",
            // webkitFilter:"blur(0.6px)",
            filter:"opacity(80%)"
          }} >
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/13/9a/c6/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"
        /><br/>
        <Heading size='md'>Private Full Day Sightseeing Tour to Mount Fuji and Hakone</Heading>
          <p >from ₹43,184 per adult</p>
        
          </GridItem>
          
        </Grid>
        
      </Carousel.Item>
    </Carousel>
    </Box>
  );
}

export default Carousels;
