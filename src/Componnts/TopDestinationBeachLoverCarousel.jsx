import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

function TopDestinationBeachLoverCarousel() {
  return (
    <Box width="85%" margin="auto" marginBottom={"50px"}cursor="pointer">
        <Heading>Top destinations for beach lovers</Heading>

        <p>Recommended based on your activity</p> <br/>
    <Carousel  >
      <Carousel.Item >
        <Grid templateColumns='repeat(4, 1fr)' gap="10px" >
        <GridItem  _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/68/f6/caption.jpg?w=300&h=300&s=1&cx=988&cy=664&chk=v1_d1b5b3f4c384c764b7e1"
          alt="First slide"
          
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Tulum, Mexico</Heading>
        </GridItem>
        <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/bora-bora.jpg?w=300&h=300&s=1"
          alt="Second slide"
          
        /><Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Bora Bora, French </Heading>
        </GridItem>
       
       <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
             <img  className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/dd/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"
        
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Tenerife, Spain</Heading>
        </GridItem>

         <GridItem  _hover={{
            filter:"opacity(90%)"
        }}> <img className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f4/70/caption.jpg?w=300&h=300&s=1"
          alt="Fourth slide"
         
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Hawai</Heading></GridItem>
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
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cd/04/e4/caption.jpg?w=300&h=300&s=1"
          alt="First slide"
          
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Miami, FL</Heading>
        </GridItem>
        <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/65/5f/4b/caption.jpg?w=300&h=300&s=1&cx=1321&cy=849&chk=v1_14f7826859b4f964e5b2"
          alt="Second slide"
          
        /><Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg">Dominican Republic</Heading>
        </GridItem>
       
       <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
             <img  className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/69/b0/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"
        
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Myrtle Beach, SC</Heading>
        </GridItem>

         <GridItem  _hover={{
            filter:"opacity(90%)"
        }}> <img className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5e/c2/caption.jpg?w=300&h=300&s=1"
          alt="Fourth slide"
         
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Bali, Indonesia</Heading></GridItem>
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

export default TopDestinationBeachLoverCarousel;