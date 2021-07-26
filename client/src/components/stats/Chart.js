import React, { Component } from "react";
import axios from "axios";
import { Container } from "../misc/Layouts";
import tw from "twin.macro";
import {Line} from 'react-chartjs-2';


const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto flex flex-col items-center`;
const WhiteBackgroundContainer = tw.div`w-3/4 py-5 px-5 mb-10 bg-white shadow-md rounded-2xl h-48 max-w-sm`;

export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    fill: true,
                    lineTension: 0,
                    backgroundColor: 'rgba(188,166,252,0.25)',
                    borderColor: 'rgb(117,89,206)',
                    borderWidth: 2,
                    data: [65, 55, 60, 50, 70, 55, 68]
                }
            ],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/display/week/')
            .then(response => {
                this.setState({
                    labels: response.data.map(data => data.day),
                })
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
                        <Line
                            data={this.state}
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Water used'
                                    },
                                    legend: {
                                        display: false
                                    }
                                },
                                scales: {
                                    y: {
                                        ticks: {
                                            color: 'rgba(0,0,0,0.35)',
                                            font: {
                                                size: 11,
                                            },
                                        },
                                        beginAtZero: true
                                            
                                    },
                                    x: {
                                        ticks: {
                                            color: 'rgba(0,0,0,0.35)',
                                            font: {
                                                size: 12,
                                            },
                                        },
                                    }
                                }
                            }}
                        />
                    </WhiteBackgroundContainer>
                </ContentWithPaddingXl>
            </Container>
        )
    }
}
