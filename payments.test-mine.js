describe("payments functons", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100
    tipAmtInputValue = 20
    
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', function(){
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(2);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);

  });

  it('should not add a new payment with empty input', function(){
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
  });
  
  it('should update paymentTable on appendPaymentTable', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    
    appendPaymentTable(curPayment);
    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$100');
    expect(curTdList[1].innerText).toEqual('$20');
    expect(curTdList[2].innerText).toEqual('%20');
    expect(curTdList[3].innerText).toEqual('X');

    });
  it('should create anew payment', function () {
    let expectedPayment = {
     billAmt: '100',
     tipAmt: '20',
     tipPercent: 20,
      }
      expect(createCurPayment()).toEqual(expectedPayment);
  });
  
  it('should not create a payment with no input', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();    
    expect(curPayment).toEqual(undefined);
  });
  
  afterEach(function() {
    billAmtInput.value = "0";
    tipAmtInput.value = "0";
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
    });
 });
    

  