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
        window.document.documentElement.style.setProperty('background-image','url(/base/before/image.png)');
        window.document.documentElement.style.setProperty('overflow','hidden');
        window.document.documentElement.style.setProperty('position','absolute');
        window.document.documentElement.style.setProperty('left','0');
        window.document.documentElement.style.setProperty('top','0');
        window.document.documentElement.style.setProperty('width','100%');
        window.document.documentElement.style.setProperty('height','100%');
        window.document.head.insertAdjacentHTML('beforeend',`<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">`);
        window.document.head.insertAdjacentHTML('beforeend',`<title>每日电视</title>`);
        window.document.head.insertAdjacentHTML('beforeend',`<link rel="icon" type="image/png" href="/base/icon.png">`);
        if(!window.navigator.userAgent.match(/iPhone|iPad/i)&&!((window.navigator.userAgent.match(/Safari/i)&&!window.navigator.userAgent.match(/Chrome|Edg/i))||window.navigator.userAgent.match(/FxiOS|CriOS|EdgiOS/i))){
            window.document.head.insertAdjacentHTML('beforeend',`<link rel="apple-touch-icon" href="/base/icon-apple.png">`);
            window.document.head.insertAdjacentHTML('beforeend',`<meta name="theme-color" content="${window.matchMedia('(prefers-color-scheme:dark)').matches?'#1E1E1E':'#F6F6F6'}">`);
        }
        window.document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="/manifest.webmanifest">`);
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
                window.document.body.style.setProperty('color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'rgba(255,255,255,0.8)':'#121212'}`);
                window.document.body.style.setProperty('font-family','Consolas, Microsoft YaHei, monospace, Menlo, Monaco, Courier New');
                window.document.body.style.setProperty('white-space','pre-line');
                window.document.body.style.setProperty('font-weight','normal');
                window.document.body.style.setProperty('font-size','14px');
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
            window.fetch(`${window.location.origin}/list.txt`,{method:'GET'}).then((data)=>{
                return data.text();
            }).then(async(data)=>{
                function*generator(list){
                    for(let key=0,length=list.length;key<length;key++){
                        window.document.body.innerHTML+=`... ${list[key]}<br>`;
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
                                window.document.body.innerHTML=window.document.body.innerHTML.replace(/(\.\.\.)(.*\<br\>)$/g,'Yes$2');
                                return [list[key],now-start];
                            }
                            return data;
                        }).then((data)=>{
                            return data;
                        }).catch(()=>{
                            window.document.body.innerHTML=window.document.body.innerHTML.replace(/(\.\.\.)(.*\<br\>)$/g,'No$2');
                            return false;
                        });
                    }
                }
                window.before_list_result={};
                for await(const value of generator(data.split('\n'))){
                    if(value){
                        window.before_list_result[value[1]]=value[0];
                    }
                }
                if(window.JSON.stringify(window.before_list_result)!=='{}'){
                    window.document.body.innerHTML+='Go :P';
                    window.setTimeout(()=>{
                        for(const key in window.before_list_result){
                            window.document.body.innerHTML='';
                            window.document.head.innerHTML='';
                            const element=window.document.createElement('script');
                            element.setAttribute('src','https://seabye.com/link/gui_initial.js');
                            element.setAttribute('type','application/javascript');
                            element.setAttribute('data-gui_initial',`{
                                'start_background_color_light': '#FFFFFF',
                                'start_background_color_dark': '#121212',
                                'service_worker': '/sw.js',
                                'head_title': '每日电视',
                                'head_style': '//${window.before_list_result[key]}/client.css',
                                'head_script': '//${window.before_list_result[key]}/client.js',
                                'head_icon': '/base/icon.png',
                                'head_icon_apple': '/base/icon-apple.png',
                                'head_theme_color_light': '#F6F6F6',
                                'head_theme_color_dark': '#1E1E1E',
                                'head_manifest': '/manifest.webmanifest'
                            }`);
                            window.document.head.insertAdjacentElement('beforeend',element);
                            window.removeEventListener('touchstart',preventDefault);
                            window.removeEventListener('touchmove',preventDefault);
                            window.removeEventListener('touchend',preventDefault);
                            window.removeEventListener('wheel',preventDefault);
                            window.removeEventListener('gesturestart',preventDefault);
                            const loop=()=>{
                                if(window.getComputedStyle(window.document.documentElement).getPropertyValue('--sc_ve_before_ready')){
                                    window.setTimeout(()=>{
                                        window.document.documentElement.removeAttribute('style');
                                        if(!window.document.documentElement.style[0]){
                                            window.document.documentElement.removeAttribute('style');
                                        }
                                        window.document.body.removeAttribute('style');
                                        if(!window.document.body.style[0]){
                                            window.document.body.removeAttribute('style');
                                        }
                                    },350*1.25);
                                    return true;
                                }
                                window.setTimeout(loop,1000/24);
                            };
                            loop();
                            break;
                        }
                    },1000);
                }else{
                    window.document.body.innerHTML+='Server Error :(';
                }
            });
        },500);
    }
// #debug
// #after
    // console
    window.console.log('#### end: before.js');