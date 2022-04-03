import express from "express";
//const express = require("express");

const PORT = 4000;

const app = express();
//express app 생성 ,server
//서버는 항상 켜져있는 컴퓨터 같은 것, 인터넷에 연결되어 있는
//그리고 request를 listening 하고 있다. ex) 검색, 로그인 등등
//24시간 내내 온라인에 연결된 컴퓨터
// Server listen, and response
// Server is waiting for you

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
// Callback = 서버가 시작될 때 작동하는 함수
// 서버에게 어떤 port를 listening 할 줄 알려줘야함
// port는 컴퓨터의 문이나 창문과 같은 것
// 클릭이벤트 바닐라 JS 와 비슷
// localhost:4000 으로 방금 만든 서버에 접속 가능
