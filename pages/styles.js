import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.h1`
  margin-top: 10px;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const Mission = styled.h1`
  margin-top: 0px;
  font-size: 44px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
export const Explanation = styled.p`
  font-size: 22px;
  margin-top: -20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Formulary = styled.div`
  padding: 25px 0px;

  border-radius: 12px;
  justify-content: center;
  flex-direction: center;
  display: flex;
`;

export const Action = styled.div`
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
export const TechContainer = styled.div`
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
export const Tech = styled.img`
  margin: 20px 30px;
  width: 150px;
  height: auto;
  border-radius: 12px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  display: flex;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  border-width: 0px;
  justify-content: center;
  align-item: center;
`;

export const Background = styled.div`
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
