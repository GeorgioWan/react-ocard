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
      expect(node.firstChild.id).toContain(`oacard`);
    });
  });
  
  it('OcardCover test', () => {
    render(<OcardCover/>, node, () => {
      let child = node.firstChild;
      expect(child.id).toContain(`oac-cover`);
      expect(child.children[0].className).toContain(`oac-cover-img`);
      expect(child.children[1].className).toContain(`oac-cover-gradient-left`);
      expect(child.children[2].className).toContain(`oac-cover-filter`);
      expect(child.children[3].className).toContain(`oac-cover-gradient`);
    });
  });
  
  it('OcardCards test', () => {
    render(<OcardCards/>, node, () => {
      let child = node.firstChild;
      expect(child.id).toContain(`wrapper`);
    })
  })
  
  it('OcardCard test', () => {
    render(<OcardCard/>, node, () => {
      
      // <div class="oac-card">...</div>
      let child = node.firstChild;
      expect(child.className).toContain(`oac-card`);
      
      // <div class="oac-card-table">...</div>
      child = child.firstChild;
      expect(child.className).toContain(`oac-card-table`);
      
      // <div class="oac-card-table-cell">...</div>
      child = child.firstChild;
      expect(child.className).toContain(`oac-card-table-cell`);
      
      // <div class="oac-card-table-cell">
      //   <div class="oac-card-cover"> ... </div>
      //   <div class="oac-card-info"> ... </div>
      // </div>
      expect(child.children[0].className).toContain(`oac-card-cover`);
      expect(child.children[1].className).toContain(`oac-card-info`);
    })
  })
})
