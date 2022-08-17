describe("helpers file", function(){
  
    beforeEach(function () {
    // initialization logic
      allPayments = {'20': '10' }; 
     //unsure how to create an array to go in
    

  it('accepts pay and tip amounts and sums total from allPayments objects', function () {
      subPaymentTotal();
      let total = 0;

      for (let key in allPayments) {
        let payment = allPayments[key];
    
        total += Number(payment[type]);
      
    
      return total;
    
      expect(total += Number(payment[type])).toEqual(30);
      expect().toEqual();
    }});

  afterEach(function() {
      total = 0;
      allPayment = {};
    // teardown logic
    })})

  beforeEach(function () {
    // initialization logic
      billAmt = '100';
      tipAmt = '20';
    });

  it('expects a table row element, appends a newly created td element from the value', function () {
      calculateTipPercent();
    
      expect( Math.round(100 / (tipAmt / billAmt))).toEqual(20);
    });

  afterEach(function() {
      billAmt ="0";
      tipAmt = "0";
    });

  beforeEach(function () {
      value = '10' 
    });

  it('expects a table row element, appends a newly created td element from the value', function () {
      appendTd();
      for (let key in allServers) {
        let curServer = allServers[key];
    
        let newTr = document.createElement('tr');
        newTr.setAttribute('id', key);
        let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;
        let appendDeleteBtn = document.createElement('td');
  
      expect(newTd.innerText = value).toEqual(10);
    

  afterEach(function() {
      tr.remove(newTd);
    })}})})