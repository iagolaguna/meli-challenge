import { parseSearchResults } from './parseSearchResults';

describe('parseMLResults', () => {
  it('test1', () => {
    const result = parseSearchResults(data.results, data.available_filters);
    expect(result).toBe(undefined);
  })
})

const data = {
  "results": [
    {
      "id": "MLA925186591",
      "site_id": "MLA",
      "title": "Samsung Galaxy S20 Fe 128 Gb Cloud Navy 6 Gb Ram",
      "seller": {
        "id": 82521850,
        "permalink": "http://perfil.mercadolibre.com.ar/BAIRESIT",
        "registration_date": "2005-07-14T11:07:26.000-04:00",
        "car_dealer": false,
        "real_estate_agency": false,
        "tags": [
          "normal",
          "user_info_verified",
          "eshop",
          "mshops",
          "medium_seller",
          "messages_as_seller",
          "messages_as_buyer"
        ],
        "eshop": {
          "nick_name": "BAIRESIT",
          "eshop_rubro": null,
          "eshop_id": 121126,
          "eshop_locations": [],
          "site_id": "MLA",
          "eshop_logo_url": "http://resources.mlstatic.com/eshops/82521850.jpg",
          "eshop_status_id": 1,
          "seller": 82521850,
          "eshop_experience": 0
        },
        "seller_reputation": {
          "transactions": {
            "total": 39512,
            "canceled": 2203,
            "period": "historic",
            "ratings": {
              "negative": 0.05,
              "positive": 0.93,
              "neutral": 0.02
            },
            "completed": 37309
          },
          "power_seller_status": "platinum",
          "metrics": {
            "claims": {
              "rate": 0.0086,
              "value": 88,
              "period": "60 days"
            },
            "delayed_handling_time": {
              "rate": 0.018,
              "value": 175,
              "period": "60 days"
            },
            "sales": {
              "period": "60 days",
              "completed": 9654
            },
            "cancellations": {
              "rate": 3.0E-4,
              "value": 4,
              "period": "60 days"
            }
          },
          "level_id": "5_green"
        }
      },
      "price": 69999,
      "prices": {
        "id": "MLA925186591",
        "prices": [
          {
            "id": "1",
            "type": "standard",
            "conditions": {
              "context_restrictions": [],
              "start_time": null,
              "end_time": null,
              "eligible": true
            },
            "amount": 81999,
            "regular_amount": null,
            "currency_id": "ARS",
            "exchange_rate_context": "DEFAULT",
            "metadata": {},
            "last_updated": "2021-06-11T22:19:20Z"
          },
          {
            "id": "4",
            "type": "promotion",
            "conditions": {
              "context_restrictions": [],
              "start_time": "2021-06-07T02:30:00Z",
              "end_time": "2021-06-21T02:59:00Z",
              "eligible": true
            },
            "amount": 69999,
            "regular_amount": 81999,
            "currency_id": "ARS",
            "exchange_rate_context": "DEFAULT",
            "metadata": {
              "campaign_id": "MLA6179",
              "promotion_id": "MLA6179",
              "promotion_type": "campaign"
            },
            "last_updated": "2021-06-11T22:21:22Z"
          }
        ],
        "presentation": {
          "display_currency": "ARS"
        },
        "payment_method_prices": [],
        "reference_prices": [],
        "purchase_discounts": []
      },
      "sale_price": null,
      "currency_id": "ARS",
      "available_quantity": 66,
      "sold_quantity": 8,
      "buying_mode": "buy_it_now",
      "listing_type_id": "gold_pro",
      "stop_time": "2041-06-07T01:27:59.000Z",
      "condition": "new",
      "permalink": "https://www.mercadolibre.com.ar/samsung-galaxy-s20-fe-128-gb-cloud-navy-6-gb-ram/p/MLA16211370",
      "thumbnail": "http://http2.mlstatic.com/D_929199-MLA44179557291_112020-I.jpg",
      "thumbnail_id": "929199-MLA44179557291_112020",
      "accepts_mercadopago": true,
      "installments": {
        "quantity": 9,
        "amount": 7777.67,
        "rate": 0,
        "currency_id": "ARS"
      },
      "address": {
        "state_id": "AR-C",
        "state_name": "Capital Federal",
        "city_id": null,
        "city_name": "C.A.B.A"
      },
      "shipping": {
        "free_shipping": true,
        "mode": "me2",
        "tags": [
          "self_service_in",
          "fbm_in_process",
          "mandatory_free_shipping"
        ],
        "logistic_type": "cross_docking",
        "store_pick_up": false
      },
      "seller_address": {
        "id": "",
        "comment": "",
        "address_line": "",
        "zip_code": "",
        "country": {
          "id": "AR",
          "name": "Argentina"
        },
        "state": {
          "id": "AR-C",
          "name": "Capital Federal"
        },
        "city": {
          "id": null,
          "name": "C.A.B.A"
        },
        "latitude": "",
        "longitude": ""
      },
      "attributes": [
        {
          "id": "BRAND",
          "name": "Marca",
          "value_name": "Samsung",
          "value_struct": null,
          "values": [
            {
              "source": 1,
              "id": "206",
              "name": "Samsung",
              "struct": null
            }
          ],
          "attribute_group_name": "Otros",
          "source": 1,
          "value_id": "206",
          "attribute_group_id": "OTHERS"
        },
        {
          "id": "GPU_MODEL",
          "value_id": "8202445",
          "value_name": "Mali-G77 MP11",
          "values": [
            {
              "id": "8202445",
              "name": "Mali-G77 MP11",
              "struct": null,
              "source": 1
            }
          ],
          "attribute_group_id": "OTHERS",
          "attribute_group_name": "Otros",
          "name": "Modelo de GPU",
          "value_struct": null,
          "source": 1
        },
        {
          "attribute_group_id": "OTHERS",
          "attribute_group_name": "Otros",
          "source": 6808261514773724,
          "id": "ITEM_CONDITION",
          "value_id": "2230284",
          "value_name": "Nuevo",
          "value_struct": null,
          "values": [
            {
              "name": "Nuevo",
              "struct": null,
              "source": 6808261514773724,
              "id": "2230284"
            }
          ],
          "name": "Condición del ítem"
        },
        {
          "attribute_group_name": "Otros",
          "id": "LINE",
          "name": "Línea",
          "value_id": "249991",
          "value_name": "Galaxy S",
          "attribute_group_id": "OTHERS",
          "value_struct": null,
          "values": [
            {
              "name": "Galaxy S",
              "struct": null,
              "source": 1,
              "id": "249991"
            }
          ],
          "source": 1
        },
        {
          "id": "MODEL",
          "name": "Modelo",
          "value_struct": null,
          "values": [
            {
              "name": "S20 FE",
              "struct": null,
              "source": 1,
              "id": "9062754"
            }
          ],
          "attribute_group_id": "OTHERS",
          "attribute_group_name": "Otros",
          "value_id": "9062754",
          "value_name": "S20 FE",
          "source": 1
        },
        {
          "id": "PROCESSOR_MODEL",
          "value_struct": null,
          "attribute_group_id": "OTHERS",
          "attribute_group_name": "Otros",
          "name": "Modelo del procesador",
          "value_id": "8202439",
          "value_name": "Exynos 990",
          "values": [
            {
              "id": "8202439",
              "name": "Exynos 990",
              "struct": null,
              "source": 1
            }
          ],
          "source": 1
        },
        {
          "attribute_group_name": "Otros",
          "value_id": "1365",
          "value_name": "190 g",
          "values": [
            {
              "id": "1365",
              "name": "190 g",
              "struct": {
                "number": 190,
                "unit": "g"
              },
              "source": 1
            }
          ],
          "attribute_group_id": "OTHERS",
          "id": "WEIGHT",
          "name": "Peso",
          "value_struct": {
            "number": 190,
            "unit": "g"
          },
          "source": 1
        }
      ],
      "differential_pricing": {
        "id": 35713248
      },
      "original_price": 81999,
      "category_id": "MLA1055",
      "official_store_id": null,
      "domain_id": "MLA-CELLPHONES",
      "catalog_product_id": "MLA16211370",
      "tags": [
        "good_quality_thumbnail",
        "extended_warranty_eligible",
        "good_quality_picture",
        "immediate_payment",
        "shipping_guaranteed"
      ],
      "catalog_listing": true,
      "use_thumbnail_id": true,
      "order_backend": 1
    }
  ],
  "available_filters": [
    {
      "id": "category",
      "name": "Categorías",
      "type": "text",
      "values": [
        {
          "id": "MLA1574",
          "name": "Hogar, Muebles y Jardín",
          "results": 32748
        },
        {
          "id": "MLA1051",
          "name": "Celulares y Teléfonos",
          "results": 72634
        },
        {
          "id": "MLA1743",
          "name": "Autos, Motos y Otros",
          "results": 6336
        },
        {
          "id": "MLA412445",
          "name": "Libros",
          "results": 293832
        },
        {
          "id": "MLA109042",
          "name": "Remeras, Musculosas y Chombas",
          "results": 218595
        },
        {
          "id": "MLA1747",
          "name": "Repuestos Autos y Camionetas",
          "results": 187704
        },
        {
          "id": "MLA455528",
          "name": "Abrigos",
          "results": 79202
        },
        {
          "id": "MLA1276",
          "name": "Deportes y Fitness",
          "results": 59410
        },
        {
          "id": "MLA1168",
          "name": "Música, Películas y Series",
          "results": 27456
        },
        {
          "id": "MLA1132",
          "name": "Juegos y Juguetes",
          "results": 26400
        },
        {
          "id": "MLA1648",
          "name": "Computación",
          "results": 25886
        },
        {
          "id": "MLA1384",
          "name": "Bebés",
          "results": 23496
        },
        {
          "id": "MLA109278",
          "name": "Ropa Interior y de Dormir",
          "results": 20597
        },
        {
          "id": "MLA373770",
          "name": "Vestidos",
          "results": 13728
        },
        {
          "id": "MLA109282",
          "name": "Pantalones, Jeans y Joggings",
          "results": 13467
        },
        {
          "id": "MLA1499",
          "name": "Industrias y Oficinas",
          "results": 12677
        },
        {
          "id": "MLA1000",
          "name": "Electrónica, Audio y Video",
          "results": 12672
        },
        {
          "id": "MLA1144",
          "name": "Consolas y Videojuegos",
          "results": 11617
        },
        {
          "id": "MLA1771",
          "name": "Repuestos Motos y Cuatriciclos",
          "results": 11352
        },
        {
          "id": "MLA417218",
          "name": "Camisas",
          "results": 11088
        },
        {
          "id": "MLA1182",
          "name": "Instrumentos Musicales",
          "results": 10560
        },
        {
          "id": "MLA1367",
          "name": "Antigüedades y Colecciones",
          "results": 9768
        },
        {
          "id": "MLA4711",
          "name": "Acc. para Motos y Cuatriciclos",
          "results": 9505
        },
        {
          "id": "MLA109276",
          "name": "Bermudas y Shorts",
          "results": 8712
        },
        {
          "id": "MLA1246",
          "name": "Belleza y Cuidado Personal",
          "results": 8184
        },
        {
          "id": "MLA1403",
          "name": "Alimentos y Bebidas",
          "results": 7657
        },
        {
          "id": "MLA407134",
          "name": "Herramientas",
          "results": 7393
        },
        {
          "id": "MLA6520",
          "name": "Accesorios de Auto y Camioneta",
          "results": 6864
        },
        {
          "id": "MLA1500",
          "name": "Construcción",
          "results": 6864
        },
        {
          "id": "MLA5726",
          "name": "Electrodomésticos y Aires Ac.",
          "results": 6600
        },
        {
          "id": "MLA430281",
          "name": "Trajes de Baño",
          "results": 6600
        },
        {
          "id": "MLA409431",
          "name": "Salud y Equipamiento Médico",
          "results": 5813
        },
        {
          "id": "MLA109026",
          "name": "Calzado",
          "results": 5808
        },
        {
          "id": "MLA1039",
          "name": "Cámaras y Accesorios",
          "results": 5808
        },
        {
          "id": "MLA373771",
          "name": "Polleras",
          "results": 5280
        },
        {
          "id": "MLA110761",
          "name": "Equipaje, Bolsos y Carteras",
          "results": 4752
        },
        {
          "id": "MLA400928",
          "name": "Neumáticos",
          "results": 4488
        },
        {
          "id": "MLA1071",
          "name": "Animales y Mascotas",
          "results": 4225
        },
        {
          "id": "MLA95955",
          "name": "Calzas",
          "results": 4225
        },
        {
          "id": "MLA1368",
          "name": "Arte, Librería y Mercería",
          "results": 3960
        },
        {
          "id": "MLA12554",
          "name": "Indumentaria Laboral y Escolar",
          "results": 3960
        },
        {
          "id": "MLA4589",
          "name": "Tuning",
          "results": 3699
        },
        {
          "id": "MLA402999",
          "name": "Performance",
          "results": 3696
        },
        {
          "id": "MLA1955",
          "name": "Revistas",
          "results": 3432
        },
        {
          "id": "MLA3937",
          "name": "Joyas y Relojes",
          "results": 3169
        },
        {
          "id": "MLA3114",
          "name": "Accesorios de Moda",
          "results": 3168
        },
        {
          "id": "MLA417226",
          "name": "Blusas",
          "results": 3168
        },
        {
          "id": "MLA1459",
          "name": "Inmuebles",
          "results": 3168
        },
        {
          "id": "MLA3043",
          "name": "Comics e Historietas",
          "results": 1584
        },
        {
          "id": "MLA109254",
          "name": "Enteritos",
          "results": 1584
        },
        {
          "id": "MLA9304",
          "name": "Souvenirs, Cotillón y Fiestas",
          "results": 1584
        },
        {
          "id": "MLA419936",
          "name": "Repuestos de Línea Pesada",
          "results": 1320
        },
        {
          "id": "MLA86080",
          "name": "Seguridad Vehicular",
          "results": 1320
        },
        {
          "id": "MLA109089",
          "name": "Trajes",
          "results": 1320
        },
        {
          "id": "MLA3381",
          "name": "Audio para Vehículos",
          "results": 792
        },
        {
          "id": "MLA86838",
          "name": "Limpieza de Vehículos",
          "results": 792
        },
        {
          "id": "MLA86360",
          "name": "Accesorios para Camiones",
          "results": 528
        },
        {
          "id": "MLA413460",
          "name": "Lotes de Ropa",
          "results": 528
        },
        {
          "id": "MLA377674",
          "name": "Servicio Programado",
          "results": 528
        },
        {
          "id": "MLA417044",
          "name": "Acc. y Repuestos Náuticos",
          "results": 264
        },
        {
          "id": "MLA433385",
          "name": "Catálogos",
          "results": 264
        },
        {
          "id": "MLA6537",
          "name": "Llantas",
          "results": 264
        },
        {
          "id": "MLA8531",
          "name": "Navegadores GPS",
          "results": 264
        },
        {
          "id": "MLA1227",
          "name": "Otros",
          "results": 8184
        },
        {
          "id": "MLA1953",
          "name": "Otras categorías",
          "results": 1851
        }
      ]
    },
    {
      "id": "official_store",
      "name": "Tiendas oficiales",
      "type": "text",
      "values": [
        {
          "id": "all",
          "name": "Todas las tiendas oficiales",
          "results": 46741
        },
        {
          "id": "1550",
          "name": "Samsung",
          "results": 268
        },
        {
          "id": "2073",
          "name": "MIZU",
          "results": 266
        },
        {
          "id": "945",
          "name": "Gadnic",
          "results": 265
        },
        {
          "id": "1098",
          "name": "Riera Golf",
          "results": 1
        },
        {
          "id": "1825",
          "name": "Klatter",
          "results": 1
        },
        {
          "id": "1859",
          "name": "Farmacias Selma",
          "results": 1
        },
        {
          "id": "1938",
          "name": "Mercado Libre Electronica",
          "results": 1
        },
        {
          "id": "2176",
          "name": "Natures Bounty",
          "results": 1
        },
        {
          "id": "925",
          "name": "Mercado Pago",
          "results": 1
        }
      ]
    },
    {
      "id": "discount",
      "name": "Descuentos",
      "type": "range",
      "values": [
        {
          "id": "5-100",
          "name": "Desde 5% OFF",
          "results": 42000
        },
        {
          "id": "10-100",
          "name": "Desde 10% OFF",
          "results": 26158
        },
        {
          "id": "15-100",
          "name": "Desde 15% OFF",
          "results": 21398
        },
        {
          "id": "20-100",
          "name": "Desde 20% OFF",
          "results": 7667
        },
        {
          "id": "25-100",
          "name": "Desde 25% OFF",
          "results": 5290
        },
        {
          "id": "30-100",
          "name": "Desde 30% OFF",
          "results": 2913
        }
      ]
    },
    {
      "id": "state",
      "name": "Ubicación",
      "type": "text",
      "values": [
        {
          "id": "TUxBUENBUGw3M2E1",
          "name": "Capital Federal",
          "results": 533583
        },
        {
          "id": "TUxBUEdSQWU4ZDkz",
          "name": "Bs.As. G.B.A. Norte",
          "results": 301493
        },
        {
          "id": "TUxBUEdSQWVmNTVm",
          "name": "Bs.As. G.B.A. Oeste",
          "results": 139441
        },
        {
          "id": "TUxBUEdSQXJlMDNm",
          "name": "Bs.As. G.B.A. Sur",
          "results": 132002
        },
        {
          "id": "TUxBUFNBTmU5Nzk2",
          "name": "Santa Fe",
          "results": 54913
        },
        {
          "id": "TUxBUENPUmFkZGIw",
          "name": "Córdoba",
          "results": 53330
        },
        {
          "id": "TUxBUFpPTmFpbnRl",
          "name": "Buenos Aires Interior",
          "results": 50424
        },
        {
          "id": "TUxBUE1FTmE5OWQ4",
          "name": "Mendoza",
          "results": 11352
        },
        {
          "id": "TUxBUENPU2ExMmFkMw",
          "name": "Bs.As. Costa Atlántica",
          "results": 10824
        },
        {
          "id": "TUxBUFRVQ244NmM3",
          "name": "Tucumán",
          "results": 7656
        },
        {
          "id": "TUxBUENIVXQxNDM1MQ",
          "name": "Chubut",
          "results": 4752
        },
        {
          "id": "TUxBUFNBTm9lOTlk",
          "name": "Santiago del Estero",
          "results": 3696
        },
        {
          "id": "TUxBUE1JU3MzNjIx",
          "name": "Misiones",
          "results": 3170
        },
        {
          "id": "TUxBUEVOVHMzNTdm",
          "name": "Entre Ríos",
          "results": 3168
        },
        {
          "id": "TUxBUENPUnM5MjI0",
          "name": "Corrientes",
          "results": 2904
        },
        {
          "id": "TUxBUFLNT29iZmZm",
          "name": "Río Negro",
          "results": 2904
        },
        {
          "id": "TUxBUE5FVW4xMzMzNQ",
          "name": "Neuquén",
          "results": 2640
        },
        {
          "id": "TUxBUENIQW8xMTNhOA",
          "name": "Chaco",
          "results": 2640
        },
        {
          "id": "TUxBUFNBTGFjMTJi",
          "name": "Salta",
          "results": 2376
        },
        {
          "id": "TUxBUExBWmE1OWMy",
          "name": "La Pampa",
          "results": 2112
        },
        {
          "id": "TUxBUENBVGFiY2Fm",
          "name": "Catamarca",
          "results": 1584
        },
        {
          "id": "TUxBUFNBTnM0ZTcz",
          "name": "San Luis",
          "results": 1320
        },
        {
          "id": "TUxBUEpVSnk3YmUz",
          "name": "Jujuy",
          "results": 1056
        },
        {
          "id": "TUxBUFNBTm5lYjU4",
          "name": "San Juan",
          "results": 792
        },
        {
          "id": "TUxBUFNBTno3ZmY5",
          "name": "Santa Cruz",
          "results": 528
        },
        {
          "id": "TUxBUFRJRVoxM2M5YQ",
          "name": "Tierra del Fuego",
          "results": 264
        }
      ]
    },
    {
      "id": "price",
      "name": "Precio",
      "type": "range",
      "values": [
        {
          "id": "*-1500.0",
          "name": "Hasta $ 1.500",
          "results": 340854
        },
        {
          "id": "1500.0-5500.0",
          "name": "$1.500 a $5.500",
          "results": 538067
        },
        {
          "id": "5500.0-*",
          "name": "Más de $5.500",
          "results": 440915
        }
      ]
    },
    {
      "id": "accepts_mercadopago",
      "name": "Filtro por MercadoPago",
      "type": "boolean",
      "values": [
        {
          "id": "yes",
          "name": "Con MercadoPago",
          "results": 1316668
        }
      ]
    },
    {
      "id": "installments",
      "name": "Pago",
      "type": "text",
      "values": [
        {
          "id": "yes",
          "name": "En cuotas",
          "results": 1308220
        },
        {
          "id": "no_interest",
          "name": "Sin interés",
          "results": 132817
        }
      ]
    },
    {
      "id": "shipping",
      "name": "Tipo de entrega",
      "type": "text",
      "values": [
        {
          "id": "mercadoenvios",
          "name": "Con envío",
          "results": 1256740
        },
        {
          "id": "fulfillment",
          "name": "Full",
          "results": 5861
        }
      ]
    },
    {
      "id": "power_seller",
      "name": "Filtro por calidad de vendedores",
      "type": "boolean",
      "values": [
        {
          "id": "yes",
          "name": "Mejores vendedores",
          "results": 784961
        }
      ]
    },
    {
      "id": "since",
      "name": "Filtro por fecha de comienzo",
      "type": "text",
      "values": [
        {
          "id": "today",
          "name": "Publicados hoy",
          "results": 4752
        }
      ]
    },
    {
      "id": "has_video",
      "name": "Filtro por publicaciones con video",
      "type": "boolean",
      "values": [
        {
          "id": "yes",
          "name": "Publicaciones con video",
          "results": 84773
        }
      ]
    },
    {
      "id": "has_pictures",
      "name": "Filtro por publicaciones con imágenes",
      "type": "boolean",
      "values": [
        {
          "id": "yes",
          "name": "Con fotos",
          "results": 1319308
        }
      ]
    },
    {
      "id": "adult_content",
      "name": "Filtro de contenido adulto",
      "type": "boolean",
      "values": [
        {
          "id": "yes",
          "name": "Contenido adulto",
          "results": 816
        }
      ]
    },
    {
      "id": "all_payment_methods_discount",
      "name": "Descuentos para todos los medios de pago",
      "type": "range",
      "values": [
        {
          "id": "10-100",
          "name": "Desde 10% OFF",
          "results": 529
        },
        {
          "id": "15-100",
          "name": "Desde 15% OFF",
          "results": 264
        }
      ]
    },
    {
      "id": "price_campaign_id",
      "name": "Campaña",
      "type": "number",
      "values": [
        {
          "id": "MLA6179",
          "name": "MLA6179",
          "results": 6
        },
        {
          "id": "MLA6052",
          "name": "MLA6052",
          "results": 2
        },
        {
          "id": "MLA4186",
          "name": "MLA4186",
          "results": 1
        },
        {
          "id": "MLA3411",
          "name": "MLA3411",
          "results": 1
        },
        {
          "id": "P-MLA578001",
          "name": "P-MLA578001",
          "results": 1
        },
        {
          "id": "MLA2068",
          "name": "MLA2068",
          "results": 1
        }
      ]
    },
    {
      "id": "shipping_cost",
      "name": "Costo de envío",
      "type": "text",
      "values": [
        {
          "id": "free",
          "name": "Gratis",
          "results": 568701
        }
      ]
    },
    {
      "id": "ITEM_CONDITION",
      "name": "Condición",
      "type": "STRING",
      "values": [
        {
          "id": "2230284",
          "name": "Nuevo",
          "results": 1127976
        },
        {
          "id": "2230581",
          "name": "Usado",
          "results": 180342
        },
        {
          "id": "2230582",
          "name": "Reacondicionado",
          "results": 4128
        }
      ]
    }
  ]
}
