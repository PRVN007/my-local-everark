<?php
namespace App\Http\Controllers\Admin\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\MessageBag;
use App\Models\Admin;
use Hash;
use DB;
use File;
class AuthController extends Controller
{	
    public function login() {
            $title = "Admin Login";
            if(!empty(Auth::guard('admin')->user()->id)){
                echo 'Hello'; die; 
                    //return redirect()->intended(route('admin.dashboard'));
            }
            return view('layout.auth_admin', compact('title'));
    }
	
    public function loginProcess(Request $request) {
		
        $validation = Validator::make($request->all(), [            
            'email'     => 'required|email',
            'password'  => 'required',            
        ]);
		
        if ($validation->fails()) { 
            return redirect()->back()->withErrors($validation)->withInput();   
        }
        $Admin = Admin::Where('szEmail',$request->szEmail)->first();
        if($Admin){
            if (Hash::check($request->szPassword, $Admin->szPassword)) {
                $Auth = Auth::guard('admin')->attempt(['szEmail' => $request->szEmail, 'password' => $request->szPassword]);
                if($Auth){
                    echo 'We are on success Page'; die; 
                        //return redirect()->intended(route('admin.dashboard'));
                } else {
                        $message = new MessageBag(["szEmail" => "Something went wrong while authentication."]); 
                        return redirect()->back()->withErrors($message)->withInput($request->all());
                }
            }
        }else 
        {  
            $message = new MessageBag(["szEmail" => "Email is not valid."]); 
            return redirect()->back()->withErrors($message)->withInput($request->all());
        }
      
	} 
	
	
	public function profile(Request $request){ 
            $title = "Update Profile";
            $id = Auth::guard('admin')->user()->id;
            $admin=Admin::where('id',$id)->first();
            return view('admin.editprofile', [ 'pageTitle' =>$pageTitle, 'admin'=>$admin]);    
        }
	
	public function editProfileProcess(Request $request){
		
		$validation = Validator::make($request->all(), [            
                'name'  	=> 'required',                
                'email' 	=> 'required',

                ]);
		 
		if ($validation->fails()) { 
                return redirect()->back()->withErrors($validation)->withInput($request->all()); 
                }else{
                            try {
                                    $Admin = Admin::Where('id',Auth::guard('admin')->user()->id)->first();
                                    $Admin->name = $request->name;
                                    $Admin->email = $request->email;
                                    $Admin->mobile_no = $request->phone;
                                    $Admin->address = $request->address;
                                    if($request->hasFile('profile_image')) {
                                    $file = $request->file('profile_image');
                                            $path  = public_path().'/admin/image/';
                                    if(!File::exists($path)){     
                                    File::makeDirectory($path, $mode = 0777, true, true);
                                    }
                                        $ProfileName = time().'_'.$file->getClientOriginalName();
                                        if(!empty($admin->profile_image)){
                                            $Oldfilename= $path."/".$Admin->profile_image;
                                            File::delete($Oldfilename);
                                        }
                                        $file->move($path, $ProfileName);
                                        $Admin->profile_image = url('admin/image/'.$ProfileName);
                                    }

                                    $Admin->save();
                                    DB::commit();

                                    $request->session()->flash('alert-success', 'Profile Updated successfully!');
                                    return redirect()->back();
                            }catch(\Illuminate\Database\QueryException $e){
                                DB::rollBack();
                                return redirect()->back()->withErrors(['Oops ! some thing is wrong.'])->withInput($request->all());

                            } 
                    }
    }
	
	
	public function changePassword(Request $request){ 
		$pageTitle = "Update Profile";
	
		$id = Auth::guard('admin')->user()->id;
		
        $admin=Admin::where('id',$id)->first();
		
        return view('admin.change-password', [ 'pageTitle' =>$pageTitle, 'admin'=>$admin]);    
    }
	
	public function changePasswordProcess(Request $request){
                $validation = Validator::make($request->all(), [            
                'current_password'  => 'required',                
                'password' 			=> 'required|confirmed',
                ]);
		if ($validation->fails()) { 
                    return redirect()->back()->withErrors($validation)->withInput($request->all()); 
                }
		
            $Auth = Auth::guard('admin')->user();
		
            if (Hash::check($request->current_password, $Auth->password)) {
                if($Auth){
                        $Auth->password = Hash::make($request->password);
                        $Auth->save();
                        $request->session()->flash('alert-success', 'Password Has been changed successfully!');
                        return redirect()->back();
                } else { 
                        $message = new MessageBag(["password" => "Something went wrong while authentication."]); 
                        return redirect()->back()->withErrors($message)->withInput($request->all());
                }
		} else { 
			$message = new MessageBag(["current_password" => "Current password is not valid."]); 
			return redirect()->back()->withErrors($message)->withInput($request->all());
		}
	}
	
	public function logout(Request $request) {
		
        Auth::guard('admin')->logout();

        $request->session()->flush();

        $request->session()->regenerate();
		return redirect('/');
      
    }
}
