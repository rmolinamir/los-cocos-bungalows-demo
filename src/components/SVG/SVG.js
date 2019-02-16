import React, { PureComponent } from 'react';
// SVG global object
import * as SVG from './source';
// Social Media 
import * as SocialMedia from './source/SocialMedia';

class SVGComponent extends PureComponent {

    randomUnderline = (Underlines) => {
        let keys = Object.keys(Underlines)
        return Underlines[keys[keys.length * Math.random() << 0]];
    };

    render () {
        let svg = null;
        // switch statement that picks the respective svg file depending on name
        switch (this.props.svg) {
            case 'calendar':
                svg = <SVG.Calendar {...this.props} />;
                break;
            case 'plus-symbol':
                svg = <SVG.PlusSymbol {...this.props} />;
                break;
            case 'minus-symbol':
                svg = <SVG.MinusSymbol {...this.props} />;
                break;
            case 'down-arrow':
                svg = <SVG.DownArrow {...this.props} />;
                break;
            case 'bed':
                svg = <SVG.Bed {...this.props} />;
                break;
            // Social Media Icons
            case 'facebook':
                svg = <SocialMedia.Facebook {...this.props} />
                break;
            case 'instagram':
                svg = <SocialMedia.Instagram {...this.props} />
                break;
            default:
                svg = <div><strong>?</strong></div>;
        };
        return svg;
    }
}

export default SVGComponent;