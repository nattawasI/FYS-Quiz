import axios from "axios";

const url = "http://localhost:14080";
const API_POST = (url, data) => {
  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const saveUser = async (friendInfoContext, userInfoContext, gender) => {
  const userData = {
    friend_name: friendInfoContext.name,
    friend_gen: friendInfoContext.name,
    my_name: userInfoContext.name,
    my_gen: gender,
  };
  const {
    data: { id = 0 },
  } = await API_POST(url + "/userdata/save", userData);
  return id;
};

export const saveQuestion1 = async (
  activityOftenContext,
  userId,
  activity,
  yearsKnownContext,
  choicesContext
) => {
  const _choicesContext = [];
  _choicesContext.push({
    id: "1",
    number: 1,
    label: activityOftenContext,
    question: "กิจกรรมที่ทำบ่อยกับเพื่อน?",
    user_data_id: userId,

    score: 0,
  });
  _choicesContext.push({
    id: "2",
    number: 2,
    label: activity,
    user_data_id: userId,

    question: "กิจกรรมล่าสุด ที่ทำกับเพื่อน ก่อนเพื่อนตาย?",
    score: 0,
  });

  _choicesContext.push({
    id: "3",
    number: 3,
    user_data_id: userId,
    label: yearsKnownContext,
    question: "จำนวนปีที่รู้จัก?",
    score: 0,
  });
  for (let i = 0; i < choicesContext.length; i++) {
    const _c = choicesContext[i];
    _choicesContext.push({
      id: _c.id,
      number: _choicesContext.length + 1,
      user_data_id: userId,
      label: _c.label,
      question: _c.question,
      score: _c.score,
    });
  }
  // console.log({ _choicesContext });
  await API_POST(url + "/quizsubmit/save", {
    datas: _choicesContext,
  });
};

export const saveQuestion2 = async (causeDiabetesContext, symptom, userId) => {
  const _choicesContext = [];
  _choicesContext.push({
    id: "7",
    number: 7,
    user_data_id: userId,
    label: causeDiabetesContext,
    question: "โรคเบาหวาน เกิดจากอะไร",
    score: 0,
  });
  _choicesContext.push({
    id: "8",
    number: 8,
    user_data_id: userId,
    label: symptom,
    question: "โรคเบาหวาน มีอาการเป็นอย่างไร?",
    score: 0,
  });
  await API_POST(url + "/quizsubmit/save", {
    datas: _choicesContext,
  });
};
