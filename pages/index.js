import React, { useState, useEffect, useRef } from "react";
import "isomorphic-fetch";
import lottie from "lottie-web";
import { Form } from "@unform/web";
import Input from "./components/Input";
import animationData from "./static/rocket.json";
import logoJS from "./static/logoJS.png";
import logoReact from "./static/logoReact.png";
import logoRedux from "./static/logoRedux.png";
import logoNode from "./static/logoNode.png";

import {
  Action,
  Background,
  Title,
  Container,
  Mission,
  Explanation,
  Formulary,
  Button,
  ButtonText,
  TechContainer,
  Tech,
} from "./styles";

let animObj = null;

export default () => {
  const animBox = useRef(null);
  function handleSubmit(data) {
    console.log(data);
  }

  useEffect(() => {
    console.log(" component did mount ");
    animObj = lottie.loadAnimation({
      container: animBox.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: animationData, // the path to the animation json
    });
  }, []);

  return (
    <Background>
      <Container>
        <div style={{ width: 150, margin: "0 auto" }} ref={animBox}></div>

        <Title>NihonGoJS</Title>
        <Mission>ソフトウェア開発ブットキャンプ</Mission>
        <Explanation>
          JavaScriptフロントエンドとバックエンドを学んで次のベルへ行こう。
        </Explanation>
        <Action
          onMouseEnter={() => {
            lottie.unfreeze();
            animObj.play();
          }}
          onMouseLeave={() => lottie.freeze()}
        >
          <Form onSubmit={handleSubmit}>
            <Formulary>
              <Input name="email" type="email" placeholder="メールアドレス" />

              <Input name="name" type="input" placeholder="名前" />
              <Button
                onMouseEnter={() => {
                  lottie.unfreeze();
                  animObj.play();
                  animObj.setSpeed(3);
                }}
                onMouseLeave={() => {
                  animObj.setSpeed(1);
                }}
                type="submit"
              >
                ブットキャンプに登録する
              </Button>
            </Formulary>
          </Form>
        </Action>
        <TechContainer
          onMouseEnter={() => {
            lottie.unfreeze();
            animObj.play();
          }}
          onMouseLeave={() => lottie.freeze()}
        >
          <Tech src={logoJS} />
          <Tech src={logoReact} />
          <Tech src={logoRedux} />
          <Tech src={logoNode} />
        </TechContainer>
      </Container>
    </Background>
  );
};
