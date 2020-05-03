import React, { useState, useEffect, useRef } from "react";
import "isomorphic-fetch";
import lottie from "lottie-web";
import { Form } from "@unform/web";
import Input from "./../components/input";
import animationData from "./static/rocket.json";
import logoJS from "./static/logoJS.png";
import logoReact from "./static/logoReact.png";
import logoRedux from "./static/logoRedux.png";
import logoNode from "./static/logoNode.png";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
`;
const SubContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubContainer2 = styled.div`
  margin-top: 111px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin: 10px;
  font-size: 38px;

  color: ${({ theme }) => theme.colors.primary};
`;
const Mission = styled.h1`
  margin: 10px;
  margin-top: 0px;
  font-size: 44px;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
const Explanation = styled.p`
  font-size: 21px;
  margin: 15px;
  text-align: center;
  margin-top: -10px;
  color: ${({ theme }) => theme.colors.text};
`;

const Formulary = styled.div`
  padding: 25px 0px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

const Action = styled.div`
  margin-top: 20px;
  padding: 15px;
  width: 60%;
  height: auto;
  min-width: 150px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
`;
const TechContainer = styled.div`
  margin: 20px;
  max-width: 60%;
  height: auto;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
const Tech = styled.img`
  margin: 30px 30px;
  width: 30%;
  height: 30%;
  max-height: 250px;
  max-width: 250px;
  min-height: 75px;
  min-width: 75px;
  border-radius: 12px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  display: flex;
`;

const Button = styled.button`
  font-size: 20px;
  margin-top: 20px;
  font-weight: 500;
  min-height: 44px;
  height: auto;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 7px;
  justify-content: center;
  align-item: flex-end;
`;

// const Background = styled.div`
//   background-color: ${({ theme }) => theme.colors.background};
//   position: absolute;

//   left: 0;
//   top: 0;

//   right: 0;
//   box-sizing: border-box;
//   /* text-rendering: optimizeLegibility !important; */
//   -webkit-font-smoothing: antialiased !important;
//   font-family: sans-serif;
// `;

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
    <>
      <Head>
        <title>Nihongo Javascript Bootcamp</title>
        <style>{`body { background-color: #402b52  }`}</style>
      </Head>
      <Container>
        <SubContainer1>
          <div
            style={{ width: 250, marginTop: 15, margin: "0 auto" }}
            ref={animBox}
          ></div>

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
            <form
              onMouseEnter={() => {
                lottie.unfreeze();
                animObj.play();
                animObj.setSpeed(3);
              }}
              onMouseLeave={() => {
                animObj.setSpeed(1);
              }}
              action="https://api.staticforms.xyz/submit"
              method="post"
            >
              <Formulary>
                <Input
                  type="text"
                  name="name"
                  placeholder="名前"
                  label="名前"
                />
                <Input
                  type="text"
                  name="email"
                  placeholder="メールアドレス"
                  label="メールアドレス"
                />
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: "none" }}
                />
                <input
                  type="hidden"
                  name="accessKey"
                  value={process.env.FORM}
                />
                <input type="hidden" name="replyTo" value="@"></input>
                <input
                  type="hidden"
                  name="subject"
                  value="Contact us from - www.nihongojs.com"
                />
                <input type="hidden" name="replyTo" value="@"></input>
                <input
                  type="hidden"
                  name="redirectTo"
                  value="https://www.nihongojs.com"
                ></input>
                <Button type="submit" value="Submit">
                  ブットキャンプに登録する。
                </Button>
              </Formulary>
            </form>
          </Action>
        </SubContainer1>
        <SubContainer2>
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
        </SubContainer2>
      </Container>
    </>
  );
};
