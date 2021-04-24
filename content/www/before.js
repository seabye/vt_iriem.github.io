'use strict';
// #before
  // console
  window.console.log('#### start: before.js');
// #import
// #variable
// #method
// #build
  // build
  {
    const preventDefault=(event)=>{
      event.preventDefault();
    };
    window.addEventListener('touchstart',preventDefault);
    window.addEventListener('touchmove',preventDefault,{passive:false});
    window.addEventListener('touchend',preventDefault);
    window.addEventListener('wheel',preventDefault,{passive:false});
    window.addEventListener('gesturestart',preventDefault);
    window.document.documentElement.style.setProperty('background','center/38.4% no-repeat');
    window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'#121212':'#FFFFFF'}`);
    window.document.documentElement.style.setProperty('background-image','url(/content/resource/image/before.png)');
    window.document.documentElement.style.setProperty('overflow','hidden');
    window.document.documentElement.style.setProperty('position','absolute');
    window.document.documentElement.style.setProperty('left','0');
    window.document.documentElement.style.setProperty('top','0');
    window.document.documentElement.style.setProperty('width','100%');
    window.document.documentElement.style.setProperty('height','100%');
    window.document.head.insertAdjacentHTML('beforeend','<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">');
    window.document.head.insertAdjacentHTML('beforeend','<meta name="format-detection" content="address=no,email=no,telephone=no">');
    window.document.head.insertAdjacentHTML('beforeend','<title>每日电视</title>');
    window.document.head.insertAdjacentHTML('beforeend','<link rel="icon" type="image/png" href="/content/resource/image/icon/icon.png">');
    if((window.navigator.userAgent.match(/Safari/i)&&!window.navigator.userAgent.match(/Chrome|Edg/i))||window.navigator.userAgent.match(/iPhone|iPad/i)){
      window.document.head.insertAdjacentHTML('beforeend','<link rel="apple-touch-icon" href="/content/resource/image/icon/icon-apple.png">');
      window.document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-capable" content="yes">');
      window.document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-status-bar-style" content="white">');
      window.document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-title" content="每日电视">');
    }else{
      window.document.head.insertAdjacentHTML('beforeend',`<meta name="theme-color" content="${window.matchMedia('(prefers-color-scheme:dark)').matches?'#1E1E1E':'#F6F6F6'}">`);
    }
    window.document.head.insertAdjacentHTML('beforeend','<link rel="manifest" href="/content/www/manifest.webmanifest">');
    const loop=()=>{
      if(window.document.body){
        window.document.body.style.setProperty('overflow','hidden');
        window.document.body.style.setProperty('position','absolute');
        window.document.body.style.setProperty('left','0');
        window.document.body.style.setProperty('top','0');
        window.document.body.style.setProperty('width','100%');
        window.document.body.style.setProperty('height','100%');
        // ~~~~
        window.document.body.style.setProperty('box-sizing','border-box');
        window.document.body.style.setProperty('display','flex');
        window.document.body.style.setProperty('justify-content','flex-start');
        window.document.body.style.setProperty('align-items','flex-end');
        window.document.body.style.setProperty('margin','unset');
        window.document.body.style.setProperty('padding','20px');
        window.document.body.style.setProperty('line-height','161.8%');
        window.document.body.style.setProperty('color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'rgba(255,255,255,0.8)':'rgba(0,0,0,0.8)'}`);
        window.document.body.style.setProperty('font-family','"Menlo", "Monaco", "Consolas", "Courier New", "Ubuntu Mono", "Microsoft YaHei", monospace, "SF Pro"');
        window.document.body.style.setProperty('white-space','pre-line');
        window.document.body.style.setProperty('font-weight','normal');
        window.document.body.style.setProperty('font-size','12px');
        window.document.body.style.setProperty('-webkit-user-select','none');
        window.document.body.style.setProperty('user-select','none');
        window.document.body.style.setProperty('cursor','default');
        window.document.body.innerHTML+='Ready<br>';
        return true;
      }
      window.setTimeout(loop,1000/24);
    };
    loop();
    window.setTimeout(()=>{
      window.fetch(`${window.location.origin}/content/resource/list.txt`,{method:'GET'}).then((data)=>{
        return data.text();
      }).then(async(data)=>{
        window.beforeListResult={};
        for await(const value of (function*(list=data.split('\n')){
          for(let key=0,length=list.length;key<length;key++){
            window.document.body.innerHTML+=`<span style="display: contents;">...</span> ${list[key].replace(/\:\d+/,'')}<br>`;
            const start=window.Date.now();
            const controller=new window.AbortController();
            window.setTimeout(()=>{
              return controller.abort();
            },3000);
            yield window.fetch(`${window.location.protocol}//${list[key]}`,{
              method:'HEAD',
              signal:controller.signal
            }).then((data)=>{
              const now=window.Date.now();
              if(data.status===200){
                window.document.body.innerHTML=window.document.body.innerHTML.replace(/(\<span style\=\"display\: contents\;\"\>\.\.\.\<\/span\>)(.*\<br\>)$/g,'<span style="display: contents; color: #00BB00;">Yes</span>$2');
                return [list[key],now-start];
              }
              return data;
            }).then((data)=>{
              return data;
            }).catch(()=>{
              window.document.body.innerHTML=window.document.body.innerHTML.replace(/(\<span style\=\"display\: contents\;\"\>\.\.\.\<\/span\>)(.*\<br\>)$/g,'<span style="display: contents; color: #CC0000;">...</span>$2');
              return false;
            });
          }
        })()){
          if(value){
            window.beforeListResult[value[1]]=value[0];
          }
        }
        if(window.JSON.stringify(window.beforeListResult)!=='{}'){
          window.document.body.innerHTML+='Go :P';
          window.setTimeout(()=>{
            for(const key in window.beforeListResult){
              window.document.body.innerHTML='';
              let title=null;
              let themeColor=null;
              for(const value of window.document.head.children){
                if(value.localName==='title'){
                  title=value;
                }else{
                  if(value.name==='theme-color'){
                    themeColor=value;
                  }
                }
              }
              for(const value of window.document.head.children){
                if(value!==title&&value!==themeColor){
                  value.parentElement.removeChild(value);
                }
              }
              for(const value of window.document.head.children){
                if(value!==title&&value!==themeColor){
                  value.parentElement.removeChild(value);
                }
              }
              const element=window.document.createElement('script');
              element.setAttribute('src','https://seabye.com/content/package/GUIInitial/GUIInitial.js');
              element.setAttribute('type','application/javascript');
              element.setAttribute('data-gui_initial',`{
                'startBackgroundColor_light': '#FFFFFF',
                'startBackgroundColor_dark': '#121212',
                'serviceWorker': '/sw.js',
                'head_title': '每日电视',
                'head_style': '//${window.beforeListResult[key]}/content/www/client.css',
                'head_script': '//${window.beforeListResult[key]}/content/www/client.js',
                'head_icon': '/content/resource/image/icon/icon.png',
                'head_icon_apple': '/content/resource/image/icon/icon-apple.png',
                'head_themeColor_light': '#F6F6F6',
                'head_themeColor_dark': '#1E1E1E',
                'head_manifest': '/content/www/manifest.webmanifest'
              }`);
              window.document.head.insertAdjacentElement('beforeend',element);
              window.removeEventListener('touchstart',preventDefault);
              window.removeEventListener('touchmove',preventDefault);
              window.removeEventListener('touchend',preventDefault);
              window.removeEventListener('wheel',preventDefault);
              window.removeEventListener('gesturestart',preventDefault);
              const loop=()=>{
                if(window.readyGo){
                  title.parentElement.removeChild(title);
                  if(themeColor){
                    themeColor.parentElement.removeChild(themeColor);
                  }
                  window.setTimeout(()=>{
                    window.document.documentElement.removeAttribute('style');
                    if(!window.document.documentElement.style[0]){
                      window.document.documentElement.removeAttribute('style');
                    }
                    window.document.body.removeAttribute('style');
                    if(!window.document.body.style[0]){
                      window.document.body.removeAttribute('style');
                    }
                  },350*1.5*2);
                  return true;
                }
                window.setTimeout(loop,1000/24);
              };
              loop();
              break;
            }
          },350*2);
        }else{
          // window.document.body.innerHTML+='Server Error :(';
          window.document.body.innerHTML+='在做了';
        }
      });
    },350);
  }
// #debug
// #after
  // console
  window.console.log('#### end: before.js');