import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import GetStarted from "../components/cta/GetStarted.js";
import Footer from "../components/footers/Footer1.js";
import { Container as ContainerBase } from "../components/misc/Layouts";
import tw from "twin.macro";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-md m-0 sm:mx-20 sm:my-16 text-gray-900 shadow sm:rounded-lg flex justify-center flex-1 bg-bgku`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 sm:p-12 flex-1 relative`;

export default ({

}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
            <GetStarted />
            <Footer />
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
