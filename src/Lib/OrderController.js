const data = [
    {
        "OrderID": 10248,
        "CustomerID": "VINET",
        "OrderDate": "1996-07-04T00:00:00",
        "ShipName": "Vins et alcools Chevalier",
        "Shipper": 3,
        "ShipperName": "Federal Shipping",
        "ShipRegion": "",
        "ShipCountry": "France",
        "ShipCity": "Reims",
        "ShipPostalCode": "51100",
        "ShipAddress": "59 rue de l'Abbaye",
        "ShippedDate": "1996-07-16T00:00:00",
        "Employee": "Buchanan,Steven",
        "JobTitle": "Sales Manager",
        "Country": "France",
        "City": "Reims",
        "PostalCode": "51100",
        "Address": "59 rue de l'Abbaye"
    },
    {
        "OrderID": 10249,
        "CustomerID": "TOMSP",
        "OrderDate": "2022-10-05T00:00:00",
        "ShipName": "Toms Spezialitäten",
        "Shipper": 1,
        "ShipperName": "Speedy Express",
        "ShipRegion": "test",
        "ShipCountry": "Germany",
        "ShipCity": "Münster",
        "ShipPostalCode": "44087",
        "ShipAddress": "Luisenstr. 48",
        "ShippedDate": "1996-07-10T00:00:00",
        "Employee": "Suyama,Michael",
        "JobTitle": "Sales Representative",
        "Country": "Germany",
        "City": "Munster",
        "PostalCode": "44087",
        "Address": "Luisenstr. 48"
    },
    {
        "OrderID": 10250,
        "CustomerID": "HANAR",
        "OrderDate": "1996-07-08T00:00:00",
        "ShipName": "Hanari Carnes",
        "Shipper": 2,
        "ShipperName": "United Package",
        "ShipRegion": "RJ",
        "ShipCountry": "Brazil",
        "ShipCity": "Rio de Janeiro",
        "ShipPostalCode": "05454-876",
        "ShipAddress": "Rua do Paço, 67",
        "ShippedDate": "1996-07-12T00:00:00",
        "Employee": "Peacock,Margaret",
        "JobTitle": "Sales Representative",
        "Region": "RJ",
        "Country": "Brazil",
        "City": "Rio de Janeiro",
        "PostalCode": "05454-876",
        "Address": "Rua do Paco, 67"
    },
    {
        "OrderID": 10251,
        "CustomerID": "VICTE",
        "OrderDate": "1996-07-08T00:00:00",
        "ShipName": "Victuailles en stock",
        "Shipper": 1,
        "ShipperName": "Speedy Express",
        "ShipCountry": "France",
        "ShipCity": "Lyon",
        "ShipPostalCode": "69004",
        "ShipAddress": "2, rue du Commerce",
        "ShippedDate": "1996-07-15T00:00:00",
        "Employee": "Leverling,Janet",
        "JobTitle": "Sales Representative",
        "Country": "France",
        "City": "Lyon",
        "PostalCode": "69004",
        "Address": "2, rue du Commerce"
    },
    {
        "OrderID": 10252,
        "CustomerID": "SUPRD",
        "OrderDate": "1996-07-09T00:00:00",
        "ShipName": "Suprêmes délices",
        "Shipper": 2,
        "ShipperName": "United Package",
        "ShipCountry": "Belgium",
        "ShipCity": "Charleroi",
        "ShipPostalCode": "B-6000",
        "ShipAddress": "Boulevard Tirou, 255",
        "ShippedDate": "1996-07-11T00:00:00",
        "Employee": "Peacock,Margaret",
        "JobTitle": "Sales Representative",
        "Country": "Belgium",
        "City": "Charleroi",
        "PostalCode": "B-6000",
        "Address": "Boulevard Tirou, 255"
    },
    {
        "OrderID": 10253,
        "CustomerID": "HANAR",
        "OrderDate": "1996-07-10T00:00:00",
        "ShipName": "Hanari Carnes",
        "Shipper": 2,
        "ShipperName": "United Package",
        "ShipRegion": "RJ",
        "ShipCountry": "Brazil",
        "ShipCity": "Rio de Janeiro",
        "ShipPostalCode": "05454-876",
        "ShipAddress": "Rua do Paço, 67",
        "ShippedDate": "1996-07-16T00:00:00",
        "Employee": "Leverling,Janet",
        "JobTitle": "Sales Representative",
        "Region": "RJ",
        "Country": "Brazil",
        "City": "Rio de Janeiro",
        "PostalCode": "05454-876",
        "Address": "Rua do Paco, 67"
    },
    {
        "OrderID": 10254,
        "CustomerID": "CHOPS",
        "OrderDate": "1996-07-11T00:00:00",
        "ShipName": "Chop-suey Chinese",
        "Shipper": 2,
        "ShipperName": "United Package",
        "ShipCountry": "Switzerland",
        "ShipCity": "Bern",
        "ShipPostalCode": "3012",
        "ShipAddress": "Hauptstr. 31",
        "ShippedDate": "1996-07-23T00:00:00",
        "Employee": "Buchanan,Steven",
        "JobTitle": "Sales Manager",
        "Country": "Switzerland",
        "City": "Bern",
        "PostalCode": "3012",
        "Address": "Hauptstr. 29"
    },
    {
        "OrderID": 10255,
        "CustomerID": "RICSU",
        "OrderDate": "1996-07-12T00:00:00",
        "ShipName": "Richter Supermarkt",
        "Shipper": 3,
        "ShipperName": "Federal Shipping",
        "ShipCountry": "Switzerland",
        "ShipCity": "Genève",
        "ShipPostalCode": "1204",
        "ShipAddress": "Starenweg 5",
        "ShippedDate": "1996-07-15T00:00:00",
        "Employee": "Dodsworth,Anne",
        "JobTitle": "Sales Representative",
        "Country": "Switzerland",
        "City": "Geneve",
        "PostalCode": "1203",
        "Address": "Grenzacherweg 237"
    },
    {
        "OrderID": 10256,
        "CustomerID": "WELLI",
        "OrderDate": "1996-07-15T00:00:00",
        "ShipName": "Wellington Importadora",
        "Shipper": 2,
        "ShipperName": "United Package",
        "ShipRegion": "SP",
        "ShipCountry": "Brazil",
        "ShipCity": "Resende",
        "ShipPostalCode": "08737-363",
        "ShipAddress": "Rua do Mercado, 12",
        "ShippedDate": "1996-07-17T00:00:00",
        "Employee": "Leverling,Janet",
        "JobTitle": "Sales Representative",
        "Region": "SP",
        "Country": "Brazil",
        "City": "Resende",
        "PostalCode": "08737-363",
        "Address": "Rua do Mercado, 12"
    },
    {
        "OrderID": 10257,
        "CustomerID": "HILAA",
        "OrderDate": "1996-07-16T00:00:00",
        "ShipName": "HILARION-Abastos",
        "Shipper": 3,
        "ShipperName": "Federal Shipping",
        "ShipRegion": "Táchira",
        "ShipCountry": "Venezuela",
        "ShipCity": "San Cristóbal",
        "ShipPostalCode": "5022",
        "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
        "ShippedDate": "1996-07-22T00:00:00",
        "Employee": "Peacock,Margaret",
        "JobTitle": "Sales Representative",
        "Region": "Tachira",
        "Country": "Venezuela",
        "City": "San Cristobal",
        "PostalCode": "5022",
        "Address": "Carrera 22 con Ave. Carlos Soublette #8-35"
    }
]

const getOrders = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "body": data.map(item => (
                    {
                        OrderID: item.OrderID,
                        CustomerID: item.CustomerID,
                        OrderDate: item.OrderDate,
                        ShipName: item.ShipName,
                        ShippedDate: item.ShippedDate,
                        Employee: item.Employee
                    }
                ))
            })
        }, 1000)
    })
}

const getOrder = (OID) => {
    let temp = data.filter(item => item.OrderID === OID)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "body": temp.length > 0? temp[0] : {}
            })
        }, 1000)
    })
}

export { getOrders, getOrder }
