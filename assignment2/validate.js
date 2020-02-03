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
    $("#age").keyup(function() {
        let age = parseInt($(this).val());
       
        if(age > 100 && age < 200){
            $("#ageError").html("<p class='text-danger'>Really?</p>")
            return;
        }else if(age >= 200){
            $("#ageError").html("<p class='text-danger'>Control Uday Control</p>")
            return;
        }
        $("#ageError").html("");

    });

    $("#email").on('keypress keyup blur', function(e){
        const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g;
        if(regex.test( $(this).val())){
            $(this).removeClass("border-error");
            $(this).addClass("border-okay");
            $("#emailError").html("<p class='text-success'>Looks good!</p>");
        }else{            
            $(this).removeClass("border-okay");
            $(this).addClass("border-error");
            $("#emailError").html("<p class='text-danger'>Nah!</p>");

        }
    });
    
    $("#phone").on('keypress keyup blur', function(){
        const regex = /[0]?[987][0-9]{9}/g;
        if(regex.test( $(this).val())){
            $(this).removeClass("border-error");
            $(this).addClass("border-okay");
            $("#phoneError").html("<p class='text-success'>Looks good!</p>");
        }else{            
            $(this).removeClass("border-okay");
            $(this).addClass("border-error");


            $("#phoneError").html("<p class='text-danger'>Nah!</p>");

        }
    });

    $("#loginForm").submit(function(e) {
        e.preventDefault();
        alert("Submitted");
    });
});