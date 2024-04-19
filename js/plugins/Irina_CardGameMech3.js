/*:
 * @plugindesc <CardGameMechanics> for RMVMV 1.6.2. Place below Irina_CardGameCore and Irina_CardGameMechanics.
 * @author RPG Maker Irina
 *
 * @help
 * *** Introduction ***
 *
 *      This file is the third of three files to be included in the collectible
 * card game set of plugins and this one's primary focus is on providing many
 * functions that help compose the mechanics of a playable card game. The plugin
 * will not provide the battle structure. Instead, that is provided in the card
 * game sample project, as it is custom evented. This plugin's purpose is to
 * provide the functions and mechanics for the card game battle system itself.
 *
 *
 *
 * *** Instructions ***
 * 
 *      The plugin itself doesn't provide much to be accessible by itself as it
 * is your job as the game dev to make the provided functions work. However, the
 * sample project will provide the card game's custom evented battle system to
 * show you how it's done (or if you just want to use it as is). Download it
 * from the card game's project page:
 * 
 * https://atelieririna.itch.io/collectible-card-game
 * 
 *      If you wish to import the card game's custom evented battle system into
 * your game, then what you have to do is the following:
 * 
 * 1. Open up the Card Game sample project's game folder.
 * 2. Open up the Database and go to the Common Events tab.
 * 3. Mass select the Common Events from #891 to #1000.
 * 4. Copy them to clipboard.
 * 5. Open up your own game project.
 * 6. Open up the Database and go to the Common Events tab.
 * 7. Increase the maximum number of Common Events to 1000.
 * 8. Select Common Event slot #891.
 * 9. Paste from clipboard.
 * 10. Congratulations, you have now imported the whole custom battle system.
 * 
 *      If for whatever reason you wish to start at a different number (ie. if
 * you were already using those common events slots for something else), you
 * can paste them else where. However, you will need to readjust the common
 * events linked to them from within the pasted common events themselves or
 * else the custom evented battle system will not work.
 *
 * ---
 *
 * Variable 901 - Card Game Turn Count
 * Variable 902 - Card Game Phase
 * Variable 911 - Card Spell 1 Icon
 * Variable 912 - Card Spell 1 Name
 * Variable 913 - Card Spell 2 Icon
 * Variable 914 - Card Spell 2 Name
 * Variable 915 - Card Spell 3 Icon
 * Variable 916 - Card Spell 3 Name
 * Variable 917 - Card Spell 4 Icon
 * Variable 918 - Card Spell 4 Name
 *
 *      I also recommend raising your game project's variables to at least 920
 * and reserve the variable ID's listed above since they're used by the custom
 * evented battle system.
 *
 * ---
 * 
 *      Common Event #901: "Card Game Battle Flow <Merge>" has <Merge> in its
 * name. Do not remove the <Merge> since it is a vital part in making the
 * common event work (credits to Yanfly). What this does is make the common
 * event and all other sub-level common events that are ran from inside it
 * merge its contents into one continuous common event. Why is this done? It's
 * so that other common events can use the Label events on the <Merge> level.
 * 
 *      For that reason, be cautious of making common events loop into one
 * another. This is will cause an infinite loop and the game will crash. I am
 * not responsible if you do this and lock out your game.
 * 
 * ---
 *
 *
 *
 * *** Plugin Parameters ***
 *
 *      There are a lot of plugin parameters to set here although the majority
 * of them could be left as is. The ones you should pay attention to are the
 * ones at top:
 * 
 * ---
 * 
 * Mechanics: Merge on Boot
 * 
 *      This will cause the Common Event <Merge> to occur as the game boots up,
 * requiring less processing time in-game. To understand what the <Merge> is,
 * read the "Instructions" section above.
 * 
 * Mechanics: Variable: Turn Tracker
 * 
 *      This is the variable used to track the current turn count in the card
 * game custom evented battle system. Keep in mind that changing this variable
 * here will not change the one inside the common events. This will only change
 * the variable ID reference for the JavaScript code found in the rest of the
 * plugin parameters.
 * 
 * Mechanics: Variable: Phase Tracker
 * 
 *      This is the variable used to track the current phase in the card game
 * custom evented battle system. Keep in mind that changing this variable here
 * will not change the one inside the common events. This will only change the
 * variable ID reference for the JavaScript code found in the rest of the
 * plugin parameters.
 *
 * ---
 * 
 * Select Deck Window
 * 
 *      Before starting a battle with another player, the player can pick what
 * deck they wish to play against that player. These plugin parameters allow
 * you to adjust how they look.
 * 
 * ---
 * 
 * Card Game Board
 * 
 *      These plugin parameters adjust the appearance of how the Card Game HUD
 * looks, how some sprites act when changing, and the JavaScript used to set up
 * the board to make it look the way you want.
 * 
 * Card Game Board: Sprite Fluctuation
 * 
 *      When a player takes damage or has their shields reduced, the sprite
 * will shake a bit. Change the values here to let you decide how much they
 * will shake by.
 * 
 * ---
 * 
 * Hand Window
 * 
 *      The cards that a player holds in his or her hand is actually held
 * together by a window object. You can change the width of the hand window to
 * adjust how closely held together the cards.
 * 
 * Hand Window: Skip Turn Card
 * 
 *      The Skip Turn Card will refer to a Database Item to represent the Skip
 * Turn function. As provided in the sample project, it is a No-Element,
 * 0 Level, 0 Power card, something that will be played if the player decides
 * to skip that turn.
 * 
 * Hand Window: Always Show Skip Turn
 * 
 *      You can decide to have the Skip Turn card always show or hide it until
 * there are no more cards in the player's hand. The Skip Turn card will always
 * appear if the player ran out of cards in their hand.
 * 
 * ---
 * 
 * List Window
 * 
 *      There are some card effects that let the player pick from a list of
 * cards and then perform a follow up action with them. These settings let you
 * determine how it appears.
 * 
 * ---
 *
 * Sprite Positioning
 * 
 *      These are JavaScript code entries to let you determine how sprites will
 * position themselves on the screen. For example, while in the deck, they will
 * be tilted at a certain angle. While in the hand, they will appear up right.
 * This can be left alone for the most part unless you wish to tweak your
 * card game board heavily.
 * 
 * ---
 * 
 * Custom Pile Positioning
 * 
 *      Custom Piles aren't used in the sample project. However, for those who
 * wish to customize the card game custom evented battle system further and
 * make use of the custom piles, these plugin parameters will allow you to
 * adjust the angle, scale, and other properties of them. For more information,
 * look in the "Custom Piles" section of the help file.
 * 
 * 
 * 
 * *** Custom Evented Battle System Structure ***
 * 
 *      The custom evented battle structure found in the sample project will
 * work like this assuming that nothing has been changed about it. There's a
 * couple of keywords I'll be using so to avoid confusing you, I'll explain
 * them here:
 *
 * ---
 * 
 * Hand: This refers to the cards in the player's hand and where cards go into
 * when the player draws.
 * 
 * Library: This refers to the stack of cards that make up the player's deck
 * that the player will draw from.
 * 
 * Discard: This is where the used up cards go. The player does not draw from
 * this, but the Discard pile does get recycled.
 *
 * Exhaust: This is where the other used up cards go. The player does not draw
 * from this. This pile does not get recycled.
 *
 * A.I.: Artificial intelligence. It's what I call the computer opponent.
 *
 * ---
 * 
 * Here is how the battle structure works:
 * 
 * 1. The Card Game Starts.
 *    A. Create all the necessary assets for the card game battle. This
 *       includes pictures, the battle backgrounds, windows, etc.
 *    B. Start Game Effects: Any card effects that would occur from the Hand,
 *       Library, Discard Pile, or Exhaust Pile that are programmed to activate
 *       at this time would activate at this time.
 *    C. Both players then draw 5 cards.
 *    D. Determine if any victory conditions have been met. If they are, go to
 *       Finishing the Card Game Battle.
 * 2. Upkeep Phase
 *    A. This phase is to keep track of the turn count and other variables you
 *       decide to do.
 *    B. Upkeep Effects: Any card effects that would occur from the Hand,
 *       Library, Discard Pile, or Exhaust Pile that are programmed to activate
 *       at this time would activate at this time.
 *    C. Determine if any victory conditions have been met. If they are, go to
 *       Finishing the Card Game Battle.
 * 3. Draw Phase
 *    A. Both players draw 1 card.
 *     B. Draw Phase Effects: Any card effects that would occur from the Hand,
 *        Library, Discard Pile, or Exhaust Pile that are programmed to activate
 *        at this time would activate at this time.
 *     C. Determine if any victory conditions have been met. If they are, go to
 *        Finishing the Card Game Battle.
 * 4. Main Phase
 *     A. The players selects a card from their hand to play. Said card can be
 *        immediately used for battle or if they have effects, the effects would
 *        be used at this point.
 *     B. If the A.I. (computer opponent) has card effects to play, the A.I.
 *        will wait until the player has selected his/her battle card before
 *        playing them as to not interrupt the battle flow.
 *     C. The A.I. then selects the battle card to play against the player
 *        before entering the next phase.
 *     D. Determine if any victory conditions have been met. If they are, go to
 *        Finishing the Card Game Battle.
 * 5. Battle Phase
 *     A. Both player hands are visibly put away to not cause distractions.
 *     B. Both player's battle cards then move onto center stage where they're
 *        flipped over and revealed to each other.
 *        i. Pre-Battle Effects: If there are any pre-battle effects, such as
 *           boosting one's own stats or decreasing the other's, perform them
 *           here during this step.
 *       ii. Battle Step: It's time to determine winner.
 *      iii. Element Check: First, each card's element will be checked. If a
 *           card's element is superior to the other, that card instantly wins
 *           while the other loses, then go to the Post-Battle Effects step.
 *           - Fire wins against Wind but loses against Water.
 *           - Water wins against Fire but loses against Earth.
 *           - Earth wins against Water but loses against Wind.
 *           - Wind wins against Earth but loses against Fire.
 *           - Light and Dark will both win and lose against each other
 *             resulting in a double K.O.
 *       iv. Level Check: If neither card's element is superior to the other,
 *           then it's time to check each card's level. The card with the higher
 *           level will win while the other loses, then go to the Post-Battle 
 *           Effects step.
 *        v. Power Check: If neither card's level is higher than the other, then
 *           it's time for the power check. The card with the higher power level
 *           will win while the other loses, then go to the Post-Battle Effects
 *           step.
 *       vi. Health Check: This option has to be turned on from the plugin
 *           parameters. Otherwise, this part will be ignored. If neither card's
 *           power is higher than the other, then it's time for the health check.
 *           The card with a higher health value will win while the other loses,
 *           then go to the Post-Battle Effects step.
 *      vii. Tie: If both players have not been able to determine a victor, then
 *           the results of that battle is a tie.
 *     viii. Post-Battle Effects: This step would usually involve damaging the
 *           other player if the card won against them.
 *       ix. Resolve Battle Effects: The battle cards then play resolve effects.
 *           By default, this will involve players discard their just battled
 *           cards regardless of them winning or losing. Some cards would be 
 *           sent to the Exhaust Pile if their effects call for it. Also move
 *           the player's Hands back into the visible corner.
 *        x. Determine if any victory conditions have been met. If they are, go
 *           to Finishing the Card Game Battle.
 * 6. End Phase
 *    A. It's time to clean things up from the battle.
 *    B. End Phase Effects: Any card effects that would occur from the Hand,
 *       Library, Discard Pile, or Exhaust Pile that are programmed to activate
 *       at this time would activate at this time.
 *    C. Determine if any victory conditions have been met. If they are, go to
 *       Finishing the Card Game Battle.
 *    D. If there hasn't been a victor determined by this point, return back to
 *       the Upkeep Phase.
 * 7. Finishing the Card Game Battle
 *    A. Fade out all the assets.
 *    B. Determine if the player won, lost, or had a draw.
 *    C. Clear out the variables used in the battle.
 *    D. Resume the usual map activities.
 * 
 *      All of that is evented so any bit of it can be cut out, changed, or
 * expanded upon by you, the game dev. Keep in mind that I'm not responsible for
 * any changes you have made to the custom evented battle system.
 *
 *
 *
 * *** Custom Piles ***
 *
 *      A grouping of cards is called a 'pile'. There are multiple piles in a
 * card game at times. Here are the ones that currently exist:
 *
 * -
 *
 * Hand: This refers to the cards in the player's hand and where cards go into
 * when the player draws.
 * 
 * Library: This refers to the stack of cards that make up the player's deck
 * that the player will draw from.
 * 
 * Discard: This is where the used up cards go. The player does not draw from
 * this, but the Discard pile does get recycled.
 *
 * Exhaust: This is where the other used up cards go. The player does not draw
 * from this. This pile does not get recycled.
 *
 * -
 *
 * While this is plenty to get a basic card game out and going, it may not be
 * enough for all the users out there. Therefore, custom piles are included so
 * that game devs can add in their "Lands" pile, their "Spells/Traps" pile,
 * their "Monster Zone" pile, and so on.
 *
 *      There are 26 custom piles that can be used, from Custom Pile A to
 * Custom Pile Z. There is limited custom support for them since there's too
 * many ways to go about custom piles, but of the support there is, you can
 * find them in the plugin parameters under "Custom Pile Positioning" and the
 * script calls.
 *
 * -
 *
 * Plugin Parameter: Custom Pile Positioning
 * 
 *      Custom Piles aren't used in the sample project. However, for those who
 * wish to customize the card game custom evented battle system further and
 * make use of the custom piles, these plugin parameters will allow you to
 * adjust the angle, scale, and other properties of them.
 *
 * -
 *
 * Script Calls
 *
 * owner.removeCardFromCustomPile(card, letter)
 * - This will remove the specific card from a custom pile
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'card' with a card object to be removed
 * - Replace 'letter' with a string of the letter representing the pile
 * - Example: owner.removeCardFromCustomPile(card, 'A')
 * 
 * owner.addCardToPile(card, letter)
 * - This will add the specific card to a custom pile
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'card' with a card object to be added
 * - Replace 'letter' with a string of the letter representing the pile
 * - Example: owner.addCardToPile(card, 'A')
 *
  * owner.setPileLocation(letter, x, y)
 * - Sets the location of a custom pile so that the sprites and such will be
 * aligned to it.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'letter' with a letter from A to Z. This is a string and must be
 * surrounded by quotes.
 * - Replace 'x' with the X coordinates (center).
 * - Replace 'y' with the Y coordinates (center).
 * - Example: $cardPlayer().setPileLocation('A', 256, 360)
 *
  * owner.pileLocationX(letter)
 * owner.pileLocationY(letter)
 * - Gets the stored X and Y locations of the custom piles.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'letter' with a letter from A to Z. This is a string and must be
 * surrounded by quotes.
 * - Example: $cardPlayer().pileLocationX('A')
 *            $cardPlayer().pileLocationY('A')
 *
 * -
 * 
 * 
 * 
 * *** Notetags ***
 * 
 *      You may have noticed that there are mentions of card effects that can
 * occur at certain steps. While the majority of these notetags are custom made
 * through events, this section will provide a list of them that are made
 * available through the custom evented battle system:
 * 
 * --- Start Phase Notetags ---
 * 
 * <Card Hand Start JS>
 * code
 * code
 * </Card Hand Start JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your hand at the start of the game.
 * 
 * <Card Hand Start Common Event: x>
 * - Runs common event 'x' if the card is found in your hand at the start of
 * the game. The common event will run after the JavaScript runs.
 * 
 * <Card Discard Start JS>
 * code
 * code
 * </Card Discard Start JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in discard hand at the start of the game.
 * 
 * <Card Discard Start Common Event: x>
 * - Runs common event 'x' if the card is found in your discard at the start of
 * the game. The common event will run after the JavaScript runs.
 * 
 * <Card Exhaust Start JS>
 * code
 * code
 * </Card Exhaust Start JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your exhaust at the start of the game.
 * 
 * <Card Hand Start Common Event: x>
 * - Runs common event 'x' if the card is found in your exhaust at the start of
 * the game. The common event will run after the JavaScript runs.
 *
 * <Card Library Start JS>
 * code
 * code
 * </Card Library Start JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your library at the start of the game.
 * 
 * <Card Library Start Common Event: x>
 * - Runs common event 'x' if the card is found in your library at the start of
 * the game. The common event will run after the JavaScript runs.
 * 
 * --- Upkeep Phase Notetags ---
 * 
 * <Card Hand Upkeep JS>
 * code
 * code
 * </Card Hand Upkeep JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your hand during Upkeep Phase.
 * 
 * <Card Hand Upkeep Common Event: x>
 * - Runs common event 'x' if the card is found in your hand during Upkeep
 * Phase. The common event will run after the JavaScript runs.
 * 
 * <Card Discard Upkeep JS>
 * code
 * code
 * </Card Discard Upkeep JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in discard hand during Upkeep Phase.
 * 
 * <Card Discard Upkeep Common Event: x>
 * - Runs common event 'x' if the card is found in your discard during Upkeep
 * Phase. The common event will run after the JavaScript runs.
 * 
 * <Card Exhaust Upkeep JS>
 * code
 * code
 * </Card Exhaust Upkeep JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your exhaust during Upkeep Phase.
 * 
 * <Card Hand Upkeep Common Event: x>
 * - Runs common event 'x' if the card is found in your exhaust during Upkeep
 * Phase. The common event will run after the JavaScript runs.
 *
 * <Card Library Upkeep JS>
 * code
 * code
 * </Card Library Upkeep JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your library during Upkeep Phase.
 * 
 * <Card Library Upkeep Common Event: x>
 * - Runs common event 'x' if the card is found in your library during Upkeep
 * Phase. The common event will run after the JavaScript runs.
 *
 * --- Draw Phase Notetags ---
 *
 * <Card Hand Draw JS>
 * code
 * code
 * </Card Hand Draw JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your hand during Draw Phase.
 * 
 * <Card Hand Draw Common Event: x>
 * - Runs common event 'x' if the card is found in your hand during Draw
 * Phase. The common event will run after the JavaScript runs.
 * 
 * <Card Discard Draw JS>
 * code
 * code
 * </Card Discard Draw JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in discard hand during Draw Phase.
 * 
 * <Card Discard Draw Common Event: x>
 * - Runs common event 'x' if the card is found in your discard during Draw
 * Phase. The common event will run after the JavaScript runs.
 * 
 * <Card Exhaust Draw JS>
 * code
 * code
 * </Card Exhaust Draw JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your exhaust during Draw Phase.
 * 
 * <Card Hand Draw Common Event: x>
 * - Runs common event 'x' if the card is found in your exhaust during Draw
 * Phase. The common event will run after the JavaScript runs.
 *
 * <Card Library Draw JS>
 * code
 * code
 * </Card Library Draw JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your library during Draw Phase.
 * 
 * <Card Library Draw Common Event: x>
 * - Runs common event 'x' if the card is found in your library during Draw
 * Phase. The common event will run after the JavaScript runs.
 *
 * --- Main Phase Notetags ---
 * 
 * <Card No Battle>
 * - This card is unable to battle.
 * 
 * - - -
 * 
 * <Card Spell 1 JS>
 * code
 * code
 * </Card Spell 1 JS>
 * - If this card's spell 1 is used, perform the JavaScript 'code' inbetween
 * the two notetags.
 * 
 * <Card Spell 1 Common Event: x>
 * - If this card's spell 1 is used, perform common event 'x'. The common event
 * will run after the JavaScript runs.
 * 
 * <Card Spell 1 Enable>
 * code
 * enable = code
 * </Card Spell 1 Enable>
 * - If this notetag is found, then the JavaScript 'code' will determine if the
 * 'enable' variable is true/false, making the spell enabled or not.
 *
 * <Card Spell 1 Icon: x>
 * - Uses icon 'x' for this card's spell 1.
 *
 * <Card Spell 1 Name: x>
 * - Gives this card's spell 1 a name as 'x'.
 *
 * <Card Spell 1 Animation: x>
 * - Plays animation 'x' when this card's spell 1 is used.
 *
 * <Card Spell 1 Allow AI Use>
 * - Will allow the A.I. to use this card's spell 1.
 * 
 * <Card Spell 1 Check AI Use>
 * code
 * enable = code
 * </Card Spell 1 Check AI Use>
 * - If this notetag is found, then the JavaScript 'code' will determine if the
 * 'enable' variable is true/false, making the spell allowed to be used by A.I.
 * or not. This can be used to prevent the A.I. from using healing at full HP.
 * 
  * - - -
 * 
 * <Card Spell 2 JS>
 * code
 * code
 * </Card Spell 2 JS>
 * - If this card's spell 2 is used, perform the JavaScript 'code' inbetween
 * the two notetags.
 * 
 * <Card Spell 2 Common Event: x>
 * - If this card's spell 2 is used, perform common event 'x'. The common event
 * will run after the JavaScript runs.
 * 
 * <Card Spell 2 Enable>
 * code
 * enable = code
 * </Card Spell 2 Enable>
 * - If this notetag is found, then the JavaScript 'code' will determine if the
 * 'enable' variable is true/false, making the spell enabled or not.
 *
 * <Card Spell 2 Icon: x>
 * - Uses icon 'x' for this card's spell 2.
 *
 * <Card Spell 2 Name: x>
 * - Gives this card's spell 2 a name as 'x'.
 *
 * <Card Spell 2 Animation: x>
 * - Plays animation 'x' when this card's spell 2 is used.
 *
 * <Card Spell 2 Allow AI Use>
 * - Will allow the A.I. to use this card's spell 2.
 * 
 * <Card Spell 2 Check AI Use>
 * code
 * enable = code
 * </Card Spell 2 Check AI Use>
 * - If this notetag is found, then the JavaScript 'code' will determine if the
 * 'enable' variable is true/false, making the spell allowed to be used by A.I.
 * or not. This can be used to prevent the A.I. from using healing at full HP.
 * 
  * - - -
 * 
 * <Card Spell 3 JS>
 * code
 * code
 * </Card Spell 3 JS>
 * - If this card's spell 3 is used, perform the JavaScript 'code' inbetween
 * the two notetags.
 * 
 * <Card Spell 3 Common Event: x>
 * - If this card's spell 3 is used, perform common event 'x'. The common event
 * will run after the JavaScript runs.
 * 
 * <Card Spell 3 Enable>
 * code
 * enable = code
 * </Card Spell 3 Enable>
 * - If this notetag is found, then the JavaScript 'code' will determine if the
 * 'enable' variable is true/false, making the spell enabled or not.
 *
 * <Card Spell 3 Icon: x>
 * - Uses icon 'x' for this card's spell 3.
 *
 * <Card Spell 3 Name: x>
 * - Gives this card's spell 3 a name as 'x'.
 *
 * <Card Spell 3 Animation: x>
 * - Plays animation 'x' when this card's spell 3 is used.
 *
 * <Card Spell 3 Allow AI Use>
 * - Will allow the A.I. to use this card's spell 3.
 * 
 * <Card Spell 3 Check AI Use>
 * code
 * enable = code
 * </Card Spell 3 Check AI Use>
 * - If this notetag is found, then the JavaScript 'code' will determine if the
 * 'enable' variable is true/false, making the spell allowed to be used by A.I.
 * or not. This can be used to prevent the A.I. from using healing at full HP.
 * 
 * - - -
 * 
 * <Card Spell 4 JS>
 * code
 * code
 * </Card Spell 4 JS>
 * - If this card's spell 4 is used, perform the JavaScript 'code' inbetween
 * the two notetags.
 * 
 * <Card Spell 4 Common Event: x>
 * - If this card's spell 4 is used, perform common event 'x'. The common event
 * will run after the JavaScript runs.
 * 
 * <Card Spell 4 Enable>
 * code
 * enable = code
 * </Card Spell 4 Enable>
 * - If this notetag is found, then the JavaScript 'code' will determine if the
 * 'enable' variable is true/false, making the spell enabled or not.
 *
 * <Card Spell 4 Icon: x>
 * - Uses icon 'x' for this card's spell 4.
 *
 * <Card Spell 4 Name: x>
 * - Gives this card's spell 4 a name as 'x'.
 *
 * <Card Spell 4 Animation: x>
 * - Plays animation 'x' when this card's spell 4 is used.
 *
 * <Card Spell 4 Allow AI Use>
 * - Will allow the A.I. to use this card's spell 4.
 * 
 * <Card Spell 4 Check AI Use>
 * code
 * enable = code
 * </Card Spell 4 Check AI Use>
 * - If this notetag is found, then the JavaScript 'code' will determine if the
 * 'enable' variable is true/false, making the spell allowed to be used by A.I.
 * or not. This can be used to prevent the A.I. from using healing at full HP.
 * 
 * - - -
 * 
 * There are four spells available per card. Nothing more provided by default.
 * 
 * --- Battle Phase Notetags ---
 *
 * <Card AI Priority-behavior: x>
 * - This affects the A.I. only. It will make the A.I. pick specific cards over
 * others depending on the 'behavior' and the 'x' value.
 * - Replace 'behavior' with a string stating the behavior type to differentiate
 * different priority settings when a card has multiples of this notetag.
 * - Replace 'x' with a number depicting the priority value. Lower values mean
 * the card is less likely to be picked while higher priority means the card is
 * more likely to be picked.
 * - Example: <Card AI Priority-Strong: 50>
 *            <Card AI Priority-Strong: 25>
 *            <Card AI Priority-Weak: 60>
 *            <Card AI Priority-Weak: 30>
 *            <Card AI Priority-Tactical: 90>
 *            <Card AI Priority-Tactical: 45>
 *
 * *NOTE* The A.I. will also pick from a pick list of cards using the 'Strong'
 * behavior. If a setting turns on the "$calc.pickWeakest" flag, then it will
 * use the 'Weak' behavior. Keep that in mind when making certain cards pickable
 * for discarding or adding to the hand.
 *
 * - - -
 * 
 * <Card Pre-Battle JS>
 * code
 * code
 * </Card Pre-Battle JS>
 * - If this notetag is found, it will occur before damage calculations. It will
 * run the JavaScript 'code' found between the two notetags.
 * 
 * <Card Pre-Battle Common Event: x>
 * - If this notetag is found, it will occur before damage calculations. Perform
 * common event 'x'. The common event will run after the JavaScript runs.
 * 
 * - - -
 *
 * <Card Tie Battle JS>
 * code
 * code
 * </Card Tie Battle JS>
 * - If this notetag is found, it will occur if the battle is tied. It will
 * run the JavaScript 'code' found between the two notetags.
 * 
 * <Card Tie Battle Common Event: x>
 * - If this notetag is found, it will occur if the battle is tied. Perform
 * common event 'x'. The common event will run after the JavaScript runs.
 * 
 * - - -
 *
 * <Card Lose Battle JS>
 * code
 * code
 * </Card Lose Battle JS>
 * - If this notetag is found, it will occur if the card loses a battle. It will
 * run the JavaScript 'code' found between the two notetags.
 * 
 * <Card Lose Battle Common Event: x>
 * - If this notetag is found, it will occur if the card loses a battle. Perform
 * common event 'x'. The common event will run after the JavaScript runs.
 * 
 * - - -
 *
 * <Card Win Battle JS>
 * code
 * code
 * </Card Win Battle JS>
 * - If this notetag is found, it will occur if the card wins a battle. It will
 * run the JavaScript 'code' found between the two notetags.
 * 
 * <Card Win Battle Common Event: x>
 * - If this notetag is found, it will occur if the card wins a battle. Perform
 * common event 'x'. The common event will run after the JavaScript runs.
 *
 * *NOTE* If neither of the notetags are found in the card, then there will be
 * a default effect of dealing 5 damage to the opposing player's health. This
 * can be modified from within the ╘ Post-Damage Effects common event.
 * 
 * - - -
 *
 * <Card Post-Battle JS>
 * code
 * code
 * </Card Post-Battle JS>
 * - If this notetag is found, it will occur after win/loss effects. It will
 * run the JavaScript 'code' found between the two notetags.
 * 
 * <Card Post-Battle Common Event: x>
 * - If this notetag is found, it will occur after win/loss effects. Perform
 * common event 'x'. The common event will run after the JavaScript runs.
 * 
 * - - -
 * 
 * <Card Resolve Battle JS>
 * code
 * code
 * </Card Resolve Battle JS>
 * - If this notetag is found, it will occur after post-battle effects. It will
 * run the JavaScript 'code' found between the two notetags.
 * 
 * <Card Resolve Battle Common Event: x>
 * - If this notetag is found, it will occur after post-battle effects. Perform
 * common event 'x'. The common event will run after the JavaScript runs.
 * 
 * *NOTE* If neither of the notetags are found in the card, then there will be
 * a default effect of sending the card to the player's discard pile. This can
 * be modified from within the ╘ Post-Damage Effects common event.
 *
 * --- End Phase Notetags ---
 *
 * <Card Hand End JS>
 * code
 * code
 * </Card Hand End JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your hand during End Phase.
 * 
 * <Card Hand End Common Event: x>
 * - Runs common event 'x' if the card is found in your hand during End
 * Phase. The common event will run after the JavaScript runs.
 * 
 * <Card Discard End JS>
 * code
 * code
 * </Card Discard End JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in discard hand during End Phase.
 * 
 * <Card Discard End Common Event: x>
 * - Runs common event 'x' if the card is found in your discard during End
 * Phase. The common event will run after the JavaScript runs.
 * 
 * <Card Exhaust End JS>
 * code
 * code
 * </Card Exhaust End JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your exhaust during End Phase.
 * 
 * <Card Hand End Common Event: x>
 * - Runs common event 'x' if the card is found in your exhaust during End
 * Phase. The common event will run after the JavaScript runs.
 *
 * <Card Library End JS>
 * code
 * code
 * </Card Library End JS>
 * - Runs the JavaScript 'code' inbetween the two notetags if the card is found
 * in your library during End Phase.
 * 
 * <Card Library End Common Event: x>
 * - Runs common event 'x' if the card is found in your library during End
 * Phase. The common event will run after the JavaScript runs.
 * 
 * ---
 * 
 * 
 *
 * *** Script Calls/JavaScript Code ***
 *
 * Use these script calls to help mold your custom evented battle system.
 *
 * --- General Use Script Calls/JavaScript ---
 * 
 * $makeArrayOfCurrentDeck();
 * - Use this while you are in the Deck Builder scene.
 * - It will create an array of the currently selected deck, making it easier
 * for you to copy/paste array data when designing an opponent's deck.
 *
 * -
 * 
 * $pickPlayerDeck(ruleset);
 * - Opens up a deck list for the player to pick from using a specific ruleset.
 * - Replace 'ruleset' with a ruleset from the Deck Builder plugin parameters.
 * - This must be a string so place quotes around it.
 * - Example: $pickPlayerDeck('Standard');
 *
 * -
 *
 * $wait(x)
 * - This will make the game wait 'x' frames. This can be used as a part of a
 * JavaScript code effect.
 * - The wait will not occur immediately in the code and make the rest of the
 * code wait until it is done. Sadly, that is not how code works. Instead, it
 * will run the entirity of the JavaScript code, then make the game wait 'x'
 * frames.
 * - If multiples of these are used, then the wait time will stack.
 *
 * -
 * 
 * var deck = $newDeck(ruleset, name);
 * - This will create a new deck using the 'ruleset' and have a specific 'name'.
 * - This is primarily used for creating decks for your opponent.
 * - Example: $cardOpponent().deck = $newDeck('Standard', 'Burn Deck');
 *
 * -
 * 
 * $calc = {};
 * - This turns the $calc variable into an open object, allowing it to take on
 * any data needed.
 *
 * -
 * 
 * $selectedCard = null;
 * - This clears the $selectedCard variable.
 *
 * -
 *
 * 
 *
 * --- $cardPlayer() and $cardOpponent Script Calls/JavaScript ---
 *
 * $cardPlayer()
 * $cardOpponent()
 * - This will refer to the card player or opponent. Use it as a base class for
 * grabbing other necessary data.
 *
 * -
 * 
 * owner.deck
 * - Returns the deck object used by the owner
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * - 
 * 
 * owner.startHealth = x;
 * - Sets the starting health for that player to 'x'.
 * - Use this before the start of a card game battle.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.maxHealth
 * - Returns the owner's maximum health (determined by startHealth)
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.currentHealth
 * - Returns the owner's current health (determined by startHealth initially)
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.health
 * - Same as currentHealth
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.shield
 * - Returns the owner's shield count
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.shield = x
 * - Replace 'x' to change how many shields the owner would have
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.actor
 * - Returns the actor used to represent the owner
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.actor = x
 * - Sets the actor used to represent the owner as someone else.
 * - Replace 'x' with that actor's ID
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.ai = 'behavior'
 * - Replace 'behavior' with an A.I. behavior pattern
 * - Example: $cardOpponent().ai = 'STRONG';
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.allCards
 * - Returns an array of all the cards currently in the owner's possession
 * including the Library, Hand, Discard, Exhaust, and all the custom Piles
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.library
 * - Returns an array of all the cards currently in the owner's Library
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.discard
 * - Returns an array of all the cards currently in the owner's Discard Pile
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.exhaust
 * - Returns an array of all the cards currently in the owner's Exhaust Pile
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.hand
 * - Returns an array of all the cards currently in the owner's hand
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.pileA
 * - Returns an array of all the cards currently in pileA for the owner.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Piles can go from A to Z.
 *
 * -
 *
 * owner.battleCard
 * - Returns the card designated as the owner's battle card
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.prepareForCardBattle();
 * - Initialize the deck owners, making them ready to battle in the upcoming
 * card game battle.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 *
 * -
 *
 * owner.setLibraryLocation(x, y)
 * owner.setDiscardLocation(x, y)
 * owner.setExhaustLocation(x, y)
 * - Sets the location of owner's specific pile so that all the sprites and such
 * will be aligned to it.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'x' with the X coordinates (center).
 * - Replace 'y' with the Y coordinates (center).
 *
 * -
 *
 * owner.setPileLocation(letter, x, y)
 * - Sets the location of a custom pile so that the sprites and such will be
 * aligned to it.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'letter' with a letter from A to Z. This is a string and must be
 * surrounded by quotes.
 * - Replace 'x' with the X coordinates (center).
 * - Replace 'y' with the Y coordinates (center).
 * - Example: $cardPlayer().setPileLocation('A', 256, 360)
 *
 * - 
 * 
 * owner.pileLocationX(letter)
 * owner.pileLocationY(letter)
 * - Gets the stored X and Y locations of the custom piles.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'letter' with a letter from A to Z. This is a string and must be
 * surrounded by quotes.
 * - Example: $cardPlayer().pileLocationX('A')
 *            $cardPlayer().pileLocationY('A')
 *
 * -
 *
 * var shuffle = true;
 * var wait = false;
 * owner.readyCurrentDeck(shuffle, wait);
 * - Sets the deck location of an owner so that all the sprites and such will be
 * created there.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Set 'shuffle' to true/false to shuffle the deck/not.
 * - Set 'wait' to true/false to apply wait frames.
 *
 * -
 *
 * owner.drawCard(cards, wait);
 * - Participant draws a card if they can.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'cards' with number of cards drawn at once.
 * - Replace 'wait' with true or false
 * - If true, wait 10 frames between each draw.
 *
 * -
 *
 * owner.drawCardFromLibrary();
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Draws a card from the library.
 *
 * -
 *
 * owner.removeCardFromAllPiles(card);
 * - This will remove the specific card from all of the owner's piles
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'card' with a card object to be removed
 * 
 * - 
 * 
 * owner.removeCardFromLibrary(card);
 * owner.removeCardFromDiscard(card);
 * owner.removeCardFromExhaust(card);
 * owner.removeCardFromHand(card);
 * - This will remove the specific card from the library, discard, exhaust, or
 * hand depending on which function is used.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'card' with a card object to be removed
 * 
 * -
 *
 * owner.removeCardFromCustomPile(card, letter)
 * - This will remove the specific card from a custom pile
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'card' with a card object to be removed
 * - Replace 'letter' with a string of the letter representing the pile
 * - Example: owner.removeCardFromCustomPile(card, 'A')
 *
 * - 
 *
 * ower.addCardToLibrary(card, bottom)
 * - This will add a specific card to the library
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'card' with a card object to be added
 * - Replace 'bottom' with true or false to determine if it will go to the
 * bottom of the library or the top of the library.
 *
 * -
 *
 * owner.addCardToDiscard(card)
 * owner.addCardToExhaust(card)
 * owner.addCardToHand(card)
 * - This will add a specific card to one of the owner's piles depending on
 * which function is used.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'card' with a card object to be added
 *
 * - 
 *
 * owner.addCardToPile(card, letter)
 * - This will add the specific card to a custom pile
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'card' with a card object to be added
 * - Replace 'letter' with a string of the letter representing the pile
 * - Example: owner.addCardToPile(card, 'A')
 *
 * -
 *
 * owner.startAnimation(animationId, mirror, delay)
 * - This will play a battle animation on the owner
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'animationId' with the ID of the battle animation
 * - Replace 'mirror' with true or false depending if you want to mirror it/not
 * - Replace 'delay' with a number telling how many frames to delay it
 *
 * -
 *
 * owner.returnPileToLibrary(pile)
 * - This will return an entire pile to the owner's library
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'pile' with an array of cards like the following:
 *   - owner.discard
 *   - owner.exhaust
 *   - owner.hand
 *   - owner.pileA
 *
 * -
 *
 * owner.shuffleCards(pile)
 * - This will shuffle the selected pile
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'pile' with an array of cards like the following:
 *   - owner.library
 *   - owner.discard
 *   - owner.exhaust
 *   - owner.hand
 *   - owner.pileA
 *
 * -
 *
 * --- $scene() Script Calls/JavaScript ---
 *
 * -
 * 
 * $scene().sortCardGameCardSprites();
 * - Sorts all the card sprites currently on the screen to make sure they are
 * positioned properly with their aligned piles/hands/libraries.
 *
 * - 
 *
 * $scene().createCardGameHUDWindow();
 * - Creates a HUD for the Card Game.
 *
 * -
 *
 * $scene().fadeOutCardGameHUDWindow(duration)
 * - Fades out the HUD.
 * - Replace 'duration' with the number of frames to fade it out by.
 *
 * -
 * 
 * $scene().refreshCardGameHUD();
 * - Refreshes the card game HUD window.
 * 
 * -
 *
 * $scene().fadeOutPlayableCards(duration)
 * - Fades out all the playable cards on screen
 * - Replace 'duration' with the number of frames to fade them out by.
 *
 * -
 *
 * $scene().createCardGameHandWindow(owner, x, y, width, height, cardScale);
 * - Creates a window to hold the owner's cards in hand.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'x' and 'y' with the x/y coordinates.
 * - Replace 'width' and 'height' for window width/height.
 * - Replace 'scale' with how small the cards are in hand.
 *
 * -
 *
 * $scene().activateCardGameHandWindow(owner);
 * - Activates the card window of a participant's hand.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Picked card is then saved onto $selectedCard.
 *
 * -
 *
 * $scene().moveCardGameHandWindow(owner, x, y, duration);
 * - Moves the owner's hand window.
 * - Replace 'owner' with $cardPlayer() or $cardOpponent()
 * - Replace 'x' with the target X coordinate.
 * - Replace 'y' with the target Y coordinate.
 * - Replace 'duration' with the number of frames to move it by.
 *
 * -
 *
 * $scene().createCardGameBattleListWindow();
 * - Creates the card list window used when searching through card piles to pull
 * out a picked card.
 *
 * -
 *
 * $scene().setupCardGameBattleListWindow(array, text);
 * - Opens up the card list window with an array of cards and a text message.
 * - Replace 'array' with an array of cards to put into the window.
 * - Replace 'text' with the text to display.
 *
 * -
 *
 * $scene().removeCardGameBattleListWindow();
 * - This removes the card list window from the scene.
 * - Use this after the card game battle is over.
 *
 * -
 *
 * $scene().createCardGameBattleBrowseWindow();
 * - Creates the card browser window used when the player wants to look through
 * a Discard, Exhaust, etc. pile without interrupting gameplay.
 *
 * -
 *
 * $scene().registerCardGamePileLocation(pile, rect, text);
 * - Registers a pile into the card browser window.
 * - Replace 'pile' with the card pile that will be browsed into.
 * - Replcae 'rect' with a Rectangle object depicting the x, y, width, height
 * of the clickable space to trigger it with the mouse.
 * - Replace 'text' with the text message to be displayed if there is one.
 * - Example:
 * 
 * var pool = $cardPlayer().discard;
 * var rect = {
 *   x: $cardPlayer()._discardLocation.x - 50,
 *   y: $cardPlayer()._discardLocation.y - 50,
 *   width: 100,
 *   height: 100
 * }
 * var text = $cardPlayer().actor.name() + "'的 弃牌区";
 * $scene().registerCardGamePileLocation(pool, rect, text);
 *
 * -
 *
 * $scene().removeCardGameBattleBrowserWindow();
 * - Removes the card browser window from the scene.
 * - Use this after the card game battle is over.
 *
 * -
 *
 * $scene().moveChoiceWindowToCard(card);
 * - Moves the choice window (event command) to where the target card object is
 * on the screen and shifted down a little bit.
 *
 * - - -
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
 * 2. 'RPG Maker Irina' and 'Yanfly' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins.
 *
 * *** Help End ***
 *
 * @param 
 * @param Mechanics
 * @text Mechanics
 * @default ------------------------------------
 * 
 * @param MergeOnBoot:eval
 * @text Merge on Boot
 * @parent Mechanics
 * @type boolean
 * @on Merge
 * @off Don't Merge
 * @desc Choose to merge all common events with <Merge> in their name on booting up the game.
 * @default true
 *
 * @param TurnTrackerVariable:num
 * @text Variable: Turn Tracker
 * @parent Mechanics
 * @type variable
 * @desc Variable ID used for a turn tracker.
 * @default 901
 *
 * @param PhaseTrackerVariable:num
 * @text Variable: Phase Tracker
 * @parent Mechanics
 * @type variable
 * @desc Variable ID used for a phase tracker.
 * @default 902
 *
 * @param 
 * @param SelectDeckWindow
 * @text Select Deck Window
 * @default ------------------------------------
 * 
 * @param SelectDeckWindowMsg:str
 * @text Message
 * @parent SelectDeckWindow
 * @desc Message displayed in when selecting a deck.
 * @default Select a deck to play with.
 * 
 * @param SelectDeckWindowWidth:str
 * @text Window Width
 * @parent SelectDeckWindow
 * @desc Code used to determine the window width.
 * @default Math.ceil(Graphics.boxWidth * 2 / 5)
 * 
 * @param SelectDeckWindowRows:str
 * @text Window Rows
 * @parent SelectDeckWindow
 * @desc Code used to determine the number of visible rows.
 * @default 8
 *
 * @param 
 * @param CardGameBoard
 * @text Card Game Board
 * @default ------------------------------------
 *
 * @param BackgroundImg:str
 * @text Background Image
 * @parent CardGameBoard
 * @type file
 * @dir img/pictures/
 * @desc Picture image placed above the battlebacks.
 * @default CardGameHUD
 *
 * @param Fluctuation
 * @text Sprite Fluctuation
 * @parent CardGameBoard
 * 
 * @param FlucDifMod:num
 * @text Difference Modifier
 * @parent Fluctuation
 * @desc Divide any sprite fluctuation difference amount by this amount for stability.
 * @default 50
 * 
 * @param FlucDifMax:num
 * @text Max Modifier
 * @parent Fluctuation
 * @desc Maximum modifier for sprite fluctation distance.
 * @default 5
 *
 * @param SetupBoard:func
 * @text JS: Setup Board
 * @parent CardGameBoard
 * @type note
 * @desc Code used when setting up the "window" for the background board.
 * @default "// Window Settings\nthis.opacity = 0;\nthis.contentsOpacity = 0;\nthis._faceOpacitySpeed = 16;\nthis._contentsOpacitySpeed = 16;\n\n// Create Player Face\nthis._playerFaceSprite = this.createFaceSprite($cardPlayer());\nthis._playerFaceSprite.x = Graphics.boxWidth - Window_Base._faceWidth - 24;\nthis._playerFaceSprite.y = Graphics.boxHeight / 2 + this.lineHeight() / 2;\nthis._playerFaceSprite.opacity = 0;\n\n// Create Player Shield\nthis.createShield(this._playerFaceSprite, $cardPlayer());\nthis._playerFaceSprite._shieldSprite.x = this._playerFaceSprite._shieldSprite._baseX = this._playerFaceSprite.x;\nthis._playerFaceSprite._shieldSprite.y = this._playerFaceSprite._shieldSprite._baseY = this._playerFaceSprite.y + Window_Base._faceHeight * 1/4;\nthis._playerFaceSprite._shieldSprite.opacity = 0;\n\n// Create Player Heart Meter\nthis.createHeartMeter(this._playerFaceSprite, $cardPlayer());\nthis._playerFaceSprite._heartSprite.x = this._playerFaceSprite._heartSprite._baseX = this._playerFaceSprite.x;\nthis._playerFaceSprite._heartSprite.y = this._playerFaceSprite._heartSprite._baseY = this._playerFaceSprite.y + Window_Base._faceHeight * 3/4;\nthis._playerFaceSprite._heartSprite.opacity = 0;\n\n// Create Opponent Face\nthis._opponentFaceSprite = this.createFaceSprite($cardOpponent());\nthis._opponentFaceSprite.x = Graphics.boxWidth - Window_Base._faceWidth - 24;\nthis._opponentFaceSprite.y = Graphics.boxHeight / 2 - Window_Base._faceHeight - this.lineHeight() / 2;\nthis._opponentFaceSprite.opacity = 0;\n\n// Create Player Shield\nthis.createShield(this._opponentFaceSprite, $cardOpponent());\nthis._opponentFaceSprite._shieldSprite.x = this._opponentFaceSprite._shieldSprite._baseX = this._opponentFaceSprite.x;\nthis._opponentFaceSprite._shieldSprite.y = this._opponentFaceSprite._shieldSprite._baseY = this._opponentFaceSprite.y + Window_Base._faceHeight * 1/4;\nthis._opponentFaceSprite._shieldSprite.opacity = 0;\n\n// Create Opponent Heart Meter\nthis.createHeartMeter(this._opponentFaceSprite, $cardOpponent());\nthis._opponentFaceSprite._heartSprite.x = this._opponentFaceSprite._heartSprite._baseX = this._opponentFaceSprite.x;\nthis._opponentFaceSprite._heartSprite.y = this._opponentFaceSprite._heartSprite._baseY = this._opponentFaceSprite.y + Window_Base._faceHeight * 3/4;\nthis._opponentFaceSprite._heartSprite.opacity = 0;"
 *
 * @param CreateFaceSprite:func
 * @text JS: Create Face Sprite
 * @parent CardGameBoard
 * @type note
 * @desc Code used for creating the face sprite of a player or opponent.
 * @default "// Declare variables\nvar owner = arguments[0];\nvar actor = owner.actor;\n\n// Create Face Sprite Base\nvar sprite = new Sprite_Base();\nthis._spriteContainer.addChild(sprite);\nsprite._owner = owner;\n\n// Create Outline Filter\nvar thickness = Imported.Irina_CardGameCore.CardOutlineThickness;\nvar color = Imported.Irina_CardGameCore.CardOutlineColor;\nsprite._filters = [new PIXI.filters.OutlineFilter(thickness, color)];\n\n// Create Face Mask\nsprite._maskSprite = new Sprite();\nsprite.addChild(sprite._maskSprite);\nsprite._maskSprite.bitmap = new Bitmap(Window_Base._faceWidth, Window_Base._faceHeight);\nsprite._maskSprite.bitmap.drawCircle(Window_Base._faceWidth/2, Window_Base._faceHeight/2, Window_Base._faceWidth/2, 'white');\nsprite._maskSprite._mask = sprite._maskSprite;\n\n// Create Background\nsprite._bgSprite = new Sprite();\nsprite.addChild(sprite._bgSprite);\nsprite._bgSprite.bitmap = new Bitmap(Window_Base._faceWidth, Window_Base._faceHeight);\nsprite._bgSprite.bitmap.drawCircle(Window_Base._faceWidth/2, Window_Base._faceHeight/2, Window_Base._faceWidth/2, 'black');\nsprite._maskSprite._mask = sprite._maskSprite;\n\n// Create Face Sprite\nsprite._face = new Sprite();\nsprite.addChild(sprite._face);\nsprite._face.bitmap = ImageManager.loadFace(actor.faceName());\nvar index = actor.faceIndex();\nvar pw = Window_Base._faceWidth;\nvar ph = Window_Base._faceHeight;\nvar sx = index % 4 * pw;\nvar sy = Math.floor(index / 4) * ph;\nsprite._face.setFrame(sx, sy, pw, ph);\nsprite._face._mask = sprite._maskSprite;\n\n// Create Animation Target\nsprite._animationTarget = new Sprite_Base();\nsprite.addChild(sprite._animationTarget);\nsprite._animationTarget.x = Window_Base._faceWidth/2;\nsprite._animationTarget.y = Window_Base._faceHeight/2;\n\n// Return the sprite\nreturn sprite;"
 *
 * @param CreateHealthMeter:func
 * @text JS: Create Health Meter
 * @parent CardGameBoard
 * @type note
 * @desc Code used for creating the health meter depicting a player's remaining health.
 * @default "// Declare variables\nvar ownerSprite = arguments[0];\nvar owner = arguments[1];\n\n// Create Back Heart\nvar sprite = new Sprite();\nthis._spriteContainer.addChild(sprite);\nsprite.bitmap = ImageManager.loadPicture('CardGameHeartMeter');\nvar frameHeight = 72;\nvar frameWidth = 72;\nsprite.setFrame(0, 0, frameWidth, frameHeight);\nsprite.anchor.x = 0.5;\nsprite.anchor.y = 0.5;\n\n// Create Front Heart\nsprite._front = new Sprite();\nsprite.addChild(sprite._front);\nsprite._front.bitmap = ImageManager.loadPicture('CardGameHeartMeter');\nsprite._front.setFrame(frameWidth, 0, frameWidth, frameHeight);\nsprite._front.anchor.x = 0.5;\nsprite._front.anchor.y = 1;\nsprite._front.y = frameHeight / 2;\n\n// Create Draw Layer\nsprite._drawLayer = new Sprite();\nsprite.addChild(sprite._drawLayer);\nsprite._drawLayer.bitmap = new Bitmap(frameWidth, frameHeight);\nsprite._drawLayer.bitmap.fontSize = 32;\nsprite._drawLayer.bitmap.outlineColor = 'rgba(0, 0, 0, 1)';\nsprite._drawLayer.anchor.x = 0.5;\nsprite._drawLayer.anchor.y = 0.5;\n\n// Set Owner (Not a part of the plugin params)\nsprite._owner = owner;\nownerSprite._heartSprite = sprite;"
 *
 * @param CreateShieldCounter:func
 * @text JS: Create Shield Count
 * @parent CardGameBoard
 * @type note
 * @desc Code used for creating the shield counter depicting a player's total shield value.
 * @default "// Declare variables\nvar ownerSprite = arguments[0];\nvar owner = arguments[1];\n\n// Create Back Heart\nvar sprite = new Sprite();\nthis._spriteContainer.addChild(sprite);\nsprite.bitmap = ImageManager.loadPicture('CardGameShield');\nsprite.anchor.x = 0.5;\nsprite.anchor.y = 0.5;\nvar frameHeight = 72;\nvar frameWidth = 72;\n\n// Create Draw Layer\nsprite._drawLayer = new Sprite();\nsprite.addChild(sprite._drawLayer);\nsprite._drawLayer.bitmap = new Bitmap(frameWidth, frameHeight);\nsprite._drawLayer.bitmap.fontSize = 32;\nsprite._drawLayer.bitmap.outlineColor = 'rgba(0, 0, 0, 1)';\nsprite._drawLayer.anchor.x = 0.5;\nsprite._drawLayer.anchor.y = 0.5;\n\n// Set Owner (Not a part of the plugin params)\nsprite._owner = owner;\nownerSprite._shieldSprite = sprite;"
 *
 * @param BoardRefresh:func
 * @text JS: Board Refresh
 * @parent CardGameBoard
 * @type note
 * @desc Code used when refreshing the text on the game board.
 * @default "// Reset Font Settings\nthis.resetFontSettings();\n\n// Stops drawing the UI if phase variable value is 6 or above.\n// BE SURE TO CHANGE THIS VARIABLE if you are using something\n// else for phase tracking.\nif ($gameVariables.value(Imported.Irina_CardGameMechanics.PhaseTrackerVariable) > 5) return;\n\n// Loop through all the players and opponents.\nvar owners = [$cardPlayer()].concat($scene().getCardGameOpponents());\nfor (var i = 0; i < owners.length; i++) {\n    var owner = owners[i];\n\n    // Draw Owner Library Count\n    var count = owner.library.length;\n    if (count > 0) {\n        this.contents.fontSize = 32;\n        this.contents.outlineColor = 'rgba(0, 0, 0, 1)';\n        var text = 'x' + count;\n        var x = owner._libraryLocation.x - Window_Base._faceWidth/2 + this.lineHeight()/2;\n        var y = owner._libraryLocation.y + this.lineHeight()/2;\n        var width = Window_Base._faceWidth;\n        this.drawText(text, x, y, width, 'right');\n    }\n\n    // Draw Player Discard Count\n    var count = owner.discard.length;\n    if (count > 0) {\n        this.contents.fontSize = 32;\n        this.contents.outlineColor = 'rgba(0, 0, 0, 1)';\n        var text = 'x' + count;\n        var x = owner._discardLocation.x - Window_Base._faceWidth/2 - this.lineHeight()/2;\n        var y = owner._discardLocation.y + this.lineHeight()/2;\n        var width = Window_Base._faceWidth;\n        this.drawText(text, x, y, width, 'left');\n    }\n\n    // Draw Player Exhaust Count\n    var count = owner.exhaust.length;\n    if (count > 0) {\n        this.contents.fontSize = 32;\n        this.contents.outlineColor = 'rgba(0, 0, 0, 1)';\n        var text = 'x' + count;\n        var x = owner._exhaustLocation.x - Window_Base._faceWidth/2 - this.lineHeight()/2;\n        var y = owner._exhaustLocation.y + this.lineHeight()/2;\n        var width = Window_Base._faceWidth;\n        this.drawText(text, x, y, width, 'left');\n    }\n}\n\n// Draw Data Gradient\n// BE SURE TO CHANGE THIS VARIABLE if you are using something\n// else for turn tracking.\nif ($gameVariables.value(Imported.Irina_CardGameMechanics.TurnTrackerVariable) <= 0) return;\nvar x = 0;\nvar y = this.contents.height / 2 - this.lineHeight();\nvar width = Math.floor(this.contents.width / 10);\nvar height = this.lineHeight() * 2;\nthis.contents.fillRect(x, y, width, height, this.dimColor1());\nx += width;\nthis.contents.gradientFillRect(x, y, width, height, this.dimColor1(), this.dimColor2());\n\n// Draw Turn Count\nthis.resetFontSettings();\nthis.contents.fontSize = 32;\nthis.contents.outlineColor = 'rgba(0, 0, 0, 1)';\nvar text = 'Turn ' + $gameVariables.value(Imported.Irina_CardGameMechanics.TurnTrackerVariable);\nthis.drawText(text, 18, y + this.lineHeight() * 0, width*2);\n\n// Draw Phases\nthis.contents.fontSize = 28;\nvar i = $gameVariables.value(Imported.Irina_CardGameMechanics.PhaseTrackerVariable);\nswitch (i) {\ncase 1:\n    var text = '● Upkeep Phase';\n    break;\ncase 2:\n    var text = '● Draw Phase';\n    break;\ncase 3:\n    var text = '● Main Phase';\n    break;\ncase 4:\n    var text = '● Battle Phase';\n    break;\ncase 5:\n    var text = '● End Phase';\n    break;\n}\nthis.drawText(text, 18, y + this.lineHeight() * 1, width*2);"
 *
 * @param BoardUpdate:func
 * @text JS: Board Update
 * @parent CardGameBoard
 * @type note
 * @desc Code used when updating the sprites on the board.
 * @default "// Fade In Contents Opacity\nthis.contentsOpacity += this._contentsOpacitySpeed;\n\n// Set Sprites\nvar faceSprites = [this._playerFaceSprite, this._opponentFaceSprite];\n\n// Update Face Sprite Opacity\nfor (var i = 0; i < faceSprites.length; i++) {\n    var sprite = faceSprites[i];\n    if (sprite) {\n        sprite.opacity += this._faceOpacitySpeed;\n        if (sprite._heartSprite) {\n            sprite._heartSprite.opacity += this._faceOpacitySpeed;\n            this.updateHeartMeter(sprite);\n        }\n        if (sprite._shieldSprite) {\n            this.updateShield(sprite);\n        }\n        this.updateBattleAnimation(sprite);\n    }\n}"
 *
 * @param UpdateHealth:func
 * @text JS: Update Health
 * @parent CardGameBoard
 * @type note
 * @desc Code used when updating the health sprite.
 * @default "// Declare Variables\nvar ownerSprite = arguments[0];\nvar owner = ownerSprite._owner;\nvar frameWidth = 72;\nvar frameHeight = 72;\n\n// Set Base\nif (ownerSprite.currentHealth !== owner.currentHealth) {\n    if (ownerSprite.currentHealth === undefined) ownerSprite.currentHealth = owner.currentHealth;\n    var difference = Math.abs(ownerSprite.currentHealth - owner.currentHealth)\n    if (ownerSprite.currentHealth > owner.currentHealth) {\n        ownerSprite.currentHealth -= Math.max(0.25, difference / this.differenceRate());\n        if (ownerSprite.currentHealth < owner.currentHealth) ownerSprite.currentHealth = owner.currentHealth;\n    } else {\n        ownerSprite.currentHealth += Math.max(1, difference / this.differenceRate());\n        if (ownerSprite.currentHealth > owner.currentHealth) ownerSprite.currentHealth = owner.currentHealth;\n    }\n\n    // Draw New Number\n    var bitmap = ownerSprite._heartSprite._drawLayer.bitmap;\n    bitmap.clear();\n    bitmap.drawText(Math.round(ownerSprite.currentHealth), 0, 0, bitmap.width, bitmap.height, 'center');\n\n    // Resize frame\n    var rate = 1 - (owner.currentHealth / owner.startHealth).clamp(0, 1);\n    var size = Math.round(frameHeight * rate);\n    if (ownerSprite._heartSprite._currentSize === undefined) ownerSprite._heartSprite._currentSize = 0;\n    ownerSprite._heartSprite._targetSize = size;\n}\n\n// Set Heart Location\nownerSprite._heartSprite.x = ownerSprite._heartSprite._baseX;\nownerSprite._heartSprite.y = ownerSprite._heartSprite._baseY;\n\n// Draw Heart Container Fill Percentage\nif (ownerSprite._heartSprite._currentSize !== ownerSprite._heartSprite._targetSize) {\n    if (ownerSprite._heartSprite._currentSize > ownerSprite._heartSprite._targetSize) {\n        ownerSprite._heartSprite._currentSize -= 0.25;\n        if (ownerSprite._heartSprite._currentSize < ownerSprite._heartSprite._targetSize) ownerSprite._heartSprite._currentSize = ownerSprite._heartSprite._targetSize;\n    } else {\n        var difference = Math.abs(ownerSprite._heartSprite._currentSize - ownerSprite._heartSprite._targetSize);\n        ownerSprite._heartSprite._currentSize += Math.max(0.25, difference / 30);\n        if (ownerSprite._heartSprite._currentSize > ownerSprite._heartSprite._targetSize) ownerSprite._heartSprite._currentSize = ownerSprite._heartSprite._targetSize;\n        var fluctuate = Math.min(this.maxFluctuation(), Math.round(difference));\n        ownerSprite._heartSprite.x += Math.randomInt(fluctuate) - Math.randomInt(fluctuate * 2);\n        ownerSprite._heartSprite.y += Math.randomInt(fluctuate) - Math.randomInt(fluctuate * 2);\n    }\n    var size = Math.round(ownerSprite._heartSprite._currentSize);\n    ownerSprite._heartSprite._front.setFrame(frameWidth, size, frameWidth, frameHeight - size);\n}"
 *
 * @param UpdateShield:func
 * @text JS: Update Shield
 * @parent CardGameBoard
 * @type note
 * @desc Code used when updating the shield sprite.
 * @default "// Declare Variables\nvar ownerSprite = arguments[0];\nvar owner = ownerSprite._owner;\nvar frameWidth = 72;\nvar frameHeight = 72;\n\n// Set Base\nownerSprite.shield = ownerSprite.shield || 0;\n\n// Set Location\nownerSprite._shieldSprite.x = ownerSprite._shieldSprite._baseX;\nownerSprite._shieldSprite.y = ownerSprite._shieldSprite._baseY;\n\n// Draw Shield Number\nif (ownerSprite.shield !== owner.shield) {\n    var difference = Math.abs(ownerSprite.shield - owner.shield)\n    if (ownerSprite.shield > owner.shield) {\n        ownerSprite.shield -= Math.max(0.25, difference / this.differenceRate());\n        if (ownerSprite.shield < owner.shield) ownerSprite.shield = owner.shield;\n        var fluctuate = Math.min(this.maxFluctuation(), Math.round(difference));\n        ownerSprite._shieldSprite.x += Math.randomInt(fluctuate) - Math.randomInt(fluctuate * 2);\n        ownerSprite._shieldSprite.y += Math.randomInt(fluctuate) - Math.randomInt(fluctuate * 2);\n    } else {\n        ownerSprite.shield += Math.max(1, difference / this.differenceRate());\n        if (ownerSprite.shield > owner.shield) ownerSprite.shield = owner.shield;\n    }\n    // Draw New Number\n    var bitmap = ownerSprite._shieldSprite._drawLayer.bitmap;\n    bitmap.clear();\n    bitmap.drawText(Math.round(ownerSprite.shield), 0, 0, bitmap.width, bitmap.height, 'center');\n}\n\n// Fade In/Out the Shield\nif (this._faceOpacitySpeed > 0) {\n    ownerSprite._shieldSprite.opacity += ((ownerSprite.shield > 0) ? 1 : -1) * this._faceOpacitySpeed;\n} else {\n    ownerSprite._shieldSprite.opacity += this._faceOpacitySpeed;\n}"
 *
 * @param 
 * @param HandWindows
 * @text Hand Window
 * @default ------------------------------------
 *
 * @param HandWindowCardWidth:num
 * @text Standard Card Width
 * @parent HandWindows
 * @desc Standard width used for the cards in your game. Adjust this value to make cards properly scale in hand.
 * @default 320
 * 
 * @param SkipTurnCard:num
 * @text Skip Turn Card
 * @parent HandWindows
 * @type item
 * @desc The card used to represent the skip turn action.
 * @default 1201
 * 
 * @param AlwaysShowSkip:eval
 * @text Always Show Skip Turn
 * @parent SkipTurnCard:num
 * @type boolean
 * @on Always Show
 * @off Don't Show
 * @desc Choose to always show the skip turn card in the player's hand or not.
 * @default false
 *
 * @param 
 * @param ListWindow
 * @text List Window
 * @default ------------------------------------
 *
 * @param ListWindowCardScale:num
 * @text Card Scale
 * @parent ListWindow
 * @desc Card scale used for the list window's nonselected cards.
 * @default 0.4
 *
 * @param ListWindowDrawText:func
 * @text JS: Draw Text
 * @parent ListWindow
 * @type note
 * @desc Draw the text message when searching through the list window.
 * @default "// Set Coordinates\nvar x = 0;\nvar y = this.contents.height / 9;\n\n// Reset Font Settings\nthis.resetFontSettings();\n\n// Change Font Size\nthis.contents.fontSize = 32;\n\n// Draw Text\nthis.drawText(this._text, x, y, this.contents.width, 'center');"
 * 
 * @param 
 * @param SpriteSettings
 * @text Sprite Positioning
 * @default ------------------------------------
 *
 * @param ReadySingleCardCode:func
 * @text JS: Ready Card Settings
 * @parent SpriteSettings
 * @type note
 * @desc Code used to get cards ready upon creation.
 * @default "var sprite = arguments[0];\nsprite.transform.skew.x = -0.50;\nsprite.transform.skew.y = 0.25;\nsprite.rotation = 0.5;\nsprite._backShowing = true;\nsprite._baseScale = 0.25;"
 *
 * @param SortSkipCards:func
 * @text JS: Sort Skip Cards
 * @parent SpriteSettings
 * @type note
 * @desc Code used to sort the skip cards.
 * @default "// Declare Variables;\nvar owner = arguments[0];\nvar sprite = owner.skipCard.sprite();\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Check if card owner is the player\nif (owner === $cardPlayer()) {\n    var x = owner._libraryLocation.x;\n    sprite.changeSkew(-0.50, 0.25, duration, easing);\n    sprite.changeRotation(0.5, duration, easing);\n    \n// If not the player\n} else {\n    var x = Graphics.boxWidth / 2;\n    sprite.changeSkew(0, 0, duration, easing);\n    sprite.changeRotation(0, duration, easing);\n}\n\n// Adjust Sprite\nvar y = owner._libraryLocation.y - owner.library.length;\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(0, duration);\nsprite.changeScale(0.25, duration, easing);\nsprite.flip(duration, false);"
 *
 * @param SortSpotlightCard:func
 * @text JS: Sort Spotlight Card
 * @parent SpriteSettings
 * @type note
 * @desc Code used to sort the spotlight card (the one acting an effect or picked from a list).
 * @default "var owner = arguments[0];\nvar sprite = arguments[1];\nvar duration = 20;\nvar easing = 'OUTSINE';\n\n// Adjust Sprites\nsprite.startMove(Graphics.boxWidth / 2, Graphics.boxHeight / 2, duration, easing);\nsprite.changeOpacity(255, duration);\nsprite.changeScale(1.20, duration, easing);\nsprite.changeSkew(0, 0, duration, easing);\nsprite.changeRotation(0, duration, easing);\n\nsprite._flipDuration = 0;\nsprite._flipTotalDuration = 0;\nsprite._backShowing = false;\n$spotlightCard._isRevealed = true;"
 *
 * @param SortLibrary:func
 * @text JS: Sort Library Cards
 * @parent SpriteSettings
 * @type note
 * @desc Code used to sort the cards in the Library.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = owner._libraryLocation.x;\nvar index = owner.library.indexOf(sprite._card);\nvar y = owner._libraryLocation.y - index;\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(255, duration);\nsprite.changeScale(0.25, duration, easing);\nsprite.changeSkew(-0.50, 0.25, duration, easing);\nsprite.changeRotation(0.5, duration, easing);\nsprite.flip(duration, !sprite._card.isRevealed());"
 *
 * @param SortDiscard:func
 * @text JS: Sort Discard Cards
 * @parent SpriteSettings
 * @type note
 * @desc Code used to sort the cards in the Discard Pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = owner._discardLocation.x;\nvar index = owner.discard.indexOf(sprite._card);\nvar y = owner._discardLocation.y - index;\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(255, duration);\nsprite.changeScale(0.25, duration, easing);\nsprite.changeSkew(0.50, -0.25, duration, easing);\nsprite.changeRotation(-0.5, duration, easing);\nsprite.flip(duration, false);"
 *
 * @param SortSummon:func
 * @text JS: Sort Summoned Cards
 * @parent SpriteSettings
 * @type note
 * @desc Code used to sort the cards in the Discard Pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = $cardPlayer().pileLocationX('A');\nvar index = owner.discard.indexOf(sprite._card);\nvar y = $cardPlayer().pileLocationY('A') - index;\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(255, duration);\nsprite.changeScale(0.25, duration, easing);\nsprite.changeSkew(0.50, -0.25, duration, easing);\nsprite.changeRotation(-0.5, duration, easing);\nsprite.flip(duration, false);"
 * 
 * @param SortExhaust:func
 * @text JS: Sort Exhaust Cards
 * @parent SpriteSettings
 * @type note
 * @desc Code used to sort the cards in the Discard Pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = owner._exhaustLocation.x;\nvar index = owner.exhaust.indexOf(sprite._card);\nvar y = owner._exhaustLocation.y - owner.exhaust.length;\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(128, duration);\nsprite.changeScale(0.25, duration, easing);\nsprite.changeSkew(0.50, -0.25, duration, easing);\nsprite.changeRotation(-0.5, duration, easing);\nsprite.flip(duration, false);"
 *
 * @param SortHand:func
 * @text JS: Sort Hand Cards
 * @parent SpriteSettings
 * @type note
 * @desc Code used to sort the cards in a player's hand.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar i = arguments[2];\nvar handWindow = arguments[3];\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar rect = handWindow.itemRect(i);\nvar x = handWindow.x + rect.x + rect.width/2;\nvar y = handWindow.y + rect.y + rect.height/2;\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(255, duration);\nsprite.changeScale(handWindow._cardScale, duration, easing);\nsprite.changeSkew(0, 0, duration, easing);\nsprite.changeRotation(0, duration, easing);"
 *
 * @param SelectedHand:func
 * @text JS: Selected Hand
 * @parent SortHand:func
 * @type note
 * @desc Code used to change the selected card in hand.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar handWindow = arguments[2];\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar rect = handWindow.itemRect(handWindow.index());\nvar x = handWindow.x + rect.x + rect.width/2;\nvar cwh = sprite.width / 2;\nx = x.clamp(cwh, Graphics.boxWidth - cwh);\nvar y = handWindow.y + rect.y + rect.height/2;\nvar chh = sprite.height / 2;\ny = y.clamp(chh, Graphics.boxHeight - chh);\n\n// Adjust Sprites\nsprite.startMove(x, y, 10, 'OUTSINE');\nsprite.changeScale(1.0, 10, 'OUTSINE');"
 *
 * @param SortList:func
 * @text JS: Sort List Cards
 * @parent SpriteSettings
 * @type note
 * @desc Code used to sort the cards in a listed cards window.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar i = arguments[2];\nvar listWindow = arguments[3];\nvar duration = 10;\nvar easing = 'OUTSINE';\nvar cardWidth = Imported.Irina_CardGameMechanics.HandWindowCardWidth/2 * (1-listWindow._cardScale);\n\n// Calculate Locations\nvar rect = listWindow.itemRect(i);\nvar x = listWindow.x + rect.x + rect.width/2;\nvar y = listWindow.y + rect.y + rect.height/2;\n\n// Check Index Position\nif (i < listWindow.index()) {\n    var d = listWindow.index()-i;\n    x -= cardWidth;\n    sprite.changeRotation(-0.5, duration, easing);\n} else if (i > listWindow.index()) {\n    var d = i-listWindow.index();\n    x += cardWidth;\n    sprite.changeRotation(0.5, duration, easing);\n} else {\n    sprite.changeRotation(0, duration, easing);\n}\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(255, duration);\nsprite.changeSkew(0, 0, duration, easing);\nsprite.changeScale(listWindow._cardScale, duration, easing);"
 *
 * @param SelectedList:func
 * @text JS: Selected List
 * @parent SortList:func
 * @type note
 * @desc Code used to change the selected card in a listed cards window.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar listWindow = arguments[2];\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Locations\nvar rect = listWindow.itemRect(listWindow.index());\nvar x = listWindow.x + rect.x + rect.width/2;\nvar cwh = sprite.width / 2;\nx = x.clamp(cwh, Graphics.boxWidth - cwh);\nvar y = listWindow.y + rect.y + rect.height/2;\nvar chh = sprite.height / 2;\ny = y.clamp(chh, Graphics.boxHeight - chh);\n\n// Adjust Sprite\nsprite.startMove(x, y, duration, easing);\nsprite.changeSkew(0, 0, duration, easing);\nsprite.changeRotation(0, duration, easing);\nsprite.changeScale(1.0, duration, easing);"
 * 
 * @param 
 * @param CustomPiles
 * @text Custom Pile Positioning
 * @default ------------------------------------
 *
 * @param CustomPileA:func
 * @text JS: Custom Pile A
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileB:func
 * @text JS: Custom Pile B
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileC:func
 * @text JS: Custom Pile C
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileD:func
 * @text JS: Custom Pile D
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileE:func
 * @text JS: Custom Pile E
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileF:func
 * @text JS: Custom Pile F
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileG:func
 * @text JS: Custom Pile G
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileH:func
 * @text JS: Custom Pile H
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileI:func
 * @text JS: Custom Pile I
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileJ:func
 * @text JS: Custom Pile J
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileK:func
 * @text JS: Custom Pile K
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileL:func
 * @text JS: Custom Pile L
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileM:func
 * @text JS: Custom Pile M
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileN:func
 * @text JS: Custom Pile N
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileO:func
 * @text JS: Custom Pile O
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileP:func
 * @text JS: Custom Pile P
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileQ:func
 * @text JS: Custom Pile Q
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileR:func
 * @text JS: Custom Pile R
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileS:func
 * @text JS: Custom Pile S
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileT:func
 * @text JS: Custom Pile T
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileU:func
 * @text JS: Custom Pile U
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileV:func
 * @text JS: Custom Pile V
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileW:func
 * @text JS: Custom Pile W
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.rdFor
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileX:func
 * @text JS: Custom Pile X
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileY:func
 * @text JS: Custom Pile Y
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 *
 * @param CustomPileZ:func
 * @text JS: Custom Pile Z
 * @parent CustomPiles
 * @type note
 * @desc Code used to sort the cards in this custom pile.
 * @default "// Declare Variables\nvar owner = arguments[0];\nvar sprite = arguments[1];\nvar card = sprite._card;\nvar duration = 10;\nvar easing = 'OUTSINE';\n\n// Calculate Location\nvar x = Graphics.boxWidth / 2;\nvar y = Graphics.boxHeight / 2;\n\n// Other Traits\nvar opacity = 255;   // Number between 0-255\nvar scale = 0.50;    // Use a decimal number\nvar skewX = 0.00;    // Use a decimal number\nvar skewY = 0.00;    // Use a decimal number\nvar rotation = 0.00; // Use a decimal number\nvar flip = !card.isRevealed(); // true/false value\n\n// Adjust Sprites\nsprite.startMove(x, y, duration, easing);\nsprite.changeOpacity(opacity, duration);\nsprite.changeScale(scale, duration, easing);\nsprite.changeSkew(skewX, skewY, duration, easing);\nsprite.changeRotation(rotation, duration, easing);\nsprite.flip(duration, flip);"
 * 
 * @param
 *
 */
//=============================================================================

var pluginData=$plugins.filter(function(p){return p.description.contains("<CardGameMechanics>")})[0];var Imported=Imported||{};Imported.Irina_CardGameMechanics={};if(!Imported.Irina_CardGameCore||!Imported.Irina_CardGameDeck){alert("Irina_CardGameMechanics plugin needs to have Irina_CardGameCore and Irina_CardGameDeck placed above it in the Plugin Manager list.");SceneManager.exit()}(function(pluginData){var plugin="Irina_CardGameMechanics";var convertParams=function(obj,data){for(var key in data){if(key.match(/(.*):NUM/i))obj[String(RegExp.$1)]=Number(data[key])||0;if(key.match(/(.*):STR/i))obj[String(RegExp.$1)]=String(data[key])||"";if(key.match(/(.*):ARRAYSTR/i))obj[String(RegExp.$1)]=JSON.parse(pluginData.parameters[key]);if(key.match(/(.*):EVAL/i))obj[String(RegExp.$1)]=eval(data[key]);if(key.match(/(.*):JSON/i))obj[String(RegExp.$1)]=JSON.parse(data[key]);if(key.match(/(.*):FUNC/i))obj[String(RegExp.$1)]=new Function(JSON.parse(data[key]));if(key.match(/(.*):ARRAYSTRUCT/i)){var array=JSON.parse(pluginData.parameters[key]);obj[String(RegExp.$1)]=array;for(var i=0;i<array.length;i++){var newData=JSON.parse(array[i]);array[i]={};convertParams(array[i],newData)}}}};convertParams(Imported[plugin],pluginData.parameters)})(pluginData);$makeArrayOfCurrentDeck=function(){if(SceneManager._scene instanceof Scene_CardDeckBuilder){var deck=SceneManager._scene.currentDeck();if(!deck){console.log("You do not have a deck selected.")}else{var str="[";for(var i=0;i<deck.cards.length;i++){if(i>0)str+=", ";str+=deck.cards[i]}str+="]";console.log(str)}}else{console.log("You are not in the Deck Builder scene.")}};$pickPlayerDeck=function(ruleset){if(SceneManager._scene instanceof Scene_Map){SceneManager._scene.startPickPlayerDeck(ruleset);$wait(10)}else{console.log("You can only start card battles from the map.")}};$scene=function(){return SceneManager._scene};$cardPlayer=function(){return $gameSystem.getCardGameUnit(0)};$cardOpponent=function(id){id=id||1;return $gameSystem.getCardGameUnit(id)};$newDeck=function(ruleset,name){var deck=$gameSystem.createNewDeck(ruleset);deck.name=name;return deck};$wait=function(time){if($gameTemp._lastInterpreter)$gameTemp._lastInterpreter._waitCount+=time};var $selectedCard=null;var $calc={};var $cardBattleResult=null;var $targetCard=null;var $targetCards=[];var $targetCardPlayer=null;var $targetCardPlayers=[];var $userCard=null;var $userCardPlayer=null;var $note={};var $ai={};var $pickedCard=null;var $actionCard=null;var $spotlightCard=null;Game_System.prototype.getCardGameUnit=function(id){id=id||0;this._cardGameUnits=this._cardGameUnits||{};this._cardGameUnits[id]=this._cardGameUnits[id]||new Game_CardGameUnit(id);return this._cardGameUnits[id]};Game_System.prototype.clearCardGameUnits=function(){this._cardGameUnits={}};Game_Party.prototype.gainCardsInDeck=function(deck){if(!deck)return;if(!deck.cards)return;var quantity={};for(var i=0;i<deck.cards.length;i++){var itemId=deck.cards[i];quantity[itemId]=quantity[itemId]||0;quantity[itemId]+=1}for(var key in quantity){var count=quantity[key];var itemId=Number(key);var item=$dataItems[itemId];if(item&&count>0){var partyCount=this.numItems(item);if(partyCount<count){this.gainItem(item,Math.round(count-partyCount))}}}};function Game_CardGameUnit(){this.initialize.apply(this,arguments)}Object.defineProperties(Game_CardGameUnit.prototype,{deck:{get:function(){return this._baseDeck},set:function(deck){this._baseDeck=deck},configurable:true},startHealth:{get:function(){return this._baseStartHealth},set:function(value){value=value||1;this._baseStartHealth=value;this._baseCurrentHealth=value},configurable:true},maxHealth:{get:function(){return this._baseStartHealth},set:function(value){value=value||1;this._baseStartHealth=value;this._baseCurrentHealth=value},configurable:true},currentHealth:{get:function(){return this._baseCurrentHealth},set:function(value){this._baseCurrentHealth=value},configurable:true},health:{get:function(){return this._baseCurrentHealth},set:function(value){this._baseCurrentHealth=value},configurable:true},shield:{get:function(){return this._shieldValue||0},set:function(value){this._shieldValue=Math.max(0,value)},configurable:true},actor:{get:function(){return $gameActors.actor(this._actorId)},set:function(id){this._actorId=id},configurable:true},ai:{get:function(){return this._aiType||"STRONG"},set:function(type){this._aiType=type.toUpperCase()},configurable:true},allCards:{get:function(){return this._allPile},configurable:true},library:{get:function(){return this._libraryPile},configurable:true},discard:{get:function(){return this._discardPile},configurable:true},exhaust:{get:function(){return this._exhaustPile},configurable:true},hand:{get:function(){return this._handPile},configurable:true},pileA:{get:function(){return this._customPiles.A},configurable:true},pileB:{get:function(){return this._customPiles.B},configurable:true},pileC:{get:function(){return this._customPiles.C},configurable:true},pileD:{get:function(){return this._customPiles.D},configurable:true},pileE:{get:function(){return this._customPiles.E},configurable:true},pileF:{get:function(){return this._customPiles.F},configurable:true},pileG:{get:function(){return this._customPiles.G},configurable:true},pileH:{get:function(){return this._customPiles.H},configurable:true},pileI:{get:function(){return this._customPiles.I},configurable:true},pileJ:{get:function(){return this._customPiles.J},configurable:true},pileK:{get:function(){return this._customPiles.K},configurable:true},pileL:{get:function(){return this._customPiles.L},configurable:true},pileM:{get:function(){return this._customPiles.M},configurable:true},pileN:{get:function(){return this._customPiles.N},configurable:true},pileO:{get:function(){return this._customPiles.O},configurable:true},pileP:{get:function(){return this._customPiles.P},configurable:true},pileQ:{get:function(){return this._customPiles.Q},configurable:true},pileR:{get:function(){return this._customPiles.R},configurable:true},pileS:{get:function(){return this._customPiles.S},configurable:true},pileT:{get:function(){return this._customPiles.T},configurable:true},pileU:{get:function(){return this._customPiles.U},configurable:true},pileV:{get:function(){return this._customPiles.V},configurable:true},pileW:{get:function(){return this._customPiles.W},configurable:true},pileX:{get:function(){return this._customPiles.X},configurable:true},pileY:{get:function(){return this._customPiles.Y},configurable:true},pileZ:{get:function(){return this._customPiles.Z},configurable:true},battleCard:{get:function(){return this._selectedBattleCard},set:function(card){this._selectedBattleCard=card},configurable:true}});Game_CardGameUnit.prototype.initialize=function(id){this._id=id;this.initMembers()};Game_CardGameUnit.prototype.initMembers=function(){this._baseDeck=null;this._baseStartHealth=this._baseCurrentHealth=20;this._actorId=1;this.prepareForCardBattle()};Game_CardGameUnit.prototype.prepareForCardBattle=function(){this.shield=0;this._libraryLocation={x:0,y:0};this._discardLocation={x:0,y:0};this._exhaustLocation={x:0,y:0};this._pileLocation={};this.emptyStorages();this.clearAnimation()};Game_CardGameUnit.prototype.emptyStorages=function(){this._allPile=[];this._libraryPile=[];this._discardPile=[];this._exhaustPile=[];this._handPile=[];this._customPiles={A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[]}};Game_CardGameUnit.prototype.setLibraryLocation=function(x,y){this._libraryLocation.x=x;this._libraryLocation.y=y};Game_CardGameUnit.prototype.setDiscardLocation=function(x,y){this._discardLocation.x=x;this._discardLocation.y=y};Game_CardGameUnit.prototype.setExhaustLocation=function(x,y){this._exhaustLocation.x=x;this._exhaustLocation.y=y};Game_CardGameUnit.prototype.setPileLocation=function(letter,x,y){letter=letter.toUpperCase().trim();this._pileLocation[letter]=this._pileLocation[letter]||{x:0,y:0};this._pileLocation[letter].x=x;this._pileLocation[letter].y=y};Game_CardGameUnit.prototype.pileLocationX=function(letter){letter=letter.toUpperCase().trim();this._pileLocation[letter]=this._pileLocation[letter]||{x:0,y:0};return this._pileLocation[letter].x};Game_CardGameUnit.prototype.pileLocationY=function(letter){letter=letter.toUpperCase().trim();this._pileLocation[letter]=this._pileLocation[letter]||{x:0,y:0};return this._pileLocation[letter].y};Game_CardGameUnit.prototype.readyCurrentDeck=function(shuffle,wait){this.setupCardSleeves();this.emptyStorages();if(wait)$wait(2);var deck=JsonEx.makeDeepCopy(this.deck.cards);if(shuffle)CardManager.shuffle(deck);var frame=1e3/60;var count=2;var x=this._libraryLocation.x;var y=this._libraryLocation.y;for(var i=0;i<deck.length;i++){var itemId=deck[i];setTimeout(this.readySingleCard.bind(this,itemId,x,y-i),frame*count);count+=2;if(wait)$wait(2)}this.createSkipCard()};Game_CardGameUnit.prototype.setupCardSleeves=function(){if(this===$cardPlayer()){$gameTemp._playerDeckSleeves=this.deck.sleeves}else{$gameTemp._opponentDeckSleeves=this.deck.sleeves}};Game_CardGameUnit.prototype.readySingleCard=function(itemId,x,y){var card=CardManager.createCard(itemId,this===$cardPlayer());card.registerOriginalOwner(this);this._libraryPile.push(card);this._allPile.push(card);var sprite=card.sprite();Imported.Irina_CardGameMechanics.ReadySingleCardCode.call(this,sprite);sprite.x=x;sprite.y=y;sprite.update();$scene().refreshCardGameHUD()};Game_CardGameUnit.prototype.createSkipCard=function(){var itemId=Imported.Irina_CardGameMechanics.SkipTurnCard;var card=CardManager.createCard(itemId,this===$cardPlayer());card.registerOriginalOwner(this);var sprite=card.sprite();this.skipCard=card;sprite.transform.skew.x=0;sprite.transform.skew.y=0;sprite.rotation=0;sprite.opacity=0;sprite._backShowing=false;sprite._baseScale=0;sprite.x=Graphics.boxWidth/2;sprite.y=Graphics.boxHeight/2;sprite.update()};Card.prototype.registerOriginalOwner=function(owner){this._originalOwner=owner._id};Card.prototype.getOriginalOwner=function(){if(this._originalOwner===undefined){for(var ownerId in $gameSystem._cardGameUnits){var owner=$gameSystem._cardGameUnits[key];if(owner._allPile.contains(this)){this._originalOwner=Number(ownerId);break}}return null}return $gameSystem.getCardGameUnit(this._originalOwner)};Game_CardGameUnit.prototype.drawCard=function(count,wait){if(wait)$wait(2);count=count||1;count=Math.min(count,this.library.length);var frame=1e3/60;for(var i=0;i<count;i++){setTimeout(this.drawCardFromLibrary.bind(this),frame*(i+1)*10);if(wait)$wait(10)}};Game_CardGameUnit.prototype.drawCardFromLibrary=function(){if(this.library.length<=0)return;var card=this.library.pop();this.addCardToHand(card);if(this===$cardPlayer()&&card.sprite()){card.sprite().flip(10,false)}else{setTimeout(SoundManager.playCard.bind(null),1e3/60*5)}$scene().refreshCardGameHUD();$scene().refreshCardGameHandWindow(this);$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.removeCardFromAllPiles=function(card){this.removeCardFromLibrary(card);this.removeCardFromDiscard(card);this.removeCardFromExhaust(card);this.removeCardFromHand(card);this.removeCardFromAllCustomPiles(card)};Game_CardGameUnit.prototype.removeCardFromLibrary=function(card){var index=this.library.indexOf(card);if(index>=0)this.library.splice(index,1);$scene().refreshCardGameHandWindow(this);$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.removeCardFromDiscard=function(card){var index=this.discard.indexOf(card);if(index>=0)this.discard.splice(index,1);$scene().refreshCardGameHandWindow(this);$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.removeCardFromExhaust=function(card){var index=this.exhaust.indexOf(card);if(index>=0)this.exhaust.splice(index,1);$scene().refreshCardGameHandWindow(this);$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.removeCardFromHand=function(card){var index=this.hand.indexOf(card);if(index>=0)this.hand.splice(index,1);$scene().refreshCardGameHandWindow(this);$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.removeCardFromCustomPile=function(card,letter){var key="pile"+letter.toUpperCase().trim();var pile=this._customPiles[key];if(!pile)return;var index=pile.indexOf(card);if(index>=0)pile.splice(index,1);$scene().refreshCardGameHandWindow(this);$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.removeCardFromAllCustomPiles=function(card){var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(var i=0;i<letters.length;i++){this.removeCardFromCustomPile(card,letters[i])}};Game_CardGameUnit.prototype.addCardToLibrary=function(card,bottom){if(card===this.skipCard)return;this.removeCardFromAllPiles(card);if(bottom){this.library.unshift(card)}else{this.library.push(card)}$scene().refreshCardGameHandWindow(this);$scene().refreshCardGameHUD();$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.summon=function(card){if(card===this.skipCard)return;this.removeCardFromAllPiles(card);this.pileA.push(card);$scene().refreshCardGameHandWindow(this);$scene().refreshCardGameHUD();$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.addCardToDiscard=function(card){if(card===this.skipCard)return;this.removeCardFromAllPiles(card);this.discard.push(card);$scene().refreshCardGameHandWindow(this);$scene().refreshCardGameHUD();$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.addCardToExhaust=function(card){if(card===this.skipCard)return;this.removeCardFromAllPiles(card);this.exhaust.push(card);$scene().refreshCardGameHandWindow(this);$scene().refreshCardGameHUD();$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.addCardToHand=function(card){if(card===this.skipCard)return;this.removeCardFromAllPiles(card);this.hand.push(card);$scene().refreshCardGameHandWindow(this);$scene().refreshCardGameHUD();$scene().sortCardGameCardSprites()};Game_CardGameUnit.prototype.addCardToPile=function(card,letter){if(card===this.skipCard)return;letter=letter.toUpperCase().trim();if(!this._customPiles[letter])return;var pile=this._customPiles[letter];this.removeCardFromAllPiles(card);pile.push(card);$scene().refreshCardGameHandWindow(this);$scene().refreshCardGameHUD();$scene().sortCardGameCardSprites()};Card.prototype.waitForAnimation=function(){if(this.sprite()&&this.sprite().isAnimationPlaying()){$wait(1);setTimeout(this.waitForAnimation.bind(this),1e3/60)}};Game_CardGameUnit.prototype.startAnimation=function(animationId,mirror,delay){this._animationData={animationId:animationId,mirror:mirror||false,delay:delay||0}};Game_CardGameUnit.prototype.playAnimation=function(animationId,mirror,delay){this.startAnimation(animationId,mirror,delay)};Game_CardGameUnit.prototype.clearAnimation=function(){this._animationData={animationId:0,mirror:false,delay:0}};Game_CardGameUnit.prototype.returnPileToLibrary=function(pile){if(pile===this.library)return;if(pile.length>0){while(pile.length>0){var card=pile.pop();card.sprite().flip(10,true);card._isRevealed=false;this.library.push(card)}this.shuffleCards(this.library);$wait(10)}};Game_CardGameUnit.prototype.shuffleCards=function(array){CardManager.shuffle(array);$scene().refreshCardGameHandWindow(this);$scene().sortCardGameCardSprites();setTimeout(function(array){for(var i=0;i<array.length;i++){var card=array[i];if(card&&card.sprite()){if(array===this.library){card.sprite()._backShowing=true;card.sprite()._flipDuration=0;card.sprite()._flipTotalDuration=0}card.sprite()._moveType="INOUTBACK"}}}.bind(this,array),1e3)};Card.prototype.priority=function(type){type=type||"A";if(this.item()){var notedata=this.item().note.split(/[\r\n]+/);for(var i=0;i<notedata.length;i++){var line=notedata[i];if(line.match(/<Card AI Priority-(.*): (.*)>/i)){if(String(RegExp.$1).toUpperCase()===type.toUpperCase())return Number(RegExp.$2)}}}return 0};Imported.Irina_CardGameMechanics.Scene_Boot_start=Scene_Boot.prototype.start;Scene_Boot.prototype.start=function(){Imported.Irina_CardGameMechanics.Scene_Boot_start.call(this);if(Imported.Irina_CardGameMechanics.MergeOnBoot)this.prepareMergedCommonEventLists()};Scene_Boot.prototype.prepareMergedCommonEventLists=function(){for(var i=1;i<$dataCommonEvents.length;i++){var commonEvent=$dataCommonEvents[i];if(commonEvent)commonEvent._mergedList=Game_Interpreter.prototype.createMergedCommonEventList.call(this,[],i,0)}};Imported.Irina_CardGameMechanics.Game_Interpreter_command117=Game_Interpreter.prototype.command117;Game_Interpreter.prototype.command117=function(){var commonEvent=$dataCommonEvents[this._params[0]];if(commonEvent&&commonEvent.name.match(/<Merge>/i)){var eventId=this.isOnCurrentMap()?this._eventId:0;if(commonEvent._mergedList){list=commonEvent._mergedList}else{var list=[];var id=this._params[0];if(false)console.log("Thank you Yanfly for making this work!");commonEvent._mergedList=this.createMergedCommonEventList(list,id,0)}this.setupChild(list,eventId);return true}return Imported.Irina_CardGameMechanics.Game_Interpreter_command117.call(this)};Game_Interpreter.prototype.createMergedCommonEventList=function(list,id,indent){var commonEvent=JsonEx.makeDeepCopy($dataCommonEvents[id]);for(var i=0;i<commonEvent.list.length;++i){var ev=commonEvent.list[i];ev.indent+=indent;if(ev.code===117){var commonEventId=ev.parameters[0];Game_Interpreter.prototype.createMergedCommonEventList.call(this,list,commonEventId,ev.indent)}else if(ev.code===111){if(ev.parameters[0]===12){ev._cachedFunction=new Function("return "+ev.parameters[1])}list.push(ev)}else if(ev.code===355){var script=ev.parameters[0]+"\n";var savedIndex=i;i++;while(commonEvent.list[i].code===655){script+=commonEvent.list[i].parameters[0]+"\n";i++}i=savedIndex;ev._cachedFunction=new Function(script);list.push(ev)}else{list.push(ev)}}return list};Imported.Irina_CardGameMechanics.Game_Interpreter_command111=Game_Interpreter.prototype.command111;Game_Interpreter.prototype.command111=function(){if(this.currentCommand()._cachedFunction){var result=false;result=!!this.currentCommand()._cachedFunction.call(this);this._branch[this._indent]=result;if(this._branch[this._indent]===false){this.skipBranch()}return true}else{return Imported.Irina_CardGameMechanics.Game_Interpreter_command111.call(this)}};Imported.Irina_CardGameMechanics.Game_Interpreter_command355=Game_Interpreter.prototype.command355;Game_Interpreter.prototype.command355=function(){$gameTemp._lastInterpreter=this;if(this.currentCommand()._cachedFunction){try{this.currentCommand()._cachedFunction.call(this);return true}catch(e){console.log("Script call failed to complete due to error: ");console.log(this.currentCommand()._cachedFunction);return Imported.Irina_CardGameMechanics.Game_Interpreter_command355.call(this)}}else{return Imported.Irina_CardGameMechanics.Game_Interpreter_command355.call(this)}};function Window_CardGameSelectDeck(){this.initialize.apply(this,arguments)}Window_CardGameSelectDeck.prototype=Object.create(Window_Command.prototype);Window_CardGameSelectDeck.prototype.constructor=Window_CardGameSelectDeck;Window_CardGameSelectDeck.prototype.initialize=function(){this._ruleset="Standard";Window_Command.prototype.initialize.call(this,0,0);this.createSubWindow();this.deactivate();this.openness=0};Window_CardGameSelectDeck.prototype.windowWidth=function(){if(this._windowWidth===undefined)this._windowWidth=eval(Imported.Irina_CardGameMechanics.SelectDeckWindowWidth);return this._windowWidth};Window_CardGameSelectDeck.prototype.numVisibleRows=function(){if(this._windowRows===undefined)this._windowRows=eval(Imported.Irina_CardGameMechanics.SelectDeckWindowRows);return this._windowRows};Window_CardGameSelectDeck.prototype.createSubWindow=function(){var height=this.fittingHeight(1);this._titleWindow=new Window_Base(0,-height,this.width,height);this.addChild(this._titleWindow);this._titleWindow.openness=0;var text=Imported.Irina_CardGameMechanics.SelectDeckWindowMsg;this._titleWindow.drawText(text,0,0,this._titleWindow.contents.width,"center")};Window_CardGameSelectDeck.prototype.open=function(){Window_Command.prototype.open.call(this);if(this._titleWindow)this._titleWindow.open()};Window_CardGameSelectDeck.prototype.close=function(){Window_Command.prototype.close.call(this);if(this._titleWindow)this._titleWindow.close()};Window_CardGameSelectDeck.prototype.setup=function(ruleset){this._ruleset=ruleset;this.x=(Graphics.boxWidth-this.width)/2;this.y=(Graphics.boxHeight-this.height+this.fittingHeight(1))/2;this.refresh();this.open();this.activate();this.select(0)};Window_CardGameSelectDeck.prototype.makeCommandList=function(){var decks=$gameSystem.decksForRuleset(this._ruleset);for(var i=0;i<decks.length;i++){var deck=decks[i];var text="\\i["+Window_DeckBuilderList.prototype.getDeckIcon.call(this,deck)+"]"+deck.name;var enabled=this.isDeckEnabled(deck);this.addCommand(text,"selectDeck",enabled,deck)}};Window_CardGameSelectDeck.prototype.isDeckEnabled=function(deck){if(deck&&deck.cards){var deckSize=deck.cards.length;var minSize=Imported.Irina_CardGameDeck.RulesetList[this._ruleset.toUpperCase()].MinDeckSize;return deckSize>=minSize}return false};Window_CardGameSelectDeck.prototype.drawItem=function(index){var rect=this.itemRectForText(index);var align=this.itemTextAlign();this.resetTextColor();this.changePaintOpacity(this.isCommandEnabled(index));this.drawTextEx(this.commandName(index),rect.x,rect.y,rect.width,align)};function Window_CardGameHUD(){this.initialize.apply(this,arguments)}Window_CardGameHUD.prototype=Object.create(Window_Base.prototype);Window_CardGameHUD.prototype.constructor=Window_CardGameHUD;Window_CardGameHUD.prototype.initialize=function(){Window_Base.prototype.initialize.call(this,0,0,Graphics.boxWidth,Graphics.boxHeight);this.setup()};Window_CardGameHUD.prototype.standardPadding=function(){return 0};Window_CardGameHUD.prototype.setup=function(){this._handContainer=new Sprite;this.addChildToBack(this._handContainer);this._spriteContainer=new Sprite;this.addChildToBack(this._spriteContainer);this._spritesetContainer=new Sprite;this.addChildToBack(this._spritesetContainer);this._parallaxContainer=new Sprite;this.addChildToBack(this._parallaxContainer);this.createBattlebacks();this.createImageHUD();this._requestRefresh=true;Imported.Irina_CardGameMechanics.SetupBoard.call(this)};Window_CardGameHUD.prototype.createBattlebacks=function(){this._battlebackOpacitySpeed=16;this._back1Sprite=new TilingSprite;this._back2Sprite=new TilingSprite;this._back1Sprite.bitmap=this.battleback1Bitmap();this._back1Sprite.bitmapName=$gameMap.battleback1Name();this._back2Sprite.bitmap=this.battleback2Bitmap();this._back2Sprite.bitmapName=$gameMap.battleback2Name();this._back1Sprite.move(0,0,this.width,this.height);this._back2Sprite.move(0,0,this.width,this.height);this._back1Sprite.opacity=0;this._back2Sprite.opacity=0;this._parallaxContainer.addChild(this._back1Sprite);this._parallaxContainer.addChild(this._back2Sprite)};Window_CardGameHUD.prototype.createImageHUD=function(){this._imageHUDSprite=new Sprite;this._parallaxContainer.addChild(this._imageHUDSprite);var filename=Imported.Irina_CardGameMechanics.BackgroundImg;this._imageHUDSprite.bitmap=ImageManager.loadPicture(filename);this._imageHUDSprite.opacity=0;this._imageHUDOpacitySpeed=16};Window_CardGameHUD.prototype.battleback1Bitmap=function(){var filename=Spriteset_Battle.prototype.battleback1Name.call(Spriteset_Battle);return ImageManager.loadBattleback1(filename)};Window_CardGameHUD.prototype.battleback2Bitmap=function(){var filename=Spriteset_Battle.prototype.battleback2Name.call(Spriteset_Battle);return ImageManager.loadBattleback2(filename)};Window_CardGameHUD.prototype.createFaceSprite=function(owner){return Imported.Irina_CardGameMechanics.CreateFaceSprite.call(this,owner)};Window_CardGameHUD.prototype.createHeartMeter=function(ownerSprite,owner){Imported.Irina_CardGameMechanics.CreateHealthMeter.call(this,ownerSprite,owner)};Window_CardGameHUD.prototype.createShield=function(ownerSprite,owner){Imported.Irina_CardGameMechanics.CreateShieldCounter.call(this,ownerSprite,owner)};Window_CardGameHUD.prototype.refresh=function(){this._requestRefresh=true};Window_CardGameHUD.prototype.processRefresh=function(){this.contents.clear();this._requestRefresh=false;if($scene().cardContainer().children.length<=0)return;Imported.Irina_CardGameMechanics.BoardRefresh.call(this)};Window_CardGameHUD.prototype.update=function(){Window_Base.prototype.update.call(this);this.updateBattlebacks();this.updateImageHUD();this.updateRefresh();Imported.Irina_CardGameMechanics.BoardUpdate.call(this)};Window_CardGameHUD.prototype.updateBattlebacks=function(){var backSprites=[this._back1Sprite,this._back2Sprite];for(var i=0;i<backSprites.length;i++){var sprite=backSprites[i];if(sprite){sprite.opacity+=this._battlebackOpacitySpeed;if(!sprite.scaledProperly&&sprite.bitmap.width>0){sprite.scale.x=Math.max(1,Graphics.boxWidth/sprite.bitmap.width);sprite.scale.y=Math.max(1,Graphics.boxHeight/sprite.bitmap.height);sprite.scaledProperly=true}}}};Window_CardGameHUD.prototype.updateImageHUD=function(){if(this._imageHUDSprite)this._imageHUDSprite.opacity+=this._imageHUDOpacitySpeed};Window_CardGameHUD.prototype.updateRefresh=function(){if(this._requestRefresh)this.processRefresh()};Window_CardGameHUD.prototype.differenceRate=function(){return Imported.Irina_CardGameMechanics.FlucDifMod};Window_CardGameHUD.prototype.maxFluctuation=function(){return Imported.Irina_CardGameMechanics.FlucDifMax};Window_CardGameHUD.prototype.updateShield=function(ownerSprite){Imported.Irina_CardGameMechanics.UpdateShield.call(this,ownerSprite)};Window_CardGameHUD.prototype.updateHeartMeter=function(ownerSprite){Imported.Irina_CardGameMechanics.UpdateHealth.call(this,ownerSprite)};Window_CardGameHUD.prototype.updateBattleAnimation=function(ownerSprite){var owner=ownerSprite._owner;if(owner._animationData&&owner._animationData.animationId>0){var animation=$dataAnimations[owner._animationData.animationId];var mirror=owner._animationData.mirror;var delay=owner._animationData.delay;ownerSprite._animationTarget.startAnimation(animation,mirror,delay);owner.clearAnimation()}};Window_CardGameHUD.prototype.fadeOut=function(duration){var speed=duration>0?Math.floor(-255/duration):-255;speed=speed.clamp(-255,-1);this._imageHUDOpacitySpeed=speed;this._battlebackOpacitySpeed=speed;this._faceOpacitySpeed=speed;this._contentsOpacitySpeed=speed};function Window_CardGameHand(){this.initialize.apply(this,arguments)};Window_CardGameHand.prototype=Object.create(Window_HorzCommand.prototype);Window_CardGameHand.prototype.constructor=Window_CardGameHand;Window_CardGameHand.prototype.initialize=function(owner,x,y,width,height,scale){this._owner=owner;this._windowWidth=width;this._windowHeight=height;this._cardScale=scale||.4;this._movementDuration=0;Window_HorzCommand.prototype.initialize.call(this,x,y);this.deselect();this.opacity=0;this.refresh();this.deactivate()};Window_CardGameHand.prototype.standardPadding=function(){return 0};Window_CardGameHand.prototype.windowHeight=function(){return this._windowHeight};Window_CardGameHand.prototype.windowWidth=function(){return this._windowWidth};Window_CardGameHand.prototype.maxCols=function(){return Math.max(1,this.maxItems())};Window_CardGameHand.prototype.spacing=function(){return 0};Window_CardGameHand.prototype.itemWidth=function(){var cardWidth=Imported.Irina_CardGameMechanics.HandWindowCardWidth;var maxWidth=Math.ceil(cardWidth*this._cardScale)+8;return Math.min(maxWidth,Window_HorzCommand.prototype.itemWidth.call(this))};Window_CardGameHand.prototype.itemHeight=function(){return this._windowHeight};Window_CardGameHand.prototype.itemRect=function(index){if(this.maxItems()*this.itemWidth()<this.contents.width){var baseX=(this.contents.width-this.maxItems()*this.itemWidth())/2}else{var baseX=0}var rect=new Rectangle;var maxCols=this.maxCols();rect.width=this.itemWidth();rect.height=this.itemHeight();rect.x=index%maxCols*(rect.width+this.spacing())-this._scrollX+baseX;rect.y=Math.floor(index/maxCols)*rect.height-this._scrollY;return rect};Window_CardGameHand.prototype.updateCursor=function(){this.setCursorRect(0,0,0,0)};Window_CardGameHand.prototype.activate=function(){Window_HorzCommand.prototype.activate.call(this);this.processRefresh()};Window_CardGameHand.prototype.update=function(){Window_HorzCommand.prototype.update.call(this);this.updateRefresh();this.updateMove()};Window_CardGameHand.prototype.updateRefresh=function(){if(this._requestRefresh)this.processRefresh()};Window_CardGameHand.prototype.moveTo=function(x,y,duration){this._movementDuration=duration;this._moveTargetX=x;this._moveTargetY=y};Window_CardGameHand.prototype.updateMove=function(){if(this._movementDuration>0){var d=this._movementDuration;this.x=(this.x*(d-1)+this._moveTargetX)/d;this.y=(this.y*(d-1)+this._moveTargetY)/d;this._movementDuration--;if(this._movementDuration===0){this.x=this._moveTargetX;this.y=this._moveTargetY}$scene().sortCardGameCardSprites()}};Window_CardGameHand.prototype.refresh=function(){this._requestRefresh=true};Window_CardGameHand.prototype.processRefresh=function(){this._requestRefresh=false;Window_HorzCommand.prototype.refresh.call(this)};Window_CardGameHand.prototype.makeCommandList=function(){for(var i=0;i<this._owner.hand.length;i++){var card=this._owner.hand[i];if(!card)continue;var enabled=this.isEnabled(card);this.addCommand("","handCard",enabled,card)}this.addSkipTurnCard();$scene().sortCardGameCardSprites()};Window_CardGameHand.prototype.isEnabled=function(card){return true};Window_CardGameHand.prototype.addSkipTurnCard=function(){if(!this.active&&!Imported.Irina_CardGameMechanics.AlwaysShowSkip)return;if(this._owner!==$cardPlayer()&&this._list.length>0)return;if($gameVariables.value(Imported.Irina_CardGameMechanics.PhaseTrackerVariable)<=0)return;if(this._owner.battleCard===this._owner.skipCard)return;if(Imported.Irina_CardGameMechanics.AlwaysShowSkip||this._list.length<=0){this.addCommand("","handCard",true,this._owner.skipCard)}};Window_CardGameHand.prototype.isMousePositionChanged=function(){return this._lastWindowX!==this.x||this._lastWindowY!==this.y||this._lastMouseX!==TouchInput._mouseOverX||this._lastMouseY!==TouchInput._mouseOverY};Window_CardGameHand.prototype.updateMousePositions=function(){this._lastWindowX=this.x;this._lastWindowY=this.y;this._lastMouseX=TouchInput._mouseOverX;this._lastMouseY=TouchInput._mouseOverY};Window_CardGameHand.prototype.processTouch=function(){if(this.isMouseInsideFrame()){if(TouchInput.isTriggered()||TouchInput.isCancelled()){Window_HorzCommand.prototype.processTouch.call(this)}else if(!$selectedCard){this.updateAutoCursorSelect()}}else if(this.isMousePositionChanged()){this.updateMousePositions();if(!$selectedCard)this.deselect()}};Window_CardGameHand.prototype.updateAutoCursorSelect=function(){if(!this.isMousePositionChanged())return;this.updateMousePositions();var x=this.canvasToLocalX(TouchInput._mouseOverX);var y=this.canvasToLocalY(TouchInput._mouseOverY);var hitIndex=this.hitTest(x,y);if(hitIndex>=0&&hitIndex!==this.index()){this.select(hitIndex)}};Window_CardGameHand.prototype.select=function(index){Window_HorzCommand.prototype.select.call(this,index);$scene().sortCardGameCardSprites()};Window_CardGameHand.prototype.callOkHandler=function(){$gameTemp._targetCardGameHandWindow=this;Window_HorzCommand.prototype.callOkHandler.call(this)};Window_CardGameHand.prototype.cursorPageup=function(){if(!this._browserWindow)return;this._browserWindow.processPilePageup()};Window_CardGameHand.prototype.cursorPagedown=function(){if(!this._browserWindow)return;this._browserWindow.processPilePagedown()};function Window_CardGameBattleList(){this.initialize.apply(this,arguments)}Window_CardGameBattleList.prototype=Object.create(Window_HorzCommand.prototype);Window_CardGameBattleList.prototype.constructor=Window_CardGameBattleList;Window_CardGameBattleList.prototype.initialize=function(){this._windowWidth=Graphics.boxWidth-this.lineHeight()*8;this._windowHeight=Graphics.boxHeight;var x=(Graphics.boxWidth-this._windowWidth)/2;this._cardList=[];this._cardScale=Imported.Irina_CardGameMechanics.ListWindowCardScale;this._registeredPileIndex=-1;this._registeredPiles=[];Window_HorzCommand.prototype.initialize.call(this,x,0);this.createSpriteContainer();this.drawBackground();this.deselect();this.opacity=0;this.refresh();this.hide();this.deactivate()};Window_CardGameBattleList.prototype.createSpriteContainer=function(){this._spriteContainer=new Sprite;this.addChildToBack(this._spriteContainer);this._spriteContainer.x=(Graphics.boxWidth-this._windowWidth)/-2};Window_CardGameBattleList.prototype.drawBackground=function(){this._backBitmap=new Bitmap(Graphics.boxWidth,Graphics.boxHeight);this._backSprite=new Sprite;this._backSprite.bitmap=this._backBitmap;this._backSprite.x=(Graphics.boxWidth-this._windowWidth)/-2;this._backSprite.y=this.y;this.addChildToBack(this._backSprite);var color=this.dimColor1();this._backBitmap.clear();this._backBitmap.fillRect(0,0,this._backBitmap.width,this._backBitmap.height,color)};Window_CardGameBattleList.prototype.standardPadding=function(){return 0};Window_CardGameBattleList.prototype.windowHeight=function(){return this._windowHeight};Window_CardGameBattleList.prototype.windowWidth=function(){return this._windowWidth};Window_CardGameBattleList.prototype.maxCols=function(){return Math.max(1,this.maxItems())};Window_CardGameBattleList.prototype.spacing=function(){return 0};Window_CardGameBattleList.prototype.itemWidth=function(){var cardWidth=Imported.Irina_CardGameMechanics.HandWindowCardWidth;var maxWidth=Math.ceil(cardWidth*this._cardScale)+8;return Math.min(maxWidth,Window_HorzCommand.prototype.itemWidth.call(this))};Window_CardGameBattleList.prototype.itemHeight=function(){return this._windowHeight};Window_CardGameBattleList.prototype.itemRect=function(index){if(this.maxItems()*this.itemWidth()<this.contents.width){var baseX=(this.contents.width-this.maxItems()*this.itemWidth())/2}else{var baseX=0}var rect=new Rectangle;var maxCols=this.maxCols();rect.width=this.itemWidth();rect.height=this.itemHeight();rect.x=index%maxCols*(rect.width+this.spacing())-this._scrollX+baseX;rect.y=Math.floor(index/maxCols)*rect.height-this._scrollY;return rect};Window_CardGameBattleList.prototype.updateCursor=function(){this.setCursorRect(0,0,0,0)};Window_CardGameBattleList.prototype.update=function(){Window_HorzCommand.prototype.update.call(this);this.updateRefresh()};Window_CardGameBattleList.prototype.updateRefresh=function(){if(this._requestRefresh)this.processRefresh()};Window_CardGameBattleList.prototype.refresh=function(){this._requestRefresh=true};Window_CardGameBattleList.prototype.processRefresh=function(){this._requestRefresh=false;this.clearCommandList();this.makeCommandList();this.createContents();Window_Selectable.prototype.refresh.call(this);this.drawTextData()};Window_CardGameBattleList.prototype.drawTextData=function(){Imported.Irina_CardGameMechanics.ListWindowDrawText.call(this)};Window_CardGameBattleList.prototype.setupList=function(array,text){this._cardList=array.clone();this._text=text||"";this.processRefresh();this.show();this.activate();this.select(0)};Window_CardGameBattleList.prototype.clearData=function(){for(var i=0;i<this._cardList.length;i++){var card=this._cardList[i];if(!card)continue;card.sprite()._backShowing=card.sprite()._originalBackShowing;card.sprite()._originalBackShowing=undefined}this._cardList=[];this.refresh();this.hide();this.deactivate();this._spriteContainer.removeChildren();$scene().sortCardGameCardSprites()};Window_CardGameBattleList.prototype.makeCommandList=function(){this._cardList=this._cardList||[];for(var i=0;i<this._cardList.length;i++){var card=this._cardList[i];if(!card)continue;var enabled=this.isEnabled(card);if(card.sprite()._originalBackShowing===undefined){card.sprite()._originalBackShowing=card.sprite()._backShowing}card.sprite()._backShowing=false;this.addCommand("","selection",enabled,card)}$scene().sortCardGameCardSprites()};Window_CardGameBattleList.prototype.drawItem=function(index){};Window_CardGameBattleList.prototype.isEnabled=function(card){return true};Window_CardGameBattleList.prototype.isMousePositionChanged=function(){return this._lastWindowX!==this.x||this._lastWindowY!==this.y||this._lastMouseX!==(TouchInput._mouseOverX||0)||this._lastMouseY!==(TouchInput._mouseOverY||0)};Window_CardGameBattleList.prototype.updateMousePositions=function(){this._lastWindowX=this.x;this._lastWindowY=this.y;this._lastMouseX=TouchInput._mouseOverX||0;this._lastMouseY=TouchInput._mouseOverY||0};Window_CardGameBattleList.prototype.processTouch=function(){if(TouchInput.isTriggered()||TouchInput.isCancelled()){if(this._handWindow&&this.visible){this.processCancel()}else if(this.isRegisteredPileClicked()){return}else{Window_HorzCommand.prototype.processTouch.call(this)}}else{this.updateAutoCursorSelect()}};Window_CardGameBattleList.prototype.updateAutoCursorSelect=function(){if(!this.isMousePositionChanged())return;if(!this.active)return;this.updateMousePositions();var x=this.canvasToLocalX(TouchInput._mouseOverX);var y=this.canvasToLocalY(TouchInput._mouseOverY);var hitIndex=this.hitTest(x,y);if(hitIndex>=0&&hitIndex!==this.index()){this.select(hitIndex)}else if(x<0){this.select(0)}else if(x>=this.width){this.select(this.maxItems()-1)}};Window_CardGameBattleList.prototype.select=function(index){Window_HorzCommand.prototype.select.call(this,index);$scene().sortCardGameCardSprites()};Window_CardGameBattleList.prototype.setHandWindow=function(handWindow){this._handWindow=handWindow;handWindow._browserWindow=this};Window_CardGameBattleList.prototype.registerPile=function(pile,rect,text){rect.width+=rect.x;rect.height+=rect.y;var obj={pile:pile,rect:rect,text:text};this._registeredPiles.push(obj);if(this._registeredPiles.length>0){this._registeredPiles.sort(function(a,b){var ay=a.rect.y;var by=b.rect.y;if(ay!==by)return ay-by;var ax=a.rect.x;var bx=b.rect.x;return ax-bx})}};Window_CardGameBattleList.prototype.isRegisteredPileClicked=function(){if(!this._handWindow)return false;if(!this._handWindow.active)return false;if(!TouchInput.isTriggered())return false;for(var i=0;i<this._registeredPiles.length;i++){var data=this._registeredPiles[i];if(data.pile.length<=0)continue;var rect=data.rect;var x=TouchInput.x;var y=TouchInput.y;if(x>=rect.x&&y>=rect.y&&x<rect.width&&y<rect.height){this.processPileChange(data);return true}}return false};Window_CardGameBattleList.prototype.processPileChange=function(data){Input.clear();TouchInput.clear();if(this._handWindow._lastSavedIndex===undefined)this._handWindow._lastSavedIndex=this._handWindow.index();this._handWindow.deactivate();var array=data.pile;var text=data.text;this._registeredPileIndex=this._registeredPiles.indexOf(data);this.setupList(array,text);$scene().sortCardGameCardSprites()};Window_CardGameBattleList.prototype.cursorPageup=function(){if(!this._handWindow)return;this.processPilePageup()};Window_CardGameBattleList.prototype.cursorPagedown=function(){if(!this._handWindow)return;this.processPilePagedown()};Window_CardGameBattleList.prototype.processPilePageup=function(){if(!this.checkPileTabbingValid())return;while(true){this._registeredPileIndex--;if(this._registeredPileIndex<0)this._registeredPileIndex=this._registeredPiles.length-1;var data=this._registeredPiles[this._registeredPileIndex];if(data.pile.length>0)return this.processPileChange(data)}};Window_CardGameBattleList.prototype.processPilePagedown=function(){if(!this.checkPileTabbingValid())return;while(true){this._registeredPileIndex++;if(this._registeredPileIndex>this._registeredPiles.length-1)this._registeredPileIndex=0;var data=this._registeredPiles[this._registeredPileIndex];if(data.pile.length>0)return this.processPileChange(data)}};Window_CardGameBattleList.prototype.checkPileTabbingValid=function(){for(var i=0;i<this._registeredPiles.length;i++){if(this._registeredPiles[i].pile.length>0)return true}return false};Scene_Map.prototype.sortCardGameCardSprites=function(){this._requestCardGameSort=true};Imported.Irina_CardGameMechanics.Scene_Map_update=Scene_Map.prototype.update;Scene_Map.prototype.update=function(){if(this._requestCardGameSort)this.processCardGameCardSpriteSorting();Imported.Irina_CardGameMechanics.Scene_Map_update.call(this)};Scene_Map.prototype.processCardGameCardSpriteSorting=function(){if(!this.cardContainer())return;this._requestCardGameSort=false;if(this._cardGameBattleListWindow&&this._cardGameBattleListWindow.active){this.sortCardGameListWindowCards()}else if(this._cardGameBattleBrowseWindow&&this._cardGameBattleBrowseWindow.active){this.sortSkipCards();this.sortCardGameOpponentCards();this.sortCardGamePlayerCards();this.sortCardGameBrowserWindowCards()}else if(this.cardContainer().children.length>0){this.sortSkipCards();this.sortCardGameOpponentCards();this.sortCardGamePlayerCards();this.sortCardGameActiveCards()}};Scene_Map.prototype.setCardGameOpponents=function(){this._cardGameOpponents=[];for(var i=0;i<arguments.length;i++){this._cardGameOpponents.push($cardOpponent(arguments[i]))}};Scene_Map.prototype.getCardGameOpponents=function(){return this._cardGameOpponents||[]};Scene_Map.prototype.sortSkipCards=function(){var owners=[$cardPlayer()].concat(this.getCardGameOpponents());for(var i=0;i<owners.length;i++){var owner=owners[i];if(owner.skipCard&&owner.skipCard.sprite()){if(owner.skipCard===$selectedCard)continue;if(owner.skipCard===owner.battleCard)continue;var sprite=owner.skipCard.sprite();sprite.dontAnimateFront(false);this.repositionCardSprite(sprite);Imported.Irina_CardGameMechanics.SortSkipCards.call(this,owner)}}};Scene_Map.prototype.sortCardGameOpponentCards=function(){var opponents=this.getCardGameOpponents();for(var o=0;o<opponents.length;o++){var opponent=opponents[o];if(opponent._customPiles)this.sortCardGameCustomPilesFor(opponent)}for(var o=0;o<opponents.length;o++){var opponent=opponents[o];if(opponent.pileA)this.sortCardGameSummonFor(opponent);if(opponent.discard)this.sortCardGameDiscardFor(opponent)}for(var o=0;o<opponents.length;o++){var opponent=opponents[o];if(opponent.exhaust)this.sortCardGameExhaustFor(opponent)}for(var o=0;o<opponents.length;o++){var opponent=opponents[o];if(opponent.library)this.sortCardGameLibraryFor(opponent)}for(var o=0;o<opponents.length;o++){var opponent=opponents[o];if(opponent.hand)this.sortCardGameHandFor(opponent)}};Scene_Map.prototype.sortCardGamePlayerCards=function(){if($cardPlayer()._customPiles)this.sortCardGameCustomPilesFor($cardPlayer());if($cardPlayer().exhaust)this.sortCardGameExhaustFor($cardPlayer());if($cardPlayer().discard)this.sortCardGameDiscardFor($cardPlayer());if($cardPlayer().pileA)this.sortCardGameSummonFor($cardPlayer());if($cardPlayer().library)this.sortCardGameLibraryFor($cardPlayer());if($cardPlayer().hand)this.sortCardGameHandFor($cardPlayer())};Scene_Map.prototype.sortCardGameActiveCards=function(){var array=[];var opponents=this.getCardGameOpponents();for(var o=0;o<opponents.length;o++){var opponent=opponents[o];if(opponent.battleCard)array.push(opponent.battleCard)}if($cardPlayer().battleCard)array.push($cardPlayer().battleCard);if($selectedCard)array.push($selectedCard);if($spotlightCard){array.push($spotlightCard);var sprite=$spotlightCard.sprite();if(sprite){Imported.Irina_CardGameMechanics.SortSpotlightCard.call(this,sprite._owner,sprite)}}for(var i=0;i<array.length;i++){var sprite=array[i].sprite();if(sprite){sprite.dontAnimateFront(false);this.repositionCardSprite(sprite)}}};Scene_Map.prototype.repositionCardSprite=function(sprite){this.cardContainer().removeChild(sprite);this.cardContainer().addChild(sprite)};Scene_Map.prototype.sortCardGameCustomPilesFor=function(owner){var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(var l=0;l<letters.length;l++){letter=letters[l];var key="pile"+letter;if(owner._customPiles[key]){var pile=owner._customPiles[key];if(pile)this.sortCardGameCustomPileLetter(owner,pile,letter)}}};Scene_Map.prototype.sortCardGameCustomPileLetter=function(owner,pile,letter){for(var i=0;i<pile.length;i++){var card=pile[i];if(card===$spotlightCard)continue;var sprite=card.sprite();sprite.dontAnimateFront(false);if(sprite){this.repositionCardSprite(sprite);var key="CustomPile"+letter;if(Imported.Irina_CardGameMechanics[key]){Imported.Irina_CardGameMechanics[key].call(this,owner,sprite)}}}};Scene_Map.prototype.sortCardGameLibraryFor=function(owner){for(var i=0;i<owner.library.length;i++){var card=owner.library[i];if(card===$spotlightCard)continue;var sprite=card.sprite();if(sprite){sprite.dontAnimateFront(i<owner.library.length-1);this.repositionCardSprite(sprite);Imported.Irina_CardGameMechanics.SortLibrary.call(this,owner,sprite)}}};Scene_Map.prototype.sortCardGameDiscardFor=function(owner){for(var i=0;i<owner.discard.length;i++){var card=owner.discard[i];if(card===$spotlightCard)continue;var sprite=card.sprite();if(sprite){sprite.dontAnimateFront(i<owner.library.length-1);this.repositionCardSprite(sprite);Imported.Irina_CardGameMechanics.SortDiscard.call(this,owner,sprite)}}};Scene_Map.prototype.sortCardGameSummonFor=function(owner){for(var i=0;i<owner.pileA.length;i++){var card=owner.pileA[i];if(card===$spotlightCard)continue;var sprite=card.sprite();if(sprite){sprite.dontAnimateFront(i<owner.library.length-1);this.repositionCardSprite(sprite);Imported.Irina_CardGameMechanics.SortSummon.call(this,owner,sprite)}}};Scene_Map.prototype.sortCardGameExhaustFor=function(owner){for(var i=0;i<owner.exhaust.length;i++){var card=owner.exhaust[i];if(card===$spotlightCard)continue;var sprite=card.sprite();if(sprite){sprite.dontAnimateFront(i<owner.library.length-1);this.repositionCardSprite(sprite);Imported.Irina_CardGameMechanics.SortExhaust.call(this,owner,sprite)}}};Scene_Map.prototype.sortCardGameHandFor=function(owner){if(!this._cardGameHandWindows)return;if(!this._cardGameHandWindows[owner._id])return;var handWindow=this._cardGameHandWindows[owner._id];for(var i=0;i<handWindow._list.length;i++){var card=handWindow._list[i].ext;if(card===$spotlightCard)continue;var sprite=card.sprite();if(sprite){sprite.dontAnimateFront(false);this.repositionCardSprite(sprite);Imported.Irina_CardGameMechanics.SortHand.call(this,owner,sprite,i,handWindow)}}if(owner.battleCard)return;if(handWindow._owner!==$cardPlayer()&&!handWindow.isMouseInsideFrame())return;if(handWindow.index()>=0&&handWindow.index()<handWindow.maxItems()){var card=handWindow.currentExt();var sprite=card.sprite();if(sprite&&card.isRevealed()){this.repositionCardSprite(sprite);Imported.Irina_CardGameMechanics.SelectedHand.call(this,owner,sprite,handWindow)}}};Scene_Map.prototype.sortCardGameListWindowCards=function(){if(!this._cardGameBattleListWindow)return;var listWindow=this._cardGameBattleListWindow;for(var i=0;i<listWindow._cardList.length;i++){var card=listWindow._cardList[i];if(card===$spotlightCard)continue;var sprite=card.sprite();if(sprite){sprite.dontAnimateFront(false);this.cardContainer().removeChild(sprite);listWindow._spriteContainer.addChild(sprite);var owner=sprite._owner;Imported.Irina_CardGameMechanics.SortList.call(this,owner,sprite,i,listWindow)}}if(listWindow.index()>=0&&listWindow.index()<listWindow.maxItems()){var card=listWindow.currentExt();var sprite=card.sprite();if(sprite&&card.isRevealed()){sprite.dontAnimateFront(false);this.cardContainer().removeChild(sprite);listWindow._spriteContainer.addChild(sprite);Imported.Irina_CardGameMechanics.SelectedList.call(this,owner,sprite,listWindow)}}};Scene_Map.prototype.sortCardGameBrowserWindowCards=function(){if(!this._cardGameBattleBrowseWindow)return;var listWindow=this._cardGameBattleBrowseWindow;for(var i=0;i<listWindow._cardList.length;i++){var card=listWindow._cardList[i];if(card===$spotlightCard)continue;var sprite=card.sprite();if(sprite){sprite.dontAnimateFront(false);this.cardContainer().removeChild(sprite);listWindow._spriteContainer.addChild(sprite);var owner=sprite._owner;Imported.Irina_CardGameMechanics.SortList.call(this,owner,sprite,i,listWindow)}}if(listWindow.index()>=0&&listWindow.index()<listWindow.maxItems()){var card=listWindow.currentExt();var sprite=card.sprite();if(sprite&&card.isRevealed()){sprite.dontAnimateFront(false);this.cardContainer().removeChild(sprite);listWindow._spriteContainer.addChild(sprite);Imported.Irina_CardGameMechanics.SelectedList.call(this,owner,sprite,listWindow)}}};Imported.Irina_CardGameMechanics.Scene_Map_createAllWindows=Scene_Map.prototype.createAllWindows;Scene_Map.prototype.createAllWindows=function(){Imported.Irina_CardGameMechanics.Scene_Map_createAllWindows.call(this);this.createCardGameDeckSelect()};Scene_Map.prototype.createCardGameDeckSelect=function(){this._cardGameDeckSelectWindow=new Window_CardGameSelectDeck(this._messageWindow);this.addChild(this._cardGameDeckSelectWindow);this._cardGameDeckSelectWindow.setHandler("cancel",this.onCardGameDeckSelectCancel.bind(this));this._cardGameDeckSelectWindow.setHandler("selectDeck",this.onCardGameDeckSelectOk.bind(this))};Scene_Map.prototype.startPickPlayerDeck=function(ruleset){$gameMessage._deckChoice=true;this._cardGameDeckSelectWindow.setup(ruleset);this._active=false};Scene_Map.prototype.onCardGameDeckSelectCancel=function(){$cardPlayer().deck=null;this._cardGameDeckSelectWindow.close();this._active=true;this.update()};Scene_Map.prototype.onCardGameDeckSelectOk=function(){$cardPlayer().deck=this._cardGameDeckSelectWindow.currentExt();this._cardGameDeckSelectWindow.close();this._active=true;this.update()};Scene_Map.prototype.createCardGameHUDWindow=function(){$wait(10);if(this._cardContainer)this.removeChild(this._cardContainer);this._cardContainer=new Sprite;if(this._cardGameHUDWindow)this.removeChild(this._cardGameHUDWindow);this._cardGameHUDWindow=new Window_CardGameHUD;var index=this.children.indexOf(this._windowLayer);if(index>=0)this.addChildAt(this._cardGameHUDWindow,index+0);this._cardGameHUDWindow._spritesetContainer.addChild(this._spriteset._pictureContainer);this._cardGameHUDWindow._spritesetContainer.addChild(this._spriteset._weather);this._cardGameHUDWindow.addChild(this._cardContainer);if(index>=0)this.addChildAt(this._spriteset._timerSprite,index+1);if(index>=0)this.addChildAt(this._spriteset._flashSprite,index+2);if(index>=0)this.addChildAt(this._spriteset._fadeSprite,index+3)};Scene_Map.prototype.refreshCardGameHUD=function(){if(this._cardGameHUDWindow)this._cardGameHUDWindow.refresh()};Scene_Map.prototype.fadeOutCardGameHUDWindow=function(duration){if(duration===undefined)duration=60;this._cardGameHUDWindow.fadeOut(duration);var frames=1e3/60;this.deactivateCardGameWindows();setTimeout(this.removeCardGameElements.bind(this),frames*duration)};Scene_Map.prototype.removeCardGameElements=function(){this.removeCardGameWindows();this.removeCardGameSprites();this.returnChildrenToSpriteset()};Scene_Map.prototype.deactivateCardGameWindows=function(){if(this._cardGameHandWindows){for(var key in this._cardGameHandWindows){var win=this._cardGameHandWindows[key];win.deactivate();win.deselect()}}};Scene_Map.prototype.removeCardGameWindows=function(){this.removeChild(this._cardGameHUDWindow);if(this._cardGameHandWindows){for(var key in this._cardGameHandWindows){var win=this._cardGameHandWindows[key];this.removeChild(win)}this._cardGameHandWindows=undefined}};Scene_Map.prototype.removeCardGameSprites=function(){CardManager._sprites=[];this._cardContainer=undefined};Scene_Map.prototype.returnChildrenToSpriteset=function(){this.removeChild(this._spriteset._pictureContainer);this.removeChild(this._spriteset._weather);this.removeChild(this._spriteset._timerSprite);this.removeChild(this._spriteset._flashSprite);this.removeChild(this._spriteset._fadeSprite);var index=this._spriteset.children.indexOf(this._spriteset._baseSprite);this._spriteset.addChildAt(this._spriteset._pictureContainer,index+1);this._spriteset.addChildAt(this._spriteset._weather,index+2);this._spriteset.addChildAt(this._spriteset._timerSprite,index+3);this._spriteset.addChildAt(this._spriteset._flashSprite,index+4);this._spriteset.addChildAt(this._spriteset._fadeSprite,index+5)};Scene_Map.prototype.fadeOutPlayableCards=function(duration){if(duration===undefined)duration=60;for(var i=0;i<this._cardContainer.children.length;i++){var sprite=this._cardContainer.children[i];if(sprite)sprite.fadeTo(0,duration)}var frame=1e3/60;setTimeout(this.removeChildren.bind(this._cardContainer),frame*duration)};Scene_Map.prototype.createCardGameHandWindow=function(owner,x,y,width,height,scale){this._cardGameHandWindows=this._cardGameHandWindows||{};this._cardGameHandWindows[owner._id]=new Window_CardGameHand(owner,x,y,width,height,scale);var index=this.children.indexOf(this._windowLayer);if(index>=0)this.addChildAt(this._cardGameHandWindows[owner._id],index);this._cardGameHandWindows[owner._id].setHandler("handCard",this.onCardGameHandSelect.bind(this))};Scene_Map.prototype.refreshCardGameHandWindow=function(owner){if(this._cardGameHandWindows&&this._cardGameHandWindows[owner._id]){this._cardGameHandWindows[owner._id].refresh()}};Scene_Map.prototype.activateCardGameHandWindow=function(owner){if(this._cardGameHandWindows&&this._cardGameHandWindows[owner._id]){var win=this._cardGameHandWindows[owner._id];win.activate();if(win.index()<0||win.index()>=win.maxItems()){win.select(0)}this._active=false;$wait(10)}};Scene_Map.prototype.moveCardGameHandWindow=function(owner,x,y,duration){if(this._cardGameHandWindows&&this._cardGameHandWindows[owner._id]){this._cardGameHandWindows[owner._id].moveTo(x,y,duration)}};Scene_Map.prototype.onCardGameHandSelect=function(){var win=$gameTemp._targetCardGameHandWindow;if(!win)return;$selectedCard=win.currentExt();this._active=true;this.update()};Scene_Map.prototype.createCardGameBattleListWindow=function(){this._cardGameBattleListWindow=new Window_CardGameBattleList;var index=this.children.indexOf(this._windowLayer);if(index>=0)this.addChildAt(this._cardGameBattleListWindow,index);this._cardGameBattleListWindow.setHandler("selection",this.onCardGameBattleListSelection.bind(this))};Scene_Map.prototype.removeCardGameBattleListWindow=function(){this.removeChild(this._cardGameBattleListWindow);this._cardGameBattleListWindow=undefined};Scene_Map.prototype.setupCardGameBattleListWindow=function(list,text){if(!this._cardGameBattleListWindow)this.createCardGameBattleListWindow();if(!$userCardPlayer)return;if($userCardPlayer._id>0)return;this._cardGameBattleListWindow.setupList(list,text);this._active=false;$wait(10)};Scene_Map.prototype.onCardGameBattleListSelection=function(){$pickedCard=this._cardGameBattleListWindow.currentExt();this._cardGameBattleListWindow.clearData();this._active=true;$wait(10)};Scene_Map.prototype.createCardGameBattleBrowseWindow=function(){this._cardGameBattleBrowseWindow=new Window_CardGameBattleList;var index=this.children.indexOf(this._windowLayer);if(index>=0)this.addChildAt(this._cardGameBattleBrowseWindow,index);this._cardGameBattleBrowseWindow.setHandler("cancel",this.onCardGameBattleBrowseCancel.bind(this));this._cardGameBattleBrowseWindow.setHandler("selection",this.onCardGameBattleBrowseCancel.bind(this));if(this._cardGameHandWindows&&this._cardGameHandWindows[0]){this._cardGameBattleBrowseWindow.setHandWindow(this._cardGameHandWindows[0])}};Scene_Map.prototype.removeCardGameBattleBrowserWindow=function(){this.removeChild(this._cardGameBattleBrowseWindow);this._cardGameBattleBrowseWindow=undefined};Scene_Map.prototype.setupCardGameBattleBrowseWindow=function(list,text){if(!this._cardGameBattleBrowseWindow)this.createCardGameBattleBrowseWindow();this._cardGameBattleBrowseWindow.setupList(list,text)};Scene_Map.prototype.onCardGameBattleBrowseCancel=function(){this._cardGameBattleBrowseWindow.clearData();if(!this._cardGameBattleBrowseWindow._handWindow)return;this._cardGameBattleBrowseWindow._handWindow.activate();this._cardGameBattleBrowseWindow._handWindow.select(this._cardGameBattleBrowseWindow._handWindow._lastSavedIndex);if(this._cardGameBattleBrowseWindow._handWindow.index()<0)this._cardGameBattleBrowseWindow._handWindow.select(0);this._cardGameBattleBrowseWindow._handWindow._lastSavedIndex=undefined;this._cardGameBattleBrowseWindow._registeredPileIndex=-1};Scene_Map.prototype.registerCardGamePileLocation=function(pile,rect,text){if(!this._cardGameBattleBrowseWindow)return;if(!pile)return;this._cardGameBattleBrowseWindow.registerPile(pile,rect,text)};Scene_Map.prototype.moveChoiceWindowToCard=function(card){this._messageWindow._choiceWindow._updatePlacementToCard=card};Imported.Irina_CardGameMechanics.Window_ChoiceList_updatePlacement=Window_ChoiceList.prototype.updatePlacement;Window_ChoiceList.prototype.updatePlacement=function(){Imported.Irina_CardGameMechanics.Window_ChoiceList_updatePlacement.call(this);if(this._updatePlacementToCard)this.updatePlacementToCardPosition()};Window_ChoiceList.prototype.updatePlacementToCardPosition=function(){var card=this._updatePlacementToCard;this.x=card.sprite().x-this.width/2;this.y=card.sprite().y-card.sprite().height/2+this.lineHeight()*1.5;this._updatePlacementToCard=undefined};Window_ChoiceList.prototype.maxChoiceWidth=function(){var maxWidth=96;var choices=$gameMessage.choices();for(var i=0;i<choices.length;i++){if(Imported.YEP_X_ExtMesPack1&&!$gameSystem.isChoiceShown(i))continue;var text=choices[i];text=text.replace(/\\/g,"");text=text.replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this));text=text.replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this));var choiceWidth=this.textWidthEx(text)+this.textPadding()*2;if(maxWidth<choiceWidth){maxWidth=choiceWidth}}return maxWidth};Window_ChoiceList.prototype.addCommand=function(name,symbol,enabled,ext){name=name.replace(/\\/g,"");name=name.replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this));name=name.replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this));Window_Command.prototype.addCommand.call(this,name,symbol,enabled,ext)}
