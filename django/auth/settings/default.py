
### Import common
from auth.settings.common import *


########## DATABASE CONFIGURATION
DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.sqlite3',
		'NAME': 'db.sqlite3',
	}
}
########## END DATABASE CONFIGURATION