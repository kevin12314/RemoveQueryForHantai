// ==UserScript==
// @name         使連結不帶query字串
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @updateURL     https://github.com/kevin12314/RemoveQueryForHentai/raw/master/RemoveQueryForHentai.user.js
// @include       *://www.porncomics.me/*
// @include       http://www.3dcomix.pro/*
// @include       http://www.toonsex.pics/*
// @include       http://www.freexxxtoon.com/*
// @include       http://www.xxx3dcomix.com/*
// @include       http://www.animexxxmovies.com/*
// @include       http://www.porncomix.pro/*
// @include       http://www.cartoonsexcomix.com/*
// @include       /^http:\/\/www\.{1}\w*hentai\w*\.\w*\/.*$/
// @grant        none
// ==/UserScript==

var flowWebsite = ['www.porncomics.me',
                   'www.3dhentaicomics.com',
                   'www.xxxhentaimanga.com'];

(function() {
    'use strict';

    window.setInterval(( () => {
        if(window.onbeforeunload!=null){
            window.onbeforeunload=null;
        }
    } ), 1000);

     // debugger;

    var imagelist=document.querySelectorAll("div.portfolio-post>a");

    if(isFlowWeb(imagelist)){
        window.setInterval(( () => {
            imagelist=document.querySelectorAll("div.portfolio-post>a");
            if(imagelist.length>0){
                removeQuery(imagelist);
            }
        } ), 1000);
    }

    if(imagelist.length==0){
        imagelist=document.querySelectorAll("div.thumbs-block a");
    }

    //http://www.3dhentaicomics.com/*
    if(imagelist.length==0){
        imagelist=document.querySelectorAll("div#portfolio-items>ul a[data-id^='code']");

        if(isFlowWeb(imagelist)){
            window.setInterval(( () => {
                imagelist=document.querySelectorAll("div#portfolio-items>ul a[data-id^='code']");
                //var test=document.querySelectorAll("div#portfolio-items>ul li");
                //console.debug(test);
                if(imagelist.length>0){
                    removeQuery(imagelist);
                }
            } ), 1000);
        }
    }

    //http://www.sexhentai.pro/*
    if(imagelist.length==0){
        imagelist=document.querySelectorAll("div.image-list a");
    }

    if(imagelist.length==0){
        imagelist=document.querySelectorAll("div.gallery-list a");
    }

    removeQuery(imagelist);   

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

function isFlowWeb(imagelist){
    if(imagelist.length==0){
        return false;
    }
    var check=flowWebsite.filter(p=>location.href.indexOf(p)>=0);
    return check.length>0 || typeof onScroll !== 'undefined'
}
