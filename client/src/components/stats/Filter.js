import React, {useState} from "react";
import tw from "twin.macro";
import { Container } from "../misc/Layouts";
import styled from "styled-components";

const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto pb-16 flex flex-col items-center`;
const Text = tw.h5`text-black text-3xl sm:text-4xl font-semibold mt-10 mb-5`;
const PlanDurationSwitcher = tw.div`w-3/4 block sm:inline-block sm:w-auto bg-white shadow-md rounded-2xl px-1 py-1`;
const SwitchButton = styled.button`
  ${tw`w-1/3 sm:w-32 px-3 sm:px-8 py-3 rounded-2xl text-base font-semibold text-gray-500 transition duration-300`}
  ${props => props.active && tw`bg-ijotua text-white`}
`;

export default ({
    planDurations = [
        {
            text: "Day",
            switcherText: "Day",
        },
        {
            text: "Week",
            switcherText: "Week",
        },
        {
            text: "Month",
            switcherText: "Month",
        }
    ]
}) => {
  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Container >
      <Text>Activity</Text>
      <ContentWithPaddingXl>
        <PlanDurationSwitcher>
            {planDurations.map((planDuration, index) => (
                <SwitchButton active={activeDurationIndex === index} key={index} onClick={() => setActiveDurationIndex(index)}>{planDuration.switcherText}</SwitchButton>
            ))}
        </PlanDurationSwitcher>
      </ContentWithPaddingXl>
    </Container>
  );
};
