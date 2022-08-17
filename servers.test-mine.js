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
    expect(tipAverage.toFixed(2).toEqual('10.55'));
    expect(appendTd(newTr, appendDeleteBtn)).toEquql("X");
  });

  afterEach(function() {
    serverTbody.remove(newTr);
    // teardown logic
  })})

 