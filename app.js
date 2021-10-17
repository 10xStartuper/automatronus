require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

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

bot.launch();
