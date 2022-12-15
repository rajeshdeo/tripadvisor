import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel() {
  return (
    <Box width="85%" margin="auto" marginBottom={"50px"}cursor="pointer">
        <Heading>Ring in the new year</Heading>
        <p>New Year's Eve spots to welcome 2023</p> <br/>
    <Carousel  >
      <Carousel.Item >
        <Grid templateColumns='repeat(4, 1fr)' gap="10px" >
        <GridItem  _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6d/df/ec/fireworks-yao-rooftop.jpg?w=300&h=300&s=1"
          alt="First slide"
          
        />
        <Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg">Bangkok, <br/>Thailand</Heading>
        </GridItem>
        <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f3/33/caption.jpg?w=300&h=300&s=1"
          alt="Second slide"
          
        /><Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Taipei,Taiwan</Heading>
        </GridItem>
       
       <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
             <img  className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/62/c3/88/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"
        
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Kyoto, Japan</Heading>
        </GridItem>

         <GridItem  _hover={{
            filter:"opacity(90%)"
        }}> <img className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/7c/eb/cb/photo0jpg.jpg?w=300&h=300&s=1"
          alt="Fourth slide"
         
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Tokyo, Japan</Heading></GridItem>
        </Grid>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
      <Carousel.Item >
        <Grid templateColumns='repeat(4, 1fr)' gap="10px" >
        <GridItem  _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/7b/23/c5/photo2jpg.jpg?w=300&h=-1&s=1"
          alt="First slide"
          
        />
        <Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg">Seoul, South <br/>Korea</Heading>
        </GridItem>
        <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2c/18/1f/photo9jpg.jpg?w=300&h=-1&s=1"
          alt="Second slide"
          
        /><Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Bali, Indonesia</Heading>
        </GridItem>
       
       <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
             <img  className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/29/d4/40/night-view-of-the-hsbc.jpg?w=300&h=300&s=1"
          alt="Third slide"
        
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Singapore</Heading>
        </GridItem>

         <GridItem  _hover={{
            filter:"opacity(90%)"
        }}> <img className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f7/a4/bd/baga-beach.jpg?w=300&h=300&s=1"
          alt="Fourth slide"
         
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Goa, India</Heading></GridItem>
        </Grid>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
     
    </Carousel>
    </Box>
  );
}

export default ImageCarousel;