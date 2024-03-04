export const calculateEstimatedReadingTime = (text: string) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
};

export const getLessonTime = (hours: number, minutes: number, seconds: number): string => {
  let hour;
  let minute;
  let second;

  if (hour == 0) {
    hour = "";
  } else if (hours.toString().length == 1) {
    hour = `0${hours}`;
  } else {
    hour = `${hours}`;
  }
  if (minute == 0) {
    minute = "00";
  } else if (minutes.toString().length == 1) {
    minute = `0${minutes}`;
  } else {
    minute = `${minutes}`;
  }
  if (second == 0) {
    second = "00";
  } else if (seconds.toString().length == 1) {
    second = `0${seconds}`;
  } else {
    second = `${seconds}`;
  }
  return `${hour}:${minute}:${second}`;
};
