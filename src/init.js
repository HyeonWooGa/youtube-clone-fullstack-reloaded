import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`โ Server listening on port http://localhost:${PORT} ๐`);

app.listen(PORT, handleListening);
// Callback = ์๋ฒ๊ฐ ์์๋  ๋ ์๋ํ๋ ํจ์
// ์๋ฒ์๊ฒ ์ด๋ค port๋ฅผ listening ํ  ์ค ์๋ ค์ค์ผํจ
// port๋ ์ปดํจํฐ์ ๋ฌธ์ด๋ ์ฐฝ๋ฌธ๊ณผ ๊ฐ์ ๊ฒ
// ํด๋ฆญ์ด๋ฒคํธ ๋ฐ๋๋ผ JS ์ ๋น์ท
// localhost:4000 ์ผ๋ก ๋ฐฉ๊ธ ๋ง๋  ์๋ฒ์ ์ ์ ๊ฐ๋ฅ

// ๋ฐฐํฌ ์ด๋ ต๋ค... ๊ทผ๋ฐ ๊ณ์ ์ค๋ฅ๋๊ณ  ์์ ํ๋ฉด์ ๋ง์ด ๋ฐฐ์ด๋ค...
// AWS S3
