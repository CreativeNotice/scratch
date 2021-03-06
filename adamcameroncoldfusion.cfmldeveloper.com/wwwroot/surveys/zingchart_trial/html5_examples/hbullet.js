var gdata = {
"graphset":[
    {
        "type":"hbullet",
        "background-image":"images/retro_bg.jpg",
        "plotarea":{
            "margin":"100px 40px 60px 60px"
        },
        "title":{
            "text":"TOP DOWNLOADED ARTIST",
            "font-family":"Trebuchet MS",
            "font-size":"28px",
            "font-color":"#93B7C5",
            "background-color":-1,
            "margin-top":"15px",
            "margin-right":"15px",
            "margin-bottom":"10px",
            "text-align":"right"
        },
        "legend":{
            "layout":"1x4",
            "position":"55% 15%",
            "width":"400px",
            "height":"40px",
            "visible":true,
            "background-color":-1,
            "border-width":"0px",
            "item":{
                "font-family":"Trebuchet MS",
                "font-weight":"bold",
                "font-size":11,
                "font-color":"#307C70",
                "padding":"-2 2",
                "shadow":0
            }
        },
        "scale-y":{
            "values":"0:100:20",
            "line-width":"3px",
            "alpha":1,
            "line-color":"#307C70",
            "format":"%v",
            "line-style":"solid",
            "guide":{
                "line-color":"#ECC43B",
                "alpha":"1",
                "line-style":"dashed"
            },
            "tick":{
                "line-width":"3px",
                "line-color":"#307C70",
                "alpha":"1"
            },
            "item":{
                "font-size":"12px",
                "font-color":"#307C70",
                "font-weight":"bold",
                "font-family":"Trebuchet MS"
            },
            "minor-guide":{
                "visible":false
            }
        },
        "scale-x":{
            "values":["Jan","Feb","Mar","Apr","May","Jun"],
            "line-color":"#307C70",
            "line-style":"solid",
            "line-width":"3px",
            "guide":{
                "line-color":"#ECC43B",
                "line-style":"dashed",
                "alpha":"1"
            },
            "tick":{
                "line-width":"3px",
                "line-color":"#307C70",
                "alpha":"1"
            },
            "item":{
                "font-size":"12px",
                "font-color":"#307C70",
                "font-weight":"bold",
                "font-family":"Trebuchet MS"
            },
            "minor-guide":{
                "visible":false
            }
        },
        "plot":{
            "alpha":1,
            "tooltip-text":"Estimated:%g<br>%v Downloaded",
            "goal":{
                "width":5
            }
        },
        "series":[
            {
                "values":[69,71,67,87,85,67],
                "goals":[85,77,87,53,70,60],
                "line-color":"#6FA3C1",
                "background-color":"#6FA3C1",
                "text":"Rihanna"
            },
            {
                "values":[90,55,64,65,87,90],
                "goals":[53,61,53,75,80,76],
                "line-color":"#F79434",
                "background-color":"#F79434",
                "text":"P!nk"
            },
            {
                "values":[61,70,88,62,85,67],
                "goals":[81,64,79,86,84,78],
                "line-color":"#7A6652",
                "background-color":"#7A6652",
                "text":"LadyGaga"
            }
        ]
    }
]
}