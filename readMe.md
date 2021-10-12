# **Open World API**
Find the way to get informations about countries such as countries, cities, states, districts, currency and many more from the documentation below

**URLS**
- **url** = http://localhost:5000/ -> Is the url used when in development
- **url** = https://openworldapi.tech/ -> Is the url used when in production
  

# *Countries*
- GET -> <**url**>/countries/get/all
- GET -> <**url**>/countries/get/all/and/code

# *States*
- GET -> <**url**>/states/all/country/:country?reverse=false
  - :country = **name of country** -> ***REQUIRED***
  - reverse = **Sorting output** -> ***OPTIONAL***

# *Districts*
- GET -> <**url**>/districts/get/all/district/country/:country?reverse=false
  - :country = **name of country** -> ***REQUIRED***
  - reverse = **Sorting output** -> ***OPTIONAL***
  - For getting all the various districts in a country
- GET -> <**url**>/districts/get/all/districts/:country?reverse=false&state=Himachal
  - Description: For getting all districts in a state of a particular country
  - :country = **name of country** -> ***REQUIRED***
  - state = **Name of state in a country** -> ***REQUIRED***
  - reverse = **Sorting output** -> ***OPTIONAL***
  
# *Cities*
- GET -> <**url**>/cities/get/all/cities/country/:country?reverse=false
  - Description: For getting all cities in a country
  - :country = **name of country** -> ***REQUIRED***
  - reverse = **Sorting output** -> ***OPTIONAL***
- GET -> <**url**>/cities/get/all/cities/state/:country?reverse=false&state
  - Description: For getting all cities in a particular state of a country
  - :country = **name of country** -> ***REQUIRED***
  - state = **Name of state in a country** -> ***REQUIRED***
  - reverse = **Sorting output** -> ***OPTIONAL***