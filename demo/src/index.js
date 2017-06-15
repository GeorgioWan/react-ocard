import React, {Component} from 'react'
import {render} from 'react-dom'

import Ocard from '../../src'
import '../../src/Ocard.scss'

const story = {
  cover: {
    img: 'http://www.qerja.com/journal/wp-content/uploads/CODING.jpg',
    title: '<a href="https://github.com/GeorgioWan/react-ocard" target="_blank">React-oCard</a>',
    subTitle: 'This component is inspired by Yahoo youcard(懶人卡), created with nwb toolkit, use ReactJS, iScroll, ES6(Babel), SCSS and Mocha etc.<br/>Let\'s scroll to start the demo!'
  },
  cards: [
    {
      type: 'story',
      img: 'http://imgur.com/CaBRleb.jpg',
      title: 'nwm',
      content: 'nwb is a toolkit for React, Preact & Inferno apps, React libraries and other npm modules for the web, with no configuration (until you need it).',
      reference: 'photo by <a href="https://github.com/GeorgioWan" target="_blank">OAwan</a>'
    },{
      type: 'story',
      img: 'https://facebook.github.io/react/img/logo_og.png',
      title: 'React',
      content: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. (p.s. React-oCard is under React v15.5.4)',
      reference: 'photo by <a href="https://facebook.github.io/react/" target="_blank">Facebook React</a>'
    },{
      type: 'story',
      img: 'http://www.ruanyifeng.com/blogimg/asset/2016/bg2016012501.png',
      title: 'Babel - ES6/ES2015',
      content: 'ES2015 is a significant update to the language, and the first major update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is underway now. Babel is a JavaScript compiler to translate ES6+ to ES5.',
      reference: 'photo by <a href="http://www.ruanyifeng.com/blog/2016/01/babel.html" target="_blank">阮一峰的網路日誌</a>'
    },{
      type: 'story',
      img: 'http://www.techprimelab.com/src/app/blogs/images/scss.png',
      title: 'SCSS',
      content: 'SCSS (Sassy CSS) falls under the Sass umbrella. It is a CSS syntax that’s been turbocharged with all the goodness of Sass. Valid CSS is also valid SCSS, so the transition is swift and painless, and you can learn as much as you want at any time to improve your skills.',
      reference: 'photo by TechPrimeLab'
    },{
      type: 'story',
      img: 'http://designrfix.com/wp-content/uploads/yapb_cache/css3.1pr8uv3k2qf4ww80408808sk4.26qeyncemmo0w4w4sgokogcgw.th.jpeg',
      title: 'CSS3',
      content: 'CSS3 is the latest standard for CSS. It\'s completely backwards-compatible with earlier versions of CSS.',
      reference: 'photo by Designrfix'
    },{
      type: 'story',
      img: 'https://cldup.com/xFVFxOioAU.svg',
      title: 'Mocha',
      content: 'Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.',
      reference: 'photo by <a href="https://mochajs.org/" target="_blank">MochaJS</a>'
    },{
      type: 'author',
      img: 'https://oawan.me/img/about/gears.jpg',
      avatar: 'https://oawan.me/uploads/oA.jpg',
      title: '<a href="https://oawan.me" target="_blank">I\'m OAwan</a>',
      content: 'Coding, cats, photograph and live.<br/><br/>If you like this repo<br/>star or fork it!<br/>😍'
    }
    
  ]
};

class Demo extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '0 auto' }}>
          <Ocard {...story}/>
        </div>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
