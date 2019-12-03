<div class="page-sidebar  navbar-collapse collapse">
    <ul class="page-sidebar-menu  page-header-fixed <?php echo $isDisable; ?>" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" >
        <li class="sidebar-toggler-wrapper hide">
            <div class="sidebar-toggler"> </div>
        </li>
        @if(session()->get("invalid_subscription") == '0')
        <li class="nav-item start {{($title == 'Dashboard'?'active open':'')}}" >
            <a href="{{url('/cemetery/dashboard')}}" class="nav-link nav-toggle">
                <i class="icon-home"></i>
                <span class="title">Dashboard</span>
            </a>
        </li>
        @else
        <li class="nav-item start {{($title == 'Cemetery Setting'?'active open':'')}}">
            <a href="{{url('/cemetery/setting')}}" class="nav-link nav-toggle">
                <i class="fa fa-credit-card"></i>
                <span class="title">Billing</span>
            </a>
        </li>
        @endif
        @if(session()->get("arCemetery.iApproved") == '1' && session()->get("invalid_subscription") == '0')
        
            @if(session()->get("arCemetery.selectedPagePermissions.1") != 3)
            <li class="nav-item start {{($title == 'Users'|| $title == 'Add User' || $title == 'Edit User' || $title == 'Search Users'  ?'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-users"></i>
                    <span class="title">Users</span>
                    <span class="arrow {{($title == 'Users' || $title == 'Add User' || $title == 'Edit User' || $title == 'Search Users'  ? 'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Users" || trim($title) == "Add User" || trim($title) == "Edit User" || $title == 'Search Users' ) { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Users" || $title == 'Edit User' || $title == 'Search Users' ) { ?>active open<?php } ?>">
                        <a href="{{url('/cemetery/users')}}" class="nav-link">
                            <span class="title">View Users</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    @if(session()->get("arCemetery.selectedPagePermissions.1") == 1)
                    <li class="nav-item <?php if (trim($title) == "Add User") { ?>active open<?php } ?>">
                        <a href="{{url('/cemetery/add_user')}}" class="nav-link">
                            <span class="title">Add A User</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    @endif
                </ul>
            </li>
            @endif


            @if(session()->get("arCemetery.selectedPagePermissions.3") != 3)
            <li class="nav-item  {{($title == 'Burial Grounds' || $title == 'Burial Gardens' || $title == 'Edit Burial Garden' || $title == 'Edit Burial Ground' ||  trim($title) == "Add Burial Garden" || trim($title) == "Edit Burial Garden" || $title == 'Add Burial Ground'?'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-map" aria-hidden="true"></i>
                    <span class="title">Burial Grounds</span>
                    <span class="arrow {{($title == 'Burial Grounds' || $title == 'Burial Gardens' || $title == 'Edit Burial Garden' || $title == 'Edit Burial Ground' ||  trim($title) == "Add Burial Garden"  || $title == 'Add Burial Ground'?'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Burial Grounds" || trim($title) == "Add Burial Ground" || trim($title) == "Burial Gardens" || trim($title) == "Add Burial Garden" || trim($title) == "Edit Burial Ground" || trim($title) == "Edit Burial Garden") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Burial Grounds" || trim($title) == "Edit Burial Ground") { ?>active open<?php } ?>">
                        <a href="{{url('/cemetery/burialGrounds')}}" class="nav-link">
                            <span class="title">View Burial Grounds</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    @if(session()->get("arCemetery.selectedPagePermissions.3") == 1)
                    <li class="nav-item <?php if (trim($title) == "Add Burial Ground") { ?>active open<?php } ?>">
                        <a href="{{url('/cemetery/add_burial_ground')}}" class="nav-link">
                            <span class="title">Add A Burial Ground</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    @endif
                    <li class="nav-item <?php if (trim($title) == "Burial Gardens" || trim($title) == "Add Burial Garden" || trim($title) == "Edit Burial Garden") { ?>active open<?php } ?>">
                        <a href="{{url('/cemetery/burialGardens')}}" class="nav-link">
                            <span class="title">View Burial Gardens</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                </ul>
            </li> 
            @endif
            
            @if(session()->get("arCemetery.selectedPagePermissions.2") != 3)
            <li class="nav-item  {{($title == 'Plots' || $title == 'Plot Images' || $title == 'Add Plot' || $title == 'Edit Plot' || $title == 'Import Plots' || $title == 'Plots Map View'?'active open':'')}}">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span class="title">Plots</span>
                    <span class="arrow {{($title == 'Plots' || $title == 'Plots Map View' || $title == 'Edit Plot' ||  $title == 'Add Plot'  || $title == 'Import Plots'?'open':'')}}"></span>
                </a>
                <ul class="sub-menu" style="<?php if (trim($title) == "Plots" || $title == 'Plots Map View' || $title == 'Edit Plot' || $title == 'Plot Images' || trim($title) == "Add Plot" || trim($title) == "Import Plots") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                    <li class="nav-item <?php if (trim($title) == "Plots" || $title == 'Plot Images' || $title == 'Plots Map View' || $title == 'Edit Plot') { ?>active open<?php } ?>">
                        <a href="{{url('/cemetery/plots')}}" class="nav-link">
                            <span class="title">View Plots</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    @if(session()->get("arCemetery.selectedPagePermissions.2") == 1)
                    <li class="nav-item <?php if (trim($title) == "Add Plot") { ?>active open<?php } ?>">
                        <a href="{{url('/cemetery/add_plot')}}" class="nav-link">
                            <span class="title">Add A Plot</span>
                            <span class="selected"></span>
                        </a>
                    </li>

                    <li class="nav-item <?php if (trim($title) == "Import Plots") { ?>active open<?php } ?>">
                        <a href="{{url('/cemetery/import_plots')}}" class="nav-link">
                            <span class="title">Import Plots</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    @endif
                </ul>
            </li> 
            @endif



            @if(session()->get("arCemetery.selectedPagePermissions.4") != 3)
            <li class="nav-item  {{($title == 'Customer' || $title == 'Add Customer'?'active open':'')}}">
              <a href="javascript:;" class="nav-link nav-toggle">
                  <i class="fa fa-users" aria-hidden="true"></i>
                  <span class="title">Customers</span>
                  <span class="arrow {{($title == 'Customer' || $title == 'Add Customer'?'open':'')}}"></span>
              </a>
              <ul class="sub-menu" style="<?php if (trim($title) == "Customer" || trim($title) == "Add Customer") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                  <li class="nav-item <?php if (trim($title) == "Customer") { ?>active open<?php } ?>">
                      <a href="{{url('/cemetery/customers')}}" class="nav-link">
                          <span class="title">View Customers</span>
                          <span class="selected"></span>
                      </a>
                  </li>
                  @if(session()->get("arCemetery.selectedPagePermissions.4") == 1)
                  <li class="nav-item <?php if (trim($title) == "Add Customer") { ?>active open<?php } ?>">
                      <a href="{{url('/cemetery/add_customer')}}" class="nav-link">
                          <span class="title">Add A Customer</span>
                          <span class="selected"></span>
                      </a>
                  </li>
                  @endif
              </ul>
          </li>
          @endif

          @if(session()->get("arCemetery.selectedPagePermissions.5") != 3)
          <li class="nav-item  {{($title == 'Plot Orders' || $title == 'Plots Orders' || $title == 'Donation Orders'?'active open':'')}}">
              <a href="javascript:;" class="nav-link nav-toggle">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span class="title">Orders</span>
                  <span class="arrow {{($title == 'Plot Orders' || $title == 'Plots Orders' || $title == 'Donation Orders'?'open':'')}}"></span>
              </a>
              <ul class="sub-menu" style="<?php if (trim($title) == "Plot Orders" || $title == 'Plots Orders' || trim($title) == "Donation Orders") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                  <li class="nav-item <?php if (trim($title) == "Plot Orders" || trim($title) == "Plots Orders") { ?>active open<?php } ?>">
                      <a href="{{url('/cemetery/orders')}}" class="nav-link">
                          <span class="title">Plots</span>
                          <span class="selected"></span>
                      </a>
                  </li>
                  <li class="nav-item <?php if (trim($title) == "Donation Orders") { ?>active open<?php } ?>">
                      <a href="{{url('/cemetery/donation_orders')}}" class="nav-link">
                          <span class="title">Donations</span>
                          <span class="selected"></span>
                      </a>
                  </li>
              </ul>
          </li>
          @endif
          @if(session()->get("arCemetery.selectedPagePermissions.6") != 3)
            <li class="nav-item  {{($title == 'Memorials'?'active':'')}}">
                <a href="{{url('/cemetery/Memorials')}}" class="nav-link nav-toggle">
                    <i class="fa fa-tablet"></i>
                    <span class="title">Memorials</span>
                </a>
            </li>
          @endif
          
          @if(session()->get("arCemetery.selectedPagePermissions.7") != 3)
          <li class="nav-item  {{($title == 'Plot Orders Report' || $title == 'Donations'?'active open':'')}}">
              <a href="javascript:;" class="nav-link nav-toggle">
                  <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                  <span class="title">Reports</span>
                  <span class="arrow {{($title == 'Plot Orders Report' || $title == 'Donations'?'open':'')}}"></span>
              </a>
              <ul class="sub-menu" style="<?php if (trim($title) == "Plot Orders Report" || trim($title) == "Donations") { ?>display: block;margin-top:0px;<?php } else { ?>display: none;margin-top:0px;<?php } ?>">
                  <li class="nav-item <?php if (trim($title) == "Plot Orders Report") { ?>active open<?php } ?>">
                      <a href="{{url('/cemetery/Reports')}}" class="nav-link">
                          <span class="title">Plots</span>
                          <span class="selected"></span>
                      </a>
                  </li>
                  <li class="nav-item <?php if (trim($title) == "Donations") { ?>active open<?php } ?>">
                      <a href="{{url('/cemetery/donation_reports')}}" class="nav-link">
                          <span class="title">Donations</span>
                          <span class="selected"></span>
                      </a>
                  </li>
              </ul>
          </li>
          @endif
    @endif
    </ul>
</div>
