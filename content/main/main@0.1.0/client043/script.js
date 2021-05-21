'use strict';
// #before
// #import
// #variable
// #block
// #build
  // run
  export const run=(tyin,els)=>{
    tyin.elementCreate({
      sc_cr_client043:{
        async function(){
          new Worker(`${location.protocol}${els.client_ve_serverURL}/content/main/main@0.1.0/client043/worker.js`,{type:'module',name:'client043_worker'});
          const path=`${location.protocol}${els.client_ve_serverURL}/content/main/main@0.1.0/client043/`;
          await tyin.import(`${path}player.js`,(module)=>{
            module.run(tyin,els);
          });
          await tyin.import(`${path}browse.js`,(module)=>{
            module.run(tyin,els);
          });
          await tyin.import(`${path}interactive.js`,(module)=>{
            module.run(tyin,els);
          });
          await tyin.import(`${path}account.js`,(module)=>{
            module.run(tyin,els);
          });
          await tyin.import(`${path}search.js`,(module)=>{
            module.run(tyin,els);
          });
          await tyin.import(`${path}menu.js`,(module)=>{
            module.run(tyin,els);
          });
          els.client043_bk_block_liquid=tyin.elementBlock(els.sc_cr_client043_cr,'client043_bk_container','afterbegin',350*1.5*0);
          els.client043_bk_block_solid_browse=tyin.elementBlock(els.sc_cr_client043_cr_cr_cr_cr_browse,'client043_bk_container',undefined,350*1.5*0);
          els.client043_bk_block_solid_interactive=tyin.elementBlock(els.sc_cr_client043_cr_cr_cr_cr_interactive,'client043_bk_container',undefined,350*1.5*0);
          els.client043_bk_block_solid_account=tyin.elementBlock(els.sc_cr_client043_cr_cr_cr_cr_account,'client043_bk_container',undefined,350*1.5*0);
          els.client043_bk_block_solid_search=tyin.elementBlock(els.sc_cr_client043_cr_cr_cr_cr_search,'client043_bk_container',undefined,350*1.5*0);
          els.client043_bk_container=(block,record,block_class,data,callback)=>{
            const els_={};
            tyin.elementCreate({
              [`${block_class} client043_bk_container`]:{
                function(){
                  els_['client043_bk_container']=this.element;
                  if(data.length>1){
                    tyin.elementCreate({
                      client043_bk_container_tab:{
                        function(){
                          els_['client043_bk_container_tab']=this.element;
                          let tabBack=false;
                          tyin.for(data,(...item)=>{
                            if(item[2].control&&item[2].control.back&&!tabBack){
                              tyin.elementCreate({
                                client043_bk_container_tab_back:{
                                  element:[,,'􀯶'],
                                  function(){
                                    els_['client043_bk_container_tab_back']=this.element;
                                    tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                      block.back();
                                    },undefined,0);
                                    if(typeof item[2].control.back==='function'){
                                      tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                        item[2].control.back.call(this,els_);
                                      },undefined,0);
                                    }
                                  }
                                }
                              },this.element,'afterbegin');
                              tabBack=true;
                            }
                          },0);
                        },
                        client043_bk_container_tab_self:{
                          function(){
                            els_['client043_bk_container_tab_self']=this.element;
                            tyin.for(data,(...item)=>{
                              tyin.elementCreate({
                                [`client043_bk_container_tab_item${item[1]}`]:{
                                  element:[,,item[2].icon?item[2].icon:typeof item[2].title==='function'?item[2].title.name:item[2].title],
                                  function(){
                                    els_[`client043_bk_container_tab_item${item[1]}`]=this.element;
                                  }
                                }
                              },this.element);
                            },0);
                          }
                        }
                      },
                    },this.element,'afterbegin');
                  }
                },
                client043_bk_container_view:{
                  function(){
                    tyin.for(data,(...item)=>{
                      tyin.elementCreate({
                        [`client043_bk_container_view_item${item[1]}`]:{
                          function(){
                            els_[`client043_bk_container_view_item${item[1]}`]=this.element;
                            let oneRender=false;
                            const render=()=>{
                              if(this.element.classList.contains('client043_bk_container_active')){
                                this.element.innerHTML='';
                                if(!oneRender){
                                  oneRender=true;
                                  tyin.listenDOM('remove',this.element,'observe_mutation',render);
                                }
                                const self_={};
                                self_['client043_bk_container_view_self']=this.element;
                                tyin.elementCreate({
                                  client043_bk_container_view_control:{
                                    function(){
                                      self_['client043_bk_container_view_control']=this.element;
                                      if(item[2].control){
                                        if(item[2].control.back){
                                          if(data.length<2){
                                            tyin.elementCreate({
                                              client043_bk_container_view_control_back:{
                                                element:[,,'􀯶'],
                                                function(){
                                                  self_['client043_bk_container_view_control_back']=this.element;
                                                  tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                    block.back();
                                                  },undefined,0);
                                                  if(typeof item[2].control.back==='function'){
                                                    tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                      item[2].control.back.call(this,self_);
                                                    },undefined,0);
                                                  }
                                                }
                                              }
                                            },this.element);
                                          }else{
                                            self_['client043_bk_container_view_control_back']=els_.client043_bk_container_tab_back;
                                          }
                                        }
                                        if(item[2].control.refresh){
                                          tyin.elementCreate({
                                            client043_bk_container_view_control_refresh:{
                                              element:[,,'􀅈'],
                                              function(){
                                                self_['client043_bk_container_view_control_refresh']=this.element;
                                                tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                  self_['client043_bk_container_view_render']();
                                                },undefined,0);
                                                if(typeof item[2].control.refresh==='function'){
                                                  tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                    item[2].control.refresh.call(this,self_);
                                                  },undefined,0);
                                                }
                                              }
                                            }
                                          },this.element);
                                        }
                                      }
                                      tyin.elementCreate({
                                        client043_bk_container_view_control_title:{
                                          element:[,,data.length<2?typeof item[2].title==='function'?item[2].title.name:item[2].title:item[2].icon?typeof item[2].title==='function'?item[2].title.name:item[2].title:''],
                                          function(){
                                            self_['client043_bk_container_view_control_title']=this.element;
                                            if(typeof item[2].title==='function'){
                                              tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                item[2].title.call(this,self_);
                                              },undefined,0);
                                            }
                                          }
                                        }
                                      },this.element);
                                      if(item[2].control){
                                        if(item[2].control.filter){
                                          tyin.elementCreate({
                                            client043_bk_container_view_control_filter:{
                                              element:[,,'􀜓'],
                                              function(){
                                                self_['client043_bk_container_view_control_filter']=this.element;
                                                if(typeof item[2].control.filter==='function'){
                                                  tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                    item[2].control.filter.call(this,self_);
                                                  },undefined,0);
                                                }
                                              }
                                            }
                                          },this.element);
                                        }
                                        if(item[2].control.edit){
                                          tyin.elementCreate({
                                            client043_bk_container_view_control_edit:{
                                              element:[,,'􀈎'],
                                              function(){
                                                self_['client043_bk_container_view_control_edit']=this.element;
                                                if(typeof item[2].control.edit==='function'){
                                                  tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                    item[2].control.edit.call(this,self_);
                                                  },undefined,0);
                                                }
                                              }
                                            }
                                          },this.element);
                                        }
                                        if(item[2].control.more){
                                          tyin.elementCreate({
                                            client043_bk_container_view_control_more:{
                                              element:[,,'􀍠'],
                                              function(){
                                                self_['client043_bk_container_view_control_more']=this.element;
                                                if(typeof item[2].control.more==='function'){
                                                  tyin.listenDOM('add',this.element,'pointer_up',()=>{
                                                    item[2].control.more.call(this,self_);
                                                  },undefined,0);
                                                }
                                              }
                                            }
                                          },this.element);
                                        }
                                      }
                                    }
                                  }
                                },this.element);
                                tyin.elementCreate({
                                  client043_bk_container_view_content:{
                                    async function(){
                                      self_['client043_bk_container_view_content']=this.element;
                                      tyin.elementState(self_['client043_bk_container_view_self'],'ic_bk_progressIndicatorCircular_indeterminate_24','',true);
                                      for await(const value of (function*(){
                                        for(let key=0,length=item[2].view.length;key<length;key++){
                                          yield els[`client043_bk_view_${item[2].view[key].type}`](self_,item[2].view[key].data);
                                        }
                                      })()){
                                        this.element.insertAdjacentElement('beforeend',value);
                                      }
                                      tyin.elementState(self_['client043_bk_container_view_self'],'','ic_bk_progressIndicatorCircular_indeterminate_24',true);
                                    }
                                  }
                                },this.element);
                                self_['client043_bk_container_view_render']=render;
                                tyin.debug(()=>{
                                  console.log('++++ self_:',self_);
                                });
                              }
                            };
                            tyin.listenDOM('add',this.element,'observe_mutation',render,{attributes:true,attributeFilter:['class']});
                            if(data.length<2){
                              tyin.elementState(this.element,'client043_bk_container_active','',true);
                            }
                          }
                        }
                      },this.element);
                    },0);
                  }
                }
              }
            },undefined,undefined,els_);
            if(data.length>1){
              const elementState=[];
              let elementState_default=true;
              tyin.for(els_,(...item)=>{
                if(item[1].match(/client043_bk_container_tab_item/i)){
                  elementState.push([
                    elementState_default,
                    [
                      els_[item[1].replace('tab','view')]
                    ],
                    [
                      els_[item[1]]
                    ],
                    'pointer_up',
                    ,
                    ,
                    0,
                  ]);
                  elementState_default=false;
                }
              },0);
              tyin.elementState([
                'tab',
                [
                  'client043_bk_container_active',
                  ,
                  elementState
                ]
              ]);
            }
            if(callback){
              callback(els_);
            }
            tyin.debug(()=>{
              console.log('++++ els_:',els_);
            });
            block.add(els_[block_class],record);
          };
          els.client043_bk_view_unknown=async(self_,data)=>{
            const this_={};
            const element=tyin.elementCreate(undefined,{class:`client043_bk_view_unknown${data.class?` client043_bk_view_${data.class}`:''}`});
            this_.element=element;
            await data.function.call(this_,self_);
            return element;
          };
          els.client043_bk_view_setting=async(self_,data)=>{
            tyin.debug(()=>{
              console.log('++++ ????:',self_,data);
            });
            const this_={};
            const element=tyin.elementCreate(undefined,{class:'client043_bk_view_setting'});
            this_.element=element;
            element.innerHTML=JSON.stringify(data).replace(/^\"|\"$/g,'');
            if(data.function){
              await data.function.call(this_,self_);
            }
            return element;
          };
          tyin.runObject({
            orientation(){
              const before=()=>{
                switch(document.activeElement){
                  case els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self_copy:
                    {
                      setTimeout(()=>{
                        els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self.focus();
                      },350);
                    }
                    break;
                  case els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self:
                    {
                      setTimeout(()=>{
                        els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self_copy.focus();
                      },350);
                    }
                    break;
                  default:
                    break;
                }
              };
              const after=()=>{
                tyin.insertStyle('html * { transition: unset !important; }',350/2);
              };
              tyin.listenDOM('add',els.sc_cr_client043,'observe_resize',(data)=>{
                tyin.isPortrait(data.contentRect.width,data.contentRect.height+200,()=>{
                  before();
                  tyin.elementState(els.sc_cr_client043,'sc_mk_orientation_portrait','sc_mk_orientation_landscape',true);
                  after();
                },()=>{
                  before();
                  tyin.elementState(els.sc_cr_client043,'sc_mk_orientation_landscape','sc_mk_orientation_portrait',true);
                  after();
                });
              });
            },
            client_ve_page(){
              if(els.client_ve_page&&els.client_ve_page.result){
                els.client043_bk_container(els.client043_bk_block_liquid,undefined,'client043_bk_block_liquid',[
                  {
                    title:els.client_ve_page.result.title,
                    control:{
                      back:true
                    },
                    view:[
                      {
                        type:'setting',
                        data:els.client_ve_page.result.data
                      }
                    ]
                  }
                ]);
              }
            },
            async font_SFProText(){
              els.client043_bk_container(els.client043_bk_block_liquid,'font_SFProText','client043_bk_block_liquid',[
                {
                  title:'等待图标加载完成 或 开始使用',
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
              // await tyin.loadFont('SF Pro Text_','https://seabye.com/content/package/tyin@0.1.0/content/asset/font@0.1.0/SFPro/SF-Pro-Text-Regular_400.woff2',{weight:'normal'});
              await tyin.loadFont('SF Pro Text_','http://192.168.43.157/content/package/tyin@0.1.0/content/asset/font@0.1.0/SFPro/SF-Pro-Text-Regular_400.woff2',{weight:'normal'});
              setTimeout(()=>{
                // els.client043_bk_block_liquid.remove();
              },350*1.5);
            }
          });
          els.client043_ve_functionOk=true;
        },
        sc_cr_client043_cr:{
          'sc_cr_client043_cr_cr client043_sc_mk_menuDisplay':{
            sc_cr_client043_cr_cr_cr:{
              sc_cr_client043_cr_cr_cr_cr:{}
            }
          }
        }
      }
    },els.sc_cr,'beforeend',els);
  };
// #debug
// #after