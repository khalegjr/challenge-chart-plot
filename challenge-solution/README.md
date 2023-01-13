# Frontend Challenge for Intelie

I built the challenge solution using Typescript because it offers variable typing, interfaces and verification with Intellisense.

I choose to use the __react-chartjs-2__ package to render the graph because it is a React library based on __chart.js__, which is a library that is widely used in Javascript community and has extensive documentation. As well ass, I choose the __styled-components__ library because, today, it is almost a standard in the React environment.

I choose to use the __codemirror/lang-json__ package, as the __codemirror__ package is widely used in the javascript ecosystem and user input must be in json format. We also installed the __uiw/react-codemirror__ package, for better integration with React. The theme is based off the sample challenge image and was generated from the [CodeMirror Theme](https://uiwjs.github.io/react-codemirror/#/theme/editor/single) website.

## Features to Implement
Some features that have yet to be implemented or are incomplete:
- [ ] resize input with CodeMirror component
- [ ] fix layout according to model image
- [ ] refactor components to reuse style components
- [ ] implement and refactor component tests
- [ ] refactor the chart component for data passing generalization

## Running the Project

To run the project just clone this repository and run the following commands:
```bash
git clone https://github.com/khalegjr/challenge-chart-plot.git
cd challenge-chart-plot
npm install
npm start

```
