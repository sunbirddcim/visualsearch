# visualsearch

This repo contains the customized visualsearch used for dcTrack UI


### Clone the Repo

```bash
$ git clone https://github.com/sunbirddcim/visualsearch.git
```

### Building the Application

To build the visualsearch bundled files, you can run

```bash
$ rake build
```

## Testing

### Local Test

Use python to run up a local server
Then you can test the index.html by http://localhost:8000

```bash
$ cd /visualsearch
$ python -m http.server
```

### Production Test

First, push your branch to remote repo
Then, reinstall visualsearch module in dctrack_app_client

```bash
$ cd /dctrack_app_client
$ npm uninstall visualsearch
$ npm install visualrsearch@git+https://github.com/sunbirdcim/visualsearch.git#{your branch name}
```