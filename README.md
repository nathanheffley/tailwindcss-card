# Card Component Tailwind Plugin

## Installation

Simply require the plugin in your project:

```
# With NPM
npm install @nathanheffley/tailwindcss-card --save-dev

# With Yarn
yarn add @nathanheffley/tailwindcss-card --dev
```

## Usage

To get started using the  plugin, you can simply add require it in your Tailwind config file.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('@nathanheffley/tailwindcss-card'),
  ],
}
```

You will now have access to all the card components with their default settings. These match up with the [stacked example card](https://tailwindcss.com/docs/examples/cards#stacked) in the official Tailwind documentation.

To maintain as light of a touch as possible, the components added are as follows:

```css
.card
.card-image
.card-content
```

These classes can be used to form the basic structure of a card. You can use as many `card-image` images and `card-content` elements within a `card` as you want, in any order.

```html
<div class="card">
  <img class="card-image" src="https://example.com/example.jpg">
  <div class="card-content">
    <!-- Card Content -->
  </div>
</div>
```

If you wish to customize the cards, you can pass any of the following options (shown here with their default values if you haven't changed any Tailwind theme options).

```js
// tailwind.config.js
module.exports = {
  theme: {
    card: theme => ({
      maxWidth: '24rem',
      borderRadius: '.25rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '1rem 1.5rem',
    })
  },
  plugins: [
    require('@nathanheffley/tailwindcss-card'),
  ],
}
```
