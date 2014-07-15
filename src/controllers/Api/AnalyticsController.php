<?php namespace App\Controllers\Api;

class AnalyticsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$client = new \Google_Client();
		$client->setClientId('564407766090-ntv13rjqrpq4ofmd9e2019b6g69papbf.apps.googleusercontent.com');
		$client->setClientSecret('6W89x5mIfO5wH4kK_mJpoVaZ');
		$client->setRedirectUri('http://localhost/oauth2callback');
	}
}