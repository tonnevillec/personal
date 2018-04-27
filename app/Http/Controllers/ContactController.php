<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;

class ContactController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function send(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'message' => 'required',
            'confirm' => 'required',
        ]);

        if ($request->get('confirm') == config('app.confirmation_key')) {
            try {
                Mail::to(config('mail.username')
                    ->send(new Contact($request->except('_token')));
            } catch (\Exception $e) {
                dd($e->getMessage());
            }
        }

        return redirect('/');
    }
}