import React from 'react'
import styled from "styled-components";
import { BsPeopleFill } from "react-icons/bs";
import { ChatRoom } from './Chat';


export const Home = () => {

const arr = [];
const Person = [];
const colorPro = [];
  const Left = styled.div`
    width: 50%;
    text-align: left;
  `;
  const Right = styled.div`
    width: 50%;
    text-align: right;
  `;
  return (
   <>
    <header>
        <Left>
          <div className="header-title">Introductions</div>
          <div className="sub-header">
            This Channel Is For Company Wide Chatter
          </div>
        </Left>
        <Right>
          <div>
            3/100&nbsp;&nbsp;&nbsp; <BsPeopleFill />
          </div>
        </Right>
      </header>

      <section>
        <ChatRoom data={arr}  person = {Person}  color = {colorPro}/>
      </section>
   </>
  )
}
