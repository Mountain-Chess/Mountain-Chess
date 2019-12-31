import React, { Component } from "react";
// import { connect } from "react-redux";
// import axios from "axios";
import { Line } from "react-chartjs-2";
import "./Profile.css";
import Loading from '../Loading/Loading'
//import redux functions

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      loading: true,
      profile_img: "",
      //this will be the placeholder empty data state object to be filled by a database call
    //   data: {
    //     labels: [],
    //     datasets: [
    //       {
    //         label: `Value ($USD)`,
    //         data: [],
    //         borderColor: ["rgb(106, 226, 160)"]
    //       }
    //     ]
    //   }
      data: {
        labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        datasets: [
          {
            data: [889, 830, 799, 899, 943, 1003, 1377, 1421, 1855, 2478],
            label: "DUMMY ELO DATA",
            borderColor: "#38738f",
            fill: false
          }
        ]
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 800);
  }  

  render() {
    return (
      <>
      {this.state.loading && (
        <>
          <div className="loading">
            <Loading />
          </div>
        </>
      )}
      {!this.state.loading && (<div className="big-profile">
          <h1> Your Profile </h1>
        <div className="chart">
          <div className="chart-row">
            <Line
              data={this.state.data}
              options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: `Recent Game History`
                },
                scales: {
                  yAxes: [
                    {
                      ticks: { beginAtZero: false }
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
      </div>)}
      
      </>
    );
  }
}
