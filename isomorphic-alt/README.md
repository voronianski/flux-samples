## Usage

```sh
npm start
```

Open your browser to `localhost:8080`

## How it works

This is an isomorphic example of flux using [alt](https://github.com/goatslacker/alt) and [iso](https://github.com/goatslacker/iso)

`alt` allows you to bootstrap your stores with some seed data which you can send down to the client and then use
bootstrap on the client again to reload the data into the stores.

`iso` is an isomorphic helper which handles the handing off of data from server to client.

On the server side, once you've gathered all your data, you have two options:

* If your actions are synchronous you can call them and then render.
* You can craft a specialised JSON data string and use alt.bootstrap() to populate your stores.

Once you've bootstrapped your stores on the server you'll need to flush the data out so the stores can be reset for the
next request.

Here is a sample code snippet:

```js
// server.js
app.get('/', function (req, res) {
    // Option1
    SampleActions.anSynchronousActionThatLoadsData(sampleStoreData)

    // Option 2
    var data = {
        SampleStore: sampleStoreData
    }
    alt.bootstrap(data)

    // flush is an analogue to `takeSnapshot()` except that it also resets stores
    // back to their original state.
    var encodedDataString = alt.flush()

    // this is the part where iso kicks in.
    res.send(
        Iso.render(someHtmlYouHaveCreated, encodedDataString)
    )
})
```

Iso takes some html and the encoded data and creates some special-to-iso markup that you send down to the client.
On the client, it pulls out the state of the app and hands it to you in a callback:

```js
// client.js
Iso.bootstrap(function (state, metaData, container) {
    // set the stores to have the last available state from the server.
    alt.bootstrap(state)

    // I leave the implementation details of rendering to you
    // if you're using react however it goes something like:
    var el = React.createElement(YourElement)
    React.render(el, container)
})
```

You can read more about bootstrapping and taking snapshots of your entire state [here](https://github.com/goatslacker/alt#alt-features)
