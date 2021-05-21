'use strict';
// #before
// #import
// #variable
// #block
// #build
  // run
  export const run=(tyin,els)=>{
    tyin.elementCreate({
      sc_cr_c043_cr_cr_cr_cr_search:{
        function(){
          tyin.loop(()=>{
            if(els.c043_ve_functionOk){
              els.c043_searchGo=(search,initial)=>{
                if(search.trim()||initial){
                  els.c043_bk_block_solid_search.back();
                  setTimeout(()=>{
                    els.c043_bk_container(els.c043_bk_block_solid_search,undefined,'c043_bk_block_solid',[
                      {
                        icon:'􀊫',
                        title:`搜寻${search?` '${search}'`:''}`,
                        view:[
                          {
                            type:'unknown',
                            data:{
                              class:'setting',
                              function(self_){
                                return new Promise((resolve)=>{
                                  tyin.elementCreate({
                                    c043_bk_view_setting_before:{},
                                    c043_bk_view_setting_list:{
                                      async function(){
                                        if(!initial){
                                          await tyin.fetch(`${els.client_ve_serverURL}/s100/video/source`,'GET',undefined,undefined,undefined,'json',(data)=>{
                                            let html='';
                                            tyin.for(data.result,(...data)=>{
                                              if(data[2].url){
                                                html+=`<div style="order:-${data[2].year};"><div class="content" data-source_url="${data[2].url}" data-source_name="${data[2].name}" data-source_poster="${data[2].poster}" data-source_year="${data[2].year}"><div class="title" style="pointer-events: none;">${data[2].name}</div><div class="description" style="pointer-events: none;">${data[2].year}年, ${data[2].url.toString().split(',').length}话</div></div></div>`;
                                              }
                                            },0);
                                            this.element.insertAdjacentHTML('beforeend',html);
                                            tyin.listenDOM('add',this.element,'pointer_up',(data)=>{
                                              if(data.target.dataset.source_url){
                                                if(els.c043_bk_block_liquid.get('playlist')){}
                                                els.c043_bk_container(els.c043_bk_block_liquid,'playlist','c043_bk_block_liquid',[
                                                  {
                                                    icon:'􀊚',
                                                    title:'视频',
                                                    control:{
                                                      back:true
                                                    },
                                                    view:[
                                                      {
                                                        type:'unknown',
                                                        data:{
                                                          class:'setting',
                                                          function(self_){
                                                            return new Promise((resolve)=>{
                                                              tyin.elementCreate({
                                                                c043_bk_view_setting_before:{},
                                                                c043_bk_view_setting_list:{
                                                                  function(){
                                                                    let html='';
                                                                    tyin.for(data.target.dataset.source_url.split(','),(...data_)=>{
                                                                      html+=`<div data-source_url="${data_[2]}" data-source_name="${data.target.dataset.source_name}" data-source_poster="${data.target.dataset.source_poster}" data-source_count="${data_[0]+1}">第 ${data_[0]+1} 话</div>`;
                                                                    },0);
                                                                    this.element.insertAdjacentHTML('beforeend',html);
                                                                    tyin.listenDOM('add',this.element,'pointer_up',(data)=>{
                                                                      if(data.target.dataset.source_url){
                                                                        els.c043_bk_player(data.target.dataset.source_url,data.target.dataset.source_poster,`${data.target.dataset.source_name} - 第 ${data.target.dataset.source_count} 话`,'...');
                                                                      }
                                                                    });
                                                                  }
                                                                },
                                                                c043_bk_view_setting_after:{}
                                                              },this.element);
                                                              resolve();
                                                            });
                                                          }
                                                        }
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
                                              }
                                            });
                                          });
                                        }
                                      }
                                    },
                                    c043_bk_view_setting_after:{}
                                  },this.element);
                                  setTimeout(()=>{
                                    resolve();
                                  },1000);
                                });
                              }
                            }
                          }
                        ]
                      },
                      {
                        icon:'􀐟',
                        title:`作品${search?` '${search}'`:''}`,
                        view:[
                          {
                            type:'setting',
                            data:''
                          }
                        ]
                      },
                      {
                        icon:'􀌳',
                        title:`互动${search?` '${search}'`:''}`,
                        view:[
                          {
                            type:'setting',
                            data:''
                          }
                        ]
                      },
                      {
                        icon:'􀉮',
                        title:`账户${search?` '${search}'`:''}`,
                        view:[
                          {
                            type:'setting',
                            data:''
                          }
                        ]
                      }
                    ],function(self_){
                      tyin.elementCreate({
                        c043_bk_container_head:{
                          c043_bk_container_head_search:{
                            c043_bk_container_head_search_input:{
                              element:['input',{enterkeyhint:'search',type:'search',placeholder:'搜寻'}],
                              function(){
                                this.element.value=els.sc_cr_c043_cr_cr_menu_search_cr_search_input_self.value;
                                els.sc_cr_c043_cr_cr_menu_search_cr_search_input_self_copy=this.element;
                                this.element.addEventListener('input',(event)=>{
                                  els.sc_cr_c043_cr_cr_menu_search_cr_search_input_self.value=event.target.value;
                                  if(event.target.value){
                                    tyin.elementState(els.sc_cr_c043_cr_cr_menu_search_cr_search_clear,'','c043_sc_mk_hide',true);
                                  }else{
                                    tyin.elementState(els.sc_cr_c043_cr_cr_menu_search_cr_search_clear,'c043_sc_mk_hide','',true);
                                  }
                                });
                                this.element.addEventListener('keydown',(event)=>{
                                  if(event.key==='Enter'&&event.target.localName==='input'){
                                    els.c043_searchGo(event.target.value);
                                  }
                                });
                              }
                            }
                          }
                        }
                      },self_.c043_bk_container,'afterbegin');
                    });
                  },350);
                }
              };
              els.c043_searchGo('',true);
              return true;
            }
            return false;
          });
        }
      }
    },els.sc_cr_c043_cr_cr_cr_cr,'beforeend',els);
  };
// #debug
// #after