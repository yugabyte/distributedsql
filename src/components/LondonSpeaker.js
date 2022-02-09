import React from 'react';
import lianghongHeadshot from '../assets/icons/lianghong-headshot.png';
// import Img from 'gatsby-image';

// import { useStaticQuery, graphql } from 'gatsby';

// import { graphql, Link, StaticQuery } from 'gatsby';

const LondonSpeaker = (props) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "${props.picture}" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);

  // const imgPath = require('../../assets/images/');
  // console.log(imgPath)

  return (
    <div className="speakers-box">
      <div className="head">
        <img src={lianghongHeadshot} alt="" />
        {/* <Img fluid={data.file.childImageSharp.fluid} alt={props.name} title={props.name} /> */}
      </div>
      <div className="author-name">
        <b>{props.name}</b>
        {props.position},<br />
        <b>{props.company}</b>
      </div>
    </div>
  );
};

export default LondonSpeaker;
