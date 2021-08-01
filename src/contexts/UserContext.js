import React, { useState, createContext, useContext } from "react";
import { saveQuestion1, saveQuestion2, saveUser } from "../services";
const UserStateContext = createContext();
const UserActionContext = createContext();

export const useUserStateContext = () => {
  return useContext(UserStateContext);
};

export const useUserActionContext = () => {
  return useContext(UserActionContext);
};

const UserProvider = ({ children }) => {
  // state
  // Phrase 1
  const [friendInfoContext, setFriendNameContext] = useState({}); // ชื่อ และ เพศ ของเพื่อน
  const [userInfoContext, setUserInfoContext] = useState({}); // ชื่อ และ เพศ ของคนเล่น

  const [userId, setUserId] = useState(0);
  // Phrase 2
  const [activityOftenContext, setActivityOftenContext] = useState(""); // กิจกรรมที่ทำบ่อยกับเพื่อน?
  const [choicesContext, setChoicesContext] = useState([]); // คำถาม quiz และคำตอบที่ตอบ
  // [{ id: '', question: '', label: '', score: 0 }, { id: '', question: '', label: '', score: 0 }, { id: '', question: '', label: '', score: 0 }]

  const [yearsKnownContext, setYearsKnownContext] = useState(""); // จำนวนปีที่รู้จัก?
  const [activityTodayContext, setActivityTodayContext] = useState(""); // กิจกรรมล่าสุด ที่ทำกับเพื่อน ก่อนเพื่อนตาย?

  // Phrase 3
  const [causeDiabetesContext, setCauseDiabetesContext] = useState(""); // โรคเบาหวาน เกิดจากอะไร
  const [symptomDiabetesContext, setSymptomDiabetesContext] = useState(""); // โรคเบาหวาน มีอาการเป็นอย่างไร?

  /* function
  -------------------------------------------------------------- */
  // Phrase 1
  const addFriendInfoContext = ({ name, gender }) => {
    const friendInfo = { name, gender };
    setFriendNameContext(friendInfo);
  };

  const addUserNameContext = (name) => {
    setUserInfoContext({ ...userInfoContext, ...{ name } });
  };

  const addUserGenderContext = async (gender) => {
    const deviceUser = navigator.userAgent;
    const id = await saveUser(
      friendInfoContext,
      userInfoContext,
      gender,
      deviceUser
    );
    setUserId(id);
  };

  // Phrase 2
  const addActivityOftenContext = (activity) => {
    setActivityOftenContext(activity);
    setChoicesContext([]);
  };

  const addChoicesContext = (choice) => {
    setChoicesContext([...choicesContext, choice]);
  };

  const removeChoicesContext = () => {
    choicesContext.pop();
    setChoicesContext(choicesContext);
  };

  const addYearsKnownContext = (years) => {
    setYearsKnownContext(years);
  };

  const addActivityTodayContext = async (activity) => {
    setActivityTodayContext(activity);
    await saveQuestion1(
      activityOftenContext,
      userId,
      activity,
      yearsKnownContext,
      choicesContext
    );
  };

  // Phrase 3
  const addCauseDiabetesContext = (cause) => {
    setCauseDiabetesContext(cause);
  };

  const addSymptomDiabetesContext = async (symptom) => {
    setSymptomDiabetesContext(symptom);
    await saveQuestion2(causeDiabetesContext, symptom, userId);
  };

  const userStateStore = {
    // Phrase 1
    friendInfoContext,
    userInfoContext,

    // Phrase 2
    activityOftenContext,
    choicesContext,
    yearsKnownContext,
    activityTodayContext,

    // Phrase 3
    causeDiabetesContext,
    symptomDiabetesContext,

    userId,
  };

  const userActionStore = {
    // Phrase 1
    addFriendInfoContext,
    addUserNameContext,
    addUserGenderContext,

    // Phrase 2
    addActivityOftenContext,
    addChoicesContext,
    removeChoicesContext,
    addYearsKnownContext,
    addActivityTodayContext,

    // Phrase 3
    addCauseDiabetesContext,
    addSymptomDiabetesContext,
  };

  return (
    <>
      <UserStateContext.Provider value={userStateStore}>
        <UserActionContext.Provider value={userActionStore}>
          {children}
        </UserActionContext.Provider>
      </UserStateContext.Provider>
    </>
  );
};

export default UserProvider;
