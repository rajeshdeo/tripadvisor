import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

function MoretoExploreCarousel() {
  return (
    <Box width="100%" margin="auto" marginBottom={"50px"}cursor="pointer"
    bgColor={"#faf1ed"}>
        <Box width="85%" margin="auto" paddingTop={"40px"} paddingBottom={"60px"}>
        <Heading size="lg">More to Explore</Heading>
       <br/>
    <Carousel  >
      <Carousel.Item >
        <Grid templateColumns='repeat(4, 1fr)' gap="10px" height="300px" >
        <GridItem  _hover={{
            filter:"opacity(90%)",
            textDecoration:"underline"
        }} bgColor="white" >
        <img
          className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/64/b3/b1e43685-a4e8-4163.jpg?w=400&h=300&s=1"
          alt="First slide"
          
        /><br/>
        <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Best new things to do in Japan in 2022</Text>
        </GridItem>
        <GridItem _hover={{
            filter:"opacity(90%)",
            textDecoration:"underline"
        }} bgColor="white" >

        <img className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/65/7b/3f7b9f66-88a6-40e8.jpg?w=400&h=300&s=1"
          alt="Second slide"/><br/>
        <Text textAlign="center" fontSize={"17px"} fontWeight="bold">7 Bangkok hotels that highlight Thailand's spectacular architecture</Text>
        </GridItem>
       
       <GridItem _hover={{
            filter:"opacity(90%)",
            textDecoration:"underline"
        }} bgColor="white" >
             <img  className="d-block " 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/69/3e/fa289785-e533-4c5e.jpg?w=400&h=300&s=1"
          alt="Third slide"
        
        /><br/>
        <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Guide to planning a day trip to the Blue Mountains from Sydney</Text>
        </GridItem>

         <GridItem  _hover={{
            filter:"opacity(90%)",
            textDecoration:"underline"
        }} bgColor="white" >
             <img className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/67/82/1d550793-c229-4d33.jpg?w=400&h=300&s=1"
          alt="Fourth slide"
         
        />
        <br/>
        <Text textAlign="center" fontSize={"17px"} fontWeight="bold">A first-timer’s guide to Australia’s Kangaroo Island</Text>
        </GridItem>
        </Grid>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
      <Carousel.Item >
        <Grid templateColumns='repeat(4, 1fr)' gap="10px" >
        <GridItem  _hover={{
            filter:"opacity(90%)",
            textDecoration:"underline"
        }} bgColor="white" >
        <img
          className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/68/63/5a715c6a-4bb0-4e7b.jpg?w=400&h=300&s=1"
          alt="First slide"
          
        /><br/>
        <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Top 2022 year-end events in Singapore to plan your trip around</Text>
        </GridItem>
        <GridItem _hover={{
            filter:"opacity(90%)",
            textDecoration:"underline"
        }} bgColor="white" >
        <img
          className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/69/3e/fa289785-e533-4c5e.jpg?w=400&h=300&s=1"
          alt="Second slide"/><br/>
          <Text textAlign="center" fontSize={"17px"} fontWeight="bold">Top 10 Northern Territory Indigenous tours & experiences in Australia</Text>
        </GridItem>
       
       <GridItem _hover={{
            filter:"opacity(90%)",
            textDecoration:"underline"
        }} bgColor="white" >
             <img  className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/6a/6a/28de9140-040f-453f.jpg?w=400&h=-1&s=1"
          alt="Third slide"
        
        /><br/>
        <Text textAlign="center"fontSize={"17px"} fontWeight="bold">India bucket list: 8 must do things on your next visit</Text>
        </GridItem>

         <GridItem  _hover={{
            filter:"opacity(90%)",
            textDecoration:"underline"
        }} bgColor="white" > 
        <img className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/6c/a6/fd1cbde3-5e7e-4084.jpg?w=400&h=-1&s=1"
          alt="Fourth slide"
         
        /><br/>
        <Text textAlign="center" fontSize={"17px"} fontWeight="bold">11 beautiful places in India that have to be seen to be believed</Text>
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
  );
}

export default MoretoExploreCarousel;