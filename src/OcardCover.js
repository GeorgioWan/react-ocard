import React, { Component } from 'react'
import { PropTypes as pt } from 'prop-types'

export default class OcardCover extends Component{
    static propTypes = {
        type    : pt.string,
        img     : pt.string,
        title   : pt.string,
        subTitle: pt.string
    }
    static defaultProps = {
        type    : 'cover',
        img     : '',
        title   : 'Main Title',
        subTitle: 'Sub Title...'
    }
    render(){
        const { img, title, subTitle } = this.props;
        
        return(
            <div id="oac-cover">
                <div className="oac-cover-img" style={{backgroundImage: `url(${img})`}} ref="oac-cover-img"></div>
                <div className="oac-cover-gradient-left"></div>
                <div className="oac-cover-filter"></div>
                <div className="oac-cover-gradient"></div>
                {
                    window.innerWidth < 970 ? '' :
                    <div id="oac-title" ref="oac-title">
                        <h1>{ title }</h1>
                        <p>{ subTitle }</p>
                    </div>
                }
            </div>
        );
    }
}