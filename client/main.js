import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import oauth from 'oauth';

import './main.html';

Template.hello.events({
  'click button'(event, instance) {
    var _openbankConsumerKey = "ek0slvhj1khiqlesu1qiz05sitb3k1xzszunfx0x";
    var _openbankConsumerSecret = "izhpbpwf0c3brnodu2lasduksu4fhj35fr4vvdy1";

    var base_url = 'https://enbdg.openbankproject.com';
    var consumer = new oauth.OAuth(
      base_url + '/oauth/initiate',
      base_url + '/oauth/token',
      _openbankConsumerKey,
      _openbankConsumerSecret,
      '1.0',                             //rfc oauth 1.0, includes 1.0a
      'http://127.0.0.1:3000/callback',
      'HMAC-SHA1'
    );

    consumer.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results){
      if (error) {
        console.log("Error getting OAuth request token : ", error);
      } else {
        console.log(oauthToken);
        console.log(oauthTokenSecret);
      }
    });
  },
});
