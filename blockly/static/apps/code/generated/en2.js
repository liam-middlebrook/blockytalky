// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="subtitle">a visual programming environment</span><span id="httpRequestError">There was a problem with the request.</span><span id="blocklyMessage">Blockly</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span></div>' + codepage.start(null, null, opt_ijData) + graphpage.start(null, null, opt_ijData) + mazepage.start(null, null, opt_ijData) + planepage.start(null, null, opt_ijData) + puzzlepage.start(null, null, opt_ijData) + turtlepage.start(null, null, opt_ijData);
};

;
// This file was automatically generated from template2.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="badXml">Error parsing XML:\\n%1\\n\\nAbandon changes?</span><span id="badCode">Program error:\\n%1</span><span id="timeout">Maximum execution iterations exceeded.</span><span id="discard">Delete all %1 blocks?</span></div><table width="100%" height="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Code</span></h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr><tr><td colspan=2><table><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon" onclick="tabClick(this.id)">Blocks</td><td class="tabmin">&nbsp;</td><td id="tab_javascript" class="taboff" onclick="tabClick(this.id)">JavaScript</td><td class="tabmin">&nbsp;</td><td id="tab_python" class="taboff" onclick="tabClick(this.id)">Python</td><td class="tabmin">&nbsp;</td><td id="tab_xml" class="taboff" onclick="tabClick(this.id)">XML</td><td class="tabmax"><button title="Discard all blocks." onclick="discard(); renderContent();"><img src=\'../../media/1x1.gif\' class="trash icon21"></button> <button id="linkButton" title="Save and link to blocks." onclick="BlocklyStorage.link()"><img src=\'../../media/1x1.gif\' class="link icon21"></button> <button title="Run the program defined by the blocks in the workspace." class="launch" onclick="runJS()"><img src=\'../../media/1x1.gif\' class="run icon21"></button></td></tr></table></td></tr><tr><td height="99%" colspan=2>' + codepage.toolbox(null, null, opt_ijData) + '<iframe id="content_blocks" src="frame2.html?' + soy.$$escapeHtml(opt_ijData.langSrc) + '"></iframe><pre id="content_javascript"></pre><pre id="content_python"></pre><div id="content_xml"><textarea id="textarea_xml"></textarea></div></td></tr></table>';
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="BT Messaging"><block type="messaging_tell"></block><block type="messaging_print"></block><block type="messaging_source"></block><block type="messaging_content"></block><block type="create_osc_message"></block><block type="send_osc_message"></block></category><category name="Facebook"><block type="facebook_post"></block><block type="facebook_poke"></block></category><category name="Motors"><block type="motor_set"></block><block type="motor_servo"></block><block type="motor_zero"></block><block type="motor_get_encoder"></block><!-- <block type="motor_all_stop"></block> --></category><category name="Sensors/LEDs"><block type="sensor_light"></block><block type="sensor_touch"></block><block type="led_set"></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block><block type="time_sleep"></block><block type="print_print"></block></category><category name="Math"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Text"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><block type="text"></block></value></block><block type="text_length"></block><block type="text_isEmpty"></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_changeCase"></block><block type="text_trim"></block><block type="text_print"></block><block type="text_prompt"></block></category><category name="Lists"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block></category><category name="Colour"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Variables" custom="VARIABLE"></category><category name="Procedures" custom="PROCEDURE"></category><category name="Music" id="MUSIC"><block type="music_simple_play"></block><block type="music_simple_note"></block><block type="music_specific_note"></block><block type="music_simple_rest"></block><block type="music_play_with"></block><block type="music_instrument"></block><block type="music_drumkit_note"></block><block type="music_start_playing_with"></block><block type="music_stop_playing"></block><block type="music_on_beat_play_with"></block><block type="music_on_beat_start_playing_with"></block><block type="music_on_beat_stop_playing"></block><block type="music_create_phrase"></block></category></xml>';
};
