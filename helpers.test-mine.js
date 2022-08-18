describe("helpers file", function(){
  
  beforeEach(function () {
   billAmtInput.value = '100';
   tipAmtInput.value = '20';
   submitPaymentInfo();
  });

  it('accepts pay and tip amounts and sums total from allPayments objects', function () {
     
    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(60);
   });

  it('accepts pay and tip amounts and sums total from allPayments objects', function () {
       
      billAmtInput.value = 200;
      tipAmtInput.value = 40;

      submitPaymentInfo();

      expect(sumPaymentTotal('billAmt')).toEqual(300);
   });
    
  it('accepts pay and tip amounts and sums total from allPayments objects', function () { 
      billAmtInput.value = 200;
      tipAmtInput.vale = 40;

      submitPaymentInfo();

      expect(sumPaymentTotal('tipPercent')).toEqual(20);
   });  

  it('should sum tip percent of a single tip', function(){
    expect(calculateTipPercent(100, 19)).toEqual(19);

   })

  it('should generate new td', function () {
      let newTr = document.createElement('tr');
       appendTd(newTr, 'trial');

    
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('trial');
   });


  it('should generate delete td and append to tr on appendDeleteBtn(tr, type', function(){
    let newTr = document.createElement('tr');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  })

    afterEach(function() {
      serverTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      total = 0;
      allPayment = {};
      paymentId = 0;
      billAmtInput.value = ' ';
      tipAmtInput.value = ' ';
   });
 });