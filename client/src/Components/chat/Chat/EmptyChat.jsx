
import{emptyChatImage} from "../../../constants/data";

import { Box, Typography, styled, Divider } from "@mui/material";

const Component=styled(Box)`
    background: #f8f9f8;
    padding: 36px 0;
    text-align: center;
    height: 100vh;
`;

const Container=styled(Box)`
    padding: 0 200px;
`;

const Image=styled('img')({
    width: 400,
    marginTop: 100
});

const Title=styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inehrit;
    font-weight: 300;
    color: #41525d;
`;

const SubTitle = styled(Box)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`;

const SytledDivider=styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`
const EmptyChat = () =>{

    return(
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="image" />
                <Title>WhatsApp Web</Title>
                <SubTitle>Send and receive messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>

                <SytledDivider />
            </Container>
        </Component>
    )
}

export default EmptyChat;