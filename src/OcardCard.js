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
        let opacity = dist / window.innerHeight;
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
    render() {
        const { title, content, reference } = this.props;
        const cardCover = this.cardCoverGenerator();
        
        return (
            <div className="oac-card">
                <div className="oac-card-table">
                    <div className="oac-card-table-cell">
                        { cardCover }
                        <div className="oac-card-info">
                            <h2>{ title }</h2>
                            <p>{ content }</p>
                        </div>
                        <div className="clr"></div>
                    </div>
                    {
                    reference != '' ?
                    <div className="oac-card-table-footer">
                        <div className="oac-card-reference">
                        { reference }
                        </div>
                    </div>
                    : ''
                    }
                </div>
            </div>
        );
    }
}
