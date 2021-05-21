'use strict';
// #before
// #import
// #variable
// #block
// #build
  // run
  export const run=(tyin,els)=>{
    tyin.elementCreate({
      sc_cr_c043_cr_cr_cr_player:{
        sc_cr_c043_cr_cr_cr_player_progress:{
          sc_cr_c043_cr_cr_cr_player_progress_left:{
            function(){
              tyin.listenDOM('add',this.element,'pointer_up',()=>{
                els.sc_cr_c043_player_video.currentTime-=15;
              },undefined,0);
            }
          },
          sc_cr_c043_cr_cr_cr_player_progress_center:{
            sc_cr_c043_cr_cr_cr_player_progress_center_cr:{
              sc_cr_c043_cr_cr_cr_player_progress_center_cr_cr:{
                function(){
                  let down_point=0;
                  let down_progress=0;
                  this.element.addEventListener('pointerdown',(event)=>{
                    this.element.innerHTML+=els.sc_cr_c043_cr_cr_cr_player_progress_left.innerText.replace('􀎄','');
                    down_point=event.screenX;
                    down_progress=els.sc_cr_c043_cr_cr_cr_player_progress_center_cr.offsetWidth;
                    addEventListener('pointermove',move);
                    addEventListener('pointerup',up);
                  });
                  const move=(event)=>{
                    let progress_to=down_progress+(event.screenX-down_point);
                    if(progress_to<0){
                      progress_to=0;
                    }else{
                      if(progress_to>els.sc_cr_c043_cr_cr_cr_player_progress_center.offsetWidth){
                        progress_to=els.sc_cr_c043_cr_cr_cr_player_progress_center.offsetWidth;
                      }
                    }
                    els.sc_cr_c043_cr_cr_cr_player_progress_center_cr.style.setProperty('width',`${progress_to}px`);
                    this.element.innerHTML=`${tyin.percent(els.sc_cr_c043_cr_cr_cr_player_progress_center.offsetWidth,els.sc_cr_c043_cr_cr_cr_player_progress_center_cr.offsetWidth)} ${tyin.humanTime(els.sc_cr_c043_player_video.duration*(els.sc_cr_c043_cr_cr_cr_player_progress_center_cr.offsetWidth/els.sc_cr_c043_cr_cr_cr_player_progress_center.offsetWidth)*1000)}`;
                  };
                  const up=()=>{
                    els.sc_cr_c043_player_video.currentTime=els.sc_cr_c043_player_video.duration*(els.sc_cr_c043_cr_cr_cr_player_progress_center_cr.offsetWidth/els.sc_cr_c043_cr_cr_cr_player_progress_center.offsetWidth);
                    removeEventListener('pointermove',move);
                    removeEventListener('pointerup',up);
                  };
                }
              }
            }
          },
          sc_cr_c043_cr_cr_cr_player_progress_right:{
            function(){
              tyin.listenDOM('add',this.element,'pointer_up',()=>{
                els.sc_cr_c043_player_video.currentTime+=15;
              },undefined,0);
            }
          }
        },
        sc_cr_c043_cr_cr_cr_player_cr:{
          sc_cr_c043_cr_cr_cr_player_cr_info:{
            sc_cr_c043_cr_cr_cr_player_cr_info_poster:{},
            sc_cr_c043_cr_cr_cr_player_cr_info_text:{
              sc_cr_c043_cr_cr_cr_player_cr_info_text_title:{},
              sc_cr_c043_cr_cr_cr_player_cr_info_text_description:{}
            }
          },
          'sc_cr_c043_cr_cr_cr_player_cr_control c043_sc_mk_playerDisabled':{
            sc_cr_c043_cr_cr_cr_player_cr_control_info:{
              element:[,,'􀅴'],
              function(){
                tyin.listenDOM('add',this.element,'pointer_up',()=>{
                  els.c043_bk_container(els.c043_bk_block_liquid,undefined,'c043_bk_block_liquid',[
                    {
                      title:'info',
                      control:{
                        back:true
                      },
                      view:[
                        {
                          type:'setting',
                          data:''
                        }
                      ]
                    }
                  ]);
                  if(els.sc_cr_c043.classList.contains('c043_sc_mk_playerMaximize')){
                    tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerMaximize_pause','c043_sc_mk_playerMaximize',true);
                  }
                },undefined,0);
              }
            },
            'sc_cr_c043_cr_cr_cr_player_cr_control_danmaku c043_sc_mk_disabled':{
              element:[,,'􀕻'],
              function(){
                tyin.listenDOM('add',this.element,'pointer_up',()=>{},undefined,0);
              }
            },
            sc_cr_c043_cr_cr_cr_player_cr_control_pageFullScreen:{
              element:[,,'􀤳'],
              function(){
                tyin.listenDOM('add',els.sc_cr_c043,'observe_mutation',()=>{
                  if(els.sc_cr_c043.classList.contains('c043_sc_mk_playerMaximize')){
                    this.element.innerHTML='􀴊';
                  }else{
                    this.element.innerHTML='􀤳';
                  }
                },{attributes:true,attributeFilter:['class']});
                tyin.listenDOM('add',this.element,'pointer_up',()=>{
                  tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerMaximize','');
                },undefined,0);
              }
            },
            sc_cr_c043_cr_cr_cr_player_cr_control_screenFullScreen:{
              element:[,,'􀅊'],
              function(){
                tyin.listenDOM('add',this.element,'pointer_up',()=>{
                  tyin.fullScreen(els.sc_cr_c043_player_video);
                },undefined,0);
              }
            },
            sc_cr_c043_cr_cr_cr_player_cr_control_pictureInPicture:{
              element:[,,'􀑨'],
              function(){
                if('pictureInPictureEnabled'in document&&!(document.documentElement.classList.contains('ic_nr_system_ios')&&document.documentElement.classList.contains('ic_nr_pwa'))){
                  tyin.listenDOM('add',this.element,'pointer_up',()=>{
                    if(document.pictureInPictureElement!==els.sc_cr_c043_player_video){
                      els.sc_cr_c043_player_video.requestPictureInPicture().then(()=>{}).catch(()=>{});
                    }else{
                      document.exitPictureInPicture().then(()=>{}).catch(()=>{});
                    }
                  },undefined,0);
                }else{
                  tyin.elementState(this.element,'c043_sc_mk_hide','',true);
                }
              }
            },
            sc_cr_c043_cr_cr_cr_player_cr_control_play:{
              element:[,,'􀊄'],
              function(){
                tyin.listenDOM('add',this.element,'pointer_up',()=>{
                  if(els.sc_cr_c043_player_video.paused){
                    els.sc_cr_c043_player_video.play();
                  }else{
                    els.sc_cr_c043_player_video.pause();
                  }
                },undefined,0);
              }
            },
            'sc_cr_c043_cr_cr_cr_player_cr_control_next c043_sc_mk_disabled':{
              element:[,,'􀊐']
            },
            sc_cr_c043_cr_cr_cr_player_cr_control_playlist:{
              element:[,,'􀋲'],
              function(){
                tyin.listenDOM('add',this.element,'pointer_up',()=>{
                  els.c043_bk_container(els.c043_bk_block_liquid,'playlist','c043_bk_block_liquid',[
                    {
                      icon:'􀊚',
                      title:'视频',
                      control:{
                        back:true
                      },
                      view:[
                        {
                          type:'setting',
                          data:''
                        }
                      ]
                    },
                    {
                      icon:'􀑪',
                      title:'声频',
                      view:[
                        {
                          type:'setting',
                          data:''
                        }
                      ]
                    }
                  ]);
                  if(els.sc_cr_c043.classList.contains('c043_sc_mk_playerMaximize')){
                    tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerMaximize_pause','c043_sc_mk_playerMaximize',true);
                  }
                },undefined,0);
              }
            }
          }
        }
      }
    },els.sc_cr_c043_cr_cr_cr,'afterbegin',els);
    tyin.elementCreate({
      sc_cr_c043_player:{
        sc_cr_c043_player_video:{
          element:['video',{src:'',poster:`${els.client_ve_serverURL}/content/asset/image@0.1.0/player/poster.png`,playsinline:'',preload:'metadata'}],
          function(){
            tyin.listenDOM('add',els.sc_cr_c043_cr_cr,'pointer_up',(data)=>{
              if(data.target===els.sc_cr_c043_cr_cr){
                els.c043_bk_block_liquid.back();
                if(els.sc_cr_c043.classList.contains('c043_sc_mk_playerMaximize_pause')){
                  tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerMaximize','c043_sc_mk_playerMaximize_pause',true);
                }
              }
            },undefined,0);
            els.c043_bk_player=(src,poster=`${els.client_ve_serverURL}/content/asset/image@0.1.0/player/poster.png`,title,description)=>{
              els.sc_cr_c043_cr_cr_cr_player_progress_left.innerHTML='';
              els.sc_cr_c043_cr_cr_cr_player_progress_center_cr.removeAttribute('style');
              els.sc_cr_c043_cr_cr_cr_player_progress_center_cr_cr.innerHTML='';
              els.sc_cr_c043_cr_cr_cr_player_progress_right.innerHTML='';
              tyin.elementState(this.element,'c043_sc_mk_videoReady','',true);
              els.sc_cr_c043_cr_cr_cr_player_cr_info_poster.style.setProperty('background-image',`url(${poster})`);
              els.sc_cr_c043_cr_cr_cr_player_cr_info_text_title.innerHTML=title;
              els.sc_cr_c043_cr_cr_cr_player_cr_info_text_description.innerHTML=description;
              tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_screenFullScreen,'c043_sc_mk_disabled','',true);
              tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_pictureInPicture,'c043_sc_mk_disabled','',true);
              tyin.package_HLS_play('HLS',this.element,src,poster);
              this.element.play();
              if('pictureInPictureEnabled'in document){
                if(document.documentElement.classList.contains('ic_nr_browser_safari')){
                  if(!this.element.webkitDisplayingFullscreen){
                    this.element.addEventListener('loadeddata',()=>{
                      if(this.element.videoHeight){
                        if(!this.element.paused){
                          tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerDisplay','',true);
                        }
                      }else{
                        tyin.elementState(els.sc_cr_c043,'','c043_sc_mk_playerDisplay',true);
                      }
                    },{once:true});
                  }
                }else{
                  if(document.pictureInPictureElement!==this.element){
                    this.element.addEventListener('loadeddata',()=>{
                      if(this.element.videoHeight){
                        if(!this.element.paused){
                          tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerDisplay','',true);
                        }
                      }else{
                        tyin.elementState(els.sc_cr_c043,'','c043_sc_mk_playerDisplay',true);
                      }
                    },{once:true});
                  }
                }
              }else{
                this.element.addEventListener('loadeddata',()=>{
                  if(this.element.videoHeight){
                    if(!this.element.paused){
                      tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerDisplay','',true);
                    }
                  }else{
                    tyin.elementState(els.sc_cr_c043,'','c043_sc_mk_playerDisplay',true);
                  }
                },{once:true});
              }
            };
            if(document.documentElement.classList.contains('ic_nr_browser_chrome')){
              const run=()=>{
                if(this.element.getAttribute('poster')){
                  this.element.style.setProperty('background-image',`url(${this.element.getAttribute('poster')})`);
                  this.element.setAttribute('poster','');
                }
              };
              tyin.loop(()=>{
                if(this.element.getAttribute('poster')){
                  run();
                  return true;
                }
                return false;
              });
              tyin.listenDOM('add',this.element,'observe_mutation',run,{attributes:true,attributeFilter:['poster']});
            }
            els.c043_bk_videoPlaylist=()=>{};
            this.element.addEventListener('timeupdate',()=>{
              els.sc_cr_c043_cr_cr_cr_player_progress_left.innerHTML=`<span>􀎄</span> ${tyin.humanTime(this.element.currentTime*1000)}`;
              els.sc_cr_c043_cr_cr_cr_player_progress_right.innerHTML=`${tyin.humanTime((this.element.duration-this.element.currentTime)*1000)} <span>􀎃</span>`;
              if(!els.sc_cr_c043_cr_cr_cr_player_progress_center_cr_cr.classList.contains('ic_active_0')){
                els.sc_cr_c043_cr_cr_cr_player_progress_center_cr.style.setProperty('width',tyin.percent(this.element.duration,this.element.currentTime,false));
                els.sc_cr_c043_cr_cr_cr_player_progress_center_cr_cr.innerHTML=tyin.percent(this.element.duration,this.element.currentTime);
              }
            });
            const unload=()=>{
              if(this.element.getAttribute('src')){
                tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control,'','c043_sc_mk_playerDisabled',true);
              }else{
                setTimeout(()=>{
                  tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control,'c043_sc_mk_playerDisabled','',true);
                  tyin.elementState(els.sc_cr_c043,'','c043_sc_mk_playerDisplay c043_sc_mk_playerMaximize',true);
                  els.sc_cr_c043_cr_cr_cr_player_cr_control_play.innerHTML='􀊄';
                  if('pictureInPictureEnabled'in document){
                    document.exitPictureInPicture().then(()=>{}).catch(()=>{});
                  }
                  els.sc_cr_c043_cr_cr_cr_player_progress_left.innerHTML='<span style="color: var(--ic_ve_color_system_red_translucent);">􀙨</span> 请勿信任视频中的广告';
                  els.sc_cr_c043_cr_cr_cr_player_progress_center_cr.removeAttribute('style');
                  els.sc_cr_c043_cr_cr_cr_player_progress_center_cr_cr.innerHTML='';
                  els.sc_cr_c043_cr_cr_cr_player_progress_right.innerHTML='"记得分享给你的家人同学朋友" <span style="color: var(--ic_ve_color_system_green_translucent);">􀥳</span>';
                  els.sc_cr_c043_cr_cr_cr_player_cr_info_poster.removeAttribute('style');
                  els.sc_cr_c043_cr_cr_cr_player_cr_info_text_title.innerHTML='';
                  els.sc_cr_c043_cr_cr_cr_player_cr_info_text_description.innerHTML='';
                },350);
              }
            };
            unload();
            tyin.listenDOM('add',this.element,'observe_mutation',unload,{attributes:true,attributeFilter:['src']});
            this.element.addEventListener('play',()=>{
              els.sc_cr_c043_cr_cr_cr_player_cr_control_play.innerHTML='􀊆';
              if('pictureInPictureEnabled'in document){
                if(document.documentElement.classList.contains('ic_nr_browser_safari')){
                  if(!this.element.webkitDisplayingFullscreen){
                    if(this.element.videoHeight){
                      tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerDisplay','',true);
                    }
                  }
                }else{
                  if(document.pictureInPictureElement!==this.element){
                    if(this.element.videoHeight){
                      tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerDisplay','',true);
                    }
                  }
                }
              }else{
                if(this.element.videoHeight){
                  tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerDisplay','',true);
                }
              }
            });
            this.element.addEventListener('pause',()=>{
              els.sc_cr_c043_cr_cr_cr_player_cr_control_play.innerHTML='􀊄';
              tyin.elementState(els.sc_cr_c043,'','c043_sc_mk_playerDisplay',true);
            });
            if(document.documentElement.classList.contains('ic_nr_browser_safari')){
              this.element.addEventListener('webkitbeginfullscreen',()=>{
                tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_screenFullScreen,'c043_sc_mk_disabled','',true);
                if('pictureInPictureEnabled'in document){
                  tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_pictureInPicture,'c043_sc_mk_disabled','',true);
                  tyin.elementState(els.sc_cr_c043,'','c043_sc_mk_playerDisplay',true);
                }
              });
              this.element.addEventListener('webkitendfullscreen',()=>{
                tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_screenFullScreen,'','c043_sc_mk_disabled',true);
                if('pictureInPictureEnabled'in document){
                  if(!this.element.classList.contains('c043_sc_mk_videoReady')){
                    if(this.element.videoHeight){
                      tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_pictureInPicture,'','c043_sc_mk_disabled',true);
                    }
                  }
                  if(!this.element.paused){
                    if(this.element.videoHeight){
                      tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerDisplay','',true);
                    }
                  }
                }
              });
            }else{
              this.element.addEventListener('fullscreenchange',()=>{
                if(document.fullscreenElement){
                  this.element.setAttribute('controls','');
                }else{
                  this.element.removeAttribute('controls');
                }
              });
            }
            if('pictureInPictureEnabled'in document){
              this.element.addEventListener('enterpictureinpicture',()=>{
                els.sc_cr_c043_cr_cr_cr_player_cr_control_pictureInPicture.innerHTML='􀑧';
                tyin.elementState(els.sc_cr_c043,'','c043_sc_mk_playerDisplay',true);
              });
              this.element.addEventListener('leavepictureinpicture',()=>{
                els.sc_cr_c043_cr_cr_cr_player_cr_control_pictureInPicture.innerHTML='􀑨';
                if(!this.element.paused){
                  if(this.element.videoHeight){
                    tyin.elementState(els.sc_cr_c043,'c043_sc_mk_playerDisplay','',true);
                  }
                }
              });
            }
            if('pictureInPictureEnabled'in document){
              this.element.addEventListener('loadeddata',()=>{
                tyin.elementState(this.element,'','c043_sc_mk_videoReady',true);
                if(document.documentElement.classList.contains('ic_nr_browser_safari')){
                  if(!this.element.webkitDisplayingFullscreen){
                    if(this.element.videoHeight){
                      tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_pictureInPicture,'','c043_sc_mk_disabled',true);
                    }
                  }
                }else{
                  if(this.element.videoHeight){
                    tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_pictureInPicture,'','c043_sc_mk_disabled',true);
                  }
                }
              });
            }
            const height=()=>{
              const del=[];
              tyin.for([...els.client_ve_clientStyle.cssRules],(...data)=>{
                if(data[2].selectorText&&(data[2].selectorText==='.sc_cr_c043_player'||data[2].selectorText==='.c043_sc_mk_playerDisplay .sc_cr_c043_cr')){
                  del.push(data[1]);
                }
              });
              const calcHeight=Math.floor(this.element.videoHeight/this.element.videoWidth*els.sc_cr_c043.offsetWidth<=els.sc_cr_c043.offsetHeight/3?this.element.videoHeight/this.element.videoWidth*els.sc_cr_c043.offsetWidth:els.sc_cr_c043.offsetHeight/3);
              els.client_ve_clientStyle.insertRule(`.sc_cr_c043_player { height: ${calcHeight}px; }`,els.client_ve_clientStyle.cssRules.length);
              els.client_ve_clientStyle.insertRule(`.c043_sc_mk_playerDisplay .sc_cr_c043_cr { height: calc(100% - ${calcHeight}px); }`,els.client_ve_clientStyle.cssRules.length);
              if(del[0]){
                els.client_ve_clientStyle.deleteRule(del[0]);
                els.client_ve_clientStyle.deleteRule(del[0]);
              }
            };
            this.element.addEventListener('loadeddata',height);
            tyin.listenDOM('add',els.sc_cr_c043,'observe_resize',height);
            this.element.addEventListener('loadeddata',()=>{
              if(this.element.videoHeight){
                tyin.elementState(els.sc_cr_c043_cr_cr_cr_player_cr_control_screenFullScreen,'','c043_sc_mk_disabled',true);
                this.element.removeAttribute('style');
              }else{
                document.exitPictureInPicture().then(()=>{}).catch(()=>{});
              }
            });
          }
        }
      }
    },els.sc_cr_c043,'afterbegin',els);
  };
// #debug
// #after