'use strict';
// #before
// #import
// #variable
// #block
// #build
  // run
  export const run=(tyin,els)=>{
    tyin.elementCreate({
      sc_cr_client043_cr_cr_cr_cr_account:{
        function(){
          tyin.loop(()=>{
            if(els.client043_ve_functionOk){
              els.client043_bk_container(els.client043_bk_block_solid_account,undefined,'client043_bk_block_solid',[
                {
                  icon:'􀋚',
                  title:'通知',
                  view:[
                    {
                      type:'setting',
                      data:''
                    }
                  ]
                },
                {
                  icon:'􀈮',
                  title:'存档',
                  view:[
                    {
                      type:'setting',
                      data:''
                    }
                  ]
                },
                // {
                //   icon:'􀍟',
                //   title:'设定',
                //   view:[
                //     {
                //       type:'setting',
                //       data:{
                //         before:['before',function(){}],
                //         list:[
                //           ['left','center','right',function(){}],
                //           ['left','center','right',function(){}],
                //           ['left','center','right',function(){}]
                //         ],
                //         after:['after',function(){}],
                //         function(){
                //           return new Promise((resolve)=>{
                //             resolve();
                //           });
                //         }
                //       }
                //     }
                //   ]
                // },
                {
                  icon:'􀍟',
                  title:'设定',
                  view:[
                    {
                      type:'unknown',
                      data:{
                        class:'setting',
                        function(self_){
                          return new Promise((resolve)=>{
                            tyin.elementCreate({
                              client043_bk_view_setting_before:{},
                              client043_bk_view_setting_list:[
                                {
                                  element:[,,'􀥏 工坊'],
                                  function(){
                                    tyin.listenDOM('add',this.element,'pointer_up',(data)=>{
                                      els.client043_bk_container(els.client043_bk_block_solid_account,data.target,'client043_bk_block_solid',[
                                        {
                                          title:'工坊',
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
                                                      client043_bk_view_setting_before:{},
                                                      client043_bk_view_setting_list:[
                                                        {
                                                          element:[,,'􀥏 调试'],
                                                          function(){
                                                            tyin.listenDOM('add',this.element,'pointer_up',(data)=>{
                                                              els.client043_bk_container(els.client043_bk_block_solid_account,data.target,'client043_bk_block_solid',[
                                                                {
                                                                  icon:'􀥏',
                                                                  title:function 调试(){
                                                                    console.log('++++',this.element);
                                                                  },
                                                                  control:{
                                                                    back(self_){
                                                                      console.log('++++',this.element);
                                                                    },
                                                                    refresh(self_){
                                                                      console.log('++++',this.element);
                                                                    },
                                                                    filter(self_){
                                                                      console.log('++++',this.element);
                                                                      els.client043_bk_container(els.client043_bk_block_liquid,undefined,'client043_bk_block_liquid',[
                                                                        {
                                                                          title:'filter',
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
                                                                    },
                                                                    edit(self_){
                                                                      console.log('++++',this.element);
                                                                    },
                                                                    more(self_){
                                                                      console.log('++++',this.element);
                                                                      els.client043_bk_container(els.client043_bk_block_liquid,undefined,'client043_bk_block_liquid',[
                                                                        {
                                                                          title:'more',
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
                                                                    }
                                                                  },
                                                                  view:[
                                                                    {
                                                                      type:'unknown',
                                                                      data:{
                                                                        class:'setting',
                                                                        function(self_){
                                                                          return new Promise((resolve)=>{
                                                                            tyin.elementCreate({
                                                                              client043_bk_view_setting_before:{},
                                                                              client043_bk_view_setting_list:[
                                                                                [
                                                                                  function(){
                                                                                    tyin.elementCreate(undefined,undefined,this.element,undefined,'􀊚 视频');
                                                                                    tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                                                      els.client043_bk_player('https://wanmei.xiaocong-zuida.com/20171218/kADRk4MM/index.m3u8','https://tupian.gg-zui.com/pic/upload/vod/2017-12-18/201712181513564121.jpg','死亡笔记 - 第 1 话','荒木哲郎');
                                                                                    },undefined,0);
                                                                                  }
                                                                                ],
                                                                                [
                                                                                  function(){
                                                                                    tyin.elementCreate(undefined,undefined,this.element,undefined,'􀑪 声频');
                                                                                    tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                                                      els.client043_bk_player('','http://p1.music.126.net/R3S3vxO10FPC0KY4GKYwOA==/6026423232258464.jpg','素敌だね','りっき');
                                                                                    },undefined,0);
                                                                                  }
                                                                                ],
                                                                                [
                                                                                  async function(){
                                                                                    globalThis.tyin_quill=await tyin.package_quill_create(this.element,undefined,'tyin_simple','some',undefined,false,'320px','320px',1);
                                                                                  }
                                                                                ]
                                                                              ],
                                                                              client043_bk_view_setting_after:{}
                                                                            },this.element);
                                                                            resolve();
                                                                          });
                                                                        }
                                                                      }
                                                                    },
                                                                    // {
                                                                    //   type:'setting',
                                                                    //   data:{
                                                                    //     before:['before',function(){}],
                                                                    //     list:[],
                                                                    //     after:['before',function(){}],
                                                                    //     function(){
                                                                    //       return new Promise((resolve)=>{
                                                                    //         resolve('setting');
                                                                    //       });
                                                                    //     }
                                                                    //   }
                                                                    // }
                                                                  ]
                                                                }
                                                              ]);
                                                            },0);
                                                          }
                                                        }
                                                      ],
                                                      client043_bk_view_setting_after:{}
                                                    },this.element);
                                                    resolve();
                                                  });
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]);
                                    },0);
                                  }
                                }
                              ],
                              client043_bk_view_setting_after:{}
                            },this.element);
                            resolve();
                          });
                        }
                      }
                    }
                  ]
                }
              ]);
              return true;
            }
            return false;
          });
        }
      }
    },els.sc_cr_client043_cr_cr_cr_cr,'beforeend',els);
  };
// #debug
// #after