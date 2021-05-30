'use strict';
// #before
  // // debug
  // if(location.hostname.match(/127.0.0.1|192\.168/)){
  //   document.documentElement.classList.add('debug');
  // }
  // els
  const els={
    client_ve_page:null,
    client_ve_serverURL:import.meta.url.match(/.+(\/\/.+)\//)[1].replace('/content/main/main@0.1.0',''),
    client_bk_font_pingFang(element){
      return new Promise(async(resolve)=>{
        // await tyin.loadFont('PingFang SC_','https://seabye.com/content/package/tyin@0.1.0/content/asset/font@0.1.0/pingFang/PingFang_2_400.woff2',{weight:'normal'});
        await tyin.loadFont('PingFang SC_','http://192.168.43.157/content/package/tyin@0.1.0/content/asset/font@0.1.0/pingFang/PingFang_2_400.woff2',{weight:'normal'});
        tyin.elementState(element,'sc_mk_font_pingFang','',true);
        resolve();
      });
    }
  };
// #import
  // tyin
  // import{tyin}from'https://seabye.com/content/package/tyin@0.1.0/content/main/main@0.1.0/tyin.js';
  import{tyin}from'http://192.168.43.157/content/package/tyin@0.1.0/content/main/main@0.1.0/tyin.js';
  // Google Analytics
  tyin.elementCreate('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-JMY4WSKVX9'},document.head);
  tyin.elementCreate('script',undefined,document.head,undefined,`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JMY4WSKVX9');`);
// #variable
// #block
// #build
  // build
  let ready=false;
  if(location.pathname!=='/'){
    tyin.fetch(`${els.client_ve_serverURL}/s100${tyin.URLPath()}`,'GET',undefined,undefined,undefined,'json',(data)=>{
      els.client_ve_page=data;
      if(data.status!==200){
        els.client_ve_page.result={title:'404 Not Found',data:'404 Not Found'};
        document.title='404 Not Found';
        document.head.insertAdjacentHTML('beforeend','<meta name="robots" content="noindex,nofollow"></meta>');
      }
      ready=true;
    });
  }else{
    ready=true;
  }
  tyin.loop(()=>{
    if(ready){
      if(Object.keys(tyin.URLObject().search).includes('version')){
        if(tyin.URLObject().search.version){
          els.client_ve_startVersion=tyin.URLObject().search.version;
        }
      }else{
        els.client_ve_startVersion='c043';
      }
      tyin.loop(()=>{
        if(document.styleSheets){
          let mark=false;
          tyin.for([...document.styleSheets],(...data)=>{
            if(data[2].href&&data[2].href.match('style.css')){
              els.client_ve_clientStyle=document.styleSheets[data[1]];
              els.client_ve_clientStyle.insertRule(`@import "./${els.client_ve_startVersion}/style.css"`,1);
              mark=true;
            }
          },0);
          return mark;
        }
        return false;
      });
      tyin.elementCreate({
        sc_cr:{}
      },document.body,undefined,els);
      tyin.import(`${location.protocol}${els.client_ve_serverURL}/content/main/main@0.1.0/${els.client_ve_startVersion}/script.js`,(module)=>{
        module.run(tyin,els);
        setTimeout(()=>{
          tyin.elementState(els[`sc_cr_${els.client_ve_startVersion}`],'sc_mk_display','',true);
        },350*1.5);
      });
      return true;
    }
    return false;
  });
// #debug
  // tyin
  tyin.debug(()=>{
    console.log('++++ tyin:',tyin);
    globalThis.tyin=tyin;
  });
  // els
  tyin.debug(()=>{
    globalThis.els=els;
    console.log('++++ els:',els);
  });
// #after