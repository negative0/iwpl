$(function(){
    // prevent user from entering rubbish 
    $(':input[type="number"]').on('keypress keyup blur', function(){
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    $(":input[name='sex']").click(function(){
        if($(this).attr('id') === "inlineCheckbox4"){
            if($(this). is(":checked")){
                $("#sexError").html("<p class='text-success'>Your gender wont be shared</p>")
            }else{
                $("#sexError").html("")
            }
        }else{
            $("#sexError").html("")
        }
    });

    $("#email").on('keypress keyup blur', function(){
        const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g;
        if(regex.test( $(this).val())){
            // $(this).removeClass("border-danger");
            // $(this).addClass("border-success");
            $("#emailError").html("<p class='text-success'>Looks good!</p>");
        }else{            
            // $(this).removeClass("border-success");
            // $(this).addClass("border-danger");
            $("#emailError").html("<p class='text-danger'>Nah!</p>");

        }
    });
    
    $("#phone").on('keypress keyup blur', function(){
        const regex = /[0]?[987][0-9]{9}/g;
        if(regex.test( $(this).val())){
            // $(this).removeClass("border-danger");

            // $(this).addClass("border-success");
            $("#phoneError").html("<p class='text-success'>Looks good!</p>");
        }else{            
            // $(this).removeClass("border-success");
            // $(this).addClass("border-danger");
            


            $("#phoneError").html("<p class='text-danger'>Nah!</p>");

        }
    });

    $("#loginForm").submit(function(e) {
        e.preventDefault();
        alert("Submitted");
    });
});