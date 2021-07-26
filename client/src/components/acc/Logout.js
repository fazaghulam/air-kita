import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../misc/Layouts";

const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto flex flex-col items-center`;

const SubmitButton = styled.button`
  ${tw`tracking-wide font-semibold bg-ijotua text-gray-100 w-24 h-10 py-4 rounded-lg hover:bg-ijotuahov transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
`;

export default ({
    submitButtonText = "Log out",
}) => {

  return (
    <Container >
      <ContentWithPaddingXl>
        <SubmitButton type="submit">
          <span>{submitButtonText}</span>
        </SubmitButton>
      </ContentWithPaddingXl>
    </Container>
  );
};
