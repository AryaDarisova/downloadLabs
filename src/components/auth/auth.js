import React from "react";
import {Button} from "reactstrap";

export default class Auth {

    static loginUser() {
        if (localStorage.getItem(document.getElementById("loginUserLogin").innerText) ==
            document.getElementById("loginUserPassword").innerText) {
            // history.push("profile/user");
        }
        else {
            alert("Неправильно введенный логин или пароль!");
        }

        /*history.push("profile/user");*/


    };

    static loginAdmin() {

    };

    static authAdmin() {

    };

    static setLocalStorageUser() {
        localStorage.setItem("160239", "student");
        localStorage.setItem("160240", "student");
        localStorage.setItem("160241", "student");
        localStorage.setItem("160242", "student");
        localStorage.setItem("160243", "student");
        localStorage.setItem("160244", "student");
        localStorage.setItem("160245", "student");
        localStorage.setItem("160246", "student");
        localStorage.setItem("160247", "student");
        localStorage.setItem("160248", "student");


    }
}