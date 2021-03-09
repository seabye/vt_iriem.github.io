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
        window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'#121212':'#FFFFFF'}`);
        window.document.documentElement.style.setProperty('color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'rgba(255,255,255,0.8)':'#121212'}`);
        window.document.documentElement.style.setProperty('display','flex');
        window.document.documentElement.style.setProperty('justify-content','center');
        window.document.documentElement.style.setProperty('align-items','center');
        window.document.documentElement.style.setProperty('width','100%');
        window.document.documentElement.style.setProperty('height','100%');
        window.document.documentElement.style.setProperty('font-family','system-ui, -apple-system, BlinkMacSystemFont, PingFang SC, Noto Sans CJK SC, Microsoft YaHei');
        window.document.head.insertAdjacentHTML('beforeend',`<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">`);
        window.document.head.insertAdjacentHTML('beforeend',`<title>每日电视</title>`);
        window.document.head.insertAdjacentHTML('beforeend',`<link rel="icon" type="image/png" href="/base/icon.png">`);
        if(!window.navigator.userAgent.match(/iPhone|iPad/i)&&!((window.navigator.userAgent.match(/Safari/i)&&!window.navigator.userAgent.match(/Chrome|Edg/i))||window.navigator.userAgent.match(/FxiOS|CriOS|EdgiOS/i))){
            window.document.head.insertAdjacentHTML('beforeend',`<meta name="theme-color" content="${window.matchMedia('(prefers-color-scheme:dark)').matches?'#1E1E1E':'#F6F6F6'}">`);
        }
        const loop=()=>{
            if(window.document.body){
                window.document.body.innerHTML='Loading...';
                return true;
            }
            window.setTimeout(loop,1000/24);
        };
        loop();
        window.fetch(`${window.location.origin}/list.txt`,{method:'GET'}).then((data)=>{
            return data.text();
        }).then(async(data)=>{
            function*generator(list){
                for(let key=0,length=list.length;key<length;key++){
                    const start=window.Date.now();
                    yield window.fetch(`${window.location.protocol}//${list[key]}`,{method:'HEAD'}).then((data)=>{
                        if(data.status===200){
                            return [list[key],window.Date.now()-start];
                        }
                    });
                }
            }
            window.before_list_result={};
            for await(const value of generator(data.split('\n'))){
                window.before_list_result[value[1]]=value[0];
            }
            for(const key in window.before_list_result){
                window.document.documentElement.removeAttribute('style');
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
                break;
            }
        });
    }
// #debug
// #after
    // console
    window.console.log('#### end: before.js');