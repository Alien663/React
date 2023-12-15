const getSamples = (req) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "body": [
                    {
                        "TID": req.page * 6 + 1,
                        "TName": "Xenomorph",
                        "TDes": "I first show on plant:LV-426"
                    },
                    {
                        "TID": req.page * 6 + 2,
                        "TName": "Face hugger",
                        "TDes": "I will hold you up"
                    },
                    {
                        "TID": req.page * 6 + 3,
                        "TName": "Ormorph",
                        "TDes": "I'm just an egg"
                    },
                    {
                        "TID": req.page * 6 + 4,
                        "TName": "Drone",
                        "TDes": "I'm so poor"
                    },
                    {
                        "TID": req.page * 6 + 5,
                        "TName": "Queen",
                        "TDes": "I'm the king of the world"
                    }]
            })
        }, 1000)
    })
}

const getAppMenu = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "body": [
                    {
                        Name: "Menu 1",
                        Icon: "Speedometer2",
                        Children: [
                            {
                                Label: "List Item 1-1",
                                Link: "#hello",
                                Icon: "Person",
                            },
                            {
                                Label: "List Item 1-2",
                                Link: "#hello",
                                Icon: "Puzzle",
                            },
                            {
                                Label: "List Item 1-3",
                                Link: "#hello",
                                Icon: "Grid3x3",
                            },
                            {
                                Label: "List Item 1-4",
                                Link: "#hello",
                                Icon: "People",
                            },
                        ],
                    },
                    {
                        Name: "Menu 2",
                        Icon: "PcDisplay",
                        Children: [
                            {
                                Label: "List Item 2-1",
                                Link: "#hello",
                                Icon: "Laptop",
                            },
                        ],
                    },
                    {
                        Name: "Menu 3",
                        Icon: "PersonPlus",
                        Children: [
                            {
                                Label: "List Item 3-1",
                                Link: "#hello",
                                Icon: "Bell",
                            },
                            {
                                Label: "List Item 3-2",
                                Link: "#test7",
                                Icon: "Key",
                            },
                            {
                                Label: "List Item 3-3",
                                Link: "#hello",
                                Icon: "Lightning",
                            },
                        ],
                    },
                    {
                        Name: "Test",
                        Icon: "XDiamond",
                        Children: [
                            {
                                Label: "Sample",
                                Link: "/sample",
                                Icon: "LayoutWtf",
                            },
                            {
                                Label: "Form",
                                Link: "/sample/form",
                                Icon: "Table",
                            },
                            {
                                Label: "Steper",
                                Link: "/sample/steper",
                                Icon: "BarChartSteps",
                            },
                            {
                                Label: "Recursive Comp",
                                Link: "/sample/nested",
                                Icon: "Recycle",
                            },
                            {
                                Label: "Tags",
                                Link: "/sample/tags",
                                Icon: "Bookmark",
                            },
                        ],
                    },
                    {
                        Name: "Http Error",
                        Icon: "FileEarmarkXFill",
                        Children: [
                            {
                                Label: "403 Forbidden",
                                Link: "/test/permission",
                                Icon: "BugFill",
                            },
                            {
                                Label: "404 NotFound",
                                Link: "/Hello",
                                Icon: "CartXFill",
                            },
                            {
                                Label: "500 Server Error",
                                Link: "/error/500",
                                Icon: "ClipboardXFill",
                            },
                        ],
                    },
                ]
            })
        }, 500)
    })
}

export { getSamples, getAppMenu }