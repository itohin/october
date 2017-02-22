<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Contact extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /*
     * Validation
     */
    public $rules = [ 
        'address' => 'required',
        'phone' => 'required',
        'mail' => 'required',
        'pdf' => 'required',
    ];

    public $customMessages = [
        'address.required' => 'Введите адрес',
        'phone.required' => 'Введите телефон',
        'mail.required' => 'Введите Email',
        'pdf.required' => 'Загрузите PDF',
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_contacts';

    public $attachOne = ['pdf' => ['System\Models\File']];

    public function beforeSave()
    {
        // Address
        $address = $this->address;


        // Get JSON results from this request
        $geo = file_get_contents('http://maps.googleapis.com/maps/api/geocode/json?address='.urlencode($address).'&sensor=false');

        // Convert the JSON to an array
        $geo = json_decode($geo, true);

        if ($geo['status'] == 'OK') {
          // Get Lat & Long
          $this->latitude = $geo['results'][0]['geometry']['location']['lat'];
          $this->longitude = $geo['results'][0]['geometry']['location']['lng'];
        }  
    }
}