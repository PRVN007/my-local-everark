<div class="page-header-inner ">
    <div class="page-logo cemetery-page-logo">
        <a href="{{url('/cemetery/dashboard')}}">
            <?php
            $szImage = "/images/ever-right-new.png";
            $szMobileImage = "/images/ever-right-new.png";
            
            if(Session::get('arCemetery.szCompanyLogo') && trim(Session::get('arCemetery.szCompanyLogo')) != '')
            {
                if(file_exists(public_path('/company_logos/'.Session::get('arCemetery.szCompanyLogo')))){
                    $szImage = "/company_logos/".Session::get('arCemetery.szCompanyLogo');
                }
            }
            
            if(Session::get('arCemetery.szCompanyMobileLogo') && trim(Session::get('arCemetery.szCompanyMobileLogo')) != '')
            {
                if(file_exists(public_path('/company_logos/'.Session::get('arCemetery.szCompanyMobileLogo')))){
                    $szMobileImage = "/company_logos/".Session::get('arCemetery.szCompanyMobileLogo');
                }
            }
            ?>
            <img src="{{$szImage}}" alt="EverArk" class="cemetery-logo-header mobile-hide-logo"/> 
            <img src="{{$szMobileImage}}" alt="EverArk" class="cemetery-logo-header desktop-hide-logo"/> 
        </a>
        <div class="menu-toggler sidebar-toggler"> </div>
    </div>
    <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
    <div class="top-menu">
        <ul class="nav navbar-nav pull-right rotate-animate">
            @if(session()->get("arCemetery.selectedPagePermissions.8") == 1)
            <li class="dropdown dropdown-user">
                <a href="javascript:;" class="dropdown-toggle space-manage" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <i class="fa fa-cog"></i>
                    <span class="username username-hide-on-mobile"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-default">
                    <li>
                        <a href="/cemetery/setting"><i class="fa fa-money"></i> Billing </a>
                    </li>
                    @if(session()->get("invalid_subscription") == '0')
                        <li>
                            <a href="/cemetery/preferences"><i class="fa fa-check"></i> Preferences </a>
                        </li>
                        <li>
                            <a href="{{url('/cemetery/users')}}" ><i class="fa fa-users" aria-hidden="true"></i> Manage Users</a>
                        </li>
                        @if(session()->get("arCemetery.iApproved") == 1)
                        <li>
                            <a href="/cemetery/export"><i class="fa fa-download"></i> Export Data </a>
                        </li>
                        @endif
                    @endif
                </ul>
            </li>
            @endif
            <li class="dropdown dropdown-user">
                <?php
                if(Session::get('arCemetery.szImage') && trim(Session::get('arCemetery.szImage')) != '')
                {
                    $szImage = "/cemetery_images/".Session::get('arCemetery.szImage');
                }
                else
                {
                    $szImage = "/admin_images/default_profile_image.jpg";
                }?>
                <a href="javascript:;" id="idCemeteryPrfile" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" onclick="OpenProfileModelPopUp()">
                    <img alt="image" class="img-circle" src="{{$szImage}}"/>
                    <span class="username username-hide-on-mobile">{{ Session::get('arCemetery.szFirstName')." ".Session::get('arCemetery.szLastName') }}</span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-default">
                    <li>
                        <a href="/cemetery/basicinfo"><i class="fa fa-user"></i> Your Basic Info </a>
                    </li>
                    @if(session()->get("arCemetery.iApproved") == 1 && session()->get("invalid_subscription") == '0')
<!--                    <li>
                        <a href="/cemetery/notifications"><i class="fa fa-bell"></i> Notifications </a>
                    </li>-->
                    @endif
                    <li>
                        <a href="/cemetery/security"><i class="fa fa-lock"></i> Security </a>
                    </li>
                    <li>
                        <a href="/cemetery/logout"><i class="icon-power"></i> Log Out </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>




<!-----------------Upload Profile Image------------------------->

<!-- The Modal -->
