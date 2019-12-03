<?php  $custSession = session()->get("cust_credn"); 
if(is_array($custSession) && !empty($custSession))
{
?>
<div class="container-fluider">
    <section class="tab-bar tab-bar-first">
        <div class="container-fluid">
            <ul class="nav nav-tabs">
                <li class="{{($title == 'My Plots'?'active':'')}}">
                    <a href="{{url('/cust/myplots')}}">
                        <i class="fa fa-list" aria-hidden="true"></i> My Plots
                    </a>
                </li>
                <li class="{{(($title == 'My Digital Legacies' ||$title == 'Manage Legacy Memorial') ?'active':'')}}">
                    <?php if (!empty($custSession['profile_ref'])) { ?>
                        <a href="{{url('cust/manage_legacy_profile/'.$custSession['profile_ref'])}}"  > 
                            <i class="fa fa-users" aria-hidden="true"></i> My Digital Legacy 
                        </a>
                    <?php } else { ?>
                        <a href="{{url('/my_legacy_profiles')}}">
                            <i class="fa fa-users" aria-hidden="true"></i> My Digital Legacy 
                        </a>
                    <?php } ?>
                </li>
                <li class="{{($title == 'Designee List'?'active':'')}}">
                    <a href="{{url('plotBuyerDesignee')}}"   title="View Designee">
                        <i class="fa fa-user-plus" aria-hidden="true"></i>  Designee
                    </a>
                </li>

                <li class="{{($title == 'My Orders'?'active':'')}}">
                    <a href="{{url('/cust/myorders')}}">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i> My Orders
                    </a>
                </li>
<!--                <li class="{{($title == 'Profile'?'active':'')}}">
                    <a href="{{url('/cust/profile')}}">
                        <i class="fa fa-user" aria-hidden="true"></i> Profile
                    </a>
                </li>
                <li class="{{($title == 'Change Password'?'active':'')}}">
                    <a href="{{url('/cust/change_password')}}">
                        <i class="fa fa-lock" aria-hidden="true"></i> Change Password
                    </a>
                </li>
                <li>
                    <a href="{{url('/cust/logout')}}">
                        <i class="fa fa-power-off" aria-hidden="true"></i> Logout
                    </a>
                </li>-->
            </ul>
        </div>
    </section>
<?php
}
?>

