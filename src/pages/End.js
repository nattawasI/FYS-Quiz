import React from "react";
import { useUserStateContext } from "../contexts/UserContext";
import { useSoundActionContext } from "../contexts/SoundContext";
import { motion } from "framer-motion";
import UseCurrentDevice from "../hooks/useCurrentDevice";
import Content from "../layout/Content";
import ButtonRestart from "../components/ButtonRestart";
import RibbonTop from "../assets/images/page/end/ico_ribbon_01.svg";
import RibbonBottom from "../assets/images/page/end/ico_ribbon_02.svg";
import DeadbodyMaleMD from "../assets/images/page/end/img_deadbody_male_md.svg";
import DeadbodyMaleTB from "../assets/images/page/end/img_deadbody_male_tb.svg";
import DeadbodyMaleSM from "../assets/images/page/end/img_deadbody_male_sm.svg";
import DeadbodyFemaleMD from "../assets/images/page/end/img_deadbody_female_md.svg";
import DeadbodyFemaleTB from "../assets/images/page/end/img_deadbody_female_tb.svg";
import DeadbodyFemaleSM from "../assets/images/page/end/img_deadbody_female_sm.svg";
import { saveShareType } from "../services";

const personVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  },
};

const socialVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const RibbonTopVariant = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const RibbonBottomVariant = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  },
};

const End = () => {
  // context
  const { friendInfoContext, userId } = useUserStateContext();
  const { playClickSoundContext } = useSoundActionContext();

  // utility hook
  const currentDevice = UseCurrentDevice();

  // function
  const playAgain = () => {
    playClickSoundContext();
    window.location.reload();
  };

  const setImageHuman = () => {
    if (currentDevice === "desktop") {
      return friendInfoContext.gender === "male"
        ? DeadbodyMaleMD
        : DeadbodyFemaleMD;
    } else if (currentDevice === "tablet") {
      return friendInfoContext.gender === "male"
        ? DeadbodyMaleTB
        : DeadbodyFemaleTB;
    } else {
      return friendInfoContext.gender === "male"
        ? DeadbodyMaleSM
        : DeadbodyFemaleSM;
    }
  };

  const shareFacebook = async () => {
    const urlShare = encodeURIComponent(
      `https://foryoursweetheart.org/ฆาตกรบนโต๊ะอาหาร/${
        friendInfoContext.gender === "female" ? "female/" : ""
      }TH/`
    );

    setTimeout(() => {
      window.open(
        `https://www.facebook.com/sharer.php?u=${urlShare}&hashtag=%23ฆาตกรบนโต๊ะอาหาร`,
        "fbShareWindow"
      );
    }, 500);

    // await API_POSuserId
    // add function count at here...
    await saveShareType("facebook", userId);
  };

  return (
    <>
      <div className="button-fixed-left-top">
        <ButtonRestart onClick={playAgain} />
      </div>
      <Content>
        <div className="scene-panel end">
          <div className="end__container">
            <div className="end__content">
              <motion.img
                className="end__ribbon-top"
                src={RibbonTop}
                alt="ribbon top"
                variants={RibbonTopVariant}
                initial="hidden"
                animate="show"
              />

              <motion.img
                className="end__ribbon-bottom"
                src={RibbonBottom}
                alt="ribbon bottom"
                variants={RibbonBottomVariant}
                initial="hidden"
                animate="show"
              />

              <motion.div
                className="end__person"
                variants={personVariant}
                initial="hidden"
                animate="show"
              >
                <div className="end__body dead-body">
                  <img
                    className="dead-body__image"
                    src={setImageHuman()}
                    alt="dead body"
                  />
                </div>
              </motion.div>
              <motion.div
                className="end__social"
                variants={socialVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <button
                  type="button"
                  className="end__button-share"
                  onClick={shareFacebook}
                >
                  <svg
                    id="Group_176"
                    data-name="Group 176"
                    xmlns="http://www.w3.org/2000/svg"
                    width="327.32"
                    height="75.082"
                    viewBox="0 0 327.32 75.082"
                  >
                    <rect
                      id="Rectangle_24"
                      data-name="Rectangle 24"
                      width="327.32"
                      height="75.082"
                      rx="37.541"
                      transform="translate(0 0)"
                      fill="#ed759d"
                    />
                    <path
                      id="Path_674"
                      data-name="Path 674"
                      d="M897.982,639.9c-4.368-.926-8.17,5.482-1.419,8.048s14.45,8.507,17.556,15.935a25.719,25.719,0,0,1,0,19.176c-1.756,4.052,1.08,4.187,4.051.54s5.4-13.5,2.026-22.823S909.19,642.281,897.982,639.9Z"
                      transform="translate(-599.517 -634.788)"
                      fill="#f6f6f6"
                      opacity="0.5"
                    />
                    <path
                      id="Path_675"
                      data-name="Path 675"
                      d="M879.3,637.484c-6.053-.558-8.929,3.834-2.957,6.03s8.3-1.406,7.561-3.245C883.368,638.94,882.17,637.749,879.3,637.484Z"
                      transform="translate(-593.836 -634.107)"
                      fill="#f6f6f6"
                      opacity="0.5"
                    />
                    <g
                      id="Group_2872"
                      data-name="Group 2872"
                      transform="translate(-631.683 -379.185)"
                    >
                      <path
                        id="Path_6560"
                        data-name="Path 6560"
                        d="M697.4,423.092a3.474,3.474,0,0,1-2.64-.9,3.588,3.588,0,0,1-.846-2.559V405.155h3.621V418.74a1.306,1.306,0,0,0,1.461,1.5h1.328v2.856Zm8.073,0a3.462,3.462,0,0,1-2.656-.9,3.62,3.62,0,0,1-.831-2.559V405.155h3.587V418.74a1.306,1.306,0,0,0,1.461,1.5H708.4v2.856Z"
                        transform="translate(0 3.74)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6561"
                        data-name="Path 6561"
                        d="M714.707,423.511a8.278,8.278,0,0,1-5.731-1.759,6.345,6.345,0,0,1-1.942-4.95v-1.76a4.316,4.316,0,0,1,.448-1.958,9.737,9.737,0,0,1,1.031-1.645q.581-.748,1.028-1.4a2.153,2.153,0,0,0,.448-1.211.824.824,0,0,0-.231-.7,1.518,1.518,0,0,0-.831-.166h-2.291l.3-2.724h4.186q2.524,0,2.525,2.424a4.46,4.46,0,0,1-.448,2.028,11.834,11.834,0,0,1-1.062,1.726,12.254,12.254,0,0,0-1.065,1.711,4.237,4.237,0,0,0-.448,1.943V417.1a3.189,3.189,0,0,0,1.08,2.673,5.767,5.767,0,0,0,6.045-.016,3.318,3.318,0,0,0,1.08-2.757v-2.192a3.546,3.546,0,0,0-.5-2.176,2.3,2.3,0,0,0-1.859-.614h-.93l.166-2.624h.666a2.317,2.317,0,0,0,1.926-.682,3.424,3.424,0,0,0,.531-2.109v-1.694h3.621v1.627a6.194,6.194,0,0,1-.464,2.575,3.266,3.266,0,0,1-1.926,1.577,3.348,3.348,0,0,1,1.958,1.662,6.621,6.621,0,0,1,.432,2.556v1.861a6.213,6.213,0,0,1-2.059,4.967A8.416,8.416,0,0,1,714.707,423.511Z"
                        transform="translate(4.555 3.653)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6562"
                        data-name="Path 6562"
                        d="M727.413,423.511a24.289,24.289,0,0,1-3.4-.231,11.654,11.654,0,0,1-2.709-.666v-3.022a14.33,14.33,0,0,0,2.742.763,15.318,15.318,0,0,0,2.707.266,10.259,10.259,0,0,0,3.387-.414,1.676,1.676,0,0,0,1.1-1.744,1.85,1.85,0,0,0-.565-1.463,5.009,5.009,0,0,0-1.661-.88q-1.1-.381-2.724-.914a21.75,21.75,0,0,1-2.757-1.161,5.485,5.485,0,0,1-1.942-1.594,3.958,3.958,0,0,1-.714-2.426,4.468,4.468,0,0,1,1.793-3.736,8.826,8.826,0,0,1,5.416-1.378,19.663,19.663,0,0,1,3.022.232,14.619,14.619,0,0,1,2.458.565V408.7a11.731,11.731,0,0,0-2.442-.648,15.885,15.885,0,0,0-2.508-.216,9.4,9.4,0,0,0-3.088.416,1.627,1.627,0,0,0-1.163,1.677,1.6,1.6,0,0,0,.6,1.312,5.675,5.675,0,0,0,1.711.864q1.112.383,2.673.913a15.794,15.794,0,0,1,2.957,1.247,4.989,4.989,0,0,1,1.81,1.661,4.709,4.709,0,0,1,.614,2.541,4.168,4.168,0,0,1-1.976,3.835A10.12,10.12,0,0,1,727.413,423.511Z"
                        transform="translate(9.652 3.653)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6563"
                        data-name="Path 6563"
                        d="M724.759,404.427v-4.849h9.765l-.132,2.525h-6.644v2.324Z"
                        transform="translate(11.045 1.743)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6564"
                        data-name="Path 6564"
                        d="M737.33,425.343a3.466,3.466,0,0,1-2.658-.9,3.633,3.633,0,0,1-.83-2.559V410.895a5.9,5.9,0,0,1,.6-2.791,8.2,8.2,0,0,1,1.362-1.91q.764-.78,1.362-1.429a2.011,2.011,0,0,0,.6-1.378,1.391,1.391,0,0,0-.549-1.3,3.231,3.231,0,0,0-1.643-.331,7.516,7.516,0,0,0-3.621,1V400.1a8.165,8.165,0,0,1,2.307-.911,10.792,10.792,0,0,1,2.542-.316,5.3,5.3,0,0,1,3.52,1,3.515,3.515,0,0,1,1.163,2.824,3.869,3.869,0,0,1-.416,1.843,7.3,7.3,0,0,1-1.012,1.445q-.6.664-1.2,1.361a7.144,7.144,0,0,0-1.013,1.562,4.793,4.793,0,0,0-.416,2.093v10a1.813,1.813,0,0,0,.282,1.179,1.594,1.594,0,0,0,1.18.316h1.528v2.856Z"
                        transform="translate(13.62 1.489)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6565"
                        data-name="Path 6565"
                        d="M740.827,423.092V405.155h3.621V410.8h5.183a3.5,3.5,0,0,0,2.707-.847,3.638,3.638,0,0,0,.747-2.474v-2.325h3.587v2.226a6.9,6.9,0,0,1-.581,2.923,3.526,3.526,0,0,1-2.109,1.827,3.192,3.192,0,0,1,2.026,1.677,6.678,6.678,0,0,1,.5,2.674v6.61h-3.588v-6.178a3.673,3.673,0,0,0-.731-2.64,3.866,3.866,0,0,0-2.69-.714h-5.048v9.533Z"
                        transform="translate(16.8 3.74)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6566"
                        data-name="Path 6566"
                        d="M747.56,404.612v-3.056h-2.622v-2.491h5.113v3.023h7.175l-.132,2.523Z"
                        transform="translate(18.272 1.559)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6567"
                        data-name="Path 6567"
                        d="M759.112,423.092a3.467,3.467,0,0,1-2.658-.9,3.626,3.626,0,0,1-.83-2.559V405.155h3.588V418.74a1.306,1.306,0,0,0,1.461,1.5H762.2v2.856Z"
                        transform="translate(22.099 3.74)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6568"
                        data-name="Path 6568"
                        d="M766.526,423.092l-4.152-17.937h3.553l2.658,12.822,3.255-10.265v-2.557h2.591l3.619,12.822,2.591-12.822h3.522l-4.119,17.937h-3.322L773.4,411.666l-3.587,11.426Z"
                        transform="translate(24.516 3.74)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6569"
                        data-name="Path 6569"
                        d="M766.385,404.541l.166-2.523H773v-2.757h2.624v2.757h1.992v-2.757h2.624v5.28Z"
                        transform="translate(25.953 1.629)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6570"
                        data-name="Path 6570"
                        d="M774.382,399.328v-4.616h2.989v4.616Z"
                        transform="translate(28.817 0)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6571"
                        data-name="Path 6571"
                        d="M787.613,423.511a19.207,19.207,0,0,1-4-.4,17.557,17.557,0,0,1-3.139-.929v-9.235h7.109l.166,2.757H783.96v4.351a9.732,9.732,0,0,0,1.744.416,12.718,12.718,0,0,0,1.91.149q2.958,0,4.169-1.412t1.212-4.931a10.157,10.157,0,0,0-.6-3.871,3.6,3.6,0,0,0-1.976-1.992,9.833,9.833,0,0,0-3.736-.581,23.558,23.558,0,0,0-2.989.2,15.594,15.594,0,0,0-2.957.664v-2.79a18.814,18.814,0,0,1,3.2-.732,25.3,25.3,0,0,1,3.638-.265q4.716,0,6.81,2.374t2.093,6.993q0,4.516-2.093,6.875T787.613,423.511Z"
                        transform="translate(30.998 3.653)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6572"
                        data-name="Path 6572"
                        d="M800.941,423.423a5.911,5.911,0,0,1-4.5-1.694,6.712,6.712,0,0,1-1.611-4.816V405.155h3.621v11.593a3.955,3.955,0,0,0,.9,2.906,3.854,3.854,0,0,0,2.791.88,6.566,6.566,0,0,0,2.789-.615,6.871,6.871,0,0,0,2.192-1.543V405.155h3.588v17.937h-3.288l-.167-1.96a10.438,10.438,0,0,1-2.773,1.662A9.311,9.311,0,0,1,800.941,423.423Z"
                        transform="translate(36.14 3.74)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6573"
                        data-name="Path 6573"
                        d="M813.139,423.092a3.463,3.463,0,0,1-2.658-.9,3.627,3.627,0,0,1-.831-2.559V405.155h3.588V418.74a1.306,1.306,0,0,0,1.461,1.5h1.528v2.856Z"
                        transform="translate(41.448 3.74)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6574"
                        data-name="Path 6574"
                        d="M822.781,423.511a8.222,8.222,0,0,1-3.072-.547,4.72,4.72,0,0,1-2.21-1.76,5.512,5.512,0,0,1-.83-3.173,4.994,4.994,0,0,1,1.778-4.085,8.015,8.015,0,0,1,5.2-1.461h5.481v-1.13a3.32,3.32,0,0,0-.98-2.739,6.115,6.115,0,0,0-3.638-.781,21.947,21.947,0,0,0-3,.2,15.815,15.815,0,0,0-2.84.664v-2.79a19.742,19.742,0,0,1,3.005-.714,21,21,0,0,1,3.438-.282q3.92,0,5.78,1.643t1.859,5.132v11.493h-3.62v-7.906h-5.248a5.2,5.2,0,0,0-2.809.615,2.358,2.358,0,0,0-.945,2.142,2.257,2.257,0,0,0,.846,2.026,5.158,5.158,0,0,0,2.773.565,8.662,8.662,0,0,0,2.292-.266v2.757a12.624,12.624,0,0,1-1.461.283A13,13,0,0,1,822.781,423.511Z"
                        transform="translate(43.961 3.653)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6575"
                        data-name="Path 6575"
                        d="M825.815,404.561v-5.447h3.621v5.447Z"
                        transform="translate(47.237 1.577)"
                        fill="#fff"
                      />
                      <path
                        id="Path_6576"
                        data-name="Path 6576"
                        d="M837.7,423.423a5.914,5.914,0,0,1-4.5-1.694,6.711,6.711,0,0,1-1.609-4.816V405.155h3.621v11.593a3.955,3.955,0,0,0,.9,2.906,3.852,3.852,0,0,0,2.791.88,6.556,6.556,0,0,0,2.788-.615,6.863,6.863,0,0,0,2.193-1.543V405.155h3.587v17.937h-3.288l-.167-1.96a10.4,10.4,0,0,1-2.773,1.662A9.3,9.3,0,0,1,837.7,423.423Z"
                        transform="translate(49.304 3.74)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default End;
