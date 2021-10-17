const dataToString = (data) => {
  let newData = "";
  data.forEach((item) => {
    newData += `<b>Message:</b> ${item.message}
    \n<b>Time:</b> ${item.time}
    \n<b>Repeat:</b>`;

    for (const [key, value] of Object.entries(item.weekdays)) {
      //   console.log(`${key}: ${value}`);
      //   console.log(value);
      newData += `\n<b>- ${key}:</b> ${value ? "✅" : "❌"}`;
    }
    newData += `\n\n----------------\n\n`;
  });
  return newData;
};

module.exports = dataToString;
