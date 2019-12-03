<htm>
    <head>
          <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
            <link rel="shortcut icon" href="{{ url('images/fav-ever-old.png')}}">
            <!-- CSRF Token -->
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <title>{{(!empty($title) ? $title:'')}}</title>
            <link href="{{ URL::asset('theme/assets/global/plugins/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/plugins/uniform/css/uniform.default.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/plugins/morris/morris.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/plugins/select2/css/select2.min.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/plugins/select2/css/select2-bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/css/components.min.css')}}" rel="stylesheet" id="style_components" type="text/css" />
            <link href="{{ URL::asset('theme/assets/global/css/plugins.min.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/pages/css/login.min.css')}}" rel="stylesheet" type="text/css" />
            <link href="{{ URL::asset('theme/assets/css/common-custom.css')}}" rel="stylesheet" type="text/css" />
            <script type="text/javascript">
                var AUTO_SAVE = false;
            </script>

    </head>
    <body class="login">
        <div class="content">
    
            <div class="logo">
                <a href="{{url('/admin')}}"><img src="/images/ever-right-new.png" alt="EverArk" class="logo-default" width="150"/> </a>
            </div>
            <!-- BEGIN LOGIN FORM -->
            <form class="login-form" id="adminloginForm" action="{{ url('/admin/loginprocess') }}" name="adminloginForm" method="post">
                {!! csrf_field() !!}
                <h3 class="form-title font-dark-green everark-title">Admin Login</h3>
                @if (session('status'))
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    </div>
                </div>
                @endif
                <div class="form-group {{( trim($errors->has('szEmail')) != '' ? 'has-error':'')}}">
                    <input type="email" name="szEmail" id="szEmail" class="form-control input-square-right required" placeholder="Your email Address" value="{{ old('szEmail') }}" required="required">
                    @if ($errors->has('szEmail'))
                    <span class="help-block err pull-left">
                        <strong><i class="fa fa-times-circle"></i> {{ $errors->first('szEmail') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="form-group {{( trim($errors->has('szPassword')) != '' ? 'has-error':'')}}">
                    <input type="password" name="szPassword" id="szPassword" class="form-control input-square-right required" placeholder="Your password" required="required">
                    @if ($errors->has('szPassword'))
                    <span class="help-block err pull-left">
                        <strong><i class="fa fa-times-circle"></i> {{ $errors->first('szPassword') }}</strong>
                    </span>
                    @endif
                </div>
                 <br/>
                 <div class="form-group" style="margin:10px;float:left">
                    <input type="checkbox" value="1" name="remember" checked>
                    Remember Me
                </div>
                <br/>
               <div class="form-actions anova-center-align">
                    <button type="submit" class="btn grey btn-form-submit"  style="width:100%" >Log in</button><br/><br/>
                    <a class="font-dark-green" id="forget-password" href="{{ url('/password/reset') }}"  style="font-size:14px;">Forgot your password?</a>
                </div>
            </form>
            <!-- END LOGIN FORM -->
        </div>
        <!-- BEGIN: PAGE SCRIPTS -->
        <script src="{{ URL::asset('theme/assets/js/jquery-3.1.0.min.js')}}" rel="jquery" type="text/javascript"></script>
        <script src="{{ URL::asset('theme/assets/js/jquery.form.js')}}" rel="jquery" type="text/javascript"></script>
        <script src="{{ URL::asset('theme/assets/js/validate.js')}}" rel="jquery" type="text/javascript"></script>
        <script type="text/javascript">
                validate_form_fields();
        </script>
        <script src="{{ URL::asset('theme/assets/global/plugins/bootstrap/js/bootstrap.min.js')}}" type="text/javascript"></script>

    </body>
</htm>