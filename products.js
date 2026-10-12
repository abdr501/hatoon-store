/* بيانات المنتجات — تم تصديرها من لوحة إدارة هتون */
const PRODUCTS = [
  {
    "id": "hatoon-01",
    "name": "عباية التطريز الأزرق الملكي",
    "category": "عبايات",
    "description": "عباية مخملية بتطريز أزرق وزخارف نباتية.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/embroidered-navy-velvet-abaya.png"
    ],
    "colors": [
      {
        "name": "أزرق داكن",
        "hex": "#17223c",
        "images": [
          "assets/embroidered-navy-velvet-abaya.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-02",
    "name": "قفطان أسود بتطريز فضي",
    "category": "عبايات",
    "description": "قفطان أسود بتطريز فضي بارز في منتصف القطعة والأكمام.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/elegant-black-embroidered-kaftan.png"
    ],
    "colors": [
      {
        "name": "أسود",
        "hex": "#171717",
        "images": [
          "assets/elegant-black-embroidered-kaftan.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-03",
    "name": "قفطان مخملي عنابي مطرّز",
    "category": "عبايات",
    "description": "قفطان مخملي بلون عنابي وتطريزات فاتحة موزعة على القطعة.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/burgundy-velvet-kaftan-01.png"
    ],
    "colors": [
      {
        "name": "عنابي",
        "hex": "#4b1727",
        "images": [
          "assets/burgundy-velvet-kaftan-01.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-04",
    "name": "عباية سوداء بتطريز هندسي",
    "category": "عبايات",
    "description": "عباية سوداء بتطريز هندسي فاتح على الصدر والأكمام.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/embroidered-black-velvet-abaya.png"
    ],
    "colors": [
      {
        "name": "أسود",
        "hex": "#151515",
        "images": [
          "assets/embroidered-black-velvet-abaya.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-05",
    "name": "قفطان مخملي بني مطرّز",
    "category": "عبايات",
    "description": "قفطان مخملي بني بتطريز زخرفي في منطقة الصدر.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/velvet-embroidered-kaftan-brown.png"
    ],
    "colors": [
      {
        "name": "بني",
        "hex": "#49352c",
        "images": [
          "assets/velvet-embroidered-kaftan-brown.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-06",
    "name": "عباية سوداء بتطريز ذهبي",
    "category": "عبايات",
    "description": "عباية سوداء بتطريز ذهبي حول الياقة والأكمام.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/elegant-black-embroidered-abaya.png"
    ],
    "colors": [
      {
        "name": "أسود",
        "hex": "#161616",
        "images": [
          "assets/elegant-black-embroidered-abaya.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-07",
    "name": "قفطان مخملي بتطريز فضي",
    "category": "عبايات",
    "description": "قفطان مخملي داكن بتطريز فضي موزع على الصدر والأكمام.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/embellished-velvet-kaftan.png"
    ],
    "colors": [
      {
        "name": "أسود مزرق",
        "hex": "#1d2230",
        "images": [
          "assets/embellished-velvet-kaftan.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-08",
    "name": "عباية مخملية بتطريز مزخرف",
    "category": "عبايات",
    "description": "عباية مخملية داكنة بتطريز مزخرف حول الياقة والصدر.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/velvet-abaya-ornate-embroidery.png"
    ],
    "colors": [
      {
        "name": "كحلي",
        "hex": "#172238",
        "images": [
          "assets/velvet-abaya-ornate-embroidery.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-09",
    "name": "قفطان عنابي بتطريز أمامي",
    "category": "عبايات",
    "description": "قفطان عنابي بتطريز أمامي فاتح وتصميم طويل.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/burgundy-velvet-kaftan-02.png"
    ],
    "colors": [
      {
        "name": "عنابي",
        "hex": "#59182b",
        "images": [
          "assets/burgundy-velvet-kaftan-02.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  },
  {
    "id": "hatoon-10",
    "name": "قفطان أحمر داكن بتطريز فضي",
    "category": "عبايات",
    "description": "قفطان أحمر داكن بتطريز فضي أمامي وأكمام مزخرفة.",
    "price": 0,
    "oldPrice": null,
    "isNew": false,
    "bestseller": false,
    "available": true,
    "hidden": false,
    "images": [
      "assets/burgundy-velvet-kaftan-03.png"
    ],
    "colors": [
      {
        "name": "أحمر داكن",
        "hex": "#76202b",
        "images": [
          "assets/burgundy-velvet-kaftan-03.png"
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "lengths": [
      "132",
      "137",
      "142",
      "147"
    ],
    "fabric": "يُحدد لاحقًا",
    "care": "يرجى اتباع تعليمات العناية المناسبة لنوع القماش.",
    "lengthUnit": "سم",
    "showLengths": true
  }
];
