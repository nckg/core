<?php namespace Rocket\Accounts;

use Eloquent;
use Cartalyst\Sentry\Users\Eloquent\User as SentryUser;
use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends SentryUser implements UserInterface, RemindableInterface {

    use UserTrait, RemindableTrait;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = array('password', 'activation_code');

    /**
     * @param $firstName
     * @param $lastName
     * @param $email
     * @param $password
     * @param bool $activated
     * @return static
     */
    public static function register($firstName, $lastName, $email, $password, $activated = true)
    {
        self::unguard();

        $user = new static(array(
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email' => $email,
            'activated' => $activated,
        ));

        $user->setHasher(new \Cartalyst\Sentry\Hashing\NativeHasher);

        $user->password = $password;

        return $user;
    }

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */
    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Get the password for the user.
     *
     * @return string
     */
    public function getAuthPassword()
    {
        return $this->password;
    }

    /**
     * Get the e-mail address where password reminders are sent.
     *
     * @return string
     */
    public function getReminderEmail()
    {
        return $this->email;
    }
}