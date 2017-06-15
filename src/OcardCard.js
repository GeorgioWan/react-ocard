import React, { Component } from 'react'
import { PropTypes as pt } from 'prop-types'

export default class OcardCard extends Component {
    static propTypes = {
        type     : pt.string,
        embed    : pt.string,
        img      : pt.string,
        title    : pt.string,
        content  : pt.string,
        reference: pt.string
    }
    static defaultProps = {
        type     : 'story',
        embed    : '',
        img      : '',
        title    : 'Card Title',
        content  : 'About this card...',
        reference: ''
    }
    constructor(props) {
        super(props);
        
        this.state = {
            top: 0
        };
    }
    componentDidMount() {
        const el = this.refs[this.props.title];
        this.setState({ top: el.getBoundingClientRect().top });
    }
    cardCoverGenerator(){
        const { type, img, embed, title, scrollY } = this.props;
        const { top } = this.state;
        
        // Dist to top of Card's img
        let dist = top + scrollY;
        
        // Opacity of the Card's cover filter
        let opacity = dist / (window.innerHeight * 0.95);
        opacity = opacity < 1 ? opacity : 1 ;
        
        // Offset when Card's img touch the top of Card (*0.75 make it more smooth)
        let offsetY = dist - 10;
        offsetY = offsetY < 0 ? offsetY * 0.75 * -1 : 0;
        
        if ( type === 'story' ){
            return (
                <div className="oac-card-cover" ref={title}>
                    <div className="oac-card-img" style={{backgroundImage: `url(${img})`, transform: `translate3d(0, ${offsetY}px, 0)`}}>
                    {
                      window.innerWidth < 970 ?
                      <div className="oac-card-img-cover" style={{opacity}}></div>
                      :
                      ''
                    }
                    </div>
                    <div className="oac-card-triangle" style={{transform: `translate3d(0, ${1}px, 0)`}}></div>
                </div>
            );
        }
        else if ( type === 'embed' ){
            let el, src;
            el = document.createElement('html');
            el.innerHTML = embed;
            src = el.getElementsByTagName('iframe')[0].src;
            
            return (
                <div className="oac-card-cover" ref={title}>
                    <iframe width="100%" height="100%" src={ src } frameBorder="0" rel="0" allowFullScreen></iframe>
                </div>
            );
        }
    }
    cardGenerator() {
        const { type, title, content, scrollY } = this.props;
        const { top } = this.state;
        
        // Dist to top of Card's img
        let dist = top + scrollY;
        let target = window.innerHeight * 0.95 ;
        let proportion = dist / target;
        proportion = proportion <= 0 ? 0 : proportion;
        
        // Opacity of the Card's avatar filter
        let opacity = 1 - proportion;
        opacity = opacity < 0 ? 0 : opacity ;
        
        // Degree of the Card's avatar rotate
        let deg = 90 *  proportion;
        
        let titleOffset = 30 * (1 - opacity * 0.8);
        titleOffset = titleOffset < 0 ? 0 : titleOffset;
        
        let contentOffset = 50 * (1 - opacity * 0.9);
        contentOffset = contentOffset < 0 ? 0 : contentOffset;
        
        if ( window.innerWidth > 971 ){
            opacity = 1;
            deg = 0;
            titleOffset = 0;
            contentOffset = 0;
        }
            
        if ( type === 'story' || type === 'embed' ){
            let cardCover = this.cardCoverGenerator();
            
            return (
                <div className="oac-card-table-cell">
                    { cardCover }
                    <div className="oac-card-info">
                        <div className="oac-card-info-title"
                             dangerouslySetInnerHTML={{__html: title}}></div>
                        <div className="oac-card-info-content"
                             dangerouslySetInnerHTML={{__html: content}}></div>
                    </div>
                    <div className="clr"></div>
                </div>
            );
        }
        else if ( type === 'author' ){
            let { img, avatar } = this.props;
            return (
                <div className="oac-card-table-cell">
                    <div className="oac-card-auth-img" style={{backgroundImage: `url(${img})`}} ref={title}>
                        <div className="oac-card-auth-container">
                            <div className="oac-card-auth-avatar" style={{backgroundImage: `url(${avatar})`, transform: `rotate3d(0, 1, 0, ${deg}deg)` ,opacity}}></div>
                            <div className="oac-card-auth-title" 
                                 style={{ transform: `translate3d(0, ${titleOffset}px, 0)` , opacity }}
                                 dangerouslySetInnerHTML={{__html: title}}></div>
                            <div className="oac-card-auth-content" 
                               style={{ transform: `translate3d(0, ${contentOffset}px, 0)` , opacity }} 
                               dangerouslySetInnerHTML={{__html: content}}></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    refGenerator() {
        const { reference } = this.props;
        
        if ( reference !== '' ){
            return (
                <div className="oac-card-table-footer">
                    <div className="oac-card-reference"
                         dangerouslySetInnerHTML={{__html: reference}}>
                    </div>
                </div>
            );
        }
        
        return '';
    }
    render() {
        const card = this.cardGenerator(),
              reference = this.refGenerator();
        
        return (
            <div className="oac-card">
                <div className="oac-card-table">
                    { card }
                    { reference }
                </div>
            </div>
        );
    }
}
