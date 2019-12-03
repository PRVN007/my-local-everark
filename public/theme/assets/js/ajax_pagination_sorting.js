/**
*   Ajax pagination and Sorting in Laravel
*   @author Pranav
**/

function activateLoader()
{
    jQuery('#loader').attr('style', 'display:block');
    if($('#full-page-loader').length)
    {
        $('#full-page-loader').height($(window).height());
        $('#full-page-loader').width($(window).width());
        $('#full-page-loader').show();
    }
    if($('#cemetery-full-page-loader').length)
    {
        $('#cemetery-full-page-loader').show();
    }
}

function deactivateLoader()
{
    jQuery('#loader').attr('style', 'display:none');
    if($('#full-page-loader').length)
    {
        $('#full-page-loader').hide();
    }
    if($('#cemetery-full-page-loader').length)
    {
        $('#cemetery-full-page-loader').hide();
    }
}

function activateAjaxPaginaton()
{ 
    $(window).on('hashchange', function() {
        if (window.location.hash) {
            var page = window.location.hash.replace('#', '');
            if (page == Number.NaN || page <= 0) {
                return false;
            }else{
                getPaginationData(page);
            }
        }
    });
    $(document).ready(function()
    {
        $(document).on('click', '.pagination a',function(event)
        {
            $('li').removeClass('active');
            $(this).parent('li').addClass('active');
            event.preventDefault();
            var myurl = $(this).attr('href');
            var page=$(this).attr('href').split('page=')[1];
            getPaginationData(page);
        });
    });
}

function getPaginationData(page)
{
    var sortValue=jQuery('#sortValue').val();
    var sortBy=jQuery('#sortBy').val();
    
    var searchAry=jQuery('#searchForm').serialize();
    
    getAjaxData(page,sortBy,sortValue,searchAry);
}


function sortListingData(sortBy)
{
   
    
        var page=jQuery('#page').val();
        var old_sortValue=jQuery('#sortValue').val();
        var old_sortBy=jQuery('#sortBy').val();
        var searchAry=jQuery('#searchForm').serialize();
        
        var sortValue="";
        
        if(sortBy==old_sortBy)
        {
            if(old_sortValue=='ASC')
            {
                sortValue='DESC';
            }
            else 
            {
                sortValue='ASC';
            }
        }
        else
        {
            sortValue='ASC';
        }
        getAjaxData(page,sortBy,sortValue,searchAry); 
        
  
    
    
}


function getAjaxData(page,sortBy,sortValue,searchAry)
{


    setTimeout(function () {
        
        var perPageRecord = 0
        if($('#perPageRecord').length != 0) {
            perPageRecord = $('#perPageRecord').val();
        }
        $.ajax(
        {
            url: '?page=' +page+"&sortBy="+sortBy+"&sortValue="+sortValue+"&"+searchAry+ "&perPageRecord="+perPageRecord,
            type: "get",
            datatype: "html",
            beforeSend: function()
            {
                activateLoader();
            }
        })
        .done(function(data)
        {
            deactivateLoader();
    //        console.log(data);

            $("#table_content").empty().html(data);
            
            if($.trim(sortBy)!=='')
            {
                if($.trim(sortValue)=='ASC')
                {
                    $("#"+sortBy+"_sort").attr('class','sorting_asc');
                }
                else if($.trim(sortValue)=='DESC')
                {
                    $("#"+sortBy+"_sort").attr('class','sorting_desc');
                }
            }
            
            
            jQuery('#page').val(page);
            jQuery('#sortValue').val(sortValue);
            jQuery('#sortBy').val(sortBy);
            
    //        location.hash = page;
        })
        .fail(function(jqXHR, ajaxOptions, thrownError)
        {
            alert('No response from server');
        });
    }, 3000); 
}
