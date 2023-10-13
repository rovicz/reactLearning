import { useUi } from "./UiContext";

const Content = () => {
  const { dark } = useUi();
  if (dark === true) {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
  return <h1>Cor Atual: {dark ? "dark" : "light"}</h1>;
};

export default Content;
