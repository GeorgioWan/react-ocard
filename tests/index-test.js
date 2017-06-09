import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import { Ocard, OcardCover, OcardCards, OcardCard } from 'src/'

describe('Ocard', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })
  
  it('Ocard test', () => {
    render(<Ocard/>, node, () => {
      expect(node.innerHTML).toContain('<div data-reactroot="" id="oacard"><div id="oac-cover"><div class="oac-cover-img" style="background-image: url(http://0.0.0.0:8080/context.html);"></div><div class="oac-cover-gradient-left"></div><div class="oac-cover-filter"></div><div class="oac-cover-gradient"></div><!-- react-text: 7 --><!-- /react-text --></div><div id="wrapper"><div style="background-color: transparent; -webkit-transform: translate(0px, 0px) translateZ(0px); background-position: initial initial; background-repeat: initial initial;"><div id="oac-card-title-cover"><div id="oac-title" style="opacity: 1;"><h1>Main Title</h1><p>Sub Title...</p><span class="fa fa-angle-up fa-2x"></span></div></div><div id="oac-cards"><div class="oac-card"><div class="oac-card-table"><div class="oac-card-table-cell"><div class="oac-card-cover"><div class="oac-card-img" style="background-image: url(http://0.0.0.0:8080/context.html);"><div class="oac-card-img-cover" style="opacity: 0;"></div></div><div class="oac-card-triangle"></div></div><div class="oac-card-info"><h2>Card Title</h2><p>About this card...</p></div><div class="clr"></div></div><!-- react-text: 27 --><!-- /react-text --></div></div></div></div></div></div>')
    })
  })
  
  it('OcardCover test', () => {
    render(<OcardCover/>, node, () => {
      expect(node.innerHTML).toContain('<div data-reactroot="" id="oac-cover"><div class="oac-cover-img" style="background-image: url(http://0.0.0.0:8080/context.html);"></div><div class="oac-cover-gradient-left"></div><div class="oac-cover-filter"></div><div class="oac-cover-gradient"></div><!-- react-text: 6 --><!-- /react-text --></div>' )
    })
  })
  
  it('OcardCards test', () => {
    render(<OcardCards/>, node, () => {
      expect(node.innerHTML).toContain('<div data-reactroot="" id="wrapper"><div style="background-color: transparent; -webkit-transform: translate(0px, 0px) translateZ(0px); background-position: initial initial; background-repeat: initial initial;"><div id="oac-card-title-cover"><div id="oac-title" style="opacity: 1;"><h1>Main Title</h1><p>Sub Title...</p><span class="fa fa-angle-up fa-2x"></span></div></div><div id="oac-cards"><div class="oac-card"><div class="oac-card-table"><div class="oac-card-table-cell"><div class="oac-card-cover"><div class="oac-card-img" style="background-image: url(http://0.0.0.0:8080/context.html);"><div class="oac-card-img-cover" style="opacity: 0;"></div></div><div class="oac-card-triangle"></div></div><div class="oac-card-info"><h2>Card Title</h2><p>About this card...</p></div><div class="clr"></div></div><!-- react-text: 20 --><!-- /react-text --></div></div></div></div></div>' )
    })
  })
  
  it('OcardCard test', () => {
    render(<OcardCard/>, node, () => {
      expect(node.innerHTML).toContain('<div data-reactroot="" class="oac-card"><div class="oac-card-table"><div class="oac-card-table-cell"><div class="oac-card-cover"><div class="oac-card-img" style="background-image: url(http://0.0.0.0:8080/context.html);"><div class="oac-card-img-cover" style="opacity: 1;"></div></div><div class="oac-card-triangle"></div></div><div class="oac-card-info"><h2>Card Title</h2><p>About this card...</p></div><div class="clr"></div></div><!-- react-text: 12 --><!-- /react-text --></div></div>' )
    })
  })
})
