
'''

The central pillar of the authentication system, the User object. This is intended to be distributed in digested form to other applications called by the root.js script. It provides access tokens that can used within a time period. Authentication can happen in several ways, including:
1. Username and password
2. Key pair

User setup can be performed in a couple ways:
1. Email verification
2. Upload public key

'''

### Django

from django.db import models

###### User
class User(models.Model):

	### Properties
	
