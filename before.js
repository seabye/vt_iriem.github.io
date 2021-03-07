'use strict';
// #before
    // console
    window.console.log('#### start: before.js');
// #import
// #variable
// #method
// #build
    // build
    window.fetch(`${window.location.origin}/list.txt`,{method:'GET'}).then((data)=>{
        return data.text();
    }).then(async(data)=>{
        window.document.body.setAttribute('style','font-family: system-ui, -apple-system, BlinkMacSystemFont, PingFang SC, Noto Sans CJK SC, Microsoft YaHei;');
        window.document.body.innerHTML='Loading...';
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
        window.document.body.removeAttribute('style');
        window.document.body.innerHTML='';
        for(const key in window.before_list_result){
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
            const loop=()=>{
                if(window.document.body.childElementCount){
                    window.document.head.removeChild(window.document.head.firstElementChild);
                    return true;
                }
                window.setTimeout(loop,1000/24);
            };
            loop();
            break;
        }
    });
// #debug
// #after
    // console
    window.console.log('#### end: before.js');