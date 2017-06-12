import React, { Component } from 'react'
import { PropTypes as pt } from 'prop-types'

import { OcardCover, OcardCards } from './'

export default class Ocard extends Component {
    static propTypes = {
        cover: pt.object,
        cards: pt.array
    }
    static defaultProps = {
        cover: {
            img     : '',
            title   : 'Main Title',
            subTitle: 'Sub Title...'
        },
        cards: [{
            img: '',
            title: 'Card Title',
            content: 'About this card...'
        }]
    }
    render() {
        const { cover, cards } = this.props;
        return (
            <div id="oacard">
                <OcardCover {...cover}/>
                <OcardCards cover={cover} cards={cards}/>
            </div>
        );
    }
}
