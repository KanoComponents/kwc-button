/**
`kwc-soft-button`
An atomic button element with Kano styling

Custom property | Description | Default
----------------|-------------|----------
`--kwc-soft-button-font` | Font for the element | `--font-body`

@group Kano Web Components
@demo demo/kwc-soft-button.html
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
        :host button {
            background-color: var(--kwc-soft-button-background, transparent);
            border: 1px solid var(--kwc-soft-button-border, #a2a6aa);
            border-radius: 3px;
            color: var(--kwc-soft-button-color, var(--color-chateau));
            cursor: pointer;
            display: inline-block;
            font-family: var(--kwc-soft-button-font, var(--font-body));
            font-size: 14px;
            font-weight: bold;
            height: 40px;
            line-height: 40px;
            outline: none;
            overflow: hidden;
            padding: 0 22px;
            text-align: center;
            text-transform: uppercase;
            transition-property: background-color, border-color, color;
            transition-duration: 0.3s;
            transition-timing-function: ease;
            white-space: nowrap;
        }
        :host button:hover {
            background-color: var(--kwc-soft-button-background-hover, transparent);
            border-color: var(--kwc-soft-button-border-hover, #a2a6aa);
            color: var(--kwc-soft-button-color-hover, --color-chateau);
        }
        :host([active]) button {
            background-color: var(--kwc-soft-button-active-background, transparent);
            border-color: var(--kwc-soft-button-active-border, #a2a6aa);
            color: var(--kwc-soft-button-active-color, --color-chateau);
        }
        :host([active]) button:hover {
            background-color: var(--kwc-soft-button-active-background-hover, transparent);
            border-color: var(--kwc-soft-button-active-border-hover, #a2a6aa);
            color: var(--kwc-soft-button-active-color-hover, --color-chateau);
        }
        :host iron-icon {
            display: inline-block;
            height: 16px;
            margin-right: 8px;
            transition: color 0.3s ease;
            vertical-align: -8%;
            width: 16px;
        }
        :host(:hover) button,
        :host([active]) button,
        :host(.iron-selected) button {
            border-color: var(--kwc-soft-button-border, var(--color-kano-orange));
        }
        :host(:not([disabled]):hover) iron-icon,
        :host([active]) iron-icon,
        :host(.iron-selected) iron-icon {
            color: var(--kwc-soft-button-icon, var(--color-kano-orange));
        }
        :host([disabled]) button {
            /** TODO: Use colors from \`kwc-style\` */
            background-color: var(--kwc-soft-button-disabled-background, transparent);
            border-color: var(--kwc-soft-button-disabled-border, #d3d6d8);
            color: var(--kwc-soft-button-disabled-color, #a2a6aa);
        }
        :host([disabled]) button:hover {
            /** TODO: Use colors from \`kwc-style\` */
            background-color: var(--kwc-soft-button-disabled-background-hover, transparent);
            border-color: var(--kwc-soft-button-disabled-border-hover, #d3d6d8);
            color: var(--kwc-soft-button-disabled-color-hover, #a2a6aa);
        }
    </style>
    <button disabled\$="[[disabled]]">
        <template is="dom-if" if="[[_displayIcon]]">
            <iron-icon icon="[[iconId]]"></iron-icon>
        </template>
        <slot id="content"></slot>
    </button>
`,

  is: 'kwc-soft-button',

  properties: {
        /**
         * Boolean to toggle whether the button is in use – eg. representing
         * the currently selected page or item.
         */
        active: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        },
        /** Boolean to indicate whether the button is `disabled` */
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
         * should display.
         */
        iconId: {
            type: String
        }
    },

  /**
   * Compute whether the icon has been provided.
   * @param {String || null} iconId
   * @returns {Boolean}
   */
  _iconProvided (iconId) {
      return iconId !== undefined && iconId !== null;
  }
});
