describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
  
    serverNameInput.value = '';
    // teardown logic
  });

  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    tipAmtInput = '10.55';
  });

  it('Create table row element and pass to appendTd function with input value', function () {
    updateServerTable();
    
    expect(appendTd(newTr, curServer.serverName)).toEqual('Alice');
    expect(tipAverage.toFixed(2).toEqual('10.55');
  });

  afterEach(function() {
    serverTbody.remove(newTr);
    // teardown logic
  });

 describe("payments functons", function)() {}
  });
  BeforeEach(function () {
  // initialization logic
    
  });

  it('should add a curPayment object to allPayments, update html and reset input values', function () {
    submitPaymentInfo();
  
    expect().toEqual('');
    expect().toEqual('');
  });

  afterEach(function() {
    
    // teardown logic
  }); 
  BeforeEach(function () {
    // initialization logic
    billAmt =
    tipAmt =
  });

  it('should return undefined with negative or empty inputs', function () {
    createCurPayment();
    
    expect(return {
      billAmt: billAmt,
      tipAmt: tipAmt,
      tipPercent: calculateTipPercent(billAmt, tipAmt)).toEqual();
    
  });

  afterEach(function() {
    
  });

    BeforeEach(function () {
    // initialization logic
    // only creating an element and appending it 
  });

    it('Create table row element and pass to appendTd with input value', function () {
      appendPaymentTable();
    
    expect().toEqual();
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
  );

describe("helpers file", function(){})
    BeforeEach(function () {
    // initialization logic
     allPayments ={ } 
     //unsure how to create an array to go in
    });

  it('accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects', function () {
    subPaymentTotal();
    
    expect(total += Number(payment[type])).toEqual();
    expect().toEqual();
  });

  afterEach(function() {
    total = 0;
    // teardown logic
  });

  BeforeEach(function () {
    // initialization logic
      billAmt = '100';
      tipAmt = '20';
    });

  it('expects a table row element, appends a newly created td element from the value', function () {
    calculateTipPercent();
    
    expect( Math.round(100 / (billAmt / tipAmt))).toEqual('20');
  });

  afterEach(function() {
  });

  BeforeEach(function () {
    value = '10' 
    });

  it('expects a table row element, appends a newly created td element from the value', function () {
    appendTd();
    expect(newTd.innerText = value).toEqual(10);
  });

  afterEach(function() {
    tr.remove(newTd);
  }
  );