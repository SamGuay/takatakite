const dotenv= require('dotenv');
require('dotenv').config();
module.exports = {
    "client_id": process.env.zclient_id,
    "client_secret": process.env.zclient_secret,
    "redirect_url": process.env.zredirect_url,
    "refresh_token": process.env.zrefresh_token,
    "iamurl": "accounts.zoho.com",
    "base_url": "www.zohoapis.com",
    "user_identifier": "zcrm_default_user",
    "mysql_module": "local",
    
  };