import React from 'react';
import { Helmet } from 'react-helmet';
import image_logo from "../../assets/images/ImageLogoCembio.png";

const MetaTags = () => {
  return (
    <Helmet>
      <title>CemBio</title>
      <meta name="description" content="Diagnostic kits" />
      <link rel="icon" href={image_logo} type="image/png" />
    </Helmet>
  );
};

export default MetaTags;
