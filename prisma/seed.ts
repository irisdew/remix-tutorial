import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map(joke => {
      return db.joke.create({ data: joke });
    })
  );
}

seed();

function getJokes() {
  return [
    {
      name: "ㅇㅇ죽어줄게",
      content: `식물이랑은 교감을 어케함
      말도 안하고....
      잘 대해주면 걍 사는거고
      내가 조금이라도 실수하면 응 ㅇㅇ 죽어줄게 이지랄하면서 이파리 댕강댕강 떨구는데 이런애들이랑 어케 같이 살어`
    },
    {
      name: "현실도피자",
      content: `Reality is also pizza`
    },
    {
      name: "사뿐사뿐",
      content: `only death only death`
    },
    {
      name: "화가난다",
      content: `artist is flying`
    },
    {
      name: "우리집고양이츄르를좋아해",
      content: `우리집 고양이 츄르를 좋아해
      우리집 고양이 츄르를 좋아해
      그래서 두개를 줬더니
      우리집 고양이
      돼지야`
    },
    {
      name: "토끼",
      content: `괜찮겠어? 난 멈추는 법을 모르는 토끼인데.`
    },
    {
      name: "슉슉슉",
      content: `슉 슈슉 슈슉 슈슈슉 xx놈아`
    }
  ];
}