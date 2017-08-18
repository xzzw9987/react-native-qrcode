'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var {
    View,
    WebView
} = require('react-native');

var Canvas = createReactClass({
    propTypes: {
        style: PropTypes.object,
        context: PropTypes.object,
        render: PropTypes.func.isRequired
    },

    render() {
        var contextString = JSON.stringify(this.props.context);
        var renderString = this.props.render.toString();
        return (
            <View style={this.props.style}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    scalesPageToFit={false}
                    contentInset={{top: 0, right: 0, bottom: 0, left: 0}}
                    source={{html: "<!doctype html><html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title></title></head><body><style>html,body{height: 100%; overflow: hidden}*{margin:0;padding:0;}canvas{transform:translateZ(0);}</style><canvas></canvas><script>var canvas = document.querySelector('canvas');(" + renderString + ").call(" + contextString + ", canvas);</script></body></html>"}}
                    opaque={false}
                    underlayColor={'transparent'}
                    style={this.props.style}
                    javaScriptEnabled={true}
                    scrollEnabled={false}
                />
            </View>
        );
    }
});

module.exports = Canvas;
