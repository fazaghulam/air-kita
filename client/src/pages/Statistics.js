import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Filter from "../components/stats/Filter.js";
import Footer from "../components/footers/Footer2.js";
import DatePicker from "../components/stats/DatePicker.js";
import UsedSpent from "../components/stats/UsedSpent.js";
import Chart from "../components/stats/Chart.js";
import MonthPicker from "../components/stats/MonthPicker.js";
import { Container as ContainerBase } from "../components/misc/Layouts";
import tw from "twin.macro";



const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-md m-0 sm:mx-20 sm:my-16 text-gray-900 shadow sm:rounded-lg flex justify-center flex-1 bg-bgku `;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 sm:p-12 flex-1 relative pb-32 lg:pb-32 md:pb-32`;



export default ({

}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
            <Filter />
            <MonthPicker />
            <DatePicker />
            <UsedSpent />
            <Chart />
            <Footer />
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
