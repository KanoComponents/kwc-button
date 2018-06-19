/**
`kwc-mega-button`
An mega button element with Kano styling

Custom property | Description | Default
----------------|-------------|----------
`--kwc-mega-button-font` | Font for the element | `--font-body`
`--kwc-mega-button-color` | Color for the icon and rollover | `--color-kano-orange`
`--kwc-mega-button-bg-color` | Color for the button if not white | `rgba(255, 255, 255, 1`

@group Kano Web Components
@demo demo/kwc-mega-button.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@kano/kwc-style/kwc-style.js';
import '@kano/kwc-icons/kwc-icons.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
        /** Button default */
        :host{
            height: 48px;
            min-width: 150px;
            display: inline-block;
        }
        button {
            height: 100%;
            width: 100%;
            line-height: 48px;
            outline: none;
            overflow: hidden;
            padding: 0 22px;
            white-space: nowrap;
            cursor: pointer;
            display: inline-block;

            background-color: var(--kwc-mega-button-bg-color, rgba(255, 255, 255, 1));
            color: var(--kwc-mega-button-color, var(--color-abbey));

            border-color: var(--kwc-mega-button-border, var(--color-stone));
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;

            font-size: 16px;
            font-family: var(--kwc-mega-button-font, var(--font-body));
            font-weight: bold;

            text-align: center;
            text-transform: uppercase;

        }
        iron-icon, button {
            transition-property: background-color, border-color, color;
            transition-duration: 0.3s;
            transition-timing-function: ease;
        }
        button iron-icon {
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
            bottom: 2px;
            color: var(--kwc-mega-button-icon, var(--color-kano-orange));
        }

        :host(:hover) button,
        :host(:focus) button {
            color: var(--kwc-mega-button-color-hover, white);
            background-color: var(--kwc-mega-button-bg-hover, var(--color-kano-orange));
        }
        :host(:hover) button iron-icon,
        :host(:focus) button iron-icon {
            color: var(--kwc-mega-button-icon-hover, white);
        }

        /** Disabled button */
        :host([disabled]) button,
        :host([disabled]) button iron-icon,
        :host([disabled]:hover) button,
        :host([disabled]:focus) button {
            background-color: var(--kwc-mega-button-disabled-bg-color, var(--color-grey));
            cursor: default;
            color: var(--kwc-mega-button-disabled-color, var(--color-chateau));
            border-color: var(--kwc-mega-button-disabled-border, var(--color-stone));
        }
    </style>
    <button disabled\$="[[disabled]]">
        <template is="dom-if" if="[[_displayIcon]]">
            <iron-icon icon="[[iconId]]"></iron-icon>
        </template>
        <slot id="content"></slot>
    </button>
`,

  is: 'kwc-mega-button',

  properties: {
        /**
         * Boolean to indicate whether the button is `active` or `disabled`
         */
        disabled: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        },
        _displayIcon: {
            type: Boolean,
            computed: '_iconProvided(iconId)'
        },
        /**
         * String to indicate which button (if any) the button
         * should display
         */
        iconId: {
            type: String
        }
    },

  _iconProvided (iconId) {
      return iconId !== undefined && iconId !== null;
  }
});
