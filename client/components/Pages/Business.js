import React from "react"

import MainSection from "../Layout/MainSection"

export default class Business extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("business");
    }
    render(){
        return(
            <MainSection fetchArticles={this.props.articlesAction.fetchArticles} page="Business News" sources={this.props.sources}/>
        );
    }
}