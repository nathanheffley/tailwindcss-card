# Card Component Tailwind Plugin

## Installation

Simply require the plugin in your project:

```
# With NPM
npm install tailwindcss-card --save-dev

# With Yarn
yarn add tailwindcss-card --dev
```

## Usage

To get started using the  plugin, you can simply add require it in your Tailwind config file.

```js
plugins: [
  // Other plugins...

  require('tailwindcss-card')(),
],
```

You will now have access to all the card components with their default settings. These match up with the [stacked example card](https://tailwindcss.com/docs/examples/cards#stacked) in the official Tailwind documentation.

To maintain as light of a touch as possible, the components added are as follows:

```css
.card
.card-image
.card-content
```

These classes can be used to form the basic structure of a card. As many `card-image` images and `card-content` wrappers as you want, in any order.

```html
<div class="card">
  <img class="card-image" src="https://example.com/example.jpg">
  <div class="card-content">
    <!-- Card Content -->
  </div>
</div>
```

If you wish to customize the cards, you can pass any combination of the following options (shown here with their default values).

```js
plugins: [
  // Other plugins...

  require('tailwindcss-card')({
    maxWidth: '30rem',
    borderRadius: '.25rem',
    boxShadow: '0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08)',
    padding: '1rem 1.5rem',
  }),
],
```
