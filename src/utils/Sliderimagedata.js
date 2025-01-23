import React, {useEffect} from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconS from 'react-native-vector-icons/Entypo';
import Style from '../styles/CommonStyle/Style';
import images from '../images';
import IconR from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';

export const carouselItems = [
    {
        title: 'Avastin Pharmacy',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode="cover" source={images.Ningthty_eighty_img} />,
        bottomtext: 'When they arrived at the Pharmacy, Alex was packing',
        imagbottomtext: 'SET THEM NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Herceptin Pharmacy',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode="cover" source={images.Ningthty_eighty_img} />,
        bottomtext: 'We have a Pharmacy report from inner city Cleveland.',
        imagbottomtext: 'SET THEM NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'MabThera/Rituxan',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode='cover' source={images.Ningthty_eighty_img} />,
        bottomtext: 'We are going to take you to the Pharmacy.',
        imagbottomtext: 'SET THEM NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Covid Essentials',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode='cover' source={images.Ningthty_eighty_img} />,
        bottomtext: 'I myself will remain in Pharmacy at Ostrolenka till I recover.',
        imagbottomtext: 'SET THEM NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
];
export const MedicineCategoryHomeTab = [
    {
        "id": 1,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Baby Care',
    },
    {
        "id": 2,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Health & Nutrition',
    },
    {
        "id": 3,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Women Care',
    },
    {
        "id": 4,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Personal Care',
    },
    {
        "id": 5,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Ayurveda',
    },
    {
        "id": 6,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "text": 'Health Devices',
    },
    {
        "id": 7,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Home Essentials',
    },
    {
        "id": 8,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Apollo Life',
    },
    {
        "id": 9,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "text": 'Health Condition',
    },
    {
        "id": 10,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Covid Essentials',
    },
]
export const MegaMedicine = [
    {
        "id": 1,
        "image": images.Docter_tablet_imag,
        "text": 'WayZone',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '6.77',
        "plusicon": 'plus',
        "discount": 'Up to 3% Off',
        "hospitalname": 'Avastin Pharmacy'
    },
    {
        "id": 2,
        "image": images.Docter_tablet_imag,
        "text": 'Drop Nozel',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '4.56',
        "plusicon": 'plus',
        "discount": 'Up to 5% Off',
        "hospitalname": 'Covid Essentials'
    },
    {
        "id": 3,
        "image": images.Docter_tablet_imag,
        "text": 'Hand Sanitizer',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '9.77',
        "plusicon": 'plus',
        "discount": 'Up to 10% Off',
        "hospitalname": 'Herceptin Pharmacy'
    },
    {
        "id": 4,
        "image": images.Docter_tablet_imag,
        "text": 'Oral spray',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '10.00',
        "plusicon": 'plus',
        "discount": 'Up to 3% Off',
        "hospitalname": 'Herceptin Pharmacy Pharmacy'
    },
    {
        "id": 5,
        "image": images.Docter_tablet_imag,
        "text": 'Paracetamol',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '8.76',
        "plusicon": 'plus',
        "discount": 'Up to 7% Off',
        "hospitalname": 'Herceptin Pharmacy Pharmacy'
    },
    {
        "id": 6,
        "image": images.Docter_tablet_imag,
        "text": 'Liquid Sray ',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '6.72',
        "plusicon": 'plus',
        "discount": 'Up to 4.4% Off',
        "hospitalname": 'MabThera/Rituxan Pharmacy'
    },
    {
        "id": 7,
        "image": images.Docter_tablet_imag,
        "text": 'Home Essentials',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '3.86',
        "plusicon": 'plus',
        "discount": 'Up to 3% Off',
        "hospitalname": 'MabThera/Rituxan Pharmacy'
    },


]
export const MedicineFalteList = [
    {
        "id": 1,
        "image": images.Docter_tablet_imag,
        "backgroundColor": 'hsl(134.7, 60.5%, 15.9%)',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }}
        />,
        "plusicon": 'plus-square',
        "hospitalname": 'Avastin Pharmacy',
        "text": 'Avil 25 Tablet',
    },
    {
        "id": 2,
        "image": images.Docter_tablet_imag,
        "text": '70% Off',
        "backgroundColor": 'hsl(134.7, 60.5%, 15.9%)',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }}
        />,
        "plusicon": 'plus-square',
        "hospitalname": 'Herceptin Pharmacy Pharmacy',
        "text": 'Normaxin Tablet',
    },
    {
        "id": 3,
        "image": images.Docter_tablet_imag,
        "text": '70% Off',
        "backgroundColor": 'hsl(134.7, 60.5%, 15.9%)',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }}
        />,
        "plusicon": 'plus-square',
        "hospitalname": 'MabThera/Rituxan Pharmacy',
        "text": 'Lasix Tablet',
    },
    {
        "id": 4,
        "image": images.Docter_tablet_imag,
        "text": '70% Off',
        "backgroundColor": 'hsl(134.7, 60.5%, 15.9%)',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }}
        />,
        "plusicon": 'plus-square',
        "hospitalname": 'MabThera/Rituxan Pharmacy',
        "text": 'Lipaglyn Tablet',
    },
    {
        "id": 5,
        "image": images.Docter_tablet_imag,
        "text": '70% Off',
        "backgroundColor": 'hsl(134.7, 60.5%, 15.9%)',
        "ratings": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }}
        />,
        "plusicon": 'plus-square',
        "hospitalname": 'Harvoni Pharmacy',
        "text": 'Hifenac-P Tablet',
    },
]
export const carouselImages = [
    {
        "id": 1,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Baby Care',
        "texttwo": 'Avastin Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 2,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Health & Nutrition',
        "texttwo": 'Herceptin Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 3,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Women Care',
        "texttwo": 'arthak Hospital and ICU',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 4,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Personal Care',
        "texttwo": 'Herceptin Pharmacy Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 5,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Ayurveda',
        "texttwo": 'Shree Navjivan Children Hospital',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 6,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "text": 'Health Devices',
        "texttwo": 'Sahyog Hospital Pvt. Ltd.',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 7,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Home Essentials',
        "texttwo": 'MabThera/Rituxan',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 8,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Apollo Life',
        "texttwo": 'MabThera/Rituxan',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 9,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Health Condition',
        "texttwo": 'Covid Essentials',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 10,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "text": 'Covid Essentials',
        "texttwo": 'Prime Hospital',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },

]
export const Discountdata = [
    {
        "id": 1,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Health & Nutrition',
        "texttwo": 'Sahyog Hospital Pvt. Ltd.',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={25} color={'#C8C8C8'} />,
    },
    {
        "id": 2,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Health Condition',
        "texttwo": 'MabThera/Rituxan',
        "textthree": '250',
        "textfour": '200',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 3,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Apollo Life',
        "texttwo": 'arthak Hospital and ICU',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 4,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Home Essentials',
        "texttwo": 'Herceptin Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 5,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Health Devices',
        "texttwo": 'Avastin Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 6,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Ayurveda',
        "texttwo": 'Covid Essentials',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 7,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Personal Care',
        "texttwo": 'Shree Navjivan Children Hospital',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
]
export const orderlist = [
    {
        "id": 1,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Augmentin Duo Tablet',
        "textsmall": 'Yesterday 3pm',
        "price": '190',
        "paregraphtetx": 'Strip of 10 tablets Glaxo SmithKline Pharmaceuticals Ltd',
    },
    {
        "id": 2,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Docter_tablet_imag} />,
        "text": 'Azithral 500 Tablet',
        "textsmall": 'Yesterday 3pm',
        "price": '124',
        "paregraphtetx": 'Azithral 500 Tablet is an antibiotic used to treat various types of bacterial infections of the respiratory tract, ear, nose, throat, lungs, skin, and eye in adults and children.',
    },
    {
        "id": 3,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Ascoril LS Syrup',
        "textsmall": 'Yesterday 3pm',
        "price": '150',
        "paregraphtetx": 'Ascoril LS Syrup is a combination medicine used in the treatment of cough with mucus. It thins mucus in the nose, windpipe, and lungs, making it easier to cough out.',
    },
    {
        "id": 4,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "text": 'Anovate Cream',
        "textsmall": 'Yesterday 3pm',
        "price": '165',
        "paregraphtetx": 'Ascoril LS Syrup is a combination medicine used in the treatment of cough with mucus.',
    },
    {
        "id": 5,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "text": 'Ambrodil-S Syrup',
        "textsmall": 'Yesterday 3pm',
        "price": '217',
        "paregraphtetx": 'Azithral 500 Tablet is an antibiotic used to treat various types of bacterial infections of the respiratory tract, ear, nose, throat, lungs, skin, and eye in adults and children.',
    },
    {
        "id": 6,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="cover" source={images.Baby_care_imag} />,
        "text": 'Alex Syrup',
        "textsmall": 'Yesterday 3pm',
        "price": '120',
        "paregraphtetx": 'It is beneficial to have plenty of fluids while taking this medication.',
    },
]
export const Popularrestrurnt = [
    {
        "id": 1,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Alex Syrup',
        "texttwo": 'MabThera/Rituxan',
        "textthree": '150',
        "textfour": '390',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={25} color={'#C8C8C8'} />,
    },
    {
        "id": 2,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Ambrodil-S Syrup',
        "texttwo": 'Sahyog Hospital Pvt. Ltd.',
        "textthree": '200',
        "textfour": '400',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 3,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Anovate Cream',
        "texttwo": 'Shree Navjivan Children Hospital',
        "textthree": '170',
        "textfour": '480',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 4,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Ascoril LS Syrup',
        "texttwo": 'Herceptin Pharmacy Pharmacy',
        "textthree": '100',
        "textfour": '389',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 5,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Azithral 500 Tablet',
        "texttwo": 'Arthak Hospital',
        "textthree": '145',
        "textfour": '420',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 6,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Docter_tablet_imag} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Augmentin Duo Tablet',
        "texttwo": 'Herceptin Pharmacy',
        "textthree": '174',
        "textfour": '379',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 7,
        "image": <Image style={Style.setboximage} resizeMode="cover" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Ascoril LS Syrup',
        "texttwo": 'Avastin Pharmacy',
        "textthree": '123',
        "textfour": '435',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
]
export const FastPharmacyOfferTab = [
    {
        "id": 1,
        "title": "UP TO 33% 0FF",
        "settext": 'Altraday Capsule SR',
        "backgroundColor": 'hsl(0.7, 79.4%, 43.7%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='cover' source={images.medicine_image} />,
    },
    {
        "id": 2,
        "title": "60x% 0FF",
        "settext": 'Atarax 10mg Tablet',
        "backgroundColor": 'hsl(24.5, 100%, 46.7%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='cover' source={images.medicine_image} />,
    },
    {
        "id": 3,
        "title": "UP TO 33% 0FF",
        "settext": 'Alkasol Oral Solution',
        "backgroundColor": 'hsl(39.8, 100%, 47.3%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='cover' source={images.Docter_tablet_imag} />,
    },
    {
        "id": 4,
        "title": "UP TO 33% 0FF",
        "settext": 'Aldactone Tablet',
        "backgroundColor": 'hsl(0.7, 79.4%, 43.7%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='cover' source={images.medicine_image} />,
    },
    {
        "id": 5,
        "title": "UP TO 33% 0FF",
        "settext": 'Alex Junior Syrup',
        "backgroundColor": 'hsl(24.5, 100%, 46.7%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='cover' source={images.medicine_image} />,
    },
    {
        "id": 6,
        "title": "UP TO 33% 0FF",
        "settext": 'Amlokind-AT Tablet',
        "backgroundColor": 'hsl(39.8, 100%, 47.3%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='cover' source={images.medicine_image} />,
    },
]
export const Tabletname = [
    {
        "id": 1,
        "text": 'Ascoril LS Syrup',
    },
    {
        "id": 2,
        "text": 'Combiflam Tablet',
    },
    {
        "id": 3,
        "text": 'Enzoflam Tablet',
    },
    {
        "id": 4,
        "text": 'Hifenac-P Tablet',
    },
    {
        "id": 5,
        "text": 'Hifenac-MR Tablet',
    },
    {
        "id": 6,
        "text": 'Hyocimax-S Tablet',
    },
    {
        "id": 7,
        "text": 'Histafree-M Tablet',
    },
    {
        "id": 8,
        "text": 'HUCOG 5000 HP Injection',
    },
]
export const HospitalListingdata = [

    {
        "id": 1,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="cover" source={images.Baby_care_imag} />,
        "hospitalname": 'Avastin Pharmacy',
        "text": 'Alerid-D Tablet',
    },
    {
        "id": 2,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "hospitalname": 'Herceptin Pharmacy',
        "text": 'Alerid-D Tablet',
    },
    {
        "id": 3,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "hospitalname": 'Arthak Hospital and ICU',
        "text": 'Alerid-D Tablet',
    },
    {
        "id": 4,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "hospitalname": 'Herceptin Pharmacy Pharmacy',
        "text": 'Alerid-D Tablet',
    },
    {
        "id": 5,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "hospitalname": 'Shree Navjivan Children Hospital',
        "text": 'Alerid-D Tablet',
    },
    {
        "id": 6,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "hospitalname": 'Sahyog Hospital Pvt. Ltd.',
        "text": 'Alerid-D Tablet',
    },
    {
        "id": 7,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "hospitalname": 'MabThera/Rituxan',
        "text": 'Alerid-D Tablet',
    },
    {
        "id": 8,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="cover" source={images.Baby_care_imag_six} />,
        "hospitalname": 'MabThera/Rituxan',
        "text": 'Alerid-D Tablet',
    },
]

export const Docterproductdata = [
    {
        "id": 1,
        "image": images.Docter_tablet_imag,
        "text": 'Alerid-D Tablet',
        "dolartestproice": '3.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Avastin Pharmacy'
    },
    {
        "id": 2,
        "image": images.Docter_tablet_imag,
        "text": 'Enzoflam Tablet',
        "dolartestproice": '4.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.5)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Avastin Pharmacy'
    },
    {
        "id": 3,
        "image": images.Docter_tablet_imag,
        "text": 'Betnovate-C Cream',
        "dolartestproice": '8.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.2}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.2)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Avastin Pharmacy'
    },
    {
        "id": 4,
        "image": images.Docter_tablet_imag,
        "text": 'Gabapin NT Tablet',
        "dolartestproice": '5.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.4}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.4)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Avastin Pharmacy'
    },
    {
        "id": 5,
        "image": images.Docter_tablet_imag,
        "text": 'Anovate Cream',
        "dolartestproice": '9.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Avastin Pharmacy'
    },
    {
        "id": 6,
        "image": images.Docter_tablet_imag,
        "text": 'Hyocimax-S Tablet',
        "dolartestproice": '6.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.5)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Avastin Pharmacy'
    },
    {
        "id": 7,
        "image": images.Docter_tablet_imag,
        "text": 'Hyocimax-S Tablet',
        "dolartestproice": '4.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.3}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.3)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Avastin Pharmacy'
    },
    {
        "id": 8,
        "image": images.Docter_tablet_imag,
        "text": 'Hyocimax-S Tablet',
        "dolartestproice": '8.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
           ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.8}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.8)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Avastin Pharmacy'
    },
]
export const Foodsdetaileslistingpage = [
    {
        "id": 1,
        "image": images.Docter_tablet_imag,
        "text": '30 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Avastin Pharmacy',
        "textgray": 'Amixide-H Tablet',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 2,
        "image": images.Docter_tablet_imag_two,
        "text": '20 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Herceptin Pharmacy',
        "textgray": 'Alex Cough Lozenges Lemon Ginger',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 3,
        "image": images._three,
        "text": '15 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Arthak Hospital and ICU',
        "textgray": 'Atorva Tablet',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 4,
        "image": images.Docter_tablet_imag_four,
        "text": '37 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Herceptin Pharmacy Pharmacy',
        "textgray": 'Asthalin Respules',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 5,
        "image": images.Docter_tablet_imag_six,
        "text": '26 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Shree Navjivan Children Hospital',
        "textgray": 'Aptimust Syrup',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 6,
        "image": images.Docter_tablet_imag_saven,
        "text": '30 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Sahyog Hospital Pvt. Ltd.',
        "textgray": 'Acemiz -MR Tablet',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 7,
        "image": images.Docter_tablet_imag_aeight,
        "text": '34 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'MabThera/Rituxan',
        "textgray": 'Angispan - TR 2.5mg Capsule',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
]
export const yourorderdata = [
    {
        "id": 1,
        "image": <Image style={Style.yourorderdata} resizeMode='cover' source={images.Docter_tablet_imag} />,
        "vadapavtext": 'Avastin Pharmacy',
        "sitytext": 'Kukatpally,Hyderabad',
        "price": '110.00', "items": 'ITEMS', "onevx": 'Flexon Tablet', "orderontext": 'ORDERED ON',
        "timetextset": '02 Jun 2022 at 3:16 PM',
        "rejectedtext": 'Delivered',
        "righticon": "md-checkmark-done",
        "refreshicon": <IconA name="refresh" color={'green'} size={20} />,
        "repeatordertext": 'Repeat Order',
    },
    {
        "id": 2,
        "image": <Image style={Style.yourorderdata} resizeMode='cover' source={images.Baby_care_imag} />,
        "vadapavtext": 'Herceptin Pharmacy',
        "sitytext": 'Kukatpally,Andhra Pradesh',
        "price": '129.00', "items": 'ITEMS', "onevx": 'Indocap SR Capsule', "orderontext": 'ORDERED ON',
        "timetextset": '20 Oct 2022 at 6:00 PM',
        "rejectedtext": 'Rejected',
        "righticon": "close-octagon",
        "refreshicon": <IconA name="refresh" color={'green'} size={20} />,
        "repeatordertext": 'Repeat Order',
    },
    {
        "id": 3,
        "image": <Image style={Style.yourorderdata} resizeMode='cover' source={images.Baby_care_imag} />,
        "vadapavtext": 'Arthak Hospital and ICU',
        "sitytext": 'Kukatpally,Hyderabad',
        "righticon": "md-checkmark-done",
        "price": '184.00', "items": 'ITEMS', "onevx": 'Imodium Capsule', "orderontext": 'ORDERED ON',
        "timetextset": '12 oct 2022 at 5:17 PM',
        "rejectedtext": 'Delivered',
        "refreshicon": <IconA name="refresh" color={'green'} size={20} />,
        "repeatordertext": 'Repeat Order',
    },
    {
        "id": 4,
        "image": <Image style={Style.yourorderdata} resizeMode='cover' source={images.Baby_care_imag} />,
        "vadapavtext": 'Herceptin Pharmacy Pharmacy',
        "sitytext": 'Kukatpally,Hyderabad',
        "righticon": "md-checkmark-done",
        "price": '310.00', "items": 'ITEMS', "onevx": 'Levocet Tablet', "orderontext": 'ORDERED ON',
        "timetextset": '02 Aug 2022 at 11:16 PM',
        "rejectedtext": 'Delivered',
        "refreshicon": <IconA name="refresh" color={'green'} size={20} />,
        "repeatordertext": 'Repeat Order',
    },
    {
        "id": 5,
        "image": <Image style={Style.yourorderdata} resizeMode='cover' source={images.Baby_care_imag_six} />,
        "vadapavtext": 'Shree Navjivan Children Hospital',
        "sitytext": 'Ranchi,Himachal Pradesh',
        "price": '480.00', "items": 'ITEMS', "onevx": 'Omnacortil 10 Tablet', "orderontext": 'ORDERED ON',
        "timetextset": '29 Oct 2022 at 2:16 PM',
        "rejectedtext": 'Rejected',
        "righticon": "close-octagon",
        "refreshicon": <IconA name="refresh" color={'green'} size={20} />,
        "repeatordertext": 'Repeat Order',
    },
    {
        "id": 6,
        "image": <Image style={Style.yourorderdata} resizeMode='cover' source={images.Baby_care_imag_six} />,
        "vadapavtext": 'Sahyog Hospital Pvt. Ltd.',
        "sitytext": 'Kukatpally,Hyderabad',
        "price": '337.00', "items": 'ITEMS', "onevx": 'Okacet Tablet', "orderontext": 'ORDERED ON',
        "timetextset": '23 Feb 2022 at 1:16 PM',
        "rejectedtext": 'Delivered',
        "righticon": "md-checkmark-done",
        "refreshicon": <IconA name="refresh" color={'green'} size={20} />,
        "repeatordertext": 'Repeat Order',
    },
    {
        "id": 7,
        "image": <Image style={Style.yourorderdata} resizeMode='cover' source={images.Baby_care_imag} />,
        "vadapavtext": 'MabThera/Rituxan',
        "sitytext": 'Kukatpally,Jharkhand',
        "price": '420.00', "items": 'ITEMS', "onevx": 'Omnacortil Oral Solution', "orderontext": 'ORDERED ON',
        "timetextset": '03 Feb 2022 at 5:16 PM',
        "rejectedtext": 'Rejected',
        "righticon": "close-octagon",
        "refreshicon": <IconA name="refresh" color={'green'} size={20} />,
        "repeatordertext": 'Repeat Order',
    },
    {
        "id": 8,
        "image": <Image style={Style.yourorderdata} resizeMode='cover' source={images.Baby_care_imag_six} />,
        "vadapavtext": 'MabThera/Rituxan',
        "sitytext": 'Kukatpally,Hyderabad',
        "price": '379.00', "items": 'ITEMS', "onevx": 'Orofer FCM Injection', "orderontext": 'ORDERED ON',
        "timetextset": '05 Jun 2022 at 2:16 PM',
        "rejectedtext": 'Rejected',
        "righticon": "md-checkmark-done",
        "refreshicon": <IconA name="refresh" color={'green'} size={20} />,
        "repeatordertext": 'Repeat Order',
    },
]
export const setuserparfromance = [
    {
        "id": 1,
        "title": "user 1",
        "seticonview": <IconE name="check" size={20} color={'#4FA987'} />,
    },
    {
        "id": 2,
        "title": "user 2",
        "seticonview": <IconE name="check" size={20} color={'#4FA987'} />,
    },
    // {
    //     "id": 3,
    //     "title": "user 3",
    //     "seticonview": <IconE name="close" size={20} color={'red'} />,
    // },
    // {
    //     "id": 4,
    //     "title": "user 4",
    //     "seticonview": <IconE name="close" size={20} color={'red'} />,
    // }
]
export const orderlistyourperfromance = [
    {
        "id": 1,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="cover" source={images.Foode_one_img} />,
        "text": 'Fried Rice',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": 'Desi, Middle-Eastern',
    },
    {
        "id": 2,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="cover" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
    {
        "id": 3,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="cover" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
    {
        "id": 4,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="cover" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
    {
        "id": 5,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="cover" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
    {
        "id": 6,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="cover" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
]
export const Recentorderlist = [
    {
        "id": 1,
        "image": <Image style={Style.resetordersetbox} resizeMode="cover" source={images.Foode_one_img} />,
        "text": 'KFC Nuggets',
        "texttwo": 'Desi, Italian, +3 more',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
    },
    {
        "id": 2,
        "image": <Image style={Style.resetordersetbox} resizeMode="cover" source={images.Foode_two_img} />,
        "text": 'Burger More',
        "texttwo": 'Burgers, Bevarages',
        "textfour": '200',
    },
    {
        "id": 3,
        "image": <Image style={Style.resetordersetbox} resizeMode="cover" source={images.Foode_three_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '190',
        "freedelevary": 'Free Delivery',
    },
    {
        "id": 4,
        "image": <Image style={Style.resetordersetbox} resizeMode="cover" source={images.Foode_five_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '260',
        "freedelevary": 'Free Delivery',
    },
    {
        "id": 5,
        "image": <Image style={Style.resetordersetbox} resizeMode="cover" source={images.Foode_aeight_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '240',
    },
    {
        "id": 6,
        "image": <Image style={Style.resetordersetbox} resizeMode="cover" source={images.Foode_saven_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
    },
    {
        "id": 7,
        "image": <Image style={Style.resetordersetbox} resizeMode="cover" source={images.Foode_aeight_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
    },
]
export const statelist = [
    {
        "id": 1,
        "textsimple": 'Flexon Tablet',
        "pricetextset": '43',
    },
    {
        "id": 2,
        "textsimple": 'Folvite 5mg Tablet',
        "pricetextset": '3',
    },
    {
        "id": 3,
        "textsimple": 'Indocap SR Capsule',
        "pricetextset": '76',
    },
    {
        "id": 1,
        "textsimple": 'Imodium Capsule',
        "pricetextset": '46',
    },
    {
        "id": 4,
        "textsimple": 'Ibugesic Plus Tablet',
        "pricetextset": '59',
    },
    {
        "id": 5,
        "textsimple": 'IPCA MMF 500 Tablet',
        "pricetextset": '22',
    },
    {
        "id": 6,
        "textsimple": 'Librax 5 mg/2.5 mg Tablet',
        "pricetextset": '16',
    },
    {
        "id": 7,
        "textsimple": 'Levocet Tablet',
        "pricetextset": '43',
    },
    {
        "id": 8,
        "textsimple": 'Omnacortil 10 Tablet DT',
        "pricetextset": '30',
    },
    {
        "id": 9,
        "textsimple": 'Okacet Tablet',
        "pricetextset": '39',
    },
    {
        "id": 10,
        "textsimple": 'Omnacortil Oral Solution',
        "pricetextset": '32',
    },
    {
        "id": 11,
        "textsimple": 'Orofer FCM Injection',
        "pricetextset": '48',
    },
    {
        "id": 12,
        "textsimple": 'Omez-Dsr Capsule',
        "pricetextset": '47',
    },
    {
        "id": 13,
        "textsimple": 'Regestrone 5mg Tablet',
        "pricetextset": '64',
    },
    {
        "id": 14,
        "textsimple": 'Rabesec-D SR Capsule',
        "pricetextset": '77',
    },
    {
        "id": 15,
        "textsimple": 'T-Bact 2% Ointment',
        "pricetextset": '13',
    },
    {
        "id": 16,
        "textsimple": 'TusQ-DX Liquid',
        "pricetextset": '8',
    },
    {
        "id": 17,
        "textsimple": 'Trajenta 5mg Tablet',
        "pricetextset": '10',
    },
    {
        "id": 18,
        "textsimple": 'Telmikind-AM Tablet',
        "pricetextset": '67',
    },
    {
        "id": 19,
        "textsimple": 'Thrombophob Gel',
        "pricetextset": '73',
    },
]
export const Slides = [
    {
        key: 's1',
        text: 'chevrons-right',
        longtitle: 'Best Price Guarantee',
        image: images.medicine_image,
        imagetwo: images.Slider_one_img,
      },
      {
        key: 's2',
        text: 'chevrons-right',
        longtitletwo: 'Quality Assurance',
        image: images.medicine_image,
        imagetwo: images.Slider_two_img,
      },
      {
        key: 's3',
        text: 'chevrons-right',
        longtitle: 'No Minimum Buy',
        image: images.medicine_image,
        imagetwo: images.Slider_three_img,
      },
    
]
