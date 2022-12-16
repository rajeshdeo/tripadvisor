import React from "react";
import { Box, Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Carousels from "../Componnts/Carousels";

import ImageCarousel from "../Componnts/ImageCarousel";
import MoretoExploreCarousel from "../Componnts/MoretoExploreCarousel";
import TopDestinationBeachLoverCarousel from "../Componnts/TopDestinationBeachLoverCarousel";
import HomeRenter from "../Componnts/HomeRenter";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={3}
        paddingTop={"100px"}
        width={"81%"}
        margin={"auto"}
        marginBottom={"40px"}
      >
        <GridItem
          h="70px"
          borderRadius={"10px"}
          border="1px solid gray"
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          fontSize={"20px"}
          fontWeight={"bold"}
          _hover={{
            background: "gray.300",
            cursor: "pointer",
          }}
        >
          <Text>Hotels</Text>
          <svg
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            class="d Vb UmNoP"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.832 5.228c0-.469.38-.85.85-.85h15.624c.47 0 .85.381.85.85v6.65c.68.561 1.22 1.392 1.22 2.543v4.847h-1.5v-1.673H3.284v1.673h-1.5V14.394c.025-.655.304-1.589 1.049-2.351V5.228zm2.634 5.587c.264-.034.542-.051.837-.051h3.896c-.503-.483-1.31-.931-2.433-.931-1.09 0-1.83.467-2.3.982zm7.39-.051h4.468l.036.003c.161.016.343.042.536.082a2.36 2.36 0 00-.221-.233c-.447-.41-1.18-.783-2.254-.783-1.078 0-1.751.273-2.181.584a2.395 2.395 0 00-.385.347zm5.8-1.283c-.726-.651-1.812-1.148-3.235-1.148-1.347 0-2.339.347-3.06.868-.342.248-.61.525-.821.802-.736-.86-2.005-1.67-3.774-1.67-1.629 0-2.733.712-3.434 1.503V5.878h14.324v3.603zM3.283 16.095h16.594V14.42c0-.703-.355-1.188-.888-1.545-.56-.374-1.263-.561-1.74-.612H6.304c-1.118 0-1.81.316-2.237.677-.57.482-.765 1.123-.783 1.496v1.658z"
            ></path>
          </svg>
        </GridItem>
        <GridItem
          h="70px"
          borderRadius={"10px"}
          border="1px solid gray"
          display={"flex"}
          alignItems={"center"}
          fontSize={"20px"}
          fontWeight={"bold"}
          _hover={{
            background: "gray.300",
            cursor: "pointer",
          }}
        >
          <Text>Holiday Homes</Text>
          <svg
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="d Vb UmNoP"
          >
            <path d="M3 21.2h-.75v.75H3v-.75zm0-12l-.416-.624-.334.223V9.2H3zm9-6l.416-.624L12 2.299l-.416.277L12 3.2zm9.01 6h.75v-.402l-.334-.222-.416.624zm0 12v.75h.75v-.75h-.75zm-17.26 0v-12h-1.5v12h1.5zM3.416 9.824l9-6-.832-1.248-9 6 .832 1.248zm8.168-6l9.01 6 .832-1.248-9.01-6-.832 1.248zM20.26 9.2v12h1.5v-12h-1.5zm.75 11.25H3v1.5h18.01v-1.5zM18 12.96h-6.99v1.5H18v-1.5zm-7.74.75c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 002.75-2.75h-1.5zm-1.25 1.25c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 002.75 2.75v-1.5zm-1.25-1.25c0-.69.56-1.25 1.25-1.25v-1.5a2.75 2.75 0 00-2.75 2.75h1.5zm1.25-1.25c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 00-2.75-2.75v1.5zm5.24 1.25v3h1.5v-3h-1.5z"></path>
          </svg>
        </GridItem>
        <GridItem
          h="70px"
          borderRadius={"10px"}
          border="1px solid gray"
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          fontSize={"20px"}
          fontWeight={"bold"}
          _hover={{
            background: "gray.300",
            cursor: "pointer",
          }}
        >
          <Text>Things to Do</Text>
          <svg
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="d Vb UmNoP"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.25 5.25h19.5v4.454l-.536.16a2.752 2.752 0 000 5.272l.536.16v4.454H2.25v-4.454l.536-.16a2.752 2.752 0 000-5.272l-.536-.16V5.25zm1.5 1.5v1.876a4.25 4.25 0 010 7.748v1.876h16.5v-1.876a4.25 4.25 0 010-7.748V6.75H3.75z"
            ></path>
            <path d="M12 15a1 1 0 110 2 1 1 0 010-2zM12 11.5a1 1 0 110 2 1 1 0 010-2zM12 8a1 1 0 110 2 1 1 0 010-2z"></path>
          </svg>
        </GridItem>
        <GridItem
          h="70px"
          borderRadius={"10px"}
          border="1px solid gray"
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          fontSize={"20px"}
          fontWeight={"bold"}
          _hover={{
            background: "gray.300",
            cursor: "pointer",
          }}
        >
          <Text>Restaurants</Text>
          <svg
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="d Vb UmNoP"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.798 5.141L17.47 2.47l1.06 1.06-2.671 2.672c-.679.679-1.055 1.462-1.12 2.199-.043.5.054 1.003.327 1.472L19.97 4.97l1.06 1.06-4.906 4.906c.473.281.974.387 1.466.354.718-.047 1.467-.394 2.096-1.023A905.812 905.812 0 0022.24 7.7l.226-.228 1.067 1.055-.228.23a1012.001 1012.001 0 01-2.559 2.57c-.849.849-1.927 1.384-3.057 1.459a4.027 4.027 0 01-2.647-.768l-1.231 1.231 7.72 7.72-1.061 1.06-5.97-5.97-3 3-1.75-1.75-4.72 4.72-1.06-1.06 4.72-4.72-4.392-4.391a4.75 4.75 0 010-6.718L5 4.44l7.75 7.75 1.232-1.232a3.971 3.971 0 01-.737-2.686c.1-1.147.67-2.246 1.553-3.13zM13.439 15L5.028 6.588a3.25 3.25 0 00.33 4.21L11.5 16.94 13.44 15z"
            ></path>
          </svg>
        </GridItem>
        <GridItem
          h="70px"
          borderRadius={"10px"}
          border="1px solid gray"
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          fontSize={"20px"}
          fontWeight={"bold"}
          _hover={{
            background: "gray.300",
            cursor: "pointer",
          }}
        >
          <Text>Travel Stories</Text>
          <svg
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="d Vb UmNoP"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.566 11.25h4.873c-.07-1.831-.397-3.448-.87-4.628-.268-.672-.57-1.165-.865-1.478-.25-.264-.458-.364-.62-.388H11.922c-.161.024-.37.124-.62.388-.296.313-.597.806-.866 1.478-.472 1.18-.798 2.797-.869 4.628zm-.133-6.027a8.259 8.259 0 00-.39.841c-.554 1.385-.907 3.198-.978 5.186H4.788a7.252 7.252 0 014.645-6.027zm2.393-1.965C7.078 3.348 3.25 7.226 3.25 12a8.744 8.744 0 008.747 8.75c4.833 0 8.753-3.918 8.753-8.75a8.741 8.741 0 00-8.57-8.742 2.079 2.079 0 00-.354 0zm2.746 1.965c.142.263.272.545.39.841.554 1.385.907 3.198.978 5.186h3.272a7.248 7.248 0 00-4.64-6.027zm4.64 7.527H15.94c-.071 1.988-.424 3.8-.977 5.185-.12.298-.25.581-.393.845a7.259 7.259 0 004.642-6.03zm-9.774 6.036a8.244 8.244 0 01-.395-.851c-.554-1.384-.907-3.197-.978-5.185H4.788a7.25 7.25 0 004.65 6.036zm5.001-6.036c-.07 1.83-.397 3.448-.87 4.628-.268.671-.57 1.164-.865 1.477-.295.312-.532.395-.701.395-.17 0-.407-.083-.701-.395-.297-.313-.598-.806-.867-1.477-.472-1.18-.798-2.797-.869-4.628h4.873z"
            ></path>
          </svg>
        </GridItem>
        <GridItem
          h="70px"
          borderRadius={"10px"}
          border="1px solid gray"
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          fontSize={"20px"}
          fontWeight={"bold"}
          _hover={{
            background: "gray.300",
            cursor: "pointer",
          }}
        >
          <Text>Flights</Text>

          <svg
            viewBox="0 0 20.43 20.58"
            width="20px"
            height="20px"
            class="d Vb UmNoP"
            data-name="Layer 1"
          >
            <path d="M7.63 20.58L0 12.69l1.87-1.87 3.39.6c.08 0 .5 0 .73-.21l2.15-2.08c.02-.05.04-.13.04-.16 0-.02-.07-.1-.26-.19L.72 5.46l2.74-2.68 8.83 1.59c.2.02.49.02.62 0l3.21-3.24c.86-.78 2.58-1.75 3.76-.58 1.17 1.17.24 2.88-.49 3.71l-3.16 3.23c-.02.06-.05.24.01.61l1.52 8.83-2.7 2.43-3.29-6.84a.518.518 0 00-.18-.14L9.1 14.71s-.01.15.01.3l.55 3.62-2.04 1.95zM2.1 12.71l5.57 5.75.4-.38-.43-2.85c-.16-1.04.25-1.5.51-1.68l2.42-2.24c.45-.42.91-.46 1.2-.43.73.08 1.18.69 1.27.81l.06.1 2.45 5.1.59-.54-1.38-8.01c-.21-1.22.19-1.75.44-1.96l3.09-3.15c.25-.29.89-1.26.53-1.63-.36-.36-1.36.32-1.66.6l-3.27 3.29c-.47.45-1.35.42-1.83.35l-8.1-1.45-.63.62 5.21 2.4c.73.33.99.82 1.08 1.17.2.75-.23 1.38-.28 1.45l-.09.11-2.24 2.17c-.78.71-1.85.62-1.96.6l-2.67-.47-.27.27z"></path>
          </svg>
        </GridItem>
      </Grid>
      <Box boxSize="85%" margin={"auto"} paddingLeft={"10px"} gap={"0"}>
        <Image
          src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp"
          alt="first_Image"
        />
      </Box>

      <Carousels />

      <Box bg="" w="85%" p={4}  margin="auto" display="flex" cursor={"pointer"} marginBottom={"40px"}>
            <Box w="60%"  bg="#faf1ed" color="black" fontSize="20px" paddingLeft="15px">
              <Heading size='lg' marginTop={"30px"}>Get out there</Heading>
              <p >Best of our best tours, attractions and activities you won't want to miss</p>
              <Button backgroundColor={"black"} color="white"
              padding="25px 30px" borderRadius={"50px"} marginTop="30px"
              _hover={{
                    color:"white",
                    filter:"opacity(80%)"
              }}>See the list</Button>
            </Box>
            <Box w="40%" >
              <Image height="200px" width="100%"src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1"/>
            </Box>
      </Box>

      <ImageCarousel />
      <MoretoExploreCarousel />
      <TopDestinationBeachLoverCarousel />
      <HomeRenter />

      <Box  width={"100%"} bgColor="#004f32"  padding="50px" marginBottom="80px">
        <Box width="80%" display="flex" margin="auto">
          <Box width="20%" paddingTop="20px" paddingBottom="150px" textAlign={"center"} marginRight="50px">
                <img src="https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg" alt="logo"/>
                <Heading color="white" size="lg" margin="20px">Travellers' Choice Best of the Best</Heading>
                <Button color="white" bgColor="black" borderRadius={"50px"} marginTop="50px"
                _hover={{
                  filter:"opacity(90%)"
                }}>See the winners</Button>
          </Box>
          <Box width="80%" backgroundImage={"https://static.tacdn.com/img2/brand/feed/tc_cards_tablet.jpeg"}>
                
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
