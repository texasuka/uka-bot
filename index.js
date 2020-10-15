const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");

const apiRouter = express.Router();

app.use(logger("dev", {}));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", apiRouter);

apiRouter.post("/sayHello", function (req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "안녕하세요!",
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
});

apiRouter.post("/showTreasure", function (req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "보물상자",
            description: "보물상자 안에는 뭐가 있을까",
            thumbnail: {
              imageUrl:
                "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
            },
            profile: {
              imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
              nickname: "보물상자",
            },
            social: {
              like: 1238,
              comment: 8,
              share: 780,
            },
            buttons: [
              {
                action: "message",
                label: "열어보기",
                messageText: "짜잔! 우리가 찾던 보물입니다",
              },
              {
                action: "webLink",
                label: "구경하기",
                webLinkUrl: "https://e.kakao.com/t/hello-ryan",
              },
            ],
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
});

app.listen(8080, function () {
  console.log("listening on port 3000!");
});
