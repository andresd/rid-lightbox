# lightbox

## Setup

`npm install --save rid-lightbox`

## Usage

```javascript
    import {LightBox} from 'rid-lightbox';

    .
    .
    .

    return (
        <View style={[styles.container, containerStyle]}>
            <LightBox
                renderHeader={() => <NormalText style={{ textAlign: 'center', color: 'white' }}>"HEADER"</NormalText>}
                renderFooter={() => <NormalText style={{ textAlign: 'center', color: 'white' }}>"FOOTER"</NormalText>}
                renderContent={() => <Image source={{ uri: image }} resizeMode={'contain'} style={{width, height: width}}/>}>
                <Image source={{ uri: image }} style={[styles.image, imageStyle]}  />
            </LightBox>
        </View>
    );
```

## Available Props

| Name | Type | Default | Description
| -----|------|---------|------------------
| swipeable | boolean | true | Enables gestures to dismiss fullscreen mode by swiping up or down.
|containerStyle| ViewStyle |empty| Style applied to the content.
|renderHeader| func| undefined | Custom header component.
|renderContent| func| undefined | Custom content component instead of child node.
|renderFooter| func| undefined | Custom footer component.
|renderCloseButton| func| undefined | Custom close button component instead of default X icon button.
