'use strict';

/* Controllers */


myApp.controller('AppListCtrl', function ($scope) {
    $scope.items = [
        {'name': 'Lulu Guinness Cutout Lips ',
            'id':'1',
            'description': 'Famed for her witty accessories and handbags, Lulu Guinness looks to retro glamour with modern chic.',
            'shortDescription':'Outer: 100% Polyester, Lining: 100% Nylon',
            'categorie':'bath',
            'age':1,
            'priceSelect':121.43,
            'price':"€121.43"},
        {'name': 'NARS Audacious Lipstick',
            'id':'2',
            'description': 'Famed for her witty accessories and handbags, Lulu Guinness looks to retro glamour with modern chic.',
            'shortDescription':'Outer: 100% Polyester, Lining: 100% Nylon',
            'categorie':'body',
            'age':2,
            'priceSelect':122.43,
            'price':"€122.43"},
        {'name': 'Face Lace Mask',
            'id':'3',
            'description': 'Famed for her witty accessories and handbags, Lulu Guinness looks to retro glamour with modern chic.',
            'shortDescription':'Outer: 100% Polyester, Lining: 100% Nylon',
            'categorie':'body',
            'age':3,
            'priceSelect':22.43,
            'price':"€21.43"},
        {'name': 'Ciate Lashlights',
            'id':'4',
            'description': 'Famed for her witty accessories and handbags, Lulu Guinness looks to retro glamour with modern chic.',
            'shortDescription':'Outer: 100% Polyester, Lining: 100% Nylon',
            'categorie':'eyeLash',
            'age':4,
            'priceSelect':51.43,
            'price':"€51.43"},
        {'name': 'Cath Kidston Manicure Set',
            'id':'5',
            'description': 'Famed for her witty accessories and handbags, Lulu Guinness looks to retro glamour with modern chic.',
            'shortDescription':'Outer: 100% Polyester, Lining: 100% Nylon',
            'categorie':'bath',
            'age':5,
            'priceSelect':89.43,
            'price':"€89.43"},
        {'name': 'Painless Tattoo',
            'id':'6',
            'description': 'Famed for her witty accessories and handbags, Lulu Guinness looks to retro glamour with modern chic.',
            'shortDescription':'Outer: 100% Polyester, Lining: 100% Nylon',
            'categorie':'eyeShad',
            'age':6,
            'priceSelect':9.43,
            'price':"€9.43"}
    ];
    $scope.orderProp = 'age';
        });