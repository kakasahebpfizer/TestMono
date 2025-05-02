import { LightningElement } from 'lwc';
export default class PocCreateEmpLWC extends LightningElement {

    handleSuccess(){
        const evt = new ShowToastEvent({
      title: "Record Saved",
      message: "Record Saved successfully",
      variant: "success",
    });
    this.dispatchEvent(evt);
  }

  handleCancel(){
     this.template.querySelector('form').reset();
   }
}