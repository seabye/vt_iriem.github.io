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
        window.addEventListener('touchstart',preventDefault,{passive:false});
        window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'#121212':'#FFFFFF'}`,'important');
        window.document.documentElement.style.setProperty('position','fixed');
        window.document.documentElement.style.setProperty('width','100%');
        window.document.documentElement.style.setProperty('height','100%');
        window.document.head.insertAdjacentHTML('beforeend',`<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">`);
        window.document.head.insertAdjacentHTML('beforeend',`<title>每日电视</title>`);
        window.document.head.insertAdjacentHTML('beforeend',`<link rel="icon" type="image/png" href="/base/icon.png">`);
        if(!window.navigator.userAgent.match(/iPhone|iPad/i)&&!((window.navigator.userAgent.match(/Safari/i)&&!window.navigator.userAgent.match(/Chrome|Edg/i))||window.navigator.userAgent.match(/FxiOS|CriOS|EdgiOS/i))){
            window.document.head.insertAdjacentHTML('beforeend',`<meta name="theme-color" content="${window.matchMedia('(prefers-color-scheme:dark)').matches?'#1E1E1E':'#F6F6F6'}">`);
        }
        const loop=()=>{
            if(window.document.body){
                window.document.body.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'#121212':'#FFFFFF'}`,'important');
                window.document.body.style.setProperty('color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'rgba(255,255,255,0.8)':'#121212'}`);
                window.document.body.style.setProperty('display','flex');
                window.document.body.style.setProperty('justify-content','center');
                window.document.body.style.setProperty('align-items','center');
                window.document.body.style.setProperty('position','fixed');
                window.document.body.style.setProperty('margin','unset');
                window.document.body.style.setProperty('width','100%');
                window.document.body.style.setProperty('height','100%');
                window.document.body.style.setProperty('line-height','161.8%');
                window.document.body.style.setProperty('white-space','pre-line');
                window.document.body.style.setProperty('font-family','system-ui, -apple-system, BlinkMacSystemFont, PingFang SC, Noto Sans CJK SC, Microsoft YaHei');
                return true;
            }
            window.setTimeout(loop,1000/24);
        };
        loop();
        window.setTimeout(()=>{
            window.fetch(`${window.location.origin}/list.txt`,{method:'GET'}).then((data)=>{
                window.document.body.innerHTML+='🤔\n';
                return data.text();
            }).then(async(data)=>{
                function*generator(list){
                    for(let key=0,length=list.length;key<length;key++){
                        window.document.body.innerHTML+=`🔌 ${list[key]}`;
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
                                window.document.body.innerHTML+=` 🟢\n`;
                                return [list[key],now-start];
                            }
                            return data;
                        }).then((data)=>{
                            return data;
                        }).catch(()=>{
                            window.document.body.innerHTML+=' 🔴\n';
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
                window.document.body.innerHTML+='👌';
                window.setTimeout(()=>{
                    if(window.JSON.stringify(window.before_list_result)!=='{}'){
                        for(const key in window.before_list_result){
                            window.removeEventListener('touchstart',preventDefault,{passive:false});
                            window.document.head.innerHTML='';
                            window.document.body.innerHTML='';
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
                                'head_icon': '//${window.before_list_result[key]}/base/icon.png',
                                'head_icon_apple': '//${window.before_list_result[key]}/base/icon-apple.png',
                                'head_theme_color_light': '#F6F6F6',
                                'head_theme_color_dark': '#1E1E1E',
                                'head_manifest': '/${window.before_list_result[key]}.manifest.webmanifest'
                            }`);
                            window.document.head.insertAdjacentElement('beforeend',element);
                            window.setTimeout(()=>{
                                window.document.documentElement.style.removeProperty('background-color');
                                window.document.documentElement.style.removeProperty('position');
                                window.document.documentElement.style.removeProperty('width');
                                window.document.documentElement.style.removeProperty('height');
                                window.document.body.style.removeProperty('background-color');
                                window.document.body.style.removeProperty('color');
                                window.document.body.style.removeProperty('display');
                                window.document.body.style.removeProperty('justify-content');
                                window.document.body.style.removeProperty('align-items');
                                window.document.body.style.removeProperty('position');
                                window.document.body.style.removeProperty('margin');
                                window.document.body.style.removeProperty('width');
                                window.document.body.style.removeProperty('height');
                                window.document.body.style.removeProperty('line-height');
                                window.document.body.style.removeProperty('white-space');
                                window.document.body.style.removeProperty('font-family');
                                if(!window.document.body.style[0]){
                                    window.document.body.removeAttribute('style');
                                }
                            },5000);
                            break;
                        }
                    }else{
                        window.document.body.innerHTML+='👋';
                    }
                },1000);
            });
        },500);
    }
// #debug
// #after
    // console
    window.console.log('#### end: before.js');