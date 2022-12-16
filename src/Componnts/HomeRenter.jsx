import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

function HomeRenter() {
  return (
    
    <Box width="85%" margin="auto" paddingTop={"40px"} paddingBottom={"60px"}>
        <Heading size="lg">Home Rentals Near You</Heading>
       <br/>
       <Box width="100%" margin="auto"  display="flex">
        <Box width="33%"  height="25px">
            <Heading size="md" padding="40px">We think you'd enjoy these homes for a quick trip out of town.</Heading>
        </Box>
        <Box width="70%">
            <Carousel  >
            <Carousel.Item >
                <Grid templateColumns='repeat(3, auto)'  >
                
                <GridItem _hover={{
                    filter:"opacity(90%)",
                    textDecoration:"underline"
                }} bgColor="white" >

                <Image className="d-block" boxSize={"240px"} objectFit='cover'
                src="https://media-cdn.tripadvisor.com/media/vr-splice-j/04/b1/eb/96.jpg"
                alt="Second slide"/><br/>
                <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Rentals in Varanasi</Text>
                </GridItem>
            
            <GridItem _hover={{
                    filter:"opacity(90%)",
                    textDecoration:"underline"
                }} bgColor="white" >
                    <Image  className="d-block " boxSize={"240px"} objectFit='cover'
                src="https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/4b/90/fd.jpg"
                alt="Third slide"
                
                /><br/>
                <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Rentals in Kolkata (Calcutta)</Text>
                </GridItem>

                <GridItem  _hover={{
                    filter:"opacity(90%)",
                    textDecoration:"underline"
                }} bgColor="white" >
                    <Image className="d-block " boxSize={"240px"} objectFit='cover'
                src="https://media-cdn.tripadvisor.com/media/vr-splice-j/02/60/2e/db.jpg"
                alt="Fourth slide"
                
                />
                <br/>
                <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Rentels in Patna</Text>
                </GridItem>
                </Grid>
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            
            <Carousel.Item >
                <Grid templateColumns='repeat(3, 1fr)' gap="10px" >
                
                <GridItem _hover={{
                    filter:"opacity(90%)",
                    textDecoration:"underline"
                }} bgColor="white" >
                <Image 
                className="d-block" boxSize={"240px"} objectFit='cover'
                src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/48/dd/9a.jpg"
                alt="Second slide"/><br/>
                <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Rentals in Raichak</Text>
                </GridItem>
            
            <GridItem _hover={{
                    filter:"opacity(90%)",
                    textDecoration:"underline"
                }} bgColor="white" >
                    <Image  className="d-block " boxSize={"240px"} objectFit='cover'
                src="https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/0e/68/6c/48.jpg"
                alt="Third slide"
                
                /><br/>
                <Text textAlign="center"fontSize={"17px"} fontWeight="bold">Rentals in Chandannagar</Text>
                </GridItem>

                <GridItem  _hover={{
                    filter:"opacity(90%)",
                    textDecoration:"underline"
                }} bgColor="white" > 
                <Image  className="d-block " boxSize={"240px"} objectFit='cover'
                src="https://media-cdn.tripadvisor.com/media/vr-splice-j/06/49/a6/d6.jpg"
                alt="Fourth slide"
                
                /><br/>
                <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Rentals in Tirupath</Text>
                </GridItem>
                </Grid>
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            
            </Carousel>
        </Box>
        </Box>
    </Box>
    
  );
}

export default HomeRenter;