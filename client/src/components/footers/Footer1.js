import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "../misc/Layouts.js"
import { ReactComponent as HomeIcon } from "../../images/home.svg";
import { ReactComponent as StatisticsIcon } from "../../images/statistics-white.svg";
import { ReactComponent as UserIcon } from "../../images/user-white.svg";


const Container = tw(ContainerBase)`text-gray-100 bg-primary-500 absolute inset-x-0 bottom-0 sm:rounded-lg`
const Content = tw.div`max-w-screen-xl mx-auto py-5`;

const SocialLinksContainer = tw.div`flex justify-around`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4 my-2`}
  svg {
    ${tw`w-8 h-8`}
  }
`;
const SocialLinkActive = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4 my-2`}
  svg {
    ${tw`w-20 h-8`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <SocialLinksContainer>
          <SocialLinkActive href="/home">
            <HomeIcon />
          </SocialLinkActive>
          <SocialLink href="/statsday">
            <StatisticsIcon />
          </SocialLink>
          <SocialLink href="/account">
            <UserIcon />
          </SocialLink>
        </SocialLinksContainer>
      </Content>
    </Container>
  );
};
