/*
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

define(['N/ui/message'], function (message) {
  function pageInit() {
    var msg = message.create({
      title: 'my title',
      message: 'this is my message',
      type: message.Type.CONFIRMATION,
    });
    msg.show({
      duration: 5000,
    });
  }
  return {
    pageInit: pageInit,
  };
});
