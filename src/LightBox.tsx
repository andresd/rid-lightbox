import React, { Fragment, FunctionComponent, useState } from "react";
import { View, ViewProps, StyleProp, ViewStyle, TouchableWithoutFeedback, Platform } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import Modal from 'react-native-modal';
import { RidIconButton } from "./RidIconButton";

interface ILightboxProps extends ViewProps {

    renderHeader?: () => React.ReactNode;
    renderContent?: () => React.ReactNode;
    renderFooter?: () => React.ReactNode;
    renderCloseButton?: () => React.ReactNode;

    swipeable?: boolean;

    containerStyle?: StyleProp<ViewStyle>
}

export const LightBox: FunctionComponent<ILightboxProps> = (props) => {
    const { containerStyle = { flex: 1 }, swipeable = true, renderHeader = () => (<Fragment />), renderFooter = () => (<Fragment />) } = props

    const [isVisible, setIsVisible] = useState(false);

    const closeButton = (
        <Fragment>
            { props.renderCloseButton && props.renderCloseButton()}
            { !props.renderCloseButton && <RidIconButton name="close" color="white" onPress={() => setIsVisible(false)} />}
        </Fragment>
    );

    const header: React.ReactNode = renderHeader();

    const content = (
        <Fragment>
            { props.renderContent && props.renderContent()}
            {!props.renderContent && props.children}
        </Fragment>
    );

    const footer: React.ReactNode = renderFooter();

    const { width, height } = useDimensions().screen;

    return (
        <View>
            <Modal
                deviceWidth={width}
                deviceHeight={height}
                isVisible={isVisible}
                backdropOpacity={1}
                coverScreen
                swipeDirection={swipeable ? ['up', 'down', 'left', 'right'] : undefined}
                onSwipeComplete={() => setIsVisible(false)}
                swipeThreshold={50}>
                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        height: Platform.select({
                            android: 76,
                            default: 64,
                        }),
                    }}>
                        {closeButton}
                        <View style={{ width: 10 }} />
                        {header}
                    </View>
                    <View style={[containerStyle, { justifyContent: 'center', alignItems: 'center' }]}>
                        {content}
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        {footer}
                    </View>
                </View>
            </Modal>
            <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
                {props.children}
            </TouchableWithoutFeedback>
        </View>
    );
}