import Swal from "sweetalert2";
import React from "react";
import Confetti from "react-confetti";
import { useSelector, useDispatch } from "react-redux";
import { isHurray } from "../../Redux/Action";
import { rootReducer } from "../../Redux/Reducers";
import swal from "sweetalert";

console.log(rootReducer);

export const SwalInitial = (initialText) => {
  Swal.fire({
    title: initialText.title,
    // showConfirmButton: false,
    // text: "One device is not working properly you have to first disconnect all the devices",
    text: initialText.text,
    buttons: true,
    confirmButtonColor: "#085CA8",
    confirmButtonText: initialText.understand,
  });
};
export const FinishSwal = () => {
  Swal.fire({
    title: "Do you want to proceed it?",
    // showConfirmButton: false,
    text: "One device is not working properly you have to first disconnect all the devices",
    buttons: true,
    confirmButtonColor: "#085CA8",
    confirmButtonText: "I Understand",
  });
};
export const SwalStarter = (popupText) => {
  Swal.fire({
    title: popupText.title,
    customClass: {
      title: "set-my-title-size",
      content: "set-my-custom-container",
    },
    // showConfirmButton: false,
    html: popupText.html,
    // `
    // <p style="font-size: 20px;margin-bottom: 6px;">Somewhere in the house a fuse has been switched off. Solve this problem as you have been taught.</p>
    // <div className="legend">
    // <table border="1" width="100%">
    //   <tr>
    //     <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 18px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">Ground Floor </strong></p></td>
    //   </tr>
    //   <tr class="d-flex">
    //     <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
    //       <div className="set-legend-text" style="margin-bottom: 1px solid red;">
    //         <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><sup><strong>Group&nbsp;1</strong></sup></p>
    //         <p style="margin-bottom: 0px; font-size: 16px;"><small>Hall, Toilet, Living room</small></p>
    //         </div>
    //     </td>
    //     <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
    //     <div className="set-legend-text">
    //     <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><strong><sup>Group&nbsp;2</sup></strong></p>
    //     <p style="margin-bottom: 0px; font-size: 16px;"><small>Kitchen</small></p>
    //       </div>
    //       </td>
    //       </tr>
    //   <tr>
    //     <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 18px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">First Floor </strong></p></td>
    //     </tr>
    //     <tr class="d-flex">
    //     <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
    //     <div className="set-legend-text">
    //     <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><sup><strong>Group&nbsp;3</strong></sup></p>
    //     <p style="margin-bottom: 0px; font-size: 16px;"><small>Bedroom 01, Bedroom 02</small></p>
    //       </div>
    //     </td>
    //     <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
    //     <div className="set-legend-text">
    //     <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><strong><sup>Group&nbsp;4</sup></strong></p>
    //     <p style="margin-bottom: 0px; font-size: 16px;"><small>Hall, Toilet, Bedroom 03</small></p>
    //       </div>
    //       </td>
    //   </tr>

    //   <tr>
    //     <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 18px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">Attic Floor </strong></p></td>
    //   </tr>
    //   <tr class="d-flex">
    //   <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
    //       <div className="set-legend-text">
    //       <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><sup><strong>Group&nbsp;5</strong></sup></p>
    //         <p style="margin-bottom: 0px; font-size: 16px;"><small>Hall, Toilet, Living room</small></p>
    //         </div>
    //         </td>
    //         <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
    //         <div className="set-legend-text">
    //         <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><strong><sup>Group&nbsp;6</sup></strong></p>
    //         <p style="margin-bottom: 0px; font-size: 16px;"><small>Laundry</small></p>
    //         </div>
    //         </td>
    //         </tr>
    //         </table>
    //         </div>
    //         <p style="font-size: 20px;margin-bottom: 0px; margin-top: 6px;">You have to disconnect all devices of the group then you can on the breaker and connect all the devices one by one to check which device is defected.</p>`,
    buttons: true,
    confirmButtonColor: "#085CA8",
    confirmButtonText: popupText.okay,
  });
};

export const SwalHurray = (level, group) => {
  Swal.fire({
    title: "Hurry!!  &#128525;",
    // text: `You've Completed level ${level} of Group ${group}.`,
    text: `You've Completed this level !`,

    confirmButtonColor: "#085CA8",
  }).then(function () {});
};

export const SwalBreakerOn = (text) => {
  Swal.fire({
    title: text.head,
    text: text.text,
    confirmButtonColor: "#085CA8",
    confirmButtonText: text.understand,
  });
};

export const SwalDisconnected = () => {
  Swal.fire({
    confirmButtonColor: "#085CA8",
    confirmButtonText: "I Understand",
    title: "Hook the breaker!",
    text: "You have disconnected all devices of the group from the socket.",
  });
};
export const SwalDisconnectedCorrupt = (popupText) => {
  Swal.fire({
    confirmButtonColor: "#085CA8",
    confirmButtonText: popupText.understand,
    title: popupText.head,
    text: popupText.text,
  });
};
export const SwalResult = (redirect, text) => {
  Swal.fire({
    title: text.head,
    html: text.text,
    denyButtonColor: "#7399b4",
    showDenyButton: true,
    denyButtonText: text.continue,
    confirmButtonColor: "#085CA8",
    confirmButtonText: text.finish,
    showConfirmButton: true,
    // confirmButtonText: 'I understand',
  }).then((result) => {
    if (result.isConfirmed) {
      setTimeout(redirect, 500);
    }
  });
};
export const SwalBreakerOff = (popupText, redirect) => {
  Swal.fire({
    // title: "Oops... Breaker is off &#128576;",
    title: popupText.head,
    // text: "The device you have just plugged into a socket has a short circuit and that is not safe! First disconnect this device and then on the breaker again",
    html: popupText.text,
    // <p style="border-bottom: 2px solid #000;display: inline-block;">Total number of disconnected devices <strong>${
    //   devices - 1
    // }.</strong></p>
    // denyButtonColor: "#7399b4",
    // showDenyButton: true,
    // denyButtonText: popupText.continue,
    confirmButtonText: popupText.continue,
    confirmButtonColor: "#085CA8",
  });
  // .then((result) => {
  //   if (result.isConfirmed) {
  //     setTimeout(redirect, 500);
  //   }
  // });
};
