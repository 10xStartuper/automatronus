require("dotenv").config();
const { Telegraf } = require("telegraf");
const dataToString = require("./utils/dataToString");
const fs = require("fs");
const bot = new Telegraf(process.env.BOT_TOKEN);

let rawdata = fs.readFileSync("./data/data.json");
let data = JSON.parse(rawdata);
console.log(data);

bot.start((ctx) =>
  ctx.replyWithHTML(
    `👋 <b>Hey ${ctx.from.first_name}!\n👨‍💻 Welcome to <a href="https://t.me/automatronus_bot">Automatronus!</a></b>`
  )
);

bot.help((ctx) =>
  ctx.replyWithHTML(
    `<b>
    Bro here are list of the things I can help with:</b>\n
    /start - 🏘 Main menu\n
    /help - ❓ Get help\n
    /schedule - 🕔 Schedule notification\n
    /myactivities - 🏃 My activities\n
    /today - 🚀 Plans for today\n`
  )
);

bot.command("schedule", (ctx) => {
  ctx.replyWithHTML(
    `${ctx.from.first_name} what do you want to schedule bro?
    \nPlease go to <a href="http://127.0.0.1:3000/setactivity">this link</a> to schedule new reminder!`
  );
});

bot.command("myactivities", (ctx) => {
  ctx.replyWithHTML(dataToString(data));
});

bot.launch();
