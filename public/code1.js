gdjs.chooseCode = {};
gdjs.chooseCode.localVariables = [];
gdjs.chooseCode.idToCallbackMap = new Map();
gdjs.chooseCode.GDSaveObjects1= [];
gdjs.chooseCode.GDSaveObjects2= [];
gdjs.chooseCode.GDDidn_9595t_9595saveObjects1= [];
gdjs.chooseCode.GDDidn_9595t_9595saveObjects2= [];
gdjs.chooseCode.GDNewTextObjects1= [];
gdjs.chooseCode.GDNewTextObjects2= [];
gdjs.chooseCode.GDNewSpriteObjects1= [];
gdjs.chooseCode.GDNewSpriteObjects2= [];
gdjs.chooseCode.GDNewPanelSpriteObjects1= [];
gdjs.chooseCode.GDNewPanelSpriteObjects2= [];
gdjs.chooseCode.GDNewText2Objects1= [];
gdjs.chooseCode.GDNewText2Objects2= [];
gdjs.chooseCode.GDNewText3Objects1= [];
gdjs.chooseCode.GDNewText3Objects2= [];
gdjs.chooseCode.GDNewText4Objects1= [];
gdjs.chooseCode.GDNewText4Objects2= [];
gdjs.chooseCode.GDNewText5Objects1= [];
gdjs.chooseCode.GDNewText5Objects2= [];
gdjs.chooseCode.GDNewText6Objects1= [];
gdjs.chooseCode.GDNewText6Objects2= [];
gdjs.chooseCode.GDNewText7Objects1= [];
gdjs.chooseCode.GDNewText7Objects2= [];
gdjs.chooseCode.GDNewText8Objects1= [];
gdjs.chooseCode.GDNewText8Objects2= [];


gdjs.chooseCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.chooseCode.GDNewSpriteObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{for(var i = 0, len = gdjs.chooseCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.chooseCode.GDNewSpriteObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "Left", null);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.chooseCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.chooseCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.chooseCode.GDNewSpriteObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game01", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.chooseCode.GDSaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chooseCode.GDSaveObjects1.length;i<l;++i) {
    if ( gdjs.chooseCode.GDSaveObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.chooseCode.GDSaveObjects1[k] = gdjs.chooseCode.GDSaveObjects1[i];
        ++k;
    }
}
gdjs.chooseCode.GDSaveObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game01", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "Right", null);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.chooseCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.chooseCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.chooseCode.GDNewSpriteObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Didn_t_save"), gdjs.chooseCode.GDDidn_9595t_9595saveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chooseCode.GDDidn_9595t_9595saveObjects1.length;i<l;++i) {
    if ( gdjs.chooseCode.GDDidn_9595t_9595saveObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.chooseCode.GDDidn_9595t_9595saveObjects1[k] = gdjs.chooseCode.GDDidn_9595t_9595saveObjects1[i];
        ++k;
    }
}
gdjs.chooseCode.GDDidn_9595t_9595saveObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "intro") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15556724);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


};

gdjs.chooseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chooseCode.GDSaveObjects1.length = 0;
gdjs.chooseCode.GDSaveObjects2.length = 0;
gdjs.chooseCode.GDDidn_9595t_9595saveObjects1.length = 0;
gdjs.chooseCode.GDDidn_9595t_9595saveObjects2.length = 0;
gdjs.chooseCode.GDNewTextObjects1.length = 0;
gdjs.chooseCode.GDNewTextObjects2.length = 0;
gdjs.chooseCode.GDNewSpriteObjects1.length = 0;
gdjs.chooseCode.GDNewSpriteObjects2.length = 0;
gdjs.chooseCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.chooseCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.chooseCode.GDNewText2Objects1.length = 0;
gdjs.chooseCode.GDNewText2Objects2.length = 0;
gdjs.chooseCode.GDNewText3Objects1.length = 0;
gdjs.chooseCode.GDNewText3Objects2.length = 0;
gdjs.chooseCode.GDNewText4Objects1.length = 0;
gdjs.chooseCode.GDNewText4Objects2.length = 0;
gdjs.chooseCode.GDNewText5Objects1.length = 0;
gdjs.chooseCode.GDNewText5Objects2.length = 0;
gdjs.chooseCode.GDNewText6Objects1.length = 0;
gdjs.chooseCode.GDNewText6Objects2.length = 0;
gdjs.chooseCode.GDNewText7Objects1.length = 0;
gdjs.chooseCode.GDNewText7Objects2.length = 0;
gdjs.chooseCode.GDNewText8Objects1.length = 0;
gdjs.chooseCode.GDNewText8Objects2.length = 0;

gdjs.chooseCode.eventsList0(runtimeScene);
gdjs.chooseCode.GDSaveObjects1.length = 0;
gdjs.chooseCode.GDSaveObjects2.length = 0;
gdjs.chooseCode.GDDidn_9595t_9595saveObjects1.length = 0;
gdjs.chooseCode.GDDidn_9595t_9595saveObjects2.length = 0;
gdjs.chooseCode.GDNewTextObjects1.length = 0;
gdjs.chooseCode.GDNewTextObjects2.length = 0;
gdjs.chooseCode.GDNewSpriteObjects1.length = 0;
gdjs.chooseCode.GDNewSpriteObjects2.length = 0;
gdjs.chooseCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.chooseCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.chooseCode.GDNewText2Objects1.length = 0;
gdjs.chooseCode.GDNewText2Objects2.length = 0;
gdjs.chooseCode.GDNewText3Objects1.length = 0;
gdjs.chooseCode.GDNewText3Objects2.length = 0;
gdjs.chooseCode.GDNewText4Objects1.length = 0;
gdjs.chooseCode.GDNewText4Objects2.length = 0;
gdjs.chooseCode.GDNewText5Objects1.length = 0;
gdjs.chooseCode.GDNewText5Objects2.length = 0;
gdjs.chooseCode.GDNewText6Objects1.length = 0;
gdjs.chooseCode.GDNewText6Objects2.length = 0;
gdjs.chooseCode.GDNewText7Objects1.length = 0;
gdjs.chooseCode.GDNewText7Objects2.length = 0;
gdjs.chooseCode.GDNewText8Objects1.length = 0;
gdjs.chooseCode.GDNewText8Objects2.length = 0;


return;

}

gdjs['chooseCode'] = gdjs.chooseCode;
