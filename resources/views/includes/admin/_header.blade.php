<div class="page-header-inner ">
    <div class="page-logo">
        <a href="{{url('/admin/dashboard')}}"><img src="/images/ever-right-new.png" alt="EverArk" class="admin-logo-default"/> </a>
        <div class="menu-toggler sidebar-toggler"> </div>
    </div>
    <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
    <div class="top-menu">
        <ul class="nav navbar-nav pull-right">
            <li class="dropdown dropdown-user">
                <?php
                if (Auth::user()->szProfileImage) {

                    $szImage = "/admin_images/" . Auth::user()->szProfileImage;
                } else {
                    $szImage = "/admin_images/default_profile_image.jpg";
                }
                ?>
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <img alt="image" class="img-circle" src="{{$szImage}}"/>
                    <span class="username username-hide-on-mobile">{{ Auth::user()->name }}</span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-default">
                    <li>
                        <a href="{{url('/admin/profile')}}">
                            <i class="icon-user"></i> My Profile </a>
                    </li>
                    <li class="divider"> </li>
                    <li>
                        <a href="{{url('/admin/changepassword')}}">
                            <i class="icon-key"></i> Change Password </a>
                    </li>
                    <li class="divider"> </li>
                    <li>
                        <a href="{{route('logout')}}" onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                            <i class="icon-power"></i> Log Out </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
<div class="loader" id="full-page-loader"><table class="table"><tr><td><img src="/images/loading.gif"><br>Please Wait...</td></tr></table></div>