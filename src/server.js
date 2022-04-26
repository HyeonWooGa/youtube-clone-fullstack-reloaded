import express from "express";
//const express = require("express");
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
//express app 생성 ,server
//서버는 항상 켜져있는 컴퓨터 같은 것, 인터넷에 연결되어 있는
//그리고 request를 listening 하고 있다. ex) 검색, 로그인 등등
//24시간 내내 온라인에 연결된 컴퓨터
// Server listen, and response
// Server is waiting for you
// 익스프레스 어플리케이션을 만든 이 코드 미트로 코드가 작성되야함
// 그리고 app.listen(외부에 개방) 위에 코드 작성, 샌드위치 처럼 가운데에 작성
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
/* app.get("/", handleHome); */
/* app.get("/protected", handleProtected); // 해당 controller는 위의 middleware의 return 동작으로인해 사용되지 않음 */
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
// user 와 server 사이에서 항상 브라우저가 대행한다
// app.get() function은 url이 필요하고 여러개의 handler를 쓸 수 있다
/* app.get("/login", handleLogin); */

app.use(express.urlencoded({extended: true}));

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

/* const handleHome = (req, res) => {
    return res.send("I love middlewares");
}; */
// finalMiddleware(=controller) 이기 때문에 next()를 사용하지 않고
// 따라서 argument 에 next 인자가 필요하진 않음

/*const handleLogin = (req, res) => { 
    return res.send("login here.");
};*/

/* const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}; */
// 해당 Middleware의 next(); 코드 전에 return 코드가 있으면 next(); 는 실행 되지 않음
// 일반적으로 middleware는 위와 같이 유저가 어디로 가고싶어 하는지 알려주는데 사용

/* const privateMiddleware = (req,res,next) => {
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
}; 

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.")
}; */

/* app.use(logger); // global middleware, 순서를 조심해야 한다, 모든 route 에 사용됌 */
/* app.use(privateMiddleware); */

export default app;




