const spinner = ["\r|", "\r/", "\r-", "\r\\" ,"\r|", "\r/", "\r-", "\r\\", "\r|"];

let timesThroughTheLoop = 0;
for (let symbol of spinner) {
  setTimeout(() => {
    process.stdout.write(`${symbol}`);
  }, timesThroughTheLoop * 200 + 100);
  timesThroughTheLoop += 1;
}