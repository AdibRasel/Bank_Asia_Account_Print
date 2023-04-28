function Submit(){
    // input value 
    let AC_Title_Input = document.getElementById("AC_Title_Input").value;
    let AC_No_Input = document.getElementById("AC_No_Input").value;
    let AC_Mobile_No_Input = document.getElementById("AC_Mobile_No_Input").value;
    // end input value 

    // document.getElementById("AC_Title_Show").innerHTML = AC_Title_Input;
    // document.getElementById("AC_No_Show").innerHTML = AC_No_Input;
    // document.getElementById("AC_Mobile_No_Show").innerHTML = AC_Mobile_No_Input;
    
    // if(AC_Title_Input.length === 0 ){
    //     alert('Please enter correct name');
    //   }else if(AC_No_Input.length <= 12 || AC_No_Input >=14){
    //     alert('Please enter the correct Account Number');
    //   }else if(AC_Mobile_No_Input.length <= 10 || AC_Mobile_No_Input.length  >= 12){
    //     alert('Please enter correct Mobile Number');
    //   }else{
    //     alert('Congratulations! you can print this account information.');
  
        document.getElementById("AC_Title_Show").innerHTML = AC_Title_Input;
        document.getElementById("AC_No_Show").innerHTML = AC_No_Input;
        document.getElementById("AC_Mobile_No_Show").innerHTML = AC_Mobile_No_Input;
        
    //   }



}





function Print(DivName){
    var printContents = document.getElementById(DivName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    // alert("Test")

}



/* Remittance Calculation start */

function OnchangeInterestRate() {
    var InterestRate = document.getElementById("InterestRate").value;
    document.getElementById("InterestRateShow").innerHTML = "("+ InterestRate +")%";
}


function RemittanceCalculation(){
    let RemittanceTakaInput = document.getElementById("RemittanceTaka").value;
    let Equel = RemittanceTakaInput - 1;
    let RemittanceTaka = Equel + 1;

    let InterestRate = document.getElementById("InterestRate").value;
    let Interest = RemittanceTaka * InterestRate / 100;
    let Total_Taka = RemittanceTaka + Interest

    document.getElementById("Total_Remittance").innerHTML = RemittanceTaka
    document.getElementById("Total_Interest").innerHTML = Interest
    document.getElementById("Total_Taka").innerHTML = Total_Taka
    document.getElementById("Spelling").innerHTML =inWords(Total_Taka)

}


var a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety' ];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'Overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + ' Crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' Lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + ' Thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + ' Hundred ' : '';
    str += (n[5] != 0) ? ((str != ' ') ? ' ' : ' ') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' Only ' : '';
    return str;
}


/* Remittance Calculation end */













/* DPS Calculation start*/
function DPSButton(){
    let DPSTakaInput = document.getElementById("DPSTaka").value;
    let DPSTakaEquel = DPSTakaInput - 1
    let DPSTaka = DPSTakaEquel + 1
    let InterestRate = document.getElementById("InterestRate").value;
    let DPSYear = document.getElementById("DPSYear").value;

    let DPSTotalTaka = DPSTaka * DPSYear * 12;
    let DPSBonus = DPSTotalTaka * InterestRate / 100;
    let DPSInTotalTaka = DPSTotalTaka + DPSBonus;


    document.getElementById("Monthltk").innerHTML = DPSTaka;
    document.getElementById("YearTk").innerHTML = DPSYear;
    document.getElementById("DPSTotalTaka").innerHTML = DPSTotalTaka;
    document.getElementById("DPSBonus").innerHTML = DPSBonus;
    document.getElementById("DPSInTotalTaka").innerHTML = DPSInTotalTaka;
}


/* DPS Calculation end*/








/* FDR Calculation start*/
function FDRButton(){
    // input item 
    let FDRTime = document.getElementById("FDRTime").value;
    let FDRTaka = document.getElementById("FDRTaka").value;
    let FDRRate = document.getElementById("FDRRate").value;

    // show item
    let TotalTk = document.getElementById("TotalTk").value;
    let TotalInterest = document.getElementById("TotalInterest").value;
    let InTotalInterest = document.getElementById("InTotalInterest").value;


    


}






/* FDR Calculation end*/


