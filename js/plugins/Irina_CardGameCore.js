/*:
 * @plugindesc <CardGameCore> for RMVMV 1.6.2. Place above other CCG plugins.
 * @author RPG Maker Irina
 *
 * @help
 * *** Introduction ***
 *
 *      This plugin adds a Collectible Card Game aspect to your RPG Maker MV
 * project. Cards are database items that will look and appear differently
 * based on how you design them. Booster packs can be used to acquire cards in
 * a random assortment, too. Once enough is collected, you can use them to
 * build a deck and play a card game with it, where you, the game dev, can
 * define the rules.
 *
 *      This file is one of three files included in the collectible card
 * game set and primarily focuses on the design of the cards and booster packs
 * for opening them. If you only want collectible cards and/or booster packs in
 * your game, just use only this file instead. Everything else is unnecessary.
 * 
 * 
 * 
 * *** Instructions ***
 * 
 *      It is recommended that you place this plugin beneath all your other
 * Yanfly Engine Plugins for maximum compatibility. I cannot guarantee this
 * plugin will work with all of them, but there should be little reason why it
 * wouldn't work together with something independent of the default gameplay.
 * 
 *      This plugin supports KELYEP_DragonBones. If that plugin is installed in
 * the same project as this, make sure KELYEP_DragonBones is located beneath
 * this plugin in the plugin manager list. This is the only YEP plugin that you
 * should have located beneath this plugin.
 * 
 *      There are a lot of instructions to follow if you wish to get everything
 * done correctly. Be sure to read through the help file carefully and download
 * the needed information from the project's itch.io page:
 * 
 * https://atelieririna.itch.io/collectible-card-game
 * 
 *      It is recommended for you to download the assets pack to get started
 * with the project. Everything should go into their respective folders
 * structured in the assets pack archive file.
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
 * Card Templates
 * 
 *      The card templates are various design templates used for each card.
 * Here, you can add additional card templates.
 * 
 * Card Templates: Name
 * 
 *      This is the name of this particular template. Templates are named after
 * a card element, and any kind of text used for notetag <Card Element: name>
 * will default to the template associated with it unless <Card Template: name>
 * is used. As an example, a card with <Card Element: Fire> will cause the
 * template with 'Fire' as its template name to be automatically selected, but
 * if the card has <Card Element: Fire_SSR>, then the template with 'Fire_SSR'
 * as its name will be selected.
 *
 * Card Templates: Image File
 * 
 *      This is the card template's visual base used. The visual base is
 * designed as a 4x1 cell sprite sheet. Cell 0 is the background. Cell 1 is the
 * card border image. Cell 2 is the text window. Cell 3 are the icons on top.
 * Create the cells of equal width and height. Refer to the assets pack for
 * reference on how to make this. The image location is in img/pictures/ so
 * place the image there.
 * 
 * Card Templates: Attack Animation
 *
 *      This is the default attack animation used for the card if the card item
 * in the database has 'None' selected as its main attack animation. This is
 * used for the card game.
 * 
 * Card Templates: JS: Draw Code
 * 
 *      This is for those who know JavaScript. Here, you can determine how the
 * draw layer will appear in your game. The draw layer is the layer shown on top
 * of the icon layer to draw information for the player, such as the card's
 * name, Level, Power, etc. I am not responsible if changing any of the code
 * here crashes your game.
 * 
 * Card Templates: Text Box X, Y, Width, Height
 * 
 *      The exact coordinates of the text box window in pixels that appears on
 * the card itself. The text box will write out the card's description, that is
 * either made through the card item's database description or using notetags:
 *
 * <Card Text>
 * Line 1
 * Line 2
 * Line 3
 * Line 4
 * </Card Text>
 * 
 * ---
 * 
 * Overall Card Design
 * 
 *      The plugin parameters here are used to define the overall look and
 * structure of the card as a whole.
 * 
 * Overall Card Design: Flip Sound
 * 
 *      When a card flips over, this is the sound effect it will make. The
 * sound effect will be loaded from your project's audio/se/ folder.
 * 
 * Overall Card Design: Outline Thickness
 * 
 *      Cards will have an outline to them. You can determine its thickness in
 * pixels using this plugin parameter.
 * 
 * Overall Card Design: Outline Color
 * 
 *      Determine the color of the outline with this plugin parameter. The color
 * format works as such:
 * 
 * rgba(red, green, blue, alpha)
 * red:   number between 0 and 255
 * green: number between 0 and 255
 * blue:  number between 0 and 255
 * alpha: number between 0 and 1
 * 
 * Overall Card Design: Mask Image
 * 
 *      The mask image determines the card shape. This is how you can make your
 * cards have rounded edges or other shapes. The black on the image are the
 * hidden parts of the card. The white on the image are the visible parts of
 * the card. Refer to the assets pack for reference on how to make this. The
 * image location is in img/pictures/ so place the image there.
 * 
 * Overall Card Design: Preload Common Assets
 * 
 *      This is a true/false setting. If you wish to speed up the creation
 * process of a card upon loading, set this to true. Otherwise, make it false.
 * 
 * ---
 * 
 * Card Back Design
 * 
 *      The plugin parameters here are used to design the back of your cards.
 * All cards will have a uniform back appearance.
 * 
 * Card Back Design: Back Image
 * 
 *      This is the card template's back image used. The image is designed as a
 * 2x1 cell sprite sheet. Cell 0 is the background that is affected by a holo-
 * hue filter. Cell 1 is the logo that isn't affected by the hologram. Create
 * the cells of equal width and height. Refer to the assets pack for reference
 * on how to make this. The image location is in img/pictures/ so place the
 * image there.
 * 
 * Card Back Design: Back Hue Shift Speed
 *
 *      This is a numeric value on how fast the hue shifts for the back holo-
 * hue filter. Set it to 0 if you don't want the backs to change color.
 * 
 * ---
 * 
 * Card Front Design
 * 
 *      The following plugin parameters adjust the front of the card's design.
 * While the front is often changed by a template declared in the Card Templates
 * plugin parameter, this decides the default settings used across each segment.
 * 
 * Card Front Design: Rarity Colors
 * 
 *      This is an array of the colors used for text names and auras depending
 * on the card's rarity using the <Card Rarity: x> notetag. This array starts
 * at 1 and goes to whatever you let it size up to. At position 0, white is
 * automatically added in. The colors added will follow this format: 
 *
 * rgba(red, green, blue, alpha)
 * red:   number between 0 and 255
 * green: number between 0 and 255
 * blue:  number between 0 and 255
 * alpha: number between 0 and 1
 * 
 *      If a color is labeled as 'holo' or 'rainbow', then the name and aura of
 * the card will become holographic and change colors throughout.
 * 
 * Card Front Design: Blend Mode: Hologram
 * 
 *      This decides the default blend mode of the holographic image used on
 * the card's front. This can be changed through notetags.
 * 
 * Card Front Design: Holo Hue Opacity
 * 
 *      This determines the holographic image's default opacity level using a
 * number between 0 and 255. This can be changed through notetags.
 * 
 * Card Front Design: Holo Hue Shift Speed
 * 
 *      This determines the speed at which the holographic image cycles through
 * its colors. Use 0 if you don't wish for it to cycle (but why??). This can be
 * changed through notetags.
 * 
 * Card Front Design: Blend Mode: Border
 * 
 *      This decides the default blend mode of the border cell used on the
 * card's front by the card's template.
 * 
 * Card Front Design: Blend Mode: Text Box
 * 
 *      This decides the default blend mode of the text box cell used on the
 * card's front by the card's template.
 * 
 * Card Front Design: Default Text Size Scale
 * 
 *      This determines the scale of the text window used. Use 1.0 for regular
 * size, but the default RPG Maker MV font size won't give you much room to
 * make the text on there look good. Settle for a number like 0.5 instead.
 * 
 * Card Front Design: Blend Mode Icon Layer
 * 
 *      This decides the default blend mode of the icon cell used on the card's
 * front by the card's template.
 * 
 * ---
 * 
 * Default Booster Art
 * 
 *      This is the default artwork used for booster packs. The image location
 * is in img/pictures/ so place the desired image there.
 * 
 * Default Booster BG
 * 
 *      This is the default background used when opening booster packs. The
 * image location is in img/parallaxes/ so place the desired image there.
 *
 * Booster Rarity Auras
 * 
 *      Shows rarity auras when opening booster packs. Rarity auras are
 * determined by a card's rarity level, which is determined through the
 * <Card Rarity: x> notetag.
 *
 * ---
 * 
 * Booster Window Settings
 * 
 *      This section is for those who wish to alter the code used to make the
 * Booster Pack Card List Window. Do not alter these settings if you are not
 * familiar with JavaScript.
 *
 * Booster Window Settings: JS: Initialize Code
 * 
 *      This is the code that's used to define the way the window appears and
 * its various dimensions.
 * 
 * Booster Window Settings: JS: Create Title Window
 * 
 *      This is the code used to make the window that appears above the list
 * window indicating how many booster packs have been opened.
 * 
 * Booster Window Settings: JS: Create Under Window
 * 
 *      This is the code used to make the window that appears below the list
 * window telling the player to press OK or cancel to move forward.
 * 
 * Booster Window Settings: JS: Create Shown Card
 * 
 *      This is the code used to determine how to position a card on the screen
 * to make it visible as the player scrolls through the list.
 * 
 * Booster Window Settings: JS: Draw List Item
 * 
 *      This is the code used to determine how to draw each of the list items
 * in the window.
 * 
 * ---
 * 
 * Item Core Additions
 * 
 *      If you are using Yanfly's Item Core (and you should if you aren't),
 * additional options can be made if the expanded item menu is used. Do not
 * alter the JS settings if you are not familiar with JavaScript.
 * 
 * Item Core Additions: Window Rarity Auras
 * 
 *      This will show auras for the cards displayed in the preview window.
 * 
 * Item Core Additions: JS: Booster Commands
 * 
 *      This adds additional commands when selecting a booster pack to use in
 * the expanded item menu.
 * 
 * Item Core Additions: JS: Action Open Booster
 * 
 *      This is the action ran when opening multiple booster packs at once. By
 * default, there is nothing new done here but there could be if you wanted!
 * 
 * ---
 * 
 * Booster Scene Settings
 * 
 *      These settings determine the code that runs through the fancier open a
 * booster pack scene. This is in case you want to change things up on how the
 * scene looks to fit your game. Do not alter the JS settings if you are not
 * familiar with JavaScript.
 * 
 * Booster Scene Settings: Play Unique Music?
 * 
 *      Play unique music when entering this scene? This will fade out the
 * currently played music for the one listed below.
 * 
 * Booster Scene Settings: Fade Out Duration
 * 
 *      If the above is set to true, then is how many seconds it will take to
 * fade out the currently played music. This is also the duration used when
 * returning back to the previous scene after this scene is finished.
 * 
 * Booster Scene Settings: Booster Music
 * 
 *      If you opt to play unique music for the booster opening scene, this is
 * the bgm that's being played. The image location is in audio/bgm/ so place
 * the wanted song there.
 * 
 * Booster Scene Settings: JS: Window Creation
 * 
 *      This is the code that's ran to make windows in the scene that show up
 * displaying the number of boosters the player has gone through in the session
 * to help messages that urge the player on how to continue forward.
 * 
 * Booster Scene Settings: JS: Start Phase 1, 2, 3
 * 
 *      This is the code that's ran at the start of each of the three phases
 * used in the booster scene to open the booster packs and display the cards.
 * Each phase has its own code.
 * 
 * Booster Scene Settings: JS: Update Phase 1, 2, 3, Skip, Finish
 * 
 *      This is the code that's ran after each phase has started to transfer
 * the player from scene to scene as well as update the sprites and windows on
 * the screen in a controlled fashion.
 * 
 * ---
 * 
 * Booster Option Settings
 * 
 *      These plugin parameters give the player an option to control whether or
 * not they wish to watch the full booster animation when opening a pack from
 * the Options Menu. If you are using YEP_OptionsCore (and if you're not,
 * why????), scroll down to the YEP_OptionsCore Integration to learn how to
 * integrate this plugin's option settings with YEP_OptionsCore.
 * 
 * Booster Option Settings: Show Option
 * 
 *      If this is true, the option will appear in the options menu. If false,
 * then it won't. Simple as that.
 * 
 * Booster Option Settings: Default Setting
 * 
 *      Determine if the setting will show the full animation (true) or not
 * (false) by default.
 * 
 * Booster Option Settings: Text
 * 
 *      This is the text that appears for this option command.
 * 
 * 
 *
 * *** Notetags ***
 * 
 *      The following are notetags that you use with your items to change them
 * into cards or booster packs.
 * 
 * --- Card Notetags ---
 * 
 * <Card Art: foldername, filename>
 * <Card Art: foldername, filename, hue>
 * - Replace 'foldername' with the img/folder's name (case sensitive)
 * - Replace 'filename' with the graphic's filename (case sensitive)
 * - (Optional) Replace 'hue' with a number between 0 and 360 for the hue. If
 * you don't use this option, it will default to 0.
 * - Example: <Card Art: sv_enemies, Dragon, 100>
 * 
 * <Card Dragonbones: armature>
 * - If you are running KELYEP_DragonBones, you can use DB armatures for the
 * card art instead. Replace 'armature' with the name of the armature you wish
 * load onto this card. The armature is automatically loaded upon game start.
 * This is case sensitive.
 *
 * <Card Dragonbones Animation: animationName>
 * - Replace 'animationName' with the name of the animation used by the DB
 * armature. The animation name is case sensitive.
 *
 * <Card Art Offset: +x, +y>
 * <Card Art Offset: -x, -y>
 * - Replace 'x' and 'y' with numeric values to determine the horizontal and
 * vertical offset for the art graphic from the center.
 * 
 * <Card Art Scale: x>
 * - Replace 'x' with a number to determine the scaling value of the art.
 * 1.0 is 100%. 0.5 is 50%. 2.5 is 250%.
 *
 * <Card Art Cells: ColxRow>
 * - Use this notetag only if you plan on using a sprite sheet.
 * - Replace 'Col' with the number of cell columns the sprite sheet has.
 * - Replace 'Row' with the number of cell rows the sprite sheet has.
 * - Otherwise, if this notetag is unused, the art will be treated as a
 * normal full-sized image.
 * 
 * <Cell Art Cell Index: x>
 * - Use this only if you plan on using a sprite sheet.
 * - Replace 'x' with the index number of the cell starting from 0.
 * - Otherwise, if this notetag is unused, the index cell will default to 0.
 * 
 * <Card Name: name>
 * - Replace 'name' with the text that you wish to appear on the card.
 * 
 * <Card Element: name>
 * - Replace 'name' with the element this card associates with. This will also
 * determine the Card Template plugin parameter this card uses. If this notetag
 * is not used, the element will default to 'None'. If you wish to use a custom
 * card template after defining the element, use <Card Template: x>.
 * 
 * <Card Level: x>
 * - Replace 'x' with this card's level. This is a numeric value.
 * 
 * <Card Power: x>
 * - Replace 'x' with this card's power. This is a numeric value.
 * 
 * <Card Health: x>
 * - Replace 'x' with this card's health. This is a numeric value. This does
 * not appear on cards by default unless you alter the settings in the Card
 * Templates plugin parameters to let it show.
 * 
 * <Card Template: name>
 * - Replace 'name' with the name of the Card Template you wish for this card
 * to use in place of the default one determined by its element.
 *
 * <Card Rarity: x>
 * - Replace 'x' with a number representing the card's rarity. This is used to
 * determine the aura of the card and where it stands in the card pool when
 * opening booster packs.
 *
 * <Card Parallax BG: filename>
 * - Replace 'filename' with the filename of a graphic from img/parallaxes/
 * to be used as this card's parallax background. This is case sensitive.
 * - This is an optional notetag. Not all cards need parallax backgrounds.
 * 
 * <Card Parallax BG Speed: +x, +y>
 * <Card Parallax BG Speed: -x, -y>
 * - Replace 'x' and 'y' with numeric values determining the parallax's scroll
 * speed for this card.
 * 
 * <Card Parallax BG Opacity: x>
 * - Replace 'x' with a number value between 0 and 255 to determine the opacity
 * level of the parallax background.
 * 
 * <Card Parallax BG Blend Mode: Normal>
 * <Card Parallax BG Blend Mode: Additive>
 * <Card Parallax BG Blend Mode: Multiply>
 * <Card Parallax BG Blend Mode: Screen>
 * - Determines which blend mode you wish to use for the parallax background.
 * You can only pick one of the above.
 * 
 * <Card Holo BG: filename>
 * - Replace 'filename' with the filename of a graphic from img/pictures/ to be
 * used as this card's hologram background. This is case sensitive.
 * - This is an optional notetag. Not all cards need holographic backgrounds.
 * 
 * <Card Holo BG Speed: x>
 * - Replace 'x' with a numeric value determine how fast the holographic hue
 * shifts each frame.
 * 
 * <Card Holo BG Opacity: x>
 * - Replace 'x' with a numeric value between 0 and 255 to determine the
 * holographic background's opacity.
 * 
 * <Card Holo BG Blend Mode: Normal>
 * <Card Holo BG Blend Mode: Additive>
 * <Card Holo BG Blend Mode: Multiply>
 * <Card Holo BG Blend Mode: Screen>
 * - Determines which blend mode you wish to use for the holographic background.
 * You can only pick one of the above.
 *
 * <Card Parallax FG: filename>
 * - Replace 'filename' with the filename of a graphic from img/parallaxes/
 * to be used as this card's parallax foreground. This is case sensitive.
 * - This is an optional notetag. Not all cards need parallax foregrounds.
 * 
 * <Card Parallax FG Speed: +x, +y>
 * <Card Parallax FG Speed: -x, -y>
 * - Replace 'x' and 'y' with numeric values determining the parallax's scroll
 * speed for this card.
 * 
 * <Card Parallax FG Opacity: x>
 * - Replace 'x' with a number value between 0 and 255 to determine the opacity
 * level of the parallax foreground.
 * 
 * <Card Parallax FG Blend Mode: Normal>
 * <Card Parallax FG Blend Mode: Additive>
 * <Card Parallax FG Blend Mode: Multiply>
 * <Card Parallax FG Blend Mode: Screen>
 * - Determines which blend mode you wish to use for the parallax foreground.
 * You can only pick one of the above.
 * 
 * <Card Holo FG: filename>
 * - Replace 'filename' with the filename of a graphic from img/pictures/ to be
 * used as this card's hologram foreground. This is case sensitive.
 * - This is an optional notetag. Not all cards need holographic foregrounds.
 * 
 * <Card Holo FG Speed: x>
 * - Replace 'x' with a numeric value determine how fast the holographic hue
 * shifts each frame.
 * 
 * <Card Holo FG Opacity: x>
 * - Replace 'x' with a numeric value between 0 and 255 to determine the
 * holographic foreground's opacity.
 * 
 * <Card Holo FG Blend Mode: Normal>
 * <Card Holo FG Blend Mode: Additive>
 * <Card Holo FG Blend Mode: Multiply>
 * <Card Holo FG Blend Mode: Screen>
 * - Determines which blend mode you wish to use for the holographic foreground.
 * You can only pick one of the above.
 *
 * <Card Text>
 * Line 1
 * Line 2
 * Line 3
 * Line 4
 * </Card Text>
 * - Replace lines 1 through 4 with text you wish to appear in the card's text
 * box. If you do not use this notetag, the text will use the card's database
 * item's description text instead.
 * 
 * <Card Text Scale: x>
 * - Replace 'x' with a number determining the scale of the text size.
 *
 * <Not a Card>
 * - If you want to mark something as <Not a Card>, it won't appear in the
 * card pool of booster packs even if the number gets listed. It also won't be
 * registered as a card. This is only to be used in situations where a database
 * item got flagged incorrectly by the plugin as a card, when it isn't one.
 * 
 * --- Booster Notetags ---
 * 
 * <Booster Art: filename>
 * - Replace 'filename' with the filename of a graphic from img/pictures/ to be
 * used as the art for this booster pack. If you do not use this notetag, the
 * art will default to the one defined in the Plugin Parameters.
 * 
 * <Booster BG: filename>
 * - Replace 'filename' with the filename of a graphic from img/parallaxes/ to
 * be used as the background art shown when opening a booster pack during a full
 * booster animation sequence. If you do not use this notetag, the graphic used
 * will default to the one defined in the Plugin Parameters.
 * 
 * <Booster Rarities: x>
 * <Booster Rarities: x, x, x>
 * <Booster Rarities: x, x, x, x, x>
 * - Replace 'x' with numbers from 0 to whatever your highest rarity is.
 * - Use any number of x's you want in the notetag.
 * - This determines the rarity pools used when opening this booster pack.
 * - Use multiples of this notetag to have more variety in the booster pack
 * contents there can be. When this booster pack is opened, it will only choose
 * one of the above pools.
 * 
 * <Card Pool: x>
 * <Card Pool: x, x, x>
 * <Card Pool: x, x, x, x, x, x>
 * - Replace 'x' with the ID's of the items you wish to put into the card pool.
 * - Use any number of x's you want in the notetag.
 * - Use multiples of this notetag if you wish. The card pool will consolidate
 * each iteration of this notetag.
 * - This will combine the card pool with the below notetag.
 *
 * <Card Pool: x to y>
 * - Replace 'x' and 'y' with the ID's you wish to grab all the numbers of
 * between and throw them into the card pool.
 * - Use multiples of this notetag if you wish. The card pool will consolidate
 * each iteration of this notetag.
 * - This will combine the card pool with the above notetag.
 *
 * *** Script Calls ***
 * 
 * var itemId = 10;
 * var times = 1;
 * var consume = true;
 * $openCardBoosterWindow(itemId, times, consume);
 * - This opens up a booster pack card list window (without the fancy scene).
 * - Replace 'itemId' with the ID of the booster pack you wish to open.
 * - Replace 'times' with the number of times to open this booster pack.
 * - Replace 'consume' with true or false (without quotes) to determine if the
 * booster pack item will be consumed the player's inventory.
 * 
 * var itemId = 10;
 * var times = 1;
 * var consume = true;
 * $openCardBoosterScene(itemId, times, consume);
 * - This opens up a booster pack card scene (the super fancy-looking one).
 * - Replace 'itemId' with the ID of the booster pack you wish to open.
 * - Replace 'times' with the number of times to open this booster pack.
 * - Replace 'consume' with true or false (without quotes) to determine if the
 * booster pack item will be consumed the player's inventory.
 *
 * var itemId = 10;
 * var times = 1;
 * var consume = true;
 * $openCardBoosterPacks(itemId, times, consume);
 * - This opens up a booster pack card scene or list depending on the player's
 * selected option setting.
 * - Replace 'itemId' with the ID of the booster pack you wish to open.
 * - Replace 'times' with the number of times to open this booster pack.
 * - Replace 'consume' with true or false (without quotes) to determine if the
 * booster pack item will be consumed the player's inventory.
 *
 *
 *
 * *** YEP_OptionsCore Integration ***
 *
 *      If you want to integrate the Booster Animation option into
 * Yanfly's Options Core plugin, use the settings below:
 *
 * --- Animated Cards ---
 *
 * Name:
 * \i[187]Animated Cards
 *
 * Help Description:
 * Cards of higher rarity are animated.
 *
 * Symbol:
 * cardAnimatedCards
 *
 * Show/Hide:
 * show = Imported.Irina_CardGameCore.AnimateCardOptionShow;
 *
 * Enable:
 * enabled = true;
 *
 * Ext:
 * ext = 0;
 *
 * ----------
 * Functions:
 * ----------
 * 
 * Make Option Code:
 * this.addCommand(name, symbol, enabled, ext);
 *
 * Draw Option Code:
 * var rect = this.itemRectForText(index);
 * var statusWidth = this.statusWidth();
 * var titleWidth = rect.width - statusWidth;
 * this.resetTextColor();
 * this.changePaintOpacity(this.isCommandEnabled(index));
 * this.drawOptionsName(index);
 * this.drawOptionsOnOff(index);
 *
 * Process OK Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, !value);
 *
 * Cursor Right Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, true);
 * 
 * Cursor Left Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, false);
 *
 * Default Config Code:
 * // Empty.
 *
 * Save Config Code:
 * // Empty.
 *
 * Load Config Code:
 * // Empty.
 *
 * --- Booster Animations ---
 * 
 * Name:
 * \i[187]Booster Animations
 *
 * Help Description:
 * Plays the full Booster Pack opening animation if ON.
 * Otherwise, it shows the contents of the pack(s) if OFF.
 *
 * Symbol:
 * cardBoosterAnimation
 *
 * Show/Hide:
 * show = Imported.Irina_CardGameCore.BoosterOptionShow;
 *
 * Enable:
 * enabled = true;
 *
 * Ext:
 * ext = 0;
 *
 * ----------
 * Functions:
 * ----------
 * 
 * Make Option Code:
 * this.addCommand(name, symbol, enabled, ext);
 *
 * Draw Option Code:
 * var rect = this.itemRectForText(index);
 * var statusWidth = this.statusWidth();
 * var titleWidth = rect.width - statusWidth;
 * this.resetTextColor();
 * this.changePaintOpacity(this.isCommandEnabled(index));
 * this.drawOptionsName(index);
 * this.drawOptionsOnOff(index);
 *
 * Process OK Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, !value);
 *
 * Cursor Right Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, true);
 * 
 * Cursor Left Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, false);
 *
 * Default Config Code:
 * // Empty.
 *
 * Save Config Code:
 * // Empty.
 *
 * Load Config Code:
 * // Empty.
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
 *
 * @param Templates:ArrayStruct
 * @text Card Templates
 * @type struct<CardFrontTemplate>[]
 * @desc A list of the templates used for this game and how they are visibly drawn.
 * @default ["{\"Name:str\":\"None\",\"ImgFile:str\":\"CardNone\",\"IconIndex:num\":\"247\",\"AnimationId:num\":\"2\",\"\":\"\",\"DrawCode:func\":\"\\\"// Setup Bitmap\\\\nvar bitmap = this._cardFrontDrawSprite.bitmap;\\\\nvar holoBitmap = this._cardFrontHoloDrawSprite.bitmap;\\\\nbitmap.clear();\\\\nholoBitmap.clear();\\\\n\\\\n// Setup Colors\\\\nvar white = 'rgba(255, 255, 255)';\\\\nvar red   = 'rgba(255, 128, 128)';\\\\nvar green = 'rgba( 64, 255,  64)';\\\\nvar black = 'rgba(  0,   0,   0)';\\\\nvar holo  = 'rgba(255, 192, 192)';\\\\nvar gray  = 'rgba(  0,   0,   0, 0.5)';\\\\n\\\\n// Name\\\\nvar text = this._card.name();\\\\nvar x = 60;\\\\nvar y = 4;\\\\nvar w = bitmap.width - x - 28;\\\\nvar h = 48;\\\\nvar rainbow = this._card.rarityColor().match(/(?:rainbow|holo)/i);\\\\nvar target = (rainbow) ? holoBitmap : bitmap;\\\\ntarget.fontFace = 'Arial';\\\\ntarget.fontSize = 28;\\\\nif (text === this._card._original._name) {\\\\n  target.textColor = (rainbow) ? holo : this._card.rarityColor();\\\\n} else {\\\\n  target.textColor = green;\\\\n}\\\\ntarget.outlineColor = gray;\\\\ntarget.drawText(text, x, y, w, h, 'left');\\\\n\\\\n// Level\\\\nvar level = this._card.level();\\\\nvar x = 4;\\\\nvar y = 56;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (level > this._card._original._level) {\\\\n  bitmap.textColor = green;\\\\n} else if (level < this._card._original._level) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(level, x, y, w, h, 'center');\\\\n\\\\n// Power\\\\nvar power = this._card.power();\\\\nvar x = 4;\\\\nvar y = 108;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (power > this._card._original._power) {\\\\n  bitmap.textColor = green;\\\\n} else if (power < this._card._original._power) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(power, x, y, w, h, 'center');\\\\n\\\\nif (!$showCardHealth) return;\\\\n\\\\n// Health\\\\nvar healthBitmap = ImageManager.loadPicture('CardHeartIcon');\\\\nhealthBitmap.addLoadListener(function(bitmap, healthBitmap) {\\\\n\\\\nvar health = this._card.currentHealth();\\\\nvar maxHealth = this._card.maxHealth();\\\\nvar x = 4;\\\\nvar y = 160;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.blt(healthBitmap, 0, 0, healthBitmap.width, healthBitmap.height, x, y);\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (health > maxHealth) {\\\\n  bitmap.textColor = green;\\\\n} else if (health < maxHealth && health <= 1) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(health, x, y, w, h, 'center');\\\\n\\\\n}.bind(this, bitmap, healthBitmap));\\\"\",\"TextboxX:num\":\"56\",\"TextboxY:num\":\"356\",\"TextboxWidth:num\":\"238\",\"TextboxHeight:num\":\"100\"}","{\"Name:str\":\"Fire\",\"ImgFile:str\":\"CardFire\",\"IconIndex:num\":\"64\",\"AnimationId:num\":\"107\",\"\":\"\",\"DrawCode:func\":\"\\\"// Setup Bitmap\\\\nvar bitmap = this._cardFrontDrawSprite.bitmap;\\\\nvar holoBitmap = this._cardFrontHoloDrawSprite.bitmap;\\\\nbitmap.clear();\\\\nholoBitmap.clear();\\\\n\\\\n// Setup Colors\\\\nvar white = 'rgba(255, 255, 255)';\\\\nvar red   = 'rgba(255, 128, 128)';\\\\nvar green = 'rgba( 64, 255,  64)';\\\\nvar black = 'rgba(  0,   0,   0)';\\\\nvar holo  = 'rgba(255, 192, 192)';\\\\nvar gray  = 'rgba(  0,   0,   0, 0.5)';\\\\n\\\\n// Name\\\\nvar text = this._card.name();\\\\nvar x = 60;\\\\nvar y = 4;\\\\nvar w = bitmap.width - x - 28;\\\\nvar h = 48;\\\\nvar rainbow = this._card.rarityColor().match(/(?:rainbow|holo)/i);\\\\nvar target = (rainbow) ? holoBitmap : bitmap;\\\\ntarget.fontFace = 'Arial';\\\\ntarget.fontSize = 28;\\\\nif (text === this._card._original._name) {\\\\n  target.textColor = (rainbow) ? holo : this._card.rarityColor();\\\\n} else {\\\\n  target.textColor = green;\\\\n}\\\\ntarget.outlineColor = gray;\\\\ntarget.drawText(text, x, y, w, h, 'left');\\\\n\\\\n// Level\\\\nvar level = this._card.level();\\\\nvar x = 4;\\\\nvar y = 56;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (level > this._card._original._level) {\\\\n  bitmap.textColor = green;\\\\n} else if (level < this._card._original._level) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(level, x, y, w, h, 'center');\\\\n\\\\n// Power\\\\nvar power = this._card.power();\\\\nvar x = 4;\\\\nvar y = 108;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (power > this._card._original._power) {\\\\n  bitmap.textColor = green;\\\\n} else if (power < this._card._original._power) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(power, x, y, w, h, 'center');\\\\n\\\\nif (!$showCardHealth) return;\\\\n\\\\n// Health\\\\nvar healthBitmap = ImageManager.loadPicture('CardHeartIcon');\\\\nhealthBitmap.addLoadListener(function(bitmap, healthBitmap) {\\\\n\\\\nvar health = this._card.currentHealth();\\\\nvar maxHealth = this._card.maxHealth();\\\\nvar x = 4;\\\\nvar y = 160;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.blt(healthBitmap, 0, 0, healthBitmap.width, healthBitmap.height, x, y);\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (health > maxHealth) {\\\\n  bitmap.textColor = green;\\\\n} else if (health < maxHealth && health <= 1) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(health, x, y, w, h, 'center');\\\\n\\\\n}.bind(this, bitmap, healthBitmap));\\\"\",\"TextboxX:num\":\"56\",\"TextboxY:num\":\"356\",\"TextboxWidth:num\":\"238\",\"TextboxHeight:num\":\"100\"}","{\"Name:str\":\"Water\",\"ImgFile:str\":\"CardWater\",\"IconIndex:num\":\"67\",\"AnimationId:num\":\"81\",\"\":\"\",\"DrawCode:func\":\"\\\"// Setup Bitmap\\\\nvar bitmap = this._cardFrontDrawSprite.bitmap;\\\\nvar holoBitmap = this._cardFrontHoloDrawSprite.bitmap;\\\\nbitmap.clear();\\\\nholoBitmap.clear();\\\\n\\\\n// Setup Colors\\\\nvar white = 'rgba(255, 255, 255)';\\\\nvar red   = 'rgba(255, 128, 128)';\\\\nvar green = 'rgba( 64, 255,  64)';\\\\nvar black = 'rgba(  0,   0,   0)';\\\\nvar holo  = 'rgba(255, 192, 192)';\\\\nvar gray  = 'rgba(  0,   0,   0, 0.5)';\\\\n\\\\n// Name\\\\nvar text = this._card.name();\\\\nvar x = 60;\\\\nvar y = 4;\\\\nvar w = bitmap.width - x - 28;\\\\nvar h = 48;\\\\nvar rainbow = this._card.rarityColor().match(/(?:rainbow|holo)/i);\\\\nvar target = (rainbow) ? holoBitmap : bitmap;\\\\ntarget.fontFace = 'Arial';\\\\ntarget.fontSize = 28;\\\\nif (text === this._card._original._name) {\\\\n  target.textColor = (rainbow) ? holo : this._card.rarityColor();\\\\n} else {\\\\n  target.textColor = green;\\\\n}\\\\ntarget.outlineColor = gray;\\\\ntarget.drawText(text, x, y, w, h, 'left');\\\\n\\\\n// Level\\\\nvar level = this._card.level();\\\\nvar x = 4;\\\\nvar y = 56;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (level > this._card._original._level) {\\\\n  bitmap.textColor = green;\\\\n} else if (level < this._card._original._level) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(level, x, y, w, h, 'center');\\\\n\\\\n// Power\\\\nvar power = this._card.power();\\\\nvar x = 4;\\\\nvar y = 108;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (power > this._card._original._power) {\\\\n  bitmap.textColor = green;\\\\n} else if (power < this._card._original._power) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(power, x, y, w, h, 'center');\\\\n\\\\nif (!$showCardHealth) return;\\\\n\\\\n// Health\\\\nvar healthBitmap = ImageManager.loadPicture('CardHeartIcon');\\\\nhealthBitmap.addLoadListener(function(bitmap, healthBitmap) {\\\\n\\\\nvar health = this._card.currentHealth();\\\\nvar maxHealth = this._card.maxHealth();\\\\nvar x = 4;\\\\nvar y = 160;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.blt(healthBitmap, 0, 0, healthBitmap.width, healthBitmap.height, x, y);\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (health > maxHealth) {\\\\n  bitmap.textColor = green;\\\\n} else if (health < maxHealth && health <= 1) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(health, x, y, w, h, 'center');\\\\n\\\\n}.bind(this, bitmap, healthBitmap));\\\"\",\"TextboxX:num\":\"56\",\"TextboxY:num\":\"356\",\"TextboxWidth:num\":\"238\",\"TextboxHeight:num\":\"100\"}","{\"Name:str\":\"Earth\",\"ImgFile:str\":\"CardEarth\",\"IconIndex:num\":\"68\",\"AnimationId:num\":\"86\",\"\":\"\",\"DrawCode:func\":\"\\\"// Setup Bitmap\\\\nvar bitmap = this._cardFrontDrawSprite.bitmap;\\\\nvar holoBitmap = this._cardFrontHoloDrawSprite.bitmap;\\\\nbitmap.clear();\\\\nholoBitmap.clear();\\\\n\\\\n// Setup Colors\\\\nvar white = 'rgba(255, 255, 255)';\\\\nvar red   = 'rgba(255, 128, 128)';\\\\nvar green = 'rgba( 64, 255,  64)';\\\\nvar black = 'rgba(  0,   0,   0)';\\\\nvar holo  = 'rgba(255, 192, 192)';\\\\nvar gray  = 'rgba(  0,   0,   0, 0.5)';\\\\n\\\\n// Name\\\\nvar text = this._card.name();\\\\nvar x = 60;\\\\nvar y = 4;\\\\nvar w = bitmap.width - x - 28;\\\\nvar h = 48;\\\\nvar rainbow = this._card.rarityColor().match(/(?:rainbow|holo)/i);\\\\nvar target = (rainbow) ? holoBitmap : bitmap;\\\\ntarget.fontFace = 'Arial';\\\\ntarget.fontSize = 28;\\\\nif (text === this._card._original._name) {\\\\n  target.textColor = (rainbow) ? holo : this._card.rarityColor();\\\\n} else {\\\\n  target.textColor = green;\\\\n}\\\\ntarget.outlineColor = gray;\\\\ntarget.drawText(text, x, y, w, h, 'left');\\\\n\\\\n// Level\\\\nvar level = this._card.level();\\\\nvar x = 4;\\\\nvar y = 56;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (level > this._card._original._level) {\\\\n  bitmap.textColor = green;\\\\n} else if (level < this._card._original._level) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(level, x, y, w, h, 'center');\\\\n\\\\n// Power\\\\nvar power = this._card.power();\\\\nvar x = 4;\\\\nvar y = 108;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (power > this._card._original._power) {\\\\n  bitmap.textColor = green;\\\\n} else if (power < this._card._original._power) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(power, x, y, w, h, 'center');\\\\n\\\\nif (!$showCardHealth) return;\\\\n\\\\n// Health\\\\nvar healthBitmap = ImageManager.loadPicture('CardHeartIcon');\\\\nhealthBitmap.addLoadListener(function(bitmap, healthBitmap) {\\\\n\\\\nvar health = this._card.currentHealth();\\\\nvar maxHealth = this._card.maxHealth();\\\\nvar x = 4;\\\\nvar y = 160;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.blt(healthBitmap, 0, 0, healthBitmap.width, healthBitmap.height, x, y);\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (health > maxHealth) {\\\\n  bitmap.textColor = green;\\\\n} else if (health < maxHealth && health <= 1) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(health, x, y, w, h, 'center');\\\\n\\\\n}.bind(this, bitmap, healthBitmap));\\\"\",\"TextboxX:num\":\"56\",\"TextboxY:num\":\"356\",\"TextboxWidth:num\":\"238\",\"TextboxHeight:num\":\"100\"}","{\"Name:str\":\"Wind\",\"ImgFile:str\":\"CardWind\",\"IconIndex:num\":\"69\",\"AnimationId:num\":\"92\",\"\":\"\",\"DrawCode:func\":\"\\\"// Setup Bitmap\\\\nvar bitmap = this._cardFrontDrawSprite.bitmap;\\\\nvar holoBitmap = this._cardFrontHoloDrawSprite.bitmap;\\\\nbitmap.clear();\\\\nholoBitmap.clear();\\\\n\\\\n// Setup Colors\\\\nvar white = 'rgba(255, 255, 255)';\\\\nvar red   = 'rgba(255, 128, 128)';\\\\nvar green = 'rgba( 64, 255,  64)';\\\\nvar black = 'rgba(  0,   0,   0)';\\\\nvar holo  = 'rgba(255, 192, 192)';\\\\nvar gray  = 'rgba(  0,   0,   0, 0.5)';\\\\n\\\\n// Name\\\\nvar text = this._card.name();\\\\nvar x = 60;\\\\nvar y = 4;\\\\nvar w = bitmap.width - x - 28;\\\\nvar h = 48;\\\\nvar rainbow = this._card.rarityColor().match(/(?:rainbow|holo)/i);\\\\nvar target = (rainbow) ? holoBitmap : bitmap;\\\\ntarget.fontFace = 'Arial';\\\\ntarget.fontSize = 28;\\\\nif (text === this._card._original._name) {\\\\n  target.textColor = (rainbow) ? holo : this._card.rarityColor();\\\\n} else {\\\\n  target.textColor = green;\\\\n}\\\\ntarget.outlineColor = gray;\\\\ntarget.drawText(text, x, y, w, h, 'left');\\\\n\\\\n// Level\\\\nvar level = this._card.level();\\\\nvar x = 4;\\\\nvar y = 56;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (level > this._card._original._level) {\\\\n  bitmap.textColor = green;\\\\n} else if (level < this._card._original._level) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(level, x, y, w, h, 'center');\\\\n\\\\n// Power\\\\nvar power = this._card.power();\\\\nvar x = 4;\\\\nvar y = 108;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (power > this._card._original._power) {\\\\n  bitmap.textColor = green;\\\\n} else if (power < this._card._original._power) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(power, x, y, w, h, 'center');\\\\n\\\\nif (!$showCardHealth) return;\\\\n\\\\n// Health\\\\nvar healthBitmap = ImageManager.loadPicture('CardHeartIcon');\\\\nhealthBitmap.addLoadListener(function(bitmap, healthBitmap) {\\\\n\\\\nvar health = this._card.currentHealth();\\\\nvar maxHealth = this._card.maxHealth();\\\\nvar x = 4;\\\\nvar y = 160;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.blt(healthBitmap, 0, 0, healthBitmap.width, healthBitmap.height, x, y);\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (health > maxHealth) {\\\\n  bitmap.textColor = green;\\\\n} else if (health < maxHealth && health <= 1) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(health, x, y, w, h, 'center');\\\\n\\\\n}.bind(this, bitmap, healthBitmap));\\\"\",\"TextboxX:num\":\"56\",\"TextboxY:num\":\"356\",\"TextboxWidth:num\":\"238\",\"TextboxHeight:num\":\"100\"}","{\"Name:str\":\"Light\",\"ImgFile:str\":\"CardLight\",\"IconIndex:num\":\"248\",\"AnimationId:num\":\"97\",\"\":\"\",\"DrawCode:func\":\"\\\"// Setup Bitmap\\\\nvar bitmap = this._cardFrontDrawSprite.bitmap;\\\\nvar holoBitmap = this._cardFrontHoloDrawSprite.bitmap;\\\\nbitmap.clear();\\\\nholoBitmap.clear();\\\\n\\\\n// Setup Colors\\\\nvar white = 'rgba(255, 255, 255)';\\\\nvar red   = 'rgba(255, 128, 128)';\\\\nvar green = 'rgba( 64, 255,  64)';\\\\nvar black = 'rgba(  0,   0,   0)';\\\\nvar holo  = 'rgba(255, 192, 192)';\\\\nvar gray  = 'rgba(  0,   0,   0, 0.5)';\\\\n\\\\n// Name\\\\nvar text = this._card.name();\\\\nvar x = 60;\\\\nvar y = 4;\\\\nvar w = bitmap.width - x - 28;\\\\nvar h = 48;\\\\nvar rainbow = this._card.rarityColor().match(/(?:rainbow|holo)/i);\\\\nvar target = (rainbow) ? holoBitmap : bitmap;\\\\ntarget.fontFace = 'Arial';\\\\ntarget.fontSize = 28;\\\\nif (text === this._card._original._name) {\\\\n  target.textColor = (rainbow) ? holo : this._card.rarityColor();\\\\n} else {\\\\n  target.textColor = green;\\\\n}\\\\ntarget.outlineColor = gray;\\\\ntarget.drawText(text, x, y, w, h, 'left');\\\\n\\\\n// Level\\\\nvar level = this._card.level();\\\\nvar x = 4;\\\\nvar y = 56;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (level > this._card._original._level) {\\\\n  bitmap.textColor = green;\\\\n} else if (level < this._card._original._level) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(level, x, y, w, h, 'center');\\\\n\\\\n// Power\\\\nvar power = this._card.power();\\\\nvar x = 4;\\\\nvar y = 108;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (power > this._card._original._power) {\\\\n  bitmap.textColor = green;\\\\n} else if (power < this._card._original._power) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(power, x, y, w, h, 'center');\\\\n\\\\nif (!$showCardHealth) return;\\\\n\\\\n// Health\\\\nvar healthBitmap = ImageManager.loadPicture('CardHeartIcon');\\\\nhealthBitmap.addLoadListener(function(bitmap, healthBitmap) {\\\\n\\\\nvar health = this._card.currentHealth();\\\\nvar maxHealth = this._card.maxHealth();\\\\nvar x = 4;\\\\nvar y = 160;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.blt(healthBitmap, 0, 0, healthBitmap.width, healthBitmap.height, x, y);\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (health > maxHealth) {\\\\n  bitmap.textColor = green;\\\\n} else if (health < maxHealth && health <= 1) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(health, x, y, w, h, 'center');\\\\n\\\\n}.bind(this, bitmap, healthBitmap));\\\"\",\"TextboxX:num\":\"56\",\"TextboxY:num\":\"356\",\"TextboxWidth:num\":\"238\",\"TextboxHeight:num\":\"100\"}","{\"Name:str\":\"Dark\",\"ImgFile:str\":\"CardDark\",\"IconIndex:num\":\"71\",\"AnimationId:num\":\"102\",\"\":\"\",\"DrawCode:func\":\"\\\"// Setup Bitmap\\\\nvar bitmap = this._cardFrontDrawSprite.bitmap;\\\\nvar holoBitmap = this._cardFrontHoloDrawSprite.bitmap;\\\\nbitmap.clear();\\\\nholoBitmap.clear();\\\\n\\\\n// Setup Colors\\\\nvar white = 'rgba(255, 255, 255)';\\\\nvar red   = 'rgba(255, 128, 128)';\\\\nvar green = 'rgba( 64, 255,  64)';\\\\nvar black = 'rgba(  0,   0,   0)';\\\\nvar holo  = 'rgba(255, 192, 192)';\\\\nvar gray  = 'rgba(  0,   0,   0, 0.5)';\\\\n\\\\n// Name\\\\nvar text = this._card.name();\\\\nvar x = 60;\\\\nvar y = 4;\\\\nvar w = bitmap.width - x - 28;\\\\nvar h = 48;\\\\nvar rainbow = this._card.rarityColor().match(/(?:rainbow|holo)/i);\\\\nvar target = (rainbow) ? holoBitmap : bitmap;\\\\ntarget.fontFace = 'Arial';\\\\ntarget.fontSize = 28;\\\\nif (text === this._card._original._name) {\\\\n  target.textColor = (rainbow) ? holo : this._card.rarityColor();\\\\n} else {\\\\n  target.textColor = green;\\\\n}\\\\ntarget.outlineColor = gray;\\\\ntarget.drawText(text, x, y, w, h, 'left');\\\\n\\\\n// Level\\\\nvar level = this._card.level();\\\\nvar x = 4;\\\\nvar y = 56;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (level > this._card._original._level) {\\\\n  bitmap.textColor = green;\\\\n} else if (level < this._card._original._level) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(level, x, y, w, h, 'center');\\\\n\\\\n// Power\\\\nvar power = this._card.power();\\\\nvar x = 4;\\\\nvar y = 108;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (power > this._card._original._power) {\\\\n  bitmap.textColor = green;\\\\n} else if (power < this._card._original._power) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(power, x, y, w, h, 'center');\\\\n\\\\nif (!$showCardHealth) return;\\\\n\\\\n// Health\\\\nvar healthBitmap = ImageManager.loadPicture('CardHeartIcon');\\\\nhealthBitmap.addLoadListener(function(bitmap, healthBitmap) {\\\\n\\\\nvar health = this._card.currentHealth();\\\\nvar maxHealth = this._card.maxHealth();\\\\nvar x = 4;\\\\nvar y = 160;\\\\nvar w = 48;\\\\nvar h = 48;\\\\nbitmap.blt(healthBitmap, 0, 0, healthBitmap.width, healthBitmap.height, x, y);\\\\nbitmap.fontFace = 'Times New Roman';\\\\nbitmap.fontSize = 28;\\\\nif (health > maxHealth) {\\\\n  bitmap.textColor = green;\\\\n} else if (health < maxHealth && health <= 1) {\\\\n  bitmap.textColor = red;\\\\n} else {\\\\n  bitmap.textColor = white;\\\\n}\\\\nbitmap.outlineColor = black;\\\\nbitmap.drawText(health, x, y, w, h, 'center');\\\\n\\\\n}.bind(this, bitmap, healthBitmap));\\\"\",\"TextboxX:num\":\"56\",\"TextboxY:num\":\"356\",\"TextboxWidth:num\":\"238\",\"TextboxHeight:num\":\"100\"}"]
 *
 * @param
 * @param CardDesign
 * @text Overall Card Design
 * @default ------------------------------------
 *
 * @param ShowHealth:eval
 * @text Show Health?
 * @parent CardDesign
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show health on cards?
 * @default false
 *
 * @param FlipSound:str
 * @text Flip Sound
 * @parent CardDesign
 * @type file
 * @dir audio/se/
 * @desc Sound effect played when flipping a card
 * @default Book1
 *
 * @param CardOutlineThickness:num
 * @text Outline Thickness
 * @parent CardDesign
 * @desc Thickness of the card outline in pixels
 * @default 2
 *
 * @param CardOutlineColor:str
 * @text Outline Color
 * @parent CardDesign
 * @desc Outline color in rgba(red, green, blue, alpha)
 * Use 0-255 for red, green, blue; 0-1 for alpha
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param CardMaskImg:str
 * @text Mask Image
 * @parent CardDesign
 * @type file
 * @dir img/pictures/
 * @desc Mask image used for the card
 * @default CardMask
 *
 * @param CardBattleResultsImg:str
 * @text Battle Results Image
 * @parent CardDesign
 * @type file
 * @dir img/pictures/
 * @desc mage used for battle results
 * @default CardBattleResults
 *
 * @param CardPreload:eval
 * @text Preload Common Assets
 * @parent CardDesign
 * @type boolean
 * @on Preload
 * @off Don't Preload
 * @desc Preload used images, masks, and templates.
 * @default true
 *
 * @param
 *
 * @param CardBackDesign
 * @text Card Back Design
 * @default ------------------------------------
 *
 * @param CardBackImg:str
 * @text Back Image
 * @parent CardBackDesign
 * @type file
 * @dir img/pictures/
 * @desc Image used for the card back.
 * Look at the help file to learn how to set it up.
 * @default CardBack
 *
 * @param CardBackHueShift:num
 * @text Back Hue Shift Speed
 * @parent CardBackDesign
 * @desc Speed at which the hue in the back shifts
 * @default 0.25
 *
 * @param
 *
 * @param CardFrontDesign
 * @text Card Front Design
 * @default ------------------------------------
 *
 * @param CardFrontRarityColors:arraystr
 * @text Rarity Colors
 * @parent CardFrontDesign
 * @type string[]
 * @desc Colors used for card names of different rarities starting from 1. rgba(red, green, blue) format (use numbers 0-255)
 * @default ["rgba(160, 255, 255)","rgba(255, 192, 255)","rgba(255, 255, 160)","holo"]
 *
 * @param CardFrontHoloBlendMode:num
 * @text Blend Mode: Hologram
 * @parent CardFrontDesign
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc Blend mode for the hologram if the card has one.
 * @default 2
 *
 * @param CardHoloOpacity:num
 * @text Holo Hue Opacity
 * @parent CardFrontHoloBlendMode:num
 * @desc Default opacity level for holo images. Use a number between 0 and 255.
 * @default 128
 *
 * @param CardHoloHueShift:num
 * @text Holo Hue Shift Speed
 * @parent CardFrontHoloBlendMode:num
 * @desc Speed at which the hue on the hologram shifts
 * @default 1.5
 *
 * @param CardFrontBorderBlendMode:num
 * @text Blend Mode: Border
 * @parent CardFrontDesign
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc Blend mode for the border around the card.
 * @default 2
 *
 * @param CardFrontTextboxBlendMode:num
 * @text Blend Mode: Text Box
 * @parent CardFrontDesign
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc Blend mode for the text box on the card.
 * @default 1
 *
 * @param CardFrontTextDefaultScale:num
 * @text Default Text Size Scale
 * @parent CardFrontTextboxBlendMode:num
 * @desc Default scale size for card text
 * @default 0.5
 *
 * @param CardFrontIconBlendMode:num
 * @text Blend Mode: Icon Layer
 * @parent CardFrontDesign
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc Blend mode for the icon layer on the card.
 * @default 0
 *
 * @param 
 *
 * @param DefaultBoosterArt:str
 * @text Default Booster Art
 * @type file
 * @dir img/pictures/
 * @desc Default art used for Booster Packs.
 * @default BoosterMV
 *
 * @param DefaultBoosterBG:str
 * @text Default Booster BG
 * @type file
 * @dir img/parallaxes/
 * @desc Default background used for Booster Packs openings.
 * @default Booster
 *
 * @param RarityAuras:eval
 * @text Booster Rarity Auras
 * @type boolean
 * @on Show Auras
 * @off Don't Show
 * @desc Show auras on rarities when opening booster packs.
 * @default true
 *
 * @param
 *
 * @param BoosterWindow
 * @text Booster Window Settings
 * @default ------------------------------------
 *
 * @param BoosterWindowInitialize:func
 * @text JS: Initialize Code
 * @parent BoosterWindow
 * @type note
 * @desc JavaScript code used for initializing the booster list window.
 * @default "var x = Graphics.boxWidth / 4;\nvar y = this.fittingHeight(1) * 2;\nvar width = (Graphics.boxWidth / 2);\nvar height = Graphics.boxHeight - (this.fittingHeight(1) * 4);\nWindow_ItemList.prototype.initialize.call(this, x, y, width, height);\nthis.openness = 0;\nthis.open();\nthis.refresh();"
 *
 * @param BoosterWindowCreateTitleWindow:func
 * @text JS: Create Title Window
 * @parent BoosterWindow
 * @type note
 * @desc JavaScript code used for creating the title window.
 * @default "var x = 0;\nvar y = -this.fittingHeight(1);\nvar width = this.width;\nvar height = this.fittingHeight(1);\nthis._titleWindow = new Window_Base(x, y, width, height);\nthis.addChild(this._titleWindow);\nif (this._times > 1) {\n    var text = 'Contents of x' + this._times + ' Booster Packs';\n} else {\n    var text = 'Booster Pack Contents';\n}\nvar tx = (this._titleWindow.contents.width - this.textWidthEx(text)) / 2;\nthis._titleWindow.drawTextEx(text, tx, 0);\nthis._titleWindow.openness = 0;\nthis._titleWindow.open();"
 *
 * @param BoosterWindowCreateUnderWindow:func
 * @text JS: Create Under Window
 * @parent BoosterWindow
 * @type note
 * @desc JavaScript code used for creating the under window.
 * @default "var x = 0;\nvar y = this.height;\nvar width = this.width;\nvar height = this.fittingHeight(1);\nthis._underWindow = new Window_Base(x, y, width, height);\nthis.addChild(this._underWindow);\nvar text = 'Press \\\\c[17]OK\\\\c[0] or \\\\c[17]Cancel\\\\c[0] to continue';\nvar tx = (this._underWindow.contents.width - this.textWidthEx(text)) / 2;\nthis._underWindow.drawTextEx(text, tx, 0);\nthis._underWindow.openness = 0;\nthis._underWindow.open();"
 *
 * @param BoosterWindowCreateShownCard:func
 * @text JS: Create Shown Card
 * @parent BoosterWindow
 * @type note
 * @desc JavaScript code used for creating the shown visible card.
 * @default "this._shownCard = CardManager.createCard(this._data[0].id, false);\nthis.x = (Graphics.boxWidth - (this.width + 320)) / 2 + 320 + this.fittingHeight(0.5);\nthis._shownCard.sprite().x = this.x - 160 - this.fittingHeight(2);\nthis._shownCard.sprite().y = Graphics.boxHeight / 2;\nthis._shownCard.sprite().opacity = 0;\nthis._shownCard.sprite()._backShowing = true;\nthis._shownCard.sprite()._auraVisible = Imported.Irina_CardGameCore.RarityAuras;\nthis._shownCard.sprite().fadeIn();\nsetTimeout(this._shownCard.sprite().flip.bind(this._shownCard.sprite(), 20, false), 1000);"
 *
 * @param BoosterWindowDrawItem:func
 * @text JS: Draw List Item
 * @parent BoosterWindow
 * @type note
 * @desc JavaScript code used for drawing the individual card list items.
 * @default "var index = arguments[0];\nvar item = arguments[1];\nthis.contents.fontSize = 16;\nvar numberWidth = this.textWidth('00000');\nvar rect = this.itemRect(index);\nrect.width -= this.textPadding();\nthis.drawItemCardNumber(item, rect.x, rect.y, rect.width);\nthis.resetFontSettings();\nthis.drawItemCardName(item, rect.x + numberWidth, rect.y, rect.width - numberWidth);\nthis.changePaintOpacity(1);"
 *
 * @param
 * @param ItemCoreAdditions
 * @text Item Core Additions
 * @default ------------------------------------
 *
 * @param WindowRarityAuras:eval
 * @text Window Rarity Auras
 * @parent ItemCoreAdditions
 * @type boolean
 * @on Show Auras
 * @off Don't Show
 * @desc Show auras on rarities when in the item menu?
 * @default true
 *
 * @param ItemCoreBoosterCommands:func
 * @text JS: Booster Commands
 * @parent ItemCoreAdditions
 * @type note
 * @desc JavaScript code used for adding additional booster commands to Booster Pack items
 * @default "// 'openCardBooster' is the handler for the opening a card booster command.\nvar count = $gameParty.numItems(this._item);\nvar fmt = 'Open x%1 \\\\i[' + this._item.iconIndex + ']' + this._item.name + 's';\nvar quantities = [5, 10, 20, 40, 60, 80, 100];\nfor (var i = 0; i < quantities.length; i++) {\n    var quantity = quantities[i];\n    if (count > quantity) {\n        var text = fmt.format(quantity);\n        this.addCommand(text, 'openCardBooster', true, quantity);\n    }\n}\nif (quantity > 1) {\n    var text = fmt.format(count);\n    this.addCommand(text, 'openCardBooster', true, count);\n}"
 *
 * @param ItemCoreBoosterActionOpen:func
 * @text JS: Action Open Booster
 * @parent ItemCoreAdditions
 * @type note
 * @desc JavaScript code used for opening additional booster packs.
 * @default "// This code will run in addition to the default code\n// when a booster pack is opened."
 *
 * @param
 * @param BoosterScene
 * @text Booster Scene Settings
 * @default ------------------------------------
 *
 * @param PlayUniqueMusic:eval
 * @text Play Unique Music?
 * @parent BoosterScene
 * @type boolean
 * @on Unique Music
 * @off Don't Play
 * @desc Plays unique music during the booster scene.
 * @default true
 *
 * @param BoosterFadeOutBGM:num
 * @text Fade Out Duration
 * @parent PlayUniqueMusic:eval
 * @desc Duration in frames to fade out the BGM.
 * @default 3
 *
 * @param BoosterMusicSong:str
 * @text Booster Music
 * @parent PlayUniqueMusic:eval
 * @type file
 * @dir audio/bgm/
 * @desc Music played during the booster scene.
 * @default Theme2
 *
 * @param BoosterSceneCreateWindows:func
 * @text JS: Window Creation
 * @parent BoosterScene
 * @type note
 * @desc JavaScript code used for the creation of the scene's windows
 * @default "// Setup Defaults\nvar padding = Window_Base.prototype.standardPadding.call(this);\nvar lh = Window_Base.prototype.lineHeight.call(this);\nvar y = Graphics.boxHeight - lh - padding;\nvar width = (Graphics.boxWidth / 2) + padding;\nvar height = lh + padding * 2;\nvar color1 = 'rgba(0, 0, 0, 0.8)';\nvar color2 = 'rgba(0, 0, 0, 0)';\n\n// Bottom Left Window\nvar x = -padding;\nthis._bottomLeftWindow = new Window_Base(x, y, width, height);\nthis.addWindow(this._bottomLeftWindow);\nthis._bottomLeftWindow.contentsOpacity = 0;\nthis._bottomLeftWindow.opacity = 0;\nvar contents = this._bottomLeftWindow.contents;\ncontents.gradientFillRect(0, lh/2, contents.width, lh/2, color1, color2);\nvar text = '\\\\}\\\\}点击 \\\\c[17]空格\\\\c[0] 或者 \\\\c[17]鼠标左键\\\\c[0] 以继续';\nthis._bottomLeftWindow.drawTextEx(text, 6, lh/4);\n\n// Bottom Right Window\nvar x = Graphics.boxWidth / 2;\nthis._bottomRightWindow = new Window_Base(x, y, width, height);\nthis.addWindow(this._bottomRightWindow);\nthis._bottomRightWindow.contentsOpacity = 0;\nthis._bottomRightWindow.opacity = 0;\nvar contents = this._bottomRightWindow.contents;\ncontents.gradientFillRect(0, lh/2, contents.width, lh/2, color2, color1);\nvar text = '\\\\}\\\\}点击 \\\\c[17]esc\\\\c[0] 或者 \\\\c[17]鼠标右键\\\\c[0] 以跳过';\nvar cx = contents.width - Window_ChoiceList.prototype.textWidthEx.call(this._bottomRightWindow, text) - 6;\nthis._bottomRightWindow.drawTextEx(text, cx, lh/4);\n\n// Booster List Window\nvar x = -padding;\nvar y = lh * 4\nthis._boosterListWindow = new Window_Base(x, y, Graphics.boxWidth / 4, height);\nthis.addChild(this._boosterListWindow);\nthis._boosterListWindow.contentsOpacity = 0;\nthis._boosterListWindow.opacity = 0;\n\n// Create Window Countdown Timer\nthis._windowVisibilityCooldown = 150;"
 *
 * @param BoosterSceneStartPhase1:func
 * @text JS: Start Phase 1
 * @parent BoosterScene
 * @type note
 * @desc JavaScript code used for the start of phase 1.
 * @default "// This is the phase where the Booster Pack appears on\n// the screen and waits for the player to press OK or\n// click somewhere on the screen before continuing.\n\n// Create Phase Information\nthis._phase1pressed = false;\n\n// Create Booster Sprite\nvar baseSprite = this._spriteset._baseSprite;\nif (!this._boosterSprite) {\n    this._boosterSprite = new Sprite_CardBase();\n    baseSprite.addChild(this._boosterSprite);\n    this._boosterSprite.bitmap = BoosterManager.getBoosterArt(this._item);\n} else {\n    baseSprite.removeChild(this._boosterSprite);\n    baseSprite.addChild(this._boosterSprite);\n}\nthis._boosterSprite.x = Graphics.boxWidth / 2;\nthis._boosterSprite.x += Math.randomInt(128) - Math.randomInt(256);\nthis._boosterSprite.y = Graphics.boxHeight * 1.4;\nthis._boosterSprite.opacity = 255;\nthis._boosterSprite.startMove(Graphics.boxWidth / 2, Graphics.boxHeight / 2, 120, 'INOUTBACK');\n\n// Create Filter\nif (!this._bloomFilter) {\n    this._bloomFilter = new PIXI.filters.AdvancedBloomFilter;\n    this._bloomFilter.bloomScale = 0;\n}\nbaseSprite._filters = [this._bloomFilter];\n\n// Play Sound Effect\nvar delayMs = 500;\nvar boosterSound = {\n    name: 'Book2',\n    volume: 90,\n    pitch: 50,\n    pan: 0\n};\nvar moveSound = {\n    name: 'Wind1',\n    volume: 90,\n    pitch: 80,\n    pan: 0\n};\nsetTimeout(AudioManager.playSe.bind(AudioManager, boosterSound), delayMs);\nsetTimeout(AudioManager.playSe.bind(AudioManager, moveSound), delayMs);\n\n// Reset Input Cooldown\nthis._inputCooldown = 60;\n\n// Update Booster Pack Count\nvar contents = this._boosterListWindow.contents;\ncontents.clear();\nif (this._totalTimes > 1) {\n    var lh = Window_Base.prototype.lineHeight.call(this);\n    var color1 = 'rgba(0, 0, 0, 0.8)';\n    var color2 = 'rgba(0, 0, 0, 0)';\n    contents.gradientFillRect(0, 0, contents.width, lh, color1, color2);\n    var text = this._packCount + '/' + this._totalTimes;\n    this._boosterListWindow.drawTextEx(text, 40, 0);\n}\n\n// Create Window Countdown Timer\nthis._windowVisibilityCooldown = 180;"
 *
 * @param BoosterSceneUpdatePhase1:func
 * @text JS: Update Phase 1
 * @parent BoosterSceneStartPhase1:func
 * @type note
 * @desc JavaScript code used for the phase 1 updating.
 * @default "// This determines what goes on during phase 1\n// and the transition from phase 1 to phase 2.\n\n// Wait until OK or a mouse button is clicked\nif (this._inputCooldown <= 0 && !this._phase1pressed && (Input.isPressed('ok') || TouchInput.isPressed())) {\n    this._phase1pressed = true;\n    var sound = {\n        name: 'Ice3',\n        volume: 90,\n        pitch: 50,\n        pan: 0\n    };\n    AudioManager.playSe(sound);\n}\n\n// Animation Phase\nif (this._phase1pressed) {\n    // Bloom goes up until it reaches 4.0\n    if (this._bloomFilter.bloomScale < 3) {\n        this._bloomFilter.bloomScale += 0.075;\n        this._bloomFilter.bloomScale = Math.min(3, this._bloomFilter.bloomScale);\n    // Then go to the next phase\n    } else {\n        this.gotoNextPhase();\n    }\n\n// Otherwise reduce bloom to 0\n} else if (this._bloomFilter.bloomScale > 0) {\n    this._bloomFilter.bloomScale -= 0.025;\n    this._bloomFilter.bloomScale = Math.max(0, this._bloomFilter.bloomScale);\n}\n\n// Input Cooldown\nthis._inputCooldown--\n\n// Window Opacity\nif (this._phase1pressed || this._windowVisibilityCooldown-- > 0) {\n    this._bottomLeftWindow.contentsOpacity -= 16;\n    this._bottomRightWindow.contentsOpacity -= 16;\n} else {\n    this._bottomLeftWindow.contentsOpacity += 16;\n    this._bottomRightWindow.contentsOpacity += 16;\n}\nif (!this._phase1pressed && this._windowVisibilityCooldown <= 150) {\n    this._boosterListWindow.contentsOpacity += 8;\n} else {\n    this._boosterListWindow.contentsOpacity -= 8;\n}\n\n// Skip Input\nif (this._inputCooldown <= 0 && !this._phase1pressed && (Input.isPressed('cancel') || TouchInput.isCancelled())) {\n    this._phase1pressed = true;\n    this.startPhaseSkip();\n}"
 *
 * @param BoosterSceneStartPhase2:func
 * @text JS: Start Phase 2
 * @parent BoosterScene
 * @type note
 * @desc JavaScript code used for the start of phase 2.
 * @default "// This is the phase where the cards come out of the\n// Booster Pack and move onto their respective places\n// on the screen while waiting for the player.\n\n// Create a screen flash\nvar flashColor = [\n    255, // red\n    255, // green\n    255, // blue\n    255  // intensity\n];\nvar duration = 180;\n$gameScreen.startFlash(flashColor, duration);\nthis.update();\n\n// Reveal the Booster Background Image\nthis._backgroundParallax.opacity = 255;\n\n// Play Sound Effect\nvar sound = {\n    name: 'Ice2',\n    volume: 90,\n    pitch: 100,\n    pan: 0\n};\nAudioManager.playSe(sound);\n\n// Hide the booster sprite\nthis._boosterSprite.opacity = 0;\n\n// Create move locations for cards\nvar buffer = 72;\nvar baseSprite = this._spriteset._baseSprite;\nvar moveLocations = [];\nfor (var i = 1; i <= this._receivedItems.length; i++) {\n    if (i > this._receivedItems.length / 2) {\n        var j = i - Math.floor(this._receivedItems.length / 2);\n        var x = Graphics.boxWidth * j / Math.ceil((this._receivedItems.length / 2) + 1);\n        var y = Graphics.boxHeight * 1 / 4 + buffer/16;\n    }  else {\n        var x = Graphics.boxWidth * i / Math.floor((this._receivedItems.length / 2) + 1);\n        var y = Graphics.boxHeight * 3 / 4 - buffer/16;\n    }\n    moveLocations.push([x, y]);\n}\n\n// Create new card sprites\nthis._receivedCards = [];\nvar moveDuration = 180;\nvar moveType = 'INOUTBACK';\nvar targetScale = ((Graphics.boxHeight - buffer) / 460) / 2;\nvar targetScale2 = ((Graphics.boxWidth - buffer) / 320) / (Math.ceil(this._receivedItems.length / 2) + 1);\ntargetScale = Math.min(targetScale, targetScale2);\nvar ms = 1000 / 60;\nvar delay = 0;\nfor (var i = 0; i < this._receivedItems.length; i++) {\n    var item = this._receivedItems[i];\n    var card = CardManager.createCard(item.id);\n    card.sprite()._backShowing = true;\n    card.sprite()._auraVisible = Imported.Irina_CardGameCore.RarityAuras;\n    this._receivedCards.push(card);\n    var x = moveLocations[i][0];\n    var y = moveLocations[i][1];\n    setTimeout(card.sprite().startMove.bind(card.sprite(), x, y, moveDuration, moveType), delay);\n    setTimeout(card.sprite().changeScale.bind(card.sprite(), targetScale, moveDuration), delay);\n    var delay2 = delay + Math.ceil(ms * moveDuration) - 500;\n    setTimeout(card.sprite().flip.bind(card.sprite(), 20, false), delay2);\n    moveDuration += 10;\n}\n// Create Phase Information\nthis._phase2pressed = false;\n\n// Reset Input Cooldown\nthis._inputCooldown = 60;\n\n// Create Countdown Timer\nthis._windowVisibilityCooldown = moveDuration + 60;"
 *
 * @param BoosterSceneUpdatePhase2:func
 * @text JS: Update Phase 2
 * @parent BoosterSceneStartPhase2:func
 * @type note
 * @desc JavaScript code used for the phase 2 updating.
 * @default "// This determines what goes on during phase 2\n// and the transition from phase 2 to phase 3.\n\n// Wait until OK or a mouse button is clicked\nif (this._inputCooldown <= 0 && !this._phase2pressed && (Input.isPressed('ok') || TouchInput.isPressed())) {\n    this._phase2pressed = true;\n    var delay = 0;\n    var sound = {\n        name: 'Wind7',\n        volume: 120,\n        pitch: 100,\n        pan: 0\n    }\n    var ms = 1000 / 60;\n    for (var i = 0; i < this._receivedCards.length; i++) {\n        var card = this._receivedCards[i];\n        var x = Graphics.boxWidth * 1.2 + Math.randomInt(100);\n        var y = card.sprite().y + Math.randomInt(100) - Math.randomInt(200);\n        var duration = 120;\n        var moveType = 'INOUTBACK';\n        setTimeout(card.sprite().flip.bind(card.sprite(), 20, false), Math.max(0, delay - 200));\n        setTimeout(card.sprite().startMove.bind(card.sprite(), x, y, duration, moveType), delay);\n        setTimeout(this.disposeCardSprite.bind(this, card), duration * ms + 100);\n        //setTimeout(AudioManager.playSe.bind(AudioManager, sound), delay + 100);\n        delay += 100;\n    }\n    this.gotoNextPhase();\n}\n\n// Reduce Bloom from before\nif (this._bloomFilter.bloomScale > 0) {\n    this._bloomFilter.bloomScale -= 0.025;\n    this._bloomFilter.bloomScale = Math.max(0, this._bloomFilter.bloomScale);\n}\n\n// Input Cooldown\nthis._inputCooldown--\n\n// Window Opacity\nif (this._phase2pressed || this._windowVisibilityCooldown-- > 0) {\n    this._bottomLeftWindow.contentsOpacity -= 16;\n    this._bottomRightWindow.contentsOpacity -= 16;\n} else {\n    this._bottomLeftWindow.contentsOpacity += 16;\n    this._bottomRightWindow.contentsOpacity += 16;\n}\nthis._boosterListWindow.contentsOpacity -= 16;\n\n// Skip Input\nif (this._inputCooldown <= 0 && !this._phase2pressed && (Input.isPressed('cancel') || TouchInput.isCancelled())) {\n    this._phase2pressed = true;\n    this.startPhaseSkip();\n}"
 *
 * @param BoosterSceneStartPhase3:func
 * @text JS: Start Phase 3
 * @parent BoosterScene
 * @type note
 * @desc JavaScript code used for the start of phase 3.
 * @default "// This is the phase where the game checks if there\n// are more booster packs left to be opened. If there\n// are, then the phases reset back to 1. Otherwise,\n// it goes onto the end phase which displays a list of\n// all the cards the player received this session.\n\n// Reset Phases if there's more boosters left\nif (this._times > 0) return this.resetPhases();\n\n// Otherwise open up a list of all the cards obtained this session\nvar delay = 1000 / 60 * (this._fromSkip ? 30 : 120);\nthis._active = false;\nsetTimeout(this.openCardBoosterWindow.bind(this, this._allItems, this._totalTimes), delay);\n\n// Create Countdown Timer\nthis._windowVisibilityCooldown = Infinity;"
 *
 * @param BoosterSceneUpdatePhase3:func
 * @text JS: Update Phase 3
 * @parent BoosterSceneStartPhase3:func
 * @type note
 * @desc JavaScript code used for the phase 3 updating.
 * @default "// This determines what goes on during phase 3\n// and the transition from phase 3 to finish.\n\n// Bring bloom level to 0\nif (this._bloomFilter.bloomScale > 0) {\n    this._bloomFilter.bloomScale -= 0.025;\n    this._bloomFilter.bloomScale = Math.max(0, this._bloomFilter.bloomScale);\n}\n\n// Input Cooldown\nthis._inputCooldown--\n\n// Window Opacity\nthis._bottomLeftWindow.contentsOpacity -= 16;\nthis._bottomRightWindow.contentsOpacity -= 16;\nthis._boosterListWindow.contentsOpacity -= 16;"
 *
 * @param BoosterSceneUpdatePhaseSkip:func
 * @text JS: Update Phase Skip
 * @parent BoosterSceneStartPhase3:func
 * @type note
 * @desc JavaScript code used for the phase skip updating.
 * @default "// This is the transition that occurs while\n// skipping forward to phase 3\n\n// Window Opacity\nthis._bottomLeftWindow.contentsOpacity -= 16;\nthis._bottomRightWindow.contentsOpacity -= 16;\nthis._boosterListWindow.contentsOpacity -= 16;"
 *
 * @param BoosterSceneUpdatePhaseFinish:func
 * @text JS: Update Phase Finish
 * @parent BoosterSceneStartPhase3:func
 * @type note
 * @desc JavaScript code used for the finishing phase updating.
 * @default "// This is the transition towards leaving\n// the booster scene\n\n// Fade out the background parallax background\nthis._backgroundParallax.opacity -= 255 / 60;\n\n// Window Opacity\nthis._bottomLeftWindow.contentsOpacity -= 16;\nthis._bottomRightWindow.contentsOpacity -= 16;\nthis._boosterListWindow.contentsOpacity -= 16;"
 *
 * @param
 * @param AnimateOption
 * @text Animate Card Option
 * @default ------------------------------------
 *
 * @param AnimateCardOptionShow:eval
 * @text Show Option
 * @parent AnimateOption
 * @type boolean
 * @on Show Option
 * @off Don't Show Option
 * @desc Shows the Animate Card Option in the options menu.
 * @default true
 *
 * @param AnimateCardOptionDefault:eval
 * @text Default Setting
 * @parent AnimateOption
 * @type boolean
 * @on Animated
 * @off Static
 * @desc Show card animations by default
 * @default true
 *
 * @param AnimateCardOptionText:str
 * @text Text
 * @parent AnimateOption
 * @desc Text displayed in the options menu.
 * @default Animate Cards
 *
 * @param
 * @param BoosterOption
 * @text Booster Option Settings
 * @default ------------------------------------
 *
 * @param BoosterOptionShow:eval
 * @text Show Option
 * @parent BoosterOption
 * @type boolean
 * @on Show Option
 * @off Don't Show Option
 * @desc Shows the Booster Animation Option in the options menu.
 * @default true
 *
 * @param BoosterOptionDefault:eval
 * @text Default Setting
 * @parent BoosterOption
 * @type boolean
 * @on Full Animation
 * @off Quick Version
 * @desc Default animation to be played when opening boosters from the item menu.
 * @default true
 *
 * @param BoosterOptionText:str
 * @text Text
 * @parent BoosterOption
 * @desc Text displayed in the options menu.
 * @default Booster Animation
 *
 * @param 
 *
 */
 /*~struct~CardFrontTemplate:
 * @param Name:str
 * @text Name
 * @desc The name of this template. Used in code, too.
 * @default None
 *
 * @param ImgFile:str
 * @text Image File
 * @type file
 * @dir img/pictures/
 * @desc The card image used if this is selected as the template.
 * @default CardNone
 *
 * @param IconIndex:num
 * @text Icon Index
 * @desc The icon associated with this template.
 * @default 0
 *
 * @param AnimationId:num
 * @text Attack Animation
 * @type animation
 * @desc The attack animation used by this template type if the item's animation is set to 'None'.
 * @default 1
 *
 * @param
 * 
 * @param DrawCode:func
 * @text JS: Draw Code
 * @type note
 * @desc Code used to draw numbers and data on the card's draw layer.
 * @default "// Setup Bitmap\nvar bitmap = this._cardFrontDrawSprite.bitmap;\nvar holoBitmap = this._cardFrontHoloDrawSprite.bitmap;\nbitmap.clear();\nholoBitmap.clear();\n\n// Setup Colors\nvar white = 'rgba(255, 255, 255)';\nvar red   = 'rgba(255, 128, 128)';\nvar green = 'rgba( 64, 255,  64)';\nvar black = 'rgba(  0,   0,   0)';\nvar holo  = 'rgba(255, 192, 192)';\nvar gray  = 'rgba(  0,   0,   0, 0.5)';\n\n// Name\nvar text = this._card.name();\nvar x = 60;\nvar y = 4;\nvar w = bitmap.width - x - 28;\nvar h = 48;\nvar rainbow = this._card.rarityColor().match(/(?:rainbow|holo)/i);\nvar target = (rainbow) ? holoBitmap : bitmap;\ntarget.fontFace = 'Arial';\ntarget.fontSize = 28;\nif (text === this._card._original._name) {\n  target.textColor = (rainbow) ? holo : this._card.rarityColor();\n} else {\n  target.textColor = green;\n}\ntarget.outlineColor = gray;\ntarget.drawText(text, x, y, w, h, 'left');\n\n// Level\nvar level = this._card.level();\nvar x = 4;\nvar y = 56;\nvar w = 48;\nvar h = 48;\nbitmap.fontFace = 'Times New Roman';\nbitmap.fontSize = 28;\nif (level > this._card._original._level) {\n  bitmap.textColor = green;\n} else if (level < this._card._original._level) {\n  bitmap.textColor = red;\n} else {\n  bitmap.textColor = white;\n}\nbitmap.outlineColor = black;\nbitmap.drawText(level, x, y, w, h, 'center');\n\n// Power\nvar power = this._card.power();\nvar x = 4;\nvar y = 108;\nvar w = 48;\nvar h = 48;\nbitmap.fontFace = 'Times New Roman';\nbitmap.fontSize = 28;\nif (power > this._card._original._power) {\n  bitmap.textColor = green;\n} else if (power < this._card._original._power) {\n  bitmap.textColor = red;\n} else {\n  bitmap.textColor = white;\n}\nbitmap.outlineColor = black;\nbitmap.drawText(power, x, y, w, h, 'center');\n\nif (!$showCardHealth) return;\n\n// Health\nvar healthBitmap = ImageManager.loadPicture('CardHeartIcon');\nhealthBitmap.addLoadListener(function(bitmap, healthBitmap) {\n\nvar health = this._card.currentHealth();\nvar maxHealth = this._card.maxHealth();\nvar x = 4;\nvar y = 160;\nvar w = 48;\nvar h = 48;\nbitmap.blt(healthBitmap, 0, 0, healthBitmap.width, healthBitmap.height, x, y);\nbitmap.fontFace = 'Times New Roman';\nbitmap.fontSize = 28;\nif (health > maxHealth) {\n  bitmap.textColor = green;\n} else if (health < maxHealth && health <= 1) {\n  bitmap.textColor = red;\n} else {\n  bitmap.textColor = white;\n}\nbitmap.outlineColor = black;\nbitmap.drawText(health, x, y, w, h, 'center');\n\n}.bind(this, bitmap, healthBitmap));"
 *
 * @param
 *
 * @param TextboxX:num
 * @text Text Box X
 * @desc X value of the text box on the card.
 * @default 56
 *
 * @param TextboxY:num
 * @text Text Box Y
 * @desc Y value of the text box on the card.
 * @default 356
 *
 * @param TextboxWidth:num
 * @text Text Box Width
 * @desc Width value of the text box on the card.
 * @default 238
 *
 * @param TextboxHeight:num
 * @text Text Box Height
 * @desc Height value of the text box on the card.
 * @default 100
 * 
 */
//=============================================================================

var pluginData=$plugins.filter(function(p){return p.description.contains("<CardGameCore>")})[0];var Imported=Imported||{};Imported.Irina_CardGameCore={};(function(pluginData){var plugin="Irina_CardGameCore";var convertParams=function(obj,data){for(var key in data){if(key.match(/(.*):NUM/i))obj[String(RegExp.$1)]=Number(data[key])||0;if(key.match(/(.*):STR/i))obj[String(RegExp.$1)]=String(data[key])||"";if(key.match(/(.*):ARRAYSTR/i))obj[String(RegExp.$1)]=JSON.parse(pluginData.parameters[key]);if(key.match(/(.*):EVAL/i))obj[String(RegExp.$1)]=eval(data[key]);if(key.match(/(.*):JSON/i))obj[String(RegExp.$1)]=JSON.parse(data[key]);if(key.match(/(.*):FUNC/i))obj[String(RegExp.$1)]=new Function(JSON.parse(data[key]));if(key.match(/(.*):ARRAYSTRUCT/i)){var array=JSON.parse(pluginData.parameters[key]);obj[String(RegExp.$1)]=array;for(var i=0;i<array.length;i++){var newData=JSON.parse(array[i]);array[i]={};convertParams(array[i],newData)}}}};convertParams(Imported[plugin],pluginData.parameters);Imported.Irina_CardGameCore.CardFrontRarityColors.unshift("rgba(255,255,255)")})(pluginData);(function(){Imported.Irina_CardGameCore.TemplateList={};for(var i=0;i<Imported.Irina_CardGameCore.Templates.length;i++){var template=Imported.Irina_CardGameCore.Templates[i];var name=template.Name.toUpperCase();Imported.Irina_CardGameCore.TemplateList[name]=template}})();var __filters=function(e,t){"use strict";var n="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",r="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n",o=function(e){function t(t){e.call(this,n,r),Object.assign(this,{gamma:1,saturation:1,contrast:1,brightness:1,red:1,green:1,blue:1,alpha:1},t)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.apply=function(e,t,n,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},t}(t.Filter),i=n,l="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}",s="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n",a=function(e){function n(n,r,o){void 0===n&&(n=4),void 0===r&&(r=3),void 0===o&&(o=!1),e.call(this,i,o?s:l),this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new t.Point,this.pixelSize=1,this._clamp=o,this._kernels=null,Array.isArray(n)?this.kernels=n:(this._blur=n,this.quality=r)}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={kernels:{configurable:!0},clamp:{configurable:!0},pixelSize:{configurable:!0},quality:{configurable:!0},blur:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o,i=this.pixelSize.x/t.size.width,l=this.pixelSize.y/t.size.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,t,n,r);else{for(var s,a=e.getRenderTarget(!0),u=t,c=a,f=this._quality-1,h=0;h<f;h++)o=this._kernels[h]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,c,!0),s=u,u=c,c=s;o=this._kernels[f]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,n,r),e.returnRenderTarget(a)}},n.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(e>0)for(var r=e,o=e/t,i=1;i<t;i++)r-=o,n.push(r);this._kernels=n},r.kernels.get=function(){return this._kernels},r.kernels.set=function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},r.clamp.get=function(){return this._clamp},r.pixelSize.set=function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof t.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},r.pixelSize.get=function(){return this._pixelSize},r.quality.get=function(){return this._quality},r.quality.set=function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},r.blur.get=function(){return this._blur},r.blur.set=function(e){this._blur=e,this._generateKernels()},Object.defineProperties(n.prototype,r),n}(t.Filter),u=n,c="\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n",f=function(e){function t(t){void 0===t&&(t=.5),e.call(this,u,c),this.threshold=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={threshold:{configurable:!0}};return n.threshold.get=function(){return this.uniforms.threshold},n.threshold.set=function(e){this.uniforms.threshold=e},Object.defineProperties(t.prototype,n),t}(t.Filter),h="uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n",p=function(e){function n(n){e.call(this,u,h),"number"==typeof n&&(n={threshold:n}),n=Object.assign({threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:t.settings.RESOLUTION},n),this.bloomScale=n.bloomScale,this.brightness=n.brightness;var r=n.kernels,o=n.blur,i=n.quality,l=n.pixelSize,s=n.resolution;this._extractFilter=new f(n.threshold),this._extractFilter.resolution=s,this._blurFilter=r?new a(r):new a(o,i),this.pixelSize=l,this.resolution=s}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={resolution:{configurable:!0},threshold:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return n.prototype.apply=function(e,t,n,r,o){var i=e.getRenderTarget(!0);this._extractFilter.apply(e,t,i,!0,o);var l=e.getRenderTarget(!0);this._blurFilter.apply(e,i,l,!0,o),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=l,e.applyFilter(this,t,n,r),e.returnRenderTarget(l),e.returnRenderTarget(i)},r.resolution.get=function(){return this._resolution},r.resolution.set=function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},r.threshold.get=function(){return this._extractFilter.threshold},r.threshold.set=function(e){this._extractFilter.threshold=e},r.kernels.get=function(){return this._blurFilter.kernels},r.kernels.set=function(e){this._blurFilter.kernels=e},r.blur.get=function(){return this._blurFilter.blur},r.blur.set=function(e){this._blurFilter.blur=e},r.quality.get=function(){return this._blurFilter.quality},r.quality.set=function(e){this._blurFilter.quality=e},r.pixelSize.get=function(){return this._blurFilter.pixelSize},r.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(n.prototype,r),n}(t.Filter),d=n,m="varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}",g=function(e){function t(t){void 0===t&&(t=8),e.call(this,d,m),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.pixelSize},n.size.set=function(e){this.uniforms.pixelSize=e},Object.defineProperties(t.prototype,n),t}(t.Filter),v=n,x="precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n",y=function(e){function n(t){void 0===t&&(t={}),e.call(this,v,x),this.uniforms.lightColor=new Float32Array(3),this.uniforms.shadowColor=new Float32Array(3),t=Object.assign({rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),this.rotation=t.rotation,this.thickness=t.thickness,this.lightColor=t.lightColor,this.lightAlpha=t.lightAlpha,this.shadowColor=t.shadowColor,this.shadowAlpha=t.shadowAlpha}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={rotation:{configurable:!0},thickness:{configurable:!0},lightColor:{configurable:!0},lightAlpha:{configurable:!0},shadowColor:{configurable:!0},shadowAlpha:{configurable:!0}};return n.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},r.rotation.get=function(){return this._angle/t.DEG_TO_RAD},r.rotation.set=function(e){this._angle=e*t.DEG_TO_RAD,this._updateTransform()},r.thickness.get=function(){return this._thickness},r.thickness.set=function(e){this._thickness=e,this._updateTransform()},r.lightColor.get=function(){return t.utils.rgb2hex(this.uniforms.lightColor)},r.lightColor.set=function(e){t.utils.hex2rgb(e,this.uniforms.lightColor)},r.lightAlpha.get=function(){return this.uniforms.lightAlpha},r.lightAlpha.set=function(e){this.uniforms.lightAlpha=e},r.shadowColor.get=function(){return t.utils.rgb2hex(this.uniforms.shadowColor)},r.shadowColor.set=function(e){t.utils.hex2rgb(e,this.uniforms.shadowColor)},r.shadowAlpha.get=function(){return this.uniforms.shadowAlpha},r.shadowAlpha.set=function(e){this.uniforms.shadowAlpha=e},Object.defineProperties(n.prototype,r),n}(t.Filter),_=t.filters,b=_.BlurXFilter,C=_.BlurYFilter,S=_.AlphaFilter,F=function(e){function n(n,r,o,i){var l,s;void 0===n&&(n=2),void 0===r&&(r=4),void 0===o&&(o=t.settings.RESOLUTION),void 0===i&&(i=5),e.call(this),"number"==typeof n?(l=n,s=n):n instanceof t.Point?(l=n.x,s=n.y):Array.isArray(n)&&(l=n[0],s=n[1]),this.blurXFilter=new b(l,r,o,i),this.blurYFilter=new C(s,r,o,i),this.blurYFilter.blendMode=t.BLEND_MODES.SCREEN,this.defaultFilter=new S}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={blur:{configurable:!0},blurX:{configurable:!0},blurY:{configurable:!0}};return n.prototype.apply=function(e,t,n){var r=e.getRenderTarget(!0);this.defaultFilter.apply(e,t,n),this.blurXFilter.apply(e,t,r),this.blurYFilter.apply(e,r,n),e.returnRenderTarget(r)},r.blur.get=function(){return this.blurXFilter.blur},r.blur.set=function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},r.blurX.get=function(){return this.blurXFilter.blur},r.blurX.set=function(e){this.blurXFilter.blur=e},r.blurY.get=function(){return this.blurYFilter.blur},r.blurY.set=function(e){this.blurYFilter.blur=e},Object.defineProperties(n.prototype,r),n}(t.Filter),z=n,A="uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n",w=function(e){function t(t,n,r){e.call(this,z,A),this.uniforms.dimensions=new Float32Array(2),this.center=t||[.5,.5],this.radius=n||100,this.strength=r||1}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={radius:{configurable:!0},strength:{configurable:!0},center:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,e.applyFilter(this,t,n,r)},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},Object.defineProperties(t.prototype,n),t}(t.Filter),T=n,D="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform sampler2D colorMap;\n\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    float sliceIndex = color.b * (_size - 1.0);\n    float zSlice0 = floor(sliceIndex);\n    float zSlice1 = ceil(sliceIndex);\n\n    float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n    float s0 = xOffset + zSlice0 * _sliceSize;\n    float s1 = xOffset + zSlice1 * _sliceSize;\n    vec4 slice0Color = texture2D(colorMap, vec2(s0, color.g));\n    vec4 slice1Color = texture2D(colorMap, vec2(s1, color.g));\n    vec4 adjusted = mix(slice0Color, slice1Color, fract(sliceIndex));\n\n    gl_FragColor = mix(color, adjusted, _mix);\n}\n",O=function(e){function n(t,n,r){void 0===n&&(n=!1),void 0===r&&(r=1),e.call(this,T,D),this._size=0,this._sliceSize=0,this._slicePixelSize=0,this._sliceInnerSize=0,this._scaleMode=null,this._nearest=!1,this.nearest=n,this.mix=r,this.colorMap=t}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={colorSize:{configurable:!0},colorMap:{configurable:!0},nearest:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms._mix=this.mix,e.applyFilter(this,t,n,r)},r.colorSize.get=function(){return this._size},r.colorMap.get=function(){return this._colorMap},r.colorMap.set=function(e){e instanceof t.Texture||(e=t.Texture.from(e)),e&&e.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e},r.nearest.get=function(){return this._nearest},r.nearest.set=function(e){this._nearest=e,this._scaleMode=e?t.SCALE_MODES.NEAREST:t.SCALE_MODES.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=!1,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},n.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},n.prototype.destroy=function(t){this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},Object.defineProperties(n.prototype,r),n}(t.Filter),P=n,M="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n",R=function(e){function n(t,n,r){void 0===t&&(t=16711680),void 0===n&&(n=0),void 0===r&&(r=.4),e.call(this,P,M),this.uniforms.originalColor=new Float32Array(3),this.uniforms.newColor=new Float32Array(3),this.originalColor=t,this.newColor=n,this.epsilon=r}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={originalColor:{configurable:!0},newColor:{configurable:!0},epsilon:{configurable:!0}};return r.originalColor.set=function(e){var n=this.uniforms.originalColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._originalColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._originalColor=t.utils.rgb2hex(n))},r.originalColor.get=function(){return this._originalColor},r.newColor.set=function(e){var n=this.uniforms.newColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._newColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._newColor=t.utils.rgb2hex(n))},r.newColor.get=function(){return this._newColor},r.epsilon.set=function(e){this.uniforms.epsilon=e},r.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(n.prototype,r),n}(t.Filter),j=n,L="precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",k=function(e){function t(t,n,r){e.call(this,j,L),this.uniforms.texelSize=new Float32Array(9),this.matrix=t,this.width=n,this.height=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={matrix:{configurable:!0},width:{configurable:!0},height:{configurable:!0}};return n.matrix.get=function(){return this.uniforms.matrix},n.matrix.set=function(e){this.uniforms.matrix=new Float32Array(e)},n.width.get=function(){return 1/this.uniforms.texelSize[0]},n.width.set=function(e){this.uniforms.texelSize[0]=1/e},n.height.get=function(){return 1/this.uniforms.texelSize[1]},n.height.set=function(e){this.uniforms.texelSize[1]=1/e},Object.defineProperties(t.prototype,n),t}(t.Filter),I=n,E="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n",B=function(e){function t(){e.call(this,I,E)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(t.Filter),X=n,q="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    vec2 dir = vec2(coord - vec2(0.5, 0.5));\n\n    float _c = curvature > 0. ? curvature : 1.;\n    float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n    vec2 uv = dir * k;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0) {\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n",N=function(e){function t(t){e.call(this,X,q),this.uniforms.dimensions=new Float32Array(2),this.time=0,this.seed=0,Object.assign(this,{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={curvature:{configurable:!0},lineWidth:{configurable:!0},lineContrast:{configurable:!0},verticalLine:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.curvature.set=function(e){this.uniforms.curvature=e},n.curvature.get=function(){return this.uniforms.curvature},n.lineWidth.set=function(e){this.uniforms.lineWidth=e},n.lineWidth.get=function(){return this.uniforms.lineWidth},n.lineContrast.set=function(e){this.uniforms.lineContrast=e},n.lineContrast.get=function(){return this.uniforms.lineContrast},n.verticalLine.set=function(e){this.uniforms.verticalLine=e},n.verticalLine.get=function(){return this.uniforms.verticalLine},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),G=n,K="precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",Y=function(e){function t(t,n){void 0===t&&(t=1),void 0===n&&(n=5),e.call(this,G,K),this.scale=t,this.angle=n}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={scale:{configurable:!0},angle:{configurable:!0}};return n.scale.get=function(){return this.uniforms.scale},n.scale.set=function(e){this.uniforms.scale=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),W=n,Q="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n\n    // Un-premultiply alpha before applying the color\n    if (sample.a > 0.0) {\n        sample.rgb /= sample.a;\n    }\n\n    // Premultiply alpha again\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}",U=function(e){function n(n){n&&n.constructor!==Object&&(console.warn("DropShadowFilter now uses options instead of (rotation, distance, blur, color, alpha)"),n={rotation:n},void 0!==arguments[1]&&(n.distance=arguments[1]),void 0!==arguments[2]&&(n.blur=arguments[2]),void 0!==arguments[3]&&(n.color=arguments[3]),void 0!==arguments[4]&&(n.alpha=arguments[4])),n=Object.assign({rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:t.settings.RESOLUTION},n),e.call(this);var r=n.kernels,o=n.blur,i=n.quality,l=n.pixelSize,s=n.resolution;this._tintFilter=new t.Filter(W,Q),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.resolution=s,this._blurFilter=r?new a(r):new a(o,i),this.pixelSize=l,this.resolution=s,this.targetTransform=new t.Matrix;var u=n.shadowOnly,c=n.rotation,f=n.distance,h=n.alpha,p=n.color;this.shadowOnly=u,this.rotation=c,this.distance=f,this.alpha=h,this.color=p,this._updatePadding()}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={resolution:{configurable:!0},distance:{configurable:!0},rotation:{configurable:!0},alpha:{configurable:!0},color:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=e.getRenderTarget();o.transform=this.targetTransform,this._tintFilter.apply(e,t,o,!0),o.transform=null,this._blurFilter.apply(e,o,n),!0!==this.shadowOnly&&e.applyFilter(this,t,n,r),e.returnRenderTarget(o)},n.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},n.prototype._updateTargetTransform=function(){this.targetTransform.tx=this.distance*Math.cos(this.angle),this.targetTransform.ty=this.distance*Math.sin(this.angle)},r.resolution.get=function(){return this._resolution},r.resolution.set=function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},r.distance.get=function(){return this._distance},r.distance.set=function(e){this._distance=e,this._updatePadding(),this._updateTargetTransform()},r.rotation.get=function(){return this.angle/t.DEG_TO_RAD},r.rotation.set=function(e){this.angle=e*t.DEG_TO_RAD,this._updateTargetTransform()},r.alpha.get=function(){return this._tintFilter.uniforms.alpha},r.alpha.set=function(e){this._tintFilter.uniforms.alpha=e},r.color.get=function(){return t.utils.rgb2hex(this._tintFilter.uniforms.color)},r.color.set=function(e){t.utils.hex2rgb(e,this._tintFilter.uniforms.color)},r.kernels.get=function(){return this._blurFilter.kernels},r.kernels.set=function(e){this._blurFilter.kernels=e},r.blur.get=function(){return this._blurFilter.blur},r.blur.set=function(e){this._blurFilter.blur=e,this._updatePadding()},r.quality.get=function(){return this._blurFilter.quality},r.quality.set=function(e){this._blurFilter.quality=e},r.pixelSize.get=function(){return this._blurFilter.pixelSize},r.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(n.prototype,r),n}(t.Filter),Z=n,V="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n",H=function(e){function t(t){void 0===t&&(t=5),e.call(this,Z,V),this.strength=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={strength:{configurable:!0}};return n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},Object.defineProperties(t.prototype,n),t}(t.Filter),$=n,J="// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n",ee=function(e){function n(n){void 0===n&&(n={}),e.call(this,$,J),this.uniforms.dimensions=new Float32Array(2),n=Object.assign({slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},n),this.direction=n.direction,this.red=n.red,this.green=n.green,this.blue=n.blue,this.offset=n.offset,this.fillMode=n.fillMode,this.average=n.average,this.seed=n.seed,this.minSize=n.minSize,this.sampleSize=n.sampleSize,this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=t.Texture.fromCanvas(this._canvas,t.SCALE_MODES.NEAREST),this._slices=0,this.slices=n.slices}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={sizes:{configurable:!0},offsets:{configurable:!0},slices:{configurable:!0},direction:{configurable:!0},red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=t.sourceFrame.width,i=t.sourceFrame.height;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,this.uniforms.aspect=i/o,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,n,r)},n.prototype._randomizeSizes=function(){var e=this._sizes,t=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var o=this._slices,i=1,l=0;l<t;l++){var s=i/(o-l),a=Math.max(s*(1-.6*Math.random()),r);e[l]=a,i-=a}e[t]=i}else{for(var u=1,c=Math.sqrt(1/this._slices),f=0;f<t;f++){var h=Math.max(c*u*Math.random(),r);e[f]=h,u-=h}e[t]=u}this.shuffle()},n.prototype.shuffle=function(){for(var e=this._sizes,t=this._slices-1;t>0;t--){var n=Math.random()*t>>0,r=e[t];e[t]=e[n],e[n]=r}},n.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},n.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},n.prototype.redraw=function(){var e,t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);for(var o=0,i=0;i<this._slices;i++){e=Math.floor(256*this._offsets[i]);var l=this._sizes[i]*t,s=e>0?e:0,a=e<0?-e:0;r.fillStyle="rgba("+s+", "+a+", 0, 1)",r.fillRect(0,o>>0,t,l+1>>0),o+=l}n.baseTexture.emit("update",n.baseTexture),this.uniforms.displacementMap=n},r.sizes.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._sizes[n]=e[n]},r.sizes.get=function(){return this._sizes},r.offsets.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._offsets[n]=e[n]},r.offsets.get=function(){return this._offsets},r.slices.get=function(){return this._slices},r.slices.set=function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},r.direction.get=function(){return this._direction},r.direction.set=function(e){if(this._direction!==e){this._direction=e;var n=e*t.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},r.red.get=function(){return this.uniforms.red},r.red.set=function(e){this.uniforms.red=e},r.green.get=function(){return this.uniforms.green},r.green.set=function(e){this.uniforms.green=e},r.blue.get=function(){return this.uniforms.blue},r.blue.set=function(e){this.uniforms.blue=e},n.prototype.destroy=function(){this.texture.destroy(!0),this.texture=null,this._canvas=null,this.red=null,this.green=null,this.blue=null,this._sizes=null,this._offsets=null},Object.defineProperties(n.prototype,r),n}(t.Filter);ee.TRANSPARENT=0,ee.ORIGINAL=1,ee.LOOP=2,ee.CLAMP=3,ee.MIRROR=4;var te=n,ne="varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float distance;\nuniform float outerStrength;\nuniform float innerStrength;\nuniform vec4 glowColor;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nconst float PI = 3.14159265358979323846264;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float totalAlpha = 0.0;\n    float maxTotalAlpha = 0.0;\n    float cosAngle;\n    float sinAngle;\n    vec2 displaced;\n    for (float angle = 0.0; angle <= PI * 2.0; angle += %QUALITY_DIST%) {\n       cosAngle = cos(angle);\n       sinAngle = sin(angle);\n       for (float curDistance = 1.0; curDistance <= %DIST%; curDistance++) {\n           displaced.x = vTextureCoord.x + cosAngle * curDistance * px.x;\n           displaced.y = vTextureCoord.y + sinAngle * curDistance * px.y;\n           curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n           totalAlpha += (distance - curDistance) * curColor.a;\n           maxTotalAlpha += (distance - curDistance);\n       }\n    }\n    maxTotalAlpha = max(maxTotalAlpha, 0.0001);\n\n    ownColor.a = max(ownColor.a, 0.0001);\n    ownColor.rgb = ownColor.rgb / ownColor.a;\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha)  * outerStrength * (1. - ownColor.a);\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;\n    float resultAlpha = (ownColor.a + outerGlowAlpha);\n    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);\n}\n",re=function(e){function n(t,n,r,o,i){void 0===t&&(t=10),void 0===n&&(n=4),void 0===r&&(r=0),void 0===o&&(o=16777215),void 0===i&&(i=.1),e.call(this,te,ne.replace(/%QUALITY_DIST%/gi,""+(1/i/t).toFixed(7)).replace(/%DIST%/gi,""+t.toFixed(7))),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.distance=t,this.color=o,this.outerStrength=n,this.innerStrength=r}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={color:{configurable:!0},distance:{configurable:!0},outerStrength:{configurable:!0},innerStrength:{configurable:!0}};return r.color.get=function(){return t.utils.rgb2hex(this.uniforms.glowColor)},r.color.set=function(e){t.utils.hex2rgb(e,this.uniforms.glowColor)},r.distance.get=function(){return this.uniforms.distance},r.distance.set=function(e){this.uniforms.distance=e},r.outerStrength.get=function(){return this.uniforms.outerStrength},r.outerStrength.set=function(e){this.uniforms.outerStrength=e},r.innerStrength.get=function(){return this.uniforms.innerStrength},r.innerStrength.set=function(e){this.uniforms.innerStrength=e},Object.defineProperties(n.prototype,r),n}(t.Filter),oe=n,ie="vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n",le="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n}\n",se=function(e){function n(n){e.call(this,oe,le.replace("${perlin}",ie)),this.uniforms.dimensions=new Float32Array(2),"number"==typeof n&&(console.warn("GodrayFilter now uses options instead of (angle, gain, lacunarity, time)"),n={angle:n},void 0!==arguments[1]&&(n.gain=arguments[1]),void 0!==arguments[2]&&(n.lacunarity=arguments[2]),void 0!==arguments[3]&&(n.time=arguments[3])),n=Object.assign({angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0]},n),this._angleLight=new t.Point,this.angle=n.angle,this.gain=n.gain,this.lacunarity=n.lacunarity,this.parallel=n.parallel,this.center=n.center,this.time=n.time}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={angle:{configurable:!0},gain:{configurable:!0},lacunarity:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=t.sourceFrame,i=o.width,l=o.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},r.angle.get=function(){return this._angle},r.angle.set=function(e){this._angle=e;var n=e*t.DEG_TO_RAD;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},r.gain.get=function(){return this.uniforms.gain},r.gain.set=function(e){this.uniforms.gain=e},r.lacunarity.get=function(){return this.uniforms.lacunarity},r.lacunarity.set=function(e){this.uniforms.lacunarity=e},Object.defineProperties(n.prototype,r),n}(t.Filter),ae=n,ue="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n",ce=function(e){function n(n,r,o){void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=0),e.call(this,ae,ue),this.uniforms.uVelocity=new Float32Array(2),this._velocity=new t.ObservablePoint(this.velocityChanged,this),this.velocity=n,this.kernelSize=r,this.offset=o}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={velocity:{configurable:!0},offset:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=this.velocity,i=o.x,l=o.y;this.uniforms.uKernelSize=0!==i||0!==l?this.kernelSize:0,e.applyFilter(this,t,n,r)},r.velocity.set=function(e){Array.isArray(e)?this._velocity.set(e[0],e[1]):(e instanceof t.Point||e instanceof t.ObservablePoint)&&this._velocity.copy(e)},r.velocity.get=function(){return this._velocity},n.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y},r.offset.set=function(e){this.uniforms.uOffset=e},r.offset.get=function(){return this.uniforms.uOffset},Object.defineProperties(n.prototype,r),n}(t.Filter),fe=n,he="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n",pe=function(e){function n(t,n,r){void 0===n&&(n=.05),void 0===r&&(r=null),r=r||t.length,e.call(this,fe,he.replace(/%maxColors%/g,r)),this.epsilon=n,this._maxColors=r,this._replacements=null,this.uniforms.originalColors=new Float32Array(3*r),this.uniforms.targetColors=new Float32Array(3*r),this.replacements=t}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={replacements:{configurable:!0},maxColors:{configurable:!0},epsilon:{configurable:!0}};return r.replacements.set=function(e){var n=this.uniforms.originalColors,r=this.uniforms.targetColors,o=e.length;if(o>this._maxColors)throw"Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")";n[3*o]=-1;for(var i=0;i<o;i++){var l=e[i],s=l[0];"number"==typeof s?s=t.utils.hex2rgb(s):l[0]=t.utils.rgb2hex(s),n[3*i]=s[0],n[3*i+1]=s[1],n[3*i+2]=s[2];var a=l[1];"number"==typeof a?a=t.utils.hex2rgb(a):l[1]=t.utils.rgb2hex(a),r[3*i]=a[0],r[3*i+1]=a[1],r[3*i+2]=a[2]}this._replacements=e},r.replacements.get=function(){return this._replacements},n.prototype.refresh=function(){this.replacements=this._replacements},r.maxColors.get=function(){return this._maxColors},r.epsilon.set=function(e){this.uniforms.epsilon=e},r.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(n.prototype,r),n}(t.Filter),de=n,me="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n",ge=function(e){function t(t,n){void 0===n&&(n=0),e.call(this,de,me),this.uniforms.dimensions=new Float32Array(2),"number"==typeof t?(this.seed=t,t=null):this.seed=n,Object.assign(this,{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={sepia:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},scratch:{configurable:!0},scratchDensity:{configurable:!0},scratchWidth:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,n,r)},n.sepia.set=function(e){this.uniforms.sepia=e},n.sepia.get=function(){return this.uniforms.sepia},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.scratch.set=function(e){this.uniforms.scratch=e},n.scratch.get=function(){return this.uniforms.scratch},n.scratchDensity.set=function(e){this.uniforms.scratchDensity=e},n.scratchDensity.get=function(){return this.uniforms.scratchDensity},n.scratchWidth.set=function(e){this.uniforms.scratchWidth=e},n.scratchWidth.get=function(){return this.uniforms.scratchWidth},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),ve=n,xe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n",ye=function(e){function n(t,r,o){void 0===t&&(t=1),void 0===r&&(r=0),void 0===o&&(o=.1);var i=Math.max(o*n.MAX_SAMPLES,n.MIN_SAMPLES),l=(2*Math.PI/i).toFixed(7);e.call(this,ve,xe.replace(/\$\{angleStep\}/,l)),this.uniforms.thickness=new Float32Array([0,0]),this.thickness=t,this.uniforms.outlineColor=new Float32Array([0,0,0,1]),this.color=r,this.quality=o}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={color:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms.thickness[0]=this.thickness/t.size.width,this.uniforms.thickness[1]=this.thickness/t.size.height,e.applyFilter(this,t,n,r)},r.color.get=function(){return t.utils.rgb2hex(this.uniforms.outlineColor)},r.color.set=function(e){t.utils.hex2rgb(e,this.uniforms.outlineColor)},Object.defineProperties(n.prototype,r),n}(t.Filter);ye.MIN_SAMPLES=1,ye.MAX_SAMPLES=100;var _e=n,be="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n",Ce=function(e){function t(t){void 0===t&&(t=10),e.call(this,_e,be),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.size},n.size.set=function(e){"number"==typeof e&&(e=[e,e]),this.uniforms.size=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Se=n,Fe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n",ze=function(e){function t(t,n,r,o){void 0===t&&(t=0),void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=-1),e.call(this,Se,Fe),this._angle=0,this.angle=t,this.center=n,this.kernelSize=r,this.radius=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={angle:{configurable:!0},center:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,t,n,r)},n.angle.set=function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},n.angle.get=function(){return this._angle},n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Ae=n,we="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n",Te=function(e){function t(t){e.call(this,Ae,we),this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={mirror:{configurable:!0},boundary:{configurable:!0},amplitude:{configurable:!0},waveLength:{configurable:!0},alpha:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.mirror.set=function(e){this.uniforms.mirror=e},n.mirror.get=function(){return this.uniforms.mirror},n.boundary.set=function(e){this.uniforms.boundary=e},n.boundary.get=function(){return this.uniforms.boundary},n.amplitude.set=function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},n.amplitude.get=function(){return this.uniforms.amplitude},n.waveLength.set=function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},n.waveLength.get=function(){return this.uniforms.waveLength},n.alpha.set=function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},n.alpha.get=function(){return this.uniforms.alpha},Object.defineProperties(t.prototype,n),t}(t.Filter),De=n,Oe="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",Pe=function(e){function t(t,n,r){void 0===t&&(t=[-10,0]),void 0===n&&(n=[0,10]),void 0===r&&(r=[0,0]),e.call(this,De,Oe),this.red=t,this.green=n,this.blue=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return n.red.get=function(){return this.uniforms.red},n.red.set=function(e){this.uniforms.red=e},n.green.get=function(){return this.uniforms.green},n.green.set=function(e){this.uniforms.green=e},n.blue.get=function(){return this.uniforms.blue},n.blue.set=function(e){this.uniforms.blue=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Me=n,Re="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n",je=function(e){function t(t,n,r){void 0===t&&(t=[0,0]),void 0===n&&(n={}),void 0===r&&(r=0),e.call(this,Me,Re),this.center=t,Array.isArray(n)&&(console.warn("Deprecated Warning: ShockwaveFilter params Array has been changed to options Object."),n={}),n=Object.assign({amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},n),this.amplitude=n.amplitude,this.wavelength=n.wavelength,this.brightness=n.brightness,this.speed=n.speed,this.radius=n.radius,this.time=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},amplitude:{configurable:!0},wavelength:{configurable:!0},brightness:{configurable:!0},speed:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},n.amplitude.get=function(){return this.uniforms.amplitude},n.amplitude.set=function(e){this.uniforms.amplitude=e},n.wavelength.get=function(){return this.uniforms.wavelength},n.wavelength.set=function(e){this.uniforms.wavelength=e},n.brightness.get=function(){return this.uniforms.brightness},n.brightness.set=function(e){this.uniforms.brightness=e},n.speed.get=function(){return this.uniforms.speed},n.speed.set=function(e){this.uniforms.speed=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Le=n,ke="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n",Ie=function(e){function n(t,n,r){void 0===n&&(n=0),void 0===r&&(r=1),e.call(this,Le,ke),this.uniforms.dimensions=new Float32Array(2),this.uniforms.ambientColor=new Float32Array([0,0,0,r]),this.texture=t,this.color=n}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={texture:{configurable:!0},color:{configurable:!0},alpha:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,e.applyFilter(this,t,n,r)},r.texture.get=function(){return this.uniforms.uLightmap},r.texture.set=function(e){this.uniforms.uLightmap=e},r.color.set=function(e){var n=this.uniforms.ambientColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],this._color=t.utils.rgb2hex(n))},r.color.get=function(){return this._color},r.alpha.get=function(){return this.uniforms.ambientColor[3]},r.alpha.set=function(e){this.uniforms.ambientColor[3]=e},Object.defineProperties(n.prototype,r),n}(t.Filter),Ee=n,Be="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Xe=function(e){function n(n,r,o,i){void 0===n&&(n=100),void 0===r&&(r=600),void 0===o&&(o=null),void 0===i&&(i=null),e.call(this,Ee,Be),this.uniforms.blur=n,this.uniforms.gradientBlur=r,this.uniforms.start=o||new t.Point(0,window.innerHeight/2),this.uniforms.end=i||new t.Point(600,window.innerHeight/2),this.uniforms.delta=new t.Point(30,30),this.uniforms.texSize=new t.Point(window.innerWidth,window.innerHeight),this.updateDelta()}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return n.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},r.blur.get=function(){return this.uniforms.blur},r.blur.set=function(e){this.uniforms.blur=e},r.gradientBlur.get=function(){return this.uniforms.gradientBlur},r.gradientBlur.set=function(e){this.uniforms.gradientBlur=e},r.start.get=function(){return this.uniforms.start},r.start.set=function(e){this.uniforms.start=e,this.updateDelta()},r.end.get=function(){return this.uniforms.end},r.end.set=function(e){this.uniforms.end=e,this.updateDelta()},Object.defineProperties(n.prototype,r),n}(t.Filter),qe=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/n,this.uniforms.delta.y=t/n},t}(Xe),Ne=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/n,this.uniforms.delta.y=e/n},t}(Xe),Ge=function(e){function t(t,n,r,o){void 0===t&&(t=100),void 0===n&&(n=600),void 0===r&&(r=null),void 0===o&&(o=null),e.call(this),this.tiltShiftXFilter=new qe(t,n,r,o),this.tiltShiftYFilter=new Ne(t,n,r,o)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return t.prototype.apply=function(e,t,n){var r=e.getRenderTarget(!0);this.tiltShiftXFilter.apply(e,t,r),this.tiltShiftYFilter.apply(e,r,n),e.returnRenderTarget(r)},n.blur.get=function(){return this.tiltShiftXFilter.blur},n.blur.set=function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},n.gradientBlur.get=function(){return this.tiltShiftXFilter.gradientBlur},n.gradientBlur.set=function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},n.start.get=function(){return this.tiltShiftXFilter.start},n.start.set=function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},n.end.get=function(){return this.tiltShiftXFilter.end},n.end.set=function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Ke=n,Ye="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n",We=function(e){function t(t,n,r){void 0===t&&(t=200),void 0===n&&(n=4),void 0===r&&(r=20),e.call(this,Ke,Ye),this.radius=t,this.angle=n,this.padding=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={offset:{configurable:!0},radius:{configurable:!0},angle:{configurable:!0}};return n.offset.get=function(){return this.uniforms.offset},n.offset.set=function(e){this.uniforms.offset=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Qe=n,Ue="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = 32.0;\n\nfloat random(vec3 scale, float seed) {\n    // use the fragment position for a different seed per-pixel\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Ze=function(e){function t(t,n,r,o){void 0===t&&(t=.1),void 0===n&&(n=[0,0]),void 0===r&&(r=0),void 0===o&&(o=-1),e.call(this,Qe,Ue),this.center=n,this.strength=t,this.innerRadius=r,this.radius=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},strength:{configurable:!0},innerRadius:{configurable:!0},radius:{configurable:!0}};return n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.strength.get=function(){return this.uniforms.uStrength},n.strength.set=function(e){this.uniforms.uStrength=e},n.innerRadius.get=function(){return this.uniforms.uInnerRadius},n.innerRadius.set=function(e){this.uniforms.uInnerRadius=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter);return e.AdjustmentFilter=o,e.AdvancedBloomFilter=p,e.AsciiFilter=g,e.BevelFilter=y,e.BloomFilter=F,e.BulgePinchFilter=w,e.ColorMapFilter=O,e.ColorReplaceFilter=R,e.ConvolutionFilter=k,e.CrossHatchFilter=B,e.CRTFilter=N,e.DotFilter=Y,e.DropShadowFilter=U,e.EmbossFilter=H,e.GlitchFilter=ee,e.GlowFilter=re,e.GodrayFilter=se,e.KawaseBlurFilter=a,e.MotionBlurFilter=ce,e.MultiColorReplaceFilter=pe,e.OldFilmFilter=ge,e.OutlineFilter=ye,e.PixelateFilter=Ce,e.RadialBlurFilter=ze,e.ReflectionFilter=Te,e.RGBSplitFilter=Pe,e.ShockwaveFilter=je,e.SimpleLightmapFilter=Ie,e.TiltShiftFilter=Ge,e.TiltShiftAxisFilter=Xe,e.TiltShiftXFilter=qe,e.TiltShiftYFilter=Ne,e.TwistFilter=We,e.ZoomBlurFilter=Ze,e}({},PIXI);Object.assign(PIXI.filters,this?this.__filters:__filters);$openCardBoosterWindow=function(itemId,times,consume){if($gameParty.inBattle())return;var cards=BoosterManager.setup(itemId,times,consume);SceneManager._scene.openCardBoosterWindow(cards,times);if(SceneManager._scene instanceof Scene_Map&&$gameMap.isEventRunning()){$gameMap._interpreter.wait(20)}};$openCardBoosterScene=function(itemId,times,consume){if($gameParty.inBattle())return;SceneManager.push(Scene_OpenCardBooster);SceneManager.prepareNextScene(itemId,times,consume)};$openCardBoosterPacks=function(itemId,times,consume){if(ConfigManager.cardBoosterAnimation){$openCardBoosterScene(itemId,times,consume)}else{$openCardBoosterWindow(itemId,times,consume)}};$showCardHealth=Imported.Irina_CardGameCore.ShowHealth;if(Imported.KELYEP_DragonBones){alert("WARNING!!!\n\nKELYEP_DragonBones is found located above Irina_CardGameCore in the Plugin Manager. Place KELYEP_DragonBones beneath Irina_CardGameCore in the Plugin Manager for compatibility.");SceneManager.exit()}Imported.Irina_CardGameCore.DataManager_isDatabaseLoaded=DataManager.isDatabaseLoaded;DataManager.isDatabaseLoaded=function(){if(!Imported.Irina_CardGameCore.DataManager_isDatabaseLoaded.call(this))return false;if(Imported.KELYEP_DragonBones&&!Imported.Irina_CardGameCore._loadedDragonbones){this.preloadIrinaCardGameCoreDragonbones();Imported.Irina_CardGameCore._loadedDragonbones=true}return true};DataManager.preloadIrinaCardGameCoreDragonbones=function(){for(var i=1;i<$dataItems.length;i++){var item=$dataItems[i];if(item&&item.note.match(/<Card Dragonbones:[ ](.*)>/i)){var armature=String(RegExp.$1).trim();if(!dragonBonesIntegration.AssetsArray.contains(armature)){dragonBonesIntegration.AssetsArray.push(armature)}}}};DataManager.isCard=function(item){if(!item)return false;if(!DataManager.isItem(item))return false;if(this.isCardBooster(item))return false;if(item.note.match(/<Not a Card>/i))return false;return item.note.match(/<Card[ ](.*)>/i)};DataManager.isCardBooster=function(item){if(!item)return false;if(!DataManager.isItem(item))return false;return item.note.match(/<Card Pool(.*)>/i)};ConfigManager.cardAnimatedCards=Imported.Irina_CardGameCore.AnimateCardOptionDefault;ConfigManager.cardBoosterAnimation=Imported.Irina_CardGameCore.BoosterOptionDefault;Imported.Irina_CardGameCore.ConfigManager_makeData=ConfigManager.makeData;ConfigManager.makeData=function(){var config=Imported.Irina_CardGameCore.ConfigManager_makeData.call(this);config.cardAnimatedCards=this.cardAnimatedCards;config.cardBoosterAnimation=this.cardBoosterAnimation;return config};Imported.Irina_CardGameCore.ConfigManager_applyData=ConfigManager.applyData;ConfigManager.applyData=function(config){Imported.Irina_CardGameCore.ConfigManager_applyData.call(this,config);if(config["cardAnimatedCards"]===undefined)config["cardAnimatedCards"]=this.cardAnimatedCards;this.cardAnimatedCards=this.readFlag(config,"cardAnimatedCards");if(config["cardBoosterAnimation"]===undefined)config["cardBoosterAnimation"]=this.cardBoosterAnimation;this.cardBoosterAnimation=this.readFlag(config,"cardBoosterAnimation")};Imported.Irina_CardGameCore.Window_Options_addGeneralOptions=Window_Options.prototype.addGeneralOptions;Window_Options.prototype.addGeneralOptions=function(){Imported.Irina_CardGameCore.Window_Options_addGeneralOptions.call(this);if(Imported.YEP_OptionsCore)return;if(Imported.Irina_CardGameCore.AnimateCardOptionShow)this.addCommand(Imported.Irina_CardGameCore.AnimateCardOptionText,"cardAnimatedCards");if(Imported.Irina_CardGameCore.BoosterOptionShow)this.addCommand(Imported.Irina_CardGameCore.BoosterOptionText,"cardBoosterAnimation")};SoundManager.playCard=function(){var flipSound={name:Imported.Irina_CardGameCore.FlipSound,volume:90,pitch:100,pan:0};AudioManager.playSe(flipSound)};function CardManager(){throw new Error("This is a static class")}CardManager.reset=function(){this._sprites=[]};CardManager.createCard=function(itemId,playerDeck){var card=new Card(itemId,playerDeck);if(!this._sprites)this.reset();var sprite=new Sprite_Card(itemId,card,playerDeck);this.addToCardContainer(card,sprite);return card};CardManager.addToCardContainer=function(card,sprite){SceneManager._scene.cardContainer().addChild(sprite);this._sprites.push(sprite);card.setSpriteId(this._sprites.indexOf(sprite))};CardManager.rarityColor=function(itemId){var item=$dataItems[itemId];if(!item)return"rgba(255, 255, 255, 1)";if(item.note.match(/<Card Rarity: (\d+)>/i)){var rarity=Number(RegExp.$1)}else{var rarity=0}return Imported.Irina_CardGameCore.CardFrontRarityColors[rarity]};CardManager.shuffle=function(array){var j,x,i;for(i=array.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));x=array[i];array[i]=array[j];array[j]=x}return array};CardManager.holoGlowFilterArray=function(){if(this._holoGlowFilterArray!==undefined)return this._holoGlowFilterArray;this._holoGlowFilterArray=[];var r=255;var g=192;var b=192;var plus=(255-192)/10;var fmt="rgba(%1,%2,%3,1)";while(true){this._holoGlowFilterArray.push(fmt.format(Math.round(r),Math.round(g),Math.round(b)));g=(g+plus).clamp(192,255);if(g>=255||g<=192)break}while(true){this._holoGlowFilterArray.push(fmt.format(Math.round(r),Math.round(g),Math.round(b)));r=(r-plus).clamp(192,255);if(r>=255||r<=192)break}while(true){this._holoGlowFilterArray.push(fmt.format(Math.round(r),Math.round(g),Math.round(b)));b=(b+plus).clamp(192,255);if(b>=255||b<=192)break}while(true){this._holoGlowFilterArray.push(fmt.format(Math.round(r),Math.round(g),Math.round(b)));g=(g-plus).clamp(192,255);if(g>=255||g<=192)break}while(true){this._holoGlowFilterArray.push(fmt.format(Math.round(r),Math.round(g),Math.round(b)));r=(r+plus).clamp(192,255);if(r>=255||r<=192)break}while(true){this._holoGlowFilterArray.push(fmt.format(Math.round(r),Math.round(g),Math.round(b)));b=(b-plus).clamp(192,255);if(b>=255||b<=192)break}return this._holoGlowFilterArray};function BoosterManager(){throw new Error("This is a static class")}BoosterManager.setup=function(itemId,times,consume){this._item=$dataItems[itemId];if(!this.isValidBoosterPack(itemId))return;this._times=times||1;if(consume)this.consumeItem();this.setupBooster();var cards=this.openAllBoosters();this.gainCards(cards);return cards};BoosterManager.isValidBoosterPack=function(itemId){if(!this._item)return false;var note=this._item.note;if(!note.match(/<Booster Rarities:[ ](.*)>/i))return false;if(!note.match(/<Card Pool:[ ](.*)>/i))return false;return true};BoosterManager.consumeItem=function(){$gameParty.loseItem(this._item,this._times)};BoosterManager.setupBooster=function(){this.setupCardPool();this.setupRarityPossibilities()};BoosterManager.setupCardPool=function(){var pool=[];var notedata=this._item.note.split(/[\r\n]+/);for(var i=0;i<notedata.length;i++){var line=notedata[i];if(line.match(/<Card Pool:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var array=JSON.parse("["+RegExp.$1.match(/\d+/g)+"]");pool=pool.concat(array)}else if(line.match(/<Card Pool:[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i)){var n=Number(RegExp.$1);var m=Number(RegExp.$2);var range=[];for(var j=n;j<=m;++j)range.push(j);pool=pool.concat(range)}}this._cardPool=[];for(var i=0;i<pool.length;i++){var item=$dataItems[Number(pool[i])];if(!item)continue;if(DataManager.isCard(item))this._cardPool.push(Number(pool[i]))}};BoosterManager.setupRarityPossibilities=function(){this._raritySelection=[];var notedata=this._item.note.split(/[\r\n]+/);for(var i=0;i<notedata.length;i++){var line=notedata[i];if(line.match(/<Booster Rarities:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var array=JSON.parse("["+RegExp.$1.match(/\d+/g)+"]");this._raritySelection.push(array)}}};BoosterManager.setupRarityPools=function(){this._rarityPools=[];for(var i=0;i<this._cardPool.length;i++){var item=$dataItems[this._cardPool[i]];if(!DataManager.isCard(item))continue;if(item.note.match(/<Card Rarity: (\d+)>/i)){var rarity=Number(RegExp.$1)}else{var rarity=0}this._rarityPools[rarity]=this._rarityPools[rarity]||[];this._rarityPools[rarity].push(item)}};BoosterManager.openAllBoosters=function(){var cards=[];while(this._times>0){cards=cards.concat(this.openSingleBooster());this._times-=1}return cards};BoosterManager.openSingleBooster=function(){var cards=[];var rarities=this._raritySelection[Math.floor(Math.random()*this._raritySelection.length)];this.setupRarityPools();var fullPools=this._rarityPools.clone();for(var i=0;i<rarities.length;i++){var rarity=rarities[i];var items=this._rarityPools[rarity]||[];if(items.length>0){var card=items[Math.floor(Math.random()*items.length)];items.splice(items.indexOf(card),1);cards.push(card);if(items.length<=0)this._rarityPools[rarity]=fullPools[rarity].clone()}}return cards};BoosterManager.gainCards=function(cards){for(var i=0;i<cards.length;i++){var item=cards[i];if(item)$gameParty.gainItem(item,1)}};BoosterManager.getBoosterArt=function(item){if(DataManager.isCardBooster(item)&&item.note.match(/<Booster Art: (.*)>/i)){return ImageManager.loadPicture(String(RegExp.$1).trim())}return ImageManager.loadPicture(Imported.Irina_CardGameCore.DefaultBoosterArt)};BoosterManager.getBoosterBG=function(item){if(DataManager.isCardBooster(item)&&item.note.match(/<Booster BG: (.*)>/i)){return ImageManager.loadParallax(String(RegExp.$1).trim())}return ImageManager.loadParallax(Imported.Irina_CardGameCore.DefaultBoosterBG)};function Card(){this.initialize.apply(this,arguments)}Card.prototype.initialize=function(itemId){this._id=itemId;this._spriteId=-1;this.createCardData()};Card.prototype.item=function(){return $dataItems[this._id]||$dataItems[1]};Card.prototype.sprite=function(){if(!CardManager._sprites)return null;return CardManager._sprites[this._spriteId]};Card.prototype.setSpriteId=function(id){this._spriteId=id};Card.prototype.createCardData=function(notOriginal){var note=this.item().note;this._original={};if(note.match(/<Card Art: (.*)>/i)){var array=String(RegExp.$1).trim().split(",");this.setCardArt(array[0].trim(),array[1].trim(),Number(array[2])||0,eval(array[3]||"true"))}else{this.setCardArt("","",0,true)}if(note.match(/<Card Art Offset: (.*)>/i)){var data=String(RegExp.$1).split(",")}else{var data=[0,0]}this.setArtOffsets(Number(data[0]),Number(data[1]));if(note.match(/<Card Art Scale: (.*)>/i)){this.setArtScale(Number(RegExp.$1))}else{this.setArtScale(1)}if(note.match(/<Card Art Cells: (.*)x(.*)>/i)){var w=Math.max(1,Number(RegExp.$1));var h=Math.max(1,Number(RegExp.$2));this.setArtCells(w,h)}else{this.setArtCells(1,1)}if(note.match(/<Card Art Cell Index: (.*)>/i)){this.setArtCellIndex(Number(RegExp.$1)||0)}else{this.setArtCellIndex(0)}if(note.match(/<Card Parallax BG: (.*)>/i)){this.setParallaxBG(String(RegExp.$1).trim())}else{this.setParallaxBG("")}if(note.match(/<Card Parallax BG Speed: (.*)>/i)){var data=String(RegExp.$1).split(",")}else{var data=[0,0]}this.setParallaxBGSpeed(Number(data[0]),Number(data[1]));if(note.match(/<Card Parallax BG Opacity: (.*)>/i)){this.setParallaxBGOpacity(Number(RegExp.$1))}else{this.setParallaxBGOpacity(255)}if(note.match(/<Card Parallax BG Blend Mode: (.*)>/i)){var blendMode=String(RegExp.$1).trim().toUpperCase();if(blendMode==="NORMAL")this.setParallaxBGBlendMode(0);if(blendMode==="ADDITIVE")this.setParallaxBGBlendMode(1);if(blendMode==="MULTIPLY")this.setParallaxBGBlendMode(2);if(blendMode==="SCREEN")this.setParallaxBGBlendMode(3)}else{this.setParallaxBGBlendMode(Imported.Irina_CardGameCore.CardFrontHoloBlendMode)}if(note.match(/<Card Parallax FG: (.*)>/i)){this.setParallaxFG(String(RegExp.$1).trim())}else{this.setParallaxFG("")}if(note.match(/<Card Parallax FG Speed: (.*)>/i)){var data=String(RegExp.$1).split(",")}else{var data=[0,0]}this.setParallaxFGSpeed(Number(data[0]),Number(data[1]));if(note.match(/<Card Parallax FG Opacity: (.*)>/i)){this.setParallaxFGOpacity(Number(RegExp.$1))}else{this.setParallaxFGOpacity(255)}if(note.match(/<Card Parallax FG Blend Mode: (.*)>/i)){var blendMode=String(RegExp.$1).trim().toUpperCase();if(blendMode==="NORMAL")this.setParallaxFGBlendMode(0);if(blendMode==="ADDITIVE")this.setParallaxFGBlendMode(1);if(blendMode==="MULTIPLY")this.setParallaxFGBlendMode(2);if(blendMode==="SCREEN")this.setParallaxFGBlendMode(3)}else{this.setParallaxFGBlendMode(Imported.Irina_CardGameCore.CardFrontHoloBlendMode)}if(note.match(/<Card Holo BG: (.*)>/i)){this.setHoloBG(String(RegExp.$1).trim())}else{this.setHoloBG("")}if(note.match(/<Card Holo BG Opacity: (.*)>/i)){this.setHoloBGOpacity(Number(RegExp.$1))}else{this.setHoloBGOpacity(Imported.Irina_CardGameCore.CardHoloOpacity)}if(note.match(/<Card Holo BG Blend Mode: (.*)>/i)){var blendMode=String(RegExp.$1).trim().toUpperCase();if(blendMode==="NORMAL")this.setHoloBGBlendMode(0);if(blendMode==="ADDITIVE")this.setHoloBGBlendMode(1);if(blendMode==="MULTIPLY")this.setHoloBGBlendMode(2);if(blendMode==="SCREEN")this.setHoloBGBlendMode(3)}else{this.setHoloBGBlendMode(Imported.Irina_CardGameCore.CardFrontHoloBlendMode)}if(note.match(/<Card Holo BG Speed: (.*)>/i)){this.setHoloBGSpeed(Number(RegExp.$1))}else{this.setHoloBGSpeed(Imported.Irina_CardGameCore.CardHoloHueShift)}if(note.match(/<Card Holo FG: (.*)>/i)){this.setHoloFG(String(RegExp.$1).trim())}else{this.setHoloFG("")}if(note.match(/<Card Holo FG Opacity: (.*)>/i)){this.setHoloFGOpacity(Number(RegExp.$1))}else{this.setHoloFGOpacity(Imported.Irina_CardGameCore.CardHoloOpacity)}if(note.match(/<Card Holo FG Blend Mode: (.*)>/i)){var blendMode=String(RegExp.$1).trim().toUpperCase();if(blendMode==="NORMAL")this.setHoloFGBlendMode(0);if(blendMode==="ADDITIVE")this.setHoloFGBlendMode(1);if(blendMode==="MULTIPLY")this.setHoloFGBlendMode(2);if(blendMode==="SCREEN")this.setHoloFGBlendMode(3)}else{this.setHoloFGBlendMode(0)}if(note.match(/<Card Holo FG Speed: (.*)>/i)){this.setHoloFGSpeed(Number(RegExp.$1))}else{this.setHoloFGSpeed(-Imported.Irina_CardGameCore.CardHoloHueShift)}if(note.match(/<Card Dragonbones: (.*)>/i)){this.setDragonbones(String(RegExp.$1).trim())}else{this.setDragonbones("")}if(note.match(/<Card Dragonbones Animation: (.*)>/i)){this.setDragonbonesAnimation(String(RegExp.$1).trim())}else{this.setDragonbonesAnimation("Idle")}if(note.match(/<Card Name: (.*)>/i)){this.setName(String(RegExp.$1).trim())}else{this.setName(this.item().name)}if(note.match(/<Card Element: (.*)>/i)){var text=String(RegExp.$1).trim()}else{var text="None"}this.setElement(text);this.setTemplate(text);if(note.match(/<Card Level: (.*)>/i)){this.setLevel(Number(RegExp.$1)||0)}else{this.setLevel(0)}if(note.match(/<Card Power: (.*)>/i)){this.setPower(Number(RegExp.$1)||0)}else{this.setPower(0)}if(note.match(/<Card Health: (.*)>/i)){this.setMaxHealth(Number(RegExp.$1)||0);this.setCurrentHealth(Number(RegExp.$1)||0)}else{this.setMaxHealth(1);this.setCurrentHealth(1)}if(note.match(/<Card Template: (.*)>/i)){this.setTemplate(String(RegExp.$1).trim())}if(note.match(/<Card Text>\s*([\s\S]*)\s*<\/Card Text>/i)){this.setText(String(RegExp.$1))}else{this.setAutoText()}if(note.match(/<Card Text Scale: (.*)>/i)){this.setTextScale(Number(RegExp.$1))}else{this.setTextScale(Imported.Irina_CardGameCore.CardFrontTextDefaultScale)}if(!notOriginal)this.createOriginalData();this.refresh()};Card.prototype.setCardArt=function(folder,filename,hue,smooth){this._imgFolder=folder;this._imgFilename=filename;this._imgHue=hue;this._imgSmooth=smooth};Card.prototype.getCardArtBitmap=function(){if(this._imgFolder&&this._imgFilename){var folder="img/"+this._imgFolder+"/";return ImageManager.loadBitmap(folder,this._imgFilename,this._imgHue,this._imgSmooth)}return new Bitmap(1,1)};Card.prototype.artOffsets=function(){return this._artOffsets};Card.prototype.setArtOffsets=function(x,y){this._artOffsets=[x||0,y||0]};Card.prototype.artScale=function(){return this._artScale};Card.prototype.setArtScale=function(value){this._artScale=value};Card.prototype.artCells=function(){return this._artCells};Card.prototype.setArtCells=function(width,height){this._artCells=[width,height]};Card.prototype.artCellIndex=function(){return this._artCellIndex};Card.prototype.setArtCellIndex=function(value){this._artCellIndex=value};Card.prototype.parallaxBG=function(){return this._cardFrontParallaxBG};Card.prototype.setParallaxBG=function(filename){this._cardFrontParallaxBG=filename};Card.prototype.getCardParallaxBgBitmap=function(){if(this._cardFrontParallaxBG)return ImageManager.loadParallax(this._cardFrontParallaxBG);return new Bitmap(1,1)};Card.prototype.parallaxBGSpeed=function(){return this._cardFrontParallaxBGSpeed};Card.prototype.setParallaxBGSpeed=function(x,y){this._cardFrontParallaxBGSpeed=[x||0,y||0]};Card.prototype.parallaxBGOpacity=function(){return this._cardFrontParallaxBGOpacity||0};Card.prototype.setParallaxBGOpacity=function(value){this._cardFrontParallaxBGOpacity=value.clamp(0,255)};Card.prototype.parallaxBGBlendMode=function(){return this._cardFrontParallaxBGBlendMode||0};Card.prototype.setParallaxBGBlendMode=function(mode){this._cardFrontParallaxBGBlendMode=mode};Card.prototype.parallaxFG=function(){return this._cardFrontParallaxFG};Card.prototype.setParallaxFG=function(filename){this._cardFrontParallaxFG=filename};Card.prototype.getCardParallaxFGBitmap=function(){if(this._cardFrontParallaxFG)return ImageManager.loadParallax(this._cardFrontParallaxFG);return new Bitmap(1,1)};Card.prototype.parallaxFGSpeed=function(){return this._cardFrontParallaxFGSpeed};Card.prototype.setParallaxFGSpeed=function(x,y){this._cardFrontParallaxFGSpeed=[x||0,y||0]};Card.prototype.parallaxFGOpacity=function(){return this._cardFrontParallaxFGOpacity||0};Card.prototype.setParallaxFGOpacity=function(value){this._cardFrontParallaxFGOpacity=value.clamp(0,255)};Card.prototype.parallaxFGBlendMode=function(){return this._cardFrontParallaxFGBlendMode||0};Card.prototype.setParallaxFGBlendMode=function(mode){this._cardFrontParallaxFGBlendMode=mode};Card.prototype.holoBG=function(){return this._holoBG};Card.prototype.setHoloBG=function(filename){this._holoBG=filename};Card.prototype.getCardHoloBgBitmap=function(){if(this._holoBG)return ImageManager.loadPicture(this._holoBG);return new Bitmap(1,1)};Card.prototype.holoBGOpacity=function(){return this._holoBGOpacity.clamp(0,255)};Card.prototype.setHoloBGOpacity=function(value){this._holoBGOpacity=value.clamp(0,255)};Card.prototype.holoBGBlendMode=function(){return this._holoBGBlendMode||0};Card.prototype.setHoloBGBlendMode=function(mode){this._holoBGBlendMode=mode};Card.prototype.holoBGSpeed=function(){return this._holoBGSpeed};Card.prototype.setHoloBGSpeed=function(value){this._holoBGSpeed=value};Card.prototype.holoFG=function(){return this._holoFG};Card.prototype.setHoloFG=function(filename){this._holoFG=filename};Card.prototype.getCardHoloFGBitmap=function(){if(this._holoFG)return ImageManager.loadPicture(this._holoFG);return new Bitmap(1,1)};Card.prototype.holoFGOpacity=function(){return this._holoFGOpacity.clamp(0,255)};Card.prototype.setHoloFGOpacity=function(value){this._holoFGOpacity=value.clamp(0,255)};Card.prototype.holoFGBlendMode=function(){return this._holoFGBlendMode||0};Card.prototype.setHoloFGBlendMode=function(mode){this._holoFGBlendMode=mode};Card.prototype.holoFGSpeed=function(){return this._holoFGSpeed};Card.prototype.setHoloFGSpeed=function(value){this._holoFGSpeed=value};Card.prototype.dragonbones=function(){return this._dragonbones};Card.prototype.setDragonbones=function(armature){this._dragonbones=armature};Card.prototype.dragonbonesAnimation=function(){return this._dragonbonesAnimation};Card.prototype.setDragonbonesAnimation=function(animation){this._dragonbonesAnimation=animation};Card.prototype.rarity=function(){if(this.item().note.match(/<Card Rarity: (\d+)>/i)){return Number(RegExp.$1)}else{return 0}};Card.prototype.rarityColor=function(){return CardManager.rarityColor(this._id)};Card.prototype.name=function(){return this._name||this.item().name};Card.prototype.setName=function(text){text=text.replace(/<(.*)>/i,"").trim();this._name=text};Card.prototype.element=function(){return this._element};Card.prototype.setElement=function(value){this._element=value};Card.prototype.level=function(){return Math.max(0,this._level)};Card.prototype.setLevel=function(value){this._level=value};Card.prototype.gainLevel=function(value){this._level+=value};Card.prototype.power=function(){return Math.max(0,this._power)};Card.prototype.setPower=function(value){this._power=value};Card.prototype.gainPower=function(value){this._power+=value};Card.prototype.maxHealth=function(){return Math.max(1,this._maxHealth)};Card.prototype.setMaxHealth=function(value){this._maxHealth=value};Card.prototype.gainMaxHealth=function(value){this._maxHealth+=value};Card.prototype.currentHealth=function(){return this._currentHealth};Card.prototype.setCurrentHealth=function(value){this._currentHealth=value};Card.prototype.gainCurrentHealth=function(value){this._currentHealth+=value};Card.prototype.template=function(){return Imported.Irina_CardGameCore.TemplateList[this._template.toUpperCase()]};Card.prototype.setTemplate=function(name){this._template=name};Card.prototype.text=function(){return this._text||""};Card.prototype.setText=function(text){this._text=text};Card.prototype.setAutoText=function(){this._text=this.item().description;if(Imported.YEP_MessageCore){this._text=this._text.replace(/[\n\r]+/g,"<br>");this._text="<WordWrap>"+this._text}};Card.prototype.textScale=function(){return this._textScale||Imported.Irina_CardGameCore.CardFrontTextDefaultScale};Card.prototype.setTextScale=function(value){this._textScale=value};Card.prototype.dataKeys=function(){return["_imgFolder","_imgFilename","_imgHue","_artOffsets","_artScale","_cardFrontParallaxBG","_cardFrontParallaxBGSpeed","_cardFrontParallaxBGOpacity","_cardFrontParallaxBGBlendMode","_cardFrontParallaxFG","_cardFrontParallaxFGSpeed","_cardFrontParallaxFGOpacity","_cardFrontParallaxFGBlendMode","_holoBG","_holoBGOpacity","_holoBGBlendMode","_holoBGSpeed","_holoFG","_holoFGOpacity","_holoFGBlendMode","_holoFGSpeed","_dragonbones","_dragonbonesAnimation","_name","_element","_level","_power","_maxHealth","_template","_text","_textScale"]};Card.prototype.createOriginalData=function(){var keys=this.dataKeys();this._original={};for(var i=0;i<keys.length;i++){var key=keys[i];this._original[key]=this[key]}};Card.prototype.refresh=function(){if(this.sprite())this.sprite().refresh()};Card.prototype.restoreOriginalStats=function(){if(!this._original)return;var keys=this.dataKeys();for(var i=0;i<keys.length;i++){var key=keys[i];if(this._original[key]!==undefined)this[key]=this._original[key]}this.sprite().setupCardFront();this.refresh()};Card.prototype.changeCard=function(id){if(id===this._id)return;this._id=id;this.createCardData();this.sprite().setupCardFront()};Card.prototype.isRevealed=function(){if(this._isRevealed)return true;if(this.sprite())return!this.sprite()._backShowing;return false};Card.prototype.attackAnimationId=function(){if(this.item().animationId>0)return this.item().animationId;return this.template().AnimationId};Card.prototype.playAnimation=function(animationId,mirror,delay){if(this.sprite())this.sprite().startAnimation($dataAnimations[animationId],mirror||false,delay||0)};Card.prototype.startAnimation=function(animationId,mirror,delay){this.playAnimation(animationId,mirror,delay)};Game_Temp.prototype.setPlayerDeckSleeves=function(filename){this._playerDeckSleeves=filename};Game_Temp.prototype.setOpponentDeckSleeves=function(filename){this._opponentDeckSleeves=filename};Game_Temp.prototype.clearDeckSleeves=function(){this._playerDeckSleeves=undefined;this._opponentDeckSleeves=undefined};Imported.Irina_CardGameCore.Game_Screen_zoomScale=Game_Screen.prototype.zoomScale;Game_Screen.prototype.zoomScale=function(){if(SceneManager._scene instanceof Scene_OpenCardBooster)return 1;return Imported.Irina_CardGameCore.Game_Screen_zoomScale.call(this)};function Sprite_CardBase(){this.initialize.apply(this,arguments)}Sprite_CardBase.prototype=Object.create(Sprite_Base.prototype);Sprite_CardBase.prototype.constructor=Sprite_CardBase;Sprite_CardBase.prototype.initialize=function(){Sprite_Base.prototype.initialize.call(this);this.initializeSettings();this.initializeMovement();this.initializeScaling();this.initializeSkewing();this.initializeRotation()};Sprite_CardBase.prototype.initializeSettings=function(){this.anchor.x=.5;this.anchor.y=.5};Sprite_CardBase.prototype.initializeMovement=function(){this._moveTime=0;this._moveBaseX=this.x;this._moveBaseY=this.y;this._moveTargetX=this.x;this._moveTargetY=this.y;this._moveDuration=0;this._moveTotalDuration=0;this._moveType="OUTSINE"};Sprite_CardBase.prototype.initializeScaling=function(){this._scaleTime=0;this._baseScale=1;this._scaleOriginal=this._baseScale;this._scaleTarget=this._baseScale;this._scaleDuration=0;this._scaleTotalDuration=0;this._scaleType="OUTSINE"};Sprite_CardBase.prototype.initializeSkewing=function(){this._skewTime=0;this._skewOriginalX=this.transform.skew.x;this._skewOriginalY=this.transform.skew.y;this._skewTargetX=this._skewOriginalX;this._skewTargetY=this._skewOriginalY;this._skewDuration=0;this._skewTotalDuration=0;this._skewType="OUTSINE"};Sprite_CardBase.prototype.initializeRotation=function(){this._rotationTime=0;this._rotationOriginal=this.rotation;this._rotationTarget=this.rotation;this._rotationDuration=0;this._rotationTotalDuration=0;this._rotationType="OUTSINE"};Sprite_CardBase.prototype.startMove=function(x,y,duration,ease){duration=duration||1;ease=ease||"OUTSINE";if(x===this._moveTargetX&&y===this._moveTargetY&&duration===this._moveTotalDuration&&ease===this._moveType)return;this._moveTime=0;this._moveBaseX=this.x;this._moveBaseY=this.y;this._moveTargetX=x;this._moveTargetY=y;this._moveDuration=duration||1;this._moveTotalDuration=duration||1;this._moveType=ease.toUpperCase()};Sprite_CardBase.prototype.changeScale=function(target,duration,ease){duration=duration||1;ease=ease||"OUTSINE";if(target===this._scaleTarget&&duration===this._scaleTotalDuration&&ease===this._scaleType)return;this._scaleTime=0;this._scaleOriginal=this._baseScale;this._scaleTarget=target;this._scaleDuration=duration||1;this._scaleTotalDuration=duration||1;this._scaleType=ease.toUpperCase()};Sprite_CardBase.prototype.changeSkew=function(x,y,duration,ease){duration=duration||1;ease=ease||"OUTSINE";if(x===this._skewTargetX&&y===this._skewTargetY&&duration===this._skewTotalDuration&&ease===this._skewType)return;this._skewTime=0;this._skewOriginalX=this.transform.skew.x;this._skewOriginalY=this.transform.skew.y;this._skewTargetX=x;this._skewTargetY=y;this._skewDuration=duration||1;this._skewTotalDuration=duration||1;this._skewType=ease.toUpperCase()};Sprite_CardBase.prototype.changeRotation=function(target,duration,ease){duration=duration||1;ease=ease||"OUTSINE";if(target===this._rotationTarget&&duration===this._rotationTotalDuration&&ease===this._rotationType)return;this._rotationTime=0;this._rotationOriginal=this.rotation;this._rotationTarget=target;this._rotationDuration=duration||1;this._rotationTotalDuration=duration||1;this._rotationType=ease.toUpperCase()};Sprite_CardBase.prototype.update=function(){Sprite_Base.prototype.update.call(this);this.updateMove();this.updateScale();this.updateSkew();this.updateRotation()};Sprite_CardBase.prototype.applyEasing=function(t,type){var type=type.toUpperCase();var magnitude=1.70158;var elastic=.7;switch(type){case"LINEAR":return t;break;case"INSINE":return-1*Math.cos(t*(Math.PI/2))+1;break;case"OUTSINE":return Math.sin(t*(Math.PI/2));break;case"INOUTSINE":return-.5*(Math.cos(Math.PI*t)-1);break;case"INQUAD":return t*t;break;case"OUTQUAD":return t*(2-t);break;case"INOUTQUAD":return t<.5?2*t*t:-1+(4-2*t)*t;break;case"INCUBIC":return t*t*t;break;case"OUTCUBIC":var t1=t-1;return t1*t1*t1+1;break;case"INOUTCUBIC":return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1;break;case"INQUART":return t*t*t*t;break;case"OUTQUART":var t1=t-1;return 1-t1*t1*t1*t1;break;case"INOUTQUART":var t1=t-1;return t<.5?8*t*t*t*t:1-8*t1*t1*t1*t1;break;case"INQUINT":return t*t*t*t*t;break;case"OUTQUINT":var t1=t-1;return 1+t1*t1*t1*t1*t1;break;case"INOUTQUINT":var t1=t-1;return t<.5?16*t*t*t*t*t:1+16*t1*t1*t1*t1*t1;break;case"INEXPO":if(t===0){return 0}return Math.pow(2,10*(t-1));break;case"OUTEXPO":if(t===1){return 1}return-Math.pow(2,-10*t)+1;break;case"INOUTEXPO":if(t===0||t===1){return t}var scaledTime=t*2;var scaledTime1=scaledTime-1;if(scaledTime<1){return.5*Math.pow(2,10*scaledTime1)}return.5*(-Math.pow(2,-10*scaledTime1)+2);break;case"INCIRC":var scaledTime=t/1;return-1*(Math.sqrt(1-scaledTime*t)-1);break;case"OUTCIRC":var t1=t-1;return Math.sqrt(1-t1*t1);break;case"INOUTCIRC":var scaledTime=t*2;var scaledTime1=scaledTime-2;if(scaledTime<1){return-.5*(Math.sqrt(1-scaledTime*scaledTime)-1)}return.5*(Math.sqrt(1-scaledTime1*scaledTime1)+1);break;case"INBACK":return t*t*((magnitude+1)*t-magnitude);break;case"OUTBACK":var scaledTime=t/1-1;return scaledTime*scaledTime*((magnitude+1)*scaledTime+magnitude)+1;break;case"INOUTBACK":var scaledTime=t*2;var scaledTime2=scaledTime-2;var s=magnitude*1.525;if(scaledTime<1){return.5*scaledTime*scaledTime*((s+1)*scaledTime-s)}return.5*(scaledTime2*scaledTime2*((s+1)*scaledTime2+s)+2);break;case"INELASTIC":if(t===0||t===1){return t}var scaledTime=t/1;var scaledTime1=scaledTime-1;var p=1-elastic;var s=p/(2*Math.PI)*Math.asin(1);return-(Math.pow(2,10*scaledTime1)*Math.sin((scaledTime1-s)*(2*Math.PI)/p));break;case"OUTELASTIC":var p=1-elastic;var scaledTime=t*2;if(t===0||t===1){return t}var s=p/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*scaledTime)*Math.sin((scaledTime-s)*(2*Math.PI)/p)+1;break;case"INOUTELASTIC":var p=1-elastic;if(t===0||t===1){return t}var scaledTime=t*2;var scaledTime1=scaledTime-1;var s=p/(2*Math.PI)*Math.asin(1);if(scaledTime<1){return-.5*(Math.pow(2,10*scaledTime1)*Math.sin((scaledTime1-s)*(2*Math.PI)/p))}return Math.pow(2,-10*scaledTime1)*Math.sin((scaledTime1-s)*(2*Math.PI)/p)*.5+1;break;case"OUTBOUNCE":var scaledTime=t/1;if(scaledTime<1/2.75){return 7.5625*scaledTime*scaledTime}else if(scaledTime<2/2.75){var scaledTime2=scaledTime-1.5/2.75;return 7.5625*scaledTime2*scaledTime2+.75}else if(scaledTime<2.5/2.75){var scaledTime2=scaledTime-2.25/2.75;return 7.5625*scaledTime2*scaledTime2+.9375}else{var scaledTime2=scaledTime-2.625/2.75;return 7.5625*scaledTime2*scaledTime2+.984375}break;case"INBOUNCE":var value=1-this.applyEasing(1-t,"outbounce");return value;break;case"INOUTBOUNCE":if(t<.5){var value=this.applyEasing(t*2,"inbounce")*.5}else{var value=this.applyEasing(t*2-1,"outbounce")*.5+.5}return value;break;default:return t}};Sprite_CardBase.prototype.updateMove=function(){if(this._moveDuration===undefined)return;if(this._moveDuration<=0)return;this._moveTime++;var t=this._moveTime;var d=this._moveTotalDuration;var bx=this._moveBaseX;var by=this._moveBaseY;var cx=this._moveTargetX;var cy=this._moveTargetY;t/=d;t=this.applyEasing(t,this._moveType);var x1=this.x;var y1=this.y;this.x=bx+t*(cx-bx);this.y=by+t*(cy-by);var x2=this.x;var y2=this.y;this._moveDuration--;if(this._moveDuration<=0){this.x=this._moveTargetX;this.y=this._moveTargetY;this._moveTotalDuration=0}};Sprite_CardBase.prototype.updateScale=function(){if(this._scaleDuration!==undefined&&this._scaleDuration>0){this._scaleTime++;var t=this._scaleTime;var d=this._scaleTotalDuration;var b=this._scaleOriginal;var c=this._scaleTarget;t/=d;t=this.applyEasing(t,this._scaleType);this._baseScale=b+t*(c-b);this._scaleDuration--;if(this._scaleDuration<=0){this._baseScale=this._scaleTarget;this._scaleTotalDuration=0}}this.scale.x=this._baseScale;this.scale.y=this._baseScale};Sprite_CardBase.prototype.updateSkew=function(){if(this._skewDuration!==undefined&&this._skewDuration>0){this._skewTime++;var t=this._skewTime;var d=this._skewTotalDuration;var bx=this._skewOriginalX;var by=this._skewOriginalY;var cx=this._skewTargetX;var cy=this._skewTargetY;t/=d;t=this.applyEasing(t,this._skewType);this.transform.skew.x=bx+t*(cx-bx);this.transform.skew.y=by+t*(cy-by);this._skewDuration--;if(this._skewDuration<=0){this.transform.skew.x=this._skewTargetX;this.transform.skew.y=this._skewTargetY;this._skewTotalDuration=0}}};Sprite_CardBase.prototype.updateRotation=function(){if(this._rotationDuration!==undefined&&this._rotationDuration>0){this._rotationTime++;var t=this._rotationTime;var d=this._rotationTotalDuration;var b=this._rotationOriginal;var c=this._rotationTarget;t/=d;t=this.applyEasing(t,this._rotationType);this.rotation=b+t*(c-b);this._rotationDuration--;if(this._rotationDuration<=0){rotation=this._rotationTarget;this._rotationTotalDuration=0}}};function Sprite_Card(){this.initialize.apply(this,arguments)}Sprite_Card.prototype=Object.create(Sprite_CardBase.prototype);Sprite_Card.prototype.constructor=Sprite_Card;Sprite_Card.prototype.initialize=function(itemId,card,playerDeck){this._itemId=itemId;this._card=card;this._playerDeck=playerDeck;Sprite_CardBase.prototype.initialize.call(this);this.setupCardBack();this.setupCardFront();this.setupCardMask();this.setupDetails();this.setupAnimationSprite()};Sprite_Card.prototype.setupCardBack=function(){if(!this._backContainer){this._backContainer=new Sprite;this._backContainer.bitmap=new Bitmap(1,1);this._backContainer.bitmap._smooth=true;this._backContainer.bitmap._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR;this.addChild(this._backContainer)}if(!this._cardBackSprite){this._cardBackSprite=new Sprite;this._backContainer.addChild(this._cardBackSprite)}this._cardBackSprite.bitmap=this.getCardBackImage();this._cardBackSprite.bitmap.addLoadListener(this.setupCardBackLoaded.bind(this))};Sprite_Card.prototype.getCardBackImage=function(){return ImageManager.loadPicture(this.cardBackImageFilename())};Sprite_Card.prototype.cardBackImageFilename=function(){if(this._playerDeck){return $gameTemp._playerDeckSleeves||Imported.Irina_CardGameCore.CardBackImg}else{return $gameTemp._opponentDeckSleeves||Imported.Irina_CardGameCore.CardBackImg}};Sprite_Card.prototype.setupCardBackLoaded=function(){var width=this._cardBackSprite.bitmap.width;var height=this._cardBackSprite.bitmap.height;this._cardBackSprite.setFrame(0,0,width/2,height);this._cardBackSprite.anchor.x=.5;this._cardBackSprite.anchor.y=.5;if(!this._cardBackSpriteFilter&&ConfigManager.cardAnimatedCards){this._cardBackSpriteFilter=new PIXI.filters.ColorMatrixFilter;this._cardBackSprite._filters=[this._cardBackSpriteFilter]}this.setupCardMainBitmap();this.setupCardBackLogo()};Sprite_Card.prototype.setupCardMainBitmap=function(){var width=this._cardBackSprite.bitmap.width;var height=this._cardBackSprite.bitmap.height;this.bitmap=new Bitmap(width/2,height);this.bitmap._smooth=true;this.bitmap._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR;this.setupMainFilters()};Sprite_Card.prototype.setupCardBackLogo=function(){if(!this._cardLogoSprite){this._cardLogoSprite=new Sprite;this._backContainer.addChild(this._cardLogoSprite)}this._cardLogoSprite.bitmap=this._cardBackSprite.bitmap;var width=this._cardLogoSprite.bitmap.width;var height=this._cardLogoSprite.bitmap.height;this._cardLogoSprite.setFrame(width/2,0,width/2,height);this._cardLogoSprite.anchor.x=.5;this._cardLogoSprite.anchor.y=.5};Sprite_Card.prototype.setupCardFront=function(){if(!this._frontContainer){this._frontContainer=new Sprite;this.addChild(this._frontContainer);this._frontContainer.bitmap=new Bitmap(1,1);this._frontContainer.bitmap._smooth=true;this._frontContainer.bitmap._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR}if(!this._cardFrontBgSprite){this._cardFrontBgSprite=new Sprite;this._frontContainer.addChild(this._cardFrontBgSprite)}var filename=this._card.template().ImgFile;this._cardFrontBgSprite.bitmap=ImageManager.loadPicture(filename);this._cardFrontBgSprite.bitmap.addLoadListener(this.setupCardFrontLoaded.bind(this))};Sprite_Card.prototype.setupCardFrontLoaded=function(){var width=this._cardFrontBgSprite.bitmap.width/4;var height=this._cardFrontBgSprite.bitmap.height;this.setupCardFrontBackground(width,height);this.setupCardFrontParallaxBG(width,height);this.setupCardFrontHoloBG(width,height);this.setupCardFrontArt(width,height);this.setupDragonbones(width,height);this.setupDragonbonesAnimation(width,height);this.setupCardFrontParallaxFG(width,height);this.setupCardFrontHoloFG(width,height);this.setupCardFrontBorder(width,height);this.setupCardFrontBattleResults(width,height);this.setupCardFrontTextbox(width,height);this.setupCardFrontIcons(width,height);this.setupCardFrontDrawLayer(width,height);this.setupCardFrontHoloDrawLayer(width,height);this.setupCardFrontTextWindow(width,height);this.refresh()};Sprite_Card.prototype.setupCardFrontBackground=function(width,height){this._cardFrontBgSprite.setFrame(width*0,0,width,height);this._cardFrontBgSprite.anchor.x=.5;this._cardFrontBgSprite.anchor.y=.5};Sprite_Card.prototype.setupCardFrontParallaxBG=function(width,height){if(!this._cardFrontParallaxBG){this._cardFrontParallaxBG=new TilingSprite;this._frontContainer.addChild(this._cardFrontParallaxBG)}this._cardFrontParallaxBG.bitmap=this._card.getCardParallaxBgBitmap();this._cardFrontParallaxBG.blendMode=this._card.parallaxBGBlendMode();this._cardFrontParallaxBG.opacity=this._card.parallaxBGOpacity();this._cardFrontParallaxBG.origin.x=0;this._cardFrontParallaxBG.origin.y=0;this._cardFrontParallaxBG.move(width/-2,height/-2,width,height)};Sprite_Card.prototype.setupCardFrontHoloBG=function(width,height){if(!this._cardFrontHoloBgSprite){this._cardFrontHoloBgSprite=new Sprite;this._frontContainer.addChild(this._cardFrontHoloBgSprite)}this._cardFrontHoloBgSprite.bitmap=this._card.getCardHoloBgBitmap();this._cardFrontHoloBgSprite.opacity=this._card.holoBGOpacity();this._cardFrontHoloBgSprite.anchor.x=.5;this._cardFrontHoloBgSprite.anchor.y=.5;if(!this._cardHoloBGHueFilter&&ConfigManager.cardAnimatedCards){this._cardHoloBGHueFilter=new PIXI.filters.ColorMatrixFilter;this._cardHoloBGHueFilter.blendMode=this._card.holoBGBlendMode();this._cardFrontHoloBgSprite._filters=[this._cardHoloBGHueFilter]}};Sprite_Card.prototype.setupCardFrontArt=function(width,height){if(!this._cardFrontArtSprite){this._cardFrontArtSprite=new Sprite;this._frontContainer.addChild(this._cardFrontArtSprite)}this._cardFrontArtSprite.bitmap=this._card.getCardArtBitmap();this._cardFrontArtSprite.x=this._card.artOffsets()[0];this._cardFrontArtSprite.y=this._card.artOffsets()[1];this._cardFrontArtSprite.scale.x=this._card.artScale();this._cardFrontArtSprite.scale.y=Math.abs(this._card.artScale());this._cardFrontArtSprite.anchor.x=.5;this._cardFrontArtSprite.anchor.y=.5};Sprite_Card.prototype.setupDragonbones=function(width,height){if(!Imported.KELYEP_DragonBones)return;if(this._card.dragonbones()==="")return;if(this._dragonbone){this._frontContainer.removeChild(this._dragonbone);this._dragonbone.dispose()}this._dragonbone=dragonBonesIntegration.CreateArmature(this._card.dragonbones());this._frontContainer.addChild(this._dragonbone);this._dragonbone.x=this._card.artOffsets()[0];this._dragonbone.y=this._card.artOffsets()[1];this._dragonbone.scale.x=this._card.artScale();this._dragonbone.scale.y=Math.abs(this._card.artScale())};Sprite_Card.prototype.setupDragonbonesAnimation=function(width,height){if(!Imported.KELYEP_DragonBones)return;if(this._card.dragonbones()==="")return;var aniKey=this._card.dragonbonesAnimation();var originalPlayTimes=this._dragonbone.animation._animations[aniKey].playTimes;this._dragonbone.animation._animations[aniKey].playTimes=0;this._dragonbone.animation.play(aniKey);this._dragonbone.animation._animations[aniKey].playTimes=originalPlayTimes};Sprite_Card.prototype.setupCardFrontParallaxFG=function(width,height){if(!this._cardFrontParallaxFG){this._cardFrontParallaxFG=new TilingSprite;this._frontContainer.addChild(this._cardFrontParallaxFG)}this._cardFrontParallaxFG.bitmap=this._card.getCardParallaxFGBitmap();this._cardFrontParallaxFG.blendMode=this._card.parallaxFGBlendMode();this._cardFrontParallaxFG.opacity=this._card.parallaxFGOpacity();this._cardFrontParallaxFG.origin.x=0;this._cardFrontParallaxFG.origin.y=0;this._cardFrontParallaxFG.move(width/-2,height/-2,width,height)};Sprite_Card.prototype.setupCardFrontHoloFG=function(width,height){if(!this._cardFrontHoloFgSprite){this._cardFrontHoloFgSprite=new Sprite;this._frontContainer.addChild(this._cardFrontHoloFgSprite)}this._cardFrontHoloFgSprite.bitmap=this._card.getCardHoloFGBitmap();this._cardFrontHoloFgSprite.opacity=this._card.holoFGOpacity();this._cardFrontHoloFgSprite.anchor.x=.5;this._cardFrontHoloFgSprite.anchor.y=.5;if(!this._cardHoloFGHueFilter&&ConfigManager.cardAnimatedCards){this._cardHoloFGHueFilter=new PIXI.filters.ColorMatrixFilter;this._cardHoloFGHueFilter.blendMode=this._card.holoFGBlendMode();this._cardFrontHoloFgSprite._filters=[this._cardHoloFGHueFilter]}};Sprite_Card.prototype.setupCardFrontBorder=function(width,height){if(!this._cardFrontBorderSprite){this._cardFrontBorderSprite=new Sprite;this._frontContainer.addChild(this._cardFrontBorderSprite)}this._cardFrontBorderSprite.bitmap=this._cardFrontBgSprite.bitmap;this._cardFrontBorderSprite.setFrame(width*1,0,width,height);this._cardFrontBorderSprite.blendMode=Imported.Irina_CardGameCore.CardFrontBorderBlendMode;this._cardFrontBorderSprite.anchor.x=.5;this._cardFrontBorderSprite.anchor.y=.5};Sprite_Card.prototype.setupCardFrontBattleResults=function(width,height){if(!this._cardFrontBattleResultsSprite){this._cardFrontBattleResultsSprite=new Sprite;this._frontContainer.addChild(this._cardFrontBattleResultsSprite);this._cardFrontBattleResultsSprite.bitmap=ImageManager.loadPicture(Imported.Irina_CardGameCore.CardBattleResultsImg)}this._cardFrontBattleResultsSprite.anchor.x=.5;this._cardFrontBattleResultsSprite.anchor.y=.5;this._battleResultsIndex=-1;this._cardFrontBattleResultsSprite.setFrame(0,0,0,0);this._cardFrontBattleResultsSprite.opacity=0};Sprite_Card.prototype.setupCardFrontTextbox=function(width,height){if(!this._cardFrontTextSprite){this._cardFrontTextSprite=new Sprite;this._frontContainer.addChild(this._cardFrontTextSprite)}this._cardFrontTextSprite.bitmap=this._cardFrontBgSprite.bitmap;this._cardFrontTextSprite.setFrame(width*2,0,width,height);this._cardFrontTextSprite.blendMode=Imported.Irina_CardGameCore.CardFrontTextboxBlendMode;this._cardFrontTextSprite.anchor.x=.5;this._cardFrontTextSprite.anchor.y=.5};Sprite_Card.prototype.setupCardFrontIcons=function(width,height){if(!this._cardFrontIconSprite){this._cardFrontIconSprite=new Sprite;this._frontContainer.addChild(this._cardFrontIconSprite)}this._cardFrontIconSprite.bitmap=this._cardFrontBgSprite.bitmap;this._cardFrontIconSprite.setFrame(width*3,0,width,height);this._cardFrontIconSprite.blendMode=Imported.Irina_CardGameCore.CardFrontIconBlendMode;this._cardFrontIconSprite.anchor.x=.5;this._cardFrontIconSprite.anchor.y=.5};Sprite_Card.prototype.setupCardFrontDrawLayer=function(width,height){if(!this._cardFrontDrawSprite){this._cardFrontDrawSprite=new Sprite;this._frontContainer.addChild(this._cardFrontDrawSprite)}this._cardFrontDrawSprite.bitmap=new Bitmap(width,height);this._cardFrontDrawSprite.anchor.x=.5;this._cardFrontDrawSprite.anchor.y=.5};Sprite_Card.prototype.setupCardFrontHoloDrawLayer=function(width,height){if(!this._cardFrontHoloDrawSprite){this._cardFrontHoloDrawSprite=new Sprite;this._frontContainer.addChild(this._cardFrontHoloDrawSprite)}this._cardFrontHoloDrawSprite.bitmap=new Bitmap(width,height);this._cardFrontHoloDrawSprite.anchor.x=.5;this._cardFrontHoloDrawSprite.anchor.y=.5;if(!this._cardHoloDrawHueFilter&&ConfigManager.cardAnimatedCards){this._cardHoloDrawHueFilter=new PIXI.filters.ColorMatrixFilter;this._cardFrontHoloDrawSprite._filters=[this._cardHoloDrawHueFilter]}};Sprite_Card.prototype.setupCardFrontTextWindow=function(width,height){if(this._cardFrontTextWindow){this._frontContainer.removeChild(this._cardFrontTextWindow)}this._cardFrontTextWindow=new Window_CardEffectText(this._card,this._cardFrontBgSprite);this._frontContainer.addChild(this._cardFrontTextWindow)};Sprite_Card.prototype.setupCardMask=function(){if(!this._maskSprite){this._maskSprite=new Sprite;this.addChildAt(this._maskSprite,0)}this._maskSprite.bitmap=ImageManager.loadPicture(Imported.Irina_CardGameCore.CardMaskImg);this._maskSprite.bitmap.addLoadListener(this.setupCardMaskLoaded.bind(this))};Sprite_Card.prototype.setupCardMaskLoaded=function(){var width=this._maskSprite.bitmap.width;var height=this._maskSprite.bitmap.height;this._maskSprite.bitmap._smooth=true;this._maskSprite.bitmap._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR;this._maskSprite.setFrame(0,0,width,height);this._maskSprite.anchor.x=.5;this._maskSprite.anchor.y=.5;this._maskSprite._mask=this._maskSprite;this._backContainer._mask=this._maskSprite;this._frontContainer._mask=this._maskSprite};Sprite_Card.prototype.setupMainFilters=function(){this._filters=[];this.setupOutlineFilter();this.setupAuraFilter()};Sprite_Card.prototype.setupOutlineFilter=function(){var thickness=Imported.Irina_CardGameCore.CardOutlineThickness;var color=Imported.Irina_CardGameCore.CardOutlineColor;this._filters.push(new PIXI.filters.OutlineFilter(thickness,color))};Sprite_Card.prototype.setupAuraFilter=function(){this._auraVisible=false;var color=this.getAuraFilterColor();this._auraFilter=new PIXI.filters.GlowFilter(20,0,0,color);this._filters.push(this._auraFilter)};Sprite_Card.prototype.getAuraFilterColor=function(){var rarityColor=this._card.rarityColor();if(rarityColor.match(/(?:rainbow|holo)/i)){return"0xffffc0"}else{return this.RGBToHex(rarityColor)}};Sprite_Card.prototype.RGBToHex=function(rgb){rgb=rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return rgb&&rgb.length===4?"0x"+("0"+parseInt(rgb[1],10).toString(16)).slice(-2)+("0"+parseInt(rgb[2],10).toString(16)).slice(-2)+("0"+parseInt(rgb[3],10).toString(16)).slice(-2):""};Sprite_Card.prototype.hsvToRgb=function(h,s,v){var r,g,b;var i;var f,p,q,t;h=Math.max(0,Math.min(360,h));s=Math.max(0,Math.min(100,s));v=Math.max(0,Math.min(100,v));s/=100;v/=100;if(s===0){r=g=b=v;return[Math.round(r*255),Math.round(g*255),Math.round(b*255)]}h/=60;i=Math.floor(h);f=h-i;p=v*(1-s);q=v*(1-s*f);t=v*(1-s*(1-f));switch(i){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;default:r=v;g=p;b=q}return[Math.round(r*255),Math.round(g*255),Math.round(b*255)]};Sprite_Card.prototype.setupDetails=function(){this.x=Graphics.boxWidth/2;this.y=Graphics.boxHeight/2;this._backShowing=false;this._flipDuration=-1;this._flipTotalDuration=-1};Sprite_Card.prototype.setupAnimationSprite=function(){this._animationTarget=new Sprite_Base;this.addChild(this._animationTarget)};Sprite_Card.prototype.startAnimation=function(animation,mirror,delay){if(this._animationTarget){this.removeChild(this._animationTarget);this.addChild(this._animationTarget);this._animationTarget.startAnimation(animation,mirror,delay)}};Sprite_Card.prototype.isAnimationPlaying=function(){if(this._animationTarget)return this._animationTarget.isAnimationPlaying();return false};Sprite_Card.prototype.update=function(){Sprite_CardBase.prototype.update.call(this);this.updateFlip();this.updateCardMask();this.updateCardBack();this.updateCardFront();this.updateCardFace();this.updateCardAura();this.updateCardCell();this.updateOpacity();this.smoothOutAllSprites()};Sprite_Card.prototype.updateFlip=function(){if(this._flipDuration>=0){var d=this._flipDuration;var t=Math.max(2,this._flipTotalDuration);if(d>t/2){var scale=(d-t/2)/(t/2)}else if(d===t/2){var scale=0;this._backShowing=!this._backShowing}else{var scale=(t/2-d)/(t/2)}this.scale.x=scale*this._baseScale;this._flipDuration--}};Sprite_Card.prototype.updateCardMask=function(){if(this._backShowing){this._maskSprite.scale.x=-1}else{this._maskSprite.scale.x=1}};Sprite_Card.prototype.updateCardBack=function(){if(this._cardBackSpriteFilter){this._cardBackHue=this._cardBackHue||0;if(ConfigManager.cardAnimatedCards){this._cardBackHue+=Imported.Irina_CardGameCore.CardBackHueShift;while(this._cardBackHue>=360){this._cardBackHue-=360}this._cardBackSpriteFilter.hue(this._cardBackHue)}}};Sprite_Card.prototype.dontAnimateFront=function(value){this._dontAnimateFront=value};Sprite_Card.prototype.isAnimateFront=function(){if(this._dontAnimateFront)return false;return ConfigManager.cardAnimatedCards};Sprite_Card.prototype.updateCardFront=function(){if(this._backShowing)return;this.updateCardFrontBattleResults();if(this.isAnimateFront()){this.updateCardFrontFilters();this.updateCardFrontParallax()}};Sprite_Card.prototype.updateCardFrontFilters=function(){if(this._cardHoloBGHueFilter){this._cardHoloBgHue=this._cardHoloBgHue||0;this._cardHoloBgHue+=this._card.holoBGSpeed();while(this._cardHoloBgHue>=360){this._cardHoloBgHue-=360}this._cardHoloBGHueFilter.hue(this._cardHoloBgHue)}if(this._cardHoloFGHueFilter){this._cardHoloFgHue=this._cardHoloFgHue||0;this._cardHoloFgHue+=this._card.holoFGSpeed();while(this._cardHoloFgHue>=360){this._cardHoloFgHue-=360}this._cardHoloFGHueFilter.hue(this._cardHoloFgHue)}if(this._cardHoloDrawHueFilter){this._cardHoloDrawHue=this._cardHoloDrawHue||0;this._cardHoloDrawHue+=this._card.holoBGSpeed();while(this._cardHoloDrawHue>=360){this._cardHoloDrawHue-=360}this._cardHoloDrawHueFilter.hue(this._cardHoloDrawHue)}};Sprite_Card.prototype.updateCardFrontParallax=function(){if(this._cardFrontParallaxBG){this._cardFrontParallaxBG.origin.x+=this._card.parallaxBGSpeed()[0];this._cardFrontParallaxBG.origin.y+=this._card.parallaxBGSpeed()[1]}if(this._cardFrontParallaxFG){this._cardFrontParallaxFG.origin.x+=this._card.parallaxFGSpeed()[0];this._cardFrontParallaxFG.origin.y+=this._card.parallaxFGSpeed()[1]}};Sprite_Card.prototype.updateCardFrontBattleResults=function(){if(this._cardFrontBattleResultsSprite){if(this._battleResultsIndex<0){if(this._cardFrontBattleResultsSprite.opacity>0){this._cardFrontBattleResultsSprite.opacity-=16}else{this._cardFrontBattleResultsSprite.setFrame(0,0,0,0)}}else{var width=this._cardFrontBattleResultsSprite.bitmap.width/4;var height=this._cardFrontBattleResultsSprite.bitmap.height;var x=width*this._battleResultsIndex;this._cardFrontBattleResultsSprite.opacity+=16;this._cardFrontBattleResultsSprite.setFrame(x,0,width,height)}}};Sprite_Card.prototype.setBattleResult=function(index){this._battleResultsIndex=index;this.updateCardFrontBattleResults()};Sprite_Card.prototype.clearBattleResult=function(){this._battleResultsIndex=-1;this.updateCardFrontBattleResults()};Sprite_Card.prototype.updateCardFace=function(){if(this._backContainer)this._backContainer.visible=this._backShowing;if(this._frontContainer)this._frontContainer.visible=!this._backShowing};Sprite_Card.prototype.updateCardAura=function(){if(!this._auraVisible)return;if(this._backShowing||this._card.rarity()<=0){this._auraFilter.innerStrength=0;this._auraFilter.outerStrength=0;return}var frequency=80/this._card.rarity();this._auraFilter.innerStrength=Math.abs(Math.sin(Graphics.frameCount/frequency)*(this._card.rarity()*2).clamp(1,4));this._auraFilter.outerStrength=Math.abs(Math.sin(Graphics.frameCount/frequency)*(this._card.rarity()*2).clamp(2,4));if(this._card.rarityColor().match(/(?:rainbow|holo)/i)){this._auraFilterIndex=this._auraFilterIndex||0;var color=CardManager.holoGlowFilterArray()[this._auraFilterIndex];this._auraFilter.color=this.RGBToHex(color);this._auraFilterIndex++;if(this._auraFilterIndex>=CardManager.holoGlowFilterArray().length)this._auraFilterIndex=0}else{this._auraFilter.color=this.getAuraFilterColor()}};Sprite_Card.prototype.updateCardCell=function(){if(!this._cardFrontArtSprite)return;var bitmap=this._cardFrontArtSprite.bitmap;var index=this._card.artCellIndex();var col=this._card.artCells()[0];var row=this._card.artCells()[1];var pw=bitmap.width/col;var ph=bitmap.height/row;var sx=index%col*pw;var sy=Math.floor(index/col)*ph;this._cardFrontArtSprite.setFrame(sx,sy,pw,ph)};Sprite_Card.prototype.updateOpacity=function(){if(this._opacityDuration>0){var d=this._opacityDuration;this.opacity=(this.opacity*(d-1)+this._targetOpacity)/d;this._opacityDuration--}};Sprite_Card.prototype.changeOpacity=function(target,duration){this.fadeTo(target,duration)};Sprite_Card.prototype.fadeTo=function(target,duration){this._targetOpacity=target;this._opacityDuration=duration;if(duration<=0)this.opacity=this._targetOpacity};Sprite_Card.prototype.fadeIn=function(duration){if(duration===undefined)duration=20;this.fadeTo(255,duration)};Sprite_Card.prototype.fadeOut=function(duration){if(duration===undefined)duration=20;this.fadeTo(0,duration)};Sprite_Card.prototype.flip=function(duration,showBack,sound){if(showBack===true&&this._backShowing)return;if(showBack===false&&!this._backShowing)return;if(duration===undefined)duration=20;if(duration<=0)duration=2;if(duration%1)duration+=1;if(sound===undefined)sound=true;this._flipDuration=duration;this._flipTotalDuration=duration;var flipSound={name:Imported.Irina_CardGameCore.FlipSound,volume:90,pitch:100,pan:0};if(this.opacity<=0)return;var delay=1e3/60*duration/3;setTimeout(AudioManager.playSe.bind(AudioManager,flipSound),delay)};Sprite_Card.prototype.refresh=function(){this.drawOnFrontCard();this._cardFrontTextWindow.refresh();this.smoothOutAllSprites()};Sprite_Card.prototype.drawOnFrontCard=function(){this._card.template().DrawCode.call(this);this.smoothOutAllSprites()};Sprite_Card.prototype.smoothOutAllSprites=function(){var sprites=this.getAllSprites();for(var i=0;i<sprites.length;i++){var sprite=sprites[i];if(sprite&&sprite.bitmap&&sprite.bitmap.width>0){sprite.bitmap._smooth=true;sprite.bitmap._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR}}};Sprite_Card.prototype.getAllSprites=function(){return[this,this._maskSprite,this._cardBackSprite,this._cardLogoSprite,this._cardFrontBgSprite,this._cardFrontParallaxBG,this._cardFrontHoloBgSprite,this._cardFrontArtSprite,this._cardFrontParallaxFG,this._cardFrontHoloFgSprite,this._cardFrontBorderSprite,this._cardFrontTextSprite,this._cardFrontIconSprite,this._cardFrontDrawSprite,this._cardFrontHoloDrawSprite]};Object.defineProperty(Window.prototype,"holoContents",{get:function(){return this._holoContentsSprite.bitmap},set:function(value){this._holoContentsSprite.bitmap=value},configurable:true});Imported.Irina_CardGameCore.Window_createAllParts=Window.prototype._createAllParts;Window.prototype._createAllParts=function(){Imported.Irina_CardGameCore.Window_createAllParts.call(this);this.createHoloContentsSprite()};Window.prototype.createHoloContentsSprite=function(){this._holoContentsSprite=new Sprite;this._windowContentsSprite.addChild(this._holoContentsSprite);if(!ConfigManager.cardAnimatedCards)return;this._holoContentsFilter=new PIXI.filters.ColorMatrixFilter;this._holoContentsSprite._filters=[this._holoContentsFilter]};Imported.Irina_CardGameCore.Window_update=Window.prototype.update;Window.prototype.update=function(){Imported.Irina_CardGameCore.Window_update.call(this);if(this._holoContentsFilter){this._holoContentsHue=this._holoContentsHue||0;if(ConfigManager.cardAnimatedCards){this._holoContentsHue+=this.cardHoloSpeed();while(this._holoContentsHue>=360){this._holoContentsHue-=360}this._holoContentsFilter.hue(this._holoContentsHue)}}};Imported.Irina_CardGameCore.Window_Base_createContents=Window_Base.prototype.createContents;Window_Base.prototype.createContents=function(){Imported.Irina_CardGameCore.Window_Base_createContents.call(this);this.holoContents=new Bitmap(this.contentsWidth(),this.contentsHeight());this.contents._holoLink=this.holoContents;this.holoContentsSynchronize()};Imported.Irina_CardGameCore.Bitmap_clear=Bitmap.prototype.clear;Bitmap.prototype.clear=function(){Imported.Irina_CardGameCore.Bitmap_clear.call(this);if(this._holoLink)this._holoLink.clear()};Imported.Irina_CardGameCore.Bitmap_clearRect=Bitmap.prototype.clearRect;Bitmap.prototype.clearRect=function(x,y,width,height){Imported.Irina_CardGameCore.Bitmap_clearRect.call(this,x,y,width,height);if(this._holoLink)this._holoLink.clearRect(x,y,width,height)};Window_Base.prototype.holoContentsSynchronize=function(){this.holoContents.fontBold=this.contents.fontBold;this.holoContents.fontFace=this.contents.fontFace;this.holoContents.fontItalic=this.contents.fontItalic;this.holoContents.fontSize=this.contents.fontSize;this.holoContents.outlineColor=this.contents.outlineColor;this.holoContents.outlineWidth=this.contents.outlineWidth;this.holoContents.textColor=this.contents.textColor;this.holoContents.paintOpacity=this.contents.paintOpacity};Window_Base.prototype.cardHoloSpeed=function(){if(this._cardHoloSpeed!==undefined)return this._cardHoloSpeed;return Imported.Irina_CardGameCore.CardHoloHueShift*2};Window_Base.prototype.drawHoloText=function(text,x,y,maxWidth,align){this.holoContentsSynchronize();this.holoContents.textColor="rgba(255, 192, 192)";this.holoContents.drawText(text,x,y,maxWidth,this.lineHeight(),align)};Imported.Irina_CardGameCore.Window_Base_drawItemName=Window_Base.prototype.drawItemName;Window_Base.prototype.drawItemName=function(item,x,y,width){if(DataManager.isCard(item)){this.drawItemCardName(item,x,y,width)}else{Imported.Irina_CardGameCore.Window_Base_drawItemName.call(this,item,x,y,width)}};Window_Base.prototype.drawItemCardName=function(item,x,y,width){width=width||312;if(!item)return;var iconBoxWidth=Window_Base._iconWidth+4;this.resetTextColor();this.drawIcon(item.iconIndex,x+2,y+2);var name=item.note.match(/<Card Name: (.*)>/i)?String(RegExp.$1).trim():item.name;var rarityColor=CardManager.rarityColor(item.id);if(rarityColor.match(/(?:rainbow|holo)/i)){this.drawHoloText(name,x+iconBoxWidth,y,width-iconBoxWidth)}else{this.changeTextColor(rarityColor);this.drawText(name,x+iconBoxWidth,y,width-iconBoxWidth)}this.resetTextColor()};Window_Base.prototype.drawItemCardNumber=function(item,x,y,width){var count=0;for(var i=0;i<this._cards.length;i++){if(item===this._cards[i])count++}var numberWidth=this.textWidth("0000")+this.textPadding();var text="x"+count;this.resetTextColor();this.drawText(text,x,y,numberWidth,"right")};function Window_CardEffectText(){this.initialize.apply(this,arguments)}Window_CardEffectText.prototype=Object.create(Window_Base.prototype);Window_CardEffectText.prototype.constructor=Window_CardEffectText;Window_CardEffectText.prototype.initialize=function(card,refSprite){this._card=card;this._refSprite=refSprite;var rw=this._refSprite.width;var rh=this._refSprite.height;var x=this._card.template().TextboxX-rw/2;var y=this._card.template().TextboxY-rh/2;var w=this._card.template().TextboxWidth;var h=this._card.template().TextboxHeight;Window_Base.prototype.initialize.call(this,x,y,w,h);this.opacity=0};Window_CardEffectText.prototype.standardPadding=function(){return this.textPadding()};Window_CardEffectText.prototype.standardBackOpacity=function(){return 0};Window_CardEffectText.prototype.lineHeight=function(){return Math.round(Window_Base.prototype.lineHeight.call(this)*this._card.textScale())};Window_CardEffectText.prototype.normalColor=function(){return"rgba(0, 0, 0, 1)"};Window_CardEffectText.prototype.resetFontSettings=function(){this.contents.fontFace="Arial";this.contents.fontSize=this.standardFontSize()*this._card.textScale();this.contents.outlineColor="rgba(0, 0, 0, 0)";this.resetTextColor()};Window_CardEffectText.prototype.processDrawIcon=function(iconIndex,textState){this.drawIcon(iconIndex,textState.x+2,textState.y+2);textState.x+=Math.round(Window_Base._iconWidth*this._card.textScale())+4};Window_CardEffectText.prototype.drawIcon=function(iconIndex,x,y){var bitmap=ImageManager.loadSystem("IconSet");var pw=Window_Base._iconWidth;var ph=Window_Base._iconHeight;var sx=iconIndex%16*pw;var sy=Math.floor(iconIndex/16)*ph;var rate=this._card.textScale();this.contents.blt(bitmap,sx,sy,pw,ph,x,y,Math.round(pw*rate),Math.round(ph*rate))};Window_CardEffectText.prototype.resize=function(){var rw=this._refSprite.width;var rh=this._refSprite.height;this.x=this._card.template().TextboxX-rw/2;this.y=this._card.template().TextboxY-rh/2;this.width=this._card.template().TextboxWidth;this.height=this._card.template().TextboxHeight;this.createContents();this.refresh()};Window_CardEffectText.prototype.refresh=function(){this.contents.clear();this.contents._smooth=true;this.contents._baseTexture.scaleMode=PIXI.SCALE_MODES.LINEAR;var text=this._card.text();this.drawTextEx(text,this.textPadding()/2,0)};function Window_CardList(){this.initialize.apply(this,arguments)}Window_CardList.prototype=Object.create(Window_ItemList.prototype);Window_CardList.prototype.constructor=Window_CardList;Window_CardList.prototype.initialize=function(cards,times,shownCard){this._cards=cards;this._times=times;Imported.Irina_CardGameCore.BoosterWindowInitialize.call(this);if(shownCard)this.createShownCard()};Window_CardList.prototype.maxCols=function(){return 1};Window_CardList.prototype.createSubWindows=function(){this.createTitleWindow();this.createUnderWindow()};Window_CardList.prototype.textWidthEx=function(text){return this.drawTextEx(text,0,this.contents.height)};Window_CardList.prototype.createTitleWindow=function(){Imported.Irina_CardGameCore.BoosterWindowCreateTitleWindow.call(this)};Window_CardList.prototype.createUnderWindow=function(){Imported.Irina_CardGameCore.BoosterWindowCreateUnderWindow.call(this)};Window_CardList.prototype.createShownCard=function(){Imported.Irina_CardGameCore.BoosterWindowCreateShownCard.call(this)};Window_CardList.prototype.isEnabled=function(item){return true};Window_CardList.prototype.makeItemList=function(){this._data=[];for(var i=0;i<this._cards.length;i++){var item=this._cards[i];if(item&&!this._data.contains(item)){this._data.push(item);this.loadItemImages(item)}}};Window_CardList.prototype.loadItemImages=function(item){var note=item.note;if(note.match(/<Card Art: (.*)>/i)){var array=String(RegExp.$1).trim().split(",");var folder="img/"+array[0].trim()+"/";ImageManager.loadBitmap(folder,array[1].trim(),Number(array[2])||0,eval(array[3]||"true"))}if(note.match(/<Card Parallax BG: (.*)>/i)){ImageManager.loadParallax(String(RegExp.$1).trim())}if(note.match(/<Card Parallax FG: (.*)>/i)){ImageManager.loadParallax(String(RegExp.$1).trim())}if(note.match(/<Card Holo BG: (.*)>/i)){ImageManager.loadPicture(String(RegExp.$1).trim())}if(note.match(/<Card Holo FG: (.*)>/i)){ImageManager.loadPicture(String(RegExp.$1).trim())}if(note.match(/<Card Template: (.*)>/i)){ImageManager.loadPicture(String(RegExp.$1).trim())}};Window_CardList.prototype.drawItem=function(index){var item=this._data[index];if(!item)return;Imported.Irina_CardGameCore.BoosterWindowDrawItem.apply(this,[index,item])};Window_CardList.prototype.close=function(){Window_Base.prototype.close.call(this);if(this._titleWindow)this._titleWindow.close();if(this._underWindow)this._underWindow.close();if(this._shownCard)this._shownCard.sprite().fadeOut()};Window_CardList.prototype.callUpdateHelp=function(){if(this._shownCard&&!this._lastSelectedItem!==this.item()){this._lastSelectedItem=this.item();this._shownCard.changeCard(this.item().id)}};Imported.Irina_CardGameCore.Scene_Base_initialize=Scene_Base.prototype.initialize;Scene_Base.prototype.initialize=function(){Imported.Irina_CardGameCore.Scene_Base_initialize.call(this);CardManager.reset()};Scene_Base.prototype.cardContainer=function(){if(!this._cardContainer){this._cardContainer=new Sprite;this.addChild(this._cardContainer)}return this._cardContainer};Scene_Base.prototype.disposeCardSprite=function(card){this.cardContainer().removeChild(card.sprite())};Scene_Base.prototype.openCardBoosterWindow=function(cards,times){$gameTemp._cardBoosterWindowOpened=true;this._active=false;this.sortCards(cards);this.createCardBoosterWindow(cards,times)};Scene_Base.prototype.sortCards=function(cards){cards.sort(function(a,b){var nameA=a.name;var nameB=b.name;if(a.note.match(/<Card Name: (.*)>/i))nameA=String(RegExp.$1).trim();if(b.note.match(/<Card Name: (.*)>/i))nameB=String(RegExp.$1).trim();return nameA===nameB?0:+(nameA>nameB)||-1})};Scene_Base.prototype.createCardBoosterWindow=function(cards,times){this._cardListWindow=new Window_CardList(cards,times,true);this.addChild(this._cardListWindow);this._cardListWindow.createSubWindows();this._cardListWindow.select(0);this._cardListWindow.activate();this._cardListWindow.setHandler("ok",this.closeBoosterWindow.bind(this));this._cardListWindow.setHandler("cancel",this.closeBoosterWindow.bind(this))};Scene_Base.prototype.closeBoosterWindow=function(){this._cardListWindow.close();setTimeout(this.removeChild.bind(this,this._cardListWindow),150);$gameTemp._cardBoosterWindowOpened=false;this._active=true};Imported.Irina_CardGameCore.Game_Player_canMove=Game_Player.prototype.canMove;Game_Player.prototype.canMove=function(){if($gameTemp._cardBoosterWindowOpened)return false;return Imported.Irina_CardGameCore.Game_Player_canMove.call(this)};Imported.Irina_CardGameCore.Game_Event_updateSelfMovement=Game_Event.prototype.updateSelfMovement;Game_Event.prototype.updateSelfMovement=function(){if($gameTemp._cardBoosterWindowOpened)return false;Imported.Irina_CardGameCore.Game_Event_updateSelfMovement.call(this)};Imported.Irina_CardGameCore.Scene_Map_isMenuEnabled=Scene_Map.prototype.isMenuEnabled;Scene_Map.prototype.isMenuEnabled=function(){if($gameTemp._cardBoosterWindowOpened)return false;return Imported.Irina_CardGameCore.Scene_Map_isMenuEnabled.call(this)};Imported.Irina_CardGameCore.Scene_Boot_create=Scene_Boot.prototype.create;Scene_Boot.prototype.create=function(){Imported.Irina_CardGameCore.Scene_Boot_create.call(this);if(Imported.Irina_CardGameCore.CardPreload)this.loadCardGameCoreImages()};Scene_Boot.prototype.loadCardGameCoreImages=function(){ImageManager.reservePicture(Imported.Irina_CardGameCore.CardMaskImg);ImageManager.reservePicture(Imported.Irina_CardGameCore.CardBackImg);var templates=Imported.Irina_CardGameCore.Templates;for(var i=0;i<templates.length;i++){ImageManager.reservePicture(templates[i].ImgFile)}};Imported.Irina_CardGameCore.Scene_Item_useItem=Scene_Item.prototype.useItem;Scene_Item.prototype.useItem=function(){Imported.Irina_CardGameCore.Scene_Item_useItem.call(this);this.openCardBoosterPack(1)};Scene_Item.prototype.openCardBoosterPack=function(times){if(!DataManager.isCardBooster(this.item()))return;Imported.Irina_CardGameCore.ItemCoreBoosterActionOpen.call(this);if(ConfigManager.cardBoosterAnimation){$openCardBoosterScene(this.item().id,times,false)}else{$openCardBoosterWindow(this.item().id,times,false)}};Imported.Irina_CardGameCore.Scene_Item_activateItemWindow=Scene_Item.prototype.activateItemWindow;Scene_Item.prototype.activateItemWindow=function(){if($gameTemp._cardBoosterWindowOpened)return;Imported.Irina_CardGameCore.Scene_Item_activateItemWindow.call(this);if(!this._itemWindow.item()){this._itemWindow.select(Math.max(0,this._itemWindow.index()-1));this._itemWindow.update()}};Scene_Item.prototype.closeBoosterWindow=function(){Scene_Base.prototype.closeBoosterWindow.call(this);this.activateItemWindow()};if(Imported.YEP_ItemCore&&Yanfly.Param.ItemSceneItem){Scene_Item.prototype.cardContainer=function(){if($gameTemp._cardBoosterWindowOpened)return Scene_Base.prototype.cardContainer.call(this);if(!this._infoWindow._cardContainer){this._infoWindow._cardContainer=new Sprite;this._infoWindow.addChild(this._infoWindow._cardContainer)}return this._infoWindow._cardContainer};Imported.Irina_CardGameCore.Scene_Item_createInfoWindow=Scene_Item.prototype.createInfoWindow;Scene_Item.prototype.createInfoWindow=function(){Imported.Irina_CardGameCore.Scene_Item_createInfoWindow.call(this);this.createInfoWindowCard()};Scene_Item.prototype.createInfoWindowCard=function(){this._infoWindow._card=CardManager.createCard(1,false);var sprite=this._infoWindow._card.sprite();sprite.opacity=0;sprite.x=this._infoWindow.width/2;sprite.y=this._infoWindow.height/2;sprite._auraVisible=Imported.Irina_CardGameCore.WindowRarityAuras;var targetHeight=this._infoWindow.height-this._infoWindow.standardPadding()*2;if(sprite.height>targetHeight){var rate=targetHeight/sprite.height;sprite._baseScale=rate}};Imported.Irina_CardGameCore.Window_ItemInfo_refresh=Window_ItemInfo.prototype.refresh;Window_ItemInfo.prototype.refresh=function(){this.holoContents.clear();this.updateCardImage();var dy=Imported.Irina_CardGameCore.Window_ItemInfo_refresh.call(this);this.updateCardBoosterImage();return dy};Window_ItemInfo.prototype.updateCardImage=function(){if(!this._card)return;if(this._item&&DataManager.isCard(this._item)){this._card.sprite().opacity=255;this._card.changeCard(this._item.id)}else if(this._card&&this._card.sprite()){this._card.sprite().opacity=0}};Window_ItemInfo.prototype.updateCardBoosterImage=function(){if(!DataManager.isCardBooster(this._item))return;var currentItem=this._item;bitmap=BoosterManager.getBoosterArt(currentItem);bitmap.addLoadListener(this.drawCardBoosterImage.bind(this,bitmap,currentItem))};Window_ItemInfo.prototype.drawCardBoosterImage=function(bitmap,item){if(item!==this._item)return;var cw=this.contents.width;var ch=this.contents.height;var bw=bitmap.width;var bh=bitmap.height;if(bw>cw||bh>ch){var scale=Math.min(cw/bw,ch/bh);bw*=scale;bh*=scale}var dx=Math.floor((cw-bw)/2);var dy=Math.floor((ch-bh)/2);this.contents.blt(bitmap,0,0,bitmap.width,bitmap.height,dx,dy,bw,bh)};Imported.Irina_CardGameCore.Window_ItemInfo_drawItemInfo=Window_ItemInfo.prototype.drawItemInfo;Window_ItemInfo.prototype.drawItemInfo=function(dy){if(this._card&&this._item&&DataManager.isCard(this._item))return dy;if(this._card&&this._item&&DataManager.isCardBooster(this._item))return dy;return Imported.Irina_CardGameCore.Window_ItemInfo_drawItemInfo.call(this,dy)};Imported.Irina_CardGameCore.Window_ItemActionCommand_addCustomCommandsA=Window_ItemActionCommand.prototype.addCustomCommandsA;Window_ItemActionCommand.prototype.addCustomCommandsA=function(){Imported.Irina_CardGameCore.Window_ItemActionCommand_addCustomCommandsA.call(this);if(DataManager.isCardBooster(this._item))this.addCardBoosterCommands()};Window_ItemActionCommand.prototype.addCardBoosterCommands=function(){Imported.Irina_CardGameCore.ItemCoreBoosterCommands.call(this)};Imported.Irina_CardGameCore.Scene_Item_createActionWindow=Scene_Item.prototype.createActionWindow;Scene_Item.prototype.createActionWindow=function(){Imported.Irina_CardGameCore.Scene_Item_createActionWindow.call(this);this._itemActionWindow.setHandler("openCardBooster",this.onActionOpenCardBooster.bind(this))};Scene_Item.prototype.onActionOpenCardBooster=function(){this._itemActionWindow.hide();this._itemActionWindow.deactivate();this.playSeForItem();$gameParty.setLastItem(this.item());var times=this._itemActionWindow.currentExt();if(this.item().consumable)$gameParty.loseItem(this.item(),times);this.openCardBoosterPack(times)}}function Scene_OpenCardBooster(){this.initialize.apply(this,arguments)}Scene_OpenCardBooster.prototype=Object.create(Scene_Base.prototype);Scene_OpenCardBooster.prototype.constructor=Scene_OpenCardBooster;Scene_OpenCardBooster.prototype.initialize=function(){Scene_Base.prototype.initialize.call(this)};Scene_OpenCardBooster.prototype.create=function(){Scene_Base.prototype.create.call(this);Scene_MenuBase.prototype.createBackground.call(this);this.applySceneAudio();this.createSpriteset();this.createWindowLayer();this.createWindows();this.resetPhases()};Scene_OpenCardBooster.prototype.prepare=function(itemId,times,consume){this._itemId=itemId;this._item=$dataItems[this._itemId];this._times=times;this._packCount=0;this._totalTimes=this._times;this._consume=consume;this._allItems=[];this._receivedItems=[];this._allCards=[];this._receivedCards=[]};Scene_OpenCardBooster.prototype.applySceneAudio=function(){if(!Imported.Irina_CardGameCore.PlayUniqueMusic)return;this._saveBgm=AudioManager.saveBgm();AudioManager.fadeOutBgm(Imported.Irina_CardGameCore.BoosterFadeOutBGM);var delay=Imported.Irina_CardGameCore.BoosterFadeOutBGM*1e3;var bgm={name:Imported.Irina_CardGameCore.BoosterMusicSong,volume:100,pitch:100,pan:0};setTimeout(AudioManager.playBgm.bind(AudioManager,bgm),delay)};Scene_OpenCardBooster.prototype.createSpriteset=function(){this._spriteset=new Spriteset_Base;this.addChild(this._spriteset);this._spriteset._baseSprite.addChild(this._backgroundSprite);this.removeChild(this._backgroundSprite);this._backgroundParallax=new TilingSprite;this._spriteset._baseSprite.addChild(this._backgroundParallax);this._backgroundParallax.bitmap=BoosterManager.getBoosterBG(this._item);this._backgroundParallax.opacity=0;this._backgroundParallax.move(0,0,Graphics.width,Graphics.height)};Scene_OpenCardBooster.prototype.createWindows=function(){Imported.Irina_CardGameCore.BoosterSceneCreateWindows.call(this)};Scene_OpenCardBooster.prototype.cardContainer=function(){if(!this._cardContainer){this._cardContainer=new Sprite;this._spriteset._baseSprite.addChild(this._cardContainer)}return this._cardContainer};Scene_OpenCardBooster.prototype.gotoNextPhase=function(){this._inputCooldown=60;this._phase+=1;var func="startPhase"+this._phase;this[func].call(this)};Scene_OpenCardBooster.prototype.resetPhases=function(){this._phase=0;this._times-=1;this._packCount+=1;this._receivedItems=CardManager.shuffle(BoosterManager.setup(this._itemId,1,this._consume));this._allItems=this._allItems.concat(this._receivedItems);this._allCards=this._allCards.concat(this._receivedCards);this._inputCooldown=60;this.gotoNextPhase()};Scene_OpenCardBooster.prototype.startPhase1=function(){Imported.Irina_CardGameCore.BoosterSceneStartPhase1.call(this)};Scene_OpenCardBooster.prototype.startPhase2=function(){Imported.Irina_CardGameCore.BoosterSceneStartPhase2.call(this)};Scene_OpenCardBooster.prototype.startPhase3=function(){Imported.Irina_CardGameCore.BoosterSceneStartPhase3.call(this)};Scene_OpenCardBooster.prototype.startPhaseSkip=function(){this._inputCooldown=60;this._phase="Skip";$gameScreen.startFadeOut(20);var ms=1e3/60;setTimeout(this.processPhaseSkip.bind(this),ms*21);setTimeout($gameScreen.startFadeIn.bind($gameScreen,20),ms*22);this._windowVisibilityCooldown=Infinity};Scene_OpenCardBooster.prototype.processPhaseSkip=function(){this._backgroundParallax.opacity=255;if(this._boosterSprite)this._boosterSprite.opacity=0;for(var i=0;i<CardManager._sprites.length;i++){CardManager._sprites[i].opacity=0}this._receivedItems=CardManager.shuffle(BoosterManager.setup(this._itemId,this._times,this._consume));this._times=0;this._allItems=this._allItems.concat(this._receivedItems);this._allCards=this._allCards.concat(this._receivedCards);this._phase=2;this._fromSkip=true;this.gotoNextPhase()};Scene_OpenCardBooster.prototype.update=function(){Scene_Base.prototype.update.call(this);$gameScreen.update();this.updatePhase()};Scene_OpenCardBooster.prototype.updatePhase=function(){if(this._phase===undefined)return;var func="updatePhase"+this._phase;this[func].call(this)};Scene_OpenCardBooster.prototype.updatePhase1=function(){Imported.Irina_CardGameCore.BoosterSceneUpdatePhase1.call(this)};Scene_OpenCardBooster.prototype.updatePhase2=function(){Imported.Irina_CardGameCore.BoosterSceneUpdatePhase2.call(this)};Scene_OpenCardBooster.prototype.updatePhase3=function(){Imported.Irina_CardGameCore.BoosterSceneUpdatePhase3.call(this)};Scene_OpenCardBooster.prototype.updatePhaseSkip=function(){Imported.Irina_CardGameCore.BoosterSceneUpdatePhaseSkip.call(this)};Scene_OpenCardBooster.prototype.updatePhaseFinished=function(){Imported.Irina_CardGameCore.BoosterSceneUpdatePhaseFinish.call(this)};Scene_OpenCardBooster.prototype.closeBoosterWindow=function(){Scene_Base.prototype.closeBoosterWindow.call(this);this._phase="Finished";AudioManager.fadeOutBgm(Imported.Irina_CardGameCore.BoosterFadeOutBGM);var delay=Imported.Irina_CardGameCore.BoosterFadeOutBGM*1e3;setTimeout(AudioManager.replayBgm.bind(AudioManager,this._saveBgm),delay);setTimeout(this.popScene.bind(this),1e3)};