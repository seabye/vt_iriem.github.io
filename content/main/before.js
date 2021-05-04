'use strict';
// #before
// #import
// #variable
// #method
// #build
  // build
  {
    const preventDefault=(event)=>{
      event.preventDefault();
    };
    addEventListener('touchstart',preventDefault);
    addEventListener('touchmove',preventDefault,{passive:false});
    addEventListener('touchend',preventDefault);
    addEventListener('wheel',preventDefault,{passive:false});
    addEventListener('gesturestart',preventDefault);
    document.documentElement.style.setProperty('background','center/38.4% no-repeat');
    document.documentElement.style.setProperty('background-color',`${matchMedia('(prefers-color-scheme:dark)').matches?'#121212':'#FFFFFF'}`);
    document.documentElement.style.setProperty('background-image','url(/content/asset/image/before.png)');
    document.documentElement.style.setProperty('overflow','hidden');
    document.documentElement.style.setProperty('position','absolute');
    document.documentElement.style.setProperty('left','0');
    document.documentElement.style.setProperty('top','0');
    document.documentElement.style.setProperty('width','100%');
    document.documentElement.style.setProperty('height','100%');
    document.head.insertAdjacentHTML('beforeend','<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">');
    document.head.insertAdjacentHTML('beforeend','<meta name="format-detection" content="address=no,email=no,telephone=no">');
    document.head.insertAdjacentHTML('beforeend','<title>每日电视</title>');
    document.head.insertAdjacentHTML('beforeend','<link rel="icon" type="image/png" href="/content/asset/image/icon/icon.png">');
    if((navigator.userAgent.match(/Safari/i)&&!navigator.userAgent.match(/Chrome|Edg/i))||navigator.userAgent.match(/iPhone|iPad/i)){
      document.head.insertAdjacentHTML('beforeend','<link rel="apple-touch-icon" href="/content/asset/image/icon/icon-apple.png">');
      document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-capable" content="yes">');
      document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-status-bar-style" content="white">');
      document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-title" content="每日电视">');
    }else{
      document.head.insertAdjacentHTML('beforeend',`<meta name="theme-color" content="${matchMedia('(prefers-color-scheme:dark)').matches?'#1E1E1E':'#F6F6F6'}">`);
    }
    document.head.insertAdjacentHTML('beforeend','<link rel="manifest" href="/content/main/manifest.webmanifest">');
    const loop=()=>{
      if(document.body){
        document.body.style.setProperty('overflow','hidden');
        document.body.style.setProperty('position','absolute');
        document.body.style.setProperty('left','0');
        document.body.style.setProperty('top','0');
        document.body.style.setProperty('width','100%');
        document.body.style.setProperty('height','100%');
        // ~~~~
        document.body.style.setProperty('box-sizing','border-box');
        document.body.style.setProperty('display','flex');
        document.body.style.setProperty('justify-content','flex-start');
        document.body.style.setProperty('align-items','flex-end');
        document.body.style.setProperty('margin','unset');
        document.body.style.setProperty('padding','20px');
        document.body.style.setProperty('line-height','161.8%');
        document.body.style.setProperty('color',`${matchMedia('(prefers-color-scheme:dark)').matches?'rgba(255,255,255,0.8)':'rgba(0,0,0,0.8)'}`);
        document.body.style.setProperty('font-family','"Menlo", "Monaco", "Consolas", "Courier New", "Ubuntu Mono", "Microsoft YaHei", monospace, "SF Pro"');
        document.body.style.setProperty('white-space','pre-line');
        document.body.style.setProperty('font-weight','normal');
        document.body.style.setProperty('font-size','12px');
        document.body.style.setProperty('-webkit-user-select','none');
        document.body.style.setProperty('user-select','none');
        document.body.style.setProperty('cursor','default');
        document.body.innerHTML+='Ready<br>';
        return true;
      }
      setTimeout(loop,1000/24);
    };
    loop();
    setTimeout(()=>{
      fetch(`${location.origin}/content/asset/list.txt`,{method:'GET'}).then((data)=>{
        return data.text();
      }).then(async(data)=>{
        globalThis.beforeListResult={};
        for await(const value of (function*(list=data.split('\n')){
          for(let key=0,length=list.length;key<length;key++){
            document.body.innerHTML+=`<span style="display: contents;">...</span> ${list[key].replace(/\:\d+/,'')}<br>`;
            const start=Date.now();
            const controller=new AbortController();
            setTimeout(()=>{
              return controller.abort();
            },3000);
            yield fetch(`${location.protocol}//${list[key]}`,{
              method:'HEAD',
              signal:controller.signal
            }).then((data)=>{
              const now=Date.now();
              if(data.status===200){
                document.body.innerHTML=document.body.innerHTML.replace(/(\<span style\=\"display\: contents\;\"\>\.\.\.\<\/span\>)(.*\<br\>)$/g,'<span style="display: contents; color: #00BB00;">Yes</span>$2');
                return [list[key],now-start];
              }
              return data;
            }).then((data)=>{
              return data;
            }).catch(()=>{
              document.body.innerHTML=document.body.innerHTML.replace(/(\<span style\=\"display\: contents\;\"\>\.\.\.\<\/span\>)(.*\<br\>)$/g,'<span style="display: contents; color: #CC0000;">...</span>$2');
              return false;
            });
          }
        })()){
          if(value){
            beforeListResult[value[1]]=value[0];
          }
        }
        if(JSON.stringify(beforeListResult)!=='{}'){
          document.body.innerHTML+='Go :P';
          setTimeout(()=>{
            for(const key in beforeListResult){
              document.body.innerHTML='';
              let title=null;
              let themeColor=null;
              for(const value of document.head.children){
                if(value.localName==='title'){
                  title=value;
                }else{
                  if(value.name==='theme-color'){
                    themeColor=value;
                  }
                }
              }
              for(const value of document.head.children){
                if(value!==title&&value!==themeColor){
                  value.parentElement.removeChild(value);
                }
              }
              for(const value of document.head.children){
                if(value!==title&&value!==themeColor){
                  value.parentElement.removeChild(value);
                }
              }
              const element=document.createElement('script');
              element.setAttribute('src','https://seabye.com/content/module/GUIInitial/GUIInitial.js');
              element.setAttribute('type','application/javascript');
              element.setAttribute('data-gui_initial',`{
                'startBackgroundColor_light': '#FFFFFF',
                'startBackgroundColor_dark': '#121212',
                'serviceWorker': '/sw.js',
                'head_title': '每日电视',
                'head_style': '//${beforeListResult[key]}/content/main/client.css',
                'head_script': '//${beforeListResult[key]}/content/main/client.js',
                'head_icon': '/content/asset/image/icon/icon.png',
                'head_icon_apple': '/content/asset/image/icon/icon-apple.png',
                'head_themeColor_light': '#F6F6F6',
                'head_themeColor_dark': '#1E1E1E',
                'head_manifest': '/content/main/manifest.webmanifest'
              }`);
              document.head.insertAdjacentElement('beforeend',element);
              removeEventListener('touchstart',preventDefault);
              removeEventListener('touchmove',preventDefault);
              removeEventListener('touchend',preventDefault);
              removeEventListener('wheel',preventDefault);
              removeEventListener('gesturestart',preventDefault);
              const loop=()=>{
                if(readyGo){
                  title.parentElement.removeChild(title);
                  if(themeColor){
                    themeColor.parentElement.removeChild(themeColor);
                  }
                  setTimeout(()=>{
                    document.documentElement.removeAttribute('style');
                    if(!document.documentElement.style[0]){
                      document.documentElement.removeAttribute('style');
                    }
                    document.body.removeAttribute('style');
                    if(!document.body.style[0]){
                      document.body.removeAttribute('style');
                    }
                  },350*1.5*2);
                  return true;
                }
                setTimeout(loop,1000/24);
              };
              loop();
              break;
            }
          },350*2);
        }else{
          // document.body.innerHTML+='Server Error :(';
          document.body.innerHTML+='正在研发,预计[2021.07~2021.08]启动.';
        }
      });
    },350);
  }
// #debug
// #after