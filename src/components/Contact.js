import React from "react";

const Contact = (props) => {
  // setTimeout(() => {
  //   props.history.push("/about");
  //  }, 5000);

  console.log(props);
  return (
    <div className="container">
      <h4 className="center"> Cotact</h4>
      <p>
        lorem lorem ipsum Notice the use of %PUBLIC_URL% in the tags above. It
        will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.
      </p>
    </div>
  );
};

export default Contact;
