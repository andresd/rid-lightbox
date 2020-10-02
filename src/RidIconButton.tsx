import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RidIcon } from './RidIcon';

export interface IRidIconButtonProps extends TouchableOpacityProps {
    name: string;
    size?: number;
    type?: 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'FontAwesome5' | 'Foundation' |
    'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Octicons' | 'SimpleLineIcons' | 'Zocial';
    color?: string;
    backgroundColor?: string;
}

export const RidIconButton: FunctionComponent<IRidIconButtonProps> = (props) => {

    const { name, size = 24, type = 'Ionicons', color = 'black', backgroundColor = 'transparent' } = props;

    const style = StyleSheet.compose(props.style, { backgroundColor });
    const newProps = { ...props, style };

    return (
        <TouchableOpacity {...newProps}>
            <RidIcon name={name} type={type} size={size} color={color} />
        </TouchableOpacity>
    );
};
