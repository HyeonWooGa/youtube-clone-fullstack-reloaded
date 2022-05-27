import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = 4000;

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
// Callback = 서버가 시작될 때 작동하는 함수
// 서버에게 어떤 port를 listening 할 줄 알려줘야함
// port는 컴퓨터의 문이나 창문과 같은 것
// 클릭이벤트 바닐라 JS 와 비슷
// localhost:4000 으로 방금 만든 서버에 접속 가능