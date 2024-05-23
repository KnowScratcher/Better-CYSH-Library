// ==UserScript==
// @name         Better CYSH Library
// @namespace    http://tampermonkey.net/
// @version      2024-05-23
// @description  try to take over the world!
// @author       You
// @match        https://library.cysh.cy.edu.tw/webopac/*
// @icon         https://library.cysh.cy.edu.tw/webopac/css/favicon.ico
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    "use strict";
    setTimeout(function(){document.getElementsByName("default")[0].setAttribute("onload","run();");run();},500);
    unsafeWindow.run = function run() {
        let frame = document.getElementsByName("default")[0];
        let system = frame.contentWindow;
        let style = system.document.createElement("style");
        style.innerHTML = `
        .btn_main {
            width: 80px;
            background-color: green;
            color: white;
            text-decoration: none;
            margin: auto;
            transition: 0.5s;
        }
        .btn_main:hover {
            width: 100px;
        }
        .btn_lib {
            width: 120px;
            background-color: green;
            color: white;
            text-decoration: none;
            margin: auto;
            transition: 0.5s;
        }
        .btn_lib:hover {
            width: 140px;
        }`;
        system.document.head.appendChild(style);
        system.document.getElementById("ctl00_xs2").innerHTML = `<a href="javascript:void(0);"><div class="btn_main" onclick="javascript:window.open(base64Decode('aAB0AHQAcABzADoALwAvAHcAdwB3AC4AYwB5AHMAaAAuAGMAeQAuAGUAZAB1AC4AdAB3AC8A'));">嘉中首頁</div></a>`;
        system.document.getElementById("ctl00_xs1").innerHTML = `<a href="javascript:void(0);"><div class="btn_lib" onclick="javascript:window.open(base64Decode('aAB0AHQAcABzADoALwAvAHcAdwB3AC4AYwB5AHMAaAAuAGMAeQAuAGUAZAB1AC4AdAB3AC8AcAAvADQAMQAyAC0AMQAwADAAOAAtADEAOQA2AC4AcABoAHAA'));">圖書館公告站</div></a>`;

        //特色館藏 SDGs
        if (system.window.location.href.includes("https://library.cysh.cy.edu.tw/webopac/Tsgc.aspx")) {
            let style2 = system.document.createElement("style");
            style2.innerHTML = `
            .sdgs {
                table-layout: fixed;
                width: 80%;
                margin-left: auto;
                margin-right: auto;
            }
            .sdgs tr {
                height: 100px;
            }
            .sdgs tr td {
                /* padding: 10px;
                padding-bottom: 50px; */
                font-size: 20px;
                vertical-align: top;
                transition: 0.5s;
            }
            .sdgs tr td:hover {
                border: 4px solid black;
            }`;
            system.document.head.appendChild(style2);
            system.document.getElementsByClassName("m_box")[0].innerHTML = `
            <h2 style="text-align: center;"><span id="ctl00_ContentPlaceHolder1_Label1" style="font-size:13pt;font-weight:normal;">特色館藏</span></h2>
            <table class="sdgs" style="color: white;">
                <tr>
                    <td bgcolor="e5243b"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl01$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 1 終結貧窮</div></div></a></td>
                    <td bgcolor="DDA63A"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl02$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 2 消除飢餓</div></div></a></td>
                    <td bgcolor="4C9F38"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl03$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 3 健康與福祉</div></div></a></td>
                    <td bgcolor="C5192D"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl04$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 4 優質教育</div></div></a></td>
                    <td bgcolor="FF3A21"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl05$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 5 性別平權</div></div></a></td>
                    <td bgcolor="26BDE2"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl06$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 6 淨水及衛生</div></div></a></td>
                </tr>
                <tr>
                    <td bgcolor="FCC30B"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl07$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 7 可負擔的潔淨能源</div></div></a></td>
                    <td bgcolor="A21942"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl08$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 8 合適的工作及經濟成長</div></div></a></td>
                    <td bgcolor="FD6925"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl09$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 9 工業化、創新及基礎建設</div></div></a></td>
                    <td bgcolor="DD1367"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl10$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 10 減少不平等</div></div></a></td>
                    <td bgcolor="FD9D24"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl11$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 11 永續城鄉</div></div></a></td>
                    <td bgcolor="BF8B2E"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl12$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 12 責任消費及生產</div></div></a></td>
                </tr>
                <tr>
                    <td bgcolor="3F7E44"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl13$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 13 氣候行動</div></div></a></td>
                    <td bgcolor="0A97D9"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl14$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 14 保育海洋生態</div></div></a></td>
                    <td bgcolor="56C02B"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl15$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 15 保育陸域生態</div></div></a></td>
                    <td bgcolor="00689D"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl16$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 16 和平、正義及健全制度</div></div></a></td>
                    <td bgcolor="19486A"><a href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$DataList1$ctl17$LinkButton1','')" style="text-decoration: none;"><div style="width: 100%;;height: 100%;color: white;"><div style="padding: 10px;padding-bottom: 50px;">SDG 17 多元夥伴關係</div></div></a></td>
                </tr>
            </table>`;
        }

    }
})();
