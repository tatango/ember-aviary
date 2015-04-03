# ember-aviary

ember-aviary is an easy way to add Aviary's web widget (feather) to your ember-cli project. The goal is to encapsulate everything in a simple Ember component. We welcome contributions!

For full documentation on Aviary's feather editor, see: https://developers.aviary.com/docs/web/setup-guide

## Installation

`npm install --save-dev ember-aviary`

`ember g ember-aviary`

## Setup

An Aviary api key is required to save images. You can set the api key in one of 3 ways:

1. Set an `AVIARY_API_KEY` on `ENV` in `config/environment`. The [ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv) addon is a safe and easy way to do this.

2. A metatag of the form: `<meta property="aviary:api_key" content="[AVIARY_API_KEY]" />`

3. Set a global `AVIARY_API_KEY`.

## Usage

You can simply use the component helper in a template like so:

```
{{aviary-editor url=url image=image onSave="onSave" closeOnSave=closeOnSave}}
```

The only required inputs for the component are:

* `image` or `imageSelector` - either the image element to be edited or its ID. (ie: get after the DOM has been loaded with `$.('img')`)
* `url` - this is only required if the image to be edited is on a different host than the HTML page.
___
Optional inputs:

* `onSave` - is a call back you can pass in as an action.
* `closeOnSave` - boolean to close editing modal upon save. Defaults to false.

If your project uses scss, you can load the default style and icon by adding:

```
@import 'ember-aviary';
```

## Development Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`
For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## TODO

* Add complete tests and dummy app.
* Allow passing more options into the aviary-editor component based on all the capabilities of Aviary's API.

## Contributors

Thanks to Plyfe for sponsoring initial development and open-sourcing. ember-aviary authors include: Danielle Adams, Ken Sin, Manolo Familia.
