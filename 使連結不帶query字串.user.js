// ==UserScript==
// @name         使連結不帶query字串
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include       *://www.porncomics.me/*
// @include       http://www.3dcomix.pro/*
// @include       http://www.toonsex.pics/*
// @include       http://www.freexxxtoon.com/*
// @include       http://www.xxx3dcomix.com/*
// @include       http://www.3dhentaicomics.com/*
// @include       http://www.sexhentai.pro/*
// @include       http://www.xxxhentaivids.com/*
// @include       http://www.animexxxmovies.com/*
// @include       http://www.porncomix.pro/*
// @include       http://www.cartoonsexcomix.com/*
// @include       http://www.xxxhentaipics.pro/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var imagelist=document.querySelectorAll("div.portfolio-post>a");
    if(imagelist.length==0){
        imagelist=document.querySelectorAll("div.thumbs-block a");
    }

    //http://www.3dhentaicomics.com/*
    if(imagelist.length==0){
        imagelist=document.querySelectorAll("div#portfolio-items>ul a[data-id^='code']");

        window.setInterval(( () => {
            imagelist=document.querySelectorAll("div#portfolio-items>ul a[data-id^='code']");
            if(imagelist.length>0){
                removeQuery(imagelist);
            }
        } ), 1000);
    }

    //http://www.sexhentai.pro/*
    if(imagelist.length==0){
        imagelist=document.querySelectorAll("div.image-list a");
    }

    removeQuery(imagelist);

    window.setInterval(( () => {
            if(window.onbeforeunload!=null){
                window.onbeforeunload=null;
            }
        } ), 1000);

    /*
    setTimeout(function(){
        debugger;
        imagelist.forEach(function(item ,index){
          if(item.href.indexOf("?")>0){
             var queryIndex=item.href.indexOf("?");
              item.setAttribute("data-id","");
             item.href=item.href.substring(0,queryIndex);
          }
         });
    },5000);*/
    // Your code here...
})();

function removeQuery(imagelist){
    imagelist.forEach(function(item ,index){
        item.setAttribute("data-id","");
        if(item.href.indexOf("?")>0){
            var queryIndex=item.href.indexOf("?");
            item.setAttribute("data-id","");
            item.href=item.href.substring(0,queryIndex);
        }
    });
}