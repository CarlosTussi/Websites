import FullSection from './FullSection';
import { Heading, Image, } from "@chakra-ui/react";
import avatarImg from '../assets/me.jpeg';

function LandingSection()
{
    return(
        <FullSection bg="#0A0A0A" color="#39FF14" spacing="1.5em">   
                {/* <Image boxSize="150px" borderRadius="full" src={avatarImg}/> */}
                <Heading as="h1" size="4xl">{`</>`}</Heading>
                <Heading as="h2">Carlos Tussi</Heading>      
        </FullSection>
    );
}

export default LandingSection;