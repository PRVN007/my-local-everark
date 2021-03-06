/*
 * This Files contain all the jquery functions
 * Related To Form Validation
 * Author Inderjeet Singh
 * Whiz-Solutions (IND)
 * 2019
 */
$(document).ready(function(){
    
});

function validate_form_fields()
{
	in_time_validation();
	in_line_validation();
	
	$('.btn-form-submit').click(function(e){
		e.preventDefault();
		form_submit_validation($(this).closest('form').attr('id'), true);			
	});
	
	$('.form-control').keypress(function(e){
		if(!$(this).is("textarea") && e.keyCode == 13 && $('.btn-form-submit').length > 0){
			e.preventDefault();
			form_submit_validation($(this).closest('form').attr('id'), true);
		}
	});

	$('.field-ok').html('&nbsp;');	
}

function form_submit_validation(myForm, submit_form)
{
	$('#' + myForm + ' .required').each(function(){
		validate_require_field(this, submit_form);		
	});
	
	$('#' + myForm + ' .email').each(function(){
		validate_email_field(this, submit_form)
	});
	
	$('#' + myForm + '.unique-email').each(function(){
		validate_unique_email_field(this, submit_form)
	});
	
	$('#' + myForm + '.registered-email').each(function(){
		validate_registered_email_field(this, submit_form,'0')
	});

	$('#' + myForm + ' .cellphone').each(function(){
		validate_cellphone_field(this, submit_form)
	});
	
	$('#' + myForm + ' .min-length').each(function(){
		validate_min_length_field(this, submit_form)
	});
	
	$('#' + myForm + ' .re-match').each(function(){
		validate_re_match_field(this, submit_form)
	});
        
	$('#' + myForm + ' .handicap').each(function(){
		validate_handicap_field(this, submit_form)
	});
	
	$('#' + myForm + ' .cbx-required').each(function(){
		validate_checkbox_field(this, submit_form)
	});
	
	$('#' + myForm + ' .digits-only').each(function(){
		validate_digits_only(this, submit_form);
	});
        
	$('#' + myForm + ' .numeric').each(function(){
		validate_numeric_field(this, submit_form);
	});
        $('#' + myForm + ' .radio').each(function(){
		validate_gender_field(this, submit_form);
	});
        $('#' + myForm + ' .isUrlValid').each(function(){
		validate_website_url(this, submit_form)
	});
	
	if(submit_form){
		setTimeout(
		  function() 
		  {
		    if($('#' + myForm + ' .has-error').length > 0)
			{
				$('.has-error').each(function(){
					goToByScroll(this);
					return false;
				});	
			} else {
				$('#' + myForm).submit();
			}
		  }, 500);	
	}
}

function in_line_validation()
{
	$('.required').blur(function(){
		validate_require_field(this, true);		
	});
	
	$('.email').blur(function(){
		validate_email_field(this, true);
	});

	$('.cellphone').blur(function(){
		validate_cellphone_field(this, true)
	});
	
	$('.min-length').blur(function(){
		validate_min_length_field(this, true)
	});
	
	$('.re-match').blur(function(){
		validate_re_match_field(this, true)
	});
	
   	$('.numeric').blur(function(){
		validate_numeric_field(this, true)
	});
	
   	$('.cbx-required').blur(function(){
		validate_checkbox_field(this, true)
	});
	
	$('.digits-only').blur(function(){
		validate_digits_only(this, true);
	});
        
        $('.isUrlValid').blur(function(){
		validate_website_url(this, true);
	});
}

function in_time_validation()
{		
	$('.required').keyup(function(event){
		var key = event.keyCode || event.charCode;
		
		if($(this).val() == '' && (key == 8 || key == 46 || ( event.ctrlKey && ( String.fromCharCode(event.which) === 'x' || String.fromCharCode(event.which) === 'X' )))) {
			validate_require_field(this, true);
		}
	});
}

function check_add_parent(input_id,input_type,input_class)
{
    if($('#' + input_id).parent().hasClass('form-field') || $('#' + input_id).parent().hasClass('form-group') || $('#' + input_id).parent().hasClass('field-box')){
            if(input_type == '1'){
                    $('#' + input_id).parent().addClass(input_class);
            } else {
                    $('#' + input_id).parent().removeClass(input_class);
            }
    }
    else if($('#' + input_id).parent().parent().hasClass('form-field') || $('#' + input_id).parent().parent().hasClass('form-group') || $('#' + input_id).parent().parent().hasClass('field-box')){
            if(input_type == '1'){
                    $('#' + input_id).parent().parent().addClass(input_class);
            } else {
                    $('#' + input_id).parent().parent().removeClass(input_class);
            }
    }
    else if($('#' + input_id).parent().parent().parent().hasClass('form-field') || $('#' + input_id).parent().parent().parent().hasClass('form-group') || $('#' + input_id).parent().parent().parent().hasClass('field-box')){
            if(input_type == '1'){
                    $('#' + input_id).parent().parent().parent().addClass(input_class);
            } else {
                    $('#' + input_id).parent().parent().parent().removeClass(input_class);
            }
    }
    else if($('#' + input_id).parent().parent().parent().parent().hasClass('form-field') || $('#' + input_id).parent().parent().parent().parent().hasClass('form-group') || $('#' + input_id).parent().parent().parent().parent().hasClass('field-box')){
            if(input_type == '1'){
                    $('#' + input_id).parent().parent().parent().parent().addClass(input_class);
            } else {
                    $('#' + input_id).parent().parent().parent().parent().removeClass(input_class);
            }
    }
    else if($('#' + input_id).parent().parent().parent().parent().parent().hasClass('form-field') || $('#' + input_id).parent().parent().parent().parent().parent().hasClass('form-group') || $('#' + input_id).parent().parent().parent().parent().parent().hasClass('field-box')){
            if(input_type == '1'){
                    $('#' + input_id).parent().parent().parent().parent().parent().addClass(input_class);
            } else {
                    $('#' + input_id).parent().parent().parent().parent().parent().removeClass(input_class);
            }
    }
}

function display_info_notification(id_input, text_notify)
{	
	check_add_parent(id_input, 0, 'has-success');
	check_add_parent(id_input, 0, 'has-warning');
	check_add_parent(id_input, 0, 'has-error');
	
	$('#' + id_input).next().remove();
	$('#' + id_input).parent().append('<span class="help-block pull-left field-info">' + text_notify + '</span>');
}

function display_error_notification(id_input, text_notify,checkBox)
{	
	check_add_parent(id_input, 0, 'has-success');
	check_add_parent(id_input, 0, 'has-warning');
	check_add_parent(id_input, 1, 'has-error');
        
        isInputGroup = $('#' + id_input).parent().hasClass('input-group');
        if(isInputGroup)
        {
            $('#' + id_input).parent().next().remove();
        
            $('#' + id_input).parent().parent().append('<span class="help-block err-color pull-left"><i class="fa fa-times-circle"></i> ' + text_notify.replace('e.g. Olympic Club', 'Club Name') + '</span>');	
        }
        else
        {
            $('#' + id_input).next().remove();
        
            $('#' + id_input).parent().append('<span class="help-block err-color pull-left"><i class="fa fa-times-circle"></i> ' + text_notify.replace('e.g. Olympic Club', 'Club Name') + '</span>');	
        }
	
}

function display_success_notification(id_input, text_notify)
{	
	check_add_parent(id_input, 0, 'has-error');
	check_add_parent(id_input, 0, 'has-warning');
	check_add_parent(id_input, 1, 'has-success');
	
	isInputGroup = $('#' + id_input).parent().hasClass('input-group');
	if(isInputGroup)
   	{
   		$('#' + id_input).parent().next().remove();
  	}
   	else
   	{
  		$('#' + id_input).next().remove();
  	}
}

function display_warning_notification(id_input, text_notify)
{	
	check_add_parent(id_input, 0, 'has-error');
	check_add_parent(id_input, 0, 'has-success');
	check_add_parent(id_input, 1, 'has-warning');
	
        isInputGroup = $('#' + id_input).parent().hasClass('input-group');;
        if(isInputGroup)
        {
            $('#' + id_input).parent().next().remove();
            
            $('#' + id_input).parent().parent().append('<span class="help-block pull-left">' + text_notify + '</span>');
        }
        else
        {
            $('#' + id_input).next().remove();
            
            $('#' + id_input).parent().append('<span class="help-block pull-left">' + text_notify + '</span>');
        }
        
	
}

function display_validating_notification(obj, by_id)
{
	if(!by_id)
		id_input = $(obj).attr('id');
	else
		id_input = obj;
	
	check_add_parent(id_input, 0, 'has-error');
	check_add_parent(id_input, 0, 'has-success');
	check_add_parent(id_input, 0, 'has-warning');
	
        var parentClass = $('#' + id_input).parent().attr('class');

        
        
        if($.trim(parentClass) == "input-group")
        {
            $('#' + id_input).parent().next().remove();
            $('#' + id_input).parent().parent().append('<span class="help-block pull-left field-checking">Validating...</span>');
        }
	else
        {
            $('#' + id_input).next().remove();
            $('#' + id_input).parent().append('<span class="help-block pull-left field-checking">Validating...</span>');
        }
}

function remove_all_notification(obj, by_id)
{
	if(!by_id)
		id_input = $(obj).attr('id');
	else
		id_input = obj;
	
	check_add_parent(id_input, 0, 'has-error');
	check_add_parent(id_input, 0, 'has-success');
	check_add_parent(id_input, 0, 'has-warning');
	
	if(!$('#' + id_input).next().hasClass('field-info'))
	{
		var parentClass = $('#' + id_input).parent().attr('class');

                if($.trim(parentClass) == "input-group")
                {
                    $('#' + id_input).parent().next().remove();
                }
                else
                {
                    $('#' + id_input).next().remove();
                }
	}
}

function goToByScroll(obj)
{    
    $('html,body').animate({
        scrollTop: ($(obj).offset().top-20)},
    'slow');
}

function replaceAll(str, find, replace) {
  var i = str.indexOf(find);
  if (i > -1){
    str = str.replace(find, replace); 
    i = i + replace.length;
    var st2 = str.substring(i);
    if(st2.indexOf(find) > -1){
      str = str.substring(0,i) + replaceAll(st2, find, replace);
    }       
  }
  return str;
}

function removeAllTrailingDotsAndCommasInEmail(email)
{
	email = $.trim(email);
	var l = email.length;
	var c = email.substring(l-1);
	var d = email.substring(l-2);
	
	while(c == '.' || c == ',')
	{		
		var iDots = email.timesCharExist('.');
		if(iDots == 1){
			break;
		} else {
			email = email.substring(0, (l-1));
			l = l - 1;
			c = email.substring(l-1);
		}
	}
	
	return email;
}

function validateEmail(emailAddress)
{
	var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    
    return pattern.test(emailAddress);
}

function validate_require_field(obj, is_auto_save)
{
	var require_value = $.trim($(obj).val());
	$(obj).val(require_value);
	var id = $(obj).attr('id');
	
		
	if(require_value == '')
	{		
		notify = $('#' + id).attr('placeholder') + " is required.";
		display_error_notification(id, notify);
	}
	else
	{
		if(!$(obj).hasClass('email'))
		{
			notify = $('#' + id).attr('placeholder') + " looks good.";
			display_success_notification(id, notify);
			
			if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
		}
	}
}

function validate_digits_only(obj, is_auto_save)
{
	number = $.trim($(obj).val());
	$(obj).val(number);
		
	if(number != '')
	{	
		id = $(obj).attr('id');
					
		if($.isNumeric(number) && /^[0-9]+$/.test(number))
		{
			if(number == parseInt(number))
			{
				if(parseInt(number) > 0 || !$(obj).hasClass('required'))
				{
					notify = $('#' + id).attr('placeholder') + " looks good.";
					display_success_notification(id, notify);
					
					if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
				}
				else
				{
                                    if($.trim(($('#' + id).attr('placeholder'))=="Plot Count"))
                                    {
                                        display_error_notification(id, $('#' + id).attr('placeholder') + " should be greater than zero.");
                                    }
                                    else
                                    {
                                        display_error_notification(id, "Above Zero");
                                    }
					
				}
			}
			else
			{
				display_error_notification(id, "Whole number");
			}
		}
		else
		{
			display_error_notification(id, "Digits Only");
		}
	}
	else
	{
		if(!$(obj).hasClass('required'))
		{
			remove_all_notification(obj, false);
		}
	}
}

function validate_email_field(obj, is_auto_save)
{
	email = replaceAll($.trim($(obj).val()), ' ', '');
	email = replaceAll(email,',', '.');	
	email = removeAllTrailingDotsAndCommasInEmail(email);
	$(obj).val(email);
		
	if(email != '')
	{		
		display_validating_notification(obj,false);		
		id = $(obj).attr('id');
			
		if(validateEmail(email))
		{
			notify = $('#' + id).attr('placeholder') + " looks good.";
			display_success_notification(id, notify);
			
			if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
		}
		else
		{
			display_error_notification(id, "Doesn't look like a valid email.");
		}
	}
	else
	{
		if(!$(obj).hasClass('required'))
		{
			remove_all_notification(obj, false);
		}
	}
}


function validate_cellphone_field(obj, is_auto_save)
{
	cellphone = $.trim($(obj).val());
	$(obj).val(cellphone);
	
	if(cellphone != '')
	{		
		display_validating_notification(obj,false);		
		id = $(obj).attr('id');
			
		if(cellphone.length == 10 && /^[0-9]+$/.test(cellphone))
		{
			notify = $('#' + id).attr('placeholder') + " looks good.";
			display_success_notification(id, notify);
			
			if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
		}
		else
		{
			display_error_notification(id, "Doesn't look like a valid mobile phone number.");
		}
	}
	else
	{
		if(!$(obj).hasClass('required'))
		{
			remove_all_notification(obj, false);
		}
	}
}

function validate_min_length_field(obj, is_auto_save)
{
	value = $.trim($(obj).val());
	$(obj).val(value);
	
	if(value != '')
	{		
		var max = 0;		
		id = $(obj).attr('id');
		min = parseInt($('#' + id + '_minlength').val());
		
		if($('#' + id + '_maxlength').length > 0){
			max = parseInt($('#' + id + '_maxlength').val());
		}
		
		if(value.length < min)
		{
			notify = $('#' + id).attr('placeholder') + " must be at least " + min + " characters in length.";
			display_error_notification(id, notify);
		}
		else if(max == 0 || value.length <= max)
		{
			notify = $('#' + id).attr('placeholder') + " looks good.";
			display_success_notification(id, notify);
			if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
		}
	}
	else
	{
		if(!$(obj).hasClass('required'))
		{
			msg = $('#' + $(obj).attr('id') + '_info').val();
			display_info_notification($(obj).attr('id'), msg);
		}
	}
}

function validate_re_match_field(obj, is_auto_save)
{
	value = $.trim($(obj).val());
	$(obj).val(value);
	
	if(value != '')
	{		
		id = $(obj).attr('id');
		match_value = $.trim($('#' + id.replace('Confirm', '')).val());
		
		if(value != match_value)
		{
			notify = $('#' + id).attr('placeholder') + " does not match.";
			display_error_notification(id, notify);
		}
		else
		{
			notify = $('#' + id).attr('placeholder') + " looks good.";
			display_success_notification(id, notify);
			if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
		}
	}
	else
	{
		if(!$(obj).hasClass('required'))
		{
			msg = $('#' + $(obj).attr('id') + '_info').val();
			display_info_notification($(obj).attr('id'), msg);
		}
	}
}


function validate_numeric_field(obj, is_auto_save)
{
	var require_value = $.trim($(obj).val());
	$(obj).val(require_value);
	var id = $(obj).attr('id');
	
        var require_value = require_value.replace(',','.');

        if(require_value == '')
	{		
		notify = $('#' + id).attr('placeholder') + " is required.";
		display_error_notification(id, notify);
	}
	else if(!$.isNumeric(require_value))
	{		
		notify = $('#' + id).attr('placeholder') + " must be numeric.";
		display_error_notification(id, notify);
	}
	else if(parseInt(require_value) == 0)
	{		
		notify = $('#' + id).attr('placeholder') + " must be gretaer than 0.";
		display_error_notification(id, notify);
	}
	else
	{
		if(!$(obj).hasClass('email'))
		{
			notify = $('#' + id).attr('placeholder') + " looks good.";
			display_success_notification(id, notify);
			if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
		}
	}
}


function validate_checkbox_field(obj, is_auto_save)
{
    var require_value = $.trim($(obj).val());
    $(obj).val(require_value);
    var id = $(obj).attr('id');
    
    if(!$('#iAgreeTermConditions').is(':checked'))
    {		
            notify = '';
            display_error_notification(id, notify,'checkbox');
    }
    else
    {
        if(!$(obj).hasClass('email'))
        {
                notify = '';
                display_success_notification(id, notify);
                if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
        }
    }
}
String.prototype.timesCharExist=function(c){var t=0,l=0,c=(c+'')[0];while(l=this.indexOf(c,l)+1)++t;return t};
function remove_formError(fieldId,addOnFlag)
{
//    alert(fieldId);
    if(addOnFlag == 'true')
    {
        $("#"+fieldId).parent('div').parent('div').parent('div').removeClass('has-error');
    }
    else
    {
        $("#"+fieldId).parent('div').parent('div').removeClass('has-error');
    
    }
    $("#"+fieldId).parent('div').parent('div').children('.help-block').addClass('hide');
    $("#"+fieldId).parent('div').children('.help-block').addClass('hide');
}



function validate_gender_field(obj, is_auto_save)
{
     var require_value = $.trim($(obj).val());
    $(obj).val(require_value);
    var id = $(obj).attr('id');
    var name = $(obj).attr('name');
   alert(name); 

    var require_value = require_value.replace(',','.');

    if(require_value == '')
    {		
        notify = $('#' + id).attr('placeholder') + " is required.";
        display_error_notification(id, notify);
    }
    else if($('[name="userGender"]:checked').length==0)
    {
        notify = $('#' + id).attr('placeholder') + " must be numeric.";
	display_error_notification(id, notify);
    }else
    {
        if(!$(obj).hasClass('email'))
        {
                notify = '';
                display_success_notification(id, notify);
                if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
        }
    }
}


function validate_website_url(obj, is_auto_save)
{
    var require_value = $.trim($(obj).val());
    $(obj).val(require_value);
    var id = $(obj).attr('id');

    if(require_value != '')
    {		
            display_validating_notification(obj,false);		
            id = $(obj).attr('id');

            if(!isUrlValid(require_value))
            {	
                notify = $('#' + id).attr('placeholder') + " Doesn't look like a valid web address.";
                display_error_notification(id, notify);
            }
            else
            {
               if(!$(obj).hasClass('email'))
		{
			notify = $('#' + id).attr('placeholder') + " looks good.";
			display_success_notification(id, notify);
			if(AUTO_SAVE && is_auto_save) autoSubmit(obj);
                }
            }
    }
   
}
function isUrlValid(url) {
    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
}