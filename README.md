# React-oCard

The Card style information presentation on mobile devise :iphone:

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![LICENCE][licence-image]][licence-url]

[build-badge]: https://travis-ci.org/GeorgioWan/react-ocard.svg?branch=master
[build]: https://travis-ci.org/GeorgioWan/react-ocard

[npm-badge]: https://img.shields.io/npm/v/react-ocard.svg
[npm]: https://www.npmjs.com/package/react-ocard

[licence-image]: https://img.shields.io/npm/l/react-ocard.svg
[licence-url]: https://github.com/GeorgioWan/react-ocard/blob/master/LICENSE

## Installation

- NPM
[![NPM install](https://nodei.co/npm/react-ocard.png)](https://www.npmjs.com/package/react-ocard)

- UMD
**https://unpkg.com/react-ocard/umd/react-ocard.js**

## Usage

**React-oCard** is really easy to use, just a few seconds, then you can have your awesome CARD for your story!

1. import `Ocard` and `react-ocard.css`

```jsx
import Ocard from 'react-ocard';
import from 'react-ocard/css/react-ocard.css';
```

2. setting props **story**
3. put `Ocard` with **story** in your app

```jsx
<Ocard {...story} />
```

### Example

```jsx
const YOUR_STORY = {
    cover: {
        img: 'your_img_url',
        title: 'your_story_titile',
        subTitle: 'your_story_subtitile'
    },
    cards: [
        {
            type: 'story',
            img: 'story_img_url',
            title: 'your_title',
            content: 'your_content',
            reference: 'your_reference'
        }
    ]
}
```

```jsx
import React, { Component } from 'react';

import OCard from 'react-ocard';
import 'react-ocard/css/react-ocard.css'

// ... write YOUR_STORY

class App extends Component {
    render() {
        return (
            <div className="App">
                <Ocard {...YOUR_STORY}/>
            </div>
        );
    }
}

export default App;
```

## Structure of story(props) for **Ocard** component

A story includes **cover (object)** and **cards (array)**, you can also follow this structure build the json file.

```jsx
const story = {
    cover: {
        img,        // Cover image (should be an url)
        title,      // Title of cover (should be string)
        subTitle    // Subtitle of cover (should be string)
    },
    cards: [
        {
            type: 'story',  // Now only have two types to use 'story' and 'video'
            img,            // when use 'story', you can set up the image (should be an url)
            embed,          // when use 'video', you can set up the video (should be an iframe tag)
            title,          // Title of this card (should be string)
            content,        // Content of this card (should be string)
            reference       // Reference of this car (should be string, and ref can be empty)
        }
    ]
}
```

## Development

This Component is still under development, if you have any suggestion, please give an [**issue**](https://github.com/GeorgioWan/react-ocard/issues) or [**fork this repo**](https://github.com/GeorgioWan/react-ocard#fork-destination-box)

> This project was created by [**nwb**](https://github.com/insin/nwb).

## License

**React-oCard** is released under the [MIT license](https://github.com/GeorgioWan/react-ocard/blob/master/LICENSE).