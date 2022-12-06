Install :
    npm install

Use :
    npm run server :
        used for deployment

    npm start :
        used for debug

    api/air_quality : post request with LONGITUDE and LATITUDE
    example:
    url = "http://localhost:8000/api/air_quality"
    data = {"LATITUDE" :"48.856613", "LONGITUDE": "2.352222"}
    requests.post(url, data)


    api/date_lowest_air_quality : get request
    example:
    url = "http://localhost:8000/api/date_lowest_air_quality"
    requests.get(url)

CRON : 
    bind CRON to the CRON/script.py