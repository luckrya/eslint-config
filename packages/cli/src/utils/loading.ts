import ora from "ora";
import chalk from "chalk";

const loading = ora();

let lastMsg: {
  symbol: string;
  text: string;
} | null;

function start(msg: string, symbol: string = chalk.green("✔")) {
  if (lastMsg) {
    loading.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text,
    });
  }

  loading.text = " " + msg;
  lastMsg = {
    symbol: symbol + " ",
    text: msg,
  };

  loading.start();
}

function stop(persist?: boolean) {
  if (lastMsg && persist !== false) {
    loading.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text,
    });
  } else {
    loading.stop();
  }
  lastMsg = null;
}

export default {
  start,
  stop,
};
