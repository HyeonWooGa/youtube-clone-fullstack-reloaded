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

app.get("/", (req, res) => {
    return res.send("I love you 가현");
});
// button.addEventListener("click", handleClick); 동작과 비슷
// 누군가가 어떤 route로, 이 경우엔 home으로 get request를 보낸다면,
// 반응하는 callback을 추가
// 브라우저가 / url 의 페이지를 request 중
// route handler 는 두개의 sexy 한 object 가 있다
// (request, response) 이다
// 어떤 이름을 써도 되지만 꼭 두개 여야한다. request and response
// request, response 는 express 에게 받은 것이다
// request, response object 를 console.log() 해서 확인해보면
// 엄청 긴 Object가 나온다. 앞으로 우리는 이것들에 익숙해질 것이다
// return response.end() : response Object 의 함수, 끝내버린다 ㄷㄷ, 종료
// return response.send("I still love you") : I stll love you 웹페이지에 띄움
// user request to server -> server response to user : 상호작용하는 방법, 서버와 유저간의

const handleLogin = (req, res) => {
    return res.send("login here.");
}

app.get("/login", handleLogin);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
// Callback = 서버가 시작될 때 작동하는 함수
// 서버에게 어떤 port를 listening 할 줄 알려줘야함
// port는 컴퓨터의 문이나 창문과 같은 것
// 클릭이벤트 바닐라 JS 와 비슷
// localhost:4000 으로 방금 만든 서버에 접속 가능
