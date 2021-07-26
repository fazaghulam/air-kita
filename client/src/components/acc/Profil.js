import React from "react";
import tw from "twin.macro";
import { Container } from "../misc/Layouts";
import { ReactComponent as Profil } from "../../images/profil-pict.svg";

const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto pt-10 sm:pt-5 pb-8 flex flex-col items-center`;
const Text = tw.h5`text-black text-xl sm:text-xl font-bold`;


export default ({

}) => {

  return (
    <Container >
      <ContentWithPaddingXl>
       <Profil />
       <Text>Faza Ghulam Ahmad</Text>
      </ContentWithPaddingXl>
    </Container>
  );
};
