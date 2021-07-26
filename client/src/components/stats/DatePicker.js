import React from "react";
import { Container } from "../misc/Layouts";
import tw from "twin.macro";
import DatePicker from "./Date.js";

const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto flex flex-col items-center `;
const WhiteBackgroundContainer = tw.div`w-3/4 py-5 px-5 mb-10 bg-white shadow-md rounded-2xl h-32 max-w-sm`;

export default ({

}) => {
    const selectedDay = (val) =>{
        console.log(val)

    };
    return (
        <Container >
            <ContentWithPaddingXl>
                <WhiteBackgroundContainer>
                    <DatePicker 
                        getSelectedDay={selectedDay}
                        endDate={100}
                        selectDate={new Date()}
                        labelFormat={"MMMM YYY"}
                    />
                </WhiteBackgroundContainer>
            </ContentWithPaddingXl>
        </Container>
    );
};