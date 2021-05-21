'use strict';
// #before
// #import
// #variable
// #block
// #build
  // run
  export const run=(tyin,els)=>{
    tyin.elementCreate({
      sc_cr_client043_cr_cr_cr_cr_interactive:{
        function(){
          tyin.loop(()=>{
            if(els.client043_ve_functionOk){
              els.client043_bk_container(els.client043_bk_block_solid_interactive,undefined,'client043_bk_block_solid',[
                {
                  icon:'􀊚',
                  title:'视频',
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