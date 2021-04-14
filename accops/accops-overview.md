---
id: accops-overview
title: Accops Single Sign On
sidebar_label: Overview
slug: '/accops/accops-overview'
---

Setting up the single sign-on (SSO) between Accops Identity Broker and Office 365, Salesforece, Gsuite and Multiple cloud based SaaS Applications. 

Accops supports both IdP (Identity Provider) and SP (Service Provider) initiated Single Sign On (SSO)

### IDP Initiated Single Sign on (SSO)

In IDP Initiated Login, SAML request is initiated from Accops Gateway.

* An Enduser first authenticates through Accops IDP by login into Accops Digital Workspace.

![img](../accops/idp-accops-login.png)

* After Successful Autentication, Enduser will be redirected to Accops Workspace Portal with assigned SaaS applications.

![img](../accops/idp-accops-apps.png)	

### SP Initiated Single Sign On (SSO)

In SP Initiated Login, SAML request is initiated by SaaS Applications.

* An Enduser tries to access SaaS Application (*For Example: Office 365 Portal*) by going to Service Provider Microsoft Online Portal ( https://office.com)

![img](../accops/sp-office-browse.png)	

* It will redirect to Accops Identity Provider Sign-in Page

![img](../accops/sp-office-redirect-idp.png)
	
* Enter Authentication details and click on Sign-In

![img](../accops/sp-office-idp-auth.png)
* Choose Multi Factor Authenication Method

![img](../accops/sp-office-idp-mfa.png)	

* Select Stay Signed in?

![img](../accops/sp-office-access.png)

* Here they can login with Accops login credentials and Access their SaaS Application.
![img](../accops/sp-office-portal.png)

## Help/Support

Please send a mail to support@accops.com for further help/Support.