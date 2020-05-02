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

import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Title = styled.h1`
  margin-top: 10px;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.primary};
`;
const Mission = styled.h1`
  margin-top: 0px;
  font-size: 44px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
const Explanation = styled.p`
  font-size: 22px;
  margin-top: -20px;
  color: ${({ theme }) => theme.colors.text};
`;

const Formulary = styled.div`
  padding: 25px 0px;

  border-radius: 12px;
  justify-content: center;
  flex-direction: center;
  display: flex;
`;

const Action = styled.div`
  margin-top: 20px;
  width: 60%;
  height: auto;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const TechContainer = styled.div`
  margin: 20px;
  width: 60%;
  height: auto;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Tech = styled.img`
  margin: 20px 30px;
  width: 150px;
  height: auto;
  border-radius: 12px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  display: flex;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  border-width: 0px;
  justify-content: center;
  align-item: center;
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0;
  padding: 0;
  outline: 0;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
  box-sizing: border-box;
  /* text-rendering: optimizeLegibility !important; */
  -webkit-font-smoothing: antialiased !important;
  font-family: sans-serif;
`;

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
