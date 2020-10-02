import React, { Fragment, FunctionComponent, ReactElement, useEffect } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import { IconProps } from "react-native-vector-icons";

export type IconType = 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'FontAwesome5' | 'Foundation' |
    'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Octicons' | 'SimpleLineIcons' | 'Zocial';

interface IRidIconProps extends IconProps {
    type?: IconType;
    size?: number;
    name: string;
}

export const RidIcon: FunctionComponent<IRidIconProps> = (props) => {
    const { type = 'Ionicons', size = 30 } = props;

    const newProps = { ...props, size };

    switch (type) {
        case 'AntDesign':
            return <AntDesign {...newProps} />;
        case 'Entypo':
            return <Entypo {...newProps} />;
        case 'EvilIcons':
            return <EvilIcons {...newProps} />;
        case 'Feather':
            return <Feather {...newProps} />;
        case 'FontAwesome':
            return <FontAwesome {...newProps} />;
        case 'FontAwesome5':
            return <FontAwesome5 {...newProps} />;
        case 'Foundation':
            return <Foundation {...newProps} />;
        case 'Ionicons':
            return <Ionicons {...newProps} />;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons {...newProps} />;
        case 'MaterialIcons':
            return <MaterialIcons {...newProps} />;
        case 'Octicons':
            return <Octicons {...newProps} />;
        case 'SimpleLineIcons':
            return <SimpleLineIcons {...newProps} />;
            break;
        case 'Zocial':
            return <Zocial {...newProps} />;
        default:
            return <Ionicons {...newProps} />;
    }
};



