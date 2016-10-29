var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-of-house",
      "name": "Front of House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.246226548508364,
        "pitch": -0.027033980959247472,
        "fov": 1.3219928045128808
      },
      "linkHotspots": [
        {
          "yaw": 2.3961902596747944,
          "pitch": 0.001421455773252589,
          "rotation": 0,
          "target": "4-entrance-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9300814200516205,
          "pitch": -0.14737420015576141,
          "title": "House Address",
          "text": "£250,000<div><br></div><div>Description of the house and any other information about the property can be put here.</div><div><br></div><div>Features:</div><div><br></div><div>Amazing feature 1 here</div><div><br></div><div>Amazing feature 2 here</div><div><br></div>"
        }
      ]
    },
    {
      "id": "1-landing",
      "name": "Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.497330144045847,
        "pitch": 0.4680941757277157,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1172024575579727,
          "pitch": 0.6851457728967691,
          "rotation": 0,
          "target": "4-entrance-hall"
        },
        {
          "yaw": -0.2154457436438868,
          "pitch": 0.13611552155765594,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": 1.6425321387751977,
          "pitch": 0.2140897126624921,
          "rotation": 0,
          "target": "2-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0469239632445273,
        "pitch": 0.3230141227303278,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.957801022945679,
          "pitch": 0.23083484240673613,
          "rotation": 0,
          "target": "1-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2554740470253716,
        "pitch": 0.5188714960331158,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7560019356304934,
          "pitch": 0.3311678857137057,
          "rotation": 0,
          "target": "1-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-entrance-hall",
      "name": "Entrance Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.33140066118433964,
        "pitch": -0.11721893405113448,
        "fov": 1.4209321232227545
      },
      "linkHotspots": [
        {
          "yaw": -0.6010031368193296,
          "pitch": 0.1235968071405722,
          "rotation": 0,
          "target": "5-sitting-room"
        },
        {
          "yaw": 2.8371661511538058,
          "pitch": 0.24766112242954286,
          "rotation": 0,
          "target": "0-front-of-house"
        },
        {
          "yaw": -0.055822382142665106,
          "pitch": -0.6427167965808138,
          "rotation": 0,
          "target": "1-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sitting-room",
      "name": "Sitting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9664271353637801,
        "pitch": 0.24601041043983862,
        "fov": 1.5380297814521808
      },
      "linkHotspots": [
        {
          "yaw": 0.7054933620203645,
          "pitch": 0.1505051460119926,
          "rotation": 12.566370614359176,
          "target": "4-entrance-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
