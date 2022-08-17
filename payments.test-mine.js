describe("payments functons", function() {
  
  beforeEach(function () {
    // initialization logic
    billAmt = "100"
    tipAmt = "15"
    let paymentId = 0;
    
  
  it('should add a curPayment object to allPayments, update html and reset input values', function () {
      submitPaymentInfo();
      function createCurPayment() {
        let billAmt = billAmtInput.value;
        let tipAmt = tipAmtInput.value;
      
        if (billAmt === '' || tipAmt === '') return;
      
        if (Number(billAmt) > 0 && Number(tipAmt) >= 0) {
          return {
            billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt, tipAmt),
        if (curPayment) {
            paymentId +=1;
        
      allPayments['payment' + paymentId] = curPayment;
  
      expect(curPayment).toEqual('15');
    
    }};
  
      
      // teardown logic
    }}})}); 

  beforeEach(function () {
      // initialization logic
      billAmt = "100";
      tipAmt = "15";
    });
  
  it('should return undefined with negative or empty inputs', function () {
      createCurPayment();
      
      expect( {
        billAmt: billAmt,
        tipAmt: tipAmt,
        tipPercent: calculateTipPercent(billAmt, tipAmt)}
        ).toEqual(
          { billAmt: "100",
          tipAmt: "15",
          tipPercent: 15});
      
    });
  
  afterEach(function() {
       billAmtn = "0";
       tipAmt = "0";
    });
  
      // initialization logic
      // only creating an element and appending 
  
  it('Create table row element and pass to appendTd with input value', function () {
        appendPaymentTable();
        for (let key in allServers) {
            let curServer = allServers[key];
        
            let newTr = document.createElement('tr');
            newTr.setAttribute('id', key);
            let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;
            let appendDeleteBtn = document.createElement('td');

      expect(getElementById('payment+(paymentID)').value).toEqual(billAmt, tipAmt, '%');
    
  
  afterEach(function() {
        serverTbody.remove(newTr); //if you have added it
    })}})   

     describe("beforeEach function", function(){
        beforeEach(function () {
      // initialization logic
            paymentTotal = 200
            allPayments.length = 10
      
  
        it('should create table row element and pass to appendTd with calculated sum of all payment', function () {
            updateSummary();
            expect(tipPercentAvg = paymentTotal / Object.keys(allPayments).length).toEqual('20');
      
  
        afterEach(function() {
    
        summaryTds[0].innerHTML = 0;
        summaryTds[1].innerHTML = 0;
        summaryTds[2].innerHTML = 0;
        })})})});
    
    // teardown logic

  })