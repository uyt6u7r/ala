/*:
 * @plugindesc <CardGameDeckBuilder> for RMVMV 1.6.2. Place below Irina_CardGameCore.
 * @author RPG Maker Irina
 *
 * @help
 * *** Introduction ***
 *
 *      This file is the second of three files to be included in the collectible
 * card game set of plugins and it primarily focuses on the deck building aspect
 * of the plugin set. In any kind of game that offers a CCG to play with, it
 * must have a strong deck builder and this plugin adds that scene to your game.
 * It can be accessible through the main menu or through script call.
 * 
 *      What comes with this deck builder is the ability to make decks based on
 * different rulesets, letting the player make their own decks, naming them,
 * choosing deck boxes, deck sleeves, changing up the order of decks, filtering
 * certain cards while deck building, sorting them, and more.
 *
 *
 *
 * *** Instructions ***
 * 
 *      As this is the second piece, it will require the first plugin to be
 * installed and located above this file in the Plugin Manager list inside your
 * game project.
 * 
 *      While the Deck Builder add-on is mostly plug and play, please go through
 * the Plugin Parameters and make sure that the settings for the game are to
 * your liking. Otherwise, do not be surprised that things will look weird in
 * your game if you do not adjust them properly according to your game.
 * 
 *      It is recommended that you download the assets pack to get started with
 * the projet. Everything should go into their respective folders structured in
 * the assets pack archive file.
 *
 *
 *
 * *** Plugin Parameters ***
 *
 *      There are a lot of plugin parameters. You must set these up properly
 * if you wish to make this project work. Here's what each plugin parameter do.
 *
 * ---
 * 
 * Deck Rulesets
 * 
 *      This is a list of the various deck rulesets that can be used by the card
 * game. A deck ruleset determines the minimum deck size, maximum deck size,
 * maximum copies of a card that a deck can have, and more.
 * 
 * Deck Rulesets: Name
 * 
 *      This is the name of the deck ruleset. Make sure that the ruleset name
 * is different from other ruleset names if you want to avoid confusion. It
 * will be used in a variety of places such as help descriptions.
 * 
 * Deck Rulesets: Unlock Switch
 * 
 *      The ruleset may or may not be available from the start of the game. If
 * it requires a switch, then the switch must be on before the player is able to
 * build decks using that ruleset. Otherwise, it is available automatically.
 * 
 * Deck Rulesets: Description
 * 
 *      This is the help description that accompanies this ruleset while the
 * player is selecting a ruleset before going to edit their decks. Provide a
 * proper description of what the ruleset entails.
 * 
 * Deck Rulesets: Ruleset Image
 * 
 *      When the player is picking a ruleset, this is the image used with the
 * ruleset. The images are located in the game project's img/pictures/ folder.
 * 
 * Deck Rulesets: Minimum Deck Size
 * 
 *      This is the minimum number of cards that need to be inside a deck
 * going by this ruleset. While the player can prematurely save a deck that has
 * not met the minimum deck size, that deck will not be considered valid for
 * play by the game.
 * 
 * Deck Rulesets: Maximum Deck Size
 * 
 *      This is the maximum number of cards that can be placed inside a deck.
 * Deck sizes can go up to this number but not beyond it. If this number is set
 * to 0, then there is no maximum deck size and the player can add all the
 * cards they want to the deck.
 *
 * Deck Rulesets: Max Copies of Cards
 * 
 *      This is the maximum number of copies of a single card that can be added
 * to the deck and extra copies of said cards cannot go beyond it. If this
 * number is set to 0, then there is no maximum and the player can add any
 * number of copies they want.
 *
 * Deck Rulesets: JS: Filter Rules
 *
 *      If you wish to have the ruleset filter out certain cards, like specific
 * rarities, elements, levels, power, etc., use JavaScript code to perform that
 * filtering.
 *
 * Deck Rulesets: JS: Restriction Rules
 *
 *      If you wish to have the ruleset restrict the number of copies of cards
 * that may be added to a deck (provided that it doesn't go against the "Max
 * Copies of Cards" plugin parameter), use JavaScript code to restrict the
 * amount of copies you want to allow for this ruleset.
 *
 * ---
 * 
 * Main Menu Settings
 * 
 *      These settings determine if the Deck Builder option will show up in the
 * main menu and how it will appear text-wise. If you are using Yanfly's
 * Main Menu Manager plugin, there is a section later in the help file to tell
 * you how to integrate it into the menu. These settings can also be changed
 * by script calls in-game.
 * 
 *      WARNING: If the player does not have a single card in their inventory,
 * the Deck Builder option will -NOT- appear regardless of what your plugin
 * parameters have it set to.
 * 
 * ---
 * 
 * Deck Builder Scene
 * 
 *     These control the basic UI and visual aspects of the deck builder scene.
 * 
 * Deck Builder Scene: Icons
 * 
 *     These are the icons used for marking a card/deck's level, power, and/or
 * health (if your game opts to show health).
 * 
 * Deck Builder Scene: Parallax Background Image
 * 
 *     If you wish to use a parallax background image for the scene, change the
 * settings here to your liking. You can even set the scrolling speeds for the
 * parallax image.
 * 
 * Deck Builder Scene: Transparent Windows
 * 
 *     The windows (save for a few) can be made transparent in the scene. If
 * you want them to appear transparent, they will not obscure the background.
 * Otherwise, the game's window skin will show on them.
 * 
 * ---
 * 
 * Select Ruleset
 * 
 *      These plugin parameter options here let you decide how to make the
 * ruleset selection process look like. You can determine the text displayed,
 * the number of columns of cards to use, and more.
 * 
 *      WARNING: If there is only one ruleset available for the player, then
 * this part of the Deck Builder scene will be skipped.
 * 
 * ---
 *
 * Select Deck
 * 
 *      After selecting a ruleset (or if there is none), players will reach this
 * step where they have to select a deck to edit or create a new one. In the
 * deck selection screen, it will list all the decks available to the player,
 * a preview window that displays deck boxes/cards, a ratio window, and a
 * contents window that displays the cards inside of a deck.
 * 
 * Select Deck: Preview Window
 * 
 *      This window will display the deck box of the selected deck if the player
 * is browsing through the deck list. If the player is browsing through the
 * contents window, it will display the card. You can change the settings here
 * for what's displayed and how it's displayed. JavaScript knowledge is required
 * to move it around and change its dimensions via initialize.
 * 
 * Select Deck: Deck List Window
 * 
 *      This window will display the player's decks along with a create new deck
 * option, which, as you can guess, allows the player to create a new deck.
 * Change the settings here to change how it appears. JavaScript knowledge is
 * required to move it around and change its dimensions via initialize.
 *
 * Select Deck: Ratio Window
 * 
 *      This window will display the card averages, ratios, and card count for
 * the selected deck. You may have to manually edit the RatioGauge image found
 * in the img/pictures/ folder if you have a different series of elements that
 * you're using. Everything else requires JavaScript knowledge to change what
 * is displayed.
 *
 * Select Deck: Contents Window
 * 
 *      This window will display a list of the cards that the deck holds. 
 * JavaScript knowledge is required to move it around and change its dimensions
 * via initialize.
 *
 * ---
 *
 * Deck Command Window
 * 
 *      If the player does not pick Create New Deck and instead, picks a deck
 * on the list, the command window pops up giving the player options on what
 * they want to do with the deck. The plugin parameters let you change their
 * command name and help description. Some other commands have specific traits
 * that can also be altered.
 * 
 * Deck Command Window: Edit Deck
 * 
 *      Puts the player into Deck Editing mode. More on that in a later
 * section of the help file.
 * 
 * Deck Command Window: Rename Deck
 *
 *      Lets the player rename the deck. This works with Yanfly's Key Name Entry
 * if you want keyboard typing access for naming stuff. You can download it
 * from here: http://yanfly.moe/2019/05/03/yep-185-key-name-entry-rpg-maker-mv/
 * 
 * Deck Command Window: Favorite/Unfavorite
 *
 *      Lets the player favorite/unfavorite their decks. Favorited decks will
 * have a different icon than normal ones.
 * 
 * Deck Command Window: Change Box
 *
 *      Allows the player to swap out the deck box used for the currently
 * selected deck. The plugin parameters let you decide which ones are available
 * by default. Players can unlock more deck boxes through items with specific
 * notetags in them (explained later in the helpfile).
 *
 * Deck Command Window: Change Sleeves
 *
 *      Allows the player to swap out the deck sleeves used for the currently
 * selected deck. This does not show up anywhere except during the card game.
 * There are no default sleeves and they will be "empty" using the default
 * card back set up in the Card Game Core plugin parameters. Players can unlock
 * deck sleeves through items with specific notetags in them (explained later in
 * the helpfile). If there are no unlocked deck sleeves, this option will not
 * appear in the command window.
 * 
 * Deck Command Window: Order
 * 
 *      What happens if players don't like the order of the deck list? They can
 * reorder them with this command.
 *
 * Deck Command Window: Delete Deck
 * 
 *      And if a player decides it's time to sack a deck, this command will
 * delete the deck from the list.
 *
 * ---
 * 
 * Deck Building Windows
 * 
 *      Upon selecting Create New Deck or Edit Deck, the player is taken to
 * these windows where the player can filter cards, sort cards, add and remove
 * them from the currently selected deck.
 * 
 * Deck Building Windows: Filter/Sort Window
 * 
 *      This window lets the player filter cards shown in the inventory window
 * by specific elements. The player can also sort them by level, power, and/or
 * health (if enabled). The majority of these settings are icons. JavaScript
 * knowledge is required to move it around and change its dimensions via
 * initialize.
 * 
 * Deck Building Windows: Inventory Window
 * 
 *      This window displays the cards that are available to the player from
 * the player's inventory. The player can add cards from here to the deck or
 * the player can tab over to the contents window to remove them. The plugin
 * parameter settings let you adjust the number of columns and rows you want
 * to display for the inventory window so that it better fits your game's
 * resolution and card size. JavaScript knowledge is required to move it around
 * and change its dimensions via initialize.
 *
 *
 *
 * *** Notetags ***
 *
 *      The following are notetags that you can use with your items to unlock
 * new deck boxes or deck sleeves.
 * 
 * --- Item Notetags ---
 * 
 * <Deck Box: filename>
 * - Replace 'filename' with the filename of a graphic from img/pictures/ to
 * unlock this deck box image for the player if this item is in their inventory.
 * This is case sensitive.
 * 
 * <Deck Sleeves: filename>
 * - Replace 'filename' with the filename of a graphic from img/pictures/ to
 * unlock this deck sleeves image for the player if this item is in their
 * inventory. This is case sensitive.
 *
 *
 *
 * *** Script Calls ***
 * 
 * $hideCardGameDeckBuilder();
 * $showCardGameDeckBuilder();
 * - Use these script calls to hide/show the Deck Builder command in the
 * main menu screen respectively.
 * 
 * $disableCardGameDeckBuilder();
 * $enableCardGameDeckBuilder();
 * - Use these script calls to disable/enable the Deck Builder command in the
 * main menu screen respectively.
 * 
 * $openCardGameDeckBuilder();
 * - Use this script call to open up the Deck Builder scene unless the player
 * is currently in battle.
 *
 *
 *
 * *** Main Menu Integration ***
 * 
 *      For people using Yanfly's YEP_MainMenuManager (if not, why aren't you?),
 * and would like to integrate the Deck Builder into the Main Menu, use these
 * settings below:
 * 
 *       Name: 'Deck Builder'
 *     Symbol: cardGameDeckBuilder
 *       Show: $gameSystem.isCardGameDeckBuilderVisible()
 *    Enabled: $gameSystem.isCardGameDeckBuilderEnabled()
 *        Ext: 
 *  Main Bind: this.commandCardGameDeckBuilder.bind(this)
 * Actor Bind: 
 *
 * Insert the above setup within a Main Menu Manager slot. Provided you copy
 * the exact settings to where you need it, it will appear there while using
 * all of the naming, enabling, disabling, hiding, and showing effects done by
 * the plugin parameters.
 *
 * 
 *
 * *** RPG Maker Version ***
 *
 * This plugin is made for and tested on RPG Maker MV with version 1.6.2.
 * I cannot guarantee if it works on lower versions.
 *
 *
 *
 * *** Terms of Use ***
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'RPG Maker Irina' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins.
 *
 * *** Help End ***
 *
 * @param 
 * @param DeckRulesets:ArrayStruct
 * @text Deck Rulesets
 * @type struct<DeckRuleset>[]
 * @desc List of various deck rulesets used by the card game.
 * @default ["{\"Name:str\":\"Standard\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"Deck size must be at least 40 cards large.\\\\nNo more than x4 copies of a card can be present.\\\"\",\"RulesetImg:str\":\"DeckRuleset_Standard\",\"\":\"\",\"MinDeckSize:num\":\"40\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"return true;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"Quick\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"Deck size must be at least 20 cards large.\\\\nNo more than x2 copies of a card can be present.\\\"\",\"RulesetImg:str\":\"DeckRuleset_Quick\",\"\":\"\",\"MinDeckSize:num\":\"20\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"2\",\"FilterRules:func\":\"\\\"return true;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"Highlander\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"Deck size must be at least 10 cards large.\\\\nNo more than a single copy of a card can be present.\\\"\",\"RulesetImg:str\":\"DeckRuleset_Highlander\",\"\":\"\",\"MinDeckSize:num\":\"10\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"1\",\"FilterRules:func\":\"\\\"return true;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"Unlimited\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"Deck size must be at least 10 cards large.\\\\nAny number of copies of a card can be used.\\\"\",\"RulesetImg:str\":\"DeckRuleset_Unlimited\",\"\":\"\",\"MinDeckSize:num\":\"10\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"0\",\"FilterRules:func\":\"\\\"return true;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"Commons\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"\\\\\\\\c[17]Commons only!\\\\\\\\c[0] Deck size must be at least 40 cards large.\\\\nNo more than x4 copies of a card can be present.\\\"\",\"RulesetImg:str\":\"DeckRuleset_CommonsOnly\",\"\":\"\",\"MinDeckSize:num\":\"40\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"// Check Item rarity\\\\nitem = arguments[0];\\\\nif (item.note.match(/<Card Rarity: (\\\\\\\\d+)>/i)) {\\\\n    var rarity = Number(RegExp.$1);\\\\n    return rarity <= 0;\\\\n}\\\\nreturn true;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"Rares\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"\\\\\\\\c[17]Rares only!\\\\\\\\c[0] Deck size must be at least 20 cards large.\\\\nNo more than x4 copies of a card can be present.\\\"\",\"RulesetImg:str\":\"DeckRuleset_RaresOnly\",\"\":\"\",\"MinDeckSize:num\":\"20\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"// Check Item rarity\\\\nitem = arguments[0];\\\\nif (item.note.match(/<Card Rarity: (\\\\\\\\d+)>/i)) {\\\\n    var rarity = Number(RegExp.$1);\\\\n    return rarity === 1;\\\\n}\\\\nreturn false;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"SuperRares\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"\\\\\\\\c[17]Super Rares only!\\\\\\\\c[0] Deck size must be at least 20 cards large.\\\\nNo more than x4 copies of a card can be present.\\\"\",\"RulesetImg:str\":\"DeckRuleset_SuperRaresOnly\",\"\":\"\",\"MinDeckSize:num\":\"20\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"// Check Item rarity\\\\nitem = arguments[0];\\\\nif (item.note.match(/<Card Rarity: (\\\\\\\\d+)>/i)) {\\\\n    var rarity = Number(RegExp.$1);\\\\n    return rarity === 2;\\\\n}\\\\nreturn false;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"UltraRares\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"\\\\\\\\c[17]Ultra Rares only!\\\\\\\\c[0] Deck size must be at least 20 cards large.\\\\nNo more than x4 copies of a card can be present.\\\"\",\"RulesetImg:str\":\"DeckRuleset_UltraRaresOnly\",\"\":\"\",\"MinDeckSize:num\":\"20\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"// Check Item rarity\\\\nitem = arguments[0];\\\\nif (item.note.match(/<Card Rarity: (\\\\\\\\d+)>/i)) {\\\\n    var rarity = Number(RegExp.$1);\\\\n    return rarity === 3;\\\\n}\\\\nreturn false;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"SecretRares\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"\\\\\\\\c[17]Secret Rares only!\\\\\\\\c[0] Deck size must be at least 20 cards large.\\\\nNo more than x4 copies of a card can be present.\\\"\",\"RulesetImg:str\":\"DeckRuleset_SecretRaresOnly\",\"\":\"\",\"MinDeckSize:num\":\"20\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"// Check Item rarity\\\\nitem = arguments[0];\\\\nif (item.note.match(/<Card Rarity: (\\\\\\\\d+)>/i)) {\\\\n    var rarity = Number(RegExp.$1);\\\\n    return rarity === 4;\\\\n}\\\\nreturn false;\\\"\",\"RestrictionRules:func\":\"\\\"return true;\\\"\"}","{\"Name:str\":\"Limited\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"Deck size must be at least 40 cards large.\\\\nMax copies: x1 Secret Rares. x4 Other.\\\"\",\"RulesetImg:str\":\"DeckRuleset_Limited\",\"\":\"\",\"MinDeckSize:num\":\"40\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"return true;\\\"\",\"RestrictionRules:func\":\"\\\"// No more than 1 copy per secret rare.\\\\nvar item = arguments[0];\\\\nvar count = arguments[1];\\\\nif (item.note.match(/<Card Rarity: (\\\\\\\\d+)>/i)) {\\\\n    var rarity = Number(RegExp.$1);\\\\n    if (rarity === 4) {\\\\n        return count < 1;\\\\n    }\\\\n}\\\\nreturn true;\\\"\"}","{\"Name:str\":\"Restricted\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"Deck size must be at least 40 cards large.\\\\nMax copies: x1 Secret Rares. x2 Ultra Rares. x4 Other.\\\"\",\"RulesetImg:str\":\"DeckRuleset_Restricted\",\"\":\"\",\"MinDeckSize:num\":\"40\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"return true;\\\"\",\"RestrictionRules:func\":\"\\\"// No more than 1 copy per secret rare.\\\\nvar item = arguments[0];\\\\nvar count = arguments[1];\\\\nif (item.note.match(/<Card Rarity: (\\\\\\\\d+)>/i)) {\\\\n    var rarity = Number(RegExp.$1);\\\\n    if (rarity === 4) {\\\\n        return count < 1;\\\\n    } else if (rarity === 3) {\\\\n        return count < 2;\\\\n    }\\\\n}\\\\nreturn true;\\\"\"}","{\"Name:str\":\"Binding\",\"UnlockSwitch:num\":\"0\",\"Description:json\":\"\\\"Deck size must be at least 40 cards large.\\\\nMax copies: x1 Secret Rares. x2 Ultra Rares. x3 Super Rares. x4 Other.\\\"\",\"RulesetImg:str\":\"DeckRuleset_Binding\",\"\":\"\",\"MinDeckSize:num\":\"40\",\"MaxDeckSize:num\":\"0\",\"MaxCopies:num\":\"4\",\"FilterRules:func\":\"\\\"return true;\\\"\",\"RestrictionRules:func\":\"\\\"// No more than 1 copy per secret rare.\\\\nvar item = arguments[0];\\\\nvar count = arguments[1];\\\\nif (item.note.match(/<Card Rarity: (\\\\\\\\d+)>/i)) {\\\\n    var rarity = Number(RegExp.$1);\\\\n    if (rarity === 4) {\\\\n        return count < 1;\\\\n    } else if (rarity === 3) {\\\\n        return count < 2;\\\\n    } else if (rarity === 2) {\\\\n        return count < 3;\\\\n    }\\\\n}\\\\nreturn true;\\\"\"}"]
 *
 * @param 
 * @param MainMenu
 * @text Main Menu Settings
 * @default ------------------------------------
 * 
 * @param ShowMenuDeckBuilderCommand:eval
 * @text Show Deck Builder
 * @parent MainMenu
 * @type boolean
 * @on Show Deck Builder
 * @off Don't Show
 * @desc Default setting for showing the deck builder command for the main menu.
 * @default true
 * 
 * @param EnableMenuDeckBuilderCommand:eval
 * @text Enable Deck Builder
 * @parent MainMenu
 * @type boolean
 * @on Enable Deck Builder
 * @off Don't Enable
 * @desc Default setting for enabling the deck builder command for the main menu.
 * @default true
 * 
 * @param DeckBuilderMenuText:str
 * @text Menu Text
 * @parent MainMenu
 * @desc Text used for the deck builder in the main menu.
 * @default Deck Builder
 *
 * @param 
 * @param DeckBuilderScene
 * @text Deck Builder Scene
 * @default ------------------------------------
 *
 * @param DeckBuilderIcons
 * @text Icons
 * @parent DeckBuilderScene
 *
 * @param LevelIcon:num
 * @text Level Icon
 * @parent DeckBuilderIcons
 * @desc Icon used to represent levels.
 * @default 127
 *
 * @param PowerIcon:num
 * @text Power Icon
 * @parent DeckBuilderIcons
 * @desc Icon used to represent power.
 * @default 97
 *
 * @param HealthIcon:num
 * @text Health Icon
 * @parent DeckBuilderIcons
 * @desc Icon used to represent health.
 * @default 84
 *
 * @param ParallaxBGImg:str
 * @text Parallax Background Image
 * @parent DeckBuilderScene
 * @type file
 * @dir img/parallaxes/
 * @desc Parallax image used for the scene. You can also set it to none.
 * @default DeckBuilder
 * 
 * @param ParallaxScrollX:num
 * @text Scroll Speed X
 * @parent ParallaxBGImg:str
 * @desc Horizontal scroll speed for the parallax background.
 * @default 0.5
 * 
 * @param ParallaxScrollY:num
 * @text Scroll Speed Y
 * @parent ParallaxBGImg:str
 * @desc Vertical scroll speed for the parallax background.
 * @default 0.0
 * 
 * @param TransparentWindows:eval
 * @text Transparent Windows
 * @parent DeckBuilderScene
 * @type boolean
 * @on Transparent
 * @off Opaque
 * @desc Make windows transparent in the Deck Builder scene?
 * @default true
 *
 * @param 
 * @param SelectRuleSet
 * @text Select Ruleset
 * @default ------------------------------------
 * 
 * @param SelectRulesetText:str
 * @text Select Ruleset Text
 * @parent SelectRuleSet
 * @desc Text displayed for selecting a ruleset. Text codes apply.
 * @default \{\{Select \c[17]Deck\c[0] Ruleset
 * 
 * @param SelectRulesetCol:num
 * @text Select Ruleset Columns
 * @parent SelectRuleSet
 * @desc Maximum number of columns for select ruleset window.
 * @default 4
 * 
 * @param MaxScaleNotSelect:num
 * @text Max Scale (Not Selected)
 * @parent SelectRuleSet
 * @desc Maximum scale for the ruleset sprites when not selected
 * @default 0.75
 * 
 * @param MaxScaleSelect:num
 * @text Max Scale (Selected)
 * @parent SelectRuleSet
 * @desc Maximum scale for the ruleset sprites when selected
 * @default 1.0
 * 
 * @param OpacityNotSelect:num
 * @text Opacity (Not Selected)
 * @parent SelectRuleSet
 * @desc Opacity for the ruleset sprites when not selected
 * @default 128
 * 
 * @param OpacitySelect:num
 * @text Opacity (Selected)
 * @parent SelectRuleSet
 * @desc Opacity for the ruleset sprites when selected
 * @default 255
 *
 * @param RulesetWindowInitialize:func
 * @text JS: Initialize Ruleset
 * @parent SelectRuleSet
 * @type note
 * @desc JavaScript code used for initializing the ruleset window.
 * @default "var helpWindow = arguments[0];\nvar x = 0;\nvar y = helpWindow.y + helpWindow.height;\nthis._windowWidth = Graphics.boxWidth;\nthis._windowHeight = Graphics.boxHeight - helpWindow.height;\nWindow_HorzCommand.prototype.initialize.call(this, x, y);"
 *
 * @param 
 * @param SelectDeck
 * @text Select Deck
 * @default ------------------------------------

 * @param PreviewWindow
 * @text Preview Window
 * @parent SelectDeck
 *
 * @param NewDeckBoxImg:str
 * @text New Deck Box Image
 * @parent PreviewWindow
 * @type file
 * @dir img/pictures/
 * @desc Picture image used when deciding to create a new deck.
 * @default Deckbox_New
 *
 * @param SpriteWindowInitialize:func
 * @text JS: Initialize Preview
 * @parent PreviewWindow
 * @type note
 * @desc JavaScript code used for initializing the preview window on the left.
 * @default "var helpWindow = arguments[0];\nvar width = Math.floor(Graphics.boxWidth * 1 / 3);\nvar height = Graphics.boxHeight - helpWindow.height;\nvar x = 0;\nvar y = helpWindow.y + helpWindow.height;\nthis._deck = null;\nthis._card = null;\nWindow_Base.prototype.initialize.call(this, x, y, width, height);"
 *
 * @param SpriteWindowRefresh:func
 * @text JS: Preview Refresh
 * @parent PreviewWindow
 * @type note
 * @desc JavaScript code used for refreshing the preview window on the left.
 * @default "// Return Checks\nif (!this._deck) return;\nif (this._deck === 'NewDeck') return;\nthis.resetFontSettings();\n\n// Draw Deck Name\nvar text = this._deck.name;\nthis.contents.fontSize += 6;\nthis.drawText(text, 0, 0, this.contents.width, 'center');"

 * @param DeckListWindow
 * @text Deck List Window
 * @parent SelectDeck
 * 
 * @param CreateNewDeckText:str
 * @text Create New Deck Text
 * @parent DeckListWindow
 * @desc Text used for 'Create New Deck' option in the deck list. You may use text codes.
 * @default \i[87]Create New Deck
 * 
 * @param CreateNewDeckHelp:json
 * @text Create New Deck Help
 * @parent CreateNewDeckText:str
 * @type note
 * @desc Text used for the help description window when selecting 'Create New Deck'. Text codes can be used.
 * @default "Create a new deck!"
 * 
 * @param SelectDeckHelpFmt:json
 * @text Selected Deck Help
 * @parent DeckListWindow
 * @type note
 * @desc Help description text when selecting a deck. Text codes can be used.
 * @default "A deck made for the %1 ruleset!\nTimes Played: %2. Wins: %3. Losses: %4. Ties: %5."
 *
 * @param ListWindowInitialize:func
 * @text JS: Initialize Deck List
 * @parent DeckListWindow
 * @type note
 * @desc JavaScript code used for initializing the deck list window in the center.
 * @default "var helpWindow = arguments[0];\nthis._windowWidth = Math.ceil(Graphics.boxWidth * 1 / 3);\nthis._windowHeight = Graphics.boxHeight - helpWindow.height;\nvar x = this._windowWidth;\nvar y = helpWindow.y + helpWindow.height;\nWindow_Command.prototype.initialize.call(this, x, y);"
 *
 * @param RatioWindow
 * @text Ratio Window
 * @parent SelectDeck
 *
 * @param RatioGaugeImg:str
 * @text Ratio Gauge Image
 * @parent RatioWindow
 * @type file
 * @dir img/pictures/
 * @desc Picture image used when deciding to create a new deck.
 * @default RatioGauge
 *
 * @param RatioWindowInitialize:func
 * @text JS: Initialize Ratios
 * @parent RatioWindow
 * @type note
 * @desc JavaScript code used for initializing the ratio window in the upper right.
 * @default "var helpWindow = arguments[0];\nvar width = Math.floor(Graphics.boxWidth * 1 / 3);\nvar height = this.fittingHeight(3);\nvar x = Math.ceil(Graphics.boxWidth * 2 / 3);\nvar y = helpWindow.y + helpWindow.height;\nWindow_Base.prototype.initialize.call(this, x, y, width, height);"
 *
 * @param RatioWindowSprite:func
 * @text JS: Anchor Ratio Graphic
 * @parent RatioWindow
 * @type note
 * @desc JavaScript code used for anchoring the ratio graphic.
 * @default "this._RatioGaugeSprite.anchor.x = 0.5;\nthis._RatioGaugeSprite.anchor.y = 0.5;\nthis._RatioGaugeSprite.x = this.width / 2;\nthis._RatioGaugeSprite.y = this.height / 2;"
 *
 * @param RatioWindowDrawGauges:func
 * @text JS: Ratio Draw Gauge
 * @parent RatioWindow
 * @type note
 * @desc JavaScript code used for drawing the gauges.
 * @default "// Get Bitmap Information\nvar pw = this._RatioGaugeBitmap.width;\nvar ph = this._RatioGaugeBitmap.height;\nvar x = (this.contents.width - pw) / 2;\nvar y = 0;\n\n// Calculate Template Data\nvar types = {};\nvar templates = Imported.Irina_CardGameCore.Templates;\nfor (var i = 0; i < templates.length; i++) {\n    var template = templates[i];\n    types[template.Name.toUpperCase()] = 0;\n}\nvar max = 1;\nfor (var i = 0; i < this._deck.cards.length; i++) {\n    var item = $dataItems[this._deck.cards[i]];\n    if (!item) continue;\n    if (item.note.match(/<Card Element: (.*)>/i)) {\n        var key = String(RegExp.$1).trim().toUpperCase();\n    } else {\n        var key = 'NONE';\n    }\n    if (types[key] !== undefined) {\n        types[key] += 1;\n        max = Math.max(max, types[key]);\n    }\n}\n\n// Draw Ratios\nvar color1 = ['#464646','#9e0b0f','#0076a3','#a0410d','#197b30','#aba000','#440e62'];\nvar color2 = ['#959595','#f69679','#6dcff6','#f9ad81','#82ca9c','#fff799','#bd8cbf'];\nx += 8;\ny += 3;\nvar width = 8;\nvar height = 78;\nfor (var i = 0; i < templates.length; i++) {\n    var template = templates[i];\n    var count = types[template.Name.toUpperCase()];\n    var rate = Math.min(1, count / max);\n    var fillH = Math.floor(height * rate);\n    this.contents.gradientFillRect(x, y + height - fillH, width, fillH, color1[i], color2[i]);\n    x += 24;\n}"
 *
 * @param RatioWindowDrawAverages:func
 * @text JS: Ratio Draw Averages
 * @parent RatioWindow
 * @type note
 * @desc JavaScript code used for drawing the deck average.
 * @default "// Draw Deck Statistics\nvar level = 0;\nvar power = 0;\nvar health = 0;\nfor (var i = 0; i < this._deck.cards.length; i++) {\n    var item = $dataItems[this._deck.cards[i]];\n    if (item && item.note.match(/<Card Level: (.*)>/i)) {\n        level += Number(RegExp.$1) || 0;\n    }\n    if (item && item.note.match(/<Card Power: (.*)>/i)) {\n        power += Number(RegExp.$1) || 0;\n    }\n    if (item && item.note.match(/<Card Health: (.*)>/i)) {\n        health += Number(RegExp.$1) || 0;\n    } else {\n        health += 1;\n    }\n}\nvar total = this._deck.cards.length || 1;\nlevel = Math.round(level / total);\npower = Math.round(power / total);\nhealth = Math.round(health / total);\nthis.resetFontSettings();\nvar drawHealth = $showCardHealth;\nvar x = 0;\nvar y = this.lineHeight() * 0.5;\nvar bx = (this.contents.width + this._RatioGaugeBitmap.width) / 2;\nvar bw = this.contents.width - bx;\nthis.drawText('Average', x, y, bw, 'center');\nvar iconsWidth = Window_Base._iconWidth * ($showCardHealth ? 3 : 2);\nx = (bw - iconsWidth) / 2;\ny += this.lineHeight();\n// Start Drawing Statistics\nthis.contents.fontSize = 20;\nthis.contents.outlineColor = 'rgba(0, 0, 0, 1)';\nthis.drawIcon(Imported.Irina_CardGameDeck.LevelIcon, x, y);\nthis.drawText(level, x, y, Window_Base._iconWidth, 'center');\nx += Window_Base._iconWidth;\nthis.drawIcon(Imported.Irina_CardGameDeck.PowerIcon, x, y);\nthis.drawText(power, x, y, Window_Base._iconWidth, 'center');\nx += Window_Base._iconWidth;\nif (!$showCardHealth) return;\nthis.drawIcon(Imported.Irina_CardGameDeck.HealthIcon, x, y);\nthis.drawText(health, x, y, Window_Base._iconWidth, 'center');"
 *
 * @param RatioWindowDrawCount:func
 * @text JS: Ratio Draw Count
 * @parent RatioWindow
 * @type note
 * @desc JavaScript code used for drawing the deck count.
 * @default "// Draw Card Count\nvar bx = (this.contents.width + this._RatioGaugeBitmap.width) / 2;\nvar y = this.lineHeight() * 0.5;\nvar bw = this.contents.width - bx;\nvar deckSize = this._deck.cards.length;\nvar minSize = Math.max(1, this._ruleset.MinDeckSize);\nvar maxSize = this._ruleset.MaxDeckSize;\nif (maxSize <= 0) maxSize = Infinity;\nif (deckSize > maxSize || deckSize < minSize) {\n    var text = '\\\\c[10]';\n} else if (deckSize <= maxSize && deckSize > minSize) {\n    var text = '\\\\c[17]';\n} else {\n    var text = '\\\\c[0]';\n}\ntext += deckSize + '\\\\c[0]/' + minSize;\nvar x = bx + ((bw - Window_ChoiceList.prototype.textWidthEx.call(this, text)) / 2);\nthis.drawTextEx(text, x, y);\ny += this.lineHeight();\ntext = '\\\\c[0]Cards';\nvar x = bx + ((bw - Window_ChoiceList.prototype.textWidthEx.call(this, text)) / 2);\nthis.drawTextEx(text, x, y);"
 *
 * @param ContentsWindow
 * @text Contents Window
 * @parent SelectDeck
 *
 * @param ContentsWindowIntialize:func
 * @text JS: Initialize Contents
 * @parent ContentsWindow
 * @type note
 * @desc JavaScript code used for initializing the deck contents window in the lower right.
 * @default "var helpWindow = arguments[0];\nvar ratioWindow = arguments[1];\nvar x = ratioWindow.x;\nvar y = ratioWindow.y + ratioWindow.height;\nvar width = ratioWindow.width;\nvar height = Graphics.boxHeight - y;\nWindow_ItemList.prototype.initialize.call(this, x, y, width, height);"
 *
 * @param 
 * @param CommandWindow
 * @text Deck Command Window
 * @default ------------------------------------
 *
 * @param CommandWindowOpacity:num
 * @text Back Opacity
 * @parent CommandWindow
 * @desc Back opacity of this command window and all related windows. Use a number between 0-255.
 * @default 255
 *
 * @param CommandWindowWidth:num
 * @text Window Width
 * @parent CommandWindow
 * @desc Window width of this command window.
 * @default 240
 *
 * @param CTXTeditDeck:str
 * @text Text: Edit
 * @parent CommandWindow
 * @desc Text used for the Deck List Command Window: Edit Deck.
 * @default Edit Deck
 *
 * @param CHLPeditDeck:json
 * @text Help: Edit
 * @parent CTXTeditDeck:str
 * @type note
 * @desc Help description used for the Deck List Command Window: Edit Deck.
 * @default "Edit the currently selected deck."
 *
 * @param CSHOWeditDeck:eval
 * @text Show Command?
 * @parent CTXTeditDeck:str
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show this command or not?
 * @default true
 *
 * @param CTXTrenameDeck:str
 * @text Text: Rename
 * @parent CommandWindow
 * @desc Text used for the Deck List Command Window: Rename Deck.
 * @default Rename Deck
 *
 * @param CHLPrenameDeck:json
 * @text Help: Rename
 * @parent CTXTrenameDeck:str
 * @type note
 * @desc Help description used for the Deck List Command Window: Rename Deck.
 * @default "Rename the currently selected deck."
 *
 * @param CSHOWrenameDeck:eval
 * @text Show Command?
 * @parent CTXTrenameDeck:str
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show this command or not?
 * @default true
 *
 * @param DeckNameLength:num
 * @text Max Name Length
 * @parent CTXTrenameDeck:str
 * @desc Maximum number of characters players can use for their deck names.
 * @default 24
 *
 * @param CTXTfavorite:str
 * @text Text: Favorite
 * @parent CommandWindow
 * @desc Text used for the Deck List Command Window: Favorite.
 * @default Favorite
 *
 * @param CTXTunfavorite:str
 * @text Text: Unfavorite
 * @parent CTXTfavorite:str
 * @desc Text used for the Deck List Command Window: Unfavorite.
 * @default Unfavorite
 *
 * @param CHLPfavorite:json
 * @text Help: Change Box
 * @parent CTXTfavorite:str
 * @type note
 * @desc Help description used for the Deck List Command Window: Favorite.
 * @default "Favorite/unfavorite the currently selected deck."
 *
 * @param CSHOWfavorite:eval
 * @text Show Command?
 * @parent CTXTfavorite:str
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show this command or not?
 * @default true
 *
 * @param DeckIconFavorite:num
 * @text Favorite Deck Icon
 * @parent CTXTfavorite:str
 * @desc Icon index used for favorite decks.
 * @default 84
 *
 * @param DeckIconNormal:num
 * @text Normal Deck Icon
 * @parent CTXTfavorite:str
 * @desc Icon index used for normal decks.
 * @default 187
 *
 * @param CTXTchangeBox:str
 * @text Text: Change Box
 * @parent CommandWindow
 * @desc Text used for the Deck List Command Window: Change Box.
 * @default Change Box
 *
 * @param CHLPchangeBox:json
 * @text Help: Change Box
 * @parent CTXTchangeBox:str
 * @type note
 * @desc Help description used for the Deck List Command Window: Change Box.
 * @default "Change the deck box used for the currently selected deck."
 *
 * @param CSHOWchangeBox:eval
 * @text Show Command?
 * @parent CTXTchangeBox:str
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show this command or not?
 * @default true
 *
 * @param DefaultDeckboxes:arraystr
 * @text Default Deck Boxes
 * @parent CTXTchangeBox:str
 * @type file[]
 * @dir img/pictures/
 * @desc A list of deck boxes that could be used as a the default skin a new deck.
 * @default ["Deckbox_Black","Deckbox_Red","Deckbox_Orange","Deckbox_Yellow","Deckbox_Green","Deckbox_Blue","Deckbox_Purple","Deckbox_White"]
 *
 * @param DeckBoxRows:num
 * @text Rows
 * @parent CTXTchangeBox:str
 * @desc Visible rows used when displaying deck boxes.
 * @default 3
 *
 * @param DeckBoxCol:num
 * @text Columns
 * @parent CTXTchangeBox:str
 * @desc Visible columns used when displaying deck boxes.
 * @default 3
 *
 * @param CTXTchangeSleeves:str
 * @text Text: Change Sleeves
 * @parent CommandWindow
 * @desc Text used for the Deck List Command Window: Change Sleeves.
 * @default Change Sleeves
 *
 * @param CHLPchangeSleeves:json
 * @text Help: Change Sleeves
 * @parent CTXTchangeSleeves:str
 * @type note
 * @desc Help description used for the Deck List Command Window: Change Sleeves.
 * @default "Change the sleeves used for the currently selected deck."
 *
 * @param CSHOWchangeSleeves:eval
 * @text Show Command?
 * @parent CTXTchangeSleeves:str
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show this command or not?
 * @default true
 *
 * @param DeckSleevesRows:num
 * @text Rows
 * @parent CTXTchangeSleeves:str
 * @desc Visible rows used when displaying deck sleeves.
 * @default 3
 *
 * @param DeckSleevesCol:num
 * @text Columns
 * @parent CTXTchangeSleeves:str
 * @desc Visible columns used when displaying deck sleeves.
 * @default 3
 *
 * @param CTXTorderDeck:str
 * @text Text: Order
 * @parent CommandWindow
 * @desc Text used for the Deck List Command Window: Order Deck.
 * @default Order Deck
 *
 * @param CHLPorderDeck:json
 * @text Help: Order
 * @parent CTXTorderDeck:str
 * @type note
 * @desc Help description used for the Deck List Command Window: Order Deck.
 * @default "Change the order of the currently selected deck in the deck list."
 *
 * @param CSHOWorderDeck:eval
 * @text Show Command?
 * @parent CTXTorderDeck:str
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show this command or not?
 * @default true
 *
 * @param OrderTextCodeColor:num
 * @text Text Code Color
 * @parent CTXTorderDeck:str
 * @desc Text code color for the highlighted deck whose order is to be changed.
 * @default 17
 *
 * @param CTXTdeleteDeck:str
 * @text Text: Delete
 * @parent CommandWindow
 * @desc Text used for the Deck List Command Window: Delete Deck.
 * @default Delete Deck
 *
 * @param CHLPdeleteDeck:json
 * @text Help: Delete
 * @parent CTXTdeleteDeck:str
 * @type note
 * @desc Help description used for the Deck List Command Window: Delete Deck.
 * @default "Delete the currently selected deck."
 *
 * @param CSHOWdeleteDeck:eval
 * @text Show Command?
 * @parent CTXTdeleteDeck:str
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show this command or not?
 * @default true
 *
 * @param DeleteDeckText:str
 * @text Confirmation Text
 * @parent CTXTdeleteDeck:str
 * @desc Text used for the Delete Deck confirmation window.
 * @default Do you want to delete this deck?
 *
 * @param DeleteDeckYesText:str
 * @text Yes
 * @parent CTXTdeleteDeck:str
 * @desc Text used for the 'Yes' message in the Delete Deck confirmation window.
 * @default Yes
 *
 * @param DeleteDeckNoText:str
 * @text No
 * @parent CTXTdeleteDeck:str
 * @desc Text used for the 'No' message in the Delete Deck confirmation window.
 * @default No
 *
 * @param 
 * @param DeckBuilding
 * @text Deck Building Windows
 * @default ------------------------------------
 *
 * @param FilterSortWindow
 * @text Filter/Sort Window
 * @parent DeckBuilding
 *
 * @param FilterAllIcon:num
 * @text Icon: All Elements
 * @parent FilterSortWindow
 * @desc Icon used for displaying all elements.
 * @default 320
 *
 * @param NameAZIcon:num
 * @text Icon: Name A-Z
 * @parent FilterSortWindow
 * @desc Icon used for sorting names A-Z.
 * @default 321
 *
 * @param NameZAIcon:num
 * @text Icon: Name Z-A
 * @parent FilterSortWindow
 * @desc Icon used for sorting names Z-A.
 * @default 322
 *
 * @param LevelAscIcon:num
 * @text Icon: Level Ascending
 * @parent FilterSortWindow
 * @desc Icon used for sorting by ascending level.
 * @default 323
 *
 * @param LevelDesIcon:num
 * @text Icon: Level Descending
 * @parent FilterSortWindow
 * @desc Icon used for sorting by descending level.
 * @default 324
 *
 * @param PowerAscIcon:num
 * @text Icon: Power Ascending
 * @parent FilterSortWindow
 * @desc Icon used for sorting by ascending power.
 * @default 325
 *
 * @param PowerDesIcon:num
 * @text Icon: Power Descending
 * @parent FilterSortWindow
 * @desc Icon used for sorting by descending power.
 * @default 326
 *
 * @param HealthAscIcon:num
 * @text Icon: Health Ascending
 * @parent FilterSortWindow
 * @desc Icon used for sorting by ascending health.
 * @default 327
 *
 * @param HealthDesIcon:num
 * @text Icon: Health Descending
 * @parent FilterSortWindow
 * @desc Icon used for sorting by descending health.
 * @default 328
 *
 * @param ResetIcon:num
 * @text Icon: Reset
 * @parent FilterSortWindow
 * @desc Icon used to reset the filter/sort settings.
 * @default 329
 *
 * @param FinishIcon:num
 * @text Icon: Finish
 * @parent FilterSortWindow
 * @desc Icon used for being done with deck creation.
 * @default 90
 *
 * @param FilterSortWindowInitialize:func
 * @text JS: Initialize Filters
 * @parent FilterSortWindow
 * @type note
 * @desc JavaScript code used for initializing the filter/sort window.
 * @default "var helpWindow = arguments[0];\nvar contentsWindow = arguments[1];\nthis._windowWidth = Graphics.boxWidth - contentsWindow.width;\nthis._windowHeight = this.fittingHeight(1);\nvar x = 0;\nvar y = helpWindow.y + helpWindow.height;\nWindow_HorzCommand.prototype.initialize.call(this, x, y);"
 *
 * @param InventoryWindow
 * @text Inventory Window
 * @parent DeckBuilding
 *
 * @param InventoryWindowCols:num
 * @text Columns
 * @parent InventoryWindow
 * @desc Visible columns used when browsing your card inventory.
 * @default 5
 *
 * @param InventoryWindowRows:num
 * @text Rows
 * @parent InventoryWindow
 * @desc Visible rows used when browsing your card inventory.
 * @default 2
 *
 * @param InventoryPreviewCardFadeTimer:num
 * @text Preview Fade Timer
 * @parent InventoryWindow
 * @desc Frames needed to be still before the preview card appears in the inventory window.
 * @default 30
 *
 * @param InventoryWindowInitialize:func
 * @text JS: Initialize Inventory
 * @parent InventoryWindow
 * @type note
 * @desc JavaScript code used for initializing the inventory window.
 * @default "var helpWindow = arguments[0];\nvar contentsWindow = arguments[1];\nvar filterWindow = arguments[2];\nthis._fadeInTimer = this.fadeTimer();\nvar x = 0;\nvar y = filterWindow.y + filterWindow.height;\nvar width = Graphics.boxWidth - contentsWindow.width;\nvar height = Graphics.boxHeight - y;\nWindow_ItemList.prototype.initialize.call(this, x, y, width, height);"
 *
 * @param InventoryWindowDrawCell:func
 * @text JS: Inventory Cell
 * @parent InventoryWindow
 * @type note
 * @desc JavaScript code used for drawing the inventory cells.
 * @default "var item = arguments[0];\nvar index = arguments[1];\n\nvar rect = this.itemRect(index);\nthis.resetFontSettings();\nvar bottomY = rect.y + rect.height - this.lineHeight();\nvar filter = this._filterWindow.cardFilter();\n\n// Change Font Settings\nthis.resetFontSettings();\nthis.contents.fontSize = 20;\nthis.contents.outlineColor = 'rgba(0, 0, 0, 1)';\n\n// Draw Level (if Sort By)\nif (filter.level !== false) {\n    var icon = 127;\n    this.drawIcon(icon, rect.x + this.textPadding(), bottomY);\n    var text = 0;\n    if (item.note.match(/<Card Level: (.*)>/i)) text = Number(RegExp.$1) || 0;\n    this.drawText(text, rect.x + this.textPadding(), bottomY, Window_Base._iconWidth, 'center');\n}\n\n// Draw Power (if Sort By)\nif (filter.power !== false) {\n    var icon = 97;\n    this.drawIcon(icon, rect.x + this.textPadding(), bottomY);\n    var text = 0;\n    if (item.note.match(/<Card Power: (.*)>/i)) text = Number(RegExp.$1) || 0;\n    this.drawText(text, rect.x + this.textPadding(), bottomY, Window_Base._iconWidth, 'center');\n}\n\n// Draw Health (if Sort By)\nif (filter.health !== false) {\n    var icon = 84;\n    this.drawIcon(icon, rect.x + this.textPadding(), bottomY);\n    var text = 0;\n    if (item.note.match(/<Card Health: (.*)>/i)) text = Number(RegExp.$1) || 0;\n    this.drawText(text, rect.x + this.textPadding(), bottomY, Window_Base._iconWidth, 'center');\n}\n\n// Draw Item Number\nvar denominator = $gameParty.numItems(item);\nif (Imported.YEP_CoreEngine) denominator = Yanfly.Util.toGroup(denominator);\nvar text = '/' + denominator;\nrect.width -= this.textPadding();\nthis.drawText(text, rect.x, bottomY, rect.width, 'right');\nrect.width -= this.textWidth(text);\nSceneManager._scene.currentDeck().cards = SceneManager._scene.currentDeck().cards || [];\nvar count = SceneManager._scene.currentDeck().cards.filter(function(x){return x===item.id}).length;\nif (count > denominator) {\n    this.changeTextColor(this.textColor(10));\n} else if (count > 0) {\n    this.changeTextColor(this.textColor(17));\n} else {\n    this.changeTextColor(this.normalColor());\n}\nif (Imported.YEP_CoreEngine) count = Yanfly.Util.toGroup(count);\nthis.drawText(count, rect.x, bottomY, rect.width, 'right');\nrect.width -= this.textWidth(count);\nthis.changeTextColor(this.normalColor());\nthis.drawText('\\u00d7', rect.x, bottomY, rect.width, 'right');"
 * 
 * @param
 * 
 *
 */
 /*~struct~DeckRuleset:
 * @param Name:str
 * @text Name
 * @desc The name of this deck ruleset. Used in code, too.
 * @default Standard
 * 
 * @param UnlockSwitch:num
 * @text Unlock Switch
 * @parent MainMenu
 * @type switch
 * @desc This switch needs to be on in order for this deck ruleset to be available. Use 0 to have it always unlocked.
 * @default 0
 * 
 * @param Description:json
 * @text Description
 * @type note
 * @desc A description of the ruleset. This appears in the deck building menu.
 * @default "Deck size must be at least 60 cards large.\nNo more than x4 copies of a card can be present."
 *
 * @param RulesetImg:str
 * @text Ruleset Image
 * @type file
 * @dir img/pictures/
 * @desc Mask image used for the deck ruleset
 * @default DeckRuleset_Standard
 *
 * @param
 * 
 * @param MinDeckSize:num
 * @text Minimum Deck Size
 * @desc Minimum deck size for this deck ruleset.
 * @default 40
 * 
 * @param MaxDeckSize:num
 * @text Maximum Deck Size
 * @desc Maximum deck size for this deck ruleset. Use 0 for unlimited.
 * @default 0
 *
 * @param MaxCopies:num
 * @text Max Copies of Cards
 * @desc Maximum copies of the same cards you can put in your deck. Use 0 for unlimited.
 * @default 4
 * 
 * @param
 * 
 * @param FilterRules:func
 * @text JS: Filter Rules
 * @type note
 * @desc JavaScript code used to determine which cards are allowed (true) and which aren't (false).
 * @default "return true;"
 * 
 * @param RestrictionRules:func
 * @text JS: Restriction Rules
 * @type note
 * @desc JavaScript code used to determine which cards are enabled (true) and which aren't (false).
 * @default "return true;"
 *
 * @param
 * 
 * 
 * 
 */
//=============================================================================

var pluginData=$plugins.filter(function(p){return p.description.contains("<CardGameDeckBuilder>")})[0];var Imported=Imported||{};Imported.Irina_CardGameDeck={};if(!Imported.Irina_CardGameCore){alert("Irina_CardGameDeck plugin needs to have Irina_CardGameCore placed above it in the Plugin Manager list.");SceneManager.exit()}(function(pluginData){var plugin="Irina_CardGameDeck";var convertParams=function(obj,data){for(var key in data){if(key.match(/(.*):NUM/i))obj[String(RegExp.$1)]=Number(data[key])||0;if(key.match(/(.*):STR/i))obj[String(RegExp.$1)]=String(data[key])||"";if(key.match(/(.*):ARRAYSTR/i))obj[String(RegExp.$1)]=JSON.parse(pluginData.parameters[key]);if(key.match(/(.*):EVAL/i))obj[String(RegExp.$1)]=eval(data[key]);if(key.match(/(.*):JSON/i))obj[String(RegExp.$1)]=JSON.parse(data[key]);if(key.match(/(.*):FUNC/i))obj[String(RegExp.$1)]=new Function(JSON.parse(data[key]));if(key.match(/(.*):ARRAYSTRUCT/i)){var array=JSON.parse(pluginData.parameters[key]);obj[String(RegExp.$1)]=array;for(var i=0;i<array.length;i++){var newData=JSON.parse(array[i]);array[i]={};convertParams(array[i],newData)}}}};convertParams(Imported[plugin],pluginData.parameters)})(pluginData);(function(){Imported.Irina_CardGameDeck.RulesetList={};for(var i=0;i<Imported.Irina_CardGameDeck.DeckRulesets.length;i++){var ruleset=Imported.Irina_CardGameDeck.DeckRulesets[i];var name=ruleset.Name.toUpperCase();Imported.Irina_CardGameDeck.RulesetList[name]=ruleset}})();$hideCardGameDeckBuilder=function(){$gameSystem.changeCardGameDeckBuilderVisibility(false)};$showCardGameDeckBuilder=function(){$gameSystem.changeCardGameDeckBuilderVisibility(true)};$disableCardGameDeckBuilder=function(){$gameSystem.changeCardGameDeckBuilderEnable(false)};$enableCardGameDeckBuilder=function(){$gameSystem.changeCardGameDeckBuilderEnable(true)};$openCardGameDeckBuilder=function(){if($gameParty.inBattle())return;SceneManager.push(Scene_CardDeckBuilder)};TouchInput._mouseOverX=0;TouchInput._mouseOverY=0;Imported.Irina_CardGameDeck.TouchInput_onMouseMove=TouchInput._onMouseMove;TouchInput._onMouseMove=function(event){Imported.Irina_CardGameDeck.TouchInput_onMouseMove.call(this,event);this._mouseOverX=Graphics.pageToCanvasX(event.pageX);this._mouseOverY=Graphics.pageToCanvasY(event.pageY)};Game_System.prototype.isCardGameDeckBuilderVisible=function(){if(!$gameParty.hasCards())return false;if(this._cardGameDeckBuilderVisible===undefined)this._cardGameDeckBuilderVisible=Imported.Irina_CardGameDeck.ShowMenuDeckBuilderCommand;return this._cardGameDeckBuilderVisible};Game_Party.prototype.hasCards=function(){var items=this.items();for(var i=0;i<items.length;i++){if(DataManager.isCard(items[i]))return true}return false};Game_System.prototype.changeCardGameDeckBuilderVisibility=function(value){this._cardGameDeckBuilderVisible=value};Game_System.prototype.isCardGameDeckBuilderEnabled=function(){if(this._cardGameDeckBuilderEnabled===undefined)this._cardGameDeckBuilderVisible=Imported.Irina_CardGameDeck.EnableMenuDeckBuilderCommand;return this._cardGameDeckBuilderEnabled};Game_System.prototype.changeCardGameDeckBuilderEnable=function(value){this._cardGameDeckBuilderEnabled=value};Imported.Irina_CardGameDeck.Window_MenuCommand_addMainCommands=Window_MenuCommand.prototype.addMainCommands;Window_MenuCommand.prototype.addMainCommands=function(){Imported.Irina_CardGameDeck.Window_MenuCommand_addMainCommands.call(this);if(Imported.YEP_MainMenuManager)return;this.addCardGameDeckBuilderCommand()};Window_MenuCommand.prototype.addCardGameDeckBuilderCommand=function(){if($gameSystem.isCardGameDeckBuilderVisible()){var text=Imported.Irina_CardGameDeck.DeckBuilderMenuText;var symbol="cardGameDeckBuilder";var enabled=$gameSystem.isCardGameDeckBuilderEnabled();this.addCommand(text,symbol,enabled)}};Imported.Irina_CardGameDeck.Scene_Menu_createCommandWindow=Scene_Menu.prototype.createCommandWindow;Scene_Menu.prototype.createCommandWindow=function(){Imported.Irina_CardGameDeck.Scene_Menu_createCommandWindow.call(this);this.setCardGameDeckBuilderHandlers()};Scene_Menu.prototype.setCardGameDeckBuilderHandlers=function(){this._commandWindow.setHandler("cardGameDeckBuilder",this.commandCardGameDeckBuilder.bind(this))};Scene_Menu.prototype.commandCardGameDeckBuilder=function(){SceneManager.push(Scene_CardDeckBuilder)};Game_System.prototype.availableDeckRulesets=function(){var available=[];for(var i=0;i<Imported.Irina_CardGameDeck.DeckRulesets.length;i++){var ruleset=Imported.Irina_CardGameDeck.DeckRulesets[i];if(ruleset){var switchId=ruleset.UnlockSwitch;if(switchId<=0||$gameSwitches.value(switchId)){available.push(ruleset)}}}return available};Game_System.prototype.decksForRuleset=function(ruleset){ruleset=ruleset.toUpperCase();this._cardGameDecks=this._cardGameDecks||{};this._cardGameDecks[ruleset]=this._cardGameDecks[ruleset]||[];return this._cardGameDecks[ruleset]};Game_System.prototype.createNewDeck=function(ruleset){var items=Imported.Irina_CardGameDeck.DefaultDeckboxes;var deck={name:"",box:items[Math.floor(Math.random()*items.length)],sleeves:Imported.Irina_CardGameCore.CardBackImg,ruleset:ruleset,wins:0,losses:0,ties:0,timesPlayed:0,favorite:false,cards:[]};return deck};Game_System.prototype.addNewDeck=function(deck){deck.cards.sort(function(a,b){return a-b});this.decksForRuleset(deck.ruleset).push(deck)};Game_System.prototype.reorderDeck=function(ruleset,deck,change){var list=this.decksForRuleset(ruleset);var index=list.indexOf(deck);var index2=index+change;if(index2>=list.length)index2=0;if(index2<0)index2=list.length-1;var deck2=list[index2];list.splice(index2,1,deck);list.splice(index,1,deck2)};Game_System.prototype.deleteDeck=function(ruleset,deck){var list=this.decksForRuleset(ruleset);list.splice(list.indexOf(deck),1)};Game_System.prototype.removeCardsFromDeck=function(deck,item){var partyCount=$gameParty.numItems(item);var deckCount=deck.cards.filter(function(x){return x===item.id}).length;if(deckCount<=partyCount)return;var times=deckCount-partyCount;while(times>0){var index=deck.cards.indexOf(item.id);if(index>=0)deck.cards.splice(index,1);times--}};Game_System.prototype.unlockedDeckboxes=function(){var pool=[].concat(Imported.Irina_CardGameDeck.DefaultDeckboxes);var items=$gameParty.items();for(var i=0;i<items.length;i++){var item=items[i];if(item&&item.note.match(/<Deck Box: (.*)>/i)){var filename=String(RegExp.$1).trim();if(!pool.contains(filename))pool.push(filename)}}return pool};Game_System.prototype.unlockedDeckSleeves=function(){var pool=[Imported.Irina_CardGameCore.CardBackImg];var items=$gameParty.items();for(var i=0;i<items.length;i++){var item=items[i];if(item&&item.note.match(/<Deck Sleeves: (.*)>/i)){var filename=String(RegExp.$1).trim();if(!pool.contains(filename))pool.push(filename)}}return pool};Imported.Irina_CardGameDeck.Game_Party_gainItem=Game_Party.prototype.gainItem;Game_Party.prototype.gainItem=function(item,amount,includeEquip){Imported.Irina_CardGameDeck.Game_Party_gainItem.call(this,item,amount,includeEquip);if(amount<0&&DataManager.isCard(item))this.updateAllCardGameDecks(item)};Game_Party.prototype.updateAllCardGameDecks=function(item){var rulesets=Imported.Irina_CardGameDeck.DeckRulesets;for(var r=0;r<rulesets.length;r++){var ruleset=rulesets[r].Name;var decks=$gameSystem.decksForRuleset(ruleset);for(var d=0;d<decks.length;d++){var deck=decks[d];$gameSystem.removeCardsFromDeck(deck,item)}}};Window_Selectable.prototype.isMouseInsideFrame=function(){if(!this.visible)return false;var x=this.canvasToLocalX(TouchInput._mouseOverX);var y=this.canvasToLocalY(TouchInput._mouseOverY);return x>=0&&y>=0&&x<this.width&&y<this.height};function Window_DeckBuilderRulesets(){this.initialize.apply(this,arguments)}Window_DeckBuilderRulesets.prototype=Object.create(Window_HorzCommand.prototype);Window_DeckBuilderRulesets.prototype.constructor=Window_DeckBuilderRulesets;Window_DeckBuilderRulesets.prototype.initialize=function(helpWindow){Imported.Irina_CardGameDeck.RulesetWindowInitialize.call(this,helpWindow);this._helpWindow=helpWindow;this.createSprites();this.refresh();this.callUpdateHelp()};Window_DeckBuilderRulesets.prototype.windowWidth=function(){return this._windowWidth};Window_DeckBuilderRulesets.prototype.windowHeight=function(){return this._windowHeight};Window_DeckBuilderRulesets.prototype.maxCols=function(){if(this._maxColumns!==undefined)return this._maxColumns;var maxCol=Math.max(Imported.Irina_CardGameDeck.SelectRulesetCol,1);this._maxColumns=$gameSystem.availableDeckRulesets().length.clamp(1,maxCol);return this._maxColumns};Window_DeckBuilderRulesets.prototype.createSprites=function(){this._spriteContainer=new Sprite;this.addChildToBack(this._spriteContainer);this._spriteContainer.x=this.standardPadding();this._spriteContainer.y=this.standardPadding();this._sprites=[];for(var i=0;i<this.maxCols();i++){var sprite=new Sprite;this._sprites.push(sprite);this._spriteContainer.addChild(sprite);sprite.anchor.x=.5;sprite.anchor.y=.5;var rect=this.itemRect(i);sprite.x=rect.x+rect.width/2;sprite.y=rect.y+rect.height/2}};Window_DeckBuilderRulesets.prototype.getSpriteAtIndex=function(index){var arrayIndex=index%this.maxCols();return this._sprites[arrayIndex]};Window_DeckBuilderRulesets.prototype.update=function(){Window_HorzCommand.prototype.update.call(this);this.scaleAllSprites()};Window_DeckBuilderRulesets.prototype.makeCommandList=function(){for(var i=0;i<$gameSystem.availableDeckRulesets().length;i++){var ruleset=$gameSystem.availableDeckRulesets()[i];if(ruleset){this.addCommand("","ruleset",true,ruleset)}}};Window_DeckBuilderRulesets.prototype.itemWidth=function(){return Math.floor((this.width-this.padding*2-this.lineHeight()*4+this.spacing())/this.maxCols()-this.spacing())};Window_DeckBuilderRulesets.prototype.itemHeight=function(){return this.contents.height-this.lineHeight()*4};Window_DeckBuilderRulesets.prototype.itemRect=function(index){var rect=new Rectangle;var maxCols=this.maxCols();rect.width=this.itemWidth();rect.height=this.itemHeight();var fullWidth=this.contents.width-this.lineHeight()*4;rect.x=(fullWidth-this.itemWidth()*maxCols)/2+this.lineHeight()*2;rect.x+=index%maxCols*this.itemWidth();rect.y=this.lineHeight()*3;return rect};Window_DeckBuilderRulesets.prototype.updateCursor=function(){this.setCursorRect(0,0,0,0)};Window_DeckBuilderRulesets.prototype.setTopRow=function(row){this.hideAllSprites();Window_HorzCommand.prototype.setTopRow.call(this,row)};Window_DeckBuilderRulesets.prototype.cursorDown=function(wrap){var index=this.index();var maxItems=this.maxItems();var maxCols=this.maxCols();if(index<maxItems-maxCols||wrap&&maxCols===1){this.select((index+maxCols)%maxItems)}else if(index===maxItems-1){this.select(0)}else{this.select(maxItems-1)}};Window_DeckBuilderRulesets.prototype.cursorUp=function(wrap){var index=this.index();var maxItems=this.maxItems();var maxCols=this.maxCols();if(index>=maxCols||wrap&&maxCols===1){this.select((index-maxCols+maxItems)%maxItems)}else if(index===0){this.select(maxItems-1)}else if(index<maxCols){this.select(0)}};Window_DeckBuilderRulesets.prototype.select=function(index){if(this._spriteContainer&&this.index()>=0){this.getSpriteAtIndex(this.index()).opacity=Imported.Irina_CardGameDeck.OpacityNotSelect}Window_HorzCommand.prototype.select.call(this,index)};Window_DeckBuilderRulesets.prototype.hideAllSprites=function(){if(!this._spriteContainer)return;for(var i=0;i<this._sprites.length;i++){var sprite=this._sprites[i];sprite.opacity=0}};Window_DeckBuilderRulesets.prototype.drawAllItems=function(){Window_HorzCommand.prototype.drawAllItems.call(this);this.drawTitle()};Window_DeckBuilderRulesets.prototype.drawTitle=function(){var text=Imported.Irina_CardGameDeck.SelectRulesetText;var textWidth=Window_ChoiceList.prototype.textWidthEx.call(this,text);var x=(this.contents.width-textWidth)/2;var y=this.lineHeight()*.5;this.drawTextEx(text,x,y)};Window_DeckBuilderRulesets.prototype.drawItem=function(index){if(!this._spriteContainer)return;var ruleset=this._list[index].ext;if(ruleset){if(ruleset.RulesetImg!==""){var bitmap=ImageManager.loadPicture(ruleset.RulesetImg)}else{var bitmap=new Bitmap(1,1)}bitmap.addLoadListener(this.changeSpriteBitmap.bind(this,bitmap,index,ruleset))}};Window_DeckBuilderRulesets.prototype.changeSpriteBitmap=function(bitmap,index,ruleset){if(ruleset!==this._list[index].ext)return;var sprite=this.getSpriteAtIndex(index);sprite.bitmap=bitmap;sprite.opacity=Imported.Irina_CardGameDeck.OpacityNotSelect};Window_DeckBuilderRulesets.prototype.scaleAllSprites=function(){if(!this._spriteContainer)return;this.scaleSmallSprites();this.scaleSelectedSprite()};Window_DeckBuilderRulesets.prototype.scaleSmallSprites=function(){var rect=this.itemRect(0);rect.width-=this.textPadding()*2;var maxScale=Imported.Irina_CardGameDeck.MaxScaleNotSelect;for(var i=0;i<this._sprites.length;i++){var sprite=this._sprites[i];if(sprite===this.getSpriteAtIndex(this.index()))continue;if(sprite.bitmap&&sprite.bitmap.width>0){if(sprite.width>rect.width||sprite.height>rect.height){var scale=Math.min(rect.width/sprite.width,rect.height/sprite.height);scale=Math.min(maxScale,scale*1.5);sprite.scale.x=sprite.scale.y=scale}else{sprite.scale.x=sprite.scale.y=maxScale}}else{sprite.scale.x=sprite.scale.y=maxScale}sprite.update()}};Window_DeckBuilderRulesets.prototype.scaleSelectedSprite=function(){if(this.index()<0)return;var maxScale=Imported.Irina_CardGameDeck.MaxScaleSelect;var sprite=this.getSpriteAtIndex(this.index());sprite.scale.x=Math.min(maxScale,sprite.scale.x+.02);sprite.scale.y=sprite.scale.x;sprite.opacity=Imported.Irina_CardGameDeck.OpacitySelect;this._spriteContainer.removeChild(sprite);this._spriteContainer.addChild(sprite)};Window_DeckBuilderRulesets.prototype.updateHelp=function(){Window_HorzCommand.prototype.updateHelp.call(this);if(this._helpWindow&&this.currentExt()){var ruleset=this.currentExt();this._helpWindow.setText(this.currentExt().Description)}};function Window_DeckBuilderSprite(){this.initialize.apply(this,arguments)}Window_DeckBuilderSprite.prototype=Object.create(Window_Base.prototype);Window_DeckBuilderSprite.prototype.constructor=Window_DeckBuilderSprite;Window_DeckBuilderSprite.prototype.initialize=function(helpWindow){Imported.Irina_CardGameDeck.SpriteWindowInitialize.call(this,helpWindow);this.createSprites()};Window_DeckBuilderSprite.prototype.createSprites=function(){this._deckSprite=new Sprite;this.addChildToBack(this._deckSprite);this._deckSprite.opacity=0;this._deckSprite.anchor.x=.5;this._deckSprite.anchor.y=.5;this._card=CardManager.createCard(1);this._cardSprite=this._card.sprite();this.addChildToBack(this._cardSprite);this._cardSprite.opacity=0;this._cardSprite.anchor.x=.5;this._cardSprite.anchor.y=.5;this._deckSprite.x=this._cardSprite.x=this.width/2;this._deckSprite.y=this._cardSprite.y=this.height/2};Window_DeckBuilderSprite.prototype.setDeck=function(deck){this._deck=deck;if(this._deck==="NewDeck"){this._deckSprite.opacity=255;this._deckSprite.bitmap=ImageManager.loadPicture(Imported.Irina_CardGameDeck.NewDeckBoxImg)}else if(this._deck){this._deckSprite.opacity=255;this._deckSprite.bitmap=ImageManager.loadPicture(this._deck.box)}else{this._deckSprite.opacity=0}this._cardSprite.opacity=0;this.refresh()};Window_DeckBuilderSprite.prototype.setCard=function(item){if(item){this._cardSprite.opacity=255;this._card.changeCard(item.id)}else{this._cardSprite.opacity=0}this._deckSprite.opacity=0;this.refresh()};Window_DeckBuilderSprite.prototype.refresh=function(){this.contents.clear();if(!this._deck)return;if(this._deck==="NewDeck")return;this.resetFontSettings();Imported.Irina_CardGameDeck.SpriteWindowRefresh.call(this)};function Window_DeckBuilderList(){this.initialize.apply(this,arguments)}Window_DeckBuilderList.prototype=Object.create(Window_Command.prototype);Window_DeckBuilderList.prototype.constructor=Window_DeckBuilderList;Window_DeckBuilderList.prototype.initialize=function(helpWindow){Imported.Irina_CardGameDeck.ListWindowInitialize.call(this,helpWindow);this._helpWindow=helpWindow;this.deactivate()};Window_DeckBuilderList.prototype.windowWidth=function(){return this._windowWidth||Math.ceil(Graphics.boxWidth*1/3)};Window_DeckBuilderList.prototype.windowHeight=function(){return this._windowHeight||Graphics.boxHeight-this.fittingHeight(2)};Window_DeckBuilderList.prototype.setRuleset=function(ruleset){this._ruleset=ruleset;this.refresh();this.callUpdateHelp()};Window_DeckBuilderList.prototype.makeCommandList=function(){if(!this._ruleset)return;var text=Imported.Irina_CardGameDeck.CreateNewDeckText;this.addCommand(text,"createNewDeck",this.isNewDeckCreationEnabled(),"NewDeck");var decks=$gameSystem.decksForRuleset(this._ruleset.Name);for(var i=0;i<decks.length;i++){var deck=decks[i];var text="\\i["+this.getDeckIcon(deck)+"]"+deck.name;this.addCommand(text,"deck",true,deck)}};Window_DeckBuilderList.prototype.getDeckIcon=function(deck){var defaultIcon=Imported.Irina_CardGameDeck.DeckIconNormal;var favoriteIcon=Imported.Irina_CardGameDeck.DeckIconFavorite;return deck.favorite?favoriteIcon:defaultIcon};Window_DeckBuilderList.prototype.isNewDeckCreationEnabled=function(){return true};Window_DeckBuilderList.prototype.drawItem=function(index){var rect=this.itemRectForText(index);var align=this.itemTextAlign();this.resetTextColor();this.changePaintOpacity(this.isCommandEnabled(index));var text=this.commandName(index);if(this._orderMode&&index===this.index())text="\\c["+Imported.Irina_CardGameDeck.OrderTextCodeColor+"]"+text;if(this.commandSymbol(index)==="deck"){var deck=this._list[index].ext;if(deck.cards.length<this._ruleset.MinDeckSize)text="\\c[18]"+text}this.drawTextEx(text,rect.x,rect.y)};Window_DeckBuilderList.prototype.updateHelp=function(){if(this._orderMode)return;Window_Command.prototype.updateHelp.call(this);if(this._helpWindow){if(this.currentExt()==="NewDeck"){var text=Imported.Irina_CardGameDeck.CreateNewDeckHelp;this._helpWindow.setText(text)}else if(this.currentExt()){var ruleset=this.currentExt().ruleset;var fmt=Imported.Irina_CardGameDeck.SelectDeckHelpFmt;var text=fmt.format(this.currentExt().ruleset,this.currentExt().timesPlayed,this.currentExt().wins,this.currentExt().losses,this.currentExt().ties);this._helpWindow.setText(text)}}if(this._spriteWindow)this._spriteWindow.setDeck(this.currentExt());if(this._ratioWindow)this._ratioWindow.setDeck(this.currentExt());if(this._contentsWindow)this._contentsWindow.setDeck(this.currentExt())};Window_DeckBuilderList.prototype.setOrderMode=function(value){this._orderMode=value;this.refresh()};Window_DeckBuilderList.prototype.callOkHandler=function(){if(this._orderMode){SoundManager.playOk();this.cancelOrderMode();return}Window_Command.prototype.callOkHandler.call(this)};Window_DeckBuilderList.prototype.callCancelHandler=function(){if(this._orderMode){SoundManager.playCancel();this.cancelOrderMode();return}Window_Command.prototype.callCancelHandler.call(this)};Window_DeckBuilderList.prototype.cancelOrderMode=function(){this._orderMode=false;this.deactivate();this.refresh();SceneManager._scene.onDecklistDeck();SceneManager._scene._commandWindow.selectSymbol("orderDeck")};Window_DeckBuilderList.prototype.cursorDown=function(wrap){if(this._orderMode){wrap=true;$gameSystem.reorderDeck(this._ruleset.Name,this.currentExt(),1);this.refresh()}Window_Command.prototype.cursorDown.call(this,wrap);if(this._orderMode&&this.index()<=0){this.select(1)}if(this._orderMode)this.refresh()};Window_DeckBuilderList.prototype.cursorUp=function(wrap){if(this._orderMode){wrap=true;$gameSystem.reorderDeck(this._ruleset.Name,this.currentExt(),-1);if(this.index()<=1)this.select(0);this.refresh()}Window_Command.prototype.cursorUp.call(this,wrap);if(this._orderMode)this.refresh()};Window_DeckBuilderList.prototype.cursorPagedown=function(){if(this._orderMode){var deck=this.currentExt();var lastIndex=this.index()}Window_Command.prototype.cursorPagedown.call(this);if(this._orderMode&&this.index()<=0)this.select(1);if(this._orderMode&&this.index()!==lastIndex&&this.index()>0){$gameSystem.reorderDeck(this._ruleset.Name,deck,this.index()-lastIndex);this.refresh()}};Window_DeckBuilderList.prototype.cursorPageup=function(){if(this._orderMode){var deck=this.currentExt();var lastIndex=this.index()}Window_Command.prototype.cursorPageup.call(this);if(this._orderMode&&this.index()<=0)this.select(1);if(this._orderMode&&this.index()!==lastIndex&&this.index()>0){$gameSystem.reorderDeck(this._ruleset.Name,deck,this.index()-lastIndex);this.refresh()}};Window_DeckBuilderList.prototype.cursorRight=function(wrap){if(this.index()%this.maxCols()===this.maxCols()-1){this.tabToContentsWindow()}else{Window_ItemList.prototype.cursorRight.call(this,wrap)}};Window_DeckBuilderList.prototype.processHandling=function(){if(Input.isTriggered("tab")&&this.active)this.tabToContentsWindow();Window_Command.prototype.processHandling.call(this)};Window_DeckBuilderList.prototype.processTouch=function(){if(this.isMouseInsideFrame()||TouchInput.isCancelled())return Window_Command.prototype.processTouch.call(this);if(TouchInput.isTriggered()&&SceneManager._scene._contentsWindow.isMouseInsideFrame()){this.tabToContentsWindow()}};Window_DeckBuilderList.prototype.tabToContentsWindow=function(){if(!this.active)return;if(this._orderMode)return;if(!this.currentExt())return;if(this.currentExt()==="NewDeck")return;if(!SceneManager._scene._contentsWindow)return;if(SceneManager._scene._contentsWindow.maxItems()<=0)return;this.deactivate();Input.clear();SceneManager._scene._contentsWindow.active=true;if(TouchInput.isTriggered()){SceneManager._scene._contentsWindow.processTouch();TouchInput.clear()}else{SoundManager.playCursor();SceneManager._scene._contentsWindow.select(0)}SceneManager._scene._contentsWindow._returnWindow=this};Window_DeckBuilderList.prototype.onTouch=function(triggered){if(this._orderMode){var deck=this.currentExt();var lastIndex=this.index()}Window_Command.prototype.onTouch.call(this,triggered);if(this._orderMode&&this.index()<=0)this.select(1);if(this._orderMode&&this.index()!==lastIndex&&this.index()>0){$gameSystem.reorderDeck(this._ruleset.Name,deck,this.index()-lastIndex);this.refresh()}};Window_DeckBuilderList.prototype.processWheel=function(){if(this.isMouseInsideFrame()){var threshold=20;if(TouchInput.wheelY>=threshold){this.scrollDown()}if(TouchInput.wheelY<=-threshold){this.scrollUp()}}};function Window_DeckBuilderRatio(){this.initialize.apply(this,arguments)}Window_DeckBuilderRatio.prototype=Object.create(Window_Base.prototype);Window_DeckBuilderRatio.prototype.constructor=Window_DeckBuilderRatio;Window_DeckBuilderRatio.prototype.initialize=function(helpWindow){this._deck=null;Imported.Irina_CardGameDeck.RatioWindowInitialize.call(this,helpWindow);this.createSprite()};Window_DeckBuilderRatio.prototype.createSprite=function(){this._RatioGaugeSprite=new Sprite;this.addChildToBack(this._RatioGaugeSprite);var filename=Imported.Irina_CardGameDeck.RatioGaugeImg;this._RatioGaugeBitmap=ImageManager.loadPicture(filename);this._RatioGaugeSprite.bitmap=this._RatioGaugeBitmap;Imported.Irina_CardGameDeck.RatioWindowSprite.call(this)};Window_DeckBuilderRatio.prototype.setDeck=function(deck){if(!deck)return;this._deck=deck;this.refresh()};Window_DeckBuilderRatio.prototype.refresh=function(){this.contents.clear();this.drawRatios();this.drawAverages();this.drawCardCount()};Window_DeckBuilderRatio.prototype.drawRatios=function(){if(!this._deck)return;if(this._deck==="NewDeck")return;this.resetFontSettings();Imported.Irina_CardGameDeck.RatioWindowDrawGauges.call(this)};Window_DeckBuilderRatio.prototype.drawAverages=function(){if(!this._deck)return;if(this._deck==="NewDeck")return;this.resetFontSettings();Imported.Irina_CardGameDeck.RatioWindowDrawAverages.call(this)};Window_DeckBuilderRatio.prototype.drawCardCount=function(){if(!this._deck)return;if(this._deck==="NewDeck")return;this.resetFontSettings();Imported.Irina_CardGameDeck.RatioWindowDrawCount.call(this)};function Window_DeckBuilderContents(){this.initialize.apply(this,arguments)}Window_DeckBuilderContents.prototype=Object.create(Window_CardList.prototype);Window_DeckBuilderContents.prototype.constructor=Window_DeckBuilderContents;Window_DeckBuilderContents.prototype.initialize=function(helpWindow,ratioWindow){Imported.Irina_CardGameDeck.ContentsWindowIntialize.call(this,helpWindow,ratioWindow);this._helpWindow=helpWindow;this.deactivate()};Window_DeckBuilderContents.prototype.setDeck=function(deck){this._cards=[];if(deck&&deck!=="NewDeck"){for(var i=0;i<deck.cards.length;i++){var itemId=deck.cards[i];this._cards.push($dataItems[itemId])}Scene_Base.prototype.sortCards.call(this,this._cards)}this.refresh()};Window_DeckBuilderContents.prototype.cursorLeft=function(wrap){this.tabBackToReturnWindow()};Window_DeckBuilderContents.prototype.isOkEnabled=function(){if(SceneManager._scene._inventoryWindow&&SceneManager._scene._inventoryWindow.visible)return true;return false};Window_DeckBuilderContents.prototype.isCurrentItemEnabled=function(){return this.item()};Window_DeckBuilderContents.prototype.isOpenAndActive=function(){return this.isOpen()&&this.active&&this.visible};Window_DeckBuilderContents.prototype.processHandling=function(){if(Input.isTriggered("tab")&&this.active)this.tabBackToReturnWindow();Window_Command.prototype.processHandling.call(this)};Window_DeckBuilderContents.prototype.processTouch=function(){if(this.isMouseInsideFrame()||TouchInput.isCancelled())return Window_Command.prototype.processTouch.call(this);if(TouchInput.isTriggered()){if(SceneManager._scene._listWindow.isMouseInsideFrame()){this.tabBackToReturnWindow()}else if(SceneManager._scene._inventoryWindow.isMouseInsideFrame()){this.tabBackToReturnWindow()}else if(SceneManager._scene._filterWindow.isMouseInsideFrame()){this.tabToFilterWindow()}}};Window_DeckBuilderContents.prototype.tabBackToReturnWindow=function(){if(!this.active)return;if(!this._returnWindow)return;this.deactivate();Input.clear();this.deselect();if(TouchInput.isTriggered()){this._returnWindow.active=true;this._returnWindow._index=-1;this._returnWindow.processTouch();TouchInput.clear()}else{SoundManager.playCursor();this._returnWindow.activate()}};Window_DeckBuilderContents.prototype.tabToFilterWindow=function(){if(!this.active)return;SceneManager._scene._filterWindow.activate();SceneManager._scene._filterWindow.processTouch();SceneManager._scene._filterWindow.deactivate();SceneManager._scene._filterWindow.deselect();this.activate()};Window_DeckBuilderContents.prototype.processWheel=function(){if(this.isMouseInsideFrame()){var threshold=20;if(TouchInput.wheelY>=threshold){this.scrollDown()}if(TouchInput.wheelY<=-threshold){this.scrollUp()}}};Window_DeckBuilderContents.prototype.playOkSound=function(){SoundManager.playReflection()};Window_DeckBuilderContents.prototype.callUpdateHelp=function(){Window_Selectable.prototype.callUpdateHelp.call(this)};Window_DeckBuilderContents.prototype.updateHelp=function(){this.setHelpWindowItem(this.item());SceneManager._scene._spriteWindow.setCard(this.item());if(SceneManager._scene._inventoryWindow.visible&&this.item()){SceneManager._scene._inventoryWindow._previewCard.changeCard(this.item().id)}};function Window_DeckBuilderCommand(){this.initialize.apply(this,arguments)}Window_DeckBuilderCommand.prototype=Object.create(Window_Command.prototype);Window_DeckBuilderCommand.prototype.constructor=Window_DeckBuilderCommand;Window_DeckBuilderCommand.prototype.initialize=function(helpWindow,listWindow){this._deck=null;this._windowWidth=Imported.Irina_CardGameDeck.CommandWindowWidth;var helpWindow=arguments[0];var listWindow=arguments[1];var x=listWindow.x-this._windowWidth+this.standardPadding();var y=helpWindow.y+helpWindow.height;Window_Command.prototype.initialize.call(this,x,y);this._helpWindow=helpWindow;this._listWindow=listWindow;this.openness=0;this.deactivate()};Window_DeckBuilderCommand.prototype.windowWidth=function(){return this._windowWidth||Math.ceil(Graphics.boxWidth*1/3)};Window_DeckBuilderCommand.prototype.standardBackOpacity=function(){return Imported.Irina_CardGameDeck.CommandWindowOpacity};Window_DeckBuilderCommand.prototype.setDeck=function(deck){this._deck=deck;this.refresh();this.select(0);this.reposition();this.open()};Window_DeckBuilderCommand.prototype.makeCommandList=function(){var symbols=["editDeck","renameDeck","favorite","changeBox","changeSleeves","orderDeck","deleteDeck"];for(var i=0;i<symbols.length;i++){var symbol=symbols[i];if(!Imported.Irina_CardGameDeck["CSHOW"+symbol])continue;if(symbol==="changeSleeves"&&$gameSystem.unlockedDeckSleeves().length<=1)continue;if(symbol==="favorite"&&this._deck){if(this._deck.favorite){var text=Imported.Irina_CardGameDeck["CTXTunfavorite"]}else{var text=Imported.Irina_CardGameDeck["CTXTfavorite"]}}else{var text=Imported.Irina_CardGameDeck["CTXT"+symbol]}var enabled=true;var ext=Imported.Irina_CardGameDeck["CHLP"+symbol];this.addCommand(text,symbol,enabled,ext)}};Window_DeckBuilderCommand.prototype.reposition=function(){var y=this._listWindow.y+this._listWindow._cursorRect.y;y=Math.min(Graphics.boxHeight-this.height,y);this.y=y};Window_DeckBuilderCommand.prototype.updateHelp=function(){Window_Command.prototype.updateHelp.call(this);this._helpWindow.setText(this.currentExt())};function Window_DeckBuilderNameEdit(){this.initialize.apply(this,arguments)}Window_DeckBuilderNameEdit.prototype=Object.create(Window_NameEdit.prototype);Window_DeckBuilderNameEdit.prototype.constructor=Window_DeckBuilderNameEdit;Window_DeckBuilderNameEdit.prototype.initialize=function(){var width=this.windowWidth();var height=this.windowHeight();var x=(Graphics.boxWidth-width)/2;var y=(Graphics.boxHeight-(height+this.fittingHeight(9)+8))/2;Window_Base.prototype.initialize.call(this,x,y,width,height);this.openness=0;this._maxLength=Imported.Irina_CardGameDeck.DeckNameLength;this.deactivate()};Window_DeckBuilderNameEdit.prototype.standardBackOpacity=function(){return Imported.Irina_CardGameDeck.CommandWindowOpacity};Window_DeckBuilderNameEdit.prototype.setDeck=function(deck){this._deck=deck;this._name=deck.name.slice(0,this._maxLength);this._index=this._name.length;this._defaultName=this._name;this.refresh()};Window_DeckBuilderNameEdit.prototype.left=function(){var nameCenter=this.contentsWidth()/2;var nameWidth=(this._maxLength+1)*this.charWidth();return Math.min(nameCenter-nameWidth/2,this.contentsWidth()-nameWidth)};Window_DeckBuilderNameEdit.prototype.itemRect=function(index){return{x:this.left()+index*this.charWidth(),y:54,width:this.charWidth(),height:this.lineHeight()}};Window_DeckBuilderNameEdit.prototype.refresh=function(){this.contents.clear();if(!this._deck)return;for(var i=0;i<this._maxLength;i++){this.drawUnderline(i)}for(var j=0;j<this._name.length;j++){this.drawChar(j)}var rect=this.itemRect(this._index);this.setCursorRect(rect.x,rect.y,rect.width,rect.height)};function Window_DeckBuilderNameInput(){this.initialize.apply(this,arguments)}Window_DeckBuilderNameInput.prototype=Object.create(Window_NameInput.prototype);Window_DeckBuilderNameInput.prototype.constructor=Window_DeckBuilderNameInput;Window_DeckBuilderNameInput.prototype.standardBackOpacity=function(){return Imported.Irina_CardGameDeck.CommandWindowOpacity};Window_DeckBuilderNameInput.prototype.onNameOk=function(){Input.clear();Window_NameInput.prototype.onNameOk.call(this)};function Window_DeckBuilderBox(){this.initialize.apply(this,arguments)}Window_DeckBuilderBox.prototype=Object.create(Window_Command.prototype);Window_DeckBuilderBox.prototype.constructor=Window_DeckBuilderBox;Window_DeckBuilderBox.prototype.initialize=function(helpWindow,listWindow){var helpWindow=arguments[0];var listWindow=arguments[1];this._windowWidth=listWindow.width;this._windowHeight=listWindow.height;var x=listWindow.x;var y=listWindow.y;Window_Command.prototype.initialize.call(this,x,y);this._helpWindow=helpWindow;this._listWindow=listWindow;this.createSprites();this.hide();this.refresh();this.deactivate()};Window_DeckBuilderBox.prototype.windowWidth=function(){return this._windowWidth};Window_DeckBuilderBox.prototype.windowHeight=function(){return this._windowHeight};Window_DeckBuilderBox.prototype.numVisibleRows=function(){return Imported.Irina_CardGameDeck.DeckBoxRows};Window_DeckBuilderBox.prototype.maxCols=function(){return Imported.Irina_CardGameDeck.DeckBoxCol};Window_DeckBuilderBox.prototype.itemHeight=function(){return Math.floor(this.contents.height/this.numVisibleRows())};Window_DeckBuilderBox.prototype.itemWidth=function(){return Math.floor(this.contents.width/this.maxCols())};Window_DeckBuilderBox.prototype.spacing=function(){return 0};Window_DeckBuilderBox.prototype.createSprites=function(){this._spriteContainer=new Sprite;this.addChild(this._spriteContainer);this._spriteContainer.x=this.standardPadding();this._spriteContainer.y=this.standardPadding();this._sprites=[];var total=this.numVisibleRows()*this.maxCols();for(var i=0;i<total;i++){var sprite=this.createIndividualSprite();this._spriteContainer.addChild(sprite)}};Window_DeckBuilderBox.prototype.createIndividualSprite=function(){var sprite=new Sprite;this._sprites.push(sprite);sprite.anchor.x=.5;sprite.anchor.y=.5;return sprite};Window_DeckBuilderBox.prototype.getSpriteAtIndex=function(index){var arrayIndex=index%(this.maxCols()*this.numVisibleRows());return this._sprites[arrayIndex]};Window_DeckBuilderBox.prototype.cursorDown=function(wrap){var index=this.index();var maxItems=this.maxItems();var maxCols=this.maxCols();if(index<maxItems-maxCols||wrap&&maxCols===1){this.select((index+maxCols)%maxItems)}else if(index===maxItems-1){this.select(0)}else{this.select(maxItems-1)}};Window_DeckBuilderBox.prototype.cursorUp=function(wrap){var index=this.index();var maxItems=this.maxItems();var maxCols=this.maxCols();if(index>=maxCols||wrap&&maxCols===1){this.select((index-maxCols+maxItems)%maxItems)}else if(index===0){this.select(maxItems-1)}else if(index<maxCols){this.select(0)}};Window_DeckBuilderBox.prototype.processWheel=function(){if(this.isOpenAndActive()){var threshold=20;var index=this.index();if(TouchInput.wheelY>=threshold){this.cursorDown()}if(TouchInput.wheelY<=-threshold){this.cursorUp()}if(index!==this.index())SoundManager.playCursor()}};Window_DeckBuilderBox.prototype.makeCommandList=function(){var deckboxes=$gameSystem.unlockedDeckboxes();for(var i=0;i<deckboxes.length;i++){var ext=deckboxes[i];this.addCommand("","deckBox",true,ext)}};Window_DeckBuilderBox.prototype.setTopRow=function(row){this.hideAllSprites();Window_HorzCommand.prototype.setTopRow.call(this,row)};Window_DeckBuilderBox.prototype.select=function(index){if(this._spriteContainer&&this.index()>=0){var sprite=this.getSpriteAtIndex(this.index());sprite.scale.x=sprite.scale.y=sprite.scale._smallScale}Window_Command.prototype.select.call(this,index);if(this._spriteContainer&&this.index()>=0){var sprite=this.getSpriteAtIndex(this.index());this._spriteContainer.removeChild(sprite);this._spriteContainer.addChild(sprite)}};Window_DeckBuilderBox.prototype.hideAllSprites=function(){if(!this._spriteContainer)return;for(var i=0;i<this._sprites.length;i++){var sprite=this._sprites[i];sprite.opacity=0}};Window_DeckBuilderBox.prototype.drawItem=function(index){if(!this._spriteContainer)return;var filename=this._list[index].ext;var bitmap=ImageManager.loadPicture(filename);bitmap.addLoadListener(this.changeSpriteBitmap.bind(this,bitmap,index,filename))};Window_DeckBuilderBox.prototype.changeSpriteBitmap=function(bitmap,index,filename){if(filename!==this._list[index].ext)return;var sprite=this.getSpriteAtIndex(index);sprite.bitmap=bitmap;sprite.bitmap._smooth=true;sprite.bitmap._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR;var rect=this.itemRect(index);rect.width-=8;rect.height-=8;sprite.x=rect.x+rect.width/2;sprite.y=rect.y+rect.height/2;sprite.opacity=255;if(bitmap.width>rect.width||bitmap.height>rect.height){var scale=Math.min(rect.width/bitmap.width,rect.height/bitmap.height);sprite.scale._smallScale=scale;sprite.scale._bigScale=scale+.2;sprite.scale.x=sprite.scale.y=sprite.scale._smallScale}};Window_DeckBuilderBox.prototype.update=function(){Window_Command.prototype.update.call(this);this.updateSelectedSpriteScale()};Window_DeckBuilderBox.prototype.updateCursor=function(){this.setCursorRect(0,0,0,0)};Window_DeckBuilderBox.prototype.updateSelectedSpriteScale=function(){if(!this._spriteContainer)return;var sprite=this.getSpriteAtIndex(this.index());var scale=Math.min(sprite.scale.x+.02,sprite.scale._bigScale);sprite.scale.x=sprite.scale.y=scale};Window_DeckBuilderBox.prototype.updateHelp=function(){Window_Command.prototype.updateHelp.call(this);if(this._helpWindow)this._helpWindow.setText(Imported.Irina_CardGameDeck.CHLPchangeBox);if(this._listWindow&&this.currentExt()){var deck=this._listWindow.currentExt();var deckbox=this.currentExt();deck.box=deckbox;SceneManager._scene._spriteWindow.setDeck(deck)}};function Window_DeckBuilderSleeves(){this.initialize.apply(this,arguments)}Window_DeckBuilderSleeves.prototype=Object.create(Window_Command.prototype);Window_DeckBuilderSleeves.prototype.constructor=Window_DeckBuilderSleeves;Window_DeckBuilderSleeves.prototype.initialize=function(helpWindow,listWindow){var helpWindow=arguments[0];var listWindow=arguments[1];this._windowWidth=listWindow.width;this._windowHeight=listWindow.height;var x=listWindow.x;var y=listWindow.y;Window_Command.prototype.initialize.call(this,x,y);this._helpWindow=helpWindow;this._listWindow=listWindow;this.createSprites();this.hide();this.refresh();this.deactivate()};Window_DeckBuilderSleeves.prototype.windowWidth=function(){return this._windowWidth};Window_DeckBuilderSleeves.prototype.windowHeight=function(){return this._windowHeight};Window_DeckBuilderSleeves.prototype.numVisibleRows=function(){return Imported.Irina_CardGameDeck.DeckSleevesRows};Window_DeckBuilderSleeves.prototype.maxCols=function(){return Imported.Irina_CardGameDeck.DeckSleevesCol};Window_DeckBuilderSleeves.prototype.itemHeight=function(){return Math.floor(this.contents.height/this.numVisibleRows())};Window_DeckBuilderSleeves.prototype.itemWidth=function(){return Math.floor(this.contents.width/this.maxCols())};Window_DeckBuilderSleeves.prototype.spacing=function(){return 0};Window_DeckBuilderSleeves.prototype.createSprites=function(){this._spriteContainer=new Sprite;this.addChild(this._spriteContainer);this._spriteContainer.x=this.standardPadding();this._spriteContainer.y=this.standardPadding();this._sprites=[];var total=this.numVisibleRows()*this.maxCols();for(var i=0;i<total;i++){var sprite=this.createIndividualSprite();this._spriteContainer.addChild(sprite);this._sprites.push(sprite)}};Window_DeckBuilderSleeves.prototype.createIndividualSprite=function(){var sprite=new Sprite_Base;sprite.anchor.x=sprite.anchor.y=.5;var thickness=Imported.Irina_CardGameCore.CardOutlineThickness;var color=Imported.Irina_CardGameCore.CardOutlineColor;sprite._filters=[new PIXI.filters.OutlineFilter(thickness,color)];sprite._maskSprite=new Sprite;sprite._maskSprite.bitmap=ImageManager.loadPicture(Imported.Irina_CardGameCore.CardMaskImg);sprite.addChild(sprite._maskSprite);sprite._maskSprite.anchor.x=sprite._maskSprite.anchor.y=.5;sprite._maskSprite._mask=sprite._maskSprite;sprite._backSprite=new Sprite;sprite.addChild(sprite._backSprite);sprite._backSprite.anchor.x=sprite._backSprite.anchor.y=.5;sprite._backSprite._holoFilter=new PIXI.filters.ColorMatrixFilter;sprite._backSprite._filters=[sprite._backSprite._holoFilter];sprite._backSprite._mask=sprite._maskSprite;sprite._logoSprite=new Sprite;sprite.addChild(sprite._logoSprite);sprite._logoSprite.anchor.x=sprite._logoSprite.anchor.y=.5;sprite._logoSprite._mask=sprite._maskSprite;return sprite};Window_DeckBuilderSleeves.prototype.getSpriteAtIndex=function(index){var arrayIndex=index%(this.maxCols()*this.numVisibleRows());return this._sprites[arrayIndex]};Window_DeckBuilderSleeves.prototype.cursorDown=function(wrap){var index=this.index();var maxItems=this.maxItems();var maxCols=this.maxCols();if(index<maxItems-maxCols||wrap&&maxCols===1){this.select((index+maxCols)%maxItems)}else if(index===maxItems-1){this.select(0)}else{this.select(maxItems-1)}};Window_DeckBuilderSleeves.prototype.cursorUp=function(wrap){var index=this.index();var maxItems=this.maxItems();var maxCols=this.maxCols();if(index>=maxCols||wrap&&maxCols===1){this.select((index-maxCols+maxItems)%maxItems)}else if(index===0){this.select(maxItems-1)}else if(index<maxCols){this.select(0)}};Window_DeckBuilderSleeves.prototype.processWheel=function(){if(this.isOpenAndActive()){var threshold=20;var index=this.index();if(TouchInput.wheelY>=threshold){this.cursorDown()}if(TouchInput.wheelY<=-threshold){this.cursorUp()}if(index!==this.index())SoundManager.playCursor()}};Window_DeckBuilderSleeves.prototype.makeCommandList=function(){var deckSleeves=$gameSystem.unlockedDeckSleeves();for(var i=0;i<deckSleeves.length;i++){var ext=deckSleeves[i];this.addCommand("","deckSleeve",true,ext)}};Window_DeckBuilderSleeves.prototype.setTopRow=function(row){this.hideAllSprites();Window_HorzCommand.prototype.setTopRow.call(this,row)};Window_DeckBuilderSleeves.prototype.select=function(index){if(this._spriteContainer&&this.index()>=0){var sprite=this.getSpriteAtIndex(this.index());sprite.scale.x=sprite.scale.y=sprite.scale._smallScale}Window_Command.prototype.select.call(this,index);if(this._spriteContainer&&this.index()>=0){var sprite=this.getSpriteAtIndex(this.index());this._spriteContainer.removeChild(sprite);this._spriteContainer.addChild(sprite)}};Window_DeckBuilderSleeves.prototype.hideAllSprites=function(){if(!this._spriteContainer)return;for(var i=0;i<this._sprites.length;i++){var sprite=this._sprites[i];sprite.opacity=0}};Window_DeckBuilderSleeves.prototype.drawItem=function(index){if(!this._spriteContainer)return;var filename=this._list[index].ext;var bitmap=ImageManager.loadPicture(filename);bitmap.addLoadListener(this.changeSpriteBitmap.bind(this,bitmap,index,filename))};Window_DeckBuilderSleeves.prototype.changeSpriteBitmap=function(bitmap,index,filename){if(filename!==this._list[index].ext)return;var sprite=this.getSpriteAtIndex(index);sprite._backSprite.bitmap=bitmap;sprite._backSprite.bitmap._smooth=true;sprite._backSprite.bitmap._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR;sprite._backSprite.setFrame(0,0,bitmap.width/2,bitmap.height);sprite._logoSprite.bitmap=bitmap;sprite._logoSprite.bitmap._smooth=true;sprite._logoSprite.bitmap._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR;sprite._logoSprite.setFrame(bitmap.width/2,0,bitmap.width/2,bitmap.height);var rect=this.itemRect(index);rect.width-=8;rect.height-=8;sprite.x=rect.x+rect.width/2;sprite.y=rect.y+rect.height/2;sprite.opacity=255;if(sprite._backSprite.width>rect.width||sprite._backSprite.height>rect.height){var scale=Math.min(rect.width/sprite._backSprite.width,rect.height/sprite._backSprite.height);sprite.scale._smallScale=scale;sprite.scale._bigScale=scale+.2;sprite.scale.x=sprite.scale.y=sprite.scale._smallScale}};Window_DeckBuilderSleeves.prototype.update=function(){Window_Command.prototype.update.call(this);this.updateSelectedSpriteScale();this.updateHoloBacks()};Window_DeckBuilderSleeves.prototype.updateCursor=function(){this.setCursorRect(0,0,0,0)};Window_DeckBuilderSleeves.prototype.updateSelectedSpriteScale=function(){if(!this._spriteContainer)return;var sprite=this.getSpriteAtIndex(this.index());var scale=Math.min(sprite.scale.x+.02,sprite.scale._bigScale);sprite.scale.x=sprite.scale.y=scale};Window_DeckBuilderSleeves.prototype.updateHoloBacks=function(){if(!this._spriteContainer)return;if(!this.visible)return;for(var i=0;i<this._spriteContainer.children.length;i++){var sprite=this._spriteContainer.children[i];sprite._backSprite._hueValue=sprite._backSprite._hueValue||0;sprite._backSprite._hueValue+=Imported.Irina_CardGameCore.CardBackHueShift;sprite._backSprite._holoFilter.hue(sprite._backSprite._hueValue)}};Window_DeckBuilderSleeves.prototype.updateHelp=function(){Window_Command.prototype.updateHelp.call(this);if(this._helpWindow)this._helpWindow.setText(Imported.Irina_CardGameDeck.CHLPchangeSleeves);if(this._listWindow&&this.currentExt()){var deck=this._listWindow.currentExt();var deckSleeves=this.currentExt();deck.sleeves=deckSleeves}};function Window_DeckBuilderDelete(){this.initialize.apply(this,arguments)}Window_DeckBuilderDelete.prototype=Object.create(Window_Command.prototype);Window_DeckBuilderDelete.prototype.constructor=Window_DeckBuilderDelete;Window_DeckBuilderDelete.prototype.initialize=function(helpWindow,commandWindow){this._deck=null;this._deleteMessage=Imported.Irina_CardGameDeck.DeleteDeckText;this._windowWidth=commandWindow.textWidth(this._deleteMessage+" ")+this.standardPadding()*2;this._commandWindow=commandWindow;Window_Command.prototype.initialize.call(this,0,0);this._helpWindow=helpWindow;this.openness=0;this.deactivate()};Window_DeckBuilderDelete.prototype.windowWidth=function(){return this._windowWidth||Math.ceil(Graphics.boxWidth*1/3)};Window_DeckBuilderDelete.prototype.windowHeight=function(){return this.fittingHeight(3)};Window_DeckBuilderDelete.prototype.standardBackOpacity=function(){return Imported.Irina_CardGameDeck.CommandWindowOpacity};Window_DeckBuilderDelete.prototype.makeCommandList=function(){this.addCommand(Imported.Irina_CardGameDeck.DeleteDeckYesText,"yes");this.addCommand(Imported.Irina_CardGameDeck.DeleteDeckNoText,"no")};Window_DeckBuilderDelete.prototype.reposition=function(){this.y=this._commandWindow.y;this.x=this._commandWindow.x+this._commandWindow.width};Window_DeckBuilderDelete.prototype.refresh=function(){Window_Command.prototype.refresh.call(this);this.drawText(this._deleteMessage,0,0,this.contents.width,"center")};Window_DeckBuilderDelete.prototype.itemRect=function(index){var rect=Window_Command.prototype.itemRect.call(this,index);rect.y+=this.lineHeight();return rect};Window_DeckBuilderDelete.prototype.itemTextAlign=function(){return"center"};Window_DeckBuilderDelete.prototype.updateHelp=function(){Window_Command.prototype.updateHelp.call(this);if(this._helpWindow)this._helpWindow.setText(Imported.Irina_CardGameDeck.CHLPdeleteDeck)};function Window_DeckBuilderFilter(){this.initialize.apply(this,arguments)}Window_DeckBuilderFilter.prototype=Object.create(Window_HorzCommand.prototype);Window_DeckBuilderFilter.prototype.constructor=Window_DeckBuilderFilter;Window_DeckBuilderFilter.prototype.initialize=function(helpWindow,contentsWindow){this.resetFilters();Imported.Irina_CardGameDeck.FilterSortWindowInitialize.call(this,helpWindow,contentsWindow);this._helpWindow=helpWindow;this.refresh();this.deactivate();this.hide()};Window_DeckBuilderFilter.prototype.resetFilters=function(){$gameTemp._cardGameDeckBuilderFilter={elements:[],name:false,level:false,power:false,health:false}};Window_DeckBuilderFilter.prototype.cardFilter=function(){return $gameTemp._cardGameDeckBuilderFilter};Window_DeckBuilderFilter.prototype.windowWidth=function(){return this._windowWidth};Window_DeckBuilderFilter.prototype.windowHeight=function(){return this._windowHeight};Window_DeckBuilderFilter.prototype.maxCols=function(){return Math.max(1,this.maxItems())};Window_DeckBuilderFilter.prototype.standardPadding=function(){return 8};Window_DeckBuilderFilter.prototype.spacing=function(){return 0};Window_DeckBuilderFilter.prototype.cursorDown=function(wrap){this.tabToInventoryWindow()};Window_DeckBuilderFilter.prototype.playBuzzerSound=function(){};Window_DeckBuilderFilter.prototype.processTouch=function(){if(this.isMouseInsideFrame()||TouchInput.isCancelled())return Window_Command.prototype.processTouch.call(this);if(this.active&&TouchInput.isTriggered()){if(SceneManager._scene._inventoryWindow.isMouseInsideFrame()){this.tabToInventoryWindow()}else if(SceneManager._scene._contentsWindow.isMouseInsideFrame()){this.tabToContentsWindow()}}};Window_DeckBuilderFilter.prototype.onTouch=function(triggered){var lastIndex=this.index();var x=this.canvasToLocalX(TouchInput.x);var y=this.canvasToLocalY(TouchInput.y);var hitIndex=this.hitTest(x,y);if(hitIndex>=0){if(hitIndex===this.index()){if(triggered&&this.isTouchOkEnabled()){this.processOk()}}else if(this.isCursorMovable()){this.select(hitIndex);this.processOk()}}else if(this._stayCount>=10){if(y<this.padding){this.cursorUp()}else if(y>=this.height-this.padding){this.cursorDown()}}};Window_DeckBuilderFilter.prototype.playOkSound=function(){if(this.currentSymbol()==="finish"){SoundManager.playSave()}else if(this.currentSymbol()==="allElements"||this.currentSymbol()==="element"){SoundManager.playEquip()}else if(this.currentSymbol()==="resetFilters"){SoundManager.playLoad()}else{SoundManager.playUseItem()}};Window_DeckBuilderFilter.prototype.tabToInventoryWindow=function(){if(!this.active)return;this.deactivate();this.deselect();Input.clear();SceneManager._scene._inventoryWindow.active=true;if(TouchInput.isTriggered()){SceneManager._scene._inventoryWindow._index=-1;SceneManager._scene._inventoryWindow.processTouch();TouchInput.clear()}else{SoundManager.playCursor();SceneManager._scene._inventoryWindow.reselect()}SceneManager._scene._inventoryWindow.refresh()};Window_DeckBuilderFilter.prototype.tabToContentsWindow=function(){if(!this.active)return;this.deactivate();this.deselect();Input.clear();SceneManager._scene._contentsWindow.active=true;if(TouchInput.isTriggered()){SceneManager._scene._contentsWindow.processTouch();TouchInput.clear()}else{SoundManager.playCursor();SceneManager._scene._contentsWindow.select(0)}SceneManager._scene._contentsWindow._returnWindow=SceneManager._scene._inventoryWindow};Window_DeckBuilderFilter.prototype.tabToContentsWindow=function(){};Window_DeckBuilderFilter.prototype.makeCommandList=function(){var icons=Imported.Irina_CardGameDeck;this.addCommand("\\i["+icons.FilterAllIcon+"]","全部属性",true);for(var i=0;i<Imported.Irina_CardGameCore.Templates.length;i++){var template=Imported.Irina_CardGameCore.Templates[i];var icon=template.IconIndex||64;var ext=template.Name;this.addCommand("\\i["+icon+"]","属性",true,ext)}this.addCommand("","nothing",false);this.addCommand("\\i["+icons.NameAZIcon+"]","按名称降序");this.addCommand("\\i["+icons.NameZAIcon+"]","按名称升序");this.addCommand("\\i["+icons.LevelAscIcon+"]","按等级升序");this.addCommand("\\i["+icons.LevelDesIcon+"]","按等级降序");this.addCommand("\\i["+icons.PowerAscIcon+"]","按攻击力升序");this.addCommand("\\i["+icons.PowerDesIcon+"]","按攻击力降序");if($showCardHealth){this.addCommand("\\i["+icons.HealthAscIcon+"]","sortHealthAsc");this.addCommand("\\i["+icons.HealthDesIcon+"]","sortHealthDes")}this.addCommand("","nothing",false);this.addCommand("\\i["+icons.ResetIcon+"]","重置排序");var doneIcon=90;this.addCommand("\\i["+icons.FinishIcon+"]","结束")};Window_DeckBuilderFilter.prototype.drawItem=function(index){var rect=this.itemRect(index);var align=this.itemTextAlign();this.resetTextColor();var enabled=true;var symbol=this.commandSymbol(index);var ext=this._list[index].ext;switch(symbol){case"element":enabled=this.cardFilter().elements.contains(ext);break;case"sortNameAZ":enabled=this.cardFilter().name==="AZ";break;case"sortNameZA":enabled=this.cardFilter().name==="ZA";break;case"sortLevelAsc":enabled=this.cardFilter().level==="Asc";break;case"sortLevelDes":enabled=this.cardFilter().level==="Des";break;case"sortPowerAsc":enabled=this.cardFilter().power==="Asc";break;case"sortPowerDes":enabled=this.cardFilter().power==="Des";break;case"sortHealthAsc":enabled=this.cardFilter().health==="Asc";break;case"sortHealthDes":enabled=this.cardFilter().health==="Des";break}this.changePaintOpacity(enabled);rect.x+=Math.floor((rect.width-Window_Base._iconWidth)/2);this.drawTextEx(this.commandName(index),rect.x,rect.y)};Window_DeckBuilderFilter.prototype.updateHelp=function(){Window_Command.prototype.updateHelp.call(this);if(!this._helpWindow)return;var symbol=this.currentSymbol();switch(symbol){case"allElements":this._helpWindow.setText("Show cards from all elements.");break;case"element":this._helpWindow.setText("Show cards from "+this.currentExt()+" element.");break;case"sortNameAZ":this._helpWindow.setText("Sort cards by name from A to Z.");break;case"sortNameZA":this._helpWindow.setText("Sort cards by name from Z to A.");break;case"sortLevelAsc":this._helpWindow.setText("Sort cards by Level from lowest to highest.");break;case"sortLevelDes":this._helpWindow.setText("Sort cards by Level from highest to lowest.");break;case"sortPowerAsc":this._helpWindow.setText("Sort cards by Power from lowest to highest.");break;case"sortPowerDes":this._helpWindow.setText("Sort cards by Power from highest to lowest.");break;case"sortHealthAsc":this._helpWindow.setText("Sort cards by Health from lowest to highest.");break;case"sortHealthDes":this._helpWindow.setText("Sort cards by Health from highest to lowest.");break;case"resetFilters":this._helpWindow.setText("Reset all filters.");break;case"finish":this._helpWindow.setText("Finish building your deck? Finalize it.");break}};function Window_DeckBuilderInventory(){this.initialize.apply(this,arguments)}Window_DeckBuilderInventory.prototype=Object.create(Window_ItemList.prototype);Window_DeckBuilderInventory.prototype.constructor=Window_DeckBuilderInventory;Window_DeckBuilderInventory.prototype.initialize=function(helpWindow,contentsWindow,filterWindow){this.createBaseCardPool();this._filterWindow=filterWindow;Imported.Irina_CardGameDeck.InventoryWindowInitialize.call(this,helpWindow,contentsWindow,filterWindow);this._helpWindow=helpWindow;this._contentsWindow=contentsWindow;this.createSprites();this.refresh();this.hide()};Window_DeckBuilderInventory.prototype.maxCols=function(){return Imported.Irina_CardGameDeck.InventoryWindowCols};Window_DeckBuilderInventory.prototype.numVisibleRows=function(){return Imported.Irina_CardGameDeck.InventoryWindowRows};Window_DeckBuilderInventory.prototype.itemHeight=function(){return Math.floor(this.contents.height/this.numVisibleRows())};Window_DeckBuilderInventory.prototype.spacing=function(){return 0};Window_DeckBuilderInventory.prototype.fadeTimer=function(){return Imported.Irina_CardGameDeck.InventoryPreviewCardFadeTimer};Window_DeckBuilderInventory.prototype.createBaseCardPool=function(){this._basePool=[];var items=$gameParty.items();for(var i=0;i<items.length;i++){var item=items[i];if(DataManager.isCard(item))this._basePool.push(item)}};Window_DeckBuilderInventory.prototype.createSprites=function(){this._spriteContainer=new Sprite;this.addChildToBack(this._spriteContainer);this.removeChild(this._windowCursorSprite);this.addChildToBack(this._windowCursorSprite);this._spriteContainer.x=this.standardPadding();this._spriteContainer.y=this.standardPadding();this._cards=[];this._sprites=[];var total=this.numVisibleRows()*this.maxCols();for(var i=0;i<total;i++){var card=CardManager.createCard(1);var sprite=card.sprite();this._spriteContainer.addChild(sprite);this._cards.push(card);this._sprites.push(sprite);var rect=this.itemRect(i)}this._previewCard=CardManager.createCard(1);this.addChild(this._previewCard.sprite());this._previewCard.sprite().opacity=0;this._fadeInTimer=this.fadeTimer()};Window_DeckBuilderInventory.prototype.getCardAtIndex=function(index){var arrayIndex=index%(this.maxCols()*this.numVisibleRows());return this._cards[arrayIndex]};Window_DeckBuilderInventory.prototype.getSpriteAtIndex=function(index){var arrayIndex=index%(this.maxCols()*this.numVisibleRows());return this._sprites[arrayIndex]};Window_DeckBuilderInventory.prototype.setTopRow=function(row){this.hideAllSprites();Window_ItemList.prototype.setTopRow.call(this,row)};Window_DeckBuilderInventory.prototype.hideAllSprites=function(){if(!this._spriteContainer)return;for(var i=0;i<this._sprites.length;i++){var sprite=this._sprites[i];sprite.opacity=0}};Window_DeckBuilderInventory.prototype.select=function(index){Window_ItemList.prototype.select.call(this,index);this.setupPreviewCard()};Window_DeckBuilderInventory.prototype.cursorRight=function(wrap){if(this.index()%this.maxCols()===this.maxCols()-1){this.tabToContentsWindow()}else if(this.index()===this.maxItems()-1){this.tabToContentsWindow()}else{Window_ItemList.prototype.cursorRight.call(this,wrap)}};Window_DeckBuilderInventory.prototype.cursorLeft=function(wrap){if(this.index()%this.maxCols()!==0){Window_ItemList.prototype.cursorLeft.call(this,wrap)}};Window_DeckBuilderInventory.prototype.processTouch=function(){if(this.isMouseInsideFrame()&&this.active)this.updateAutoCursorSelect();if(this.isMouseInsideFrame()&&!TouchInput.isCancelled())return Window_Command.prototype.processTouch.call(this);if(this.active&&TouchInput.isTriggered()){if(SceneManager._scene._contentsWindow.isMouseInsideFrame()){this.tabToContentsWindow()}else if(SceneManager._scene._filterWindow.isMouseInsideFrame()){this.tabToFilterWindow()}}else if(this.active&&TouchInput.isCancelled()){this.processCancelTouch()}};Window_DeckBuilderInventory.prototype.updateAutoCursorSelect=function(){if(this._lastMouseX===TouchInput._mouseOverX&&this._lastMouseY===TouchInput._mouseOverY)return;this._lastMouseX=TouchInput._mouseOverX;this._lastMouseY=TouchInput._mouseOverY;var x=this.canvasToLocalX(TouchInput._mouseOverX);var y=this.canvasToLocalY(TouchInput._mouseOverY);var hitIndex=this.hitTest(x,y);if(hitIndex>=0&&hitIndex!==this.index()){this.select(hitIndex)}};Window_DeckBuilderInventory.prototype.processCancelTouch=function(){var item=this.item();var deck=SceneManager._scene.currentDeck();if(deck.cards.contains(item.id)){var index=deck.cards.indexOf(item.id);if(index>=0){deck.cards.splice(index,1);Window_DeckBuilderContents.prototype.playOkSound.call(this)}this.refresh();SceneManager._scene._ratioWindow.setDeck(deck);SceneManager._scene._contentsWindow.setDeck(deck)}};Window_DeckBuilderInventory.prototype.processHandling=function(){if(Input.isTriggered("tab")&&this.active)this.tabToContentsWindow();Window_Command.prototype.processHandling.call(this)};Window_DeckBuilderInventory.prototype.tabToContentsWindow=function(){if(!this.active)return;if(!SceneManager._scene._contentsWindow)return;if(SceneManager._scene._contentsWindow.maxItems()<=0)return;this.deactivate();Input.clear();SceneManager._scene._contentsWindow.active=true;if(TouchInput.isTriggered()){SceneManager._scene._contentsWindow.processTouch();TouchInput.clear()}else{SoundManager.playCursor();SceneManager._scene._contentsWindow.select(0)}SceneManager._scene._contentsWindow._returnWindow=this};Window_DeckBuilderInventory.prototype.tabToFilterWindow=function(){if(!this.active)return;this._filterWindow.activate();this._filterWindow.processTouch();this._filterWindow.deactivate();this._filterWindow.deselect();this.activate()};Window_DeckBuilderInventory.prototype.setupPreviewCard=function(){if(!this._data)return;var item=this._data[this.index()];if(!item)return this._fadeInTimer=Infinity;this._fadeInTimer=this.fadeTimer();var sprite=this._previewCard.sprite();sprite.opacity=0};Window_DeckBuilderInventory.prototype.update=function(){Window_ItemList.prototype.update.call(this);this.updatePreviewSpriteFadeIn()};Window_DeckBuilderInventory.prototype.updatePreviewSpriteFadeIn=function(){if(!this.active&&!SceneManager._scene._contentsWindow.active)return;if(this._fadeInTimer>0){if(this._fadeInTimer===Math.ceil(this.fadeTimer()/2)){if(this.active){var item=this.item()}else if(SceneManager._scene._contentsWindow.active){var item=SceneManager._scene._contentsWindow.item()}else{var item=undefined}if(item){this._previewCard.changeCard(item.id);var sprite=this._previewCard.sprite();if(sprite){sprite.opacity=0;var rect=this.itemRect(this.index());rect.x+=this.standardPadding();rect.y+=this.standardPadding();var hsw=sprite.width/2+8;var hsh=sprite.height/2+8;if(SceneManager._scene._contentsWindow.active){sprite.x=this.width-hsw;sprite.y=this.height/2}else{sprite.x=rect.x+rect.width+hsw;if(sprite.x+hsw>this.x+this.width){sprite.x=rect.x-hsw}sprite.y=rect.y+rect.height/2;sprite.y=sprite.y.clamp(hsh,this.height-hsh)}}}}return this._fadeInTimer--}if(this._previewCard&&this._previewCard.sprite())this._previewCard.sprite().opacity+=16};Window_DeckBuilderInventory.prototype.cursorDown=function(wrap){var index=this.index();var maxItems=this.maxItems();var maxCols=this.maxCols();if(index<maxItems-maxCols||wrap&&maxCols===1){this.select((index+maxCols)%maxItems)}else if(index===maxItems-1){this.select(0)}else{this.select(maxItems-1)}};Window_DeckBuilderInventory.prototype.cursorUp=function(wrap){var index=this.index();var maxItems=this.maxItems();var maxCols=this.maxCols();if(index>=maxCols||wrap&&maxCols===1){this.select((index-maxCols+maxItems)%maxItems)}else if(index===0){this.select(maxItems-1)}else if(index<maxCols){this.select(0)}};Window_DeckBuilderInventory.prototype.isCursorVisible=function(){if(!this.active)return false;return Window_ItemList.prototype.isCursorVisible.call(this)};Window_DeckBuilderInventory.prototype.processWheel=function(){if(this.isMouseInsideFrame()){var threshold=20;var index=this.index();if(TouchInput.wheelY>=threshold){this.cursorPagedown()}if(TouchInput.wheelY<=-threshold){this.cursorPageup()}if(this.active&&index!==this.index())SoundManager.playCursor()}};Window_DeckBuilderInventory.prototype.processOk=function(){if(this.isCurrentItemEnabled()){this.playOkSound();this.updateInputData();this.callOkHandler()}else{this.playBuzzerSound()}};Window_DeckBuilderInventory.prototype.makeItemList=function(){this.hideAllSprites();this._data=this._basePool.clone().filter(function(item){return this.includes(item)},this);this.sortItems()};Window_DeckBuilderInventory.prototype.includes=function(item){if(!item)return false;var filter=this._filterWindow.cardFilter();var note=item.note;if(filter.elements.length>0){if(note.match(/<Card Element: (.*)>/i)){var element=String(RegExp.$1)}else{var element="None"}if(!filter.elements.contains(element))return false}if(this._ruleset&&!this._ruleset.FilterRules.call(this,item))return false;return true};Window_DeckBuilderInventory.prototype.isEnabled=function(item){if(!this._ruleset)return false;if(!SceneManager._scene.currentDeck())return false;if(SceneManager._scene.currentDeck()==="NewDeck")return false;SceneManager._scene.currentDeck().cards=SceneManager._scene.currentDeck().cards||[];var cards=SceneManager._scene.currentDeck().cards;var count=cards.filter(function(x){return x===item.id}).length;if(this._ruleset.MaxCopies!==0&&count>=this._ruleset.MaxCopies)return false;if(count>=$gameParty.numItems(item))return false;if(this._ruleset&&!this._ruleset.RestrictionRules.call(this,item,count))return false;return true};Window_DeckBuilderInventory.prototype.sortItems=function(){this._data.sort(function(a,b){var filter=$gameTemp._cardGameDeckBuilderFilter;var bypass=true;var idA=a.id;var idB=b.id;var nameA=a.name;var nameB=b.name;if(a.note.match(/<Card Name: (.*)>/i))nameA=String(RegExp.$1).trim();if(b.note.match(/<Card Name: (.*)>/i))nameB=String(RegExp.$1).trim();var levelA=0;var levelB=0;if(a.note.match(/<Card Level: (.*)>/i))levelA=Number(RegExp.$1);if(b.note.match(/<Card Level: (.*)>/i))levelB=Number(RegExp.$1);var powerA=0;var powerB=0;if(a.note.match(/<Card Power: (.*)>/i))powerA=Number(RegExp.$1);if(b.note.match(/<Card Power: (.*)>/i))powerB=Number(RegExp.$1);var healthA=1;var healthB=1;if(a.note.match(/<Card Health: (.*)>/i))healthA=Number(RegExp.$1);if(b.note.match(/<Card Health: (.*)>/i))healthB=Number(RegExp.$1);var ascending=true;if(filter.name==="AZ"){ascending=true;bypass=false;if(nameA!==nameB)return+(nameA>nameB)||-1}else if(filter.name==="ZA"){ascending=false;bypass=false;if(nameA!==nameB)return+(nameB>nameA)||-1}else if(filter.level==="Asc"){ascending=true;bypass=false;if(levelA!==levelB)return+(levelA>levelB)||-1}else if(filter.level==="Des"){ascending=false;bypass=false;if(levelA!==levelB)return+(levelB>levelA)||-1}else if(filter.power==="Asc"){ascending=true;bypass=false;if(powerA!==powerB)return+(powerA>powerB)||-1}else if(filter.power==="Des"){ascending=false;bypass=false;if(powerA!==powerB)return+(powerB>powerA)||-1}else if(filter.health==="Asc"){ascending=true;bypass=false;if(healthA!==healthB)return+(healthA>healthB)||-1}else if(filter.health==="Des"){ascending=false;bypass=false;if(healthA!==healthB)return+(healthB>healthA)||-1}if(bypass)return+(idA>idB)||-1;if(ascending){if(levelA!==levelB)return+(levelA>levelB)||-1;if(powerA!==powerB)return+(powerA>powerB)||-1;if(healthA!==healthB)return+(healthA>healthB)||-1}else{if(levelA!==levelB)return+(levelB>levelA)||-1;if(powerA!==powerB)return+(powerB>powerA)||-1;if(healthA!==healthB)return+(healthB>healthA)||-1}return+(idA>idB)||-1})};Window_DeckBuilderInventory.prototype.drawItem=function(index){var item=this._data[index];if(!item)return;this.drawItemData(item,index);var rect=this.itemRect(index);var card=this.getCardAtIndex(index);card.changeCard(item.id);var sprite=card.sprite();if(sprite){sprite.opacity=this.isEnabled(item)?255:192;sprite.x=rect.x+rect.width/2;sprite.y=rect.y+rect.height/2;rect.width-=8;rect.height-=8;if(sprite.width>rect.width||sprite.height>rect.height){var scale=Math.min(rect.width/sprite.width,rect.height/sprite.height);sprite._baseScale=scale}}};Window_DeckBuilderInventory.prototype.drawItemData=function(item,index){if(!SceneManager._scene.currentDeck())return;if(SceneManager._scene.currentDeck()==="NewDeck")return;Imported.Irina_CardGameDeck.InventoryWindowDrawCell.call(this,item,index)};Window_DeckBuilderInventory.prototype.playOkSound=function(){SoundManager.playMagicEvasion()};function Scene_CardDeckBuilder(){this.initialize.apply(this,arguments)}Scene_CardDeckBuilder.prototype=Object.create(Scene_MenuBase.prototype);Scene_CardDeckBuilder.prototype.constructor=Scene_CardDeckBuilder;Scene_CardDeckBuilder.prototype.initialize=function(){Scene_MenuBase.prototype.initialize.call(this)};Scene_CardDeckBuilder.prototype.create=function(){Scene_MenuBase.prototype.create.call(this);this.createParallaxBackground();this.createWindows();this.pickStartingWindow();this.preloadImages()};Scene_CardDeckBuilder.prototype.createParallaxBackground=function(){this._parallaxBackground=new TilingSprite;this._parallaxBackground.move(0,0,Graphics.width,Graphics.height);this.addChild(this._parallaxBackground);var filename=Imported.Irina_CardGameDeck.ParallaxBGImg;if(filename===""){this._parallaxBackground.bitmap=new Bitmap(1,1)}else{this._parallaxBackground.bitmap=ImageManager.loadParallax(filename)}};Scene_CardDeckBuilder.prototype.isTransparentWindows=function(){return Imported.Irina_CardGameDeck.TransparentWindows};Scene_CardDeckBuilder.prototype.pickStartingWindow=function(){if($gameSystem.availableDeckRulesets().length<=1){this.onRulesetSelect()}};Scene_CardDeckBuilder.prototype.preloadImages=function(){var pictures=[Imported.Irina_CardGameCore.CardMaskImg];pictures=pictures.concat($gameSystem.unlockedDeckboxes());pictures=pictures.concat($gameSystem.unlockedDeckSleeves());for(var i=0;i<pictures.length;i++){var filename=pictures[i];ImageManager.loadPicture(filename)}};Scene_CardDeckBuilder.prototype.createWindows=function(){this.createHelpWindow();this.createDeckRulesetWindow();this.createDeckSpriteWindow();this.createDeckListWindow();this.createDeckRatioWindow();this.createDeckContentsWindow();this.createDeckCommandWindow();this.createDeckNamingWindows();this.createDeckBoxWindow();this.createDeckSleevesWindow();this.createDeckDeleteWindow();this.createDeckFilterWindow();this.createDeckInventoryWindow()};Scene_CardDeckBuilder.prototype.createHelpWindow=function(){this._helpWindow=new Window_Help;this.addChild(this._helpWindow);if(this.isTransparentWindows())this._helpWindow.opacity=0};Scene_CardDeckBuilder.prototype.createDeckRulesetWindow=function(){this._rulesetWindow=new Window_DeckBuilderRulesets(this._helpWindow);this.addChild(this._rulesetWindow);if(this.isTransparentWindows())this._rulesetWindow.opacity=0;this._rulesetWindow.setHandler("cancel",this.popScene.bind(this));this._rulesetWindow.setHandler("ruleset",this.onRulesetSelect.bind(this))};Scene_CardDeckBuilder.prototype.createDeckSpriteWindow=function(){this._spriteWindow=new Window_DeckBuilderSprite(this._helpWindow);this.addChild(this._spriteWindow);this._spriteWindow.hide();if(this.isTransparentWindows())this._spriteWindow.opacity=0};Scene_CardDeckBuilder.prototype.createDeckListWindow=function(){this._listWindow=new Window_DeckBuilderList(this._helpWindow);this.addChild(this._listWindow);if(this.isTransparentWindows())this._listWindow.opacity=0;this._listWindow.hide();this._listWindow._spriteWindow=this._spriteWindow;this._listWindow.setHandler("cancel",this.onDecklistCancel.bind(this));this._listWindow.setHandler("createNewDeck",this.onDecklistCreate.bind(this));this._listWindow.setHandler("deck",this.onDecklistDeck.bind(this))};Scene_CardDeckBuilder.prototype.createDeckRatioWindow=function(){this._ratioWindow=new Window_DeckBuilderRatio(this._helpWindow);this.addChild(this._ratioWindow);this._ratioWindow.hide();this._listWindow._ratioWindow=this._ratioWindow;if(this.isTransparentWindows())this._ratioWindow.opacity=0};Scene_CardDeckBuilder.prototype.createDeckContentsWindow=function(){this._contentsWindow=new Window_DeckBuilderContents(this._helpWindow,this._ratioWindow);this.addChild(this._contentsWindow);if(this.isTransparentWindows())this._contentsWindow.opacity=0;this._contentsWindow.hide();this._listWindow._contentsWindow=this._contentsWindow;this._contentsWindow.setHandler("cancel",this.onContentsCancel.bind(this));this._contentsWindow.setHandler("ok",this.onContentsOk.bind(this))};Scene_CardDeckBuilder.prototype.createDeckCommandWindow=function(){this._commandWindow=new Window_DeckBuilderCommand(this._helpWindow,this._listWindow);this.addChild(this._commandWindow);this._commandWindow.setHandler("cancel",this.onDeckCommandCancel.bind(this));this._commandWindow.setHandler("editDeck",this.onDeckCommandEdit.bind(this));this._commandWindow.setHandler("renameDeck",this.onDeckCommandRename.bind(this));this._commandWindow.setHandler("favorite",this.onDeckCommandFavorite.bind(this));this._commandWindow.setHandler("changeBox",this.onDeckCommandBox.bind(this));this._commandWindow.setHandler("changeSleeves",this.onDeckCommandSleeves.bind(this));this._commandWindow.setHandler("orderDeck",this.onDeckCommandOrder.bind(this));this._commandWindow.setHandler("deleteDeck",this.onDeckCommandDelete.bind(this))};Scene_CardDeckBuilder.prototype.createDeckNamingWindows=function(){this._nameEditWindow=new Window_DeckBuilderNameEdit;this.addChild(this._nameEditWindow);this._nameInputWindow=new Window_DeckBuilderNameInput(this._nameEditWindow);this.addChild(this._nameInputWindow);this._nameInputWindow.setHandler("ok",this.onNameInputOk.bind(this));this._nameInputWindow.openness=0;this._nameInputWindow.deactivate()};Scene_CardDeckBuilder.prototype.createDeckBoxWindow=function(){this._boxWindow=new Window_DeckBuilderBox(this._helpWindow,this._listWindow);this.addChild(this._boxWindow);if(this.isTransparentWindows())this._boxWindow.opacity=0;this._boxWindow.setHandler("cancel",this.onDeckboxCancel.bind(this));this._boxWindow.setHandler("deckBox",this.onDeckboxOk.bind(this))};Scene_CardDeckBuilder.prototype.createDeckSleevesWindow=function(){this._sleevesWindow=new Window_DeckBuilderSleeves(this._helpWindow,this._listWindow);this.addChild(this._sleevesWindow);if(this.isTransparentWindows())this._sleevesWindow.opacity=0;this._sleevesWindow.setHandler("cancel",this.onDecksleeveCancel.bind(this));this._sleevesWindow.setHandler("deckSleeve",this.onDecksleeveOk.bind(this))};Scene_CardDeckBuilder.prototype.createDeckDeleteWindow=function(){this._deleteWindow=new Window_DeckBuilderDelete(this._helpWindow,this._commandWindow);this.addChild(this._deleteWindow);this._deleteWindow.setHandler("cancel",this.onDeckDeleteNo.bind(this));this._deleteWindow.setHandler("no",this.onDeckDeleteNo.bind(this));this._deleteWindow.setHandler("yes",this.onDeckDeleteYes.bind(this))};Scene_CardDeckBuilder.prototype.createDeckFilterWindow=function(){this._filterWindow=new Window_DeckBuilderFilter(this._helpWindow,this._contentsWindow);this.addChild(this._filterWindow);if(this.isTransparentWindows())this._filterWindow.opacity=0;this._filterWindow.setHandler("cancel",this.onDeckFilterCancel.bind(this));this._filterWindow.setHandler("allElements",this.onDeckFilterAllElements.bind(this));this._filterWindow.setHandler("element",this.onDeckFilterElement.bind(this));this._filterWindow.setHandler("sortNameAZ",this.onDeckFilterSortAZ.bind(this));this._filterWindow.setHandler("sortNameZA",this.onDeckFilterSortZA.bind(this));this._filterWindow.setHandler("sortLevelAsc",this.onDeckFilterLevelAsc.bind(this));this._filterWindow.setHandler("sortLevelDes",this.onDeckFilterLevelDes.bind(this));this._filterWindow.setHandler("sortPowerAsc",this.onDeckFilterPowerAsc.bind(this));this._filterWindow.setHandler("sortPowerDes",this.onDeckFilterPowerDes.bind(this));this._filterWindow.setHandler("sortHealthAsc",this.onDeckFilterHealthAsc.bind(this));this._filterWindow.setHandler("sortHealthDes",this.onDeckFilterHealthDes.bind(this));this._filterWindow.setHandler("resetFilters",this.onDeckFilterReset.bind(this));this._filterWindow.setHandler("finish",this.onDeckFilterFinish.bind(this))};Scene_CardDeckBuilder.prototype.createDeckInventoryWindow=function(){this._inventoryWindow=new Window_DeckBuilderInventory(this._helpWindow,this._contentsWindow,this._filterWindow);this.addChild(this._inventoryWindow);if(this.isTransparentWindows())this._inventoryWindow.opacity=0;this._inventoryWindow.setHandler("cancel",this.onInventoryCancel.bind(this));this._inventoryWindow.setHandler("ok",this.onInventoryOk.bind(this))};Scene_CardDeckBuilder.prototype.update=function(){Scene_MenuBase.prototype.update.call(this);this.updateParallax()};Scene_CardDeckBuilder.prototype.updateParallax=function(){if(this._parallaxBackground){this._parallaxBackground.origin.x+=Imported.Irina_CardGameDeck.ParallaxScrollX;this._parallaxBackground.origin.y+=Imported.Irina_CardGameDeck.ParallaxScrollY}};Scene_CardDeckBuilder.prototype.onRulesetSelect=function(){this._ruleset=this._rulesetWindow.currentExt();this._rulesetWindow.hide();this._ratioWindow.show();this._ratioWindow._ruleset=this._ruleset;this._spriteWindow.show();this._spriteWindow._ruleset=this._ruleset;this._listWindow.show();this._listWindow.activate();this._listWindow.setRuleset(this._ruleset);this._listWindow.select(0);this._inventoryWindow._ruleset=this._ruleset;this._contentsWindow.show();this._ratioWindow.refresh()};Scene_CardDeckBuilder.prototype.onDecklistCancel=function(){if($gameSystem.availableDeckRulesets().length<=1)return this.popScene();this._listWindow.hide();this._ratioWindow.hide();this._spriteWindow.hide();this._rulesetWindow.show();this._rulesetWindow.activate();this._contentsWindow.hide()};Scene_CardDeckBuilder.prototype.onDecklistCreate=function(){var newDeck=$gameSystem.createNewDeck(this._ruleset.Name);$gameSystem.addNewDeck(newDeck);this._listWindow.refresh();this._listWindow.select(this._listWindow.maxItems()-1);this._ratioWindow.setDeck(newDeck);this.onDeckCommandEdit()};Scene_CardDeckBuilder.prototype.onDecklistDeck=function(){this._commandWindow.setDeck(this.currentDeck());this._commandWindow.activate()};Scene_CardDeckBuilder.prototype.currentDeck=function(){return this._listWindow.currentExt()};Scene_CardDeckBuilder.prototype.onDeckCommandCancel=function(){this._commandWindow.close();this._listWindow.activate()};Scene_CardDeckBuilder.prototype.onDeckCommandEdit=function(){this._commandWindow.close();this._spriteWindow.hide();this._listWindow.hide();this._filterWindow.refresh();this._filterWindow.show();this._filterWindow.select(-1);this._inventoryWindow.show();this._inventoryWindow.activate();this._inventoryWindow.select(0);this._inventoryWindow.refresh()};Scene_CardDeckBuilder.prototype.onDeckCommandRename=function(){Input.clear();this._commandWindow.close();this._nameEditWindow.setDeck(this.currentDeck());this._nameEditWindow.open();this._nameInputWindow.open();this._nameInputWindow.activate()};Scene_CardDeckBuilder.prototype.onDeckCommandFavorite=function(){this._commandWindow.close();this.currentDeck().favorite=!this.currentDeck().favorite;this._listWindow.activate();this._listWindow.refresh()};Scene_CardDeckBuilder.prototype.onDeckCommandBox=function(){this._lastDeckbox=this.currentDeck().box;var index=this._boxWindow.findExt(this._lastDeckbox);this._commandWindow.close();this._listWindow.hide();this._boxWindow.show();this._boxWindow.refresh();this._boxWindow.select(index);this._boxWindow.activate()};Scene_CardDeckBuilder.prototype.onDeckCommandSleeves=function(){this._lastDecksleeve=this.currentDeck().sleeves;var index=this._sleevesWindow.findExt(this._lastDecksleeve);this._commandWindow.close();this._listWindow.hide();this._sleevesWindow.show();this._sleevesWindow.update();this._sleevesWindow.refresh();this._sleevesWindow.select(index);this._sleevesWindow.activate()};Scene_CardDeckBuilder.prototype.onDeckCommandOrder=function(){this._commandWindow.close();this._listWindow.activate();this._listWindow.setOrderMode(true)};Scene_CardDeckBuilder.prototype.onDeckCommandDelete=function(){this._deleteWindow.reposition();this._deleteWindow.select(1);this._deleteWindow.open();this._deleteWindow.activate()};Scene_CardDeckBuilder.prototype.onNameInputOk=function(){this.currentDeck().name=this._nameEditWindow.name();this._nameEditWindow.close();this._nameInputWindow.close();this._nameInputWindow.deactivate();this._listWindow.activate();this._listWindow.refresh()};Scene_CardDeckBuilder.prototype.onDeckboxCancel=function(){this.currentDeck().box=this._lastDeckbox;this._boxWindow.hide();this._boxWindow.deactivate();this._listWindow.show();this._listWindow.activate()};Scene_CardDeckBuilder.prototype.onDeckboxOk=function(){this._boxWindow.hide();this._boxWindow.deactivate();this._listWindow.show();this._listWindow.activate()};Scene_CardDeckBuilder.prototype.onDecksleeveCancel=function(){this._sleevesWindow.currentExt().sleeves=this._lastDecksleeve;this._sleevesWindow.hide();this._sleevesWindow.deactivate();this._listWindow.show();this._listWindow.activate()};Scene_CardDeckBuilder.prototype.onDecksleeveOk=function(){this._sleevesWindow.hide();this._sleevesWindow.deactivate();this._listWindow.show();this._listWindow.activate()};Scene_CardDeckBuilder.prototype.onDeckDeleteNo=function(){this._commandWindow.activate();this._deleteWindow.close()};Scene_CardDeckBuilder.prototype.onDeckDeleteYes=function(){$gameSystem.deleteDeck(this._ruleset.Name,this.currentDeck());this._commandWindow.close();this._deleteWindow.close();this._listWindow.activate();this._listWindow.refresh();if(this._listWindow.index()>=this._listWindow.maxItems()){this._listWindow.select(this._listWindow.index()-1)}else{this._listWindow.select(this._listWindow.index())}};Scene_CardDeckBuilder.prototype.onDeckFilterCancel=function(){this._inventoryWindow.select(0);this._inventoryWindow.refresh();this._inventoryWindow.activate();this._filterWindow.deselect()};Scene_CardDeckBuilder.prototype.onDeckFilterRefresh=function(){this._filterWindow.refresh();this._inventoryWindow.select(0);this._inventoryWindow.refresh();this._filterWindow.activate()};Scene_CardDeckBuilder.prototype.onDeckFilterAllElements=function(){this._filterWindow.cardFilter().elements=[];this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterElement=function(){var ext=this._filterWindow.currentExt();if(!this._filterWindow.cardFilter().elements.contains(ext)){this._filterWindow.cardFilter().elements.push(ext)}else{var index=this._filterWindow.cardFilter().elements.indexOf(ext);this._filterWindow.cardFilter().elements.splice(index,1)}this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterSortAZ=function(){this._filterWindow.cardFilter().name=this._filterWindow.cardFilter().name==="AZ"?false:"AZ";this._filterWindow.cardFilter().level=false;this._filterWindow.cardFilter().power=false;this._filterWindow.cardFilter().health=false;this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterSortZA=function(){this._filterWindow.cardFilter().name=this._filterWindow.cardFilter().name==="ZA"?false:"ZA";this._filterWindow.cardFilter().level=false;this._filterWindow.cardFilter().power=false;this._filterWindow.cardFilter().health=false;this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterLevelAsc=function(){this._filterWindow.cardFilter().name=false;this._filterWindow.cardFilter().level=this._filterWindow.cardFilter().level==="Asc"?false:"Asc";this._filterWindow.cardFilter().power=false;this._filterWindow.cardFilter().health=false;this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterLevelDes=function(){this._filterWindow.cardFilter().name=false;this._filterWindow.cardFilter().level=this._filterWindow.cardFilter().level==="Des"?false:"Des";this._filterWindow.cardFilter().power=false;this._filterWindow.cardFilter().health=false;this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterPowerAsc=function(){this._filterWindow.cardFilter().name=false;this._filterWindow.cardFilter().level=false;this._filterWindow.cardFilter().power=this._filterWindow.cardFilter().power==="Asc"?false:"Asc";this._filterWindow.cardFilter().health=false;this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterPowerDes=function(){this._filterWindow.cardFilter().name=false;this._filterWindow.cardFilter().level=false;this._filterWindow.cardFilter().power=this._filterWindow.cardFilter().power==="Des"?false:"Des";this._filterWindow.cardFilter().health=false;this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterHealthAsc=function(){this._filterWindow.cardFilter().name=false;this._filterWindow.cardFilter().level=false;this._filterWindow.cardFilter().power=false;this._filterWindow.cardFilter().health=this._filterWindow.cardFilter().health==="Asc"?false:"Asc";this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterHealthDes=function(){this._filterWindow.cardFilter().name=false;this._filterWindow.cardFilter().level=false;this._filterWindow.cardFilter().power=false;this._filterWindow.cardFilter().health=this._filterWindow.cardFilter().health==="Des"?false:"Des";this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterReset=function(){this._filterWindow.resetFilters();this.onDeckFilterRefresh()};Scene_CardDeckBuilder.prototype.onDeckFilterFinish=function(){this._filterWindow.hide();this._inventoryWindow.hide();this._spriteWindow.show();this._spriteWindow.setDeck(this.currentDeck());this._listWindow.show();if(this.currentDeck().name.length<=0)return this.onDeckCommandRename();this._listWindow.activate()};Scene_CardDeckBuilder.prototype.onContentsCancel=function(){this._contentsWindow.active=true;this._contentsWindow.tabBackToReturnWindow();this._contentsWindow.active=false};Scene_CardDeckBuilder.prototype.onContentsOk=function(){var item=this._contentsWindow.item();var index=this.currentDeck().cards.indexOf(item.id);if(index>=0)this.currentDeck().cards.splice(index,1);this._inventoryWindow.refresh();this._contentsWindow.setDeck(this.currentDeck());this._ratioWindow.setDeck(this.currentDeck());if(this._contentsWindow.maxItems()>0){this._contentsWindow.activate()}else{this._contentsWindow.active=true;this._contentsWindow.tabBackToReturnWindow();this._contentsWindow.active=false;Input.clear()}};Scene_CardDeckBuilder.prototype.onInventoryCancel=function(){this._filterWindow.activate();if(this.meetsRulesetFinishedRules()){this._filterWindow.selectSymbol("finish")}else{this._filterWindow.select(0)}};Scene_CardDeckBuilder.prototype.meetsRulesetFinishedRules=function(){var count=this.currentDeck().cards.length;var minSize=this._ruleset.MinDeckSize;var maxSize=this._ruleset.MaxDeckSize;if(maxSize<=0)maxSize=Infinity;return count>=minSize&&count<=maxSize};Scene_CardDeckBuilder.prototype.onInventoryOk=function(){var item=this._inventoryWindow.item();this.currentDeck().cards.push(item.id);this.currentDeck().cards.sort(function(a,b){return a-b});this._contentsWindow.setDeck(this.currentDeck());this._ratioWindow.setDeck(this.currentDeck());this._inventoryWindow.refresh()};