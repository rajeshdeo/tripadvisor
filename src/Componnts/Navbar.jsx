import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  
  
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import tripadvisor from "../tripadvisor.png";
import { Link } from 'react-router-dom';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("white")} px={4} borderBottom={"1px"} height={"80px"} position={"fixed"} width={"100%"}
      zIndex="5">
        <Flex h={20} alignItems={'center'} justifyContent={'space-around'}>

          <Link to="/">  
          <img src={tripadvisor} alt="logo" width={"200px"} justifyContent={"center"}
        paddingTop={"50px"} display={"flex"} height={"80px"}/>

            </Link>
        <Flex h={20} alignItems={'center'} justifyContent={'space-around'} gap={"25px"}
        >
                <Button bgColor={"white"} gap={"10px"}>
                <svg viewBox="0 0 24 24" width="20px" height="20px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.288 6.793L6.69 14.368l-.816 3.746 3.724-.839 7.588-7.583-2.9-2.9zm3.96 1.84l-2.898-2.9.556-.554A2.318 2.318 0 0117.52 4.5c.378 0 .73.104 1.031.315l.01.007.012.008c1.12.757 1.221 2.26.326 3.151l-.65.651zm-7.896 10.01l-5.99 1.35C4.34 20 4.319 20 4.298 20a.297.297 0 01-.29-.36l1.31-6.023 9.529-9.5A3.818 3.818 0 0117.52 3c.66 0 1.318.184 1.893.587a3.536 3.536 0 01.546 5.457l-9.607 9.599z"></path></svg>
                    <h3>Review</h3>
                </Button>
                <Button bgColor={"white"} gap={"10px"}>
                <svg viewBox="0 0 24 24" width="20px" height="20px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"></path></svg>
                    <h3>
                        Trips
                    </h3>
                </Button>
                <Button bgColor={"white"} gap={"10px"}>
                <svg viewBox="0 0 24 24" width="20px" height="20px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.283c1.865.168 3.412.964 4.529 2.218 1.254 1.409 1.922 3.343 1.956 5.487.013.811.015 4.106.015 5.762H21v1.5h-5.336c-.063.31-.172.694-.368 1.085-.232.464-.592.951-1.146 1.32-.558.372-1.269.595-2.15.595s-1.592-.223-2.15-.595a3.382 3.382 0 01-1.146-1.32 4.378 4.378 0 01-.368-1.085H3v-1.5h1.75c0-1.651.002-4.932.015-5.755C4.76 9.843 5.43 7.907 6.694 6.5 7.82 5.245 9.384 4.45 11.25 4.283V3a.75.75 0 01.75-.75zm-5.75 15.5h11.5c0-1.657-.002-4.94-.015-5.738-.03-1.856-.604-3.422-1.576-4.513C15.196 6.418 13.799 5.75 12 5.75c-1.8 0-3.218.67-4.19 1.751-.98 1.09-1.552 2.651-1.545 4.496v.015a748.17 748.17 0 00-.015 5.738zm3.632 1.5c.04.135.094.276.164.415.143.286.346.549.636.742.285.19.7.343 1.318.343.619 0 1.033-.152 1.318-.343.29-.193.493-.456.636-.742a2.7 2.7 0 00.164-.415H9.883z"></path></svg>
                    <h3>
                        Alerts
                    </h3>
                </Button>
                <Link to="/login"><Button
                bgColor={"black"} gap={"10px"}
                color={"white"}
                _hover={{
                  backgroundColor:"gray.300",
                  color:"teal"
                }}>Login</Button></Link>
                    
                   
                
                <Button bgColor={"white"} gap={"10px"}>
                <svg viewBox="0 0 24 24" width="20px" height="20px" padding-right="10px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 4.75H2v-1.5h2.5c.779 0 1.354.398 1.71.844.339.423.54.959.54 1.406v.25h14.71l-1.874 7.5H6.75v1.25c0 .29.164.76.475 1.175.327.436.632.575.775.575h9a2.75 2.75 0 11-2.45 1.5h-3.1a2.75 2.75 0 11-4.645-.407c-.314-.219-.578-.499-.78-.768-.439-.585-.775-1.365-.775-2.075v-9a.95.95 0 00-.21-.469c-.144-.179-.319-.281-.54-.281zm4.5 13a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm8 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-10.25-6h11.664l1.125-4.5H6.75v4.5z"></path></svg>
                    <h3>
                       Basket
                    </h3>
                </Button>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              
            </Stack>
          </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}