// ==UserScript==
// @name         HDoujin Downloader Helper - HBrowse
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Adds buttons to copy the manga URL into the clipboard for easier bulk downloading with HDoujin Downloader. Enable clipboard monitoring in HDoujin Downloader for best results.
// @author       Brian Wiegand (GenuineSounds)
// @require      https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js
// @match        http://www.hbrowse.com/browse/*
// @match        http://www.hbrowse.com/result/*
// @match        https://www.hbrowse.com/browse/*
// @match        https://www.hbrowse.com/result/*
// @grant        none
// ==/UserScript==

var clipboard = new ClipboardJS('.cbtn');
var elements = document.getElementsByClassName('browseDescription');

var list = ["", ""];
var full = "";

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var sep = document.createTextNode(' | ');
    var ref = element.getElementsByTagName('a')[0].href;
    var div = document.createElement('b');
    list[i] = ref;
    div.innerHTML = '<button class="cbtn" data-clipboard-text="' + ref + '"><a>Copy</a></button>';
    element.prepend(sep);
    element.prepend(div);
}

for (var x = 0; x < list.length; x++) {
    full += list[x] + " ";
}

var fullDiv = document.getElementById('main').getElementsByTagName("p")[0];
var copyAllDiv = document.createElement('div');
copyAllDiv.innerHTML = '<button class="cbtn" data-clipboard-text="' + full + '"><a>Copy All</a></button>';
fullDiv.append(copyAllDiv);
