import requests
url = "http://localhost:8000/api/date_lowest_air_quality"
x = requests.get(url)

print(x.json())