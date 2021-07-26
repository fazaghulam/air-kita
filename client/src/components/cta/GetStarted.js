import React, { Component } from "react";
import axios from 'axios';
import tw from "twin.macro";
import { Container } from "../misc/Layouts";
import {CircleProgress} from 'react-gradient-progress'
import { ReactComponent as Good } from "../../images/good.svg";

const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto pb-32 pt-10 lg:pb-32 flex flex-col items-center`;

const WhiteBackgroundContainer = tw.div`w-3/4 py-5 mt-8 bg-white shadow-md rounded-2xl h-20  grid grid-cols-2 divide-x divide-gray-400`
const ColoredBackgroundContainer = tw.div`w-3/4 py-5 mt-12 bg-ijo shadow-md rounded-2xl h-40 grid grid-cols-5`

const Used = tw.div``;
const Price = tw.div``;

const Illustration = tw.div`grid place-content-center col-span-2`;
const FunFact =tw.div` col-span-3 flex flex-wrap content-center`;

const Text = tw.h5`text-black text-3xl sm:text-4xl font-semibold mt-10 mb-5`;

export default class GetStarted extends Component {
  constructor(props) {
    super(props);

    this.state = {
      debit: 0,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/display/today/')
      .then(response => {
        this.setState({ debit: response.data[0].value });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <Container >
        <Text>Today</Text>
        <CircleProgress 
          width={230}
          percentage={82} 
          primaryColor={['#4FB64C', '#D4F3D7']} 
          secondaryColor="#E2E7E7" 
          fontColor='#4FB64C' 
          fontSize='30px'
        />
        <ContentWithPaddingXl>
          <WhiteBackgroundContainer>
            <Used>
              <p>Used</p>
              <p>{ this.state.debit } liter</p>
            </Used>
            <Price>
              <p>Price</p>
              <p>1</p>
            </Price>
          </WhiteBackgroundContainer>
          <ColoredBackgroundContainer>
            <Illustration>
              <Good></Good>
            </Illustration>
            <FunFact>
              <p>1</p>
            </FunFact>
          </ColoredBackgroundContainer>
        </ContentWithPaddingXl>
      </Container>
    ) 
  }
}
