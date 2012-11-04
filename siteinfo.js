/* -*- coding: utf-8 -*- */
var SITEINFO = [
    /* sample
    {
        url:          'http://(.*).google.+/(search).+',
        nextLink:     'id("navbar")//td[last()]/a',
        pageElement:  '//div[@id="res"]/div',
        exampleUrl:   'http://www.google.com/search?q=nsIObserver',
    },
    */
    /* template
    {
        url:          '',
        nextLink:     '',
        pageElement:  '',
        exampleUrl:   '',
    },
    */

    {
        url:          '^http://chikyu-no-cocolo\\.cocolog-nifty\\.com/blog/\\d+/\\d+/post-.*\\.html',
        nextLink:     'id("alpha-inner")//a[text()="次のページ"]',
        pageElement:  '//*[@class="asset-content entry-content"]',
        exampleUrl:   'http://chikyu-no-cocolo.cocolog-nifty.com/blog/2012/10/post-1654.html',
    },

    {
        url:          '^http://www\\.rbbtoday\\.com/article/img/\\d+/\\d+/\\d+/\\d+/\\d+\\.html',
        nextLink:     'id("photo")//a[text()="次の写真へ"]',
        pageElement:  'id("photoImage")|id("photoCaption")',
        exampleUrl:   'http://www.rbbtoday.com/article/img/2012/11/02/97140/233570.html'
    },

]
