import React, {Component} from 'react'
import {render} from 'react-dom'

import { Ocard } from '../../src'
import '../../src/Ocard.scss'

const story = {
  cover: {
    img: 'https://oawan.me/2017/%E5%8F%B0%E5%8D%97%E4%B8%AD%E8%A5%BF%E5%8D%80-%E9%AC%8D%E9%AC%9A%E5%BF%A0%E7%89%9B%E8%82%89%E6%B9%AF-%E4%B8%8D%E5%8F%AF%E9%8C%AF%E9%81%8E%E7%9A%84%E9%A0%82%E7%B4%9A%E7%89%9B%E8%82%89%E6%B9%AF/img/%E9%AC%8D%E9%AC%9A%E5%BF%A0%E7%89%9B%E8%82%89%E6%B9%AF-1.jpg',
    title: '台南吃什麼？讓我們一起相機先食吧！',
    subTitle: '我是 OAwan，在《新樂街口的三角窗》寫著我吃過拍過的美食。因為喜歡吃，所以四處走訪，因為喜歡紀錄，所以練成相機先食；讓我用簡單的方式，分享給你我台南的美食地圖吧！'
  },
  cards: [
    {
      type: 'story',
      img: 'https://oawan.me/2017/%E5%8F%B0%E5%8D%97%E4%B8%AD%E8%A5%BF%E5%8D%80-%E9%98%BF%E6%B1%9F%E7%82%92%E9%B1%94%E9%AD%9A-%E9%80%99%E6%89%8D%E6%98%AF%E6%AD%A3%E6%B8%AF%E7%9A%84%E7%82%92%E9%B1%94%E9%AD%9A%E6%84%8F%E9%BA%B5/img/%E9%98%BF%E6%B1%9F%E7%82%92%E9%B1%94%E9%AD%9A-4.jpg',
      title: '阿江炒鱔魚',
      content: '來台南不可不吃的美食，除了牛肉湯、虱目魚和蝦捲外，千萬別忘了嘗試好吃的炒鱔魚意麵！阿江的鱔魚炒得爽脆不老爛，意麵吸飽微甜偏鹹的湯汁，「這才是正港的炒鱔魚意麵！」',
      reference: '新樂街口的三角窗 - oawan.me'
    },{
      type: 'story',
      img: 'https://oawan.me/img/food/2017/Tainan/West%20Central%20District/%E5%AF%8C%E7%9B%9B%E8%99%9F%E7%A2%97%E7%B2%BF/%E7%A2%97%E7%B2%BF-3.jpg',
      title: '富盛號碗粿',
      content: '喜歡古早味嗎？用幾個小銅板來永康市場滿足你對古早味的口腹之慾！富盛號的碗粿用料實在，有蝦仁、肉燥、香菇和一顆好吃的蛋黃，加上碗粿本身又香又Q嫩，而且只要 30 元呢！',
      reference: '新樂街口的三角窗 - oawan.me'
    },{
      type: 'story',
      img: 'https://oawan.me/img/food/2017/Tainan/North%20District/%E9%98%BF%E6%86%A8%E9%B9%B9%E7%B2%A5/%E8%99%B1%E7%9B%AE%E9%AD%9A%E8%82%9A%E7%B2%A5-1.jpg',
      title: '阿憨鹹粥',
      content: '來到虱目魚的故鄉，必定得先嚐嚐知名的鹹粥(虱目魚肚粥)！魚肚滑嫩化口，魚肉緊實鮮甜，雖然粥品、湯飯傻傻分不清楚，不過尬一支油條配著吃，這滋味真的揪懷念阿！',
      reference: '新樂街口的三角窗 - oawan.me'
    },{
      type: 'story',
      img: 'https://oawan.me/2017/%E5%8F%B0%E5%8D%97%E4%B8%AD%E8%A5%BF%E5%8D%80-%E9%AC%8D%E9%AC%9A%E5%BF%A0%E7%89%9B%E8%82%89%E6%B9%AF-%E4%B8%8D%E5%8F%AF%E9%8C%AF%E9%81%8E%E7%9A%84%E9%A0%82%E7%B4%9A%E7%89%9B%E8%82%89%E6%B9%AF/img/%E9%AC%8D%E9%AC%9A%E5%BF%A0%E7%89%9B%E8%82%89%E6%B9%AF-1.jpg',
      title: '鬍鬚忠牛肉湯',
      content: '每次來台南，都一定要在行程中加上一碗牛肉湯！如果真的不想早起等排隊名店，我大大的推薦鬍鬚忠牛肉湯！湯頭清爽不油膩，而且味道還很濃郁不會過鹹，喝起來還有點洋蔥的鮮甜味，加上頂級牛肉的鮮嫩 Q 彈，真的是一試成主顧啊！',
      reference: '新樂街口的三角窗 - oawan.me'
    },{
      type: 'story',
      img: 'https://oawan.me/2017/%E5%8F%B0%E5%8D%97%E4%BB%81%E5%BE%B7%E5%8D%80-%E9%98%BF%E8%A3%95%E7%89%9B%E8%82%89%E6%B6%AE%E6%B6%AE%E9%8D%8B-%E8%B6%85%E8%B6%8A%E7%89%9B%E8%82%89%E6%B9%AF%E7%9A%84%E5%A4%A7%E4%BA%AB%E5%8F%97/img/%E9%98%BF%E8%A3%95%E7%89%9B%E8%82%89%E6%B6%AE%E6%B6%AE%E9%8D%8B-6.jpg',
      title: '阿裕牛肉涮涮鍋',
      content: '牛肉湯吃不夠爽嗎？你一定要來排一下阿裕牛肉涮涮鍋！必須說一下，雖然一盤牛肉價格不菲，但還是建議點上個三四盤，因為老闆會依盤數搭配不同部位的牛肉。牛大骨燉熬得清甜湯頭，加上不同部位的牛肉片，享受不同層次牛肉湯的體驗！',
      reference: '新樂街口的三角窗 - oawan.me'
    },{
      type: 'embed',
      embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QCi1OpD-QeE?rel=0" frameborder="0" allowfullscreen></iframe>',
      title: 'HowFun - 業配無極限',
      content: '幹，陳孜昊你北七喔！',
      reference: 'HowFun 陳孜昊'
    }
  ]
};

class Demo extends Component {
  render() {
    return <Ocard {...story}/>
  }
}

render(<Demo/>, document.querySelector('#demo'))
