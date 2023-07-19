# Frontend Mentor - Results summary component solution

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Frontend Mentor - Results summary component solution
This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

### Screenshot

![](../assets/screenshot.jpg)

### Links
- Live Site URL:[Netlify Deploy](https://subtle-dodol-d9c539.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop- first workflow
- [React](https://reactjs.org/) - JS library
- [Vite] (https://vitejs.dev/) - Bundling

### What I learned

This was my first project in FE- Mentor, it served as a reminder that it's perfectly fine to go back on old notes, new sources, and find every bit of help when needed.
It also served as a reminder that making mistakes is how we learn.

To see how you can add code snippets, see below:

```html you may have noticed I went into it with a React approach for the UI content, React was new so figuring out how JSX worked when it comes html was an interesting experience, project definetly helped solidify the way html and javascript interact.

```

```css
  Two things I had the most trouble in was the width and max-width when making it responsive, I didn't have as much of an understand when it comes to width, and max-width, that sent me to do some reasearch. I went from developer websites like w3schools, develeoper mozilla, to reviweing on css basics through youtube.

```

```js
Proud of this section, recently I began learning React components and better understanding .map() to make code dynamically.
Using it allowed me to further understand it.

const proudOfThisFunc = () const dataElement = Data.map((data) => {
    return (
      <div key={data.category} className={`category ${data.category}`}>
        <img src={`../assets/icon-${data.icon}.svg`} alt={data.category} />
        {data.category}
        <p className="score">
          {data.score}
          <span> /100</span>
        </p>
      </div>
    );
```

### Continued development

Seeing the finsihed project I notice patterns that I initially didn't I'd like to become better at noticing that from the start. Also deepent the project a tad more by making the summary resuls have their own card, example if selected let that info generate on the reasults section and provide info based on that.

### Useful resources

- [Responsive](https://www.youtube.com/watch?v=VQraviuwbzU&t=293s) - Siimple steps to make your life easier for responsive layout.
- [Fexbox or Grid](https://www.youtube.com/watch?v=3elGSZSWTbM) - Helped me when to pick wither flexbox or Grid and how to work with both for the best solution.
- [CSS units](https://www.youtube.com/watch?v=N5wpD9Ov_To) - When, where, or why to use specific type on unit.
- [Scrimba](https://scrimba.com/allcourses) - This might be helpful to learn a new skill or review what you know...

## Author

- Frontend Mentor - [Denise M](https://www.frontendmentor.io/profile/moncadad)

