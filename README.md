# Angularfire Lite Demo

How to test the demo?

## Get Started

```
git clone https://github.com/hamedbaatour/angularfire-lite-demo.git
cd angularfire-lite-demo
npm i
```

## Launching the Server Side Rendred App

Run `npm run universal` to trigger the build of the SSR app. Navigate to `http://localhost:5000/` and The app html should be rendred and hello messages from firebase firestore and the realtime databases will appear like this:

![SSR View](https://i.imgur.com/b2LWKLV.jpg)

and when you view the HTML it should show both of the messages from firebase correctly rendred in h1 tag

![SSR HTML Source code View](https://i.imgur.com/kMv6GiB.jpg)


## Launching the Non Server Side Rendred App

the app uses the Angular CLI so just Run `ng serve` to serve the app on `http://localhost:4200/`
