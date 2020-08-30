import App from "./App.svelte";

window.header.get("./Header").then((module) => {
  const Header = module().default;
  new Header({
    target: document.getElementById("header"),
  });
});

const app = new App({
  target: document.getElementById("app"),
});

window.app = app;

export default app;
