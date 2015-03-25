# ember-aviary

ember-aviary is an easy way to add Aviary's web widget (feather) to your ember-cli project. The goal is to encapsulate everything in a simple Ember component. We welcome contributions!

For full documentation on Aviary's feather editor, see: https://developers.aviary.com/docs/web/setup-guide

## Installation

`npm install --save-dev ember-aviary`

## Usage

An Aviary api key is required to use the widget. The component will look for a global `AVIARY_API_KEY` or a meta tag of the form:  `<meta property="aviary:api_key" content="[AVIARY_API_KEY]" />`

You can simply use the component helper like so:


```
{{aviary-editor url=url image=image onSave="onSave"}}
```

The only required inputs for the component are:

* `image` - either the image element to be edited or its ID. (ie: get after the DOM has been loaded with `$.('img')`)
* `url` - this is only required if the image to be edited is on a different host than the HTML page.

Optional:

* `onSave` - is a call back you can pass in as an action.


If your project uses scss, you can load the default style and icon by adding to `app/styles/app.scss` :

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
* Allow passing more options into the `aviary-editor` component.
* Better support different ways to load the Aviary api key (ie: from environment with [ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv) addon)

## Contributors

Thanks to Plyfe for sponsoring initial development and open-sourcing. ember-aviary authors include: Danielle Adams, Ken Sin, Manolo Familia.
