import Conversation from "../model/Conversation.js";


export const newConversation = async (request,response) => {
    try{
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;
        // console.log("request " , request.body);

        const exist = await Conversation.findOne({members: {$all: [receiverId,senderId]}});
        if(exist)
        {
            return response.status(200).json('conversation already exist');
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        })

        // console.log("sender"  ,senderId);


        await newConversation.save();
        return response.status(200).json('Conversation saved successfully');
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const getConversation = async(request,response) => {
    try{
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;
        let conversation=await Conversation.findOne({members: {$all: [receiverId, senderId]}});
        console.log(conversation);
        return response.status(200).json(conversation);
    }catch(error){
        return response.status(500).json(error.message);
    }
}