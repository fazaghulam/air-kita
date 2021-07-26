import React, {useState} from "react";
import tw from "twin.macro";
import { Container } from "../misc/Layouts";
import styled from "styled-components";



const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto flex flex-col items-center `;
const WhiteBackgroundContainer = tw.div`w-3/4 py-5 px-5 mb-10 bg-white shadow-md rounded-2xl h-14 max-w-sm`;

export default ({

}) => {

    const options = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ];
  return (
    <Container >
      <ContentWithPaddingXl>
        <WhiteBackgroundContainer>

        </WhiteBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
