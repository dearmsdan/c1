// ==UserScript==
// @name         驾校标线脚本
// @version      0.1
// @description  try to take over the world!
// @author       dearmsdan
// @match        https://www.jiakaobaodian.com/sign/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(function(){
        
    let arr = $('.com-sign-container>ul>li .img-div');
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        let p = $(item).next('p');
        p.css('color',"#bf0101");
        let d = $(item).attr('data-desc');
        p.append('<div style="color:#333;">'+d+'</div>');
        //console.log($(item).attr('data-desc'));
        //console.log($(item).attr('data-desc'));
        
    }
    $('.com-sign-container>ul>li').css('height',"auto");
    $('.layout-header').css('display',"none");
    $('.layout-user').css('display',"none");
    $('.common-channel-crumb').css('display',"none");
    $('.layout-footer').css('display',"none");
    // $('.').css('display',"none");
    $('.com-sign-container>ul>li .title').css('line-height',"35px");

    let arr2 = $('.com-tree-w>.level-1');
    for (let i = 1; i < arr2.length; i++) {
        const item = arr2[i];
        let a = $(item).find('.title.active');
        a.attr('href','./sign/'+ i);
        
    }
    });
    
    //v.attr('data-desc')
    // Your code here...
})();