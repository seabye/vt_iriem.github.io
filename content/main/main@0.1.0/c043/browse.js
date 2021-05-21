'use strict';
// #before
// #import
// #variable
// #block
// #build
  // run
  export const run=(tyin,els)=>{
    tyin.elementCreate({
      sc_cr_c043_cr_cr_cr_cr_browse:{
        function(){
          tyin.loop(()=>{
            if(els.c043_ve_functionOk){
              els.c043_bk_container(els.c043_bk_block_solid_browse,undefined,'c043_bk_block_solid',[
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
    },els.sc_cr_c043_cr_cr_cr_cr,'beforeend',els);
  };
// #debug
// #after