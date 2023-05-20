/*
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
 *
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BrevoNode);
  }
}(this, function (expect, BrevoNode) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('UpdateBatchContactsContacts', function () {
      beforeEach(function () {
        instance = new BrevoNode.UpdateBatchContactsContacts();
      });

      it('should create an instance of UpdateBatchContactsContacts', function () {
        // TODO: update the code to test UpdateBatchContactsContacts
        expect(instance).to.be.a(BrevoNode.UpdateBatchContactsContacts);
      });

      it('should have the property email (base name: "email")', function () {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function () {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property sms (base name: "sms")', function () {
        // TODO: update the code to test the property sms
        expect(instance).to.have.property('sms');
        // expect(instance.sms).to.be(expectedValueLiteral);
      });

      it('should have the property attributes (base name: "attributes")', function () {
        // TODO: update the code to test the property attributes
        expect(instance).to.have.property('attributes');
        // expect(instance.attributes).to.be(expectedValueLiteral);
      });

      it('should have the property emailBlacklisted (base name: "emailBlacklisted")', function () {
        // TODO: update the code to test the property emailBlacklisted
        expect(instance).to.have.property('emailBlacklisted');
        // expect(instance.emailBlacklisted).to.be(expectedValueLiteral);
      });

      it('should have the property smsBlacklisted (base name: "smsBlacklisted")', function () {
        // TODO: update the code to test the property smsBlacklisted
        expect(instance).to.have.property('smsBlacklisted');
        // expect(instance.smsBlacklisted).to.be(expectedValueLiteral);
      });

      it('should have the property listIds (base name: "listIds")', function () {
        // TODO: update the code to test the property listIds
        expect(instance).to.have.property('listIds');
        // expect(instance.listIds).to.be(expectedValueLiteral);
      });

      it('should have the property unlinkListIds (base name: "unlinkListIds")', function () {
        // TODO: update the code to test the property unlinkListIds
        expect(instance).to.have.property('unlinkListIds');
        // expect(instance.unlinkListIds).to.be(expectedValueLiteral);
      });

      it('should have the property smtpBlacklistSender (base name: "smtpBlacklistSender")', function () {
        // TODO: update the code to test the property smtpBlacklistSender
        expect(instance).to.have.property('smtpBlacklistSender');
        // expect(instance.smtpBlacklistSender).to.be(expectedValueLiteral);
      });

    });
  });

}));