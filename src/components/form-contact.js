import React, { Component } from 'react'
import Card from './card'
import Helmet from 'react-helmet'

class ContactForm extends Component {

  componentDidMount() {
    const eventObserver = document.createElement('script');
    eventObserver.innerHTML = `window.enableEventObserver=true;`

    //Append inlineScriptHelmet to the head
    const scriptHelmet = document.createElement('script');
    scriptHelmet.innerHTML = `
      JotForm.newDefaultTheme = true;
      JotForm.extendsNewTheme = false;
      JotForm.singleProduct = false;
      JotForm.texts = {"confirmEmail":"E-mail does not match","pleaseWait":"Please wait...","validateEmail":"You need to validate this e-mail","confirmClearForm":"Are you sure you want to clear the form","lessThan":"Your score should be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","required":"This field is required.","requireOne":"At least one field required.","requireEveryRow":"Every row is required.","requireEveryCell":"Every cell is required.","email":"Enter a valid e-mail address","alphabetic":"This field can only contain letters","numeric":"This field can only contain numeric values","alphanumeric":"This field can only contain letters and numbers.","cyrillic":"This field can only contain cyrillic characters","url":"This field can only contain a valid URL","currency":"This field can only contain currency values.","fillMask":"Field value must fill mask.","uploadExtensions":"You can only upload following files:","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","gradingScoreError":"Score total should only be less than or equal to","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","maxDigitsError":"The maximum digits allowed is","minCharactersError":"The number of characters should not be less than the minimum value:","maxCharactersError":"The number of characters should not be more than the maximum value:","freeEmailError":"Free email accounts are not allowed","minSelectionsError":"The minimum required number of selections is ","maxSelectionsError":"The maximum number of selections allowed is ","pastDatesDisallowed":"Date must not be in the past.","dateLimited":"This date is unavailable.","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","ageVerificationError":"You must be older than {minAge} years old to submit this form.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","chooseAFile_infoMessage":"Choose a file","maxFileSize_infoMessage":"Max. file size","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","ccInvalidNumber":"Credit Card Number is invalid.","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingProduct":"Please select at least one product.","ccMissingDonation":"Please enter numeric values for donation amount.","disallowDecimals":"Please enter a whole number.","restrictedDomain":"This domain is not allowed","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","requiredLegend":"All fields marked with * are required and must be filled.","geoPermissionTitle":"Permission Denied","geoPermissionDesc":"Check your browser's privacy settings.","geoNotAvailableTitle":"Position Unavailable","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoTimeoutTitle":"Timeout","geoTimeoutDesc":"Please check your internet connection and try again.","selectedTime":"Selected Time","formerSelectedTime":"Former Time","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","noSlotsAvailable":"No slots available","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","multipleError":"There are {count} errors on this page. Please correct them before moving on.","oneError":"There is {count} error on this page. Please correct it before moving on.","doneMessage":"Well done! All errors are fixed.","invalidTime":"Enter a valid time","doneButton":"Done","reviewSubmitText":"Review and Submit","nextButtonText":"Next","prevButtonText":"Previous","seeErrorsButton":"See Errors","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","soldOut":"Sold Out","justSoldOut":"Just Sold Out","selectionSoldOut":"Selection Sold Out","subProductItemsLeft":"({count} items left)","startButtonText":"START","submitButtonText":"Submit","submissionLimit":"Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.","reviewBackText":"Back to Form","seeAllText":"See All","progressMiddleText":"of","fieldError":"field has an error.","error":"Error"};
      JotForm.originalLanguage = "en";
      JotForm.isFormViewTrackingAllowed = true;
      JotForm.replaceTagTest = true;
      JotForm.clearFieldOnHide="disable";
      JotForm.submitError="jumpToFirstError";
      window.addEventListener('DOMContentLoaded',function(){window.brandingFooter.init({"formID":251276832519159,"campaign":"powered_by_jotform_le","isCardForm":false,"isLegacyForm":true,"formLanguage":"en"})});
      JotForm.init(function(){

      /*INIT-START*/
      if (window.JotForm && JotForm.accessible) $('input_7').setAttribute('tabindex',0);
      if (window.JotForm && JotForm.accessible) $('input_5').setAttribute('tabindex',0);
            JotForm.alterTexts({"ageVerificationError":"You must be older than {minAge} years old to submit this form.","alphabetic":"This field can only contain letters","alphanumeric":"This field can only contain letters and numbers.","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccInvalidNumber":"Credit Card Number is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingDonation":"Please enter numeric values for donation amount.","ccMissingProduct":"Please select at least one product.","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","chooseAFile_infoMessage":"Choose a file","confirmClearForm":"Are you sure you want to clear the form","confirmEmail":"E-mail does not match","currency":"This field can only contain currency values.","cyrillic":"This field can only contain cyrillic characters","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","dateLimited":"This date is unavailable.","disallowDecimals":"Please enter a whole number.","doneButton":"Done","doneMessage":"Well done! All errors are fixed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","email":"Enter a valid e-mail address","error":"Error","fieldError":"field has an error.","fillMask":"Field value must fill mask.","formerSelectedTime":"Former Time","freeEmailError":"Free email accounts are not allowed","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoNotAvailableTitle":"Position Unavailable","geoPermissionDesc":"Check your browser's privacy settings.","geoPermissionTitle":"Permission Denied","geoTimeoutDesc":"Please check your internet connection and try again.","geoTimeoutTitle":"Timeout","gradingScoreError":"Score total should only be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","invalidTime":"Enter a valid time","justSoldOut":"Just Sold Out","lessThan":"Your score should be less than or equal to","maxCharactersError":"The number of characters should not be more than the maximum value:","maxDigitsError":"The maximum digits allowed is","maxFileSize_infoMessage":"Max. file size","maxSelectionsError":"The maximum number of selections allowed is ","minCharactersError":"The number of characters should not be less than the minimum value:","minSelectionsError":"The minimum required number of selections is ","multipleError":"There are {count} errors on this page. Please correct them before moving on.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","nextButtonText":"Next","noSlotsAvailable":"No slots available","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","numeric":"This field can only contain numeric values","oneError":"There is {count} error on this page. Please correct it before moving on.","pastDatesDisallowed":"Date must not be in the past.","pleaseWait":"Please wait...","prevButtonText":"Previous","progressMiddleText":"of","required":"This field is required.","requiredLegend":"All fields marked with * are required and must be filled.","requireEveryCell":"Every cell is required.","requireEveryRow":"Every row is required.","requireOne":"At least one field required.","restrictedDomain":"This domain is not allowed","reviewBackText":"Back to Form","reviewSubmitText":"Review and Submit","seeAllText":"See All","seeErrorsButton":"See Errors","selectedTime":"Selected Time","selectionSoldOut":"Selection Sold Out","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","soldOut":"Sold Out","startButtonText":"START","submissionLimit":"Sorry! Only one entry is allowed. &lt;br&gt; Multiple submissions are disabled for this form.","submitButtonText":"Submit","subProductItemsLeft":"({count} items left)","uploadExtensions":"You can only upload following files:","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","url":"This field can only contain a valid URL","validateEmail":"You need to validate this e-mail","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is"});
        /*INIT-END*/
        });

        setTimeout(function() {
      JotForm.paymentExtrasOnTheFly([null,{"name":"heading","qid":"1","text":"Get in Touch","type":"control_head"},{"name":"submit2","qid":"2","text":"Send","type":"control_button"},null,{"description":"","name":"yourEmail","qid":"4","subLabel":"example@example.com","text":"Your email","type":"control_email"},{"description":"","mde":"No","name":"howCan","qid":"5","subLabel":"","text":"How can we help?","type":"control_textarea","wysiwyg":"Disable"},null,{"description":"","name":"yourName","qid":"7","subLabel":"","text":"Your name","type":"control_textbox"}]);}, 20); 
    `;
    document.head.appendChild(scriptHelmet);

    //Append inlineScript to the body
    const scriptInner = document.createElement('script');
    scriptInner.innerHTML = `
        var all_spc = document.querySelectorAll("form[id='251193306087052'] .si" + "mple" + "_spc");
          for (var i = 0; i < all_spc.length; i++)
          {
            all_spc[i].value = "251193306087052-251193306087052";
          }
      `;
    document.body.appendChild(scriptInner);
  }

  // onSubmit = async (e) => {
  //   e.preventDefault();

  //   await fetch('https://assets.mailerlite.com/jsonp/1457992/forms/153042566283003711/subscribe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "fields": {
  //         "email": e.target.elements.email.value,
  //         "name": e.target.elements.name.value,
  //         "body": e.target.elements.body.value,
  //       },
  //       "ml-submit": 1,
  //       "anticsrf": true
  //     })
  //   }).then(async (response) => {
  //     if (response.ok) {
  //       var formContent = document.querySelector('.ml-subscribe-form-25396323 .row-form');
  //       formContent.style.display = 'none';
  //       var formSuccess = document.querySelector('.ml-subscribe-form-25396323 .row-success');
  //       formSuccess.style.display = 'block';
  //     } else {
  //       console.error('Network response:', response);
  //       throw new Error('Network response was not ok');
  //     }
  //   }).catch((error) => {
  //     console.error('Error:', error);
  //     var formContent = document.querySelector('.ml-subscribe-form-25396323 .row-form');
  //     formContent.style.display = 'none';
  //     var formSuccess = document.querySelector('.ml-subscribe-form-25396323 .row-error');
  //     formSuccess.style.display = 'block';
  //   });
  // }

  render() {
    return (
      <div className="hiring-form">
        <Helmet>
          <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=421d4e0" />
          <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.62799" />
          {/* <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.62799" /> */}
          {/* <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.62799" /> */}
          <script src="https://cdn.jotfor.ms/static/prototype.forms.js?v=3.3.62799" type="text/javascript"></script>
          <script src="https://cdn.jotfor.ms/static/jotform.forms.js?v=3.3.62799" type="text/javascript"></script>
          <script src="https://cdn.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.62799" type="text/javascript" defer></script>
          <script src="https://cdn.jotfor.ms/s/umd/9d8c23da9d1/for-form-branding-footer.js?v=3.3.62799" type="text/javascript" defer></script>
          <script src="https://cdn.jotfor.ms/js/vendor/smoothscroll.min.js?v=3.3.62799" type="text/javascript"></script>
          <script src="https://cdn.jotfor.ms/js/errorNavigation.js?v=3.3.62799" type="text/javascript"></script>
        </Helmet>
        <Card>
          <form
            className="jotform-form contact-form"
            //onsubmit="return typeof testSubmitFunction !== 'undefined' && testSubmitFunction();"
            action="https://submit.jotform.com/submit/251276832519159"
            method="post"
            name="form_251276832519159"
            id="251276832519159"
            accept-charset="utf-8"
            autocomplete="on">

            <input type="hidden" name="formID" value="251276832519159" />
            <input type="hidden" id="JWTContainer" value="" />
            <input type="hidden" id="cardinalOrderNumber" value="" />
            <input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1747071846347" />
            <input type="hidden" id="submitSource" name="submitSource" value="unknown" />
            <input type="hidden" id="buildDate" name="buildDate" value="1747071846347" />
            <input type="hidden" name="uploadServerUrl" value="https://upload.jotform.com/upload" />
            <input type="hidden" name="eventObserver" value="1" />

            <div role="main" className="form-all">
              <ul className="form-section page-section" role="presentation">
                <li id="cid_1" className="form-input-wide" data-type="control_head">
                  <div className="form-header-group  header-large">
                    <div className="header-text httal htvam">
                      <h1 id="header_1" className="form-header" data-component="header">Get in Touch</h1>
                      <div id="subHeader_1" className="form-subHeader">or email us at info@goinvo.com</div>
                    </div>
                  </div>
                </li>
                <li className="form-line jf-required" data-type="control_textbox" id="id_7">
                  <label className="form-label form-label-top form-label-auto" id="label_7" for="input_7" aria-hidden="false"> Your name<span className="form-required">*</span> </label>
                  <div id="cid_7" className="form-input-wide jf-required" data-layout="half">
                    <input type="text" id="input_7" name="q7_yourName" data-type="input-textbox" className="form-textbox validate[required]" data-defaultvalue="" data-component="textbox" aria-labelledby="label_7" required="" />
                  </div>
                </li>
                <li className="form-line jf-required" data-type="control_email" id="id_4">
                  <label className="form-label form-label-top form-label-auto" id="label_4" for="input_4" aria-hidden="false"> Your email<span className="form-required">*</span> </label>
                  <div id="cid_4" className="form-input-wide jf-required" data-layout="half">
                    <span className="form-sub-label-container">
                      <input type="email" id="input_4" name="q4_yourEmail" className="form-textbox validate[required, Email]" data-defaultvalue="" autoComplete="section-input_4 email" data-component="email" aria-labelledby="label_4 sublabel_input_4" required="" />
                      <label className="form-sub-label" for="input_4" id="sublabel_input_4">example@example.com</label>
                    </span>
                  </div>
                </li>
                <li className="form-line jf-required" data-type="control_textarea" id="id_5">
                  <label className="form-label form-label-top form-label-auto" id="label_5" for="input_5" aria-hidden="false"> How can we help?<span className="form-required">*</span> </label>
                  <div id="cid_5" className="form-input-wide jf-required" data-layout="full">
                    <textarea id="input_5" className="form-textarea validate[required]" name="q5_howCan" data-component="textarea" required="" aria-labelledby="label_5"></textarea>
                  </div>
                </li>
                <li className="form-line" data-type="control_button" id="id_2">
                  <div id="cid_2" className="form-input-wide" data-layout="full">
                    <div data-align="auto" className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField">
                      <button id="input_2" type="submit" className="form-submit-button form-submit-button-orange-500 submit-button jf-form-buttons jsTest-submitField legacy-submit" data-component="button" data-content="">Send</button>
                    </div>
                  </div>
                </li>
                <li className="display-none">Should be Empty: <input type="text" name="website" value="" /></li>
              </ul>
            </div>
          </form>
        </Card>
      </div>
    )
  }
}

export default ContactForm
