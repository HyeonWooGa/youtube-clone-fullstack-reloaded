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
// 익스프레스 어플리케이션을 만든 이 코드 미트로 코드가 작성되야함
// 그리고 app.listen(외부에 개방) 위에 코드 작성, 샌드위치 처럼 가운데에 작성

app.get("/", () => console.log("Somebody is trying to go home."));
// button.addEventListener("click", handleClick); 동작과 비슷
// 누군가가 어떤 route로, 이 경우엔 home으로 get request를 보낸다면,
// 반응하는 callback을 추가
// 브라우저가 / url 의 페이지를 request 중

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
// Callback = 서버가 시작될 때 작동하는 함수
// 서버에게 어떤 port를 listening 할 줄 알려줘야함
// port는 컴퓨터의 문이나 창문과 같은 것
// 클릭이벤트 바닐라 JS 와 비슷
// localhost:4000 으로 방금 만든 서버에 접속 가능
