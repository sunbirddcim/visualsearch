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

## Test

### Local Test

1. Use python to run up a local server
2. You can interact with index.html by http://localhost:8000

```bash
$ cd /visualsearch
$ python -m http.server
```

### Production Test

1. Update visualsearch and run "rake build" to overwrite the bundled files
2. Push your branch to remote repo
3. Reinstall visualsearch module in dctrack_app_client

```bash
$ cd /dctrack_app_client
$ npm uninstall visualsearch
$ npm install visualrsearch@git+https://github.com/sunbirdcim/visualsearch.git#{your branch name}
```