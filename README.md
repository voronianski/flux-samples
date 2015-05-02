# Flux Comparison by Example

> Similar app implemented with different [Flux](https://facebook.github.io/flux/) solutions including Facebook's, Yahoo's and others.

[![](https://farm9.staticflickr.com/8643/16226391077_424b0a87dd.jpg)](http://pixelhunter.me/post/110248593059/flux-solutions-compared-by-example)

## Usage

Clone this repo and run `npm install` inside it.

Before checking any of the included apps you will need to build its' Javascript resources with [Browserify](http://browserify.org/) by running `npm start` inside concrete app folder.

## Demo

Select several products from _Flux Online Shop_ and add them to cart. Open browser console and click _Checkout_ button, you'll see payload with products that you just "bought".

[![](https://dl.dropboxusercontent.com/u/100463011/flux-shop-demo2.gif)](http://labs.voronianski.com/flux-comparison)

http://labs.voronianski.com/flux-comparison

**You may find few notes about all implementations on my [blog](http://pixelhunter.me/post/110248593059/flux-solutions-compared-by-example).**

Discussion on HackerNews - https://news.ycombinator.com/item?id=8989495.

## Examples

The list of Flux related implementations used in this demo.

### Ready

| Homepage                                | Example                                                                                     | Github Stars | SLOC | License |
| -------------                           | ------------------------------------------------------------------------------------------- | ------------ | ---- | ------- |
| https://github.com/facebook/flux        | [Facebook Flux](https://github.com/voronianski/flux-samples/tree/master/facebook-flux)      | 5,8k         | 115  | BSD     |
| http://fluxible.io                      | [Fluxible by Yahoo](https://github.com/voronianski/flux-samples/tree/master/yahoo-fluxible) | 0,6k         | 359  | BSD     |
| https://github.com/spoike/refluxjs      | [Reflux](https://github.com/voronianski/flux-samples/tree/master/reflux)                    | 2,3k         | 680  | BSD     |
| https://github.com/goatslacker/alt      | [Alt](https://github.com/voronianski/flux-samples/tree/master/alt)                          | 0,7k         | 1015 | MIT     |
| https://github.com/acdlite/flummox      | [Flummox](https://github.com/voronianski/flux-samples/tree/master/flummox)                  | 0,8k         | 732  | MIT     |
| http://martyjs.org                      | [Marty.js](https://github.com/voronianski/flux-samples/tree/master/marty)                   | 0,9k         | 2662 | MIT     |
| https://github.com/kenwheeler/mcfly     | [McFly](https://github.com/voronianski/flux-samples/tree/master/mcfly)                      | 0,7k         | 305  | BSD     |
| https://github.com/LeanKit-Labs/lux.js  | [Lux](https://github.com/voronianski/flux-comparison/tree/master/lux)                       | 0,02k        | 695  | MIT     |
| https://github.com/azu/material-flux    | [Material Flux](https://github.com/voronianski/flux-comparison/tree/master/material-flux)   | 0,03k        | 120  | MIT     |

### Next

| Homepage                                | Example                                                                                     | Github Stars | SLOC | License |
| -------------                           | ------------------------------------------------------------------------------------------- | ------------ | ---- | ------- |
| Fynx                                    |                                                                                             |              |      |         |
| http://fluxxor.com                      |                                                                                             | 1,2k         | 425  |         |
| http://deloreanjs.com                   |                                                                                             | 0,6k         | 445  | MIT     |

_You're welcome to create [issues](https://github.com/voronianski/flux-comparison/issues) with suggestions or even make your own [pull-requests](https://github.com/voronianski/flux-comparison/pulls) (but before please take a look on [contributing guidelines](https://github.com/voronianski/flux-comparison/blob/master/CONTRIBUTING.md))._

## Resources

### Articles

- http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html
- http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited
- http://spoike.ghost.io/deconstructing-reactjss-flux

### Non React.js examples

The [flux demo app](http://labs.voronianski.com/flux-comparison/) was also implemented by enthusiasts without React.js but with another view layer:

* [Riot + RiotControl](https://github.com/txchen/feplay/tree/gh-pages/riot_flux)
* [flux-riot demo](https://github.com/mingliangfeng/flux-riot-demo)

## Contributing

See [CONTRIBUTING.md](https://github.com/voronianski/flux-comparison/blob/master/CONTRIBUTING.md).

---

**MIT Licensed**
