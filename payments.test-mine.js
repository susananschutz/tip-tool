describe("payments functons", function() {
  
    BeforeEach(function () {
    // initialization logic
    billAmt = "100"
    tipAmt = "15"
    });
  
    it('should add a curPayment object to allPayments, update html and reset input values', function () {
      submitPaymentInfo();
      allPayments['payment' + paymentId] = curPayment;
  
      expect(curPayment).toEqual('15');
    
    });
  
    afterEach(function() {
      
      // teardown logic
    }); 
    BeforeEach(function () {
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
          { billAmt: 100,
          tipAmt: 15,
          tipPercent: 15});
      
    });
  
    afterEach(function() {
       billAmtn = "0";
       tipAmt = "0";
    });
  
      BeforeEach(function () {
      // initialization logic
      // only creating an element and appending it 
    });
  
      it('Create table row element and pass to appendTd with input value', function () {
        appendPaymentTable();
      
      expect(getElementById('payment+(paymentID)').value).toEqual(billAmt, tipAmt, '%');
      expect().toEqual();
    });
  
      afterEach(function() {
        serverTbody.remove(newTr); //if you have added it
      // teardown logic
    }); 
      BeforeEach(function () {
      // initialization logic
      paymentTotal = 200
      allPayments.length = 10
      });
  
    it('should create table row element and pass to appendTd with calculated sum of all payment', function () {
      updateSummary();
      expect(tipPercentAvg = paymentTotal / Object.keys(allPayments).length).toEqual(20);
      });
  
    afterEach(function() {
    
      summaryTds[0].innerHTML = 0;
      summaryTds[1].innerHTML = 0;
      summaryTds[2].innerHTML = 0;
      }
      // teardown logic
    )});
  
  