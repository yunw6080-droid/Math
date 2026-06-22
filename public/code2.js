gdjs._49Code = {};
gdjs._49Code.localVariables = [];
gdjs._49Code.idToCallbackMap = new Map();
gdjs._49Code.GDHomeObjects1= [];
gdjs._49Code.GDHomeObjects2= [];
gdjs._49Code.GDNewTextObjects1= [];
gdjs._49Code.GDNewTextObjects2= [];
gdjs._49Code.GDNewPanelSpriteObjects1= [];
gdjs._49Code.GDNewPanelSpriteObjects2= [];
gdjs._49Code.GDNewText2Objects1= [];
gdjs._49Code.GDNewText2Objects2= [];


gdjs._49Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "3秒");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "3秒") >= 3;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "3秒") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}
}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDHomeObjects1.length = 0;
gdjs._49Code.GDHomeObjects2.length = 0;
gdjs._49Code.GDNewTextObjects1.length = 0;
gdjs._49Code.GDNewTextObjects2.length = 0;
gdjs._49Code.GDNewPanelSpriteObjects1.length = 0;
gdjs._49Code.GDNewPanelSpriteObjects2.length = 0;
gdjs._49Code.GDNewText2Objects1.length = 0;
gdjs._49Code.GDNewText2Objects2.length = 0;

gdjs._49Code.eventsList0(runtimeScene);
gdjs._49Code.GDHomeObjects1.length = 0;
gdjs._49Code.GDHomeObjects2.length = 0;
gdjs._49Code.GDNewTextObjects1.length = 0;
gdjs._49Code.GDNewTextObjects2.length = 0;
gdjs._49Code.GDNewPanelSpriteObjects1.length = 0;
gdjs._49Code.GDNewPanelSpriteObjects2.length = 0;
gdjs._49Code.GDNewText2Objects1.length = 0;
gdjs._49Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_49Code'] = gdjs._49Code;
