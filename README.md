# Leonardo Lepsch's website


## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

## Heroku Deployment

Fist, check if heroku is already configured

```sh
git remote -v
```

The `heroku` remote should be there. If not, add the git remote `heroku`

```sh
git remote add heroku https://git.heroku.com/leonardolepsch.git
```

Then, push to heroku

```sh
git push heroku main
```

Finally, scale up the app

```sh
heroku ps:scale web=1
```

Open the website with

```sh
heroku open
```

## References

 - favicon: https://www.flaticon.com/free-icon/camera_685672
