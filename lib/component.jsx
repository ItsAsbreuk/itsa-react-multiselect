"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module component.jsx
 * @class Component
 * @since 15.0.0
*/

require("itsa-jsext");

const React = require("react"),
    PropTypes = require("prop-types"),
    Select = require("itsa-react-select");

const sortFn = (a, b) => {
    const aInt = parseInt(a, 10),
        bInt = parseInt(b, 10);
    if (aInt<bInt) {
        return -1;
    }
    if (bInt<aInt) {
        return 1;
    }
    return 0;
};

class MultiSelect extends React.Component {
    constructor(props) {
        super(props);
        const instance = this;
        instance.btnRenderer = instance.btnRenderer.bind(instance);
        instance.selectedItemRenderer = instance.selectedItemRenderer.bind(instance);
    }

    btnRenderer() {
        // only return something if there are items selected
        let selected = this.props.selected;
        if (typeof selected==='number') {
            selected = [selected];
        }
        if (selected && (selected.length>0)) {
            selected = selected.itsa_deepClone().sort(sortFn);
            return selected.map(this.selectedItemRenderer).join(' ');
        }
    }

    selectedItemRenderer(item) {
        return '<span class="multiselect-selected-item">'+this.props.items[item]+'</span>';
    }

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 15.0.0
     */
    render() {
        let className = 'itsa-multiselect';
        const props = this.props,
            propsClassName = props.className,
            selected = props.selected;
        propsClassName && (className+=' ' + propsClassName);
        if ((typeof selected==='number') || (Array.isArray(selected) && (selected.length>0))) {
            className += ' has-items';
        }
        return (
            <Select {...props} btnRenderer={this.btnRenderer} className={className} multiSelect={true} />
        );
    }
}

MultiSelect.propTypes = {
    /**
     * Whether to close the select-list when an item is clicked
     *
     * @property closeOnClick
     * @type Boolean
     * @default false
     * @since 15.2.0
    */
    closeOnClick: PropTypes.bool,
};

MultiSelect.defaultProps = {
    closeOnClick: false
};

module.exports = MultiSelect;
