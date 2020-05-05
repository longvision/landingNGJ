import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import "isomorphic-fetch";
import lottie from "lottie-web";
import Input from "./../components/input";
import animationData from "./static/rocket.json";
import logoJS from "./static/logoJS.png";
import logoReact from "./static/logoReact.png";
import logoRedux from "./static/logoRedux.png";
import logoNode from "./static/logoNode.png";

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
  margin-left: 44px;
  margin-right: 44px;
  text-align: center;
  margin-top: -10px;
  color: ${({ theme }) => theme.colors.text};
`;
const Subtext = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 15px;
  text-align: center;
  margin-top: -10px;
  color: ${({ theme }) => theme.colors.text};
`;
const Modal = styled.p`
  font-size: 17px;
  font-weight: 400;
  margin-top: 25px;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.background};
  padding: 15px;
  text-align: center;
  border-radius: 7px;
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
  const [modal, setModal] = useState(false);
  const router = useRouter();
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

  const handleClick = (e) => {
    e.preventDefault();
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Nihon Go Javascript Bootcamp</title>
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
            JavaScriptフロントエンドとバックエンドを学んで次のレベルへ行こう。
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
                  value="Contact received from - https://bootcamp.nihongojs.com"
                />
                <input type="hidden" name="replyTo" value="@"></input>

                <Button type="submit" value="Submit" onClick={handleClick}>
                  ブットキャンプの次のステージに。
                </Button>
              </Formulary>
              <Subtext>
                時間を無駄にしない君に作られた新技術のトレーニング。
              </Subtext>
              {modal && <Modal>登録してありがとうございます。</Modal>}
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
