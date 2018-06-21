import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
    selector: 'page-input-biodata',
    templateUrl: 'input-biodata.html'
})
export class InputBiodataPage {



    /**
     * @name form
     * @type {FormGroup}
     * @public
     * @description     Define FormGroup property for managing form validation / data retrieval
     */
    public form                   : FormGroup;
    public biodataNamaDepan       : any;
    public biodataNamaBelakang    : any;
    public biodataJenisKelamin    : any;
    public biodataAlamat          : any;
    public biodataNoTelp          : any;
    public biodataEmail           : any;

    public isEdited               : boolean = false;
    public hideForm               : boolean = false;
    public pageTitle              : string;
    //public recordID               : any      = null;
    public idBiodata               : any      = null;

    //private baseURI               : string  = "http://localhost/ionic_php_bio/";

    private baseURI               : string  = "http://localhost/klikmgnew/public_html/index.php?r=mg/tghproperty/";




    // Initialise module classes
    constructor(public navCtrl    : NavController,
                public http       : Http,
                public NP         : NavParams,
                public fb         : FormBuilder,
                public toastCtrl  : ToastController)
    {

        // Create form builder validation rules
        this.form = fb.group({
            "namaDepan"                  : ["", Validators.required],
            "namaBelakang"                  : ["", Validators.required],
            "jenisKelamin"                  : ["", Validators.required],
            "alamat"                  : ["", Validators.required],
            "noTelp"                  : ["", Validators.required],
            "email"           : ["", Validators.required]
        });
    }

    /**
     * Triggered when template view is about to be entered
     * Determine whether we adding or editing a record
     * based on any supplied navigation parameters
     *
     * @public
     * @method ionViewWillEnter
     * @return {None}
     */
    ionViewWillEnter() : void
    {
        this.resetFields();

        if(this.NP.get("record"))
        {
            this.isEdited      = true;
            this.selectEntry(this.NP.get("record"));
            this.pageTitle     = 'Kembali';
        }
        else
        {
            this.isEdited      = false;
            this.pageTitle     = 'Create entry';
        }
    }




    /**
     * Assign the navigation retrieved data to properties
     * used as models on the page's HTML form
     *
     * @public
     * @method selectEntry
     * @param item 		{any} 			Navigation data
     * @return {None}
     */
    selectEntry(item : any) : void
    {
        this.biodataNamaDepan        = item.namaDepan;
        this.biodataNamaBelakang     = item.namaBelakang;
        this.biodataJenisKelamin     = item.jenisKelamin;
        this.biodataAlamat           = item.alamat;
        this.biodataEmail            = item.email;
        this.biodataNoTelp           = item.noTelp;
        this.idBiodata               = item.idBiodata;
    }




    /**
     * Save a new record that has been added to the page's HTML form
     * Use angular's http post method to submit the record data
     *
     * @public
     * @method createEntry
     * @param name 			{String} 			Name value from form field
     * @param description 	{String} 			Description value from form field
     * @return {None}
     */
    createEntry(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email )
    {
        let body        : string    = "key=insert&namaDepan=" + namaDepan + "&namaBelakang=" + namaBelakang + "&jenisKelamin=" + jenisKelamin + "&alamat=" + alamat + "&noTelp=" + noTelp + "&email=" + email,
            type        : string    = "application/x-www-form-urlencoded; charset=UTF-8",
            headers 	: any		= new Headers({'Content-Type' : type}),
            options 	: any		= new RequestOptions({ headers}),
            url       : any      	= this.baseURI + "manage-data.php";

        this.http
            .post(url, body, options)
            .subscribe(data =>
                {
                    // If the request was successful notify the user
                    if(data.status === 200){
                        this.hideForm  =  true;
                        this.sendNotification(`Congratulations : ${namaDepan} was successfully Insert`);
                    }
                    else{
                        this.sendNotification('Something went wrong!');
                    }
                },
                (error : any) =>
                {
                    this.sendNotification('Something went wrong!');
                });
    }

    InsertData(namaDepan, namaBelakang)
    {
        let body        : string    = "&namaDepan=" + namaDepan + "&namaBelakang=" + namaBelakang,
            type        : string    = "application/x-www-form-urlencoded; charset=UTF-8",
            headers 	: any		= new Headers({'Content-Type' : type}),
            options 	: any		= new RequestOptions({ headers}),
            url       : any      	= this.baseURI + "create";

        this.http
            .post(url, body, options)
            .subscribe(data =>
                {
                    // If the request was successful notify the user
                    if(data.status === 200){
                        this.hideForm  =  true;
                        this.sendNotification(`Congratulations : ${namaDepan} was successfully Insert`);
                    }
                    else{
                        this.sendNotification('Something went wrong!');
                    }
                },
                (error : any) =>
                {
                    this.sendNotification('Something went wrong!');
                });
    }




    /**
     * Update an existing record that has been edited in the page's HTML form
     * Use angular's http post method to submit the record data
     * to our remote PHP script
     *
     * @public
     * @method updateEntry
     * @param name 			{String} 			Name value from form field
     * @param description 	{String} 			Description value from form field
     * @return {None}
     */
    updateEntry(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email )
    {
        let body        : string    = "key=update&namaDepan=" + namaDepan + "&namaBelakang=" + namaBelakang + "&jenisKelamin=" + jenisKelamin + "&alamat=" + alamat + "&noTelp=" + noTelp + "&email=" + email +"&idBiodata=" + this.idBiodata,
            type        : string    = "application/x-www-form-urlencoded; charset=UTF-8",
            headers 	: any		= new Headers({'Content-Type' : type}),
            options 	: any		= new RequestOptions({ headers}),
            url       : any      	= this.baseURI + "manage-data.php";

        this.http
            .post(url, body, options)
            .subscribe(data =>
                {
                    // If the request was successful notify the user

                    if(data.status === 200){
                        this.hideForm  =  true;
                        this.sendNotification(`Congratulations : ${namaDepan} was successfully updated`);
                    }
                    else{
                        this.sendNotification('Something went wrong!');
                    }

                },
                (error : any) =>
                {
                    this.sendNotification('Something went wrong!');
                });
    }




    /**
     * Remove an existing record that has been selected in the page's HTML form
     * Use angular's http post method to submit the record data
     * to our remote PHP script
     *
     * @public
     * @method deleteEntry
     * @return {None}
     */
    deleteEntry() : void
    {
        let

              body 	: string		= "key=delete&idBiodata=" + this.idBiodata ,
              name      : string 	= this.form.controls["namaDepan"].value,
              type        : string    = "application/x-www-form-urlencoded; charset=UTF-8",
              headers 	: any		= new Headers({'Content-Type' : type}),
              options 	: any		= new RequestOptions({ headers}),
              url       : any      	= this.baseURI + "manage-data.php";

        this.http
            .post(url, body, options)
            .subscribe(data =>
                {

                    if(data.status === 200){
                        this.hideForm     = true;
                        this.sendNotification(`Congratulations the technology: ${name} was successfully deleted`);}
                    else{
                        this.sendNotification('Something went wrong!');
                    }
                },
                (error : any) =>
                {
                    this.sendNotification('Something went wrong!');
                });
    }



    hapusdata() : void
    {
        let

            body 	: string		= "key=delete&idBiodata=" + this.idBiodata ,
            name      : string 	= this.form.controls["namaDepan"].value,
            type        : string    = "application/x-www-form-urlencoded; charset=UTF-8",
            headers 	: any		= new Headers({'Content-Type' : type}),
            options 	: any		= new RequestOptions({ headers}),
            url       : any      	= this.baseURI + "manage-data.php";

        this.http
            .post(url, body, options)
            .subscribe(data =>
                {

                    if(data.status === 200){
                        this.hideForm     = true;
                        this.sendNotification(`Congratulations the technology: ${name} was successfully deleted`);}
                    else{
                        this.sendNotification('Something went wrong!');
                    }
                },
                (error : any) =>
                {
                    this.sendNotification('Something went wrong!');
                });
    }


    /**
     * Handle data submitted from the page's HTML form
     * Determine whether we are adding a new record or amending an
     * existing record
     *
     * @public
     * @method saveEntry
     * @return {None}
     */
    saveEntry() : void
    {
        let namaDepan          : string = this.form.controls["namaDepan"].value,
            namaBelakang         : string = this.form.controls["namaBelakang"].value,
            jenisKelamin          : string = this.form.controls["jenisKelamin"].value,
            alamat          : string = this.form.controls["alamat"].value,
            noTelp          : string = this.form.controls["noTelp"].value,
            email          : string = this.form.controls["email"].value



        if(this.isEdited)
        {
            this.updateEntry(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email);
        }
        else
        {
            //this.createEntry(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email);
            this.InsertData(namaDepan, namaBelakang);
        }
    }




    /**
     * Clear values in the page's HTML form fields
     *
     * @public
     * @method resetFields
     * @return {None}
     */
    resetFields() : void
    {
        this.biodataNamaDepan           = "";
        this.biodataNamaBelakang    = "";
    }




    /**
     * Manage notifying the user of the outcome of remote operations
     *
     * @public
     * @method sendNotification
     * @param message 	{String} 			Message to be displayed in the notification
     * @return {None}
     */
    sendNotification(message : string)  : void
    {
        let notification = this.toastCtrl.create({
            message       : message,
            duration      : 3000
        });
        notification.present();
    }



}
