import React, { Component } from "react";
import axios from "axios";
import { Container } from "../misc/Layouts";
import tw from "twin.macro";
import { ReactComponent as Water } from "../../images/water.svg";
import { ReactComponent as Money } from "../../images/money.svg";

const ContentWithPaddingXl= tw.div`max-w-sm mx-auto flex flex-row justify-between`;
const WhiteBackgroundContainer = tw.div`w-9/20 py-5 px-1 mb-10 bg-white shadow-md rounded-2xl h-24 max-w-sm grid grid-cols-5`;

const Image = tw.div`grid place-content-center col-span-2`;
const Data =tw.div`pl-3 col-span-3 flex flex-wrap content-center`;

const Value = tw.p`text-lg font-bold`;
const Satuan = tw.p`ml-2 text-abu text-sm font-medium`;
const Keterangan = tw.p`text-sm font-medium`;


export default class UsedSpentWeek extends Component {
    constructor(props) {
        super(props);

        this.state = {
            debit: 0,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/display/week/')
            .then(response => {
                var arr = response.data.map(data => data.value)
                var lodash = require('lodash')
                this.setState({ 
                    debit: lodash.sum(arr)
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <Container >
                <ContentWithPaddingXl>
                    <WhiteBackgroundContainer>
                        <Image>
                            <Water />
                        </Image>
                        <Data>
                            <Value>{this.state.debit}</Value>
                            <Satuan>liter</Satuan>
                            <Keterangan>used</Keterangan>
                        </Data>
                    </WhiteBackgroundContainer>
                    <WhiteBackgroundContainer>
                        <Image>
                            <Money />
                        </Image>
                        <Data>
                            <Value>15 K</Value>
                            <Satuan>IDR</Satuan>
                            <Keterangan>spent</Keterangan>
                        </Data>
                    </WhiteBackgroundContainer>
                </ContentWithPaddingXl>
            </Container>
        );
    }
}
