import { api, LightningElement } from 'lwc';
import Name_Field from '@salesforce/schema/Contact.Name';
import Phone_Field from '@salesforce/schema/Contact.Phone';

export default class Lds extends LightningElement {

    @api recordId;
    fields = [Name_Field, Phone_Field];

    objectApiName = 'Contact';
    nameField = Name_Field;
    phoneField = Phone_Field;
}