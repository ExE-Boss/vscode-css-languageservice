/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export const data = {
	"--*": {
		"syntax": "<declaration-value>",
		"media": "all",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Variables"
		],
		"initial": "seeProse",
		"appliesto": "allElements",
		"computed": "asSpecifiedWithVarsSubstituted",
		"order": "perGrammar",
		"status": "experimental"
	},
	"-ms-accelerator": {
		"syntax": "false | true",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "false",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-block-progression": {
		"syntax": "tb | rl | bt | lr",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "tb",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-content-zoom-chaining": {
		"syntax": "none | chained",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "none",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-content-zooming": {
		"syntax": "none | zoom",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "zoomForTheTopLevelNoneForTheRest",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-content-zoom-limit": {
		"syntax": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": [
			"-ms-content-zoom-limit-max",
			"-ms-content-zoom-limit-min"
		],
		"groups": [
			"Microsoft Extensions"
		],
		"initial": [
			"-ms-content-zoom-limit-max",
			"-ms-content-zoom-limit-min"
		],
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": [
			"-ms-content-zoom-limit-max",
			"-ms-content-zoom-limit-min"
		],
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-content-zoom-limit-max": {
		"syntax": "<percentage>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "maxZoomFactor",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "400%",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-content-zoom-limit-min": {
		"syntax": "<percentage>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "minZoomFactor",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "100%",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-content-zoom-snap": {
		"syntax": "<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": [
			"-ms-content-zoom-snap-type",
			"-ms-content-zoom-snap-points"
		],
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": [
			"-ms-content-zoom-snap-type",
			"-ms-content-zoom-snap-points"
		],
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-content-zoom-snap-points": {
		"syntax": "snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "snapInterval(0%, 100%)",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-content-zoom-snap-type": {
		"syntax": "none | proximity | mandatory",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "none",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-filter": {
		"syntax": "<string>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "\"\"",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-flow-from": {
		"syntax": "[ none | <custom-ident> ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "none",
		"appliesto": "nonReplacedElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-flow-into": {
		"syntax": "[ none | <custom-ident> ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "none",
		"appliesto": "iframeElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-high-contrast-adjust": {
		"syntax": "auto | none",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-hyphenate-limit-chars": {
		"syntax": "auto | <integer>{1,3}",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-hyphenate-limit-lines": {
		"syntax": "no-limit | <integer>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "no-limit",
		"appliesto": "blockContainerElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-hyphenate-limit-zone": {
		"syntax": "<percentage> | <length>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "referToLineBoxWidth",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "0",
		"appliesto": "blockContainerElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-ime-align": {
		"syntax": "auto | after",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-overflow-style": {
		"syntax": "auto | none | scrollbar | -ms-autohiding-scrollbar",
		"media": "interactive",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "auto",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scrollbar-3dlight-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scrollbar-arrow-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scrollbar-base-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scrollbar-darkshadow-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scrollbar-face-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scrollbar-highlight-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scrollbar-shadow-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scrollbar-track-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-chaining": {
		"syntax": "chained | none",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "chained",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-limit": {
		"syntax": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": [
			"-ms-scroll-limit-x-min",
			"-ms-scroll-limit-y-min",
			"-ms-scroll-limit-x-max",
			"-ms-scroll-limit-y-max"
		],
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": [
			"-ms-scroll-limit-x-min",
			"-ms-scroll-limit-y-min",
			"-ms-scroll-limit-x-max",
			"-ms-scroll-limit-y-max"
		],
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-limit-x-max": {
		"syntax": "auto | <length>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "auto",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-limit-x-min": {
		"syntax": "<length>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "0",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-limit-y-max": {
		"syntax": "auto | <length>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "auto",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-limit-y-min": {
		"syntax": "<length>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "0",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-rails": {
		"syntax": "none | railed",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "railed",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-snap-points-x": {
		"syntax": "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "snapInterval(0px, 100%)",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-snap-points-y": {
		"syntax": "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "snapInterval(0px, 100%)",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-snap-type": {
		"syntax": "none | proximity | mandatory",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "none",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-snap-x": {
		"syntax": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": [
			"-ms-scroll-snap-type",
			"-ms-scroll-snap-points-x"
		],
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": [
			"-ms-scroll-snap-type",
			"-ms-scroll-snap-points-x"
		],
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-snap-y": {
		"syntax": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": [
			"-ms-scroll-snap-type",
			"-ms-scroll-snap-points-y"
		],
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": [
			"-ms-scroll-snap-type",
			"-ms-scroll-snap-points-y"
		],
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-scroll-translation": {
		"syntax": "none | vertical-to-horizontal",
		"media": "interactive",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-text-autospace": {
		"syntax": "none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-touch-select": {
		"syntax": "grippers | none",
		"media": "interactive",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "grippers",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-user-select": {
		"syntax": "none | element | text",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "text",
		"appliesto": "nonReplacedElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-wrap-flow": {
		"syntax": "auto | both | start | end | maximum | clear",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "auto",
		"appliesto": "blockLevelElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-wrap-margin": {
		"syntax": "<length>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "0",
		"appliesto": "exclusionElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-ms-wrap-through": {
		"syntax": "wrap | none",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "wrap",
		"appliesto": "blockLevelElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-appearance": {
		"syntax": "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "noneButOverriddenInUserAgentCSS",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-binding": {
		"syntax": "<url> | none",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "none",
		"appliesto": "allElementsExceptGeneratedContentOrPseudoElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-border-bottom-colors": {
		"syntax": "[ <color> ]* <color> | none",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-border-left-colors": {
		"syntax": "[ <color> ]* <color> | none",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-border-right-colors": {
		"syntax": "[ <color> ]* <color> | none",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-border-top-colors": {
		"syntax": "[ <color> ]* <color> | none",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-context-properties": {
		"syntax": "none | [ fill | fill-opacity | stroke | stroke-opacity ]#",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "none",
		"appliesto": "allElementsThatCanReferenceImages",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-float-edge": {
		"syntax": "border-box | content-box | margin-box | padding-box",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "content-box",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-force-broken-image-icon": {
		"syntax": "<integer>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "0",
		"appliesto": "images",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-image-region": {
		"syntax": "<shape> | auto",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "auto",
		"appliesto": "xulImageElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-orient": {
		"syntax": "inline | block | horizontal | vertical",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "inline",
		"appliesto": "anyElementEffectOnProgressAndMeter",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-outline-radius": {
		"syntax": "<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"-moz-outline-radius-topleft",
			"-moz-outline-radius-topright",
			"-moz-outline-radius-bottomright",
			"-moz-outline-radius-bottomleft"
		],
		"percentages": [
			"-moz-outline-radius-topleft",
			"-moz-outline-radius-topright",
			"-moz-outline-radius-bottomright",
			"-moz-outline-radius-bottomleft"
		],
		"groups": [
			"Mozilla Extensions"
		],
		"initial": [
			"-moz-outline-radius-topleft",
			"-moz-outline-radius-topright",
			"-moz-outline-radius-bottomright",
			"-moz-outline-radius-bottomleft"
		],
		"appliesto": "allElements",
		"computed": [
			"-moz-outline-radius-topleft",
			"-moz-outline-radius-topright",
			"-moz-outline-radius-bottomright",
			"-moz-outline-radius-bottomleft"
		],
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-outline-radius-bottomleft": {
		"syntax": "<outline-radius>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-outline-radius-bottomright": {
		"syntax": "<outline-radius>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-outline-radius-topleft": {
		"syntax": "<outline-radius>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-outline-radius-topright": {
		"syntax": "<outline-radius>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-stack-sizing": {
		"syntax": "ignore | stretch-to-fit",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "stretch-to-fit",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-text-blink": {
		"syntax": "none | blink",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-user-focus": {
		"syntax": "ignore | normal | select-after | select-before | select-menu | select-same | select-all | none",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-user-input": {
		"syntax": "auto | none | enabled | disabled",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-user-modify": {
		"syntax": "read-only | read-write | write-only",
		"media": "interactive",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "read-only",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-window-dragging": {
		"syntax": "drag | no-drag",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "drag",
		"appliesto": "allElementsCreatingNativeWindows",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-moz-window-shadow": {
		"syntax": "default | menu | tooltip | sheet | none",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "default",
		"appliesto": "allElementsCreatingNativeWindows",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-border-before": {
		"syntax": "<'border-width'> || <'border-style'> || <'color'>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": [
			"-webkit-border-before-width"
		],
		"groups": [
			"WebKit Extensions"
		],
		"initial": [
			"border-width",
			"border-style",
			"color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-width",
			"border-style",
			"color"
		],
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-border-before-color": {
		"syntax": "<'color'>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-border-before-style": {
		"syntax": "<'border-style'>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-border-before-width": {
		"syntax": "<'border-width'>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-box-reflect": {
		"syntax": "[ above | below | right | left ]? <length>? <image>?",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-mask": {
		"syntax": "<mask-image> [ <'-webkit-mask-repeat'> || <'-webkit-mask-attachment'> || <'-webkit-mask-position'> || <'-webkit-mask-origin'> || <'-webkit-mask-clip'> ]*",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": [
			"-webkit-mask-image",
			"-webkit-mask-repeat",
			"-webkit-mask-attachment",
			"-webkit-mask-position",
			"-webkit-mask-origin",
			"-webkit-mask-clip"
		],
		"appliesto": "allElements",
		"computed": [
			"-webkit-mask-image",
			"-webkit-mask-repeat",
			"-webkit-mask-attachment",
			"-webkit-mask-position",
			"-webkit-mask-origin",
			"-webkit-mask-clip"
		],
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-mask-attachment": {
		"syntax": "<attachment> [, <attachment> ]*",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "scroll",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-clip": {
		"syntax": "[ border | border-box | padding | padding-box | content | content-box | text ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "border",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-composite": {
		"syntax": "<composite-style> [, <composite-style> ]*",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "source-over",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-image": {
		"syntax": "<mask-image> [, <mask-image> ]*",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "absoluteURIOrNone",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-origin": {
		"syntax": "[ padding | border | content ] [, [ border | padding | content ] ]*",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "padding",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-position": {
		"syntax": "<mask-position>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToSizeOfElement",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "0% 0%",
		"appliesto": "allElements",
		"computed": "absoluteLengthOrPercentage",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-position-x": {
		"syntax": "[ <length-percentage> | left | center | right ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToSizeOfElement",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "0%",
		"appliesto": "allElements",
		"computed": "absoluteLengthOrPercentage",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-position-y": {
		"syntax": "[ <length-percentage> | top | center | bottom ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToSizeOfElement",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "0%",
		"appliesto": "allElements",
		"computed": "absoluteLengthOrPercentage",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-repeat": {
		"syntax": "<repeat-style> [, <repeat-style> ]*",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "repeat",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-repeat-x": {
		"syntax": "repeat | no-repeat | space | round",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "repeat",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-mask-repeat-y": {
		"syntax": "repeat | no-repeat | space | round",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "repeat",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-overflow-scrolling": {
		"syntax": "auto | touch",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "auto",
		"appliesto": "scrollingBoxes",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "nonstandard"
	},
	"-webkit-tap-highlight-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "black",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-text-fill-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-text-stroke": {
		"syntax": "<length> || <color>",
		"media": "visual",
		"inherited": true,
		"animationType": [
			"-webkit-text-stroke-width",
			"-webkit-text-stroke-color"
		],
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": [
			"-webkit-text-stroke-width",
			"-webkit-text-stroke-color"
		],
		"appliesto": "allElements",
		"computed": [
			"-webkit-text-stroke-width",
			"-webkit-text-stroke-color"
		],
		"order": "canonicalOrder",
		"status": "nonstandard"
	},
	"-webkit-text-stroke-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-text-stroke-width": {
		"syntax": "<length>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "absoluteLength",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"-webkit-touch-callout": {
		"syntax": "default | none",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"WebKit Extensions"
		],
		"initial": "default",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"align-content": {
		"syntax": "normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "normal",
		"appliesto": "multilineFlexContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"align-items": {
		"syntax": "normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"align-self": {
		"syntax": "auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "auto",
		"appliesto": "flexItemsGridItemsAndAbsolutelyPositionedBoxes",
		"computed": "autoOnAbsolutelyPositionedElementsValueOfAlignItemsOnParent",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"all": {
		"syntax": "initial | inherit | unset | revert",
		"media": "noPracticalMedia",
		"inherited": false,
		"animationType": "eachOfShorthandPropertiesExceptUnicodeBiDiAndDirection",
		"percentages": "no",
		"groups": [
			"CSS Miscellaneous"
		],
		"initial": "noPracticalInitialValue",
		"appliesto": "allElements",
		"computed": "asSpecifiedAppliesToEachProperty",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"animation": {
		"syntax": "<single-animation>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": [
			"animation-name",
			"animation-duration",
			"animation-timing-function",
			"animation-delay",
			"animation-iteration-count",
			"animation-direction",
			"animation-fill-mode",
			"animation-play-state"
		],
		"appliesto": "allElementsAndPseudos",
		"computed": [
			"animation-name",
			"animation-duration",
			"animation-timing-function",
			"animation-delay",
			"animation-direction",
			"animation-iteration-count",
			"animation-fill-mode",
			"animation-play-state"
		],
		"order": "orderOfAppearance",
		"status": "standard"
	},
	"animation-delay": {
		"syntax": "<time>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": "0s",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"animation-direction": {
		"syntax": "<single-animation-direction>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": "normal",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"animation-duration": {
		"syntax": "<time>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": "0s",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"animation-fill-mode": {
		"syntax": "<single-animation-fill-mode>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": "none",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"animation-iteration-count": {
		"syntax": "<single-animation-iteration-count>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": "1",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"animation-name": {
		"syntax": "[ none | <keyframes-name> ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": "none",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"animation-play-state": {
		"syntax": "<single-animation-play-state>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": "running",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"animation-timing-function": {
		"syntax": "<single-timing-function>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Animations"
		],
		"initial": "ease",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"appearance": {
		"syntax": "auto | none",
		"media": "all",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "experimental"
	},
	"azimuth": {
		"syntax": "<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards",
		"media": "aural",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Speech"
		],
		"initial": "center",
		"appliesto": "allElements",
		"computed": "normalizedAngle",
		"order": "orderOfAppearance",
		"status": "obsolete"
	},
	"backdrop-filter": {
		"syntax": "none | <filter-function-list>",
		"media": "visual",
		"inherited": false,
		"animationType": "filterList",
		"percentages": "no",
		"groups": [
			"Filter Effects"
		],
		"initial": "none",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"backface-visibility": {
		"syntax": "visible | hidden",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Transforms"
		],
		"initial": "visible",
		"appliesto": "transformableElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"background": {
		"syntax": "[ <bg-layer> , ]* <final-bg-layer>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"background-color",
			"background-image",
			"background-clip",
			"background-position",
			"background-size",
			"background-repeat",
			"background-attachment"
		],
		"percentages": [
			"background-position",
			"background-size"
		],
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"background-image",
			"background-position",
			"background-size",
			"background-repeat",
			"background-origin",
			"background-clip",
			"background-attachment",
			"background-color"
		],
		"appliesto": "allElements",
		"computed": [
			"background-image",
			"background-position",
			"background-size",
			"background-repeat",
			"background-origin",
			"background-clip",
			"background-attachment",
			"background-color"
		],
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-attachment": {
		"syntax": "<attachment>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "scroll",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-blend-mode": {
		"syntax": "<blend-mode>#",
		"media": "none",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Compositing and Blending"
		],
		"initial": "normal",
		"appliesto": "allElementsSVGContainerGraphicsAndGraphicsReferencingElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-clip": {
		"syntax": "<box>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "border-box",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "transparent",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-image": {
		"syntax": "<bg-image>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecifiedURLsAbsolute",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-origin": {
		"syntax": "<box>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "padding-box",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-position": {
		"syntax": "<bg-position>#",
		"media": "visual",
		"inherited": false,
		"animationType": "repeatableListOfSimpleListOfLpc",
		"percentages": "referToSizeOfBackgroundPositioningAreaMinusBackgroundImageSize",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "0% 0%",
		"appliesto": "allElements",
		"computed": "listEachItemTwoKeywordsOriginOffsets",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-position-x": {
		"syntax": "[ center | [ left | right | x-start | x-end ]? <length-percentage>? ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToWidthOfBackgroundPositioningAreaMinusBackgroundImageHeight",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "left",
		"appliesto": "allElements",
		"computed": "listEachItemConsistingOfAbsoluteLengthPercentageAndOrigin",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"background-position-y": {
		"syntax": "[ center | [ top | bottom | y-start | y-end ]? <length-percentage>? ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToHeightOfBackgroundPositioningAreaMinusBackgroundImageHeight",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "top",
		"appliesto": "allElements",
		"computed": "listEachItemConsistingOfAbsoluteLengthPercentageAndOrigin",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"background-repeat": {
		"syntax": "<repeat-style>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "repeat",
		"appliesto": "allElements",
		"computed": "listEachItemHasTwoKeywordsOnePerDimension",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"background-size": {
		"syntax": "<bg-size>#",
		"media": "visual",
		"inherited": false,
		"animationType": "repeatableListOfSimpleListOfLpc",
		"percentages": "relativeToBackgroundPositioningArea",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "auto auto",
		"appliesto": "allElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"block-size": {
		"syntax": "<'width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "blockSizeOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "auto",
		"appliesto": "sameAsWidthAndHeight",
		"computed": "sameAsWidthAndHeight",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border": {
		"syntax": "<br-width> || <br-style> || <color>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"border-color",
			"border-style",
			"border-width"
		],
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-width",
			"border-style",
			"border-color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-width",
			"border-style",
			"border-color"
		],
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-block-end": {
		"syntax": "<'border-width'> || <'border-style'> || <'color'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": [
			"border-width",
			"border-style",
			"color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-width",
			"border-style",
			"border-block-end-color"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-block-end-color": {
		"syntax": "<'color'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-block-end-style": {
		"syntax": "<'border-style'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-block-end-width": {
		"syntax": "<'border-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-block-start": {
		"syntax": "<'border-width'> || <'border-style'> || <'color'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": [
			"border-width",
			"border-style",
			"color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-width",
			"border-style",
			"border-block-start-color"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-block-start-color": {
		"syntax": "<'color'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-block-start-style": {
		"syntax": "<'border-style'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-block-start-width": {
		"syntax": "<'border-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-bottom": {
		"syntax": "<br-width> || <br-style> || <color>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"border-bottom-color",
			"border-bottom-style",
			"border-bottom-width"
		],
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-bottom-width",
			"border-bottom-style",
			"border-bottom-color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-bottom-width",
			"border-bottom-style",
			"border-bottom-color"
		],
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-bottom-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-bottom-left-radius": {
		"syntax": "<length-percentage>{1,2}",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "0",
		"appliesto": "allElementsUAsNotRequiredWhenCollapse",
		"computed": "twoAbsoluteLengthOrPercentages",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-bottom-right-radius": {
		"syntax": "<length-percentage>{1,2}",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "0",
		"appliesto": "allElementsUAsNotRequiredWhenCollapse",
		"computed": "twoAbsoluteLengthOrPercentages",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-bottom-style": {
		"syntax": "<br-style>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-bottom-width": {
		"syntax": "<br-width>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthOr0IfBorderBottomStyleNoneOrHidden",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-collapse": {
		"syntax": "collapse | separate",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Table"
		],
		"initial": "separate",
		"appliesto": "tableElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-color": {
		"syntax": "<color>{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"border-bottom-color",
			"border-left-color",
			"border-right-color",
			"border-top-color"
		],
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-top-color",
			"border-right-color",
			"border-bottom-color",
			"border-left-color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-bottom-color",
			"border-left-color",
			"border-right-color",
			"border-top-color"
		],
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-image": {
		"syntax": "<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": [
			"border-image-slice",
			"border-image-width"
		],
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-image-source",
			"border-image-slice",
			"border-image-width",
			"border-image-outset",
			"border-image-repeat"
		],
		"appliesto": "allElementsExceptTableElementsWhenCollapse",
		"computed": [
			"border-image-outset",
			"border-image-repeat",
			"border-image-slice",
			"border-image-source",
			"border-image-width"
		],
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-image-outset": {
		"syntax": "[ <length> | <number> ]{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "0",
		"appliesto": "allElementsExceptTableElementsWhenCollapse",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-image-repeat": {
		"syntax": "[ stretch | repeat | round | space ]{1,2}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "stretch",
		"appliesto": "allElementsExceptTableElementsWhenCollapse",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-image-slice": {
		"syntax": "<number-percentage>{1,4} && fill?",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToSizeOfBorderImage",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "100%",
		"appliesto": "allElementsExceptTableElementsWhenCollapse",
		"computed": "oneToFourPercentagesOrAbsoluteLengthsPlusFill",
		"order": "percentagesOrLengthsFollowedByFill",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-image-source": {
		"syntax": "none | <image>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "none",
		"appliesto": "allElementsExceptTableElementsWhenCollapse",
		"computed": "noneOrImageWithAbsoluteURI",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-image-width": {
		"syntax": "[ <length-percentage> | <number> | auto ]{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToWidthOrHeightOfBorderImageArea",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "1",
		"appliesto": "allElementsExceptTableElementsWhenCollapse",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-inline-end": {
		"syntax": "<'border-width'> || <'border-style'> || <'color'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": [
			"border-width",
			"border-style",
			"color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-width",
			"border-style",
			"border-inline-end-color"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-inline-end-color": {
		"syntax": "<'color'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-inline-end-style": {
		"syntax": "<'border-style'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-inline-end-width": {
		"syntax": "<'border-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-inline-start": {
		"syntax": "<'border-width'> || <'border-style'> || <'color'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": [
			"border-width",
			"border-style",
			"color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-width",
			"border-style",
			"border-inline-start-color"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-inline-start-color": {
		"syntax": "<'color'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-inline-start-style": {
		"syntax": "<'border-style'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-inline-start-width": {
		"syntax": "<'border-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-left": {
		"syntax": "<br-width> || <br-style> || <color>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"border-left-color",
			"border-left-style",
			"border-left-width"
		],
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-left-width",
			"border-left-style",
			"border-left-color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-left-width",
			"border-left-style",
			"border-left-color"
		],
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-left-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-left-style": {
		"syntax": "<br-style>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-left-width": {
		"syntax": "<br-width>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthOr0IfBorderLeftStyleNoneOrHidden",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-radius": {
		"syntax": "<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"border-top-left-radius",
			"border-top-right-radius",
			"border-bottom-right-radius",
			"border-bottom-left-radius"
		],
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-top-left-radius",
			"border-top-right-radius",
			"border-bottom-right-radius",
			"border-bottom-left-radius"
		],
		"appliesto": "allElementsUAsNotRequiredWhenCollapse",
		"computed": [
			"border-bottom-left-radius",
			"border-bottom-right-radius",
			"border-top-left-radius",
			"border-top-right-radius"
		],
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-right": {
		"syntax": "<br-width> || <br-style> || <color>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"border-right-color",
			"border-right-style",
			"border-right-width"
		],
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-right-width",
			"border-right-style",
			"border-right-color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-right-width",
			"border-right-style",
			"border-right-color"
		],
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-right-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-right-style": {
		"syntax": "<br-style>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-right-width": {
		"syntax": "<br-width>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthOr0IfBorderRightStyleNoneOrHidden",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-spacing": {
		"syntax": "<length> <length>?",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Table"
		],
		"initial": "0",
		"appliesto": "tableElements",
		"computed": "twoAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"border-style": {
		"syntax": "<br-style>{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-top-style",
			"border-right-style",
			"border-bottom-style",
			"border-left-style"
		],
		"appliesto": "allElements",
		"computed": [
			"border-bottom-style",
			"border-left-style",
			"border-right-style",
			"border-top-style"
		],
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-top": {
		"syntax": "<br-width> || <br-style> || <color>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"border-top-color",
			"border-top-style",
			"border-top-width"
		],
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-top-width",
			"border-top-style",
			"border-top-color"
		],
		"appliesto": "allElements",
		"computed": [
			"border-top-width",
			"border-top-style",
			"border-top-color"
		],
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-top-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-top-left-radius": {
		"syntax": "<length-percentage>{1,2}",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "0",
		"appliesto": "allElementsUAsNotRequiredWhenCollapse",
		"computed": "twoAbsoluteLengthOrPercentages",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-top-right-radius": {
		"syntax": "<length-percentage>{1,2}",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfBorderBox",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "0",
		"appliesto": "allElementsUAsNotRequiredWhenCollapse",
		"computed": "twoAbsoluteLengthOrPercentages",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-top-style": {
		"syntax": "<br-style>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-top-width": {
		"syntax": "<br-width>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLengthOr0IfBorderTopStyleNoneOrHidden",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"border-width": {
		"syntax": "<br-width>{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"border-bottom-width",
			"border-left-width",
			"border-right-width",
			"border-top-width"
		],
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": [
			"border-top-width",
			"border-right-width",
			"border-bottom-width",
			"border-left-width"
		],
		"appliesto": "allElements",
		"computed": [
			"border-bottom-width",
			"border-left-width",
			"border-right-width",
			"border-top-width"
		],
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"bottom": {
		"syntax": "<length> | <percentage> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToContainingBlockHeight",
		"groups": [
			"CSS Positioning"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"box-align": {
		"syntax": "start | center | end | baseline | stretch",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "stretch",
		"appliesto": "elementsWithDisplayBoxOrInlineBox",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"box-decoration-break": {
		"syntax": "slice | clone",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fragmentation"
		],
		"initial": "slice",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"box-direction": {
		"syntax": "normal | reverse | inherit",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "normal",
		"appliesto": "elementsWithDisplayBoxOrInlineBox",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"box-flex": {
		"syntax": "<number>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "0",
		"appliesto": "directChildrenOfElementsWithDisplayMozBoxMozInlineBox",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"box-flex-group": {
		"syntax": "<integer>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "1",
		"appliesto": "inFlowChildrenOfBoxElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"box-lines": {
		"syntax": "single | multiple",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "single",
		"appliesto": "boxElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"box-ordinal-group": {
		"syntax": "<integer>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "1",
		"appliesto": "childrenOfBoxElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"box-orient": {
		"syntax": "horizontal | vertical | inline-axis | block-axis | inherit",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "inlineAxisHorizontalInXUL",
		"appliesto": "elementsWithDisplayBoxOrInlineBox",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"box-pack": {
		"syntax": "start | center | end | justify",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions",
			"WebKit Extensions"
		],
		"initial": "start",
		"appliesto": "elementsWithDisplayMozBoxMozInlineBox",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"box-shadow": {
		"syntax": "none | <shadow>#",
		"media": "visual",
		"inherited": false,
		"animationType": "shadowList",
		"percentages": "no",
		"groups": [
			"CSS Backgrounds and Borders"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "absoluteLengthsSpecifiedColorAsSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"box-sizing": {
		"syntax": "content-box | border-box",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "content-box",
		"appliesto": "allElementsAcceptingWidthOrHeight",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"break-after": {
		"syntax": "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
		"media": "paged",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Columns",
			"CSS Fragmentation",
			"CSS Regions"
		],
		"initial": "auto",
		"appliesto": "blockLevelElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"break-before": {
		"syntax": "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
		"media": "paged",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Columns",
			"CSS Fragmentation",
			"CSS Regions"
		],
		"initial": "auto",
		"appliesto": "blockLevelElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"break-inside": {
		"syntax": "auto | avoid | avoid-page | avoid-column | avoid-region",
		"media": "paged",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Columns",
			"CSS Fragmentation",
			"CSS Regions"
		],
		"initial": "auto",
		"appliesto": "blockLevelElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"caption-side": {
		"syntax": "top | bottom | block-start | block-end | inline-start | inline-end",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Table"
		],
		"initial": "top",
		"appliesto": "tableCaptionElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"caret-color": {
		"syntax": "auto | <color>",
		"media": "interactive",
		"inherited": true,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asAutoOrColor",
		"order": "perGrammar",
		"status": "standard"
	},
	"clear": {
		"syntax": "none | left | right | both | inline-start | inline-end",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Positioning"
		],
		"initial": "none",
		"appliesto": "blockLevelElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"clip": {
		"syntax": "<shape> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "rectangle",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "auto",
		"appliesto": "absolutelyPositionedElements",
		"computed": "autoOrRectangle",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"clip-path": {
		"syntax": "<clip-source> | [ <basic-shape> || <geometry-box> ] | none",
		"media": "visual",
		"inherited": false,
		"animationType": "basicShapeOtherwiseNo",
		"percentages": "referToReferenceBoxWhenSpecifiedOtherwiseBorderBox",
		"groups": [
			"CSS Masking"
		],
		"initial": "none",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecifiedURLsAbsolute",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": true,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Color"
		],
		"initial": "variesFromBrowserToBrowser",
		"appliesto": "allElements",
		"computed": "translucentValuesRGBAOtherwiseRGB",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"color-adjust": {
		"syntax": "economy | exact",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Color"
		],
		"initial": "economy",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"column-count": {
		"syntax": "<integer> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "integer",
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": "auto",
		"appliesto": "blockContainersExceptTableWrappers",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"column-fill": {
		"syntax": "auto | balance | balance-all",
		"media": "visualInContinuousMediaNoEffectInOverflowColumns",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": "balance",
		"appliesto": "multicolElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"column-gap": {
		"syntax": "normal | <length-percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfContentArea",
		"groups": [
			"CSS Columns",
			"CSS Box Alignment"
		],
		"initial": "normal",
		"appliesto": "multiColumnElementsFlexContainersGridContainers",
		"computed": "asSpecifiedWithLengthsAbsoluteAndNormalComputingToZeroExceptMultiColumn",
		"order": "perGrammar",
		"status": "standard"
	},
	"column-rule": {
		"syntax": "<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"column-rule-color",
			"column-rule-style",
			"column-rule-width"
		],
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": [
			"column-rule-width",
			"column-rule-style",
			"column-rule-color"
		],
		"appliesto": "multicolElements",
		"computed": [
			"column-rule-color",
			"column-rule-style",
			"column-rule-width"
		],
		"order": "perGrammar",
		"status": "standard"
	},
	"column-rule-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": "currentcolor",
		"appliesto": "multicolElements",
		"computed": "computedColor",
		"order": "perGrammar",
		"status": "standard"
	},
	"column-rule-style": {
		"syntax": "<'border-style'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": "none",
		"appliesto": "multicolElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"column-rule-width": {
		"syntax": "<'border-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": "medium",
		"appliesto": "multicolElements",
		"computed": "absoluteLength0IfColumnRuleStyleNoneOrHidden",
		"order": "perGrammar",
		"status": "standard"
	},
	"column-span": {
		"syntax": "none | all",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": "none",
		"appliesto": "inFlowBlockLevelElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"column-width": {
		"syntax": "<length> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": "auto",
		"appliesto": "blockContainersExceptTableWrappers",
		"computed": "absoluteLengthZeroOrLarger",
		"order": "perGrammar",
		"status": "standard"
	},
	"columns": {
		"syntax": "<'column-width'> || <'column-count'>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"column-width",
			"column-count"
		],
		"percentages": "no",
		"groups": [
			"CSS Columns"
		],
		"initial": [
			"column-width",
			"column-count"
		],
		"appliesto": "blockContainersExceptTableWrappers",
		"computed": [
			"column-width",
			"column-count"
		],
		"order": "perGrammar",
		"status": "standard"
	},
	"contain": {
		"syntax": "none | strict | content | [ size || layout || style || paint ]",
		"media": "all",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Containment"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "experimental"
	},
	"content": {
		"syntax": "normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?",
		"media": "all",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Generated Content"
		],
		"initial": "normal",
		"appliesto": "beforeAndAfterPseudos",
		"computed": "normalOnElementsForPseudosNoneAbsoluteURIStringOrAsSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"counter-increment": {
		"syntax": "[ <custom-ident> <integer>? ]+ | none",
		"media": "all",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Counter Styles"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"counter-reset": {
		"syntax": "[ <custom-ident> <integer>? ]+ | none",
		"media": "all",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Counter Styles"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"cursor": {
		"syntax": "[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]",
		"media": [
			"visual",
			"interactive"
		],
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecifiedURLsAbsolute",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"direction": {
		"syntax": "ltr | rtl",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Writing Modes"
		],
		"initial": "ltr",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"display": {
		"syntax": "[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>",
		"media": "all",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Display"
		],
		"initial": "inline",
		"appliesto": "allElements",
		"computed": "asSpecifiedExceptPositionedFloatingAndRootElementsKeywordMaybeDifferent",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"empty-cells": {
		"syntax": "show | hide",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Table"
		],
		"initial": "show",
		"appliesto": "tableCellElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"filter": {
		"syntax": "none | <filter-function-list>",
		"media": "visual",
		"inherited": false,
		"animationType": "filterList",
		"percentages": "no",
		"groups": [
			"Filter Effects"
		],
		"initial": "none",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"flex": {
		"syntax": "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"flex-grow",
			"flex-shrink",
			"flex-basis"
		],
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": [
			"flex-grow",
			"flex-shrink",
			"flex-basis"
		],
		"appliesto": "flexItemsAndInFlowPseudos",
		"computed": [
			"flex-grow",
			"flex-shrink",
			"flex-basis"
		],
		"order": "orderOfAppearance",
		"status": "standard"
	},
	"flex-basis": {
		"syntax": "content | <'width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToFlexContainersInnerMainSize",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "auto",
		"appliesto": "flexItemsAndInFlowPseudos",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "lengthOrPercentageBeforeKeywordIfBothPresent",
		"status": "standard"
	},
	"flex-direction": {
		"syntax": "row | row-reverse | column | column-reverse",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "row",
		"appliesto": "flexContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"flex-flow": {
		"syntax": "<'flex-direction'> || <'flex-wrap'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": [
			"flex-direction",
			"flex-wrap"
		],
		"appliesto": "flexContainers",
		"computed": [
			"flex-direction",
			"flex-wrap"
		],
		"order": "orderOfAppearance",
		"status": "standard"
	},
	"flex-grow": {
		"syntax": "<number>",
		"media": "visual",
		"inherited": false,
		"animationType": "number",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "0",
		"appliesto": "flexItemsAndInFlowPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"flex-shrink": {
		"syntax": "<number>",
		"media": "visual",
		"inherited": false,
		"animationType": "number",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "1",
		"appliesto": "flexItemsAndInFlowPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"flex-wrap": {
		"syntax": "nowrap | wrap | wrap-reverse",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "nowrap",
		"appliesto": "flexContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"float": {
		"syntax": "left | right | none | inline-start | inline-end",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Positioning"
		],
		"initial": "none",
		"appliesto": "allElementsNoEffectIfDisplayNone",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"font": {
		"syntax": "[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar",
		"media": "visual",
		"inherited": true,
		"animationType": [
			"font-style",
			"font-variant",
			"font-weight",
			"font-stretch",
			"font-size",
			"line-height",
			"font-family"
		],
		"percentages": [
			"font-size",
			"line-height"
		],
		"groups": [
			"CSS Fonts"
		],
		"initial": [
			"font-style",
			"font-variant",
			"font-weight",
			"font-stretch",
			"font-size",
			"line-height",
			"font-family"
		],
		"appliesto": "allElements",
		"computed": [
			"font-style",
			"font-variant",
			"font-weight",
			"font-stretch",
			"font-size",
			"line-height",
			"font-family"
		],
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-family": {
		"syntax": "[ <family-name> | <generic-family> ]#",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-feature-settings": {
		"syntax": "normal | <feature-tag-value>#",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-kerning": {
		"syntax": "auto | normal | none",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-language-override": {
		"syntax": "normal | <string>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-variation-settings": {
		"syntax": "normal | [ <string> <number> ]#",
		"media": "visual",
		"inherited": true,
		"animationType": "transform",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "experimental"
	},
	"font-size": {
		"syntax": "<absolute-size> | <relative-size> | <length-percentage>",
		"media": "visual",
		"inherited": true,
		"animationType": "length",
		"percentages": "referToParentElementsFontSize",
		"groups": [
			"CSS Fonts"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-size-adjust": {
		"syntax": "none | <number>",
		"media": "visual",
		"inherited": true,
		"animationType": "number",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-stretch": {
		"syntax": "normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded",
		"media": "visual",
		"inherited": true,
		"animationType": "fontStretch",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-style": {
		"syntax": "normal | italic | oblique",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-synthesis": {
		"syntax": "none | [ weight || style ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "weight style",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-variant": {
		"syntax": "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-variant-alternates": {
		"syntax": "normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-variant-caps": {
		"syntax": "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-variant-east-asian": {
		"syntax": "normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-variant-ligatures": {
		"syntax": "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-variant-numeric": {
		"syntax": "normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-variant-position": {
		"syntax": "normal | sub | super",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"font-weight": {
		"syntax": "normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900",
		"media": "visual",
		"inherited": true,
		"animationType": "fontWeight",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "keywordOrNumericalValueBolderLighterTransformedToRealValue",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"gap": {
		"syntax": "<'row-gap'> <'column-gap'>?",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"row-gap",
			"column-gap"
		],
		"percentages": "no",
		"groups": [
			"CSS Box Alignment"
		],
		"initial": [
			"row-gap",
			"column-gap"
		],
		"appliesto": "gridContainers",
		"computed": [
			"row-gap",
			"column-gap"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid": {
		"syntax": "<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": [
			"grid-template-rows",
			"grid-template-columns",
			"grid-auto-rows",
			"grid-auto-columns"
		],
		"groups": [
			"CSS Grid Layout"
		],
		"initial": [
			"grid-template-rows",
			"grid-template-columns",
			"grid-template-areas",
			"grid-auto-rows",
			"grid-auto-columns",
			"grid-auto-flow",
			"grid-column-gap",
			"grid-row-gap",
			"column-gap",
			"row-gap"
		],
		"appliesto": "gridContainers",
		"computed": [
			"grid-template-rows",
			"grid-template-columns",
			"grid-template-areas",
			"grid-auto-rows",
			"grid-auto-columns",
			"grid-auto-flow",
			"grid-column-gap",
			"grid-row-gap",
			"column-gap",
			"row-gap"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-area": {
		"syntax": "<grid-line> [ / <grid-line> ]{0,3}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": [
			"grid-row-start",
			"grid-column-start",
			"grid-row-end",
			"grid-column-end"
		],
		"appliesto": "gridItemsAndBoxesWithinGridContainer",
		"computed": [
			"grid-row-start",
			"grid-column-start",
			"grid-row-end",
			"grid-column-end"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-auto-columns": {
		"syntax": "<track-size>+",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToDimensionOfContentArea",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "auto",
		"appliesto": "gridContainers",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-auto-flow": {
		"syntax": "[ row | column ] || dense",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "row",
		"appliesto": "gridContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-auto-rows": {
		"syntax": "<track-size>+",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToDimensionOfContentArea",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "auto",
		"appliesto": "gridContainers",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-column": {
		"syntax": "<grid-line> [ / <grid-line> ]?",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": [
			"grid-column-start",
			"grid-column-end"
		],
		"appliesto": "gridItemsAndBoxesWithinGridContainer",
		"computed": [
			"grid-column-start",
			"grid-column-end"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-column-end": {
		"syntax": "<grid-line>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "auto",
		"appliesto": "gridItemsAndBoxesWithinGridContainer",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-column-gap": {
		"syntax": "<length-percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToDimensionOfContentArea",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "0",
		"appliesto": "gridContainers",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"status": "obsolete"
	},
	"grid-column-start": {
		"syntax": "<grid-line>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "auto",
		"appliesto": "gridItemsAndBoxesWithinGridContainer",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-gap": {
		"syntax": "<'grid-row-gap'> <'grid-column-gap'>?",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"grid-row-gap",
			"grid-column-gap"
		],
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": [
			"grid-row-gap",
			"grid-column-gap"
		],
		"appliesto": "gridContainers",
		"computed": [
			"grid-row-gap",
			"grid-column-gap"
		],
		"order": "uniqueOrder",
		"status": "obsolete"
	},
	"grid-row": {
		"syntax": "<grid-line> [ / <grid-line> ]?",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": [
			"grid-row-start",
			"grid-row-end"
		],
		"appliesto": "gridItemsAndBoxesWithinGridContainer",
		"computed": [
			"grid-row-start",
			"grid-row-end"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-row-end": {
		"syntax": "<grid-line>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "auto",
		"appliesto": "gridItemsAndBoxesWithinGridContainer",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-row-gap": {
		"syntax": "<length-percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToDimensionOfContentArea",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "0",
		"appliesto": "gridContainers",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"status": "obsolete"
	},
	"grid-row-start": {
		"syntax": "<grid-line>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "auto",
		"appliesto": "gridItemsAndBoxesWithinGridContainer",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-template": {
		"syntax": "none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": [
			"grid-template-columns",
			"grid-template-rows"
		],
		"groups": [
			"CSS Grid Layout"
		],
		"initial": [
			"grid-template-columns",
			"grid-template-rows",
			"grid-template-areas"
		],
		"appliesto": "gridContainers",
		"computed": [
			"grid-template-columns",
			"grid-template-rows",
			"grid-template-areas"
		],
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-template-areas": {
		"syntax": "none | <string>+",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "none",
		"appliesto": "gridContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-template-columns": {
		"syntax": "none | <track-list> | <auto-track-list>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToDimensionOfContentArea",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "none",
		"appliesto": "gridContainers",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"grid-template-rows": {
		"syntax": "none | <track-list> | <auto-track-list>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToDimensionOfContentArea",
		"groups": [
			"CSS Grid Layout"
		],
		"initial": "none",
		"appliesto": "gridContainers",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"hanging-punctuation": {
		"syntax": "none | [ first || [ force-end | allow-end ] || last ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"height": {
		"syntax": "[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "regardingHeightOfGeneratedBoxContainingBlockPercentagesRelativeToContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "auto",
		"appliesto": "allElementsButNonReplacedAndTableColumns",
		"computed": "percentageAutoOrAbsoluteLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"hyphens": {
		"syntax": "none | manual | auto",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "manual",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"image-orientation": {
		"syntax": "from-image | <angle> | [ <angle>? flip ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Images"
		],
		"initial": "0deg",
		"appliesto": "allElements",
		"computed": "angleRoundedToNextQuarter",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"image-rendering": {
		"syntax": "auto | crisp-edges | pixelated",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Images"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"image-resolution": {
		"syntax": "[ from-image || <resolution> ] && snap?",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Images"
		],
		"initial": "1dppx",
		"appliesto": "allElements",
		"computed": "asSpecifiedWithExceptionOfResolution",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"ime-mode": {
		"syntax": "auto | normal | active | inactive | disabled",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "auto",
		"appliesto": "textFields",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "obsolete"
	},
	"initial-letter": {
		"syntax": "normal | [ <number> <integer>? ]",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Inline"
		],
		"initial": "normal",
		"appliesto": "firstLetterPseudoElementsAndInlineLevelFirstChildren",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"initial-letter-align": {
		"syntax": "[ auto | alphabetic | hanging | ideographic ]",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Inline"
		],
		"initial": "auto",
		"appliesto": "firstLetterPseudoElementsAndInlineLevelFirstChildren",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"inline-size": {
		"syntax": "<'width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "inlineSizeOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "auto",
		"appliesto": "sameAsWidthAndHeight",
		"computed": "sameAsWidthAndHeight",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"isolation": {
		"syntax": "auto | isolate",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Compositing and Blending"
		],
		"initial": "auto",
		"appliesto": "allElementsSVGContainerGraphicsAndGraphicsReferencingElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"justify-content": {
		"syntax": "normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "normal",
		"appliesto": "flexContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"justify-items": {
		"syntax": "normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Box Alignment"
		],
		"initial": "legacy",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"justify-self": {
		"syntax": "auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Box Alignment"
		],
		"initial": "auto",
		"appliesto": "blockLevelBoxesAndAbsolutelyPositionedBoxesAndGridItems",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"left": {
		"syntax": "<length> | <percentage> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Positioning"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"letter-spacing": {
		"syntax": "normal | <length>",
		"media": "visual",
		"inherited": true,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "optimumValueOfAbsoluteLengthOrNormal",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line"
		],
		"status": "standard"
	},
	"line-break": {
		"syntax": "auto | loose | normal | strict",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"line-height": {
		"syntax": "normal | <number> | <length> | <percentage>",
		"media": "visual",
		"inherited": true,
		"animationType": "numberOrLength",
		"percentages": "referToElementFontSize",
		"groups": [
			"CSS Fonts"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "absoluteLengthOrAsSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"line-height-step": {
		"syntax": "none | <length>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Fonts"
		],
		"initial": "none",
		"appliesto": "blockContainerElements",
		"computed": "absoluteLength0ForNone",
		"order": "perGrammar",
		"status": "experimental"
	},
	"list-style": {
		"syntax": "<'list-style-type'> || <'list-style-position'> || <'list-style-image'>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Lists and Counters"
		],
		"initial": [
			"list-style-type",
			"list-style-position",
			"list-style-image"
		],
		"appliesto": "listItems",
		"computed": [
			"list-style-image",
			"list-style-position",
			"list-style-type"
		],
		"order": "orderOfAppearance",
		"status": "standard"
	},
	"list-style-image": {
		"syntax": "<url> | none",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Lists and Counters"
		],
		"initial": "none",
		"appliesto": "listItems",
		"computed": "noneOrImageWithAbsoluteURI",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"list-style-position": {
		"syntax": "inside | outside",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Lists and Counters"
		],
		"initial": "outside",
		"appliesto": "listItems",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"list-style-type": {
		"syntax": "<counter-style> | <string> | none",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Lists and Counters"
		],
		"initial": "disc",
		"appliesto": "listItems",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"margin": {
		"syntax": "[ <length> | <percentage> | auto ]{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": [
			"margin-bottom",
			"margin-left",
			"margin-right",
			"margin-top"
		],
		"appliesto": "allElementsExceptTableDisplayTypes",
		"computed": [
			"margin-bottom",
			"margin-left",
			"margin-right",
			"margin-top"
		],
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"margin-block-end": {
		"syntax": "<'margin-left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "dependsOnLayoutModel",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "sameAsMargin",
		"computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"margin-block-start": {
		"syntax": "<'margin-left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "dependsOnLayoutModel",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "sameAsMargin",
		"computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"margin-bottom": {
		"syntax": "<length> | <percentage> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsExceptTableDisplayTypes",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"margin-inline-end": {
		"syntax": "<'margin-left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "dependsOnLayoutModel",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "sameAsMargin",
		"computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"margin-inline-start": {
		"syntax": "<'margin-left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "dependsOnLayoutModel",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "sameAsMargin",
		"computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"margin-left": {
		"syntax": "<length> | <percentage> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsExceptTableDisplayTypes",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"margin-right": {
		"syntax": "<length> | <percentage> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsExceptTableDisplayTypes",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"margin-top": {
		"syntax": "<length> | <percentage> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsExceptTableDisplayTypes",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"mask": {
		"syntax": "<mask-layer>#",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"mask-image",
			"mask-mode",
			"mask-repeat",
			"mask-position",
			"mask-clip",
			"mask-origin",
			"mask-size",
			"mask-composite"
		],
		"percentages": [
			"mask-position"
		],
		"groups": [
			"CSS Masking"
		],
		"initial": [
			"mask-image",
			"mask-mode",
			"mask-repeat",
			"mask-position",
			"mask-clip",
			"mask-origin",
			"mask-size",
			"mask-composite"
		],
		"appliesto": "allElementsSVGContainerElements",
		"computed": [
			"mask-image",
			"mask-mode",
			"mask-repeat",
			"mask-position",
			"mask-clip",
			"mask-origin",
			"mask-size",
			"mask-composite"
		],
		"order": "perGrammar",
		"stacking": true,
		"status": "standard"
	},
	"mask-border": {
		"syntax": "<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"mask-border-mode",
			"mask-border-outset",
			"mask-border-repeat",
			"mask-border-slice",
			"mask-border-source",
			"mask-border-width"
		],
		"percentages": [
			"mask-border-slice",
			"mask-border-width"
		],
		"groups": [
			"CSS Masking"
		],
		"initial": [
			"mask-border-mode",
			"mask-border-outset",
			"mask-border-repeat",
			"mask-border-slice",
			"mask-border-source",
			"mask-border-width"
		],
		"appliesto": "allElementsSVGContainerElements",
		"computed": [
			"mask-border-mode",
			"mask-border-outset",
			"mask-border-repeat",
			"mask-border-slice",
			"mask-border-source",
			"mask-border-width"
		],
		"order": "perGrammar",
		"stacking": true,
		"status": "experimental"
	},
	"mask-border-mode": {
		"syntax": "luminance | alpha",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "alpha",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "experimental"
	},
	"mask-border-outset": {
		"syntax": "[ <length> | <number> ]{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "0",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "perGrammar",
		"status": "experimental"
	},
	"mask-border-repeat": {
		"syntax": "[ stretch | repeat | round | space ]{1,2}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "stretch",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "experimental"
	},
	"mask-border-slice": {
		"syntax": "<number-percentage>{1,4} fill?",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "referToSizeOfMaskBorderImage",
		"groups": [
			"CSS Masking"
		],
		"initial": "0",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "experimental"
	},
	"mask-border-source": {
		"syntax": "none | <image>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "none",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecifiedURLsAbsolute",
		"order": "perGrammar",
		"status": "experimental"
	},
	"mask-border-width": {
		"syntax": "[ <length-percentage> | <number> | auto ]{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "relativeToMaskBorderImageArea",
		"groups": [
			"CSS Masking"
		],
		"initial": "auto",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "perGrammar",
		"status": "experimental"
	},
	"mask-clip": {
		"syntax": "[ <geometry-box> | no-clip ]#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "border-box",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"mask-composite": {
		"syntax": "<compositing-operator>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "add",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"mask-image": {
		"syntax": "<mask-reference>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "none",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecifiedURLsAbsolute",
		"order": "perGrammar",
		"status": "standard"
	},
	"mask-mode": {
		"syntax": "<masking-mode>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "match-source",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"mask-origin": {
		"syntax": "<geometry-box>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "border-box",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"mask-position": {
		"syntax": "<position>#",
		"media": "visual",
		"inherited": false,
		"animationType": "repeatableListOfSimpleListOfLpc",
		"percentages": "referToSizeOfMaskPaintingArea",
		"groups": [
			"CSS Masking"
		],
		"initial": "center",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "consistsOfTwoKeywordsForOriginAndOffsets",
		"order": "perGrammar",
		"status": "standard"
	},
	"mask-repeat": {
		"syntax": "<repeat-style>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "no-repeat",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "consistsOfTwoDimensionKeywords",
		"order": "perGrammar",
		"status": "standard"
	},
	"mask-size": {
		"syntax": "<bg-size>#",
		"media": "visual",
		"inherited": false,
		"animationType": "repeatableListOfSimpleListOfLpc",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "auto",
		"appliesto": "allElementsSVGContainerElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "perGrammar",
		"status": "standard"
	},
	"mask-type": {
		"syntax": "luminance | alpha",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Masking"
		],
		"initial": "luminance",
		"appliesto": "maskElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"max-block-size": {
		"syntax": "<'max-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "blockSizeOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "sameAsWidthAndHeight",
		"computed": "sameAsMaxWidthAndMaxHeight",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"max-height": {
		"syntax": "<length> | <percentage> | none | max-content | min-content | fit-content | fill-available",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "regardingHeightOfGeneratedBoxContainingBlockPercentagesNone",
		"groups": [
			"CSS Box Model"
		],
		"initial": "none",
		"appliesto": "allElementsButNonReplacedAndTableColumns",
		"computed": "percentageAsSpecifiedAbsoluteLengthOrNone",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"max-inline-size": {
		"syntax": "<'max-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "inlineSizeOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "sameAsWidthAndHeight",
		"computed": "sameAsMaxWidthAndMaxHeight",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"max-width": {
		"syntax": "<length> | <percentage> | none | max-content | min-content | fit-content | fill-available",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "none",
		"appliesto": "allElementsButNonReplacedAndTableRows",
		"computed": "percentageAsSpecifiedAbsoluteLengthOrNone",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"min-block-size": {
		"syntax": "<'min-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "blockSizeOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "sameAsWidthAndHeight",
		"computed": "sameAsMinWidthAndMinHeight",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"min-height": {
		"syntax": "<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "regardingHeightOfGeneratedBoxContainingBlockPercentages0",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsButNonReplacedAndTableColumns",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"min-inline-size": {
		"syntax": "<'min-width'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "inlineSizeOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "sameAsWidthAndHeight",
		"computed": "sameAsMinWidthAndMinHeight",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"min-width": {
		"syntax": "<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsButNonReplacedAndTableRows",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"mix-blend-mode": {
		"syntax": "<blend-mode>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Compositing and Blending"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"stacking": true,
		"status": "standard"
	},
	"object-fit": {
		"syntax": "fill | contain | cover | none | scale-down",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Images"
		],
		"initial": "fill",
		"appliesto": "replacedElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"object-position": {
		"syntax": "<position>",
		"media": "visual",
		"inherited": true,
		"animationType": "repeatableListOfSimpleListOfLpc",
		"percentages": "referToWidthAndHeightOfElement",
		"groups": [
			"CSS Images"
		],
		"initial": "50% 50%",
		"appliesto": "replacedElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"offset": {
		"syntax": "[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"offset-position",
			"offset-path",
			"offset-distance",
			"offset-anchor",
			"offset-rotate"
		],
		"percentages": [
			"offset-position",
			"offset-distance",
			"offset-anchor"
		],
		"groups": [
			"CSS Motion"
		],
		"initial": [
			"offset-position",
			"offset-path",
			"offset-distance",
			"offset-anchor",
			"offset-rotate"
		],
		"appliesto": "transformableElements",
		"computed": [
			"offset-position",
			"offset-path",
			"offset-distance",
			"offset-anchor",
			"offset-rotate"
		],
		"order": "perGrammar",
		"stacking": true,
		"status": "experimental"
	},
	"offset-anchor": {
		"syntax": "auto | <position>",
		"media": "visual",
		"inherited": false,
		"animationType": "position",
		"percentages": "relativeToWidthAndHeight",
		"groups": [
			"CSS Motion"
		],
		"initial": "auto",
		"appliesto": "transformableElements",
		"computed": "forLengthAbsoluteValueOtherwisePercentage",
		"order": "perGrammar",
		"status": "experimental"
	},
	"offset-block-end": {
		"syntax": "<'left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalHeightOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "sameAsBoxOffsets",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"offset-block-start": {
		"syntax": "<'left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalHeightOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "sameAsBoxOffsets",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"offset-inline-end": {
		"syntax": "<'left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "sameAsBoxOffsets",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"offset-inline-start": {
		"syntax": "<'left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "sameAsBoxOffsets",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"offset-distance": {
		"syntax": "<length-percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToTotalPathLength",
		"groups": [
			"CSS Motion"
		],
		"initial": "0",
		"appliesto": "transformableElements",
		"computed": "forLengthAbsoluteValueOtherwisePercentage",
		"order": "perGrammar",
		"status": "experimental"
	},
	"offset-path": {
		"syntax": "none | ray( [ <angle> && <size>? && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]",
		"media": "visual",
		"inherited": false,
		"animationType": "angleOrBasicShapeOrPath",
		"percentages": "no",
		"groups": [
			"CSS Motion"
		],
		"initial": "none",
		"appliesto": "transformableElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"stacking": true,
		"status": "experimental"
	},
	"offset-position": {
		"syntax": "auto | <position>",
		"media": "visual",
		"inherited": false,
		"animationType": "position",
		"percentages": "referToSizeOfContainingBlock",
		"groups": [
			"CSS Motion"
		],
		"initial": "auto",
		"appliesto": "transformableElements",
		"computed": "forLengthAbsoluteValueOtherwisePercentage",
		"order": "perGrammar",
		"status": "experimental"
	},
	"offset-rotate": {
		"syntax": "[ auto | reverse ] || <angle>",
		"media": "visual",
		"inherited": false,
		"animationType": "angle",
		"percentages": "no",
		"groups": [
			"CSS Motion"
		],
		"initial": "auto",
		"appliesto": "transformableElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "experimental"
	},
	"opacity": {
		"syntax": "<number>",
		"media": "visual",
		"inherited": false,
		"animationType": "number",
		"percentages": "no",
		"groups": [
			"CSS Color"
		],
		"initial": "1.0",
		"appliesto": "allElements",
		"computed": "specifiedValueClipped0To1",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::placeholder"
		],
		"status": "standard"
	},
	"order": {
		"syntax": "<integer>",
		"media": "visual",
		"inherited": false,
		"animationType": "integer",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "0",
		"appliesto": "flexItemsAndAbsolutelyPositionedFlexContainerChildren",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"orphans": {
		"syntax": "<integer>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Columns",
			"CSS Fragmentation"
		],
		"initial": "2",
		"appliesto": "blockContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"outline": {
		"syntax": "[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]",
		"media": [
			"visual",
			"interactive"
		],
		"inherited": false,
		"animationType": [
			"outline-color",
			"outline-width",
			"outline-style"
		],
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": [
			"outline-color",
			"outline-style",
			"outline-width"
		],
		"appliesto": "allElements",
		"computed": [
			"outline-color",
			"outline-width",
			"outline-style"
		],
		"order": "orderOfAppearance",
		"status": "standard"
	},
	"outline-color": {
		"syntax": "<color> | invert",
		"media": [
			"visual",
			"interactive"
		],
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "invertOrCurrentColor",
		"appliesto": "allElements",
		"computed": "invertForTranslucentColorRGBAOtherwiseRGB",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"outline-offset": {
		"syntax": "<length>",
		"media": [
			"visual",
			"interactive"
		],
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"outline-style": {
		"syntax": "auto | <br-style>",
		"media": [
			"visual",
			"interactive"
		],
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"outline-width": {
		"syntax": "<br-width>",
		"media": [
			"visual",
			"interactive"
		],
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "medium",
		"appliesto": "allElements",
		"computed": "absoluteLength0ForNone",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"overflow": {
		"syntax": "visible | hidden | scroll | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Box Model"
		],
		"initial": "visible",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"overflow-clip-box": {
		"syntax": "padding-box | content-box",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Mozilla Extensions"
		],
		"initial": "padding-box",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"overflow-wrap": {
		"syntax": "normal | break-word",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"overflow-x": {
		"syntax": "visible | hidden | scroll | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Box Model"
		],
		"initial": "visible",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"overflow-y": {
		"syntax": "visible | hidden | scroll | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Box Model"
		],
		"initial": "visible",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"overscroll-behavior": {
		"syntax": "[ contain | none | auto ]{1,2}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Box Model"
		],
		"initial": "auto",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"overscroll-behavior-x": {
		"syntax": "contain | none | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Box Model"
		],
		"initial": "auto",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"overscroll-behavior-y": {
		"syntax": "contain | none | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Box Model"
		],
		"initial": "auto",
		"appliesto": "nonReplacedBlockAndInlineBlockElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"padding": {
		"syntax": "[ <length> | <percentage> ]{1,4}",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": [
			"padding-bottom",
			"padding-left",
			"padding-right",
			"padding-top"
		],
		"appliesto": "allElementsExceptInternalTableDisplayTypes",
		"computed": [
			"padding-bottom",
			"padding-left",
			"padding-right",
			"padding-top"
		],
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"padding-block-end": {
		"syntax": "<'padding-left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"padding-block-start": {
		"syntax": "<'padding-left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"padding-bottom": {
		"syntax": "<length> | <percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsExceptInternalTableDisplayTypes",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"padding-inline-end": {
		"syntax": "<'padding-left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"padding-inline-start": {
		"syntax": "<'padding-left'>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "logicalWidthOfContainingBlock",
		"groups": [
			"CSS Logical Properties"
		],
		"initial": "0",
		"appliesto": "allElements",
		"computed": "asLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"padding-left": {
		"syntax": "<length> | <percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsExceptInternalTableDisplayTypes",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"padding-right": {
		"syntax": "<length> | <percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsExceptInternalTableDisplayTypes",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"padding-top": {
		"syntax": "<length> | <percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "0",
		"appliesto": "allElementsExceptInternalTableDisplayTypes",
		"computed": "percentageAsSpecifiedOrAbsoluteLength",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter"
		],
		"status": "standard"
	},
	"page-break-after": {
		"syntax": "auto | always | avoid | left | right",
		"media": [
			"visual",
			"paged"
		],
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Pages"
		],
		"initial": "auto",
		"appliesto": "blockElementsInNormalFlow",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"page-break-before": {
		"syntax": "auto | always | avoid | left | right",
		"media": [
			"visual",
			"paged"
		],
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Pages"
		],
		"initial": "auto",
		"appliesto": "blockElementsInNormalFlow",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"page-break-inside": {
		"syntax": "auto | avoid",
		"media": [
			"visual",
			"paged"
		],
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Pages"
		],
		"initial": "auto",
		"appliesto": "blockElementsInNormalFlow",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"paint-order": {
		"syntax": "normal | [ fill || stroke || markers ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "normal",
		"appliesto": "textElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"perspective": {
		"syntax": "none | <length>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Transforms"
		],
		"initial": "none",
		"appliesto": "transformableElements",
		"computed": "absoluteLengthOrNone",
		"order": "uniqueOrder",
		"stacking": true,
		"status": "standard"
	},
	"perspective-origin": {
		"syntax": "<position>",
		"media": "visual",
		"inherited": false,
		"animationType": "simpleListOfLpc",
		"percentages": "referToSizeOfBoundingBox",
		"groups": [
			"CSS Transforms"
		],
		"initial": "50% 50%",
		"appliesto": "transformableElements",
		"computed": "forLengthAbsoluteValueOtherwisePercentage",
		"order": "oneOrTwoValuesLengthAbsoluteKeywordsPercentages",
		"status": "standard"
	},
	"place-content": {
		"syntax": "<'align-content'> <'justify-content'>?",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Flexible Box Layout"
		],
		"initial": "normal",
		"appliesto": "multilineFlexContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"pointer-events": {
		"syntax": "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Pointer Events"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"position": {
		"syntax": "static | relative | absolute | sticky | fixed",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Positioning"
		],
		"initial": "static",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"stacking": true,
		"status": "standard"
	},
	"quotes": {
		"syntax": "none | [ <string> <string> ]+",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Generated Content"
		],
		"initial": "dependsOnUserAgent",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"resize": {
		"syntax": "none | both | horizontal | vertical",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "none",
		"appliesto": "elementsWithOverflowNotVisibleAndReplacedElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"right": {
		"syntax": "<length> | <percentage> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Positioning"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"rotate": {
		"syntax": "none | [ x | y | z | <number>{3} ]? && <angle>",
		"media": "visual",
		"inherited": false,
		"animationType": "transform",
		"percentages": "no",
		"groups": [
			"CSS Transforms"
		],
		"initial": "none",
		"appliesto": "transformableElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"stacking": true,
		"status": "standard"
	},
	"row-gap": {
		"syntax": "normal | <length-percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToDimensionOfContentArea",
		"groups": [
			"CSS Box Alignment"
		],
		"initial": "normal",
		"appliesto": "multiColumnElementsFlexContainersGridContainers",
		"computed": "asSpecifiedWithLengthsAbsoluteAndNormalComputingToZeroExceptMultiColumn",
		"order": "perGrammar",
		"status": "standard"
	},
	"ruby-align": {
		"syntax": "start | center | space-between | space-around",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Ruby"
		],
		"initial": "space-around",
		"appliesto": "rubyBasesAnnotationsBaseAnnotationContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"ruby-merge": {
		"syntax": "separate | collapse | auto",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Ruby"
		],
		"initial": "separate",
		"appliesto": "rubyAnnotationsContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"ruby-position": {
		"syntax": "over | under | inter-character",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Ruby"
		],
		"initial": "over",
		"appliesto": "rubyAnnotationsContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"scale": {
		"syntax": "none | <number>{1,3}",
		"media": "visual",
		"inherited": false,
		"animationType": "transform",
		"percentages": "no",
		"groups": [
			"CSS Transforms"
		],
		"initial": "none",
		"appliesto": "transformableElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"stacking": true,
		"status": "standard"
	},
	"scroll-behavior": {
		"syntax": "auto | smooth",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSSOM View"
		],
		"initial": "auto",
		"appliesto": "scrollingBoxes",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"scroll-snap-coordinate": {
		"syntax": "none | <position>#",
		"media": "interactive",
		"inherited": false,
		"animationType": "position",
		"percentages": "referToBorderBox",
		"groups": [
			"CSS Scroll Snap"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"scroll-snap-destination": {
		"syntax": "<position>",
		"media": "interactive",
		"inherited": false,
		"animationType": "position",
		"percentages": "relativeToScrollContainerPaddingBoxAxis",
		"groups": [
			"CSS Scroll Snap"
		],
		"initial": "0px 0px",
		"appliesto": "scrollContainers",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"scroll-snap-points-x": {
		"syntax": "none | repeat( <length-percentage> )",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "relativeToScrollContainerPaddingBoxAxis",
		"groups": [
			"CSS Scroll Snap"
		],
		"initial": "none",
		"appliesto": "scrollContainers",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "obsolete"
	},
	"scroll-snap-points-y": {
		"syntax": "none | repeat( <length-percentage> )",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "relativeToScrollContainerPaddingBoxAxis",
		"groups": [
			"CSS Scroll Snap"
		],
		"initial": "none",
		"appliesto": "scrollContainers",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "obsolete"
	},
	"scroll-snap-type": {
		"syntax": "none | mandatory | proximity",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Scroll Snap"
		],
		"initial": "none",
		"appliesto": "scrollContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"scroll-snap-type-x": {
		"syntax": "none | mandatory | proximity",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Scroll Snap"
		],
		"initial": "none",
		"appliesto": "scrollContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"scroll-snap-type-y": {
		"syntax": "none | mandatory | proximity",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Scroll Snap"
		],
		"initial": "none",
		"appliesto": "scrollContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"shape-image-threshold": {
		"syntax": "<number>",
		"media": "visual",
		"inherited": false,
		"animationType": "number",
		"percentages": "no",
		"groups": [
			"CSS Shapes"
		],
		"initial": "0.0",
		"appliesto": "floats",
		"computed": "specifiedValueNumberClipped0To1",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"shape-margin": {
		"syntax": "<length-percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Shapes"
		],
		"initial": "0",
		"appliesto": "floats",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"shape-outside": {
		"syntax": "none | <shape-box> || <basic-shape> | <image>",
		"media": "visual",
		"inherited": false,
		"animationType": "basicShapeOtherwiseNo",
		"percentages": "no",
		"groups": [
			"CSS Shapes"
		],
		"initial": "none",
		"appliesto": "floats",
		"computed": "asDefinedForBasicShapeWithAbsoluteURIOtherwiseAsSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"tab-size": {
		"syntax": "<integer> | <length>",
		"media": "visual",
		"inherited": true,
		"animationType": "length",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "8",
		"appliesto": "blockContainers",
		"computed": "specifiedIntegerOrAbsoluteLength",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"table-layout": {
		"syntax": "auto | fixed",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Table"
		],
		"initial": "auto",
		"appliesto": "tableElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-align": {
		"syntax": "start | end | left | right | center | justify | match-parent",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "startOrNamelessValueIfLTRRightIfRTL",
		"appliesto": "blockContainers",
		"computed": "asSpecifiedExceptMatchParent",
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::placeholder"
		],
		"status": "standard"
	},
	"text-align-last": {
		"syntax": "auto | start | end | left | right | center | justify",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "auto",
		"appliesto": "blockContainers",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-combine-upright": {
		"syntax": "none | all | [ digits <integer>? ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Writing Modes"
		],
		"initial": "none",
		"appliesto": "nonReplacedInlineElements",
		"computed": "keywordPlusIntegerIfDigits",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-decoration": {
		"syntax": "<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"text-decoration-color",
			"text-decoration-style",
			"text-decoration-line"
		],
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": [
			"text-decoration-color",
			"text-decoration-style",
			"text-decoration-line"
		],
		"appliesto": "allElements",
		"computed": [
			"text-decoration-line",
			"text-decoration-style",
			"text-decoration-color"
		],
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"text-decoration-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"text-decoration-line": {
		"syntax": "none | [ underline || overline || line-through || blink ]",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"text-decoration-skip": {
		"syntax": "none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "objects",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "experimental"
	},
	"text-decoration-skip-ink": {
		"syntax": "auto | none",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "experimental"
	},
	"text-decoration-style": {
		"syntax": "solid | double | dotted | dashed | wavy",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "solid",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"text-emphasis": {
		"syntax": "<'text-emphasis-style'> || <'text-emphasis-color'>",
		"media": "visual",
		"inherited": false,
		"animationType": [
			"text-emphasis-color",
			"text-emphasis-style"
		],
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": [
			"text-emphasis-style",
			"text-emphasis-color"
		],
		"appliesto": "allElements",
		"computed": [
			"text-emphasis-style",
			"text-emphasis-color"
		],
		"order": "orderOfAppearance",
		"status": "standard"
	},
	"text-emphasis-color": {
		"syntax": "<color>",
		"media": "visual",
		"inherited": false,
		"animationType": "color",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "currentcolor",
		"appliesto": "allElements",
		"computed": "computedColor",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-emphasis-position": {
		"syntax": "[ over | under ] && [ right | left ]",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "over right",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-emphasis-style": {
		"syntax": "none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-indent": {
		"syntax": "<length-percentage> && hanging? && each-line?",
		"media": "visual",
		"inherited": true,
		"animationType": "lpc",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Text"
		],
		"initial": "0",
		"appliesto": "blockContainers",
		"computed": "percentageOrAbsoluteLengthPlusKeywords",
		"order": "lengthOrPercentageBeforeKeywords",
		"status": "standard"
	},
	"text-justify": {
		"syntax": "auto | inter-character | inter-word | none",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "auto",
		"appliesto": "inlineLevelAndTableCellElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-orientation": {
		"syntax": "mixed | upright | sideways",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Writing Modes"
		],
		"initial": "mixed",
		"appliesto": "allElementsExceptTableRowGroupsRowsColumnGroupsAndColumns",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-overflow": {
		"syntax": "[ clip | ellipsis | <string> ]{1,2}",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "clip",
		"appliesto": "blockContainerElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::placeholder"
		],
		"status": "standard"
	},
	"text-rendering": {
		"syntax": "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Miscellaneous"
		],
		"initial": "auto",
		"appliesto": "textElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"text-shadow": {
		"syntax": "none | <shadow-t>#",
		"media": "visual",
		"inherited": true,
		"animationType": "shadowList",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "colorPlusThreeAbsoluteLengths",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"text-size-adjust": {
		"syntax": "none | auto | <percentage>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "referToSizeOfFont",
		"groups": [
			"CSS Text"
		],
		"initial": "autoForSmartphoneBrowsersSupportingInflation",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "experimental"
	},
	"text-transform": {
		"syntax": "none | capitalize | uppercase | lowercase | full-width",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "none",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"text-underline-position": {
		"syntax": "auto | [ under || [ left | right ] ]",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text Decoration"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "orderOfAppearance",
		"status": "standard"
	},
	"top": {
		"syntax": "<length> | <percentage> | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToContainingBlockHeight",
		"groups": [
			"CSS Positioning"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"touch-action": {
		"syntax": "auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"Pointer Events"
		],
		"initial": "auto",
		"appliesto": "allElementsExceptNonReplacedInlineElementsTableRowsColumnsRowColumnGroups",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"transform": {
		"syntax": "none | <transform-list>",
		"media": "visual",
		"inherited": false,
		"animationType": "transform",
		"percentages": "referToSizeOfBoundingBox",
		"groups": [
			"CSS Transforms"
		],
		"initial": "none",
		"appliesto": "transformableElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "uniqueOrder",
		"stacking": true,
		"status": "standard"
	},
	"transform-box": {
		"syntax": "border-box | fill-box | view-box",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Transforms"
		],
		"initial": "border-box ",
		"appliesto": "transformableElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"transform-origin": {
		"syntax": "[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?",
		"media": "visual",
		"inherited": false,
		"animationType": "simpleListOfLpc",
		"percentages": "referToSizeOfBoundingBox",
		"groups": [
			"CSS Transforms"
		],
		"initial": "50% 50% 0",
		"appliesto": "transformableElements",
		"computed": "forLengthAbsoluteValueOtherwisePercentage",
		"order": "oneOrTwoValuesLengthAbsoluteKeywordsPercentages",
		"status": "standard"
	},
	"transform-style": {
		"syntax": "flat | preserve-3d",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Transforms"
		],
		"initial": "flat",
		"appliesto": "transformableElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"stacking": true,
		"status": "standard"
	},
	"transition": {
		"syntax": "<single-transition>#",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Transitions"
		],
		"initial": [
			"transition-delay",
			"transition-duration",
			"transition-property",
			"transition-timing-function"
		],
		"appliesto": "allElementsAndPseudos",
		"computed": [
			"transition-delay",
			"transition-duration",
			"transition-property",
			"transition-timing-function"
		],
		"order": "orderOfAppearance",
		"status": "standard"
	},
	"transition-delay": {
		"syntax": "<time>#",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Transitions"
		],
		"initial": "0s",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"transition-duration": {
		"syntax": "<time>#",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Transitions"
		],
		"initial": "0s",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"transition-property": {
		"syntax": "none | <single-transition-property>#",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Transitions"
		],
		"initial": "all",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"transition-timing-function": {
		"syntax": "<single-transition-timing-function>#",
		"media": "interactive",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Transitions"
		],
		"initial": "ease",
		"appliesto": "allElementsAndPseudos",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"translate": {
		"syntax": "none | <length-percentage> [ <length-percentage> <length>? ]?",
		"media": "visual",
		"inherited": false,
		"animationType": "transform",
		"percentages": "referToSizeOfBoundingBox",
		"groups": [
			"CSS Transforms"
		],
		"initial": "none",
		"appliesto": "transformableElements",
		"computed": "asSpecifiedRelativeToAbsoluteLengths",
		"order": "perGrammar",
		"stacking": true,
		"status": "standard"
	},
	"unicode-bidi": {
		"syntax": "normal | embed | isolate | bidi-override | isolate-override | plaintext",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Writing Modes"
		],
		"initial": "normal",
		"appliesto": "allElementsSomeValuesNoEffectOnNonInlineElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"user-select": {
		"syntax": "auto | text | none | contain | all",
		"media": "visual",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Basic User Interface"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	},
	"vertical-align": {
		"syntax": "baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>",
		"media": "visual",
		"inherited": false,
		"animationType": "length",
		"percentages": "referToLineHeight",
		"groups": [
			"CSS Table"
		],
		"initial": "baseline",
		"appliesto": "inlineLevelAndTableCellElements",
		"computed": "absoluteLengthOrKeyword",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"visibility": {
		"syntax": "visible | hidden | collapse",
		"media": "visual",
		"inherited": true,
		"animationType": "visibility",
		"percentages": "no",
		"groups": [
			"CSS Box Model"
		],
		"initial": "visible",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"white-space": {
		"syntax": "normal | pre | nowrap | pre-wrap | pre-line",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"widows": {
		"syntax": "<integer>",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Columns",
			"CSS Fragmentation"
		],
		"initial": "2",
		"appliesto": "blockContainerElements",
		"computed": "asSpecified",
		"order": "perGrammar",
		"status": "standard"
	},
	"width": {
		"syntax": "[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto",
		"media": "visual",
		"inherited": false,
		"animationType": "lpc",
		"percentages": "referToWidthOfContainingBlock",
		"groups": [
			"CSS Box Model"
		],
		"initial": "auto",
		"appliesto": "allElementsButNonReplacedAndTableRows",
		"computed": "percentageAutoOrAbsoluteLength",
		"order": "lengthOrPercentageBeforeKeywordIfBothPresent",
		"status": "standard"
	},
	"will-change": {
		"syntax": "auto | <animateable-feature>#",
		"media": "all",
		"inherited": false,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Will Change"
		],
		"initial": "auto",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"word-break": {
		"syntax": "normal | break-all | keep-all | break-word",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"word-spacing": {
		"syntax": "normal | <length-percentage>",
		"media": "visual",
		"inherited": true,
		"animationType": "length",
		"percentages": "referToWidthOfAffectedGlyph",
		"groups": [
			"CSS Text"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "optimumMinAndMaxValueOfAbsoluteLengthPercentageOrNormal",
		"order": "uniqueOrder",
		"alsoAppliesTo": [
			"::first-letter",
			"::first-line",
			"::placeholder"
		],
		"status": "standard"
	},
	"word-wrap": {
		"syntax": "normal | break-word",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Text"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"writing-mode": {
		"syntax": "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr",
		"media": "visual",
		"inherited": true,
		"animationType": "discrete",
		"percentages": "no",
		"groups": [
			"CSS Writing Modes"
		],
		"initial": "horizontal-tb",
		"appliesto": "allElementsExceptTableRowColumnGroupsTableRowsColumns",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "standard"
	},
	"z-index": {
		"syntax": "auto | <integer>",
		"media": "visual",
		"inherited": false,
		"animationType": "integer",
		"percentages": "no",
		"groups": [
			"CSS Positioning"
		],
		"initial": "auto",
		"appliesto": "positionedElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"stacking": true,
		"status": "standard"
	},
	"zoom": {
		"syntax": "normal | reset | <number> | <percentage>",
		"media": "visual",
		"inherited": false,
		"animationType": "integer",
		"percentages": "no",
		"groups": [
			"Microsoft Extensions"
		],
		"initial": "normal",
		"appliesto": "allElements",
		"computed": "asSpecified",
		"order": "uniqueOrder",
		"status": "nonstandard"
	}
}
