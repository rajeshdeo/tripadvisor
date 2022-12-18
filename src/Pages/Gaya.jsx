import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
  } from '@chakra-ui/react'
  
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
  
const Gaya = () => {
  return (
    <div>
        <Grid templateColumns={"repeat(5,1fr)"} gap="20px" 
        paddingTop="120px" marginBottom={"40px"} width="80%" margin="auto">
            <GridItem display="flex" alignItems={"center"} gap="20px" >
                <svg viewBox="0 0 24 24" width="18px" height="18px" class="d Vb UmNoP"><path d="M12 12.28l-.008.75h.02L12 12.28zM2 18.51h-.75v.752l.752-.002L2 18.51zm0-2.92l-.585-.469-.165.206v.263H2zm3.855-1.85v.75-.75zm3.855 1.85h.75v-.263l-.165-.206-.585.469zm0 2.9l.002.75.748-.002v-.748h-.75zm4.6.02h-.75v.752l.752-.002-.002-.75zm0-2.92l-.585-.469-.165.206v.263h.75zm3.855-1.85v.75-.75zm3.855 1.85h.75v-.263l-.165-.206-.585.469zm0 2.9l.002.75.748-.002v-.748h-.75zM13.27 7c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0014.77 7h-1.5zm-1.25 1.25c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 002.75 2.75v-1.5zM10.77 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 009.27 7h1.5zm1.25-1.25c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 00-2.75-2.75v1.5zm-3.267 8.802a4.11 4.11 0 011.445-1.132l-.638-1.357a5.61 5.61 0 00-1.973 1.545l1.166.944zm1.445-1.132a4.11 4.11 0 011.794-.39l.016-1.5a5.61 5.61 0 00-2.448.533l.638 1.357zm1.815-.39a4.1 4.1 0 011.814.39l.639-1.358a5.6 5.6 0 00-2.479-.532l.026 1.5zm1.814.39a4.1 4.1 0 011.457 1.148l1.172-.936a5.6 5.6 0 00-1.99-1.57l-.639 1.357zM2.75 18.51v-2.92h-1.5v2.92h1.5zm-.165-2.451a4.19 4.19 0 011.456-1.157l-.649-1.352a5.69 5.69 0 00-1.977 1.571l1.17.938zm1.456-1.157a4.19 4.19 0 011.814-.413v-1.5a5.69 5.69 0 00-2.463.56l.65 1.353zm1.814-.413a4.19 4.19 0 011.814.413l.649-1.352a5.69 5.69 0 00-2.463-.56v1.5zm1.814.413a4.19 4.19 0 011.456 1.157l1.17-.938a5.69 5.69 0 00-1.977-1.571l-.65 1.352zm1.291.688v2.9h1.5v-2.9h-1.5zm.748 2.15l-7.71.02.004 1.5 7.71-.02-.004-1.5zM20.02 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0021.52 9h-1.5zm-1.25 1.25c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 002.75 2.75v-1.5zM17.52 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0016.02 9h1.5zm1.25-1.25c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 00-2.75-2.75v1.5zM6.52 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 008.02 9h-1.5zm-1.25 1.25c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 002.75 2.75v-1.5zM4.02 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 002.52 9h1.5zm1.25-1.25c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 00-2.75-2.75v1.5zm9.79 10.76v-2.92h-1.5v2.92h1.5zm-.165-2.451a4.19 4.19 0 011.457-1.157l-.65-1.352a5.69 5.69 0 00-1.977 1.571l1.17.938zm1.457-1.157a4.19 4.19 0 011.813-.413v-1.5a5.69 5.69 0 00-2.463.56l.65 1.353zm1.813-.413a4.19 4.19 0 011.814.413l.649-1.352a5.69 5.69 0 00-2.463-.56v1.5zm1.814.413a4.19 4.19 0 011.456 1.157l1.17-.938a5.691 5.691 0 00-1.977-1.571l-.65 1.352zm1.291.688v2.9h1.5v-2.9h-1.5zm.748 2.15l-7.71.02.004 1.5 7.71-.02-.004-1.5z"></path></svg>
                <Text>Age 0-99</Text>
            </GridItem>
            
            <GridItem display="flex" alignItems={"center"} gap="20px">
            <svg viewBox="0 0 24 24" width="18px" height="18px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.713 3.982a9.994 9.994 0 00-4.734 8.502c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10v1.5a8.5 8.5 0 11-5.266 1.828v-1.83z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.323 4.935h-3.55v-1.5h5.05v5.05h-1.5v-3.55zM11.333 13.034v-5.36h1.5v5.457c0 .312-.116.612-.326.842l-2.765 3.033-1.109-1.01 2.7-2.962z"></path></svg>
                <Text>Duration: 12 days</Text>
            </GridItem>
            
            <GridItem display="flex" alignItems={"center"} gap="20px" width="250px">
            <svg viewBox="0 0 24 24" width="18px" height="18px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm9-5.5h1.5v5.19l3.28 3.28-1.06 1.06-3.72-3.72V6.5z"></path></svg>
            <Text>Start time: Check availability</Text>
            </GridItem>
           
            <GridItem display="flex" alignItems={"center"} gap="20px">
            <svg viewBox="0 0 24 24" width="18px" height="18px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.966 3.512v16.976h8.069V3.512h-8.07zm-.5-1.5a1 1 0 00-1 1v17.976a1 1 0 001 1h9.069a1 1 0 001-1V3.012a1 1 0 00-1-1h-9.07z"></path><path d="M11.986 3.832c-1.21 0-1.409-.53-1.358-.796h2.746c.041.266-.179.796-1.388.796z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.01 2.286h4.007l.098.635c.063.402-.09.862-.489 1.191-.386.319-.941.47-1.64.47-.697 0-1.254-.15-1.638-.477-.401-.342-.533-.815-.456-1.211l.118-.608z"></path></svg>
            <Text>Ticket type : Mobile</Text>
            </GridItem>

            <GridItem display="flex" alignItems={"center"} gap="20px">
            <svg viewBox="0 0 24 24" width="18px" height="18px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.654 10.255h4.178c-.07-1.591-.356-2.993-.766-4.017-.238-.594-.502-1.023-.756-1.293-.211-.223-.38-.3-.5-.32a6.56 6.56 0 00-.133 0c-.12.02-.29.097-.5.32-.255.27-.519.7-.756 1.293-.41 1.024-.697 2.426-.767 4.017zm-.374-5.14c-.09.18-.174.37-.252.565-.491 1.227-.805 2.825-.875 4.575H5.399a6.388 6.388 0 013.88-5.14zm2.301-1.99a7.883 7.883 0 00-7.726 7.88 7.88 7.88 0 007.883 7.886c.585 0 .872-.015 1.111-.074.123-.031.172-.05.213-.064.058-.02.099-.036.312-.073l-.26-1.478a3.842 3.842 0 00-.462.107c-.087.026-.113.035-.127.04a.286.286 0 01-.04.012c-.03.008-.132.03-.742.03-.122 0-.313-.06-.566-.327-.255-.27-.519-.7-.756-1.293-.41-1.024-.697-2.425-.767-4.016h4.203a4.673 4.673 0 01-.225 1.255l-.012.041-.005.016c-.033.113-.088.297-.099.478l1.498.088v.006s.007-.036.044-.162l.012-.04c.037-.125.089-.297.136-.504.072-.313.134-.698.152-1.178h2.734a4.156 4.156 0 01-.195.949c-.055.159-.11.28-.166.402l-.004.01a1.844 1.844 0 00-.171.507l1.484.219-.005.026s.012-.032.057-.13l.008-.018c.056-.123.137-.3.215-.53.168-.488.311-1.167.311-2.185a7.878 7.878 0 00-7.72-7.88 1.938 1.938 0 00-.325 0zm2.626 1.99c.09.181.173.37.252.565.49 1.227.804 2.825.875 4.575h2.749a6.384 6.384 0 00-3.876-5.14zM9.284 16.902a7.763 7.763 0 01-.256-.573c-.49-1.227-.805-2.824-.875-4.574H5.399a6.386 6.386 0 003.885 5.147z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.833 12.778h-8.75v6.648h5.255l3.495 2.325v-8.973zm-1.5 1.5v4.673l-1.542-1.025h-4.209v-3.648h5.75z"></path></svg>
            <Text>English</Text>  
            </GridItem>
        </Grid>
        <Box width={"80%"} margin="auto" display={"flex"} marginTop="40px">
            <Box width={"45%"}>
                <Image boxSize={"450px"} 
                src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/38/28/50.jpg" 
                alt= "image"/>
            </Box>
            <Box width={"55%"}>
                <Heading>Buddhist Tour From The Birth To Death</Heading><br />
                <Link to="#">By Varanasi Excursion</Link> <br />
                <br />
                <Text>Ideal for travelers interested in immersive experiences and Buddhism, this comprehensive tour explores key sacred Buddhist sites between Varanasi to Lucknow over 12 days of sightseeing. Highlights include a morning boat ride on the Ganges River and visiting stupa structures—thought to hold relics of the Buddha—and archeological sites where Buddha is believed to have been born, met his disciples, and attained enlightenment. Transportation and accommodation for 11 nights with breakfast are included.</Text>
                <br />
                <Text>from</Text>
                <Box width="90%" alignItems={"center"} justifyContent="space-between" display="flex">
                <Heading>₹1,33,524.00 </Heading>

               <Link to="/payment"><Button padding="20px" width="120px"
                 backgroundColor={"yellow"} color="black"
                fontSize="lg" borderRadius="40px"
                  display={"flex"} alignItems="center"
                  _hover={{
                    
                    // webkitFilter:"blur(0.6px)",
                    filter:"opacity(80%)"
                  }} >Book</Button></Link> 
                </Box>
                <Text>per adult</Text>

            </Box>
        </Box>


        <br/><br/>

        <Box width="80%" margin="auto" marginBottom={"50px"}cursor="pointer">
        <Heading>More to explore in Varanasi</Heading>
        <br/>
    <Carousel  >
      <Carousel.Item >
        <Grid templateColumns='repeat(4, 1fr)' gap="10px" >
        <GridItem  _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/63/47/ad/caption.jpg?w=300&h=300&s=1"
          alt="First slide"
          
        />
        <Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg" >Cultural, <br/>Tours</Heading>
        </GridItem>
        <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/79/4a/14/caption.jpg?w=300&h=300&s=1"
          alt="Second slide"
          
        /><Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg">Historical <br /> Tours</Heading>
        </GridItem>
       
       <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
             <img  className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f3/e6/8d/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"
        
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">City Tour</Heading>
        </GridItem>

         <GridItem  _hover={{
            filter:"opacity(90%)"
        }}> <img className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/25/52/d9/caption.jpg?w=300&h=300&s=1"
          alt="Fourth slide"
         
        />
        <Heading color="white" marginTop="-50px" paddingLeft="10px"
        size="lg">Full-day Tours</Heading></GridItem>
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
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/11/c0/caption.jpg?w=300&h=300&s=1"
          alt="First slide"
          
        />
        <Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg">Private Day <br/>Trips</Heading>
        </GridItem>
        <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
        <img
          className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/2e/38/00/caption.jpg?w=300&h=300&s=1"
          alt="Second slide"
          
        /><Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg">Dining <br /> Experiences</Heading>
        </GridItem>
       
       <GridItem _hover={{
            filter:"opacity(90%)"
        }}>
             <img  className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/ca/d2/caption.jpg?w=300&h=300&s=1"
          alt="Third slide"
        
        />
        <Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg">Nature and <br /> Wild Tours</Heading>
        </GridItem>

         <GridItem  _hover={{
            filter:"opacity(90%)"
        }}> <img className="d-block "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5e/01/68/caption.jpg?w=300&h=300&s=1"
          alt="Fourth slide"
         
        />
        <Heading color="white" marginTop="-90px" paddingLeft="10px"
        size="lg">Overnight <br /> Tours</Heading></GridItem>
        </Grid>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
     
    </Carousel>
        </Box>


        <br /><br />


        <Accordion defaultIndex={[0]} allowMultiple width="80%" margin="auto">
            <AccordionItem>
            <h2>
                <AccordionButton>
                <Box as="span" flex='1' textAlign='left' >
           <Heading size="md">What's included</Heading> 
                </Box>
            <AccordionIcon />
        </AccordionButton>
            </h2>
        <AccordionPanel pb={4}>
        Breakfast <br />

        Transport by private air-conditioned vehicle<br />
        Breakfast<br />

        English speaking private guide for 12 days<br />
        11 Nights accommodation in 3- star hotels With Breakfast<br />
        Boat Ride at Varanasi<br />
        Tuk-Tuk Ride<br /><br />
       <Text fontWeight={"bold"}> What's not included<br /></Text>
        Lunch<br />
        Dinner<br />
        </AccordionPanel>
        </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    <Heading size="md">Depature and return</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text fontWeight={"bold"}>Departure details</Text>
                Traveller pickup is offered.
                Pickup from Hotel Lobby
                Hotel pickup is offered. View the hotel list on our checkout page to see if yours is included among the pickup points.
                <Text fontWeight={"bold"}>Return details</Text>
                Returns to original departure point
                                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    <Heading size= "md">Accessibility</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Wheelchair accessible <br/>
                Service animals allowed<br/>
                Near public transportation<br/><br/>
                If you have questions about accessibility, we’d be happy to help. Just call the number below and reference the <br/> product code: 85404P29
                000-0800-100-6999
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    <Heading size="md">Additional Information</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Confirmation will be received at time of booking <br />
                Please advise any specific dietary requirements at time of booking<br />
                May be operated by a multi-lingual guide<br />
                Most travellers can participate<br />
                This is a private tour/activity. Only your group will participate<br />
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    <Heading size="md">Cancellation Policy</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                For a full refund, cancel at least 24 hours in advance <br />of the start date of the experience.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    <Heading size="md">Covid safety</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text fontWeight={"bold"}>What you can expect during your visit</Text>
                Regular temperature checks for staff <br />
                Temperature checks for tour participants upon arrival<br />
                Guides required to regularly wash hands<br />
                Hand sanitiser available to travellers and staff<br />
                Transportation vehicles regularly sanitised<br />
                Contactless payment for gratuities and add-ons<br />
                Face masks required for guides in public areas<br />
                Face masks required for travellers in public areas<br />
                Social distancing enforced throughout experience<br />
                Face masks provided for travellers<br />
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    <Heading size="md">FAQ'S</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text fontWeight={"bold"}>Which attractions will I visit with Buddhist Tour From The Birth To Death?</Text><br />
                During this experience, places you will visit include:<br />
                Mahabodhi Temple<br />
                Sarnath<br />
                Rajgir<br />
                Great Buddha Statue<br />
                Parinirvana Stupa<br /> <br />
                Discover and book Buddhist Tour From The Birth To Death on Tripadvisor<br /><br />
                <Text fontWeight={"bold"}>How much is Buddhist Tour From The Birth To Death?</Text><br />
                Buddhist Tour From The Birth To Death price starts from ₹ 1,29,974.48. Discover and book Buddhist Tour From The Birth To Death on Tripadvisor<br /><br />
                <Text fontWeight={"bold"}>What is the Buddhist Tour From The Birth To Death cancellation policy?</Text> <br />
                Buddhist Tour From The Birth To Death cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience.<br /> Discover and book Buddhist Tour From The Birth To Death on Tripadvisor<br /><br />
                <Text fontWeight={"bold"}>Which company provides Buddhist Tour From The Birth To Death?</Text><br />
                Buddhist Tour From The Birth To Death is hosted by Varanasi Excursion. Read reviews, discover additonal experiences or contact Varanasi Excursion on Tripadvisor.
                                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    <Heading size="md">Help</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                If you have questions about this tour or need help making your booking, we’d be happy to help. Just call the number <br /> below and reference the product code: 85404P29
                  <br />  000-0800-100-6999
                 </AccordionPanel>
            </AccordionItem>
        </Accordion>
        
        

       

        <br /><br />
        <Footer />

    </div>
  )
}

export default Gaya;