import React from "react";
import { Container } from "../misc/Layouts";
import tw from "twin.macro";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto flex flex-col items-center `;
const InfoContainer = tw.div`w-3/4 py-5 px-5 mb-10 bg-white shadow-md rounded-2xl h-44 max-w-sm grid grid-rows-3 divide-y divide-gray-300`;
const HelpContainer = tw.div`w-3/4 py-5 px-5 mb-10 bg-white shadow-md rounded-2xl h-36 max-w-sm grid grid-rows-2 divide-y divide-gray-300`;
const PersonContainer = tw.div`w-3/4 py-5 px-5 mb-10 bg-white shadow-md rounded-2xl h-20 max-w-sm`;


const Row = tw.div`pb-3 flex flex-wrap justify-between content-end`;

const Text = tw.p`text-ijotua text-sm font-normal flex`;


export default ({

}) => {

    return (
        <Container >
          <ContentWithPaddingXl>
            <InfoContainer>
              <Row>
                <p>Name</p>
                <Text>Faza Ghulam Ahmad</Text>
              </Row>
              <Row>
                <p>Customer ID</p>
                <Text>123456789</Text>
              </Row>
              <Row>
                <p>Address</p>
                <Text>Jl. Garuda 8A Rewwin</Text>
              </Row>
            </InfoContainer>
            <PersonContainer>
              <Row>
                <p>Total Person</p>
                <Text>
                  <p>5</p>
                  <Arrow />
                </Text>
              </Row>
            </PersonContainer>
            <HelpContainer>
              <Row>
                <p>Tips</p>
                <Arrow />
              </Row>
              <Row>
                <p>About</p>
                <Arrow />
              </Row>
            </HelpContainer>
          </ContentWithPaddingXl>
        </Container>
    );
};