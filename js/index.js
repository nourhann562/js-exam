/// <reference types="../@types/jquery" />


$('.tab').on('click',function(){

    let left =$('.parent').css('marginLeft');

    if(left === '0px' ){
        $('.parent').animate({marginLeft:'-219'} , 500)
    }
    else{
        $('.parent').animate({marginLeft:'0'} , 500)


    }
    
})

 
async function getMovie(){

   var Response= await fetch('https://api.themoviedb.org/3/person/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    
   var data =await Response.json();

   var res =data.results ;

   displayData(res)

   console.log(res);
        
}
getMovie()



function displayData(list){

    var continer = '';
    for(var i =0 ; i < list.length ; i++){
        continer +=`<div class="col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeIn">
                    <div class="item overflow-hidden position-relative animate__fadeIn">
                        <div class="cardImage animate__fadeIn">
                            <img src="${list[i].backdrop_path}" class="img-fluid">
                        </div>
                        <div class="overlay overflow-hidden animate__fadeIn" style="opacity: 0; visibility: hidden;">
                     <h1 class="animate__animated title animate__slideOutLeft">${list[i].name}</h1>    
                    
                        </div>
                    </div>
                </div>
`

    }
    document.getElementById('row').innerHTML =continer ;
}

function validations()
{
    $('#contact input').on("input",function(){
        $('#contact input').on("input",function(){
            if(checkClassError()) 
            {
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).mouseenter(formButtonValidation);
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css({'cursor':'default','userSelect':'none'});
            }
            else
            {
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).css({"marginLeft":"0px"});
                $('form button').off('mouseenter', formButtonValidation);
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css('cursor','pointer');
            }
            })
        function checkClassError(){
            if($('#contact .error').hasClass('animate__flipInX'))
            {
               return true;
            }
            else
            {
              return false;
            }
        }
    })
    $('#contact #name').on("input",function(){
        const regex = /^[a-zA-z\s]{1,36}$/
        const $error =  $('#name').next();
        const $this = $(this);
        if($(this).val() == "")
        {
          hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
          hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Name , only Characters allowed");
          ShowError($error,$this);
        }
    })
    $('#contact #email').on("input",function(){
        const regex = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/;
        const $error =  $('#email').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Email , try example@domain.com");
          ShowError($error,$this);
        }
    })
    $('#contact #phone').on("input",function(){
        const regex = /^(02)?(01)[0125][0-9]{8}$/;
        const $error =  $('#phone').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Phone Number");
          ShowError($error,$this);
        }
    })
    $('#contact #age').on("input",function(){
        const regex = /^(1[6-9]|[2-9][0-9]|100)$/;
        const $error =  $('#age').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
            $error.html("Your age must be over 16+");
          ShowError($error,$this);
        }
    })
    $('#contact #password').on("input",function(){
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const $error =  $('#password').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("password must contain numbers & letters at least 8 character");
          ShowError($error,$this);
        }
    })
    $('#contact #repassword').on("input",function(){
        const $error =  $('#repassword').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if($(this).val() == $('#password').val())
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Password not match");
          ShowError($error,$this);
        }
    })
    $('.showPass').click(function(){
        if ($('#password').attr('type') == "text") 
        {
            $('#password').attr('type','password');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye-slash"></i>');
        } else {
            $('#password').attr('type','text');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye"></i>');
        }
    })
    $('#password').focus(function(){
        $('.showPass').css("opacity",1);
        $('.showPass').css("bottom",10);
    })
    $(document).click(function(e){
        if($(e.target)[0] == $('#password')[0] || $(e.target).attr('data-show') == $('.showPass i').attr('data-show') )
        {
            $('.showPass').css("opacity",1);
            $('.showPass').css("bottom",10);
        }
        else
        {
            $('.showPass').css("opacity",0);
            $('.showPass').css("bottom",-20);
        }
    })
    function hideError($error,$this)
    {
        $this.css("border-bottom-color", "#CED4DA");
        $error.html(null);
        $error.removeClass('animate__animated animate__flipInX');
        $error.addClass('animate__animated animate__fadeOutUp');
    }
    function ShowError($error,$this)
    {
        $this.css("border-bottom-color", "rgb(214, 46, 51)");
        $error.removeClass('animate__animated animate__fadeOutUp');
        $error.addClass('animate__animated animate__flipInX');
    }
    function formButtonValidation(){
        let buttonLocation =  $(`form button`).css("marginLeft")
            if(buttonLocation == "250px")
            {
               $(`form button`).css({"marginLeft":"0px"});
            }
            else
            {
               $(`form button`).css({"marginLeft":"250px"});
            }
           $(`form button`).keydown(function(e){
               if(e.key == "Enter")
               {
                   event.preventDefault();
               }
           })
    }
}







