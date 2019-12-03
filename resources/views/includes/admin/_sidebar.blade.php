<div class="page-sidebar  navbar-collapse collapse">
    <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
        <li class="sidebar-toggler-wrapper hide">
            <div class="sidebar-toggler"> </div>
        </li>
        <?php $permissionSession = session()->get("page_permission");
        ?>
        <li class="nav-item start {{($title == 'Dashboard'?'active open':'')}}">
            <a href="{{url('/admin/dashboard')}}" class="nav-link nav-toggle">
                <i class="icon-home"></i>
                <span class="title">Dashboard</span>
                <!--<span class="selected"></span>-->
            </a>
        </li>

        <?php if (isset($permissionSession[Config::get('constants.Administrator_Page')])) { ?>
            <li class="nav-item start {{($title == 'Users'|| $title == 'Add User' || $title == 'Edit User' ? 'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-users"></i>
                    <span class="title">Users</span>
                    <span class="arrow {{($title == 'Users' || $title == 'Add User' || $title == 'Edit User'?'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Users" || trim($title) == "Add User" || trim($title) == "Edit User") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Users" || trim($title) == "Edit User") { ?>active open<?php } ?>">
                        <a href="{{url('/admin/users')}}" class="nav-link">
                            <span class="title">View Users</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    <?php if ($permissionSession[Config::get('constants.Administrator_Page')] == '0') { ?>
                        <li class="nav-item <?php if (trim($title) == "Add User") { ?>active open<?php } ?>">
                            <a href="{{url('/admin/add_user')}}" class="nav-link">
                                <span class="title">Add A User</span>
                                <span class="selected"></span>
                            </a>
                        </li>
                    <?php } ?>
                </ul>
            </li>
            
        <?php } ?>
            
        <li class="nav-item  {{($title == 'Cemeteries' || $title == 'Cemetery Details' || trim($title) == 'Cemeteries Subscription' ? 'active open':'')}}">
            <a href="javascript:;" class="nav-link nav-toggle">
                <i class="fa fa-university"></i>
                <span class="title">Cemeteries</span>
                <span class="arrow {{($title == 'Cemeteries' || $title == 'Cemetery Details' || $title == 'Cemeteries Subscription'?'active open':'' )}}"></span>
            </a>
            <ul class="sub-menu" style="<?php if (trim($title) == "Cemeteries" || trim($title) == "Cemetery Details" || trim($title) == "Edit Cemetery" || trim($title) == "Cemeteries Subscription")  { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                <?php if (isset($permissionSession[Config::get('constants.Cemetery_Page')])) { ?>                    
                    <li class="nav-item <?php if (trim($title) == "Cemeteries" || $title == 'Cemetery Details') { ?>active open<?php } ?>">
                        <a href="{{url('/admin/cemeteries')}}" class="nav-link nav-toggle">
                            <span class="title">View Cemeteries</span>
                            <!--<span class="selected"></span>-->
                        </a>
                    </li>
                <?php } ?>
                <?php if (isset($permissionSession[Config::get('constants.Cemetery_Subscription_Page')])) { ?>
                    <li class="nav-item <?php if (trim($title) == "Cemeteries Subscription") { ?>active open<?php } ?>">  
                        <a href="{{url('/admin/cemeteries-subscription')}}" class="nav-link nav-toggle">
                            <span class="title">Subscription</span>
                            <!--<span class="selected"></span>-->
                        </a>
                    </li>
                <?php } ?>
            </ul>
        </li>

        <?php if (isset($permissionSession[Config::get('constants.Burial_Grounds_Page')])) { ?>
            <li class="nav-item  {{($title == 'Burial Grounds' || $title == 'Burial Gardens' || $title == 'Edit Burial Garden' || $title == 'Edit Burial Ground' ||  trim($title) == "Add Burial Garden" || trim($title) == "Edit Burial Garden" || $title == 'Add Burial Ground'?'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-map" aria-hidden="true"></i>
                    <span class="title">Burial Grounds</span>
                    <span class="arrow {{($title == 'Burial Grounds' || $title == 'Burial Gardens' || $title == 'Edit Burial Garden' || $title == 'Edit Burial Ground' ||  trim($title) == "Add Burial Garden" || trim($title) == "Edit Burial Garden" || $title == 'Add Burial Ground'?'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Burial Grounds" || trim($title) == "Add Burial Ground" || trim($title) == "Burial Gardens" || trim($title) == "Add Burial Garden" || trim($title) == "Edit Burial Garden" || $title == 'Edit Burial Ground' )  { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Burial Grounds" || trim($title) == 'Edit Burial Ground' ) { ?>active open<?php } ?>">
                        <a href="{{url('/admin/burialGrounds')}}" class="nav-link">
                            <span class="title">View Burial Grounds</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    <?php if ($permissionSession[Config::get('constants.Burial_Grounds_Page')] == '0') { ?>
                        <li class="nav-item <?php if (trim($title) == "Add Burial Ground") { ?>active open<?php } ?>">
                            <a href="{{url('/admin/add_burial_ground')}}" class="nav-link">
                                <span class="title">Add A Burial Ground</span>
                                <span class="selected"></span>
                            </a>
                        </li>
                    <?php } ?>
                    <li class="nav-item <?php if (trim($title) == "Burial Gardens" || trim($title) == "Add Burial Garden" || trim($title) == "Edit Burial Garden") { ?>active open<?php } ?>">
                        <a href="{{url('/admin/burialGardens')}}" class="nav-link">
                            <span class="title">View Burial Gardens</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                </ul>
            </li>  
        <?php } ?>
            
        <?php if (isset($permissionSession[Config::get('constants.Plots_Page')])) { ?>
            <li class="nav-item  {{($title == 'Plots' || $title == 'Plot Images' || $title == 'Add Plot'  || $title == 'Import Plots' || $title == 'Edit Plot' || $title == 'Plots Map View'?'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span class="title">Plots</span>
                    <span class="arrow {{($title == 'Plots' || $title == 'Plots Map View' || $title == 'Add Plot'  || $title == 'Import Plots'?'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Plots" || $title == 'Plots Map View' || $title == 'Plot Images' || trim($title) == "Add Plot" || trim($title) == "Edit Plot" || trim($title) == "Import Plots") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Plots" || $title == 'Plots Map View'|| $title == 'Edit Plot' ) { ?>active open<?php } ?>">
                        <a href="{{url('/admin/plots')}}" class="nav-link">
                            <span class="title">View Plots</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    <?php if ($permissionSession[Config::get('constants.Plots_Page')] == '0') { ?>
                        <li class="nav-item <?php if (trim($title) == "Add Plot" ) { ?>active open<?php } ?>">
                            <a href="{{url('/admin/add_plot')}}" class="nav-link">
                                <span class="title">Add A Plot</span>
                                <span class="selected"></span>
                            </a>
                        </li>
                    <?php } ?>
                        <li class="nav-item <?php if (trim($title) == "Import Plots") { ?>active open<?php } ?>">
                            <a href="{{url('/admin/import_plots')}}" class="nav-link">
                                <span class="title">Import Plots</span>
                                <span class="selected"></span>
                            </a>
                        </li>
                </ul>
            </li>
        <?php } ?>
        
        <?php if (isset($permissionSession[Config::get('constants.Customers_Page')])) { ?>
            <li class="nav-item  {{($title == 'Customer' || $title == 'Add Customer'?'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <span class="title">Customers</span>
                    <span class="arrow {{($title == 'Customer' || $title == 'Add Customer'?'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Customer" || trim($title) == "Add Customer") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Customer") { ?>active open<?php } ?>">
                        <a href="{{url('/admin/customers')}}" class="nav-link">
                            <span class="title">View Customers</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    <?php if ($permissionSession[Config::get('constants.Customers_Page')] == '0') { ?>
                        <li class="nav-item <?php if (trim($title) == "Add Customer") { ?>active open<?php } ?>">
                            <a href="{{url('/admin/add_customer')}}" class="nav-link">
                                <span class="title">Add A Customer</span>
                                <span class="selected"></span>
                            </a>
                        </li>
                    <?php } ?>
                </ul>
            </li>
        <?php } ?>
        <?php if (isset($permissionSession[Config::get('constants.Orders_Page')])) { ?>
            <li class="nav-item  {{($title == 'Plot Orders' || $title == 'Plots Orders' || $title == 'Donation Orders'?'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span class="title">Orders</span>
                    <span class="arrow {{($title == 'Plot Orders' || $title == 'Plots Orders' || $title == 'Donation Orders'?'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Plot Orders" || $title == 'Plots Orders' || trim($title) == "Donation Orders") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Plot Orders" || trim($title) == "Plots Orders") { ?>active open<?php } ?>">
                        <a href="{{url('/admin/orders')}}" class="nav-link">
                            <span class="title">Plots</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    <li class="nav-item <?php if (trim($title) == "Donation Orders") { ?>active open<?php } ?>">
                        <a href="{{url('/admin/donation_orders')}}" class="nav-link">
                            <span class="title">Donations</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                </ul>
            </li>
            
        <?php } ?>
        <?php if (isset($permissionSession[Config::get('constants.Memorials_Page')])) { ?>
         <li class="nav-item  {{($title == 'Memorials'?'active':'')}}">
                <a href="{{url('/admin/Memorials')}}" class="nav-link nav-toggle">
                    <i class="fa fa-tablet"></i>
                    <span class="title">Memorials</span>
                    <span class="selected"></span>
                </a>
            </li>
        <?php } ?>
        <?php if (isset($permissionSession[Config::get('constants.Reports_Page')])) { ?>
         <li class="nav-item  {{($title == 'Plot Orders Report' || $title == 'Donations'?'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                    <span class="title">Reports</span>
                    <span class="arrow {{($title == 'Plot Orders Report' || $title == 'Donations'?'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Plot Orders Report" || trim($title) == "Donations") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Plot Orders Report") { ?>active open<?php } ?>">
                        <a href="{{url('/admin/Reports')}}" class="nav-link">
                            <span class="title">Plots</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    <li class="nav-item <?php if (trim($title) == "Donations") { ?>active open<?php } ?>">
                        <a href="{{url('/admin/donation_reports')}}" class="nav-link">
                            <span class="title">Donations</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                </ul>
            </li>
        <?php } ?>
    </ul>
</div>
