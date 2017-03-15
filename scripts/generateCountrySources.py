import json
import requests

newcountries = []
newcountries2 = []

with open('./countries.json', 'r') as f:
    countries = json.load(f)

for country in countries:
    payload = {'country': country['code'], 'language': 'en'}
    r = requests.get('https://newsapi.org/v1/sources', params=payload)
    try:
        sources = r.json()['sources']
        country['source'] = []
        country2 = {}
        country2['name'] = country['name']
        country2['code'] = country['code']
        country2['source'] = []
        for source in sources:
            country['source'].append(source['id'])
            country2['source'].append(source['id'])
        newcountries2.append(country2)
    except KeyError:
        print("skipped")

with open('newcountries.json', 'w') as outfile:
    json.dump(countries, outfile)

with open('newcountries2.json', 'w') as outfile:
    json.dump(newcountries2, outfile)
