import React from "react";
import {
  Facebook,
  Google,
  Instagram,
  Pinterest,
  Twitter,
} from "react-bootstrap-icons";
import "./Brand.css";
import { CardContent, Icon, IconButton } from "@mui/material";
import { google, slack, atlassian, dropbox, shopify } from './Imports';

const icons = {
  Google: Google,
  Pinterest: Pinterest,
  Twitter: Twitter,
  Instagram: Instagram,
  Facebook: Facebook,
};
const socialIcons = [
  { name: "Facebook", url: "https://www.facebook.com/your-profile" },
  { name: "Twitter", url: "https://twitter.com/your-profile" },
  { name: "Pinterest", url: "https://www.pinterest.com/your-profile" },
  { name: "Google", url: "https://accounts.google.com/" },
  { name: "Instagram", url: "https://www.instagram.com/your-profile" },
];
// 
const Brand = () => {
  return (
    
  <div className="gpt3__brand section__padding">
  <div>
    <img src={google} />
  </div>
  <div>
    <img src={slack} />
  </div>
  <div>
    <img src={atlassian} />
  </div>
  <div>
    <img src={dropbox} />
  </div>
  <div>
    <img src={shopify} />
  </div>
</div>
  );
};
// 
export default Brand; 



