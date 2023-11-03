import { useContext } from "react";

import { Dialog, Box, styled } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
//Components
import Menu from './Menu/Menu';
import EmptyChat from "./Chat/EmptyChat";
import ChatBox from "./Chat/ChatBox";
// import { Chat } from "@mui/icons-material";


const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;
`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14);
`
const dialogstyle = {
    height : '96%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: 0,
    overflow: 'hidden'
}


const ChatDialog = () => {

    const { person } = useContext(AccountContext);

    return(
        <Dialog 
            open={true}
            PaperProps={{sx : dialogstyle}}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />} 
                </RightComponent>
            </Component>

        </Dialog>
    );
}

export default ChatDialog;