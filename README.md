## Getting Started

  Quintype frontend Task

### Javascript Setup

* [Download and Install nodejs](https://nodejs.org/en/)

* [Install Yarn](https://yarnpkg.com/lang/en/docs/install/): The package manager for nodejs.
  This is completely optional. All commands below can be run using `npm` instead of `yarn`.
  Just replace `yarn` with `npm` in below commands and you should be good to go.
  But since we ourselves use `yarn` while development, we suggest you do so as well.

* Install all the required libraries:

```shell
yarn install
```

* Development:

```
yarn watch
```

This command will start the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
on [http://localhost:9000](http://localhost:9000). It will keep listening to the file changes,
compile the assets whenever they are changed autoreloads the browser.
This allows smooth development experience.

Note that since images, fonts and pdf files are just copied to the `dist` directory
without any compilation, changes there will not be live-reloaded.
You will need to restart the devserver in these cases.


* To generate the production assets & html run:

```shell
yarn build
```

This will create an optimized bundle for production use in the `dist` directory.


### Build process:

Some details about the build process:
(These are just for clarification as the build process already takes care of all
these, you don't need to do anything here)

* We are using [webpack version 2](https://webpack.js.org/) as build runner.
* Clean the `dist` directory, create if it does not exist.
* Compile `css` and `js` and create `bundle-[fingerprint].js` and `bundle-[fingerprint].css`.
* Compile `handlebar` templates to html files.
* Copy all images files to the dist directory.
* Only `dist` directory should be deployed to the server, nothing else.

### Code guidelines:

* All handlebar templates go in `templates/` directory.
* Each template consists of many partials. Header and footer are partials, each scrollable section on a page is a partial.
  All partials reside in `templates/partials/` directory.
* We use [slick slider](kenwheeler.github.io/slick/) for horizontal slideshow.
