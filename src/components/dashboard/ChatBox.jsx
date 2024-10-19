import React from 'react'
import ChatText from './ChatText'
import InputBox from './InputBox'
import ChatboxBottom from './ChatboxBottom'

function ChatBox({isTrue}) {
    return (
        <>
        {
            isTrue && <div className='md:w-[331px]  bg-bgSecondary rounded-[12px] '>
            <div className='md:w-full md:h-[63px] bg-primary rounded-tl-[12px] rounded-tr-[12px] flex items-center p-4'>
                <h1 className='font-onest font-bold text-[18px] leading-[22px] text-white'>Chat with Cypher</h1>
            </div>
            <div className='w-full h-full'>
                <div className='flex flex-col gap-[15px] p-[15px]'>
                    <div className='flex justify-end'>
                        <ChatText className="">Lorem ipsum dolar sit general sac mascho werho</ChatText>
                    </div>

                    <ChatText className="bg-bgSecondary text-secondary">Lorem ipsum dolar sit general sac mascho werho</ChatText>
                    <ChatText className="bg-bgSecondary text-secondary">Lorem ipsum dolar sit general sac mascho werho</ChatText>

                    <div className='flex justify-end'>
                        <ChatText className="">Lorem ipsum dolar sit general sac mascho werho</ChatText>
                    </div>
                    <InputBox />


                    <ChatboxBottom />

                </div>
            </div>

        </div>
        }
            


        </>
    )
}

export default ChatBox
