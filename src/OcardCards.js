import React, { Component } from 'react'
import { PropTypes as pt } from 'prop-types'

import iScroll from 'iscroll/build/iscroll-probe'

import { OcardCard } from './'

export default class OcardCards extends Component {
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
            type    : 'story',
            img     : '',
            title   : 'Card Title',
            content : 'About this card...'
        }]
    }
    constructor(props){
        super(props);
        
        this.state = {
            scrollY: 0,
            titleOpacity: 1,
            titleScroll: 0
        };
    }
    componentDidMount(){
        if ( window.innerWidth < 970 ){
            // Options of iScroll
            const options = {
                zoom: false,
                mouseWheel: false,
                probeType: 3,
                bounce: true,
                click:true,
                
                // Fix the issue that under Chrome mobile mode can't scroll
                disablePointer:true,
                disableTouch:false,
                disableMouse:true
            };
            
            // Initial iScroll with wrapper element
            let wrapper = this.refs.wrapper;
            wrapper.id = 'wrapper';
            this.myScroll = new iScroll(wrapper, options);
            
            // Binding scroll event
            this.myScroll.on( 'scroll', this.handleScroll.bind(this, this.myScroll) );
        }
    }
    componentWillUnmount(){
        if ( window.innerWidth < 970 ){
            this.myScroll.destroy();
            this.myScroll = null;
        }
    }
    
    handleScroll(e){
        let scrollY = parseFloat((e.y).toFixed(2)),
            coverIMG = document.querySelector('.oac-cover-img');
        
        // Scale Cover image when scroll over the top
        if ( scrollY >= 0 )
            coverIMG.style.transform = `scale(${1+scrollY*0.00065})`;
        
        this.setState({ 
            scrollY,
            titleOpacity: scrollY >= -250 ? (250+scrollY)/250 : 0,
            titleScroll : Math.abs( scrollY / 5 )
        });
    }
    
    render() {
        const { cover, cards } = this.props;
        const { scrollY, titleOpacity, titleScroll } = this.state;
        
        return (
            <div ref="wrapper">
                <div style={{ background: 'transparent' }}>
                    {
                        window.innerWidth < 970 ?
                        <div id="oac-card-title-cover">
                            <div id="oac-title" style={{ opacity: titleOpacity, transform: `translate3d(0, ${titleScroll}px,0)` }}>
                                <div className="oac-title" 
                                     dangerouslySetInnerHTML={{__html: cover.title}}></div>
                                <div className="oac-title-subtitle" 
                                     dangerouslySetInnerHTML={{__html: cover.subTitle}}></div>
                                <span className="oac-angle-up"></span>
                            </div>
                        </div>
                        : ''
                    }
                    <div id="oac-cards">
                    {
                        cards.map((card, index) => (
                            <OcardCard key={ index } scrollY={scrollY} {...card}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        );
    }
}
