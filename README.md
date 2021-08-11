# Simple Twitter API
This is a simple API to get user tweets from twitter (using twitter-v2 library and fastify framework)

# Installation
To run this code we need to have node JS server and register to [Twitter developer website](https://developer.twitter.com/en/docs/twitter-api/early-access) to get API Key / Bearer Token.

This is the `.env.development` file setting :
```
BEARER_TOKEN= <<your token>>
PORT = <<your desired port>>
```
For the BEARER_TOKEN, we can get it from twitter Dev, after we initialize project and create an App in there. Then for the PORT env is our running server port, 


To run the server, enter to the directories and type :

`npm install`

after that run : 

`npm start`

it will run the app in the designated port.

## Endpoint Provided
There just one endpoint provided in this app :

**GET METHOD** 

`http://localhost:<PORT>/tweets?max_results=<MAX_RESULTS>&username=<USERNAME>`

`<PORT>` : your server port,

`<MAX_RESULTS>` : maximum tweets that want to be showed (default and minimum = 5)

`<USERNAME>` : twitter username

**Example :**

(parameter used : `/tweets?max_results=6&username=ChampionsLeague`)

**Result :**
```
{
    "data": [
        {
            "entities": {
                "hashtags": [
                    {
                        "start": 130,
                        "end": 134,
                        "tag": "UCL"
                    }
                ],
                "urls": [
                    {
                        "start": 135,
                        "end": 158,
                        "url": "https://t.co/L4Z7nUcIXl",
                        "expanded_url": "https://twitter.com/ChampionsLeague/status/1425398645491445763/photo/1",
                        "display_url": "pic.twitter.com/L4Z7nUcIXl"
                    }
                ],
                "annotations": [
                    {
                        "start": 0,
                        "end": 4,
                        "probability": 0.9703,
                        "type": "Person",
                        "normalized_text": "Messi"
                    },
                    {
                        "start": 12,
                        "end": 25,
                        "probability": 0.9797,
                        "type": "Person",
                        "normalized_text": "Marco Verratti"
                    }
                ]
            },
            "attachments": {
                "media_keys": [
                    "3_1425398282495434759"
                ]
            },
            "created_at": "2021-08-11T10:08:14.000Z",
            "id": "1425398645491445763",
            "text": "Messi: 🗣️ \"Marco Verratti has shown that he is a huge player, one of the best in the world in his position. He is a phenomenon.\"\n\n#UCL https://t.co/L4Z7nUcIXl"
        },
        {
            "entities": {
                "hashtags": [
                    {
                        "start": 167,
                        "end": 171,
                        "tag": "UCL"
                    }
                ],
                "urls": [
                    {
                        "start": 172,
                        "end": 195,
                        "url": "https://t.co/CRgspFcwiP",
                        "expanded_url": "https://twitter.com/ChampionsLeague/status/1425389192540999683/photo/1",
                        "display_url": "pic.twitter.com/CRgspFcwiP"
                    }
                ],
                "annotations": [
                    {
                        "start": 4,
                        "end": 8,
                        "probability": 0.8928,
                        "type": "Person",
                        "normalized_text": "Messi"
                    },
                    {
                        "start": 33,
                        "end": 38,
                        "probability": 0.9792,
                        "type": "Person",
                        "normalized_text": "Neymar"
                    },
                    {
                        "start": 42,
                        "end": 47,
                        "probability": 0.8016,
                        "type": "Person",
                        "normalized_text": "Mbappé"
                    }
                ]
            },
            "attachments": {
                "media_keys": [
                    "3_1425388943227465730"
                ]
            },
            "created_at": "2021-08-11T09:30:40.000Z",
            "id": "1425389192540999683",
            "text": "🗣️ Messi on lining up alongside Neymar &amp; Mbappé: \"It's really crazy and I'm really happy. The team is incredible. I'm going to be playing with the best players.\"\n\n#UCL https://t.co/CRgspFcwiP"
        },
        ...
    ]
}
```
