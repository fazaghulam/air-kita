import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/Footer2.js";
import DatePicker from "../components/stats/DatePicker.js";
import UsedSpentWeek from "../components/stats/UsedSpentWeek";
import Chart from "../components/stats/Chart.js";
import MonthPicker from "../components/stats/MonthPicker.js";
import { Container as ContainerBase } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";



const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-md m-0 sm:mx-20 sm:my-16 text-gray-900 shadow sm:rounded-lg flex justify-center flex-1 bg-bgku `;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 sm:p-12 flex-1 relative pb-32 lg:pb-32 md:pb-32`;
const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto pb-16 flex flex-col items-center`;
const Text = tw.h5`text-black text-3xl sm:text-4xl font-semibold mt-10 mb-5`;
const PlanDurationSwitcher = tw.div`w-3/4 block sm:inline-block sm:w-auto bg-white shadow-md rounded-2xl px-1 py-1`;
const SwitchButton = styled.button`
  ${tw`w-1/3 sm:w-32 px-3 sm:px-8 py-3 rounded-2xl text-base font-semibold text-gray-500 transition duration-300`}
`;
const SwitchButtonActive = styled.button`${tw`w-1/3 sm:w-32 px-3 sm:px-8 py-3 rounded-2xl text-base font-semibold transition duration-300 bg-ijotua text-white`}`;


export default ({

}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <Text>Activity</Text>
          <ContentWithPaddingXl>
            <PlanDurationSwitcher>
              <a href="/statsday"><SwitchButton>Day</SwitchButton></a>
              <a href="/statsweek"><SwitchButtonActive>Week</SwitchButtonActive></a>
              <a href="/statsmonth"><SwitchButton>Month</SwitchButton></a>
            </PlanDurationSwitcher>
          </ContentWithPaddingXl>
          {/* <MonthPicker /> */}
          {/* <DatePicker /> */}
          <UsedSpentWeek />
          <Chart />
          <Footer />
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
