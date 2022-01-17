import * as React from "react";
import * as ReactDOM from "react-dom";

const headRoot = document.head;

class Head extends React.Component {
  render() {
    return ReactDOM.createPortal(this.props.children, headRoot);
  }
}
export const CreateHead = ({
  title = "No page title",
  description = "Page without description",
  image = "http://defaultimage.com",
  url = "",
  cartData1,
}) => {
  if (cartData1 !== 0) {
    document.getElementById("redicon").href = "%PUBLIC_URL%/Reddot.png";
  } else {
    document.getElementById("redicon").href = "%PUBLIC_URL%/Group.png";
  }

  return (
    <Head>
      <meta charset="utf-8" />
      {/* <link
        rel="icon"
        href={
          cartData1 !== 0 ? "%PUBLIC_URL%/Group.png" : "%PUBLIC_URL%/Reddot.png"
        }
      /> */}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      {/* <link
        rel="apple-touch-icon"
        href={
          cartData1 !== 0 ? "%PUBLIC_URL%/Group.png" : "%PUBLIC_URL%/Reddot.png"
        }
      /> */}
      {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/Reddot.png" /> */}

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
        crossorigin="anonymous"
      />
      <link
        href="https://cdn.jsdelivr.net/intro.js/2.3.0/introjs.min.css"
        rel="stylesheet"
      />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <title>{title}</title>
    </Head>
  );
};
