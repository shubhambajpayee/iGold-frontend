     $(document).ready(function(){
            $('input').bind('focus',function(){
              $(this).next('label').addClass('labelActive');  
            });
            $('input').bind('blur',function(){
                if($(this).val()=='' || $(this).val()==0){
                    $(this).next('label').removeClass('labelActive');
                }
                else{
                  $(this).next('label').addClass('labelActive');  
                }
            }); 
            });
            $(document).on('click','.drpdwn',function(){
                $(this).parent('.col100').next('.dropdown_arrow').toggleClass('rot180');
                $(this).parent('.col100').next('.dropdown_arrow').next('ul').slideToggle('swing');
            });
            $(document).on('click','.dropdown_arrow',function(){
                $(this).next('ul').slideToggle('swing');
                $(this).toggleClass('rot180');
            });
           $(document).click(function (event) {
       if (!$(event.target).closest('.dropDown').length)
       {
           if ($('.dropDown').find('ul').is(":visible"))
           {
               $('.dropDown').find('.dropdown_arrow').removeClass('rot180');
               $('.dropDown').find('ul').slideUp('swing');
           }
       }
   });
   $(document).on('click','.enterVal',function(){
       $(this).parent('ul').prev('.dropdown_arrow').prev('.col100').find('label').addClass('labelActive');
       $(this).parent('ul').slideUp('swing');
       $(this).parent('ul').prev('.dropdown_arrow').prev('.col100').find('input[type=text]').val($(this).text()).trigger('input');
       $(this).parent('ul').prev('.dropdown_arrow').removeClass('rot180');
   });


