'use strict';
// #before
// #import
// #variable
// #block
// #build
  // run
  export const run=(tyin,els)=>{
    tyin.elementCreate({
      sc_cr_client043_cr_cr_menu:{
        function(){
          tyin.elementState([
            'tab',
            [
              'client043_sc_mk_activeMenuList',
              ,
              [
                [
                  true,
                  [
                    els.sc_cr_client043_cr_cr_cr_cr_browse
                  ],
                  [
                    els.sc_cr_client043_cr_cr_menu_navigator_cr_browse
                  ],
                  'pointer_up',
                  ,
                  ,
                  0,
                ],
                [
                  false,
                  [
                    els.sc_cr_client043_cr_cr_cr_cr_interactive
                  ],
                  [
                    els.sc_cr_client043_cr_cr_menu_navigator_cr_interactive
                  ],
                  'pointer_up',
                  ,
                  ,
                  0,
                ],
                [
                  false,
                  [
                    els.sc_cr_client043_cr_cr_cr_cr_account
                  ],
                  [
                    els.sc_cr_client043_cr_cr_menu_navigator_cr_account
                  ],
                  'pointer_up',
                  ,
                  ,
                  0,
                ],
                [
                  false,
                  [
                    els.sc_cr_client043_cr_cr_menu_search_cr_search,
                    els.sc_cr_client043_cr_cr_cr_cr_search
                  ],
                  [
                    els.sc_cr_client043_cr_cr_menu_navigator_cr_search,
                    els.sc_cr_client043_cr_cr_menu_search_cr_search,
                    els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self
                  ],
                  'pointer_up,focus',
                  ,
                  ,
                  0,
                ]
              ]
            ]
          ]);
        },
        'sc_cr_client043_cr_cr_menu_search client043_sc_mk_menuItem':{
          'sc_cr_client043_cr_cr_menu_search_text client043_sc_mk_menuItem_title':{
            element:[,,'Search']
          },
          'sc_cr_client043_cr_cr_menu_search_cr client043_sc_mk_menuItem_content':{
            'sc_cr_client043_cr_cr_menu_search_cr_search client043_sc_mk_menuItem_list':{
              'sc_cr_client043_cr_cr_menu_search_cr_search_icon client043_sc_mk_menuItem_icon':{
                element:[,,'􀊫']
              },
              'sc_cr_client043_cr_cr_menu_search_cr_search_input client043_sc_mk_menuItem_text':{
                sc_cr_client043_cr_cr_menu_search_cr_search_input_self:{
                  element:['input',{enterkeyhint:'search',type:'search',placeholder:'搜寻'}],
                  function(){
                    this.element.addEventListener('input',(event)=>{
                      els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self_copy.value=event.target.value;
                      if(event.target.value){
                        tyin.elementState(els.sc_cr_client043_cr_cr_menu_search_cr_search_clear,'','client043_sc_mk_hide',true);
                      }else{
                        tyin.elementState(els.sc_cr_client043_cr_cr_menu_search_cr_search_clear,'client043_sc_mk_hide','',true);
                      }
                    });
                    this.element.addEventListener('keydown',(event)=>{
                      if(event.key==='Enter'&&event.target.localName==='input'){
                        els.client043_searchGo(event.target.value);
                      }
                    });
                  }
                },
              },
              'sc_cr_client043_cr_cr_menu_search_cr_search_clear client043_sc_mk_menuItem_bubble client043_sc_mk_hide':{
                element:[,,'􀆄'],
                function(){
                  tyin.listenDOM('add',this.element,'pointer_up',()=>{
                    els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self.value='';
                    els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self_copy.value='';
                    tyin.elementState(this.element,'client043_sc_mk_hide','',true);
                    els.sc_cr_client043_cr_cr_menu_search_cr_search_input_self.focus();
                  },undefined,0);
                }
              }
            }
          }
        },
        'sc_cr_client043_cr_cr_menu_navigator client043_sc_mk_menuItem':{
          'sc_cr_client043_cr_cr_menu_navigator_text client043_sc_mk_menuItem_title':{
            element:[,,'Navigator']
          },
          'sc_cr_client043_cr_cr_menu_navigator_cr client043_sc_mk_menuItem_content':{
            'sc_cr_client043_cr_cr_menu_navigator_cr_browse client043_sc_mk_menuItem_list':{
              'sc_cr_client043_cr_cr_menu_navigator_cr_browse_icon client043_sc_mk_menuItem_icon':{
                element:[,,'􀐟']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_browse_text client043_sc_mk_menuItem_text':{
                element:[,,'浏览']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_browse_bubble client043_sc_mk_menuItem_bubble':{}
            },
            'sc_cr_client043_cr_cr_menu_navigator_cr_interactive client043_sc_mk_menuItem_list':{
              'sc_cr_client043_cr_cr_menu_navigator_cr_interactive_icon client043_sc_mk_menuItem_icon':{
                element:[,,'􀌳']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_interactive_text client043_sc_mk_menuItem_text':{
                element:[,,'互动']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_interactive_bubble client043_sc_mk_menuItem_bubble':{}
            },
            'sc_cr_client043_cr_cr_menu_navigator_cr_account client043_sc_mk_menuItem_list':{
              'sc_cr_client043_cr_cr_menu_navigator_cr_account_icon client043_sc_mk_menuItem_icon':{
                element:[,,'􀉮']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_account_text client043_sc_mk_menuItem_text':{
                element:[,,'账户']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_account_bubble client043_sc_mk_menuItem_bubble':{
                element:[,,'0']
              }
            },
            'sc_cr_client043_cr_cr_menu_navigator_cr_search client043_sc_mk_menuItem_list':{
              'sc_cr_client043_cr_cr_menu_navigator_cr_search_icon client043_sc_mk_menuItem_icon':{
                element:[,,'􀊫']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_search_text client043_sc_mk_menuItem_text':{
                element:[,,'搜寻']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_search_bubble client043_sc_mk_menuItem_bubble':{}
            },
            'sc_cr_client043_cr_cr_menu_navigator_cr_font client043_sc_mk_menuItem_list':{
              function(){
                tyin.listenDOM('add',this.element,'pointer_up',async()=>{
                  tyin.elementState(this.element,'client043_sc_mk_disabled','',true);
                  tyin.elementState(els.sc_cr_client043_cr_cr_menu_navigator_cr_font,'ic_bk_progressIndicatorCircular_indeterminate_24','',true);
                  await els.client_bk_font_pingFang(els.sc_cr_client043);
                  tyin.elementState(els.sc_cr_client043_cr_cr_menu_navigator_cr_font,'','ic_bk_progressIndicatorCircular_indeterminate_24',true);
                  tyin.removeElement(this.element);
                },undefined,0);
                if(document.documentElement.classList.contains('ic_nr_system_brand_apple')){
                  tyin.removeElement(this.element);
                }
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_font_icon client043_sc_mk_menuItem_icon':{
                element:[,,'􀤍']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_font_text client043_sc_mk_menuItem_text':{
                element:[,,'苹方']
              },
              'sc_cr_client043_cr_cr_menu_navigator_cr_font_bubble client043_sc_mk_menuItem_bubble':{}
            }
          }
        }
      }
    },els.sc_cr_client043_cr_cr,'afterbegin',els);
  };
// #debug
// #after