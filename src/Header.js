import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ""
        }
    }

    handleChangeCityInput = (event) => {
        this.setState({
            userInput: event.target.value
        });
    };

    render() {
        return (
            <header>
                <div className="hero">
                    <div className="heroContent">
                        <div className="innerBox">
                            <h1>DINE AND DASH</h1>
                            <form onSubmit={(event) => {
                                    event.preventDefault();
                                    this.props.searchFunction(this.state.userInput)
                                }
                                }>
                                    <label htmlFor="searchInput" className="visuallyHidden">Enter a location</label>
                                    <input type="text" name="searchInput" id="searchInput" onChange={this.handleChangeCityInput} placeholder="Enter a city" />
                                    <button type="submit">submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="recommendationContainer">
                    <div className="restaurantRecommendation">
                        {/* <p>restaurant #1</p> */}
                        <img src={require("./assets/restaurantRecommendation1Placeholder.jpg")} alt=""/>
                    </div>
                    <div className="restaurantRecommendation">
                        {/* <p>restaurant #2</p> */}
                        <img src={require("./assets/restaurantRecommendation2Placeholder.jpg")} alt="" />
                    </div>
                    <div className="restaurantRecommendation">
                        {/* <p>restaurant #3</p> */}
                        <img src={require("./assets/restaurantRecommendation3Placeholder.jpg")} alt="" />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;