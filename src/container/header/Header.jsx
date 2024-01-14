import React, { useState } from "react";
import ai from "../../assets/images/ai.png";
import "./Header.css";
import { Avatar, AvatarGroup } from "@mui/material";
import avatars from "./../../assets/data/people.json";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
        accusamus pariatur unde alias doloremque perferendis! Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Ipsam accusamus pariatur unde
        alias
      </p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address"/>
        <button type="button">Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <AvatarGroup max={6} sx={{ cursor: "pointer" }}>
          {avatars.map((avatar, index) => (
            <Avatar key={index} alt={avatar.name} src={avatar.src} />
          ))}
        </AvatarGroup>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
